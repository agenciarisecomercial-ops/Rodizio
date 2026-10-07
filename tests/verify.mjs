import {readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
import assert from 'node:assert/strict';
process.chdir(fileURLToPath(new URL('..',import.meta.url)));
const data=vm.runInNewContext(['menu.js','locales.js','motion.js'].map(f=>readFileSync(f,'utf8')).join('\n')+';({MENU,UI,MENU_PT,pourFrame,initialLanguage,localizedMenu,paintPour,scrollPourProgress,smoothProgress})');
const {MENU,UI,MENU_PT,pourFrame,initialLanguage,localizedMenu,paintPour,scrollPourProgress,smoothProgress}=data;
assert.deepEqual(Object.keys(UI.en).sort(),Object.keys(UI.pt).sort());
const html=readFileSync('index.html','utf8');
for(const match of html.matchAll(/data-i18n(?:-label)?="([^"]+)"/g)){
 for(const lang of ['en','pt'])assert.ok(UI[lang][match[1]],`${lang}: missing ${match[1]}`);
}
let total=0;
for(const category of MENU){
 const pt=MENU_PT[category.id];assert.ok(pt);assert.equal(pt.items.length,category.items.length);
 if(category.note)assert.ok(pt.note);
 category.items.forEach((item,index)=>{
  total++;assert.ok(pt.items[index][0]);
  if(item[1])assert.ok(pt.items[index][1]||pt.items[index][0]==='Pastéis de salmão com queijo');
  if(item[2])assert.ok(existsSync(`assets/dish-${item[2]}.webp`));
 });
}
for(const lang of ['en','pt']){
 const result=localizedMenu(lang);assert.equal(result.length,9);
 result.forEach((category,i)=>category.items.forEach((item,j)=>assert.deepEqual(item.slice(2),MENU[i].items[j].slice(2),'Photos, best sellers and raw-food markers must not change with language')));
}
assert.equal(total,90);
assert.equal(initialLanguage(undefined,'pt-BR'),'pt');assert.equal(initialLanguage(undefined,'pt-PT'),'pt');assert.equal(initialLanguage(undefined,'en-US'),'en');assert.equal(initialLanguage('en','pt-BR'),'en');assert.equal(initialLanguage('pt','en-US'),'pt');assert.equal(initialLanguage('bad','es'),'en');

assert.equal(pourFrame(0).pour,0);
assert.equal(pourFrame(1).pour,110);
assert.ok(pourFrame(.6).pour>pourFrame(.3).pour);
assert.equal(pourFrame(-2).pour,0);assert.equal(pourFrame(2).pour,110);
const style={values:{},setProperty(key,value){this.values[key]=value;}};
paintPour(pourFrame(.5),{style});assert.ok(parseFloat(style.values['--pour'])>50);
paintPour(pourFrame(0),{style});assert.equal(style.values['--pour'],'0.000%');
assert.ok(smoothProgress(0,1,16,false)>0&&smoothProgress(0,1,16,false)<1);
assert.ok(smoothProgress(1,0,16,false)<1);
assert.equal(smoothProgress(0,1,16,true),1);
let settled=0;for(let i=0;i<100;i++)settled=smoothProgress(settled,1,16,false);assert.equal(settled,1);
assert.equal(scrollPourProgress(100,100,0,600),0);
assert.ok(scrollPourProgress(90,100,0,600)>0);
assert.equal(scrollPourProgress(-600,100,0,600),1);
assert.equal(scrollPourProgress(-750,100,-150,600),1);
for(const file of ['menu.js','locales.js','motion.js','app.js'])new vm.Script(readFileSync(file,'utf8'));
assert.ok(!/Temaki House|TEMAKI HOUSE/.test(html));
assert.ok(!html.includes('tare-overlay'));
for(const image of ['temak-sushi-clean.jpg','temak-sushi-sauce.jpg']){
 assert.ok(existsSync(`assets/${image}`));assert.ok(html.includes(`assets/${image}`));
}
const css=readFileSync('styles.css','utf8');assert.ok(css.includes('-webkit-mask-image:linear-gradient(to bottom,#000 calc(var(--pour) - 9%),transparent var(--pour))'));
for(const price of ['41.90','44.90','9.90','19.90','10.90','22.90'])assert.ok(html.includes(`data-price="${price}"`));
console.log(`PASS: ${total} bilingual dishes, asset references, metadata, USD prices, photographic mask, forward/reverse scroll and reduced-motion smoothing.`);
