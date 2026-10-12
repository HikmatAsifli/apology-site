
/* floating dust particles */
const c = document.getElementById('stars');
if (c) {
  const ctx = c.getContext('2d');
  let w, h, parts = [];
  const resize = () => {
    w = c.width = innerWidth; h = c.height = innerHeight;
    parts = Array.from({length: 70}, () => ({
      x: Math.random()*w, y: Math.random()*h,
      r: Math.random()*1.8+.4,
      vx:(Math.random()-.5)*.25, vy:(Math.random()-.5)*.25,
      o: Math.random()*.5+.15
    }));
  };
  resize(); addEventListener('resize', resize);
  (function loop(){
    ctx.clearRect(0,0,w,h);
    for (const p of parts){
      p.x += p.vx; p.y += p.vy;
      if (p.x<0) p.x=w; if (p.x>w) p.x=0;
      if (p.y<0) p.y=h; if (p.y>h) p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7);
      ctx.fillStyle = `rgba(232,160,168,${p.o})`; ctx.fill();
    }
    requestAnimationFrame(loop);
  })();
}

/* scroll reveal */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
