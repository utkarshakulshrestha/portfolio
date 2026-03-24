import CaseStudyLayout from '@/components/CaseStudyLayout'

export const metadata = {
  title: 'PNC Prism – Utkarsha Kulshrestha',
  description: 'AI-powered PM productivity platform designed for PNC at CMU Tepper.',
}

export default function PNCPrism() {
  return (
    <CaseStudyLayout
      title="PNC Prism: AI-Powered PM Productivity Platform"
      subtitle="CMU Tepper · Academic Project for PNC"
      heroImage="/images/case-studies/pnc-.png"
      logo="/images/case-studies/pnc-.png"
      role="Product Lead & Strategy"
      team="4-member cross-functional team"
      timeline="November 2025"
      outcome="400% projected Year 1 ROI"
    >
      <h2>Overview</h2>
      <p>
        PNC Prism is an AI-powered productivity solution I designed as part of a CMU Tepper Innovation Challenge.
        The platform serves as an intelligent co-pilot embedded across the entire product lifecycle — from initial
        strategy to go-to-market execution — empowering PNC's 200+ product managers to work smarter, not harder.
      </p>

      <h2>The Problem</h2>
      <p>
        Product managers at PNC face increasing pressure to deliver faster while managing complex regulatory,
        business, and customer needs. Our research revealed:
      </p>
      <ul>
        <li><strong>98% of PMs</strong> surveyed use some form of AI at work</li>
        <li><strong>78% of PMs</strong> use AI agents for productivity</li>
        <li>Yet only <strong>62%</strong> have access to firm-sanctioned AI tools</li>
      </ul>
      <p>PMs were spending excessive time on:</p>
      <ul>
        <li>Manually gathering market intelligence from disparate sources (2-3 weeks)</li>
        <li>Writing user stories and grooming backlogs (8-10 hours/week)</li>
        <li>Compiling status updates for stakeholders (3-5 hours/week)</li>
        <li>Analyzing customer feedback data (quarterly, ad-hoc)</li>
      </ul>

      <h2>User Research & Personas</h2>
      <p>We identified three core PM personas at PNC:</p>

      <h3>Strategic PM (10+ years experience)</h3>
      <p>
        <strong>Before Prism:</strong> Manually gathering and synthesizing market intelligence, creating reports
        for stakeholder alignment.<br />
        <strong>Pain Point:</strong> Less time for high-level strategy and proactive decision-making.
      </p>

      <h3>Core PM (5-10 years experience)</h3>
      <p>
        <strong>Before Prism:</strong> Bogged down by tactical execution — writing user stories, grooming
        backlogs, coordinating updates.<br />
        <strong>Pain Point:</strong> Repetitive tasks consuming time that could go to strategic work.
      </p>

      <h3>New PM (&lt;5 years experience)</h3>
      <p>
        <strong>Before Prism:</strong> Steep learning curve in a complex, regulated industry.<br />
        <strong>Pain Point:</strong> Struggling to identify right data, interpret customer feedback, learn GTM processes.
      </p>

      <h2>Solution: PNC Prism</h2>
      <p>Prism is a modular AI platform with six integrated components:</p>

      <h3>1. Opportunity Canvas</h3>
      <p>Advances product strategy and ideation through AI-powered market analysis and opportunity identification.</p>

      <h3>2. Clarity Engine</h3>
      <p>Facilitates requirements and development by automating user story drafting and backlog prioritization based on strategic inputs.</p>

      <h3>3. Insight Synthesizer</h3>
      <p>Boosts customer and market research with AI-generated dashboards showing customer sentiment and trends in real-time.</p>

      <h3>4. ProtoGen</h3>
      <p>Advances prototyping and testing with rapid iteration capabilities.</p>

      <h3>5. Launchpad</h3>
      <p>Bolsters go-to-market execution with guided workflows and automated planning.</p>

      <h3>6. FlowBot</h3>
      <p>Provides automation and intelligent agents for routine updates and cross-functional coordination.</p>

      <h2>Impact & Metrics</h2>

      <h3>Efficiency Gains</h3>
      <table>
        <thead>
          <tr><th>PM Responsibility</th><th>Before Prism</th><th>After Prism</th></tr>
        </thead>
        <tbody>
          <tr><td>Market Research</td><td>2-3 weeks manual gathering</td><td>1-2 days AI-synthesized insights</td></tr>
          <tr><td>Requirement Documentation</td><td>8-10 hours/week</td><td>2-3 hours/week (review AI drafts)</td></tr>
          <tr><td>Stakeholder Reporting</td><td>3-5 hours/week</td><td>Instant real-time (FlowBot)</td></tr>
          <tr><td>Customer Insights</td><td>Quarterly ad-hoc</td><td>Real-time AI dashboard</td></tr>
        </tbody>
      </table>

      <h3>Business Value</h3>
      <ul>
        <li><strong>Productivity Savings:</strong> $3.4M annually (200 PMs × 5 hours/week saved)</li>
        <li><strong>Reduced Rework:</strong> $4.7M saved (5-10% less engineering rework)</li>
        <li><strong>Accelerated Revenue:</strong> $4.2M from faster time-to-market</li>
        <li><strong>Total Annual Benefit:</strong> $12.2M (moderate estimate)</li>
        <li><strong>Year 1 ROI:</strong> 400%</li>
      </ul>

      <h2>Competitive Analysis</h2>
      <p>We analyzed how competitors use Generative AI:</p>
      <table>
        <thead>
          <tr><th>Bank</th><th>Market Research</th><th>Documentation</th><th>Stakeholder Reporting</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Capital One</strong></td><td>25%+ faster trend ID with agentic AI</td><td>20,000+ employees use AI workflows</td><td>Autonomous agents for board/reg filings</td></tr>
          <tr><td><strong>JPMorgan Chase</strong></td><td>$1B+ annual value from AI quant models</td><td>COiN: 360,000 legal docs/year auto-reviewed</td><td>47 global market dashboards</td></tr>
          <tr><td><strong>Bank of America</strong></td><td>5x audit speed, AI-driven insights</td><td>+35% accuracy in document processing</td><td>+15M digital insights/month</td></tr>
        </tbody>
      </table>

      <h2>Implementation Roadmap</h2>
      <h3>Phase 1: Pilot & Learn (3 months)</h3>
      <ul>
        <li>Select 2 pilot teams on Clarity Engine & Insight Synthesizer</li>
        <li>Integrate read-only Jira, feedback channels</li>
        <li>Validate assumptions, gather feedback, measure KPIs</li>
      </ul>

      <h3>Phase 2: Expand & Refine (6 months)</h3>
      <ul>
        <li>Launch to all digital teams; add Launchpad, FlowBot</li>
        <li>Launch "Prism Champions" and train power users</li>
        <li>Broaden adoption; demonstrate productivity gains</li>
      </ul>

      <h3>Phase 3: Scale & Optimize (Ongoing)</h3>
      <ul>
        <li>Enterprise-wide rollout</li>
        <li>Continuous improvement based on usage data</li>
        <li>Expand to adjacent roles (marketing, engineering, design)</li>
      </ul>

      <h2>Key Learnings</h2>
      <ol>
        <li><strong>Start with user pain points:</strong> Deep persona research revealed specific time drains that AI could address</li>
        <li><strong>Quantify everything:</strong> Building an ROI model helped stakeholders understand business value</li>
        <li><strong>Competitive benchmarking:</strong> Showing what competitors are doing created urgency</li>
        <li><strong>Phased rollout:</strong> Pilot approach reduces risk and builds internal champions</li>
      </ol>
    </CaseStudyLayout>
  )
}
