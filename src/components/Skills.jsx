import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Express', level: 65 },
      { name: 'MongoDB', level: 80 },
    ]
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 60 },
      { name: 'VS Code', level: 95 },
      { name: 'Docker', level: 40 },
      { name: 'AWS', level: 40 },
    ]
  }
]

function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState({})

  useEffect(() => {
    // Staggered animation for skill bars
    const timer = setTimeout(() => {
      skillCategories.forEach((category, catIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const delay = (catIndex * 0.2) + (skillIndex * 0.1)
          setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [`${catIndex}-${skillIndex}`]: skill.level
            }))
          }, delay * 1000)
        })
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

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
            Technical Skills
          </h2>
          <p className="text-cyber-text-dim text-sm">
            Technologies I work with
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.2 }}
              className="p-5 rounded-xl"
              style={{
                background: 'rgba(18, 18, 26, 0.8)',
                border: '1px solid rgba(15, 240, 252, 0.2)',
                boxShadow: '0 0 20px rgba(15, 240, 252, 0.05)'
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    color: '#0ff0fc'
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-cyber-text">{skill.name}</span>
                      <span className="text-xs text-cyber-cyan">
                        {animatedSkills[`${catIndex}-${skillIndex}`] || 0}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(15, 240, 252, 0.1)' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #0ff0fc 0%, #00ff41 100%)',
                          boxShadow: '0 0 10px #0ff0fc'
                        }}
                        initial={{ width: 0 }}
                        animate={{ 
                          width: `${animatedSkills[`${catIndex}-${skillIndex}`] || 0}%` 
                        }}
                        transition={{ 
                          duration: 1, 
                          delay: 0.5 + (catIndex * 0.2) + (skillIndex * 0.1),
                          ease: 'easeOut'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <h3 
            className="text-lg font-semibold mb-4 text-center"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#ff00ff'
            }}
          >
            Other Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Java', 'Python', 'Android', 'HTML', 'CSS', 'Figma', 'React.js', 'Node.js', 'JavaScript', 'Tailwind', 'PHP', 'MySQL', 'MangoDB'
              // 'REST APIs', 'GraphQL', 'CI/CD', 'Linux', 'Figma',
              // 'PostgreSQL', 'MySQL', 'Redis', 'TypeScript', 'Next.js'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + (index * 0.05) }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-sm rounded-full cursor-default"
                style={{
                  background: 'rgba(255, 0, 255, 0.1)',
                  border: '1px solid rgba(255, 0, 255, 0.3)',
                  color: '#ff00ff'
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skills Progress Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-lg" style={{ background: 'rgba(0, 255, 65, 0.05)', border: '1px solid rgba(0, 255, 65, 0.2)' }}>
            <span className="text-cyber-green">⚡</span>
            <span className="text-cyber-text text-sm">
              Continuously learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills

