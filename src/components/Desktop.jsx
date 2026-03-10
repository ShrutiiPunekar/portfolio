import React from 'react'
import { motion } from 'framer-motion'
import DesktopIcon from './DesktopIcon'

function Desktop({ icons, appData, onIconClick }) {
  return (
    <div className="absolute inset-0 bottom-12 overflow-hidden">
      {/* Desktop Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(0, 255, 65, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(15, 240, 252, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(255, 0, 255, 0.03) 0%, transparent 70%),
            linear-gradient(180deg, #0a0a0f 0%, #0d1117 100%)
          `
        }}
      />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Desktop Icons */}
      <div className="relative z-10 p-4 grid grid-cols-4 gap-4 content-start">
        {icons.map((key, index) => (
          <DesktopIcon
            key={key}
            icon={appData[key].icon}
            label={appData[key].title}
            onClick={() => onIconClick(key)}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Floating Particles Effect */}
      <FloatingParticles />
    </div>
  )
}

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.id % 3 === 0 
              ? 'rgba(0, 255, 65, 0.3)' 
              : particle.id % 3 === 1 
                ? 'rgba(15, 240, 252, 0.3)' 
                : 'rgba(255, 0, 255, 0.3)',
            boxShadow: particle.id % 3 === 0 
              ? '0 0 10px #00ff41' 
              : particle.id % 3 === 1 
                ? '0 0 10px #0ff0fc' 
                : '0 0 10px #ff00ff'
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export default Desktop

