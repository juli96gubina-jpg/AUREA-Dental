
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const header=$('.site-header');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>30),{passive:true});
$('.menu-toggle')?.addEventListener('click',()=>$('.site-header nav')?.classList.toggle('open'));
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>$('.site-header nav')?.classList.remove('open')));
const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');reveal.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach((el,i)=>{el.style.transitionDelay=Math.min(i*55,330)+'ms';reveal.observe(el)});
const modal=$('#filmModal'); let timer, frames=$$('.film-frame',modal||document); let idx=0;
function openFilm(){if(!modal)return; modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'; idx=0; playFilm()}
function closeFilm(){if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';clearInterval(timer)}
function playFilm(){clearInterval(timer); frames.forEach((f,i)=>f.classList.toggle('is-active',i===idx)); const bar=$('.film-progress i',modal); if(bar){bar.style.transition='none';bar.style.width='0';requestAnimationFrame(()=>{bar.style.transition='width 4.5s linear';bar.style.width='100%'})}; timer=setInterval(()=>{idx=(idx+1)%frames.length;frames.forEach((f,i)=>f.classList.toggle('is-active',i===idx));const b=$('.film-progress i',modal);if(b){b.style.transition='none';b.style.width='0';requestAnimationFrame(()=>{b.style.transition='width 4.5s linear';b.style.width='100%'})}},4500)}
$$('[data-film]').forEach(b=>b.addEventListener('click',openFilm)); $$('[data-film-close]').forEach(b=>b.addEventListener('click',closeFilm)); document.addEventListener('keydown',e=>{if(e.key==='Escape')closeFilm()});
const form=$('#form'); form?.addEventListener('submit',e=>{e.preventDefault(); const out=$('output',form); if(out){out.textContent='Спасибо. В демо-версии заявка не отправляется — здесь будет CRM / Telegram.';out.focus?.()}});
