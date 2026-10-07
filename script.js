const ideas = {
  creative: {brand:'TIARA STUDIO',tag:'INDEPENDENT CREATIVE',title:'A little vision.<br>A lasting impression.',description:'Thoughtful design for people with something to say. Welcome to my corner of the internet.',cta:'Explore my work ↗',bottom:'GOOD IDEAS DESERVE GOOD DESIGN.'},
  cafe: {brand:'THE LITTLE TABLE',tag:'YOUR NEIGHBORHOOD FAVORITE',title:'Good coffee.<br>Even better company.',description:'Slow mornings, something freshly baked, and a place to feel at home. Pull up a chair.',cta:'Discover the menu ↗',bottom:'A LITTLE PAUSE IN YOUR EVERYDAY.'},
  journal: {brand:'NOTES BY TIARA',tag:'A JOURNAL OF EVERYDAY WONDERS',title:'Small moments.<br>Beautiful stories.',description:'A collection of things that inspire me. Places, discoveries, and the joy of noticing.',cta:'Read the journal ↗',bottom:'FIND SOMETHING LOVELY TODAY.'}
};
let currentIdea = 'creative', currentPalette = 'lavender';
const status = () => { document.querySelector('#preview-status').textContent = `${document.querySelector('.idea.active').textContent.replace('↗','').trim()} in ${currentPalette} palette`; };
document.querySelectorAll('.idea').forEach(button => button.addEventListener('click', () => {
  currentIdea = button.dataset.idea;
  document.querySelectorAll('.idea').forEach(b => {b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button));});
  for (const [key,value] of Object.entries(ideas[currentIdea])) {const el = document.querySelector(`#preview-${key}`); if(key === 'title') el.innerHTML = value; else el.textContent = value;}
  status();
}));
document.querySelectorAll('.swatch').forEach(button => button.addEventListener('click', () => {
  currentPalette = button.dataset.color;
  document.querySelector('.preview').dataset.palette = currentPalette;
  document.querySelectorAll('.swatch').forEach(b => {b.classList.toggle('selected', b === button); b.setAttribute('aria-pressed',String(b === button));}); status();
}));
const themeButton = document.querySelector('#theme');
function applyTheme(dark) {document.body.classList.toggle('dark',dark);themeButton.setAttribute('aria-label',dark ? 'Switch to light mode' : 'Switch to dark mode'); themeButton.setAttribute('aria-pressed',String(dark));}
try {applyTheme(localStorage.getItem('tiara-theme') === 'dark');} catch {applyTheme(false);}
themeButton.addEventListener('click', () => {const dark = !document.body.classList.contains('dark');applyTheme(dark);try {localStorage.setItem('tiara-theme',dark ? 'dark' : 'light');} catch {}});
document.querySelectorAll('.copy').forEach(button => button.addEventListener('click',async () => {
  const prompt = button.parentElement.querySelector('p').textContent.replace(/[“”]/g,'');
  try {await navigator.clipboard.writeText(prompt);document.querySelector('#copy-status').textContent = 'Copied! Paste your prompt into Codex.';button.textContent = '✓';setTimeout(() => {button.textContent = '↗';},1800);} catch {document.querySelector('#copy-status').textContent = 'Select the prompt text above and copy it to bring it to Codex.';}
}));
