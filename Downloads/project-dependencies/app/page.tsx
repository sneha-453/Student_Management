"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Instagram, ArrowRight, Camera, Plane, PenTool, LucideImage, Menu, X } from "lucide-react"

// based on his resume and the provided design inspiration.

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("gallery")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Gallery", id: "gallery" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ]

  const galleryImages = [
    {
      src: "/images/beach-couple.jpg",
      title: "Golden Hour Shores",
      category: "Outdoor",
    },
    {
      src: "/images/wall-couple.jpg",
      title: "Rustic Moments",
      category: "Portrait",
    },
    {
      src: "/images/night-couple-elegant.jpg",
      title: "Midnight Elegance",
      category: "Night",
    },
    {
      src: "/images/night-couple-close.jpg",
      title: "Intimate Shadows",
      category: "Night",
    },
    {
      src: "/images/traditional-couple.jpg",
      title: "Heritage & Love",
      category: "Traditional",
    },
    {
      src: "/images/drone-shot-1.jpg",
      title: "Aerial Perspective",
      category: "Drone",
    },
  ]

  const services = [
    {
      title: "Photography",
      icon: <Camera className="h-6 w-6" />,
      description: "Professional events, portraits, and outdoor storytelling captured with a creative eye.",
    },
    {
      title: "Drone Cinematography",
      icon: <Plane className="h-6 w-6" />,
      description: "High-quality aerial photography and videography for unique, cinematic perspectives.",
    },
    {
      title: "Graphic Design",
      icon: <PenTool className="h-6 w-6" />,
      description: "Custom album designs, brand identity, and visual assets tailored to your needs.",
    },
    {
      title: "Video Editing",
      icon: <LucideImage className="h-6 w-6" />,
      description: "Seamless end-to-end video editing and color grading for impactful storytelling.",
    },
  ]

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-border/50" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-medium tracking-[0.2em] uppercase">Ajith Kumar M</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveSection(item.id)
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                }}
                className={`text-xs uppercase tracking-[0.3em] transition-all hover:text-accent ${
                  activeSection === item.id ? "text-accent font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setIsMenuOpen(false)
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-2xl uppercase tracking-[0.4em] text-foreground"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
         <img
  src="/images/cover.jpg.png"
  alt="Hero Background"
  className="w-full h-full object-cover object-center brightness-90 contrast-110"
/>
        </div>
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-left">
          
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-accent text-xs uppercase tracking-[0.5em] mb-6 block opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Creative Specialist
          </span>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-8 text-pretty opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Capturing the <span className="italic">Unseen</span>
          </h1>
          <p className="max-w-xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed mb-12 opacity-0 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            Based in India, I blend aesthetics with innovation to deliver compelling visual storytelling across digital
            and print media.
          </p>
          <div className="opacity-0 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-500 tracking-[0.2em] text-xs uppercase bg-transparent"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Portfolio
            </Button>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-[1px] h-12 bg-foreground" />
        </div>
      </header>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-3xl font-light tracking-tight mb-4">Creativity Image</h2>
              <p className="text-muted-foreground text-sm max-w-md">
                A collection of creative storytelling moments captured through my lens.
              </p>
            </div>
            <div className="flex gap-4">
              {["All", "Portrait", "Night", "Traditional", "Drone"].map((cat) => (
                <button
                  key={cat}
                  className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-muted cursor-pointer">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">{image.category}</span>
                  <h3 className="text-xl font-light tracking-wide text-white">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-secondary/30 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
            <img
              src="/images/cover.jpg"
              alt="Ajith Kumar M"
              className="w-full h-full object-cover hover:grayscale transition-all duration-700"
            />
          </div>
          <div>
            <h2 className="text-accent text-xs uppercase tracking-[0.5em] mb-8">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-light leading-tight mb-10 text-balance">
              Creative Storyteller & <span className="italic">Visual Architect</span>
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                I am Ajith Kumar M, a detail-oriented professional with over 6 years of expertise in photography, drone
                operation, and graphic design.
              </p>
              <p>
                My passion lies in blending aesthetics with innovation to capture unique perspectives that enhance brand
                identity and tell powerful stories. Having completed over 100 projects, I've refined my skills in visual
                storytelling across various digital and print media.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-light mb-1">100+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-1">6+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-light tracking-tight mb-20">Creative Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-8 border border-border/50 hover:border-accent/30 transition-colors duration-500"
              >
                <div className="text-accent mb-6">{service.icon}</div>
                <h4 className="text-sm uppercase tracking-[0.2em] mb-4">{service.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-secondary/30 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-tight mb-16">The Journey</h2>
          <div className="space-y-16">
            <div className="relative pl-8 border-l border-accent/20 text-left">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-accent rounded-full" />
              <div className="text-xs uppercase tracking-[0.2em] text-accent mb-2">2018 – Present</div>
              <h4 className="text-xl font-medium mb-4">Freelance Creative Specialist</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Delivering end-to-end creative solutions, including drone-based shoots, custom album designs, and
                professional video editing for events, brands, and personal clients.
              </p>
            </div>
            <div className="relative pl-8 border-l border-accent/20 text-left">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-accent/30 rounded-full" />
              <div className="text-xs uppercase tracking-[0.2em] text-accent/50 mb-2">Education</div>
              <h4 className="text-xl font-medium mb-4">Undergraduate Studies</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Universal College of Engineering and Technology. Blending technical engineering principles with artistic
                creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Let's create <span className="italic">something</span> extraordinary.
              </h2>
              <p className="text-muted-foreground mb-12 text-sm">
                Available for freelance projects worldwide. Reach out to discuss your vision or just to say hi.
              </p>
              <div className="space-y-6">
                <a
                  href="mailto:ajithkumarma234@gmail.com"
                  className="flex items-center gap-4 text-sm hover:text-accent transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  ajithkumarma234@gmail.com
                </a>
                <a
                  href="https://instagram.com"
                  className="flex items-center gap-4 text-sm hover:text-accent transition-colors"
                >
                  <Instagram className="h-5 w-5 text-accent" />
                  @ajith_kumar_photography
                </a>
              </div>
            </div>
            <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border py-2 focus:border-accent focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-border py-2 focus:border-accent focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-2 focus:border-accent focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group py-6 rounded-none uppercase tracking-[0.2em] text-xs">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs text-muted-foreground tracking-[0.1em]">
            © {new Date().getFullYear()} AJITH KUMAR M. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/drive/folders/1o3BkBDO3FgbeX-QX4f-xrhs-lRtyXNvk?usp=sharing"
              className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
            >
              creative works
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
