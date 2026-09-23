// Websynthiq — shared interactions
(function () {
  // Tells the <head> failsafe this script loaded, so hidden-before-reveal content stays hidden
  window.__wsMotion = true;

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var menu = document.querySelector('.mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Stagger index: each grid cell gets --i so CSS can delay it by --i × --stagger
  document.querySelectorAll('.problem-list, .services-grid, .steps, .features, .faq').forEach(function (grid) {
    var i = 0;
    Array.prototype.forEach.call(grid.children, function (cell) {
      if (!cell.classList.contains('sys-lines')) cell.style.setProperty('--i', i++);
    });
  });

  // Landing mid-page (hash link, back/forward, reload): anything revealed before the
  // visitor's first scroll/tap shows its final frame instead of replaying under them.
  // (The browser's jump to #hash can land late, so this keys off input, not a timer.)
  var nav = window.performance && performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
  var resumed = location.hash || (nav && (nav.type === 'back_forward' || nav.type === 'reload'));
  var settled = !resumed;
  if (resumed) {
    ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(function (type) {
      window.addEventListener(type, function () { settled = true; }, { once: true, passive: true });
    });
  }

  function show(el) {
    if (!settled) {
      // .instant kills animations for good; .instant-t kills transitions for two frames only
      el.classList.add('instant', 'instant-t');
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { el.classList.remove('instant-t'); });
      });
    }
    el.classList.add('in');
  }

  // Reveal on scroll (.reveal blocks) and scene triggers ([data-motion]).
  // JS only flips .in; every frame of every scene is drawn by CSS.
  var reveals = document.querySelectorAll('.reveal');
  var scenes = document.querySelectorAll('[data-motion]');
  function watch(els, options) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          show(e.target);
          io.unobserve(e.target);
        }
      });
    }, options);
    els.forEach(function (el) { io.observe(el); });
  }
  if ('IntersectionObserver' in window) {
    watch(reveals, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    // Scenes fire once their top passes 75% of the viewport — works for any element height
    watch(scenes, { threshold: 0, rootMargin: '0px 0px -25% 0px' });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
    scenes.forEach(function (el) { el.classList.add('in'); });
  }

  // Single-open FAQ accordions
  document.querySelectorAll('.faq').forEach(function (faq) {
    faq.querySelectorAll('details').forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (d.open) {
          faq.querySelectorAll('details[open]').forEach(function (o) {
            if (o !== d) o.open = false;
          });
        }
      });
    });
  });
})();
