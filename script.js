document.documentElement.classList.add('js');
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>io.observe(el));
setTimeout(()=>$$('.reveal').forEach(el=>el.classList.add('in')),2500);
const topBtn=$('.top');
addEventListener('scroll',()=>{topBtn&&topBtn.classList.toggle('on',scrollY>500)});
topBtn&&topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
$$('.filters button').forEach(b=>b.addEventListener('click',()=>{
  $$('.filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  const f=b.dataset.f;
  $$('.gi').forEach(g=>g.classList.toggle('hide',f!=='all'&&g.dataset.c!==f));
}));
const lb=$('.lb');
$$('.gi').forEach(g=>g.addEventListener('click',()=>{lb.querySelector('img').src=g.querySelector('img').src;lb.classList.add('on')}));
lb&&lb.addEventListener('click',()=>lb.classList.remove('on'));
const FB='https://images.unsplash.com/photo-1707407087163-7ab35bca9ffc?auto=format&fit=crop&q=70&w=900';
$$('img:not([alt*="logo"])').forEach(i=>i.addEventListener('error',()=>{if(i.dataset.fb)return;i.dataset.fb=1;i.src=FB}));
const f=$('#enq');
if(f)f.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(f);
  const m=`*New Enquiry - American Express Packers and Movers Zirakpur*%0AName: ${d.get('name')}%0APhone: ${d.get('phone')}%0AService: ${d.get('service')}%0AFrom: ${d.get('from')}%0ATo: ${d.get('to')}%0AMessage: ${d.get('msg')}`;
  open('https://wa.me/917877289006?text='+m,'_blank');
});

(function(){
  const tr=document.querySelector('.rv-track');if(!tr)return;
  const cards=[...tr.children],dots=document.querySelector('.rv-dots');
  const per=()=>innerWidth>991?3:innerWidth>640?2:1;
  const step=()=>cards[0].getBoundingClientRect().width+parseFloat(getComputedStyle(tr).gap||0);
  const pages=()=>Math.max(1,Math.ceil(cards.length/per()));
  let timer;
  function build(){dots.innerHTML='';for(let i=0;i<pages();i++){const b=document.createElement('button');b.setAttribute('aria-label','Go to page '+(i+1));b.addEventListener('click',()=>{go(i);auto()});dots.appendChild(b)}mark()}
  function go(p){tr.scrollTo({left:p*per()*step(),behavior:'smooth'})}
  function cur(){const max=tr.scrollWidth-tr.clientWidth;if(tr.scrollLeft>=max-4)return pages()-1;return Math.min(pages()-1,Math.round(tr.scrollLeft/(per()*step())))}
  function mark(){const c=cur();[...dots.children].forEach((d,i)=>d.classList.toggle('on',i===c))}
  function next(d){let c=cur()+d;if(c>=pages())c=0;if(c<0)c=pages()-1;go(c)}
  document.querySelector('.rv-next').addEventListener('click',()=>{next(1);auto()});
  document.querySelector('.rv-prev').addEventListener('click',()=>{next(-1);auto()});
  tr.addEventListener('scroll',()=>requestAnimationFrame(mark),{passive:true});
  function auto(){clearInterval(timer);timer=setInterval(()=>next(1),4500)}
  ['touchstart','mouseenter'].forEach(e=>tr.addEventListener(e,()=>clearInterval(timer),{passive:true}));
  ['touchend','mouseleave'].forEach(e=>tr.addEventListener(e,auto,{passive:true}));
  addEventListener('resize',build);
  build();auto();
})();
