// WEBsynthiq — shared interactions
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

  // ============ Growth Audit modal ============
  // Any [data-audit-open] element opens it (href="#book" stays as the no-JS fallback).
  // Submissions POST JSON straight to the GoHighLevel Inbound Webhook (CORS allows it).
  var AUDIT_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/sNpBMwuPRAAzerr7ZWH5/webhook-trigger/v6SGBOB68uJ2gfEtDEJZ';
  var UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

  // Keep landing-page UTMs for the session so they survive page-to-page navigation
  try {
    var qs = new URLSearchParams(location.search);
    UTM_KEYS.forEach(function (k) { if (qs.get(k)) sessionStorage.setItem('ws_' + k, qs.get(k)); });
  } catch (e) {}

  if (document.querySelector('[data-audit-open]') && window.HTMLDialogElement) {
    var dlg = document.createElement('dialog');
    dlg.className = 'audit-modal';
    dlg.setAttribute('aria-labelledby', 'audit-title');
    dlg.innerHTML =
      '<div class="audit-inner" data-audit-view="form">' +
        '<button type="button" class="audit-close" data-audit-close aria-label="Close">&#x2715;</button>' +
        '<span class="eyebrow">Free Growth Audit</span>' +
        '<h2 class="display" id="audit-title">See where your <span class="accent">leads are leaking</span></h2>' +
        '<p class="audit-sub">Takes 30 seconds. Report in your inbox within 24 hours.</p>' +
        '<form class="audit-form" novalidate>' +
          field('name', 'Owner name', 'text', 'name', true, 'Jane Doe') +
          field('business', 'Business name', 'text', 'organization', true, 'Doe Plumbing') +
          field('phone', 'Phone', 'tel', 'tel', true, '(916) 555-1234') +
          field('email', 'Email', 'email', 'email', true, 'you@business.com') +
          field('website', 'Website', 'url', 'url', false, 'yourbusiness.com') +
          field('address', 'Address', 'text', 'street-address', false, '123 Main St, City, ST') +
          '<div class="audit-hp" aria-hidden="true"><label>Leave this empty<input type="text" name="company_url" tabindex="-1" autocomplete="off"></label></div>' +
          '<div class="audit-alert" role="alert" hidden>Something went wrong sending your request. Please try again or call <a href="tel:+19162359935">(916) 235-9935</a>.</div>' +
          '<button type="submit" class="btn btn-primary audit-submit">Get My Free Audit</button>' +
          '<p class="audit-fine">No spam. We only use this to prepare your audit. <a href="privacy-policy.html">Privacy Policy</a></p>' +
        '</form>' +
      '</div>' +
      '<div class="audit-inner audit-success" data-audit-view="success" hidden>' +
        '<button type="button" class="audit-close" data-audit-close aria-label="Close">&#x2715;</button>' +
        '<span class="audit-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M4 12.5l5 5L20 6.5"/></svg></span>' +
        '<h2 class="display" tabindex="-1">You\'re in.</h2>' +
        '<p>Thank you for your growth audit submission. You will receive an email with the report within 24 hours.</p>' +
        '<button type="button" class="btn btn-ghost" data-audit-close>Close</button>' +
      '</div>';
    document.body.appendChild(dlg);

    var form = dlg.querySelector('form');
    var formView = dlg.querySelector('[data-audit-view="form"]');
    var successView = dlg.querySelector('[data-audit-view="success"]');
    var alertBox = dlg.querySelector('.audit-alert');
    var submitBtn = dlg.querySelector('.audit-submit');
    var opener = null, openedAt = 0, cta = '', touched = false;

    function field(name, label, type, auto, required, placeholder) {
      var id = 'audit-' + name;
      return '<div class="audit-field">' +
        '<label for="' + id + '">' + label + (required ? '' : '<span class="opt">Optional</span>') + '</label>' +
        '<input id="' + id + '" name="' + name + '" type="' + type + '" autocomplete="' + auto + '"' +
          (type === 'url' ? ' inputmode="url"' : '') + (required ? ' required aria-required="true"' : '') +
          ' placeholder="' + placeholder + '" aria-describedby="' + id + '-err">' +
        '<span class="audit-err" id="' + id + '-err"></span>' +
      '</div>';
    }

    function phoneDigits(v) {
      var d = v.replace(/\D/g, '');
      return d.length === 11 && d.charAt(0) === '1' ? d.slice(1) : d;
    }
    function cleanWebsite(v) {
      v = v.trim();
      if (/^(n\/?a|none|no|-)$/i.test(v)) return '';
      if (v && !/^https?:\/\//i.test(v)) v = 'https://' + v;
      return v;
    }
    var rules = {
      name: function (v) { return v.trim() ? '' : 'Enter your name'; },
      business: function (v) { return v.trim() ? '' : 'Enter your business name'; },
      phone: function (v) { return phoneDigits(v).length === 10 ? '' : 'Enter a 10-digit phone number'; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email'; },
      website: function (v) {
        var w = cleanWebsite(v);
        return !w || /^https?:\/\/[^\s.]+\.[^\s]{2,}$/i.test(w) ? '' : 'Enter a valid website (e.g. yoursite.com)';
      }
    };
    function check(input) {
      var rule = rules[input.name];
      if (!rule) return true;
      var msg = rule(input.value);
      document.getElementById(input.id + '-err').textContent = msg;
      if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
      return !msg;
    }

    function resetForm() {
      form.reset();
      form.querySelectorAll('[aria-invalid]').forEach(function (i) { i.removeAttribute('aria-invalid'); });
      form.querySelectorAll('.audit-err').forEach(function (e) { e.textContent = ''; });
      alertBox.hidden = true;
      submitBtn.disabled = false;
      submitBtn.textContent = 'Get My Free Audit';
      formView.hidden = false;
      successView.hidden = true;
      touched = false;
    }

    function openAudit(trigger) {
      opener = trigger;
      cta = trigger.getAttribute('data-audit-open') || '';
      if (!successView.hidden) resetForm();
      document.documentElement.classList.add('audit-open');
      dlg.showModal();
      openedAt = Date.now();
      form.elements.name.focus();
    }
    function closeAudit() { if (dlg.open) dlg.close(); }

    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-audit-open]');
      if (!t) return;
      e.preventDefault();
      // Close the mobile menu if the CTA was tapped from inside it
      if (menu && menu.classList.contains('open')) btn.click();
      openAudit(t);
    });

    dlg.addEventListener('click', function (e) {
      if (e.target.closest('[data-audit-close]')) return closeAudit();
      // Backdrop click: the dialog itself is the target. Ignore once the visitor has typed.
      if (e.target === dlg && !touched) {
        var r = dlg.getBoundingClientRect();
        var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
        if (!inside) closeAudit();
      }
    });
    dlg.addEventListener('close', function () {
      document.documentElement.classList.remove('audit-open');
      if (opener && opener.focus) opener.focus();
    });

    form.addEventListener('input', function (e) {
      touched = true;
      if (e.target.getAttribute('aria-invalid')) check(e.target);
    });
    form.addEventListener('focusout', function (e) {
      if (e.target.tagName === 'INPUT' && e.target.value) check(e.target);
    });

    function showSuccess() {
      formView.hidden = true;
      successView.hidden = false;
      touched = false;
      successView.querySelector('h2').focus();
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alertBox.hidden = true;

      var firstBad = null;
      Array.prototype.forEach.call(form.querySelectorAll('.audit-field input'), function (input) {
        if (!check(input) && !firstBad) firstBad = input;
      });
      if (firstBad) { firstBad.focus(); return; }

      // Bots: honeypot filled or inhumanly fast → pretend it worked, send nothing
      if (form.elements.company_url.value || Date.now() - openedAt < 3000) return showSuccess();

      var f = form.elements;
      var fullName = f.name.value.trim().replace(/\s+/g, ' ');
      var sp = fullName.indexOf(' ');
      var payload = {
        first_name: sp === -1 ? fullName : fullName.slice(0, sp),
        last_name: sp === -1 ? '' : fullName.slice(sp + 1),
        full_name: fullName,
        business_name: f.business.value.trim(),
        phone: '+1' + phoneDigits(f.phone.value),
        email: f.email.value.trim().toLowerCase(),
        website: cleanWebsite(f.website.value),
        address: f.address.value.trim(),
        source: 'Website - Growth Audit Modal',
        cta: cta,
        page: location.pathname,
        submitted_at: new Date().toISOString()
      };
      UTM_KEYS.forEach(function (k) {
        var v = '';
        try { v = sessionStorage.getItem('ws_' + k) || ''; } catch (err) {}
        payload[k] = v;
      });

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      var ctrl = window.AbortController ? new AbortController() : null;
      var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 12000) : null;

      fetch(AUDIT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: ctrl ? ctrl.signal : undefined
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        showSuccess();
      }).catch(function () {
        alertBox.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = 'Get My Free Audit';
      }).then(function () {
        if (timer) clearTimeout(timer);
      });
    });
  }
})();
