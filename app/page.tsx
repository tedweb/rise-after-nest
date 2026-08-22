import Image from "next/image";
import { TripExplorer } from "./components/TripExplorer";

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Rise After Nest home">
          <span className="sunmark" aria-hidden="true"><i /></span>
          <span>RISE <em>AFTER</em> NEST</span>
        </a>
        <div className="links">
          <a href="#stories">Stories</a>
          <a href="#journey">Our map</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <a className="heroBannerLink" href="#stories" aria-label="Explore the latest Rise After Nest travel story">
          <Image
            src="/og.png"
            alt="Rise After Nest. The nest is empty. The itinerary isn’t. Tara scuba diving in clear Bahamian water."
            fill
            priority
            sizes="100vw"
            className="heroBannerDesktop"
          />
        </a>
        <Image src="/images/nassau-diver.jpg" alt="Tara scuba diving in the clear blue water near Nassau" fill priority sizes="100vw" className="heroImage" />
        <div className="heroShade" />
        <div className="heroCopy">
          <p className="eyebrow">A new chapter. A wide-open world.</p>
          <h1>The nest is empty.<br />The itinerary <em>isn’t.</em></h1>
          <p>We’re Doug &amp; Tara—chasing warm water, big views, and the kind of stories you can’t bring home in a suitcase.</p>
          <a className="button" href="#stories">Dive into our latest trip <span>↘</span></a>
        </div>
        <div className="heroRoute" aria-hidden="true"><span>✈</span></div>
      </section>

      <section className="intro" id="stories">
        <p className="sectionLabel">LATEST FIELD NOTE · 01</p>
        <div>
          <h2>Six days in<br /><i>paradise.</i></h2>
          <p>From the easy rhythm of Sandals Royal Bahamian to the pulse-quickening moment a reef shark glided into view, Nassau gave our next chapter one unforgettable opening scene.</p>
          <a href="#journey">Read the Nassau story →</a>
        </div>
        <figure>
          <Image src="/images/nassau-shark.jpg" alt="A reef shark swimming over the ocean floor near Nassau" fill sizes="(max-width: 800px) 90vw, 38vw" />
          <figcaption>Below the surface · New Providence</figcaption>
        </figure>
      </section>
      <TripExplorer />

      <section className="storyBand">
        <div className="storyPhoto"><Image src="/images/nassau-wreck.jpg" alt="Doug and Tara exploring an underwater wreck near Nassau" fill sizes="(max-width: 800px) 100vw, 60vw" /></div>
        <blockquote>“This is exactly what we meant by <i>after nest.</i> Not slowing down—finally having room to go deeper.”<cite>— Doug &amp; Tara</cite></blockquote>
      </section>

      <section className="guide">
        <header><p className="sectionLabel">THE QUICK TAKE</p><h2>Nassau,<br /><i>unpacked.</i></h2></header>
        <div className="guideGrid">
          <article><span>01</span><h3>Stay</h3><p>Sandals Royal Bahamian</p><small>Couples-only resort · Cable Beach</small></article>
          <article><span>02</span><h3>Dive</h3><p>Reefs, wrecks &amp; sharks</p><small>Clear water · Experienced guides</small></article>
          <article><span>03</span><h3>Pack</h3><p>Reef-safe essentials</p><small>Sun shirt · Dive log · Curiosity</small></article>
          <article><span>04</span><h3>Budget</h3><p>Prices in US dollars</p><small>Resort package + excursions</small></article>
        </div>
      </section>

      <section className="about" id="about">
        <div><p className="sectionLabel">MEET THE MARKOTTS</p><h2>Still curious.<br />Now <i>carry-on only.</i></h2></div>
        <p>We’re Doug and Tara Markott—a married team turning the empty-nest years into a passport full of shared stories. We travel together, write together, and share the honest details that help other couples take the leap.</p>
      </section>

      <footer>
        <a className="brand footerBrand" href="#top"><span className="sunmark" aria-hidden="true"><i /></span><span>RISE <em>AFTER</em> NEST</span></a>
        <p>Bahamas now. Key Largo next.</p>
        <div className="social" aria-label="Social channels coming soon"><span>YouTube</span><span>Instagram</span><span>Facebook</span></div>
        <small>© 2026 Doug &amp; Tara Markott</small>
      </footer>
    </main>
  );
}
