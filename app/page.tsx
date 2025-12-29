/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Linkedin, Briefcase, Layers,
  BookOpen, Layout, Cpu, Globe, MapPin,
  Terminal, Star, Users, FolderGit, Bot,
  ChevronDown, ChevronUp, ExternalLink, Hash, Monitor
} from 'lucide-react'

const CONTENT = {
  en: {
    nav: {
      overview: "Overview",
      specialization: "Specialization",
      showcase: "Showcase",
      projects: "Repos",
      experience: "Experience",
      blog: "Blog"
    },
    profile: {
      name: "Muhamad Reza Muktasib",
      role: "Fullstack Engineer",
      tagline: "Bridging Web Technologies & Embedded Systems.",
      description: "Experienced Fullstack Engineer building scalable web apps using JavaScript, Python, Go, and Java. Also a passionate Robotics Engineer (STM32/Mobile Robot) with a strong background in competitive robotics.",
      location: "Surabaya, Indonesia",
      status: "Open for opportunities",
      cta: "Contact Me"
    },
    specialization: {
      title: "Core Specializations",
      web: {
        title: "Fullstack Engineering",
        desc: "Building scalable distributed systems, cloud infrastructure (AWS/GCP), and responsive frontends."
      },
      robotics: {
        title: "Robotics & Embedded",
        desc: "Developing mobile robots, STM32 firmware, and IoT systems. Active member of the Robotics Team 'Me As'."
      }
    },
    sections: {
      showcase: "Featured Projects",
      pinned: "Latest Repositories",
      blog: "Latest Articles",
      experience: "Work Experience",
      skills: "Technical Skills",
      awards: "Awards & Achievements"
    }
  },
  id: {
    nav: {
      overview: "Ringkasan",
      specialization: "Spesialisasi",
      showcase: "Portofolio",
      projects: "Repo",
      experience: "Pengalaman",
      blog: "Blog"
    },
    profile: {
      name: "Muhamad Reza Muktasib",
      role: "Fullstack Engineer",
      tagline: "Menghubungkan Teknologi Web & Sistem Embedded.",
      description: "Fullstack Engineer berpengalaman membangun aplikasi web scalable. Juga seorang Robotics Engineer (STM32/Mobile Robot) yang berdedikasi dengan latar belakang kuat di tim robotika kompetitif.",
      location: "Surabaya, Indonesia",
      status: "Terbuka untuk peluang",
      cta: "Hubungi Saya"
    },
    specialization: {
      title: "Spesialisasi Inti",
      web: {
        title: "Fullstack Engineering",
        desc: "Membangun sistem terdistribusi, infrastruktur cloud (AWS/GCP), dan frontend responsif."
      },
      robotics: {
        title: "Robotics & Embedded",
        desc: "Mengembangkan robot mobile, firmware STM32, dan sistem IoT. Anggota aktif Tim Robot 'Me As'."
      }
    },
    sections: {
      showcase: "Proyek Unggulan",
      pinned: "Repositori Terbaru",
      blog: "Artikel Terbaru",
      experience: "Pengalaman Kerja",
      skills: "Keahlian Teknis",
      awards: "Penghargaan & Prestasi"
    }
  }
}

const EXPERIENCE_DATA = [
  {
    company: "PT Sobat Kreasi Nusantara",
    role: "Backend Engineer",
    period: "Aug 2025 - Present",
    description: "Developed enterprise-level backend systems using Java. Integrated Midtrans Payment Gateway and optimized API performance for healthcare applications. Collaborated with cross-functional teams to ensure high availability and security for sensitive medical data."
  },
  {
    company: "PT Paragon Technology",
    role: "Backend Engineer",
    period: "Aug 2025 - Present",
    description: "Contributed to Warehouse Management System (WMS) integrated with ERP. Implemented Batch Management across 24+ warehouses and SAP integration modules. Improved inventory tracking accuracy by 35% through automated synchronization systems."
  },
  {
    company: "Mufko App",
    role: "Backend Engineer & DevOps",
    period: "Feb 2025 - Present",
    description: "Maintained robust backend systems using Laravel for 4,100 daily active users. Optimized database queries and set up AWS services including EC2, RDS, and S3. Implemented CI/CD pipelines to streamline deployment processes."
  },
  {
    company: "ZEP Co., Ltd",
    role: "Marketing & Growth Team",
    period: "Dec 2024 - Feb 2025",
    description: "Developed automation scripts for social media analytics and lead generation, reducing manual reporting time by 80%. Analyzed user data to optimize marketing campaigns and increase conversion rates."
  },
  {
    company: "Pens MyToefl App",
    role: "Backend Engineer & Flutter Developer",
    period: "Apr 2024 - Jun 2024",
    description: "Designed Quiz Service API using Laravel and configured Docker microservices with DigitalOcean CI/CD. Developed responsive mobile interfaces using Flutter, including gamified test modules."
  },
  {
    company: "Agile Product Development Team A1",
    role: "Product Owner & Flutter Developer",
    period: "Mar 2024 - Jun 2024",
    description: "Led a team of 5 to develop and deploy the Budgetin App (4.8+ rating). Implemented Agile methodologies throughout the lifecycle and developed key Flutter modules."
  },
  {
    company: "PT. Digital Solusi Master",
    role: "Web Developer",
    period: "Dec 2023 - Feb 2024",
    description: "Maintained Diakademik educational app, improving system stability by 25%. Converted Figma designs into responsive Tailwind CSS interfaces with 95% user satisfaction."
  },
  {
    company: "Cipta Kode",
    role: "Freelance Web Developer",
    period: "Dec 2022 - Present",
    description: "Successfully completed 10+ freelance projects using React, Laravel, Python, and AI technologies, delivering tailored web solutions for diverse clients."
  }
]

const SHOWCASE_DATA = [
  {
    title: "Exzam.id",
    desc: "Multi-tenancy online examination platform with AI proctoring features.",
    tags: ["Next.js", "Laravel", "AI"],
    color: "from-blue-600 to-cyan-500",
    icon: <Monitor size={48} />
  },
  {
    title: "Procspy",
    desc: "Open-source automated proctoring application using WebRTC.",
    tags: ["TypeScript", "WebRTC", "Socket.io"],
    color: "from-purple-600 to-pink-500",
    icon: <Bot size={48} />
  },
  {
    title: "Budgetin App",
    desc: "Mobile budgeting application for personal finance management.",
    tags: ["Flutter", "Dart", "Firebase"],
    color: "from-emerald-500 to-teal-500",
    icon: <Layout size={48} />
  },
  {
    title: "CV Evaluator",
    desc: "AI-powered tool to analyze and rank resumes automatically.",
    tags: ["OpenAI", "Python", "LangChain"],
    color: "from-orange-500 to-red-500",
    icon: <Terminal size={48} />
  }
]

const SOCIAL_LINKS = {
  github: "https://github.com/Reza1290",
  linkedin: "https://www.linkedin.com/in/m-rezamuktasib/?_l=en_US",
  email: "mailto:reza.muktasib@gmail.com",
  blog: "https://pemrograman-tech.blogspot.com"
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const BlackHole = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center scale-75 md:scale-100">
      <div className="relative w-full h-full flex items-center justify-center animate-float">
        <div className="absolute w-[80%] h-[80%] rounded-full bg-[conic-gradient(transparent,rgba(147,51,234,0.1),rgba(6,182,212,0.8),rgba(147,51,234,0.8),transparent)] blur-xl animate-[spin_4s_linear_infinite]" style={{ transform: 'rotateX(70deg) scale(1.5)' }} />
        <div className="absolute w-[70%] h-[70%] rounded-full border-[20px] border-t-cyan-500 border-r-purple-600 border-b-transparent border-l-transparent blur-md animate-[spin_3s_linear_infinite]" style={{ transform: 'rotateX(70deg) scale(1.2)' }} />
        <div className="relative z-10 w-[40%] h-[40%] bg-black rounded-full shadow-[0_0_50px_rgba(124,58,237,0.6),inset_0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center">
          <div className="absolute inset-0 bg-black rounded-full z-20" />
          <div className="absolute inset-[-2px] bg-gradient-to-tr from-white to-transparent rounded-full blur-[1px] z-10 opacity-70" />
        </div>
      </div>
    </div>
  )
}

const Navbar = ({ lang, setLang, t }: { lang: 'en' | 'id', setLang: any, t: any }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d1117]/95 backdrop-blur-sm border-b border-[#30363d] h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-white">
          <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">R</div>
          <span className="tracking-tight hover:text-gray-300 transition-colors cursor-pointer hidden sm:block">
            {CONTENT[lang].profile.name}
          </span>
        </div>
        
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <a href="#overview" className="hover:text-white transition-colors">{t.nav.overview}</a>
          <a href="#specialization" className="hover:text-white transition-colors">{t.nav.specialization}</a>
          <a href="#showcase" className="hover:text-white transition-colors">{t.nav.showcase}</a>
          <a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a>
          <a href="#blog" className="hover:text-white transition-colors">{t.nav.blog}</a>
        </div>
        
        <div className="flex items-center gap-3">
          <button onClick={() => setLang(lang === 'en' ? 'id' : 'en')} className="px-2 py-1 text-xs font-mono font-bold border border-[#30363d] rounded-md text-[#c9d1d9] hover:bg-[#21262d] transition-colors w-12">{lang.toUpperCase()}</button>
          <a href={SOCIAL_LINKS.email} className="px-4 py-1.5 text-xs font-bold bg-[#238636] rounded-md text-white hover:bg-[#2ea043] transition-colors">{t.profile.cta}</a>
        </div>
      </div>
    </nav>
  )
}

const Specialization = ({ t }: { t: any }) => {
  return (
    <section id="specialization" className="py-20 bg-[#0d1117] border-b border-[#30363d] relative overflow-hidden">
      <div className="absolute top-10 right-0 opacity-5 pointer-events-none select-none hidden lg:block">
        <pre className="text-sm font-mono text-[#58a6ff]">
          {`interface Engineer {
  name: "Reza"
  skills: ["React", "STM32", "Go"]
  teams: ["Me As Robotics", "Paragon"]
}

function buildFuture() {
  return new Innovation()
}`}
        </pre>
      </div>

      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants}>
          <h2 className="text-2xl font-bold text-white mb-10 font-display flex items-center gap-3">
            <Terminal className="text-[#58a6ff]" /> {t.specialization.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Engineering */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 relative overflow-hidden group hover:border-[#58a6ff]/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe size={100} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-bold text-white font-mono">{t.specialization.web.title}</h3>
              </div>
              <p className="text-[#8b949e] leading-relaxed mb-6">
                {t.specialization.web.desc}
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                 {['React', 'Next.js', 'Go', 'AWS', 'Docker'].map(tag => (
                   <span key={tag} className="px-2 py-1 bg-[#0d1117] rounded border border-[#30363d] text-[#58a6ff]">{tag}</span>
                 ))}
              </div>
            </div>

            {/* Robotics */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 relative overflow-hidden group hover:border-[#f1e05a]/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Bot size={100} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-400">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-white font-mono">{t.specialization.robotics.title}</h3>
              </div>
              <p className="text-[#8b949e] leading-relaxed mb-6">
                {t.specialization.robotics.desc}
              </p>
              
              <div className="mt-4 mb-6 w-full h-32 bg-[#0d1117] border border-[#30363d] border-dashed rounded-lg flex flex-col items-center justify-center text-[#8b949e] group-hover:border-[#f1e05a]/30 transition-colors">
                 <Bot size={32} className="mb-2 opacity-50" />
                 <span className="text-xs font-mono">[Robot Photo Placeholder]</span>
              </div>

              <div className="flex flex-wrap gap-2 font-mono text-xs">
                 {['C/C++', 'STM32', 'RTOS', 'KiCad', 'OpenCV'].map(tag => (
                   <span key={tag} className="px-2 py-1 bg-[#0d1117] rounded border border-[#30363d] text-[#f1e05a]">{tag}</span>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const ShowcaseSection = ({ t }: { t: any }) => {
  return (
    <section id="showcase" className="py-20 bg-[#0d1117] border-b border-[#30363d]">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants}>
          <h2 className="text-2xl font-bold text-white mb-10 font-display flex items-center gap-3">
             <Layout className="text-[#58a6ff]" /> {t.sections.showcase}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHOWCASE_DATA.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden hover:border-[#58a6ff] transition-all group"
              >
                <div className={`h-32 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <div className="text-white drop-shadow-md transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#8b949e] mb-4 h-10 line-clamp-2">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[10px] uppercase font-bold bg-[#0d1117] border border-[#30363d] rounded text-[#c9d1d9]">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ job }: { job: any }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLongText = job.description.length > 100

  return (
    <motion.div variants={fadeIn} className="relative pl-6 pb-10 border-l border-[#30363d] last:pb-0 last:border-0">
      <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#30363d] border-2 border-[#0d1117] transition-colors hover:bg-[#58a6ff]"></div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
        <h3 className="text-base font-bold text-white font-display">{job.role}</h3>
        <span className="text-xs text-[#8b949e] font-mono whitespace-nowrap bg-[#161b22] px-2 py-0.5 rounded border border-[#30363d]">{job.period}</span>
      </div>
      <div className="text-[#58a6ff] font-medium mb-2 text-sm flex items-center gap-1">
        <Briefcase size={12} /> {job.company}
      </div>
      
      <div className="text-[#8b949e] text-sm leading-relaxed max-w-2xl relative">
        <p className={`${!isExpanded ? 'line-clamp-2' : ''} transition-all duration-300`}>
          {job.description}
        </p>
        {isLongText && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 text-xs text-[#58a6ff] hover:underline flex items-center gap-1 focus:outline-none"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp size={10} /></>
            ) : (
              <>Read More <ChevronDown size={10} /></>
            )}
          </button>
        )}
      </div>
    </motion.div>
  )
}

const BlogSection = ({ t }: { t: any }) => {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('api/blogger')
      .then(res => res.json())
      .then(data => {
        const formattedPosts = data.feed.entry.map((entry: any) => ({
          title: entry.title.$t,
          link: entry.link.find((l: any) => l.rel === 'alternate').href,
          published: new Date(entry.published.$t).toLocaleDateString(),
          summary: entry.summary ? entry.summary.$t.substring(0, 120) + "..." : "Click to read more."
        }))
        setPosts(formattedPosts)
        setLoading(false)
      })
      .catch(err => {
        console.error("Failed to fetch blog posts", err)
        setLoading(false)
      })
  }, [])

  return (
    <section id="blog" className="py-20 bg-[#0d1117] border-t border-[#30363d]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-white font-display flex items-center gap-3">
            <BookOpen className="text-[#58a6ff]" /> {t.sections.blog}
          </h2>
          <a href={SOCIAL_LINKS.blog} target="_blank" rel="noreferrer" className="text-sm text-[#58a6ff] hover:underline flex items-center gap-1">
            View All <ExternalLink size={12} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {loading ? (
             [1,2,3].map(i => (
               <div key={i} className="h-40 bg-[#161b22] rounded-md animate-pulse border border-[#30363d]"></div>
             ))
          ) : (
            posts.map((post, index) => (
              <motion.a 
                key={index}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="block bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff] transition-colors group"
              >
                <div className="text-xs text-[#8b949e] mb-3 font-mono flex items-center gap-2">
                   <Hash size={12} /> {post.published}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#58a6ff] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#8b949e] line-clamp-3">
                  {post.summary}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs text-[#58a6ff] font-medium uppercase tracking-wide">
                   Read Article <ExternalLink size={10} />
                </div>
              </motion.a>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

const LinkedInCard = () => {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-0 overflow-hidden mb-8">
       <div className="bg-[#0a66c2] h-16 w-full relative">
          <div className="absolute -bottom-8 left-4 w-16 h-16 rounded-full bg-white p-1">
             <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-600">MR</div>
          </div>
       </div>
       <div className="pt-10 px-4 pb-4">
          <h3 className="text-white font-bold text-lg">Muhamad Reza Muktasib</h3>
          <p className="text-[#8b949e] text-xs mb-3">Fullstack Engineer | Robotics Enthusiast</p>
          <div className="flex gap-2 mb-2">
             <a 
               href={SOCIAL_LINKS.linkedin} 
               target="_blank" 
               rel="noreferrer"
               className="flex-1 bg-[#0a66c2] text-white text-xs font-bold py-1.5 rounded-full text-center hover:bg-[#004182] transition-colors"
             >
               Connect
             </a>
             <a 
               href={SOCIAL_LINKS.linkedin} 
               target="_blank" 
               rel="noreferrer"
               className="flex-1 border border-[#30363d] text-[#c9d1d9] text-xs font-bold py-1.5 rounded-full text-center hover:bg-[#21262d] transition-colors"
             >
               Message
             </a>
          </div>
       </div>
    </div>
  )
}

const Hero = ({ t, githubStats }: { t: any, githubStats: any }) => {
  return (
    <section id="overview" className="relative min-h-[90vh] pt-24 pb-12 flex flex-col items-center justify-center border-b border-[#30363d] bg-[#0d1117] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="inline-flex items-center gap-2 mb-6">
             <div className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
             <span className="text-sm font-medium text-gray-400">{t.profile.status}</span>
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 tracking-tight font-display">
            {t.profile.role}
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-lg text-[#8b949e] mb-8 max-w-2xl leading-relaxed">
            {t.profile.description}
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-[#8b949e] mb-8 font-mono">
             <div className="flex items-center gap-2">
                <MapPin size={16} /> {t.profile.location}
             </div>
             <div className="flex items-center gap-2">
                <Users size={16} /> {githubStats ? `${githubStats.followers} Followers` : 'Loading...'}
             </div>
          </div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex gap-4">
             <a href="#projects" className="px-6 py-3 rounded-md bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] text-white font-semibold transition-all flex items-center gap-2 font-display">
               <FolderGit size={18} /> {t.nav.projects}
             </a>
             <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold transition-all flex items-center gap-2 font-display border border-transparent">
               <Linkedin size={18} /> LinkedIn
             </a>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
           <BlackHole />
        </div>
      </div>
    </section>
  )
}

const ContentSection = ({ t, repos }: { t: any, repos: any[] }) => {
  const MAX_VISIBLE = 4 
  const [showAll, setShowAll] = useState(false)

  const visibleExperiences = showAll
    ? EXPERIENCE_DATA
    : EXPERIENCE_DATA.slice(0, MAX_VISIBLE)

  return (
    <section className="bg-[#0d1117]">
      <Specialization t={t} />
      
      {/* New Showcase Section */}
      <ShowcaseSection t={t} />

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 py-20">
        <div className="lg:col-span-8 space-y-16">

          {/* Github Repos */}
          <motion.div 
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
                <FolderGit size={18} className="text-[#8b949e]" /> {t.sections.pinned}
              </h2>
              <a href="https://github.com/Reza1290?tab=repositories" target="_blank" className="text-sm text-[#58a6ff] hover:underline font-mono cursor-pointer">View all</a>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
               {repos.length > 0 ? (
                 repos.map((repo: any) => (
                    <div key={repo.id} className="flex flex-col justify-between bg-[#0d1117] border border-[#30363d] rounded-md p-5 hover:border-[#8b949e] transition-colors group h-full">
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-[#58a6ff] font-semibold">
                           <BookOpen size={18} className="text-[#8b949e]" />
                           <a href={repo.html_url} target="_blank" rel="noreferrer" className="group-hover:underline cursor-pointer text-base truncate">{repo.name}</a>
                           <span className="ml-auto px-2 py-0.5 rounded-full border border-[#30363d] text-[10px] text-[#8b949e] font-normal uppercase font-mono">Public</span>
                        </div>
                        <p className="text-[#8b949e] text-sm mb-4 leading-relaxed line-clamp-3">{repo.description || "No description available."}</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-[#8b949e] mt-2 font-mono">
                         <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-yellow-400" /> {repo.language || 'Code'}</span>
                         <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                      </div>
                    </div>
                 ))
               ) : (
                 [1,2].map(i => <div key={i} className="h-40 bg-[#161b22] rounded-md animate-pulse border border-[#30363d]"></div>)
               )}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            id="experience"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-display">
              <Briefcase size={18} className="text-[#8b949e]" />
              {t.sections.experience}
            </h2>

            <div className="bg-[#0d1117] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={showAll ? "all" : "short"}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    hidden: { opacity: 0 }
                  }}
                >
                  {visibleExperiences.map((job: any, i: number) => (
                    <ExperienceCard key={i} job={job} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {EXPERIENCE_DATA.length > MAX_VISIBLE && (
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="mt-4 text-sm text-[#58a6ff] hover:text-white transition flex items-center gap-1"
                whileTap={{ scale: 0.97 }}
              >
                {showAll ? (
                  <>Show less <ChevronUp size={14} /></>
                ) : (
                  <>Show more <ChevronDown size={14} /></>
                )}
              </motion.button>
            )}
          </motion.div>
        </div>

        <div className="lg:col-span-4 space-y-12">
          {/* LinkedIn */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
             <LinkedInCard />
          </motion.div>

          {/* Skills */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
             <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-display">
                <Layers size={18} className="text-[#8b949e]" /> {t.sections.skills}
             </h2>
             <div className="space-y-6">
                <div>
                   <h4 className="text-xs font-bold text-[#8b949e] uppercase mb-3 font-mono tracking-wider">{t.languages}</h4>
                   <div className="flex flex-wrap gap-2">
                      {['JS/TS', 'Python', 'Go', 'Java', 'C (STM32)'].map(s => <span key={s} className="px-3 py-1 bg-[#161b22] border border-[#30363d] rounded-full text-xs text-[#c9d1d9] font-medium font-mono">{s}</span>)}
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      <BlogSection t={t} />

    </section>
  )
}

const Footer = ({ t }: { t: any }) => {
  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] mt-0">
      <div className="py-16 border-b border-[#30363d] bg-gradient-to-b from-[#0d1117] to-[#161b22]">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-display">{t.profile.status}</h2>
            <p className="text-[#8b949e] mb-8 max-w-xl mx-auto">I&aposm currently available for freelance projects and open to full-time opportunities.</p>
            <a href={SOCIAL_LINKS.email} className="inline-block px-8 py-3 bg-[#238636] text-white font-bold rounded-md hover:bg-[#2ea043] transition-colors shadow-lg font-display">{t.profile.cta}</a>
         </div>
      </div>
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-xs text-[#8b949e] font-mono">
        <span>© 2025 {t.profile.name}. All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
           <a href={SOCIAL_LINKS.linkedin} className="hover:text-[#58a6ff]">LinkedIn</a>
           <a href={SOCIAL_LINKS.github} className="hover:text-[#58a6ff]">GitHub</a>
           <a href={SOCIAL_LINKS.blog} className="hover:text-[#58a6ff]">Blog</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [lang, setLang] = useState<'en' | 'id'>('en')
  const [githubStats, setGithubStats] = useState<any>(null)
  const [repos, setRepos] = useState<any[]>([])
  const t = CONTENT[lang]

  useEffect(() => {
    fetch('https://api.github.com/users/Reza1290').then(res => res.json()).then(data => setGithubStats(data))
    fetch('https://api.github.com/users/Reza1290/repos?sort=updated&per_page=4').then(res => res.json()).then(data => setRepos(data))
  }, [])

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans selection:bg-[#1f6feb] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400500&family=Public+Sans:wght@300400500600700&display=swap')
        :root { --font-sans: 'Public Sans', sans-serif --font-mono: 'JetBrains Mono', monospace }
        body { font-family: var(--font-sans) background-color: #0d1117 }
        .font-display { font-family: var(--font-sans) letter-spacing: -0.02em }
        .font-mono { font-family: var(--font-mono) }
        @keyframes float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-20px) } }
        .animate-float { animation: float 6s ease-in-out infinite }
      `}</style>
      
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} githubStats={githubStats} />
        <ContentSection t={t} repos={repos} />
      </main>
      <Footer t={t} />
    </div>
  )
}