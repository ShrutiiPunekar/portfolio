import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Code, Heart } from 'lucide-react'

function AboutMe() {
  const [displayText, setDisplayText] = useState('')
  // const fullText = "Hi, I'm Shruti! A passionate Full Stack Developer who loves building innovative solutions. I specialize in creating seamless web experiences with modern technologies. When I'm not coding, you can find me exploring new tech trends or contributing to open-source projects."
const fullText = "Hi, I'm Shruti — a Computer Science Engineering student passionate about building innovative technology solutions. I specialize in Android and Web Development, creating seamless and impactful digital experiences using modern technologies. I have worked on projects such as SafeHER (a women’s safety application), Placify (an AI-enabled placement management platform), and Click&Shop, where I applied my problem-solving skills to build real-world solutions. Beyond development, I am an aspiring Data Scientist with a strong interest in Machine Learning and AI. I am fascinated by how data-driven insights can solve real-world challenges in domains like healthcare, business analytics, and intelligent applications.\n\n Technologies & Interests \n Java | Python | Android Development | Web Development | Machine Learning | Data Science\n\nI am always eager to learn new technologies, collaborate on innovative projects, and contribute to meaningful tech solutions that create real impact.";  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [])

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/ShrutiiPunekar', color: '#00ff41' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vijayalaxmi-punekar-8613b1257/', color: '#0ff0fc' },
    { icon: Mail, label: 'Email', href: 'mailto:shrutip112005@gmail.com', color: '#ff00ff' },
  ]

  return (
    <div className="h-full overflow-auto p-6" style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)' }}>
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-8"
        >
          {/* Avatar */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <div 
              className="w-32 h-32 rounded-full p-1"
              style={{
                background: 'linear-gradient(135deg, #00ff41 0%, #0ff0fc 50%, #ff00ff 100%)',
                boxShadow: '0 0 30px rgba(0, 255, 65, 0.3), 0 0 60px rgba(15, 240, 252, 0.2)'
              }}
            >
              <div 
                className="w-full h-full rounded-full flex items-center justify-center text-5xl"
                style={{ background: '#0a0a0f' }}
              >
                👩‍💻
              </div>
            </div>
            {/* Status Indicator */}
            <motion.div
              className="absolute bottom-2 right-2 w-4 h-4 rounded-full"
              style={{ 
                background: '#00ff41',
                boxShadow: '0 0 10px #00ff41'
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Name & Title */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-3xl font-bold mb-2"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                color: '#00ff41',
                textShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Shruti
            </motion.h1>
            <motion.div
              className="flex items-center gap-2 text-cyber-text-dim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Code size={16} />
              <span>
                Full Stack & Android Developer <br />
                WIT '27 | Walchand Institute of Technology, Solapur <br />
                Solapur, Maharashtra, India
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-cyber-text-dim mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <MapPin size={16} />
              <span>India</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <p className="text-cyber-text leading-relaxed">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 ml-1"
              style={{ background: '#00ff41' }}
            />
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              style={{
                background: 'rgba(26, 26, 46, 0.8)',
                border: `1px solid ${link.color}30`,
                color: link.color
              }}
            >
              <link.icon size={18} />
              <span className="text-sm font-mono">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="grid grid-cols-3 gap-4 mt-8"
        >
          {[
            { label: 'Projects', value: '5+', icon: '📁' },
            { label: 'Hackathons', value: '2+', icon: '🏆' },
            { label: 'Years', value: '3+', icon: '⏱️' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.03 }}
              className="p-4 rounded-lg text-center"
              style={{
                background: 'rgba(18, 18, 26, 0.8)',
                border: '1px solid rgba(0, 255, 65, 0.2)'
              }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div 
                className="text-2xl font-bold"
                style={{ 
                  color: '#00ff41',
                  fontFamily: 'Orbitron, sans-serif'
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-cyber-text-dim">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-center mt-8 text-cyber-text-dim text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={14} className="text-cyber-magenta" /> using React
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutMe

