/* eslint-disable */
const Footer = () => {
  const cols = [
    { title: 'Product',   links: ['Edge runtime', 'Caching', 'Routing', 'Analytics', 'Pricing'] },
    { title: 'Developers', links: ['Docs', 'CLI reference', 'API', 'Changelog', 'Status'] },
    { title: 'Company',   links: ['About', 'Careers', 'Press kit', 'Contact'] },
    { title: 'Legal',     links: ['Privacy', 'Terms', 'DPA', 'Security'] },
  ];
  return (
    <footer style={{ background: 'var(--gray-900)', color: 'var(--gray-300)', borderTop: '4px solid var(--brand-cobalt)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px 48px', display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 48 }}>
        <div>
          <img src="../../assets/favicon.png" style={{ height: 40, filter: 'brightness(1.5)' }} />
          <div style={{ fontFamily: 'var(--font-techno)', fontWeight: 700, fontSize: 18, color: '#fff', marginTop: 14 }}>Websynthiq</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.6, marginTop: 8, maxWidth: 260, color: 'var(--gray-400)' }}>
            A smarter substrate for the modern web.
          </div>
        </div>
        {cols.map(c => (
          <div key={c.title}>
            <div style={{ fontFamily: 'var(--font-techno)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#fff' }}>{c.title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
              {c.links.map(l => (
                <a key={l} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-400)', borderBottom: 0 }}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--gray-700)', padding: '20px 32px', maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-400)' }}>
        <div>© 2026 Websynthiq, Inc.</div>
        <div style={{ display: 'flex', gap: 18 }}>
          <StatusDot>All systems operational</StatusDot>
          <span>v1.4.0</span>
        </div>
      </div>
    </footer>
  );
};
window.Footer = Footer;
