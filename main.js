/* ============ REGENTA — landing interactions ============ */
(() => {
  'use strict';

  /* nav: glass on scroll */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* mobile menu */
  const burger = document.getElementById('burger');
  const navMobile = document.getElementById('navMobile');
  burger?.addEventListener('click', () => {
    const open = navMobile.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  navMobile?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navMobile.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    })
  );

  /* reveal on scroll */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
    io.observe(el);
  });

  /* screenshot tabs */
  const tabs = document.querySelectorAll('.shots__tab');
  const shots = document.querySelectorAll('.shot');
  const url = document.querySelector('.browser__url');
  const urls = ['localhost:5173 / fleet', 'localhost:5173 / proyectos', 'localhost:5173 / metricas'];
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const i = tab.dataset.shot;
      tabs.forEach(t => t.classList.toggle('is-active', t === tab));
      shots.forEach(s => s.classList.toggle('is-active', s.dataset.shot === i));
      if (url) url.textContent = urls[+i] || urls[0];
    });
  });

  /* copy code */
  const copyBtn = document.getElementById('copyBtn');
  const codeBlock = document.getElementById('codeBlock');
  copyBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(codeBlock.innerText.trim());
      copyBtn.textContent = '¡Copiado!';
      copyBtn.classList.add('is-done');
      setTimeout(() => { copyBtn.textContent = 'Copiar'; copyBtn.classList.remove('is-done'); }, 1800);
    } catch { copyBtn.textContent = 'Error'; }
  });

  /* animated counters */
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const runCount = (el) => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = 1300; let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(easeOut(p) * target).toLocaleString('es') + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const statsIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-count]').forEach(runCount);
        statsIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  const statsEl = document.getElementById('stats');
  if (statsEl) statsIO.observe(statsEl);

  /* year (footer is static 2026 but keep dynamic safety) */
})();
