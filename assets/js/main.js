
document.addEventListener('DOMContentLoaded', function(){
  const toggle=document.querySelector('[data-mobile-toggle]');
  const menu=document.querySelector('[data-mobile-menu]');
  if(toggle&&menu){toggle.addEventListener('click',()=>menu.classList.toggle('open'));}
  const q=document.querySelector('[data-site-search]');
  const results=document.querySelector('[data-search-results]');
  const pages=window.JTR_PAGES || [];
  if(q&&results){
    q.addEventListener('input',()=>{
      const term=q.value.trim().toLowerCase();
      if(!term){results.style.display='none';results.innerHTML='';return;}
      const matches=pages.filter(p=>(p.title+' '+p.desc+' '+(p.keywords||'')).toLowerCase().includes(term)).slice(0,8);
      results.innerHTML=matches.length?matches.map(p=>`<a href="${p.url}">${p.title}<small style="display:block;color:#64748b;font-weight:600">${p.desc}</small></a>`).join(''):'<div style="padding:12px;color:#64748b">No result yet. Try “laptop”, “virus”, “Sandton”, or “screen”.</div>';
      results.style.display='block';
    });
  }
});
