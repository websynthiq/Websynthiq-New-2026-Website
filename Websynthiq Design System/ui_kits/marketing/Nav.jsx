/* eslint-disable */
const Nav = ({ active = 'product', onNav }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [
    { id: 'product', label: 'Product' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'docs', label: 'Docs' },
    { id: 'changelog', label: 'Changelog' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: scrolled ? 'rgba(255,255,255,0.85)' : '#fff',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-1)' : '1px solid transparent',
      transition: 'all 200ms var(--ease-out)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', gap: 32 }}>
        <Wordmark height={26} />
        <nav style={{ display: 'flex', gap: 28 }}>
          {items.map(it => (
            <a key={it.id} href="#" onClick={e => { e.preventDefault(); onNav?.(it.id); }} style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              fontWeight: active === it.id ? 600 : 400,
              color: active === it.id ? 'var(--fg-1)' : 'var(--fg-2)',
              borderBottom: 0,
              transition: 'color 120ms',
            }}>{it.label}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-2)', borderBottom: 0 }}>Sign in</a>
          <Button size="md">Start building →</Button>
        </div>
      </div>
    </header>
  );
};
window.Nav = Nav;
