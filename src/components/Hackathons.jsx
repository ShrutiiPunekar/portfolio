import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Calendar, Medal, Target, Code, Lightbulb } from 'lucide-react'

const hackathons = [
  {
    id: 1,
    name: 'ORCHATHON 2K25-24',
    project: 'SafeHER',
    position: 'Best Innovative Girls Team Award',
    date: '2025',
    description: 'An innovation-focused hackathon where our team developed SafeHER, a comprehensive women safety application that was selected among the top teams nationally.',
    highlights: [
      'Built real-time safety features',
      'Won Best Innovative Girls Team Award',
      'Integrated AI threat detection',
      'Presented to industry experts'
    ],
    technologies: ['Android', 'Firebase', 'Kotlin', 'Java', 'Google Maps', 'Sensors'],
    color: '#ff00ff'
  },
  {
    id: 2,
    name: 'TECHATHON 1.0',
    project: 'Placify',
    position: 'Participated',
    date: '2025',
    description: 'A 24-hour hackathon where we built an AI-powered placement preparation platform. Build with role-based portals for Students, Faculty Mentors, Placement Cells, and Recruiters featuring secure login and dynamic dashboards.',
    highlights: [
      'Top 10 Finalist',
      'Interview scheduling',
      'AI-based assessments (MCQs, coding)',
      'Mock interview simulations',
      'Progress tracking dashboard',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'OpenAI'],
    color: '#00ff41'
  },
  {
    id: 3,
    name: 'Smart India Hackathon 2025',
    project: 'Railvision',
    position: 'College level',
    date: '2025',
    description: 'A nationwide hackathon organized by Ministry of Education. Our team built SafeHER, RailVision is an AI-powered railway safety system developed during Smart India Hackathon (SIH) to monitor railway tracks, detect hazards, and improve railway safety through real-time alerts and intelligent data analysis.',
    highlights: [
      'Presented to industry experts',
      'Computer vision based track monitoring',
      'Real-time hazard detection', 
      'Smart alert system for authorities' , 
      'AI-driven safety insights'
    ],
    technologies: ['React Native', 'Firebase', 'Python', 'Twilio'],
    color: '#0ff0fc'
  }
]

function Hackathons() {
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
              color: '#ff6b35',
              textShadow: '0 0 10px rgba(255, 107, 53, 0.5)'
            }}
          >
            Hackathons
          </h2>
          <p className="text-cyber-text-dim text-sm">
            Competitive programming & innovation achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{ 
              background: 'linear-gradient(180deg, #ff6b35 0%, #00ff41 50%, #0ff0fc 100%)',
              boxShadow: '0 0 10px rgba(255, 107, 53, 0.5)'
            }}
          />

          {/* Hackathon Cards */}
          <div className="space-y-8">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 top-4 w-5 h-5 rounded-full"
                  style={{
                    background: hackathon.color,
                    boxShadow: `0 0 15px ${hackathon.color}`,
                    border: '2px solid #0a0a0f'
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl p-5"
                  style={{
                    background: 'rgba(18, 18, 26, 0.8)',
                    border: `1px solid ${hackathon.color}30`,
                    boxShadow: `0 0 30px ${hackathon.color}10`
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 
                        className="text-xl font-bold"
                        style={{
                          fontFamily: 'Orbitron, sans-serif',
                          color: hackathon.color
                        }}
                      >
                        {hackathon.name}
                      </h3>
                      <p className="text-cyber-text text-sm">{hackathon.project}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div 
                        className="flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                        style={{
                          background: `${hackathon.color}20`,
                          border: `1px solid ${hackathon.color}40`,
                          color: hackathon.color
                        }}
                      >
                        <Medal size={14} />
                        {hackathon.position}
                      </div>
                      <div className="flex items-center gap-1 text-cyber-text-dim text-sm">
                        <Calendar size={14} />
                        {hackathon.date}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-cyber-text text-sm mb-4 leading-relaxed">
                    {hackathon.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb size={14} className="text-cyber-cyan" />
                      <span className="text-sm font-semibold text-cyber-text-dim">Highlights</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {hackathon.highlights.map((highlight, hIndex) => (
                        <motion.div
                          key={hIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.2 + hIndex * 0.1 }}
                          className="flex items-center gap-2 text-sm text-cyber-text"
                        >
                          <span style={{ color: hackathon.color }}>▸</span>
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {hackathon.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 text-xs rounded"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#e0e0e0'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {[
            { icon: Trophy, value: '2+', label: 'Hackathons', color: '#ff6b35' },
            { icon: Target, value: 'Top 10', label: 'Average Rank', color: '#00ff41' },
            { icon: Code, value: '5+', label: 'Projects Built', color: '#0ff0fc' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.03 }}
              className="p-4 rounded-lg text-center"
              style={{
                background: 'rgba(18, 18, 26, 0.8)',
                border: `1px solid ${stat.color}30`
              }}
            >
              <stat.icon size={24} style={{ color: stat.color }} className="mx-auto mb-2" />
              <div 
                className="text-2xl font-bold"
                style={{ 
                  color: stat.color,
                  fontFamily: 'Orbitron, sans-serif'
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-cyber-text-dim">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Hackathons

