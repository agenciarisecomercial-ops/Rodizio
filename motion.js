/* A deterministic timeline: the scroll position is the only animation clock. */
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
function pourFrame(progress) {
  const p = clamp(progress);
  // Same top-to-bottom photographic reveal as the Rise Temak House scene.
  return {progress:p, pour:clamp((p-.035)/.82)*110};
}
function smoothProgress(current, target, elapsed, reducedMotion) {
  if(reducedMotion || Math.abs(target-current)<.0005)return target;
  return current+(target-current)*(1-Math.exp(-Math.min(elapsed,64)/95));
}
function initialLanguage(saved, browserLanguage) {
  if (saved === 'en' || saved === 'pt') return saved;
  return /^pt(?:-|$)/i.test(browserLanguage || '') ? 'pt' : 'en';
}
function localizedMenu(language) {
  return MENU.map(category => {
    if (language !== 'pt') return category;
    const translated = MENU_PT[category.id];
    return {...category,title:translated.title,note:translated.note,
      items:category.items.map((item,index)=>[...translated.items[index],...item.slice(2)])};
  });
}

// Both photographs have identical dimensions and framing; only the sauce is revealed.
function paintPour(frame, layer) {
  layer.style.setProperty('--pour',`${frame.pour.toFixed(3)}%`);
}

function scrollPourProgress(sectionTop, documentTop, pinTop, distance) {
  return clamp((documentTop-sectionTop)/Math.max(1,documentTop-pinTop+distance));
}
