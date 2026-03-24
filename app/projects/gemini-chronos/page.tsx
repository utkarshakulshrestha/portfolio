import CaseStudyLayout from '@/components/CaseStudyLayout'

export const metadata = {
  title: 'Gemini Chronos – Utkarsha Kulshrestha',
  description: 'Agentic commerce platform designed for Google at the USC 2026 Global Case Competition.',
}

export default function GeminiChronos() {
  return (
    <CaseStudyLayout
      title="Gemini Chronos: Designing an Agentic Commerce Platform for Google"
      subtitle="Google · USC 2026 Global Case Competition"
      heroImage="/images/case-studies/chronos-hero.png"
      logo="/images/clients/gemini-chronos.png"
      role="Product Strategy & Design"
      team="4-member team"
      timeline="March 2026"
      outcome="Competition finalist"
    >
      <h2>The Challenge</h2>
      <p>
        At the USC 2026 Global Case Competition, our team was tasked with designing Google's next major
        commerce platform — one that could compete with Amazon's Rufus, OpenAI's Operator, and Apple
        Intelligence in the emerging agentic commerce space.
      </p>
      <p>
        The core insight: <strong>96% of ad clicks don't convert</strong>. Users spend hours comparing
        options across 14+ browser tabs. What if an AI agent could do all of this — plan, negotiate, and
        execute — in a single prompt?
      </p>

      <h2>Our Solution: Gemini Chronos</h2>
      <p>
        We designed Gemini Chronos — an intelligence layer on top of Google's Universal Commerce Protocol (UCP)
        that transforms how people buy.
      </p>
      <blockquote>"Not more buying. Smarter living."</blockquote>

      <h3>The Core Concept</h3>
      <p>Chronos is an AI agent that:</p>
      <ol>
        <li><strong>Plans</strong> — Parses intent, searches across 12 Google surfaces (Search, Maps, YouTube, Gmail, etc.)</li>
        <li><strong>Negotiates</strong> — Runs collective demand auctions where merchants bid for aggregated user demand</li>
        <li><strong>Manages</strong> — Tracks purchases against financial goals, optimizes subscriptions, handles returns</li>
      </ol>

      <h2>Product Architecture</h2>
      <h3>UCP+ Protocol Layers</h3>
      <p>We extended Google's UCP with 6 new innovation layers:</p>
      <table>
        <thead>
          <tr><th>Layer</th><th>Function</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Intent Intelligence</strong></td><td>Evaluates every purchase against user life goals</td></tr>
          <tr><td><strong>Demand Signals</strong></td><td>Collective negotiating via reverse merchant auctions</td></tr>
          <tr><td><strong>Brand Voice</strong></td><td>Merchant identity preserved in agent UX</td></tr>
          <tr><td><strong>Trust Protocol</strong></td><td>Confidence scores + tiered guarantees</td></tr>
          <tr><td><strong>SME Equalizer</strong></td><td>No-code onboarding + diversity-weighted ranking</td></tr>
          <tr><td><strong>Lifecycle Loop</strong></td><td>Post-purchase tracking, returns, reorder</td></tr>
        </tbody>
      </table>

      <h3>Tiered Autonomy Model</h3>
      <p>We designed a trust spectrum that lets users control agent autonomy:</p>
      <ul>
        <li><strong>Full Auto</strong> — Low stakes (deal tracking, wishlists)</li>
        <li><strong>Light OK</strong> — Medium stakes (groceries, reservations)</li>
        <li><strong>Full Review</strong> — High stakes (flights, hotels, electronics)</li>
        <li><strong>User Only</strong> — Critical (payment details, legal terms)</li>
      </ul>

      <h2>Use Cases We Designed</h2>

      <h3>1. Travel Planning</h3>
      <p>
        <em>"Plan a 5-day trip to Tokyo for 2 under $3,000."</em>
      </p>
      <p>
        Agent searches Flights, ranks hotels via Maps, plots activities, bundles for savings,
        and books via Wallet — all in 3 minutes.
      </p>

      <h3>2. Meal Planning</h3>
      <p>
        <em>"Healthy meals for the week under $80. Vegetarian, nut allergy."</em>
      </p>
      <p>
        Agent uses smartwatch data for calorie needs, compares 3 nearby stores, detects loyalty cards,
        and orders from the optimal store.
      </p>

      <h3>3. Financial Life Manager</h3>
      <p>
        Agent tracks every purchase against user goals. "Puts you $40 behind Tokyo. Wait 2 weeks?"
        — proactive guidance, not just transactions.
      </p>

      <h2>Business Model & Financials</h2>
      <p>We built a complete 5-year financial model:</p>
      <table>
        <thead>
          <tr><th>Metric</th><th>Year 5 Projection</th></tr>
        </thead>
        <tbody>
          <tr><td>Users</td><td>378M</td></tr>
          <tr><td>Revenue</td><td>$17.2B</td></tr>
          <tr><td>Net Margin</td><td>46.4%</td></tr>
          <tr><td>Breakeven</td><td>Q2 2030</td></tr>
        </tbody>
      </table>

      <h3>Revenue Streams</h3>
      <ul>
        <li><strong>Transaction commissions</strong> (5-8% — lowest in market)</li>
        <li><strong>Premium subscriptions</strong> ($9.99/mo for Financial Life Manager)</li>
        <li><strong>Demand auction fees</strong></li>
        <li><strong>GCP platform APIs</strong></li>
      </ul>

      <h2>Competitive Moat</h2>
      <p>We analyzed why only Google can win agentic commerce:</p>
      <table>
        <thead>
          <tr><th>Capability</th><th>Google</th><th>Amazon</th><th>OpenAI</th><th>Apple</th></tr>
        </thead>
        <tbody>
          <tr><td>Surfaces</td><td>12</td><td>1</td><td>1</td><td>iOS only</td></tr>
          <tr><td>Users</td><td>4B+</td><td>Marketplace only</td><td>ChatGPT only</td><td>28% global</td></tr>
          <tr><td>Payments</td><td>Wallet</td><td>—</td><td>Rents Stripe</td><td>—</td></tr>
          <tr><td>Take Rate</td><td>5-8%</td><td>15-45%</td><td>~7%</td><td>—</td></tr>
        </tbody>
      </table>

      <h2>Trust Framework</h2>
      <p>Only 4% of consumers trust AI to buy autonomously. We designed a 3-tier guarantee system:</p>
      <ol>
        <li><strong>Agent Error = Full Refund</strong> — Google pays 100%</li>
        <li><strong>Quality Gap = Mediated</strong> — Google refunds, claws back from merchant</li>
        <li><strong>Subjective = Credit</strong> — Premium users get satisfaction credits</li>
      </ol>

      <h2>Responsible AI Safeguards</h2>
      <ul>
        <li>Algorithmic audits every 90 days</li>
        <li>Diversity-weighted ranking (SMEs compete with enterprise)</li>
        <li>"Why this?" explainability on every recommendation</li>
        <li>Full audit trail for every agent action</li>
        <li>EU DMA/DSA, GDPR, CCPA, PCI-DSS compliant</li>
      </ul>

      <h2>Key Learnings</h2>
      <ol>
        <li><strong>Agentic AI Product Design</strong> — Multi-agent architecture with tiered autonomy</li>
        <li><strong>Business Model Innovation</strong> — $17B revenue model with 5-year projections</li>
        <li><strong>Competitive Strategy</strong> — Moat analysis across Google, Amazon, OpenAI, Apple</li>
        <li><strong>Trust & Safety Design</strong> — 3-tier guarantees, responsible AI framework</li>
      </ol>
    </CaseStudyLayout>
  )
}
