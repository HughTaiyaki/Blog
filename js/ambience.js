(() => {
 const box=document.querySelector('[data-ambience]');if(!box)return;
 fetch(box.dataset.ambience).then(r=>r.json()).then(c=>{
 box.querySelector('.ambience-caption').textContent=c.caption || '';
 if(c.image){const img=new Image();img.src=c.image;img.alt='日记画面';box.querySelector('.ambience-scene').append(img);}
 else box.querySelector('.ambience-scene').innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 320" role="img" aria-label="暮色里的窗与远山"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#565b7b"/><stop offset="1" stop-color="#d7acb2"/></linearGradient></defs><path fill="url(#sky)" d="M0 0h900v320H0z"/><circle cx="650" cy="92" r="28" fill="#eed9c9"/><path fill="#74758c" d="M0 240 170 160 330 245 530 180 740 245 900 170V320H0z"/><path fill="#434b64" d="M0 280 220 230 420 290 650 240 900 275V320H0z"/><path stroke="#30384c" stroke-width="16" d="M30 0v320M450 0v320M870 0v320M0 20h900M0 308h900"/><path stroke="#e3d4e0" opacity=".25" d="m100 40-20 60m140 20-20 60m350-140-20 60m240 30-20 60m-400-30-20 60m270 20-20 60"/></svg>';
 if(c.video){
   const scene=box.querySelector('.ambience-scene'), video=document.createElement('video');
   video.id='diary-video';video.src=c.video;video.muted=true;video.defaultMuted=true;video.autoplay=true;video.loop=true;video.playsInline=true;video.preload='auto';video.setAttribute('aria-label','雨中的绣球花与撑伞少女');
   const fallback=scene.firstElementChild;
   fallback.style.visibility='hidden';
   if(c.poster)video.poster=c.poster;
   video.addEventListener('error',()=>{video.remove();fallback.style.visibility='visible';});
   scene.append(video);
   video.play().catch(()=>{});
   document.addEventListener('pointerdown',()=>{if(video.paused)video.play().catch(()=>{});});
 }

 }).catch(()=>{box.hidden=true;});
})();
