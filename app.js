const sections = document.querySelector('#menu-sections');
const navigation = document.querySelector('#category-links');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let paused = false;
let storedLanguage;
try { storedLanguage = localStorage.getItem('temak-language'); } catch { /* Storage may be unavailable in private browsers. */ }
let language = initialLanguage(storedLanguage, navigator.language);
const motionButton = document.querySelector('#motion-toggle');
const heroScroll = document.querySelector('.hero-scroll');
const hero = document.querySelector('.hero');
const scrollIndicator = document.querySelector('.scroll-track i');
const saucePhoto = document.querySelector('.sushi-sauce');
let displayedProgress = 0;
let lastFrameTime = 0;
let scrollDistance = 1;
let stickyTop = 0;
let scheduled = false;
let menuSections = [];
let menuLinks = [];
let reveal;
if ('IntersectionObserver' in window) {
 reveal = new IntersectionObserver(entries => entries.forEach(entry => {
  if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target);}
 }), {threshold:.12,rootMargin:'0px 0px -28px 0px'});
}
function watchReveal(element,index=0){
 if(reveal&&!paused&&!reduced.matches){
  element.classList.add('reveal');element.style.setProperty('--reveal-delay',`${Math.min(index%4,3)*110}ms`);reveal.observe(element);
 }
}
function renderMenu() {
 reveal?.disconnect();
 sections.replaceChildren(); navigation.replaceChildren();
 localizedMenu(language).forEach((category,index)=>{
  const link=document.createElement('a');link.href=`#${category.id}`;link.className='category-link';link.textContent=category.title;navigation.append(link);
  const section=document.createElement('section');section.className='menu-section';section.id=category.id;section.setAttribute('aria-labelledby',`${category.id}-heading`);
  const heading=document.createElement('div');heading.className='category-heading';
  const number=document.createElement('span');number.className='category-number';number.textContent=String(index+1).padStart(2,'0');number.setAttribute('aria-hidden','true');
  const headingBody=document.createElement('div');headingBody.className='category-heading-body';
  const title=document.createElement('h3');title.id=`${category.id}-heading`;title.textContent=category.title;
  const intro=document.createElement('p');intro.className='category-intro';intro.textContent=CATEGORY_INTROS[language][category.id];headingBody.append(title,intro);
  if(category.note){const note=document.createElement('p');note.className='order-note';note.textContent=category.note;headingBody.append(note);}
  const count=document.createElement('span');count.className='category-count';count.textContent=`${category.items.length} ${UI[language].options}`;
  heading.append(number,headingBody,count);section.append(heading);watchReveal(heading);
  const photos=document.createElement('div');photos.className='dish-grid';
  const textPanel=document.createElement('div');textPanel.className='text-menu';
  const textList=document.createElement('div');textList.className='text-menu-list';
  const hasPhotos=category.items.some(item=>item[2]);
  if(hasPhotos&&category.items.some(item=>!item[2])){const label=document.createElement('h4');label.className='text-menu-heading';label.textContent=UI[language].more;textPanel.append(label);}
  let photoIndex=0,textIndex=0;
  category.items.forEach(([name,description,photo,best,raw])=>{
   const card=document.createElement('article');card.className=`dish${photo?'':' text-only'}`;
   if(photo){
    const frame=document.createElement('div');frame.className='dish-image';
    const image=document.createElement('img');image.src=`assets/dish-${photo}.webp`;image.srcset=`assets/dish-${photo}-320.webp 320w, assets/dish-${photo}-640.webp 640w`;image.sizes='(max-width: 359px) 88px, (max-width: 699px) 112px, (max-width: 1099px) 30vw, 300px';image.alt=name;image.loading='lazy';image.decoding='async';image.width=400;image.height=300;frame.append(image);
    if(best){const badge=document.createElement('span');badge.className='best-label';badge.textContent=`✳ ${UI[language].favorite}`;frame.append(badge);}
    card.append(frame);
   }else{
    const marker=document.createElement('span');marker.className='text-item-mark';marker.textContent=String(++textIndex).padStart(2,'0');marker.setAttribute('aria-hidden','true');card.append(marker);
   }
   const body=document.createElement('div');body.className='dish-body';
   const nameElement=document.createElement('h4');nameElement.textContent=name+(raw?' *':'');
   if(best&&!photo){const star=document.createElement('span');star.className='favorite-star';star.textContent='✳';star.setAttribute('aria-label',UI[language].best);nameElement.append(star);}
   body.append(nameElement);
   if(description){const text=document.createElement('p');text.textContent=description;body.append(text);}
   card.append(body);
   if(photo){photos.append(card);watchReveal(card,photoIndex++);}else{textList.append(card);watchReveal(card,textIndex-1);}
  });
  if(photos.children.length)section.append(photos);
  if(textList.children.length){textPanel.append(textList);section.append(textPanel);}
  sections.append(section);
 });
 document.querySelectorAll('.menu-guide>h3,.guide-steps article,.section-heading,.experience>div,.menu-notes').forEach((element,index)=>watchReveal(element,index));
 menuSections=[...document.querySelectorAll('.menu-section')];menuLinks=[...document.querySelectorAll('.category-link')];
}
function setMotionLabel(){
 document.body.classList.toggle('paused',paused);
 motionButton.setAttribute('aria-pressed',String(paused));
 motionButton.setAttribute('aria-label',UI[language][paused?'resume':'pause']);
 motionButton.textContent=paused?'▷':'Ⅱ';
}
function measureHero(){
 stickyTop=Math.min(0,window.innerHeight-hero.offsetHeight);
 scrollDistance=Math.max(320,hero.offsetHeight*(window.innerWidth<700?.75:1.05));
 heroScroll.style.setProperty('--pin-top',`${stickyTop}px`);
 heroScroll.style.height=`${hero.offsetHeight+scrollDistance}px`;
 schedule();
}
function drawScene(progress){
 const frame=pourFrame(progress);
 paintPour(frame,saucePhoto);
 scrollIndicator.style.transform=`scaleY(${frame.progress})`;
}
function update(timestamp){
 scheduled=false;
 const sectionTop=heroScroll.getBoundingClientRect().top;
 const progress=scrollPourProgress(sectionTop,sectionTop+window.scrollY,stickyTop,scrollDistance);
 if(!paused){
  const elapsed=lastFrameTime ? timestamp-lastFrameTime : 16;
  const nextProgress=smoothProgress(displayedProgress,progress,elapsed,reduced.matches);
  if(nextProgress!==displayedProgress){displayedProgress=nextProgress;drawScene(displayedProgress);}
  if(displayedProgress!==progress)schedule();
 }
 lastFrameTime=timestamp;
 let active=menuSections[0];
 for(const section of menuSections){if(section.getBoundingClientRect().top<=160)active=section;}
 menuLinks.forEach(link=>{const selected=link.hash===`#${active.id}`;link.classList.toggle('active',selected);if(selected)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
}
function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(update);}}
function applyLanguage(next, persist=false){
 language=next;
 const ui=UI[language];
 document.documentElement.lang=language==='pt'?'pt-BR':'en';document.title=ui.title;
 document.querySelector('meta[name="description"]').content=ui.meta;
 // HTML comes exclusively from the fixed, authored UI dictionary.
 document.querySelectorAll('[data-i18n]').forEach(element=>{element.innerHTML=ui[element.dataset.i18n];});
 document.querySelectorAll('[data-i18n-label]').forEach(element=>{element.setAttribute('aria-label',ui[element.dataset.i18nLabel]);});
 const currency=new Intl.NumberFormat(language==='pt'?'pt-BR':'en-US',{style:'currency',currency:'USD'});
 document.querySelectorAll('[data-price]').forEach(element=>{element.textContent=currency.format(Number(element.dataset.price));});
 document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
 if(persist){try{localStorage.setItem('temak-language',language);}catch{/* Continue without persistence. */}}
 renderMenu();setMotionLabel();measureHero();
}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.language!==language)applyLanguage(button.dataset.language,true);}));
motionButton.addEventListener('click',()=>{paused=!paused;setMotionLabel();schedule();});
// Reduced motion suppresses decorative movement; intentional scroll still controls the sauce.
reduced.addEventListener('change',()=>{if(reduced.matches)document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));schedule();});
window.addEventListener('scroll',schedule,{passive:true});
let viewportWidth=window.innerWidth,viewportHeight=window.innerHeight;
window.addEventListener('resize',()=>{
 // Ignore small height-only changes from mobile browser bars to avoid scroll jumps.
 if(window.innerWidth!==viewportWidth||Math.abs(window.innerHeight-viewportHeight)>120){
  viewportWidth=window.innerWidth;viewportHeight=window.innerHeight;measureHero();
 }else schedule();
});
applyLanguage(language);
drawScene(paused?1:0);
if('ResizeObserver' in window)new ResizeObserver(measureHero).observe(hero);
document.fonts?.ready.then(measureHero);

requestAnimationFrame(()=>document.body.classList.add('intro-ready'));
