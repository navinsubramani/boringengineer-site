import React from 'react';

import SkillShowcase, { SkillBucket } from './skills';
import TickerMarquee from './certification';
import styles from './styles.module.css';


export default function Introduction() {
  return (
    <div>
      <h1 className={styles.sectionHeading}>Who Am I?</h1>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          {/* The below section covers the introduction */}
          <div className={styles.heroText}>
            <h2 className={styles.heroTitle}>Hi, I'm Navin Subramani</h2>
            <p className={styles.heroSubtitle}>
              I’m the self-proclaimed <a className={styles.themeGreen} href='https://boringengineer.com/' target='_blank'>Boring Engineer</a>. Why? Because I believe doing the “boring” stuff—consistently—is what actually builds success.
            </p>
            <p className={styles.heroLine}>I’m a <a className={styles.themeGreen} href='/docs'>DIY enthusiast</a>. If I can build it or find it open-source, why would I ever buy it?</p>
            <p className={styles.heroLine}>I <a className={styles.themeGreen} href='https://github.com/navinsubramani' target='_blank'>code</a> (Copilot is my co-driver), but I’m not the type who dreams in semicolons.</p>
            <p className={styles.heroLine}>I <span className={styles.themeGreen}>read</span> anything from tech and finance to random recommendations from friends—basically whatever rabbit hole looks interesting.</p>
            <p className={styles.heroLine}>I <a className={styles.themeGreen} href='/blog'>blog</a> occasionally (when I’m not distracted by another DIY project).</p>
            <p className={styles.heroLine}>And I absolutely <span className={styles.themeGreen}>love travelling</span> because even engineers need fresh air and new places to debug themselves.</p>
            <p className={styles.heroLine}>Most days, you’ll find me tinkering, learning, and creating — day in and day out.</p>
            <p className={styles.heroLine}>I built and host this site on <span className={styles.themeGreen}>my own servers</span>. Not because it’s easy, but because subscriptions are boringly expensive.</p>
            <p className={styles.heroLine}>If you’re already here, take a look around my blogs and projects. And if something sparks an idea, let’s connect—you bring the coffee, I’ll bring the code.</p>
          </div>

          {/* The below section covers the images */}
          <div className={styles.heroImageGrid}>
            <div className={styles.heroImageRowTop}>
              <img
                src={require('@site/static/img/navinsubramani_intro_page.jpg').default}
                alt="Navin at Paris"
                className={styles.heroImageRect}
              />
            </div>
            <div className={styles.heroImageRowBottom}>
              <img
                src={require('@site/static/img/navinsubramani-why.PNG').default}
                alt="Why"
                className={styles.heroImageSquare}
              />
              <img
                src={require('@site/static/img/boring-engineer-arcade.jpg').default}
                alt="Arcade"
                className={styles.heroImageSquare}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


const SKILLS: SkillBucket[] = [
  {
    title: "Desktop",
    icon: "💻",
    items: [
      { name: "LabVIEW Champion", logo: "/img/skill-labview.png", url: "https://www.ni.com" },
      { name: "Python", logo: "/img/skill-python.png" },
      { name: "TestStand Architect", logo: "/img/skill-teststand.png" },
    ],
  },
  {
    title: "Web Stack",
    icon: "🌐",
    items: [
      { name: "React", logo: "/img/skill-react.png" },
      { name: "Frontend", logo: "/img/skill-htmlcss.png" },
      { name: "Backend", logo: "/img/skill-python.png" },
      { name: "Database", logo: "/img/skill-databases.png" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    items: [
      { name: "Azure", logo: "/img/skill-azure.png" },
      { name: "Docker", logo: "/img/skill-docker.png" },
      { name: "Onpremise", logo: "/img/skill-onpremise.png" },
      { name: "CI/CD", logo: "/img/skill-cicd.png" },
    ],
  },
    {
    title: "Home Lab Stack",
    icon: "🏠",
    items: [
      { name: "Ubuntu", logo: "/img/skill-ubuntu.png" },
      { name: "Virtualization", logo: "/img/skill-proxmox.png" },
      { name: "Open Source", logo: "/img/skill-opensource.png" },
      { name: "Security", logo: "/img/skill-cloudflare.png" },
    ],
  },
    {
    title: "Hardwares",
    icon: "🔧",
    items: [
      { name: "National Instruments", logo: "/img/skill-ni.png" },
      { name: "Sensore & Actuators", logo: "/img/skill-sensoractuators.png" },
      { name: "Raspberry PI", logo: "/img/skill-pi.png" },
    ],
  },
    {
    title: "AI",
    icon: "🤖",
    items: [
      { name: "Models", logo: "/img/skill-openai.png" },
      { name: "Models", logo: "/img/skill-ollama.png" },
      { name: "Models", logo: "/img/skill-bedrock.png" },
      { name: "framework", logo: "/img/skill-llamaindex.png" },
    ],
  },
];

export function SkillSet() {
  return (
    <div>
      <h1 className={styles.sectionHeading}>My Skills</h1>
      <SkillShowcase buckets={SKILLS} accentColor="#25c2a0" columns={2}/>
    </div>
  );
}

const items = [
    { text: "LabVIEW Champion", href: "https://www.credly.com/badges/393fd1bb-ad05-4b5b-a7dc-c4ee8233f370" },
    { text: "LabVIEW Architect", href: "https://www.credly.com/badges/fd4aba7a-a0b4-49a9-b476-15a0fe4c2f77" },
    { text: "TestStand Architect", href: "https://www.credly.com/badges/4d6d45eb-1b82-4aa7-9b5b-0c2bf14d49d3" },
    { text: "Python Certified", href: "https://www.credly.com/badges/65d6d963-db21-4de6-ae49-3689d78d6dcb" },
    { text: "Microsoft Certified Azure Practitioner", href: "https://learn.microsoft.com/en-us/users/navinsubramani-5081/credentials/aa3b59ae1ac95fa4?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
    { text: "Univertsity Rank Holder", href: "https://aucoe.annauniv.edu/RANK_DETAILS/rank_Ug09_0413_CBE_MERGED.pdf" },
  ];

export function Certification() {
  return (
    <div>
      <h1 className={styles.sectionHeading}>Certifications</h1>
      <TickerMarquee items={items} speedPxPerSec={90} gapPx={56} />
    </div>
  );
}

export function Journey() {
  return (
    <div>
      <h1 className={styles.sectionHeading}>My Journey</h1>
      <div className={styles.journeyTimeline}>
        {/* Example timeline entries, replace with your own */}
          <div className={styles.journeyItem}>
          <span className={styles.journeyYear}>2024 <span>🤖</span></span>
          <span className={styles.journeyDesc}>Heading the AI team at Soliton. <span className={styles.themeGreen}>Big beliver in AI</span> and its potential to transform the world—and the Test & Measurement industry in particular.</span>
        </div>
        <div className={styles.journeyItem}>
          <span className={styles.journeyYear}>2022 <span>👐</span></span>
          <span className={styles.journeyDesc}>Began pursuing passion projects around <span className={styles.themeGreen}>gaming, algorithm trading, home-labs</span>. Also dived deep into finance and markets. This journey is still ongoing.</span>
        </div>
        <div className={styles.journeyItem}>
          <span className={styles.journeyYear}>2021 <span>🏆</span></span>
          <span className={styles.journeyDesc}>Recognized as a <span className={styles.themeGreen}>LabVIEW Champion</span>! Previously one of the youngest at Soliton (and globally) to become both a LabVIEW Architect and TestStand Architect—but this one was extra special.</span>
        </div>
        <div className={styles.journeyItem}>
          <span className={styles.journeyYear}>2020 <span>❤️</span></span>
          <span className={styles.journeyDesc}>Married a wonderful partner. With COVID keeping us home, I got to spend quality time with both my parents and in-laws.</span>
        </div>
        <div className={styles.journeyItem}>
          <span className={styles.journeyYear}>2019 <span>🗽</span></span>
          <span className={styles.journeyDesc}>Moved to <span className={styles.themeGreen}>United States of America</span> to be closer with clients and expand opportunities.</span>
        </div>
        <div className={styles.journeyItem}>
          <span className={styles.journeyYear}>2018 <span>🧑‍💼</span></span>
          <span className={styles.journeyDesc}>Became deeply passionate about Automation, focusing on <span className={styles.themeGreen}>Semiconductor Post Silicon Validation</span>, delivering several notable frameworks and solution to the clients.</span>
        </div>
        <div className={styles.journeyItem}>
          <span className={styles.journeyYear}>2013 <span>🏢</span></span>
          <span className={styles.journeyDesc}>Landed my first job at <span className={styles.themeGreen}>Soliton</span>. Fun fact: it was the very first interview I ever took—and one of the best things to happen in my career.</span>
        </div>
        <div className={styles.journeyItem}>
          <span className={styles.journeyYear}>2013 <span>🧑‍🎓</span></span>
          <span className={styles.journeyDesc}>Graduated with a <span className={styles.themeGreen}>Bachelors in Instrumentation and Control Engineering</span> from Anna University, <span className={styles.themeGreen}>ranking #5</span> in the state.</span>
        </div>
        <div className={styles.journeyItem}>
          <span className={styles.journeyYear}>2012 <span>🏅</span></span>
          <span className={styles.journeyDesc}>College years taught me how to learn and how to live. Honored as <span className={styles.themeGreen}>Best Outgoing Student in my class</span> as well as <span className={styles.themeGreen}>Best Outgoing Sports Student</span></span>
        </div>
        <div className={styles.journeyItem}>
          <span className={styles.journeyYear}>2009 <span>🏫</span></span>
          <span className={styles.journeyDesc}>Finished schooling. Did well enough in exams to get into a good college for a solid course.</span>
        </div>
        <div className={styles.journeyItem}>
          <span className={styles.journeyYear}>1991 <span>🇮🇳</span></span>
          <span className={styles.journeyDesc}>Born in <span className={styles.themeGreen}>India</span>. My parents did farming and ran farming linked business yet they always prioritized education and engineering for me.</span>
        </div>
        {/* ...more items as needed... */}
      </div>
    </div>
  );
}
