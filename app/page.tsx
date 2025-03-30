import Link from "next/link";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
} from "lucide-react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImg from "../assests/WhatsApp.jpeg";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, and secure checkout.",
      image: "/placeholder.svg?height=400&width=600&text=E-commerce+Project",
      tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks and projects with team collaboration features.",
      image: "/placeholder.svg?height=400&width=600&text=Task+Management+App",
      tags: ["React", "TypeScript", "Firebase", "Redux"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website template for developers and designers to showcase their work.",
      image: "/placeholder.svg?height=400&width=600&text=Portfolio+Website",
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current conditions and forecasts based on user location.",
      image: "/placeholder.svg?height=400&width=600&text=Weather+Dashboard",
      tags: ["React", "API Integration", "Geolocation", "Chart.js"],
      link: "#",
      github: "#",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "SASS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST API"],
    },
    {
      category: "Database",
      items: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "Redis",
        "Supabase",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Vercel",
        "Netlify",
        "Figma",
        "Adobe XD",
      ],
    },
  ];

  const experiences = [
    {
      company: "Hcode Technologic ( Paytunes )",
      position: "Senior Frontend Developer",
      period: "2024 - Present",
      description:
        "Lead the frontend development team in building responsive and accessible web applications. Implemented modern frontend practices and improved performance metrics by 40%.",
      technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    },
    {
      company: "Technogetic Pvt. Ltd.",
      position: "Full Stack Developer",
      period: "2023 - 2024",
      description:
        "Developed and maintained full-stack applications for clients across various industries. Collaborated with design and product teams to deliver high-quality software solutions.",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React"],
    },
    {
      company: "Indipient info",
      position: "Web Developer ( React Developer )",
      period: "2021 - 2023",
      description:
        "Created responsive websites and implemented UI designs. Worked on optimizing website performance and ensuring cross-browser compatibility.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <section className="py-12 md:py-20 lg:28">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I&apos;m <span className="text-primary">Vijay Gupta</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                Full Stack Developer
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                I build accessible, responsive, and performant web applications
                using modern technologies. With 4+ years of experience, I
                specialize in creating seamless user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">
                  Contact Me <Mail className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                  <Image
                    src={profileImg}
                    alt="Vijay Gupta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-full border">
                  <Badge className="text-sm px-3 py-1">
                    Available for hire
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                I&apos;m a passionate Full Stack Developer with expertise in
                building modern web applications. With a strong foundation in
                both frontend and backend technologies, I create seamless,
                user-friendly experiences that solve real-world problems.
              </p>
              <p className="text-lg mb-4">
                My journey in web development began 4 years ago, and since then,
                I&apos;ve worked with various technologies and frameworks to
                deliver high-quality solutions for clients across different
                industries.
              </p>
              <p className="text-lg">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge through blog posts and community events.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-1">Name:</h3>
                  <p className="text-muted-foreground">Vijay Gupta</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email:</h3>
                  <p className="text-muted-foreground">vijayg963@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location:</h3>
                  <p className="text-muted-foreground">
                    Panipat, Harayana, India
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Availability:</h3>
                  <p className="text-muted-foreground">Full-time / Freelance</p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-medium mb-2">Languages:</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>English (Native)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Hindi (Fluent)</span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>French (Basic)</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l border-muted-foreground/20 last:border-0 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary"></div>
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects. Each project reflects my
              skills and expertise in different areas of web development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.link}>
                        <ExternalLink className="mr-2 h-4 w-4" /> View Live
                      </Link>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.github}>
                        <Github className="mr-2 h-4 w-4" /> Source Code
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">vijayg963@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Panipat, Haryana, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">+19 8950-307535</p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-medium mb-4">Connect with me:</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 border rounded-md"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
