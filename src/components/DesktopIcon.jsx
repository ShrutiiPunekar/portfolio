import React from 'react'
import { motion } from 'framer-motion'

function DesktopIcon({ icon, label, onClick, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.3, type: 'spring', stiffness: 200 }}
      className="desktop-icon flex flex-col items-center gap-2 cursor-pointer group"
      onClick={onClick}
    >
      <motion.div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-3xl sm:text-4xl relative"
        style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(18, 18, 26, 0.9) 100%)',
          border: '1px solid rgba(0, 255, 65, 0.2)',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 255, 65, 0.05)'
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 30px rgba(0, 255, 65, 0.1)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Icon Glow */}
        <div 
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 255, 65, 0.1) 0%, transparent 70%)'
          }}
        />
        
        <span className="relative z-10 drop-shadow-lg">{icon}</span>
        
        {/* Corner Accents */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-cyber-green/50 rounded-tl" />
        <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-cyber-green/50 rounded-tr" />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-cyber-green/50 rounded-bl" />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-cyber-green/50 rounded-br" />
      </motion.div>
      
      <motion.span
        className="text-xs sm:text-sm text-cyber-text font-mono text-center max-w-20 sm:max-w-24 truncate px-1 py-0.5 rounded bg-cyber-black/50"
        style={{
          textShadow: '0 0 5px rgba(0, 255, 65, 0.3)'
        }}
        whileHover={{
          color: '#00ff41',
          textShadow: '0 0 10px #00ff41'
        }}
      >
        {label}
      </motion.span>
    </motion.div>
  )
}

export default DesktopIcon

