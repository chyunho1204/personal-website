import React from "react";
import Blurtext from "./BlurText";
import "./App.css";
// import { type } from "@testing-library/user-event/dist/type";

const PROFILE_PIC = process.env.PUBLIC_URL + "/pic.jpg";
// const RESUME_URL = process.env.PUBLIC_URL + "/RESUME_URL.pdf";

const PROFILE = {
  name: "Yunho Chang",
  email: "yunhoc2@illinois.edu",
  location: "United States",
  github: "https://github.com/chyunho1204",
  linkedin: "https://www.linkedin.com/in/yunhoc1204/",
  // RESUME_URL: RESUME_URL,
  photo: PROFILE_PIC,
};
const EDUCATION = [
  {
    school: "University of Illinois at Urbana-Champaign",
    degree: "B.S. in Computer Science & Econ",
    period: "August 2024 – Expected May 2026",
    details:
      "Clubs and Activities: AIM Partners, AQTE, Undergraduate Research Assistant",
    gpa:
      "GPA: 3.88/4.0, Technical: 3.93/4.0",
  },
  {
    school: "University of Minnesota - Twin Cities",
    degree: "B.S. in Computer Science",
    period: "August 2021 – May 2022",
    details:
      "Four-Year Merit Scholarships (The Global Excellence Scholarship), The Undergraduate Research Scholarship, Undergraduate Course Assistant",
    military: "Mandatory Military Service 2022 - 2024, Transferred Out"
  },
];
const INTERESTS = [
  "Algorithmic Game Theory",
  "Theoretical Machine Learning",
  "Hardware-Software Co-Design",
];
const RESEARCH = [
  {
    org: "Samsung Electronics",
    role: "High Bandwidth Memory (HBM) Undergraduate Research Intern",
    period: "June 2025 - August 2025",
    bullets: [
      "Automated process-line equivalence test using C++, achieving 99% accuracy in data validation.",
      "Built a test-automation framework using Python, accelerating QA cycles for HBM3E data by 3x.",
      "Optimized sensor-data processing modules with CUDA multithreading, cutting computation latency by 60% in real-time analysis.",
    ],
  },
  {
    org: "Gies Business Research Lab",
    role: "Undergraduate Research Assistant",
    period: "January 2025 - Present",
    bullets: [
      "Conducted research under Prof. Carlos Torelli applying NLP methods to study consumer behavior in online reviews.",
      "Scraped and analyzed 10,000+ consumer reviews from Amazon and Yelp to study sentiment and behavioral patterns.",
      "Built Python pipelines for sentiment analysis and LDA topic modeling, improving processing efficiency by 40%.",
    ],
  },
];
const TEACHING = [
  {
    org: "University of Minnesota - Twin Cities",
    role: "Undergraduate Course Assistant",
    period: "January 2022 - May 2022",
    bullets: [
      "Assisted a course covering C/C++ programming, data structures, binary arithmetic, and object-oriented principles.",
      "Assisted in evaluating programming assignments and helping students debug recursion, pointer, and file I/O implementations.",
    ]
  }
]
const ANH = [
  {
    name: "The Global Excellence Scholarships | Four-Year Merit Scholarships, Prize: $40,000",
    year: "2021",
    org: "University of Minnesota - Twin Cities",
  },
  {
    name: "The Undergraduate Research Scholarships | Prize: $1,400",
    year: "2021",
    org: "University of Minnesota - Twin Cities",
  },
  {
    name: "Academic Excellence Award | Graduating Honors",
    year: "2021",
    org: "Fayston Preparatory School",
  },
  {
    name: "Seoul National University Young Scholars Program | Advanced Mathematics",
    year: "2019",
    org: "Seoul National University",
  },
  {
    name: "Seoul National University Young Scholars Program | Quantum Mechanics",
    year: "2019",
    org: "Seoul National University",
  },
  {
    name: "Korean Mathematics Olympiad | Bronze Medal",
    year: "2018",
    // org: "Seoul National University",
  },
]
const PROJECTS = [
  {
    name: "Alpha Investment Management Partners Website",
    period: "August 2025 - Present",
    bullets: [
      "Developed an official website for AIM Partners using React.js.",
      "Developed an official website for AIM Partners using React.js. Configured custom domain and DNS routing, ensuring secure HTTPS deployment.",
    ],
    url: "https://github.com/chyunho1204/aimpartnersuiuc",
    type: "Github"
  },
  {
    name: "Business Intelligence Group",
    period: "January 2025 - May 2025",
    bullets: [
      "Conducted strategy consulting projects under Prof. Song’s supervision.",
      "Utilized Python and API integrations to support quantitative research.",
    ],
    type: "Non-Disclosure",
  },
  {
    name: "Social Media Data Pipeline",
    period: "January 2025 - May 2025",
    bullets: [
      "Built an Instagram thumbnail and metadata scraper, processing over 8,000 images for research data.",
      "Automated dynamic content loading and scrolling with Selenium, reducing data collection time by 60% compared to manual methods.",
    ],
    url: "https://github.com/chyunho1204/Instagram-Thumbnail-Scraper",
    type: "Github",
  },
  {
    name: "D2 Direct",
    period: "October 2021 - December 2023",
    bullets: [
      "Developed a mobile app using Flutter, achieving 2,000+ downloads and Top-100 in Casual Use Apps.",
    ],
    // url: "https://github.com/chyunho1204/Instagram-Thumbnail-Scraper",
    type: "Non-Disclosure",
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
            <a href="#research">Research Experiences</a>
            <a href="#awards-and-honors">Others</a>
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
                <p><strong>Languages:<br/></strong> English & Korean (Bilingual) <br/>Japanese & Chinese (Elementary)</p> 
              </div>
            </div>

            <div className="about-text">
              <p>
                Hi! My name is Yunho Chang, a <span className="highlight">PhD applicant for Fall 2026</span>. I am currently majoring in Computer Science and Economics at the University of Illinois at Urbana-Champaign. 
                My academic and project experience mostly lies on the intersection of technology and finance, 
                with several quantitative finance and data-driven research projects.
              </p>
              <p>
                My research interest lies in developing <span className="highlight">theory-driven algorithms</span> that maximize learning efficiency and computational scalability across hardware and software systems. 
                I am particularly interested in the intersection of <span className="highlight">algorithmic game theory, theoretical machine learning, and hardware-software co-design</span>. 
                My research goal is to design learning frameworks that not only achieve provable performance guarantees but also translate effectively into real-world deployment on modern computing architectures. 

                <br/><br/><i><strong>Relevant Courseworks:</strong></i><br/>
                  Introduction to Computer Science I <span className="placeright">Grade: A, Max: A</span><br/>
                  Introduction to Computer Science II <span className="placeright">Grade: A, Max: A</span><br/>
                  Introduction to Computing Systems <span className="placeright">Grade: A, Max: A+</span><br/>
                  Linear Algebra with Computational Applications <span className="placeright">Grade: A, Max: A</span><br/>
                  Discrete Structures <span className="placeright">Grade: A-, Max: A</span><br/>
                  Data Structures <span className="placeright">Grade: A, Max: A</span><br/>
                  Financial Engineering <span className="placeright">Grade: A-, Max: A+</span><br/>
                  Applied Business Research <span className="placeright">Grade: A, Max: A</span><br/>
                  Introduction to Computer Systems <span className="placeright">Grade: In-Progress, Max: A+</span><br/>
                  Introduction to Algorithms and Models of Computation <span className="placeright">Grade: In-Progress, Max: A+</span><br/>
                  Financial Econometrics <span className="placeright">Grade: In-Progress, Max: A+</span><br/>

                <br/><i><strong>Future Courseworks:</strong></i><br/>
                  Programming Languages and Compilers,
                  Applied Game Theory,
                  Software Engineering I <br/>
                  Applied Machine Learning,
                  Statistics and Probability,
                  Financial Economics <br/>
                <br/><i><strong>Technical Skills:</strong></i><br/>
                  Programming Languages: C/C++, Python, Java, R <br/>
                  Frameworks: Springboot, Django, CUDA, PyTorch, Docker <br/>

              </p>
              <div className="chips">
                {INTERESTS.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="cta">
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn outline">GitHub</a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn outline">LinkedIn</a>
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
                <p className="card-body">{e.gpa}</p>
                <p className="card-body">{e.details}</p>
                <p className="card-body">{e.military}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="research" title="Research Experiences">
          <div className="stack">
            {RESEARCH.map((x, idx) => (
              <div key={idx} className="card card-full">
                <div className="card-head">
                  <div className="card-title">
                    {x.role}
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
        
        <Section id="teaching" title="Teaching Experiences">
          <div className="stack">
            {TEACHING.map((e) => (
              <div key={e.org} className="card">
                <div className="card-head">
                  <div className="card-title">{e.role}</div>
                  <div className="muted">{e.period}</div>
                </div>
                <div className="muted">{e.org}</div>
                {e.bullets?.length > 0 && (
                  <ul className="bullets">
                    {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="awards-and-honors" title="Awards and Honors">
          <div className="stack stack-dense">
            {ANH.map((e) => (
              <div key={e.name} className="card">
                <div className="card-head">
                  <div className="card-title">{e.name}</div>
                  <div className="muted">{e.year}</div>
                </div>
                <div className="muted">{e.org}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="stack">
            {PROJECTS.map((x, idx) => (
              <div key={idx} className="card card-full">
                <div className="card-head">
                  <div className="card-title">
                    {x.name}
                  </div>
                  <div className="muted">{x.period}</div>
                </div>
                <div className="muted">
                  <a
                    href={x.url}
                    target="_blank"
                    rel="noreferrer"
                    className="org-link"
                  >{x.type}</a>
                </div>
                {x.bullets?.length > 0 && (
                  <ul className="bullets">
                    {x.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
