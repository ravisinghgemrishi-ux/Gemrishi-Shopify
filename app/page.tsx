import Link from 'next/link';

const gems = [
  ['Emerald','Panna','The classic green stone for Mercury'],
  ['Blue Sapphire','Neelam','Deep blue, rare and distinctive'],
  ['Ruby','Manik','A rich red gemstone with presence'],
  ['Yellow Sapphire','Pukhraj','Warm golden tones and clarity'],
  ['Red Coral','Moonga','Natural red coral for Vedic jewellery'],
  ['Pearl','Moti','Soft lustre and timeless elegance'],
  ['Opal','Opal','Play-of-colour and modern luxury'],
  ['Amethyst','Katela','Violet quartz with character'],
  ['Turquoise','Firoza','Blue-green natural gemstone'],
  ['Cats Eye','Lehsuniya','Distinctive chatoyancy']
];

const journeys = [
  ['01','Know your gemstone','Understand origin, treatment, certification, colour and quality before you buy.'],
  ['02','Find your fit','Explore by gemstone, budget, carat/ratti, colour and jewellery style.'],
  ['03','Buy with confidence','A transparent product experience, ready for Shopify checkout later.']
];

const posts = [
  ['Gemstone Guide','How to buy a natural gemstone without overpaying'],
  ['Education','Emerald vs. green tourmaline: what actually changes?'],
  ['Buying Guide','5 questions to ask before buying a ruby online']
];

export default function Home() {
  return <>
    <div className="announcement">Authentic gemstones · Certified stones · Pan-India delivery</div>
    <header className="nav">
      <div className="wrap navin">
        <Link href="/" className="logo">GEMRISHI<span>®</span></Link>
        <nav className="links">
          <Link href="/gemstones">Gemstones</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/blog">Knowledge</Link>
          <Link href="/locations">Our Stores</Link>
        </nav>
        <div className="actions">
          <Link className="pill" href="/gemstones">Search</Link>
          <Link className="bag" href="/cart">Bag <i>0</i></Link>
        </div>
      </div>
    </header>

    <main>
      <section className="hero">
        <div className="wrap heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">Authentic Vedic Gems · Since 1904</div>
            <h1>Rare stones.<br/><em>Rightly chosen.</em></h1>
            <p className="lead">Discover natural, certified gemstones selected with care — with the clarity, provenance and expert guidance you deserve.</p>
            <div className="heroActions">
              <Link className="cta" href="/gemstones">Explore gemstones <b>→</b></Link>
              <Link className="textLink" href="/blog">Learn before you buy <span>↗</span></Link>
            </div>
            <div className="microTrust"><span>✓ Certified</span><span>✓ Natural disclosure</span><span>✓ Expert guidance</span></div>
          </div>
          <div className="heroVisual">
            <div className="orb orbA"/><div className="orb orbB"/><div className="gemShape"/>
            <div className="visualLabel"><small>THE GEMRISHI STANDARD</small><strong>Clarity in every stone.</strong></div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="wrap trustin">
          <span>Built on gemstone expertise</span>
          <div><b>Natural</b><small>Clear treatment disclosure</small></div>
          <div><b>Certified</b><small>Documentation first</small></div>
          <div><b>Curated</b><small>Quality over quantity</small></div>
          <div><b>Guided</b><small>Human expert support</small></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sectionHead">
            <div><div className="eyebrow">Find your stone</div><h2>Shop by gemstone</h2></div>
            <Link href="/gemstones" className="viewAll">View all gemstones →</Link>
          </div>
          <p className="muted intro">Start with the stone you are looking for, then narrow it down by colour, carat, ratti, quality and budget.</p>
          <div className="gemGrid">
            {gems.map(([name,hindi,desc],i)=><Link className="gemCard" href={`/collections/${name.toLowerCase().replaceAll(' ','-')}`} key={name}>
              <div className={`gemArt art${i}`}><span>{name[0]}</span></div>
              <div className="gemInfo"><div><b>{name}</b><small>{hindi}</small></div><span className="arrow">↗</span><p>{desc}</p></div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="darkSection">
        <div className="wrap">
          <div className="eyebrow">The GemRishi way</div>
          <h2>Buy with knowledge.<br/><em>Not guesswork.</em></h2>
          <div className="journeyGrid">{journeys.map(([n,t,d])=><div className="journey" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
        </div>
      </section>

      <section className="section cream2">
        <div className="wrap split">
          <div>
            <div className="eyebrow">A better buying experience</div>
            <h2>Every stone has a story.<br/>We make it easier to read.</h2>
            <p className="lead small">From origin and treatment to certification and sizing, the new GemRishi experience puts the information that matters next to the stone — not hidden behind a sales pitch.</p>
            <Link href="/blog" className="cta">Explore the knowledge archive →</Link>
          </div>
          <div className="storyCard">
            <div className="storyTop"><span>GEMRISHI JOURNAL</span><span>01 / 04</span></div>
            <div className="storyGem">✦</div>
            <div><small>EDITORIAL</small><h3>What makes a gemstone truly valuable?</h3><p>Colour. Clarity. Cut. Origin. Treatment. And the confidence to know what you are buying.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sectionHead"><div><div className="eyebrow">From the journal</div><h2>Learn before you buy</h2></div><Link href="/blog" className="viewAll">View all articles →</Link></div>
          <div className="postGrid">{posts.map(([cat,title],i)=><Link href="/blog" className="post" key={title}><div className={`postImage p${i}`}><span>{i+1}</span></div><small>{cat}</small><h3>{title}</h3><p>Practical guidance from the GemRishi gemstone desk.</p></Link>)}</div>
        </div>
      </section>

      <section className="locations">
        <div className="wrap locationInner">
          <div><div className="eyebrow">Visit GemRishi</div><h2>See the stone.<br/><em>Speak to an expert.</em></h2><p>For customers who want to experience gemstones in person, our locations bring the same transparent approach offline.</p><Link className="cta light" href="/locations">Find a GemRishi location →</Link></div>
          <div className="mapCard"><div className="mapGrid"/><span>INDIA</span><b>01</b></div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="wrap footergrid">
        <div><div className="logo white">GEMRISHI<span>®</span></div><p>Authentic gemstones, thoughtfully selected.<br/>A modern expression of generations of gem expertise.</p></div>
        <div><b>Explore</b><Link href="/gemstones">Gemstones</Link><Link href="/collections">Collections</Link><Link href="/blog">Knowledge</Link></div>
        <div><b>Help</b><Link href="/locations">Stores</Link><Link href="/blog">Buying guide</Link><a href="mailto:knowyourjewelsbyrv@gmail.com">Contact</a></div>
        <div><b>Follow</b><a href="#">Instagram</a><a href="#">Facebook</a><a href="#">YouTube</a></div>
      </div>
      <div className="wrap footBottom"><span>© 2026 GemRishi</span><span>Natural gemstone buying, made clearer.</span></div>
    </footer>
  </>;
}
