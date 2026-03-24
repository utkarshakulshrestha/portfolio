import CaseStudyLayout from '@/components/CaseStudyLayout'

export const metadata = {
  title: 'EY Automation Platform – Utkarsha Kulshrestha',
  description: 'Building a 0→1 automation platform that won a North American Software Award.',
}

export default function EYAutomation() {
  return (
    <CaseStudyLayout
      title="Building a 0→1 Product That Won an Industry Award"
      subtitle="EY GDS · Shipped Product"
      heroImage="/images/case-studies/ey.png"
      logo="/images/case-studies/ey.png"
      role="Associate PM → Product Lead"
      team="20-person cross-functional team"
      timeline="Jan 2021 – Apr 2023"
      outcome="72% efficiency gain, North American Software Award"
    >
      <h2>The Challenge</h2>
      <p>
        In early 2021, I joined EY's consulting practice and quickly identified a critical pain point:
        <strong> our testing teams were spending 70%+ of their time on repetitive manual testing tasks</strong>.
        This wasn't just inefficient — it was unsustainable. With growing client demands and shrinking timelines,
        we needed a fundamentally different approach.
      </p>
      <p>
        The question wasn't whether to automate, but <em>how</em> to build something that would actually get
        adopted across diverse teams with varying technical skills.
      </p>

      <h2>Discovery: Understanding the Real Problem</h2>
      <p>Before writing a single line of code, I spent 6 weeks in deep customer discovery:</p>

      <h3>User Research</h3>
      <ul>
        <li><strong>30+ interviews</strong> with QA engineers, test leads, and delivery managers</li>
        <li>Shadowed 5 testing teams during their daily workflows</li>
        <li>Surveyed 100+ practitioners on their biggest pain points</li>
      </ul>

      <h3>Key Insights</h3>
      <table>
        <thead>
          <tr><th>Pain Point</th><th>Frequency</th><th>Impact</th></tr>
        </thead>
        <tbody>
          <tr><td>Repetitive test script creation</td><td>85%</td><td>High</td></tr>
          <tr><td>Fragmented tools across projects</td><td>72%</td><td>Medium</td></tr>
          <tr><td>Steep learning curve for automation</td><td>68%</td><td>High</td></tr>
          <tr><td>No centralized reporting</td><td>61%</td><td>Medium</td></tr>
        </tbody>
      </table>

      <h3>The "Aha" Moment</h3>
      <p>
        The breakthrough came when I realized: <strong>the problem wasn't automation — it was accessibility</strong>.
        Existing tools required significant coding expertise, which created a bottleneck. Only 20% of our testers
        could write automation scripts, while the other 80% were stuck in manual processes.
      </p>
      <p>
        <strong>Product Hypothesis:</strong> If we could make automation accessible to non-coders while remaining
        powerful enough for experts, we could 5x our automation coverage.
      </p>

      <h2>Defining the Product Vision</h2>
      <blockquote>
        "Enable any tester — regardless of coding ability — to create, run, and maintain automated tests
        in minutes, not days."
      </blockquote>

      <h3>Success Metrics</h3>
      <ul>
        <li><strong>North Star:</strong> % reduction in manual testing hours</li>
        <li><strong>Adoption:</strong> # of active users per month</li>
        <li><strong>Quality:</strong> Test pass rate and defect escape rate</li>
        <li><strong>Efficiency:</strong> Time to create new test scripts</li>
      </ul>

      <h3>Prioritization (Modified RICE)</h3>
      <p><strong>Phase 1 (MVP):</strong></p>
      <ul>
        <li>No-code test builder with drag-and-drop interface</li>
        <li>Pre-built component library for common actions</li>
        <li>Basic reporting dashboard</li>
      </ul>
      <p><strong>Phase 2:</strong></p>
      <ul>
        <li>Integration with existing CI/CD pipelines</li>
        <li>Advanced scripting for power users</li>
        <li>Cross-browser testing support</li>
      </ul>
      <p><strong>Phase 3:</strong></p>
      <ul>
        <li>AI-powered test generation</li>
        <li>Self-healing tests</li>
        <li>Predictive analytics</li>
      </ul>

      <h2>Building the Team & Execution</h2>
      <h3>Team Structure</h3>
      <p>I assembled and led a cross-functional team of 20:</p>
      <ul>
        <li>8 developers (4 frontend, 4 backend)</li>
        <li>4 QA engineers (dogfooding our own product)</li>
        <li>3 UX designers</li>
        <li>2 DevOps engineers</li>
        <li>3 domain experts</li>
      </ul>

      <h3>Key Decisions I Made</h3>
      <p>
        <strong>Build vs. Buy:</strong> Evaluated 5 commercial tools (Selenium, TestComplete, etc.). None met
        our accessibility + enterprise requirements. Decision: build custom on Selenium foundation — 40% lower
        TCO over 3 years + full customization.
      </p>
      <p>
        <strong>Web-First Architecture:</strong> Chose web app over desktop for easier deployment, lower
        maintenance, and better collaboration.
      </p>
      <p>
        <strong>Freemium Internal Model:</strong> Instead of mandating usage, we made it opt-in and created
        internal "champions." Result: organic adoption drove 3x faster growth than top-down mandates.
      </p>

      <h2>Iteration Based on Feedback</h2>
      <h3>Beta Launch Learnings</h3>
      <p>After 8 weeks, we launched to 50 beta users. Key feedback:</p>
      <table>
        <thead>
          <tr><th>Feedback</th><th>Action Taken</th></tr>
        </thead>
        <tbody>
          <tr><td>"Too many clicks to create a test"</td><td>Reduced steps from 12 to 5</td></tr>
          <tr><td>"Can't find my saved tests"</td><td>Added search + favorites</td></tr>
          <tr><td>"Need to run tests on schedule"</td><td>Built scheduler in Phase 1.5</td></tr>
          <tr><td>"Reporting is too basic"</td><td>Partnered with BI team for dashboards</td></tr>
        </tbody>
      </table>

      <h3>Pivot Moment</h3>
      <p>
        Original plan included mobile testing in Phase 2. User research showed only 12% of projects needed
        mobile testing. I deprioritized mobile and accelerated CI/CD integration instead — a decision that
        increased adoption by 40%.
      </p>

      <h2>Results & Impact</h2>
      <h3>Quantitative Results</h3>
      <table>
        <thead>
          <tr><th>Metric</th><th>Before</th><th>After</th><th>Change</th></tr>
        </thead>
        <tbody>
          <tr><td>Manual testing hours/week</td><td>1,200</td><td>336</td><td><strong>-72%</strong></td></tr>
          <tr><td>Automation coverage</td><td>15%</td><td>67%</td><td><strong>+347%</strong></td></tr>
          <tr><td>Avg. time to create test</td><td>4 hours</td><td>25 min</td><td><strong>-90%</strong></td></tr>
          <tr><td>Active monthly users</td><td>0</td><td>450+</td><td>—</td></tr>
          <tr><td>Automated scripts created</td><td>0</td><td>3,000+</td><td>—</td></tr>
        </tbody>
      </table>

      <h3>Recognition</h3>
      <ul>
        <li><strong>North American Software Testing Award 2022</strong> — Industry recognition for innovation</li>
        <li><strong>EY Innovation Award</strong> — Internal recognition for business impact</li>
        <li><strong>$2.1M annual savings</strong> in testing costs</li>
        <li><strong>15+ client projects</strong> adopted the platform</li>
      </ul>

      <h2>Key Learnings</h2>
      <h3>What Worked</h3>
      <ol>
        <li><strong>Deep discovery before building</strong> — 6 weeks of research saved months of rework</li>
        <li><strong>Dogfooding relentlessly</strong> — Our QA team used the product daily, catching issues early</li>
        <li><strong>Champions over mandates</strong> — Organic adoption created sustainable growth</li>
      </ol>
      <h3>What I'd Do Differently</h3>
      <ol>
        <li><strong>Invest in documentation earlier</strong> — Self-serve onboarding was a late addition</li>
        <li><strong>Build analytics from day 1</strong> — We retrofitted usage tracking, which limited early insights</li>
        <li><strong>Plan for scale sooner</strong> — Performance issues at 200+ users required architecture changes</li>
      </ol>
    </CaseStudyLayout>
  )
}
