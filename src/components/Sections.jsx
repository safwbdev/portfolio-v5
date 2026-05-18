import React, { useState, useRef } from 'react';
import { useSlider } from '../hooks/useSlider';
import SliderControls from './SliderControls';
import ProjectThumb from './ProjectThumb';
import {
  SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS,
  PROJECTS_PERSONAL, PROJECTS_CLIENT,
  CONTACTS,
} from '../data';

// ABOUT
export function About() {
  return (
    <div className="snap-section">
      <section id="about" className="page-section">
        <div className="sec-eye reveal">01 · ABOUT</div>
        <div className="about__grid">
          <div className="about__text reveal">
            <h2 className="sec-title">Engineer.<br />Builder.<br /><span>Creative.</span></h2>
            <p><strong>Full Stack Engineer</strong> with a thing for making the web feel alive. I care about performance, craft, and the details most people skip.</p>
            <p>I specialise in <strong>React</strong>, <strong>TypeScript</strong> and <strong>Node.js</strong> — building everything from interactive experiences to scalable cloud backends.</p>
            <p>When I'm not shipping code, I'm chasing cherry blossoms in Japan, gaming on retro consoles, or hunting for the best coffee in KL.</p>
            <div style={{ marginTop: '2rem' }}>
              <a href="#contact" className="btn btn--outline">REACH OUT →</a>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '.1s' }}>
            <div className="about__stats">
              <div className="about__stat"><span className="about__stat-n">10+</span><span className="about__stat-l">YEARS EXPERIENCE</span></div>
              <div className="about__stat"><span className="about__stat-n">30+</span><span className="about__stat-l">PROJECTS SHIPPED</span></div>
              <div className="about__stat"><span className="about__stat-n">REACT</span><span className="about__stat-l">WEB EXPERIENCES</span></div>
              <div className="about__stat"><span className="about__stat-n">∞</span><span className="about__stat-l">CUPS OF COFFEE</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// SKILLS
function SkillsMobileSlider() {
  const { sliderRef, current } = useSlider(SKILLS.length);
  const dotsRef = useRef(null);

  return (
    <div className="skills__wrap">
      <div className="skills__blocks" ref={sliderRef} id="skills-slider">
        {SKILLS.map((cat, i) => (
          <div className="skills__block" key={i}>
            <div className="skills__block-title">{cat.title}</div>
            <div className="skills__row">
              {cat.pills.map((p) => <span className="skills__pill" key={p}>{p}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div className="skills__controls">
        <div className="skills__dots" ref={dotsRef}>
          {SKILLS.map((_, i) => (
            <button key={i} className={`skills__dot${i === current ? ' active' : ''}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
        <span className="skills__count">{String(current + 1).padStart(2, '0')} / {String(SKILLS.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className="snap-section">
      <section id="skills" className="page-section">
        <div className="sec-eye reveal">02 · SKILLS</div>
        <h2 className="sec-title reveal">Technical Stack</h2>
        <div className="reveal" style={{ transitionDelay: '.1s' }}>
          <SkillsMobileSlider />
        </div>
      </section>
    </div>
  );
}

// PROJECT CARD
function ProjectCard({ project, isClient }) {
  return (
    <div className="proj">
      <ProjectThumb src={project.thumb} />
      <div className="proj__num">{project.num}</div>
      <div className="proj__title">{project.title}</div>
      <p className="proj__desc">{project.desc}</p>
      {!isClient && (<div className="proj__tags">
        {project.tags.map((t) => <span className="proj__tag" key={t}>{t}</span>)}
      </div>)}
      <div className="proj__links">
        {isClient ? (
          <>
            <a href={project.demo} className="proj__link proj__link--live" target="_blank" rel="noreferrer">↗ Link</a>
            {/* <a href={project.demo} className="proj__link proj__link--live" target="_blank" rel="noreferrer">Media</a> */}
            <a href={project.github} className="proj__link proj__link--live" target="_blank" rel="noreferrer">Credits</a>
          </>
        ) : (
          <>
            <a href={project.github} className="proj__link" target="_blank" rel="noreferrer">⌥ GitHub</a>
            <a href={project.demo} className="proj__link proj__link--live" target="_blank" rel="noreferrer">↗ Live Demo</a>
          </>
        )}
      </div>
    </div>
  );
}

function ProjectSlider({ projects, sliderId }) {
  const { sliderRef, current, goTo } = useSlider(projects.length);
  return (
    <div className="projects__slider-wrap">
      <div className="projects__slider" ref={sliderRef} id={sliderId}>
        {projects.map((p) => <ProjectCard key={p.num} project={p} isClient={sliderId === 'slider-client'} />)}
      </div>
      <SliderControls
        current={current} total={projects.length}
        onPrev={() => goTo(current - 1)}
        onNext={() => goTo(current + 1)}
        onDot={goTo}
      />
    </div>
  );
}

export function Projects() {
  const [tab, setTab] = useState('client');
  return (
    <div className="snap-section">
      <section id="projects" className="page-section">
        <div className="sec-eye reveal">03 · PROJECTS</div>
        <h2 className="sec-title reveal">Selected Work</h2>
        <div className="reveal" style={{ transitionDelay: '.1s' }}>
          <div className="projects__tabs">
            <button className={`projects__tab${tab === 'client' ? ' active' : ''}`} onClick={() => setTab('client')}>PROFESSIONAL</button>
            <button className={`projects__tab${tab === 'personal' ? ' active' : ''}`} onClick={() => setTab('personal')}>PERSONAL</button>
          </div>
          <div className={`projects__panel${tab === 'personal' ? ' active' : ''}`}>
            <ProjectSlider projects={PROJECTS_PERSONAL} sliderId="slider-personal" />
          </div>
          <div className={`projects__panel${tab === 'client' ? ' active' : ''}`}>
            <ProjectSlider projects={PROJECTS_CLIENT} sliderId="slider-client" />
          </div>
        </div>
      </section>
    </div>
  );
}

// EXPERIENCE
export function Experience() {
  const { sliderRef, current } = useSlider(EXPERIENCE.length);

  return (
    <div className="snap-section">
      <section id="experience" className="page-section">
        <div className="sec-eye reveal">04 · EXPERIENCE</div>
        <h2 className="sec-title reveal">Work History</h2>
        <div className="reveal" style={{ transitionDelay: '.1s' }}>
          <div className="timeline" ref={sliderRef} id="tl-slider">
            {EXPERIENCE.map((e, i) => (
              <div className="tl__item" key={i}>
                <div className="tl__meta">
                  <span className="tl__date">{e.date}</span>
                  <span className="tl__location">{e.location}</span>
                </div>
                <div className="tl__company">{e.company}</div>
                <div className="tl__role">{e.role}</div>
                <p className="tl__desc">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="tl-controls">
            <div className="tl-dots">
              {EXPERIENCE.map((_, i) => (
                <button key={i} className={`tl-dot${i === current ? ' active' : ''}`} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
            <span className="tl-count">{String(current + 1).padStart(2, '0')} / {String(EXPERIENCE.length).padStart(2, '0')}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

// EDUCATION
export function Education() {
  return (
    <div className="edu-certs-snap">
      <section id="education" className="edu-certs-page">

        <div className="edu-subsection">
          <div className="sec-eye reveal">05 · EDUCATION</div>
          <h2 className="sec-title reveal">Academic Background</h2>
          <div className="edu__grid reveal" style={{ transitionDelay: '.1s' }}>
            {EDUCATION.map((e, i) => (
              <div className="edu__card" key={i}>
                <div className="edu__degree">{e.degree}</div>
                <div className="edu__field">{e.field}</div>
                <div className="edu__uni">{e.uni}</div>
                <div className="edu__loc">{e.loc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="edu-cert-subsection" id="certifications">
          <div className="sec-eye reveal">06 · CERTIFICATIONS</div>
          <h2 className="sec-title reveal">Certifications</h2>
          <div className="certs-list reveal" style={{ transitionDelay: '.1s' }}>
            {CERTIFICATIONS.map((c, i) => (
              <div className="cert__item" key={i}>
                <div>
                  <div className="cert__name">{c.name}</div>
                  <div className="cert__issuer">{c.issuer}</div>
                  <div className="cert__loc">{c.loc}</div>
                </div>
                <div className="cert__year">{c.year}</div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}

// CONTACT
export function Contact() {


  return (
    <div className="snap-section">
      <section id="contact" className="page-section">
        <div className="contact__wrap">
          <div className="sec-eye sec-eye--center reveal">07 · CONTACT</div>
          <h2 className="sec-title reveal">Let's Build Something</h2>
          <p className="contact__sub reveal">Open to exciting opportunities, interesting collaborations, and conversations about React, Vue, Three.js, etc.</p>
          <div className="contact__grid reveal">
            <a href={`mailto:{CONTACTS.email}`} className="contact__link">✉ EMAIL</a>
            <a href={CONTACTS.github} className="contact__link" target="_blank" rel="noreferrer">⌥ GITHUB</a>
            <a href={CONTACTS.linkedin} className="contact__link" target="_blank" rel="noreferrer">↗ LINKEDIN</a>
            <a href={CONTACTS.mobygames} className="contact__link" target="_blank" rel="noreferrer">◈ MOBYGAMES</a>
          </div>
          <a href={CONTACTS.resume} className="btn btn--solid reveal" target='_blank'>DOWNLOAD RESUME</a>
        </div>
      </section>
    </div>
  );
}
