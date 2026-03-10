import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, Clock, MessageCircle } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/ShrutiiPunekar', 
      color: '#00ff41',
      description: 'Check my code'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/vijayalaxmi-punekar-8613b1257/', 
      color: '#0ff0fc',
      description: 'Connect with me'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:shrutip112005@gmail.com', 
      color: '#ff00ff',
      description: 'Drop a mail'
    }
  ]

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
              color: '#0ff0fc',
              textShadow: '0 0 10px rgba(15, 240, 252, 0.5)'
            }}
          >
            Get In Touch
          </h2>
          <p className="text-cyber-text-dim text-sm">
            Have a project in mind? Let's talk!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl"
            style={{
              background: 'rgba(18, 18, 26, 0.8)',
              border: '1px solid rgba(15, 240, 252, 0.2)'
            }}
          >
            <h3 
              className="text-lg font-semibold mb-4 flex items-center gap-2"
              style={{ color: '#0ff0fc' }}
            >
              <MessageCircle size={20} />
              Send a Message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: 'rgba(0, 255, 65, 0.2)' }}
                >
                  <span className="text-3xl">✓</span>
                </div>
                <h4 
                  className="text-xl font-bold mb-2"
                  style={{ color: '#00ff41' }}
                >
                  Message Sent!
                </h4>
                <p className="text-cyber-text-dim text-sm">
                  Thanks for reaching out. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg text-sm"
                  style={{
                    background: 'rgba(15, 240, 252, 0.1)',
                    border: '1px solid rgba(15, 240, 252, 0.3)',
                    color: '#0ff0fc'
                  }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-sm text-cyber-text-dim mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{
                      background: 'rgba(10, 10, 15, 0.8)',
                      border: '1px solid rgba(15, 240, 252, 0.3)',
                      color: '#e0e0e0'
                    }}
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm text-cyber-text-dim mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{
                      background: 'rgba(10, 10, 15, 0.8)',
                      border: '1px solid rgba(15, 240, 252, 0.3)',
                      color: '#e0e0e0'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm text-cyber-text-dim mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
                    style={{
                      background: 'rgba(10, 10, 15, 0.8)',
                      border: '1px solid rgba(15, 240, 252, 0.3)',
                      color: '#e0e0e0'
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(90deg, #0ff0fc 0%, #00ff41 100%)',
                    color: '#0a0a0f'
                  }}
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-4">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(18, 18, 26, 0.8)',
                border: '1px solid rgba(0, 255, 65, 0.2)'
              }}
            >
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: '#00ff41' }}
              >
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-lg transition-colors"
                    style={{
                      background: 'rgba(10, 10, 15, 0.5)',
                      border: '1px solid transparent'
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${link.color}20`,
                        border: `1px solid ${link.color}40`
                      }}
                    >
                      <link.icon size={20} style={{ color: link.color }} />
                    </div>
                    <div>
                      <div className="text-sm font-medium" style={{ color: link.color }}>
                        {link.label}
                      </div>
                      <div className="text-xs text-cyber-text-dim">
                        {link.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Location & Availability */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(18, 18, 26, 0.8)',
                border: '1px solid rgba(255, 0, 255, 0.2)'
              }}
            >
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: '#ff00ff' }}
              >
                More Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-cyber-magenta" />
                  <div>
                    <div className="text-sm text-cyber-text">Location</div>
                    <div className="text-xs text-cyber-text-dim">Solapur, Maharashtra, India</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-cyber-magenta" />
                  <div>
                    <div className="text-sm text-cyber-text">Response Time</div>
                    <div className="text-xs text-cyber-text-dim">Within 24 hours</div>
                  </div>
                </div>
                <div 
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ background: 'rgba(0, 255, 65, 0.1)' }}
                >
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ background: '#00ff41', boxShadow: '0 0 10px #00ff41' }}
                  />
                  <span className="text-sm text-cyber-green">Available for opportunities</span>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 240, 252, 0.1) 0%, rgba(0, 255, 65, 0.1) 100%)',
                border: '1px solid rgba(15, 240, 252, 0.2)'
              }}
            >
              <p className="text-cyber-text text-sm mb-2">
                Let's build something amazing together!
              </p>
              <p className="text-cyber-text-dim text-xs">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

