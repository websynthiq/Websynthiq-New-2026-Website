/* @ds-bundle: {"format":4,"namespace":"WebsynthiqDesignSystem_019df1","components":[],"sourceHashes":{"ui_kits/marketing/CTASection.jsx":"58627426bdbc","ui_kits/marketing/CodeSample.jsx":"2b218015b34e","ui_kits/marketing/FeatureGrid.jsx":"5a4857d6a8b9","ui_kits/marketing/Footer.jsx":"588f3949dacb","ui_kits/marketing/Hero.jsx":"46f4376b323e","ui_kits/marketing/LogoCloud.jsx":"ce5234c1c3cb","ui_kits/marketing/Nav.jsx":"eece219a9c50","ui_kits/marketing/ui.jsx":"1b5b84b648cc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WebsynthiqDesignSystem_019df1 = window.WebsynthiqDesignSystem_019df1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing/CTASection.jsx
try { (() => {
/* eslint-disable */
const CTASection = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: 'linear-gradient(135deg, var(--brand-cobalt) 0%, var(--brand-steel) 100%)',
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/favicon.png",
  style: {
    position: 'absolute',
    right: -80,
    bottom: -120,
    height: 480,
    opacity: 0.15,
    filter: 'brightness(2)'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '96px 32px',
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement(Eyebrow, {
  color: "rgba(255,255,255,0.7)"
}, "Get started"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: 72,
    lineHeight: 0.95,
    letterSpacing: '-0.02em',
    color: '#fff',
    margin: '12px 0 24px',
    maxWidth: 820
  }
}, "Deploy your first site", /*#__PURE__*/React.createElement("br", null), "in under five minutes."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: 'var(--font-body)',
    fontSize: 18,
    color: 'rgba(255,255,255,0.85)',
    maxWidth: 560,
    margin: '0 0 36px'
  }
}, "Free tier includes 1M edge requests, unlimited preview deploys, and zero-config TLS."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 12
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "onBrand",
  size: "lg"
}, "Start free \u2192"), /*#__PURE__*/React.createElement(Button, {
  size: "lg",
  style: {
    background: 'transparent',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.3)'
  }
}, "Talk to sales"))));
window.CTASection = CTASection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CTASection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CodeSample.jsx
try { (() => {
/* eslint-disable */
const CodeSample = () => {
  const [tab, setTab] = React.useState('config');
  const tabs = [{
    id: 'config',
    label: 'websynthiq.config.ts'
  }, {
    id: 'route',
    label: 'app/[slug].tsx'
  }, {
    id: 'shell',
    label: 'shell'
  }];
  const samples = {
    config: `import { defineSite } from 'websynthiq';

export default defineSite({
  name: 'acme-marketing',
  domain: 'acme.dev',
  edge: { regions: 'auto' },
  cache: {
    '/':         { swr: 60, ttl: 600 },
    '/blog/*':   { swr: 30, ttl: 300 },
    '/api/*':    'no-store',
  },
  redirects: [
    { from: '/old', to: '/blog/launch', code: 301 },
  ],
});`,
    route: `import { Page } from 'websynthiq/page';

export default Page(async ({ params, edge }) => {
  const post = await edge.kv.get(\`post:\${params.slug}\`);
  if (!post) return Page.NotFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <time>{post.publishedAt}</time>
      <Markdown>{post.body}</Markdown>
    </article>
  );
});`,
    shell: `$ npx websynthiq deploy
↑ uploaded 142 files (12.4 MB)
✓ build  · 6.1s
✓ verify · 0.4s
✓ deploy · 1.2s

  acme-marketing.websynthiq.dev
  acme.dev   (live in 12 regions)`
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-subtle)',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--steel-600)"
  }, "Configuration"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-techno)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.05,
      margin: '12px 0 16px',
      letterSpacing: '-0.02em'
    }
  }, "One file. Whole site."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--fg-2)',
      margin: 0
    }
  }, "Routing, caching, redirects, headers, regions. All declared in TypeScript, all diffable, all reversible."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cobalt"
  }, "Type-safe"), /*#__PURE__*/React.createElement(Badge, {
    tone: "steel"
  }, "Edge-aware"), /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, "v1.4"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gray-900)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--gray-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--gray-700)',
      background: 'var(--gray-800)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      padding: '12px 18px',
      background: tab === t.id ? 'var(--gray-900)' : 'transparent',
      color: tab === t.id ? '#fff' : 'var(--gray-400)',
      border: 0,
      borderRight: '1px solid var(--gray-700)',
      borderBottom: tab === t.id ? '2px solid var(--brand-cobalt)' : '2px solid transparent',
      cursor: 'pointer'
    }
  }, t.label))), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.65,
      color: '#E6EAF5',
      background: 'transparent',
      overflow: 'auto',
      minHeight: 320
    }
  }, samples[tab]))));
};
window.CodeSample = CodeSample;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CodeSample.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FeatureGrid.jsx
try { (() => {
/* eslint-disable */
const FeatureCard = ({
  icon,
  title,
  body
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: '#fff',
      border: '1px solid var(--border-1)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      transition: 'box-shadow 200ms var(--ease-out)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      background: 'var(--cobalt-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--brand-cobalt)'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-techno)',
      fontWeight: 600,
      fontSize: 22,
      margin: '20px 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--fg-2)',
      margin: 0
    }
  }, body));
};
const Icon = ({
  d
}) => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "square",
  strokeLinejoin: "miter"
}, /*#__PURE__*/React.createElement("path", {
  d: d
}));
const FeatureGrid = () => /*#__PURE__*/React.createElement("section", {
  style: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '96px 32px'
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "Foundations"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: 'var(--font-techno)',
    fontWeight: 700,
    fontSize: 44,
    lineHeight: 1.05,
    margin: '12px 0 56px',
    maxWidth: 720,
    letterSpacing: '-0.02em'
  }
}, "A smarter substrate for the modern web."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20
  }
}, /*#__PURE__*/React.createElement(FeatureCard, {
  icon: /*#__PURE__*/React.createElement(Icon, {
    d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z"
  }),
  title: "Edge-native rendering",
  body: "Every route runs at the edge by default. Sub-200ms cold starts in 200+ regions, no config required."
}), /*#__PURE__*/React.createElement(FeatureCard, {
  icon: /*#__PURE__*/React.createElement(Icon, {
    d: "M16 18l6-6-6-6M8 6l-6 6 6 6"
  }),
  title: "Code-first config",
  body: "One TypeScript file describes routes, caches, redirects, and headers. Diff it in PRs. Roll back with git."
}), /*#__PURE__*/React.createElement(FeatureCard, {
  icon: /*#__PURE__*/React.createElement(Icon, {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
  }),
  title: "Deterministic builds",
  body: "Hashed inputs, content-addressed outputs. Every deploy is a verifiable artifact, not a re-build of last week's tree."
})));
window.FeatureGrid = FeatureGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FeatureGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
/* eslint-disable */
const Footer = () => {
  const cols = [{
    title: 'Product',
    links: ['Edge runtime', 'Caching', 'Routing', 'Analytics', 'Pricing']
  }, {
    title: 'Developers',
    links: ['Docs', 'CLI reference', 'API', 'Changelog', 'Status']
  }, {
    title: 'Company',
    links: ['About', 'Careers', 'Press kit', 'Contact']
  }, {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'DPA', 'Security']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--gray-900)',
      color: 'var(--gray-300)',
      borderTop: '4px solid var(--brand-cobalt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 32px 48px',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/favicon.png",
    style: {
      height: 40,
      filter: 'brightness(1.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-techno)',
      fontWeight: 700,
      fontSize: 18,
      color: '#fff',
      marginTop: 14
    }
  }, "Websynthiq"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: 1.6,
      marginTop: 8,
      maxWidth: 260,
      color: 'var(--gray-400)'
    }
  }, "A smarter substrate for the modern web.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-techno)',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: '#fff'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 16
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--gray-400)',
      borderBottom: 0
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--gray-700)',
      padding: '20px 32px',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--gray-400)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Websynthiq, Inc."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(StatusDot, null, "All systems operational"), /*#__PURE__*/React.createElement("span", null, "v1.4.0"))));
};
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* eslint-disable */
const Hero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    position: 'relative',
    overflow: 'hidden',
    background: '#fff',
    borderBottom: '1px solid var(--border-1)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 80% -10%, rgba(37,65,178,0.10), transparent 50%), radial-gradient(ellipse at 0% 100%, rgba(23,104,172,0.08), transparent 50%)',
    pointerEvents: 'none'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '88px 32px 96px',
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "Synthesize \xB7 v1.4"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: 'clamp(56px, 7.2vw, 88px)',
    lineHeight: 0.95,
    letterSpacing: '-0.02em',
    margin: '16px 0 0',
    maxWidth: 1100
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--brand-cobalt)'
  }
}, "Ship the web,"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: '#000'
  }
}, "without the build.")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: 'var(--font-body)',
    fontSize: 20,
    lineHeight: 1.5,
    color: 'var(--fg-2)',
    maxWidth: 620,
    marginTop: 32
  }
}, "Synthesize production sites from a single config. Routing, caching, and TLS handled at the edge \u2014 you write the components."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 12,
    marginTop: 32,
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement(Button, {
  size: "lg"
}, "Start building \u2192"), /*#__PURE__*/React.createElement(Button, {
  variant: "secondary",
  size: "lg"
}, "Read the docs"), /*#__PURE__*/React.createElement(StatusDot, null, "All systems operational"))));
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/LogoCloud.jsx
try { (() => {
/* eslint-disable */
const LogoCloud = () => {
  const logos = ['ACME', 'NEXUS', 'KORE', 'VAULT', 'AXIOM', 'PRIMA'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-techno)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--fg-3)',
      whiteSpace: 'nowrap'
    }
  }, "Trusted by builders at"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      flex: 1,
      justifyContent: 'space-between'
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      textTransform: 'uppercase',
      fontSize: 22,
      letterSpacing: '0.04em',
      color: 'var(--fg-3)',
      opacity: 0.8
    }
  }, l)))));
};
window.LogoCloud = LogoCloud;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/LogoCloud.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
/* eslint-disable */
const Nav = ({
  active = 'product',
  onNav
}) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [{
    id: 'product',
    label: 'Product'
  }, {
    id: 'pricing',
    label: 'Pricing'
  }, {
    id: 'docs',
    label: 'Docs'
  }, {
    id: 'changelog',
    label: 'Changelog'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: scrolled ? 'rgba(255,255,255,0.85)' : '#fff',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-1)' : '1px solid transparent',
      transition: 'all 200ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    height: 26
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav?.(it.id);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: active === it.id ? 600 : 400,
      color: active === it.id ? 'var(--fg-1)' : 'var(--fg-2)',
      borderBottom: 0,
      transition: 'color 120ms'
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--fg-2)',
      borderBottom: 0
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "md"
  }, "Start building \u2192"))));
};
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ui.jsx
try { (() => {
/* eslint-disable */
// Shared atoms for the Websynthiq marketing UI kit.

const Wordmark = ({
  height = 28
}) => /*#__PURE__*/React.createElement("img", {
  src: "../../assets/logo-full.png",
  alt: "Websynthiq",
  style: {
    height,
    display: 'block'
  }
});
const WordmarkText = ({
  size = 36
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-flex',
    alignItems: 'baseline',
    lineHeight: 1
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: '"Saira Condensed", "Arial Narrow", sans-serif',
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: size,
    letterSpacing: '-0.01em',
    color: 'var(--brand-cobalt)'
  }
}, "WEB"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: '"Chakra Petch", system-ui, sans-serif',
    fontWeight: 700,
    fontSize: size,
    letterSpacing: '-0.03em',
    color: 'var(--brand-ink)'
  }
}, "synthiq"));
const Eyebrow = ({
  children,
  color
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--font-techno)',
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    color: color || 'var(--brand-cobalt)'
  }
}, children);
const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  style
}) => {
  const sizes = {
    sm: {
      padding: '6px 12px',
      fontSize: 12,
      borderRadius: 4
    },
    md: {
      padding: '10px 18px',
      fontSize: 14,
      borderRadius: 6
    },
    lg: {
      padding: '14px 24px',
      fontSize: 16,
      borderRadius: 8
    }
  }[size];
  const variants = {
    primary: {
      background: 'var(--brand-cobalt)',
      color: '#fff',
      border: 0
    },
    secondary: {
      background: '#fff',
      color: 'var(--brand-cobalt)',
      border: '1px solid var(--border-1)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-cobalt)',
      border: 0
    },
    ink: {
      background: '#000',
      color: '#fff',
      border: 0
    },
    onBrand: {
      background: '#fff',
      color: 'var(--brand-cobalt)',
      border: 0
    }
  }[variant];
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover && variant === 'primary' ? {
    background: 'var(--cobalt-600)'
  } : {};
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background 120ms var(--ease-out), box-shadow 120ms var(--ease-out)',
      boxShadow: variant === 'primary' ? '0 1px 2px rgba(13,24,60,0.10)' : 'none',
      ...sizes,
      ...variants,
      ...hoverStyle,
      ...style
    }
  }, children);
};
const Badge = ({
  tone = 'cobalt',
  children
}) => {
  const tones = {
    cobalt: {
      background: 'var(--cobalt-50)',
      color: 'var(--cobalt-700)',
      border: '1px solid var(--cobalt-100)'
    },
    steel: {
      background: 'var(--steel-50)',
      color: 'var(--steel-700)',
      border: '1px solid var(--steel-100)'
    },
    ink: {
      background: '#000',
      color: '#fff',
      border: '1px solid #000'
    },
    success: {
      background: '#DCFCE7',
      color: '#15803D',
      border: '1px solid #BBF7D0'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-techno)',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      padding: '4px 10px',
      borderRadius: 999,
      ...tones
    }
  }, children);
};
const StatusDot = ({
  tone = 'success',
  children
}) => {
  const colors = {
    success: '#16A34A',
    warning: '#D97706',
    danger: '#DC2626'
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: colors,
      boxShadow: `0 0 0 3px ${colors}30`
    }
  }), children);
};
Object.assign(window, {
  Wordmark,
  WordmarkText,
  Eyebrow,
  Button,
  Badge,
  StatusDot
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ui.jsx", error: String((e && e.message) || e) }); }

})();
