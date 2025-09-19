import React from "react";
import profile_pic from "./pic.jpg";
import resume from "./resume.pdf";
import Blurtext from "./BlurText";
import "./App.css";

const PROFILE = {
  name: "Yunho Chang",
  email: "yunhoc2@illinois.edu",
  location: "United States",
  github: "https://github.com/chyunho1204",
  linkedin: "https://www.linkedin.com/in/yunhoc1204/",
  resume: resume,
  photo: profile_pic,
};

const EDUCATION = [
  {
    school: "University of Illinois at Urbana-Champaign",
    degree: "B.S. in Computer Science and Economics",
    period: "August 2024 – Present",
    details:
      "Clubs and Activities: AIM Partners, AQTE, Undergraduate Research Assistant"
  },
  {
    school: "University of Minnesota - Twin Cities",
    degree: "B.S. in Computer Science",
    period: "August 2021 – May 2022",
    details:
      "Four-Year Merit Scholarships (The Global Excellence Scholarship), The Undergraduate Research Scholarship",
  },
];

const INTERESTS = [
  "Quantitative Finance",
  "Natural Language Processing",
  "Operations Research",
];

const WORK = [
  {
    company: "Samsung Electronics",
    title: "Product and Data Engineer Intern | C++, CUDA",
    period: "June 2025 - August 2025",
    bullets: [
      "Automated process line equivalence tests, hitting ~99% accuracy across multiple fab lines.",
      "Executed high-frequency TSV tests on 3,000 vias for reliability analytics.",
      "Performed over-spec thermal stress testing on 80+ HBM3E dies.",
    ],
  },
  {
    company: "Alpha Investment Management Partners",
    title: "President",
    period: "August 2024 - Present",
    url: "https://www.aim-illinois.com",
    bullets: [
      "Analyzed corporate filings to extract financial metrics including EBITDA, FCF, and leverage ratios.",
      "Automated DCF valuation models using unlevered FCF and FCFF methods, incorporating WACC, terminal growth, and scenario analysis.",
      "Delivered equity research reports with investment recommendations, leading to a 24% average return.",
    ],
  },
];

const RESEARCH = [
  {
    org: "Gies Business Research Lab",
    role: "Undergraduate Research Assistant | Python, R",
    period: "August 2024 - Present",
    bullets: [
      "Conducted research under Prof. Carlos Torelli applying NLP methods to study consumer behavior in online reviews.",
      "Scraped and analyzed 10,000+ consumer reviews from Amazon and Yelp to study sentiment and behavioral patterns.",
      "Built Python pipelines for sentiment analysis and LDA topic modeling, improving processing efficiency by 40%.",
    ],
  },
  {
    org: "Business Intelligence Group",
    role: "Consultant | Python, R",
    period: "January 2025 - May 2025",
    bullets: [
      "Built automated tools parsing 1,000+ filings with 95% accuracy.",
      "Streamlined workflows, improving update speed and accuracy by 65%.",
      "Applied consulting frameworks to link financial analysis with growth insights."
    ],
  },
];

const EXPERIENCES = [
  ...WORK.map(w => ({
    title: w.title,
    org: w.company,
    period: w.period,
    bullets: w.bullets,
    url: w.url,
  })),
  ...RESEARCH.map(r => ({
    title: r.role,
    org: r.org,
    period: r.period,
    bullets: r.bullets,
  })),
]

const PROJECTS = [
  {
    name: "Instagram Thumbnail Scraper",
    summary:
      "Built a scraper to extract Instagram thumbnails and metadata, processing over 8,000 images. Automated dynamic content loading and scrolling with Selenium, reducing data collection time by 60% compared to manual methods.",
    tech: ["Python", "BeautifulSoup", "Selenium"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chyunho1204/Instagram-Thumbnail-Scraper",
      },
    ],
  },
  {
    name: "AIM Partners Website",
    summary:
      "Designed and developed the official AIM Partners website, building a professional online presence. Implemented dynamic UI/UX features, including dynamic animations and live financial data.",
    tech: ["HTML/CSS", "JSX", "React.js"],
    links: [
      {
        label: "Github",
        href: "https://github.com/chyunho1204/aimpartnersuiuc",
      }
    ],
  },
  {
    name: "Company DCF Automation",
    summary:
      "Integrated the Dart Electronic Disclosure API to automate financial statement and DCF analysis. Improved data retrieval and analysis efficiency by 70%, eliminating manual download and input steps.",
    tech: ["Python", "JavaScript", "REST API"],
    links: [
      {
        label: "Non-Disclosure"
      }
    ],
  },
];

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <img src={PROFILE.photo} alt={PROFILE.name} className="avatar" />
            <div>
              <div className="name">{PROFILE.name}</div>
            </div>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experiences">Experiences</a>
            <a href="#projects">Projects</a>
          </nav>
        </div>
      </header>

      <h2 className="intro">
          <Blurtext
              text="Hi There! Welcome to My Website!"
              delay={250}
              animateBy="words"
              direction="top"
              // onAnimationComplete={handleAnimationComplete}
              className="blur-text"
          />
      </h2>

      <main className="container">
        <Section id="about" title="About">
          <div className="about">
            <div className="about-left">
              <img src={PROFILE.photo} alt={PROFILE.name} className="hero-photo" />
              <div className="profile-extra">
                <p><strong>Nationality:<br/></strong>Republic of Korea (Citizen) <br/>United States (Green Card)</p>
                <p><strong>Languages:<br/></strong> English & Korean (Bilingual)</p>
              </div>
            </div>

            <div className="about-text">
              <p>
                I am currently majoring in Computer Science and Economics at the University of Illinois at Urbana-Champaign. 
                My academic and project experience mostly lies on the intersection of technology and finance, 
                with several quantitative finance and data-driven research projects.
              </p>
              <p>
                I am strongly interested in pursuing to a PhD in Computer Science or Operations Research, 
                focusing on building efficient algorithms and systems that solve complex problems. 
                Among my technical strengths, I am most confident in C++, 
                and I particularly enjoy taking projects from scratch and driving them through careful optimization to achieve robust, high-performance solutions. 

                <br/><br/>Relevant Courseworks:<br/>
                Intro to CS I&II, Discrete Math, Data Structures and Algorithms, Text Information Systems (NLP), Financial Engineering, Financial Econometrics, Calculus I~III, Linear Algebra
                <br/><br/>Programming Langugaes:<br/>
                C/C++, Python, Java, JavaScript, R, HTML/CSS, Flutter
              </p>
              <div className="chips">
                {INTERESTS.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="cta">
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn outline">GitHub</a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn outline">LinkedIn</a>
                {PROFILE.resume !== "#" && (
                  <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="btn outline">
                    Resume
                  </a>
                )}
              </div>
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid">
            {EDUCATION.map((e) => (
              <div key={e.school} className="card">
                <div className="card-head">
                  <div className="card-title">{e.school}</div>
                </div>
                <div className="degree-period">
                  <div className="degree">{e.degree}</div>
                  <div className="period">{e.period}</div>
                </div>
                <p className="card-body">{e.details}</p>
              </div>
            ))}
          </div>
        </Section>
        
        <Section id="experiences" title="Experiences">
          <div className="stack">
            {EXPERIENCES.map((x, idx) => (
              <div key={idx} className="card card-full">
                <div className="card-head">
                  <div className="card-title">
                    {x.title}
                    {x.url && (
                      <>
                        {" | "}
                        <a
                          href={x.url}
                          target="_blank"
                          rel="noreferrer"
                          className="org-link"
                        >
                          Website
                        </a>
                      </>
                    )}
                  </div>
                  <div className="muted">{x.period}</div>
                </div>
                <div className="muted">{x.org}</div>
                {x.bullets?.length > 0 && (
                  <ul className="bullets">
                    {x.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid three">
            {PROJECTS.map((p) => (
              <div key={p.name} className="card">
                <div className="card-head">
                  <div className="card-title">{p.name}</div>
                </div>
                <p className="card-body">{p.summary}</p>
                <div className="tech">
                  {p.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="links">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
