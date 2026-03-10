import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Users, Shield, ShoppingCart } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'SafeHER',
    tagline: 'Women Safety Application',
    icon: Shield,
    color: '#ff00ff',
    description: 'A comprehensive women safety application featuring real-time location sharing, emergency SOS alerts, trusted contacts management, and AI-powered. Built to provide immediate assistance in dangerous situations.',
    features: [
      'Real-time location tracking',
      'Emergency SOS with one-tap alert',
      'Find Safe Route to navigate securely in unfamiliar or unsafe areas',
      'Detect Spy Camera feature',
      'Quick Emergency Call to police or emergency contacts',
      'Record Encrypted Video Evidence in critical situations',
      'Chatbot Assistance for quick guidance and help',
      'Trusted contacts network',
      'AI-powered safety predictions',
      'Safety tips and resources'
    ],
    tech: ['Android', 'Firebase', 'Kotlin', 'Java', 'Google Maps', 'Sensors'],
    hackathon: 'ORCHATHON 2K25-24 - Best Innovative Girls Team Award',
    github: "https://github.com/ShrutiiPunekar/SafeHER.git",
    demo: "",
    stats: { stars: 128, users: '5K+' }
  },
  {
    id: 2,
    title: 'Placify',
    tagline: 'AI Placement Management Platform',
    icon: Star,
    color: '#00ff41',
    description: 'An intelligent placement management platform that streamline campus placements, with role-based portals for Students, Faculty Mentors, Placement Cells, and Recruiters featuring secure login and dynamic dashboards. Uses AI to match students with relevant job opportunities, provides personalized mock interviews, and tracks placement progress.',
    features: [
      'Student profile management (resume, projects, certificates)',
      'Interview scheduling',
      'AI-based assessments (MCQs, coding)',
      'Mock interview simulations',
      'Progress tracking dashboard',
      'Opportunity postings',
      'Mentor approvals',
      'Mentor feedback',     
      'modern responsive UI',
      'workflow: application → mentor approval → recruiter',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'OpenAI'],
    hackathon: 'TECHATHON 1.0',
    github: "https://github.com/ShrutiiPunekar/Placify",
    demo: "",
    stats: { stars: 256, users: '10K+' }
  },
  {
    id: 3,
    title: 'Click&Shop',
    tagline: 'E-commerce Aggregator Platform',
    icon: ShoppingCart,
    color: '#0ff0fc',
    description: 'A modern e-commerce platform with seamless shopping experience, Click&Shop, designed to enhance user experience and streamline online shopping. Built with focus on user experience and performance. This project demonstrates my skills in web development, user experience design, and e-commerce platform management. Integrated offers from Amazon, Flipkart, Ajio, Myntra, and Meesho, with an admin panel for product management to enhance user convenience and savings.',
    // A modern e-commerce platform with seamless shopping experience, secure payment integration, advanced product search with filters, wishlist functionality, and order tracking. Built with focus on user experience and performance. Built a dynamic product aggregator using HTML, CSS, PHP, and MySQL', 
    features: [
      'Advanced product search',
      'Latest offer banners, product cards',
      'User authentication',
      'Shopping cart & wishlist',
      'Order tracking system'
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
    hackathon: null,
    github: "https://github.com/ShrutiiPunekar/Click-Shop.git",
    demo: "",
    stats: { stars: 89, users: '2K+' }
  }
]

function Projects() {
  return (
    <div className="h-full overflow-auto p-6" style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 
            className="text-2xl font-bold mb-2"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#00ff41',
              textShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
            }}
          >
            Projects
          </h2>
          <p className="text-cyber-text-dim text-sm">
            Some of the things I've built
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'rgba(18, 18, 26, 0.8)',
                border: `1px solid ${project.color}30`,
                boxShadow: `0 0 30px ${project.color}10`
              }}
            >
              {/* Project Header */}
              <div 
                className="p-4 flex items-start justify-between"
                style={{
                  background: `linear-gradient(90deg, ${project.color}10 0%, transparent 100%)`,
                  borderBottom: `1px solid ${project.color}20`
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${project.color}20`,
                      border: `1px solid ${project.color}40`
                    }}
                  >
                    <project.icon size={24} style={{ color: project.color }} />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold"
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        color: project.color
                      }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-cyber-text-dim text-sm">{project.tagline}</p>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-cyber-text-dim">
                    <Star size={14} style={{ color: project.color }} />
                    <span className="text-sm">{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-cyber-text-dim">
                    <Users size={14} style={{ color: project.color }} />
                    <span className="text-sm">{project.stats.users}</span>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-4">
                <p className="text-cyber-text mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyber-text-dim mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + fIndex * 0.1 }}
                        className="flex items-center gap-2 text-sm text-cyber-text"
                      >
                        <span style={{ color: project.color }}>▹</span>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyber-text-dim mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 text-xs rounded"
                        style={{
                          background: `${project.color}15`,
                          border: `1px solid ${project.color}30`,
                          color: project.color
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hackathon Badge */}
                {project.hackathon && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                    style={{
                      background: 'rgba(255, 107, 53, 0.1)',
                      border: '1px solid rgba(255, 107, 53, 0.3)',
                      color: '#ff6b35'
                    }}
                  >
                    <span>{'🏆'}</span>
                    {project.hackathon}
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <motion.a
                  href={project.github}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      background: `${project.color}20`,
                      border: `1px solid ${project.color}40`,
                      color: project.color
                    }}
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                  <motion.a
                  href={project.demo}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      background: 'transparent',
                      border: `1px solid ${project.color}40`,
                      color: project.color
                    }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-cyber-text-dim text-sm"
        >
          More projects coming soon... Check my GitHub for updates!
        </motion.p>
      </div>
    </div>
  )
}

export default Projects

