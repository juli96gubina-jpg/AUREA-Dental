const slides=[...document.querySelectorAll('.hero-slide')];
const counter=document.querySelector('#counter');
let i=0,t;
function show(n){if(!slides.length)return;i=(n+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle('active',k===i));if(counter)counter.textContent=`0${i+1} / ${String(slides.length).padStart(2,'0')}`}
function restart(){clearInterval(t);t=setInterval(()=>show(i+1),6500)}
const nextBtn=document.querySelector('#next'),prevBtn=document.querySelector('#prev');
if(nextBtn)nextBtn.onclick=()=>{show(i+1);restart()};
if(prevBtn)prevBtn.onclick=()=>{show(i-1);restart()};
if(slides.length)restart();

const burger=document.querySelector('.burger'),nav=document.querySelector('.nav');
if(burger&&nav){burger.onclick=()=>{nav.classList.toggle('open');burger.setAttribute('aria-expanded',nav.classList.contains('open'))}}
document.querySelectorAll('.nav a').forEach(a=>a.onclick=()=>nav?.classList.remove('open'));

document.querySelectorAll('a[href]').forEach(link=>{
  const href=link.getAttribute('href');
  if(!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) return;
  link.addEventListener('click',e=>{
    if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return;
    e.preventDefault();
    document.body.style.transition='opacity .18s ease, transform .18s ease';
    document.body.style.opacity='.2';document.body.style.transform='translateY(5px)';
    setTimeout(()=>location.href=href,180);
  });
});

const formEls=document.querySelectorAll('#form');
formEls.forEach(formEl=>formEl.addEventListener('submit',e=>{
  e.preventDefault();
  const n=e.target.name?.value.trim();
  const out=e.target.querySelector('output');
  if(out) out.textContent=`Спасибо${n?', '+n:''}! Это демонстрационная форма — данные никуда не отправляются.`;
  e.target.reset();
}));

const heroImages=[...document.querySelectorAll('.hero-slide img')];
heroImages.forEach(img=>{if(img?.decode) img.decode().catch(()=>{});});

const headerEl=document.querySelector('.site-header');
const onScroll=()=>headerEl?.classList.toggle('scrolled',window.scrollY>20);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});

const revealEls=[...document.querySelectorAll('.reveal-ready')];
if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');revealObserver.unobserve(entry.target)}}),{threshold:.08});
 revealEls.forEach((el,idx)=>{el.style.transitionDelay=`${Math.min(idx*70,280)}ms`;revealObserver.observe(el)});
}else revealEls.forEach(el=>el.classList.add('revealed'));

// Add subtle reveal to major cards on every page.
if('IntersectionObserver' in window){
 const cardObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');cardObserver.unobserve(entry.target)}}),{threshold:.06});
 document.querySelectorAll('.detail-card,.doctor-profile,.benefits article,.service-grid article').forEach((el,idx)=>{el.style.transitionDelay=`${Math.min(idx*45,180)}ms`;cardObserver.observe(el)});
}
