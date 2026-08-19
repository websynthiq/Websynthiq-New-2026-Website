/* eslint-disable */
const Hero = () => (
  <section style={{ position: 'relative', overflow: 'hidden', background: '#fff', borderBottom: '1px solid var(--border-1)' }}>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 80% -10%, rgba(37,65,178,0.10), transparent 50%), radial-gradient(ellipse at 0% 100%, rgba(23,104,172,0.08), transparent 50%)',
      pointerEvents: 'none',
    }} />
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px 96px', position: 'relative' }}>
      <Eyebrow>Synthesize · v1.4</Eyebrow>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: 'clamp(56px, 7.2vw, 88px)',
        lineHeight: 0.95,
        letterSpacing: '-0.02em',
        margin: '16px 0 0',
        maxWidth: 1100,
      }}>
        <span style={{ color: 'var(--brand-cobalt)' }}>Ship the web,</span>
        <br />
        <span style={{ color: '#000' }}>without the build.</span>
      </h1>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 20,
        lineHeight: 1.5,
        color: 'var(--fg-2)',
        maxWidth: 620,
        marginTop: 32,
      }}>
        Synthesize production sites from a single config. Routing, caching, and TLS handled at the edge — you write the components.
      </p>
      <div style={{ display: 'flex', gap: 12, marginTop: 32, alignItems: 'center' }}>
        <Button size="lg">Start building →</Button>
        <Button variant="secondary" size="lg">Read the docs</Button>
        <StatusDot>All systems operational</StatusDot>
      </div>
    </div>
  </section>
);
window.Hero = Hero;
