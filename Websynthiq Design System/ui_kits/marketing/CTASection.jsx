/* eslint-disable */
const CTASection = () => (
  <section style={{
    background: 'linear-gradient(135deg, var(--brand-cobalt) 0%, var(--brand-steel) 100%)',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <img src="../../assets/favicon.png" style={{
      position: 'absolute', right: -80, bottom: -120, height: 480, opacity: 0.15, filter: 'brightness(2)',
    }} />
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px', position: 'relative' }}>
      <Eyebrow color="rgba(255,255,255,0.7)">Get started</Eyebrow>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: 72,
        lineHeight: 0.95,
        letterSpacing: '-0.02em',
        color: '#fff',
        margin: '12px 0 24px',
        maxWidth: 820,
      }}>
        Deploy your first site<br />in under five minutes.
      </h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,0.85)', maxWidth: 560, margin: '0 0 36px' }}>
        Free tier includes 1M edge requests, unlimited preview deploys, and zero-config TLS.
      </p>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button variant="onBrand" size="lg">Start free →</Button>
        <Button size="lg" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>Talk to sales</Button>
      </div>
    </div>
  </section>
);
window.CTASection = CTASection;
