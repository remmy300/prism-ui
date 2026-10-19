/* Prism UI behaviors. Zero dependencies, ES module. */
const initializedSwitches=new WeakSet();

export function setTheme(theme){document.documentElement.setAttribute('data-theme',theme);try{localStorage.setItem('prism-theme',theme)}catch(e){}}
export function toggleTheme(){const cur=document.documentElement.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');const next=cur==='dark'?'light':'dark';setTheme(next);return next}
export function initTheme(){try{const t=localStorage.getItem('prism-theme');if(t)setTheme(t)}catch(e){}}

export function openModal(dialog){dialog.showModal()}
export function closeModal(dialog){dialog.close()}

export function initSwitches(root=document){
  root.querySelectorAll('.pr-switch[role="switch"]').forEach(toggle=>{
    if(initializedSwitches.has(toggle))return;
    initializedSwitches.add(toggle);
    toggle.addEventListener('click',()=>{
      toggle.setAttribute('aria-checked',toggle.getAttribute('aria-checked')==='true'?'false':'true');
    });
  });
}

export function toast(message,{duration=3000}={}){
  let region=document.querySelector('.pr-toast-region');
  if(!region){region=document.createElement('div');region.className='pr-toast-region';region.setAttribute('role','status');region.setAttribute('aria-live','polite');document.body.appendChild(region)}
  const el=document.createElement('div');el.className='pr-toast';el.textContent=message;region.appendChild(el);
  setTimeout(()=>el.remove(),duration);return el;
}

export function initTabs(root=document){
  root.querySelectorAll('.pr-tabs').forEach(tabs=>{
    const list=[...tabs.querySelectorAll('[role="tab"]')];
    const select=tab=>{list.forEach(t=>{const on=t===tab;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;
      document.getElementById(t.getAttribute('aria-controls')).hidden=!on});tab.focus()};
    list.forEach((t,i)=>{t.addEventListener('click',()=>select(t));
      t.addEventListener('keydown',e=>{let j=null;if(e.key==='ArrowRight')j=(i+1)%list.length;if(e.key==='ArrowLeft')j=(i-1+list.length)%list.length;if(j!==null){e.preventDefault();select(list[j])}})});
  });
}
export function init(){initTheme();initTabs();initSwitches()}
