'use client'
import { motion } from 'framer-motion'

const nav=['Home','About','Projects','Services','Contact']
const services=['Video Editing','Motion Design','Reels & Shorts','Social Content']

export default function Home(){
 const scrollTo=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
 return <main>
  <nav className="nav"><button className="logo" onClick={()=>scrollTo('home')}>AG<span>®</span></button><div className="navlinks">{nav.map(n=><button key={n} onClick={()=>scrollTo(n.toLowerCase())}>{n}</button>)}</div><button className="menu" onClick={()=>scrollTo('contact')}>Let’s talk ↗</button></nav>
  <section id="home" className="hero section">
   <div className="heroTop"><span>IND / 2026</span><span>AVAILABLE FOR SELECT PROJECTS</span></div>
   <div className="heroCenter"><motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="eyebrow">VIDEO EDITOR & MOTION DESIGNER</motion.p><motion.h1 initial={{opacity:0,y:60}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.16,1,.3,1]}}>ARJUN<br/><em>GUND</em></motion.h1></div>
   <div className="heroBottom"><span>Crafting edits that<br/>make people feel.</span><button onClick={()=>scrollTo('projects')} className="circle">↓</button></div>
  </section>
  <div className="ticker"><div>VIDEO EDITING <i>✦</i> MOTION DESIGN <i>✦</i> STORYTELLING <i>✦</i> CREATIVE EDITING <i>✦</i> VIDEO EDITING <i>✦</i></div></div>
  <section id="about" className="section about"><div className="label">01 / ABOUT</div><div><h2>I turn raw footage into <span>stories that stay.</span></h2><p>I’m Arjun Gund, a Video Editor & Motion Designer focused on sharp storytelling, clean motion and visuals that hold attention. This portfolio is being built around selected work, experiments and projects.</p><button className="textlink" onClick={()=>scrollTo('contact')}>Work with me ↗</button></div></section>
  <section id="projects" className="section projects"><div className="sectionHead"><div className="label">02 / SELECTED WORK</div><span>PROJECTS / 2026</span></div><div className="projectGrid">{['PROJECT ONE','PROJECT TWO','PROJECT THREE'].map((p,i)=><motion.article whileHover={{y:-8}} className="project" key={p}><div className="projectVisual"><span>COMING SOON</span><b>0{i+1}</b></div><div className="projectMeta"><h3>{p}</h3><span>VIDEO EDITING / MOTION</span></div></motion.article>)}</div></section>
  <section id="services" className="section services"><div className="label">03 / SERVICES</div><div className="serviceList">{services.map((s,i)=><motion.div whileHover={{x:12}} className="service" key={s}><span>0{i+1}</span><h3>{s}</h3><b>↗</b></motion.div>)}</div></section>
  <section className="statement section"><p>GOOD EDITING ISN’T<br/><em>JUST CUTS.</em><br/>IT’S RHYTHM.</p></section>
  <section id="contact" className="section contact"><div className="label">04 / CONTACT</div><div><h2>Have a story?<br/><em>Let’s make it move.</em></h2><a href="mailto:gundarjun2096@gmail.com">gundarjun2096@gmail.com ↗</a><a href="tel:+919373705811">+91 93737 05811</a></div></section>
  <footer><span>ARJUN GUND © 2026</span><span>VIDEO EDITOR & MOTION DESIGNER</span><button onClick={()=>scrollTo('home')}>BACK TO TOP ↑</button></footer>
 </main>
}
