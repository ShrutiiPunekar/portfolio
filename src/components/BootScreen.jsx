import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const bootMessages = [
  'Initializing kernel...',
  'Loading memory manager...',
  'Starting process scheduler...',
  'Mounting file systems...',
  'Loading network drivers...',
  'Initializing graphics subsystem...',
  'Loading window manager...',
  'Starting desktop environment...',
  'Welcome to DevOS v2.0'
]

const asciiLogo = `

 
 ██████╗██████╗  ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 


 ██████╗██╗   ██╗██████╗ ███████╗██████╗     ██████╗ ███████╗ ██████╗ 
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗    ██╔══██╗██╔════╝██╔════╝ 
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝    ██████╔╝█████╗  ██║  ███╗
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗    ██╔══██╗██╔══╝  ██║   ██║
╚██████╗   ██║   ██████╔╝███████╗██║  ██║    ██║  ██║███████╗╚██████╔╝
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚══════╝ ╚═════╝ 
  



     _____                _       _   _             
  / ____|              | |     | | (_)            
 | |      ___   ___  __| | __ _| |_ _  ___  _ __  
 | |     / _ \ / _ \/ _ |/ _ | __| |/ _ \| '_ \ 
 | |____| (_) |  __/ (_| | (_| | |_| | (_) | | | |
  \_____\___/ \___|\__ __|\___|\__|_|\___/|_| |_|
     
`

function BootScreen({ onComplete }) {
  const canvasRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    // Matrix rain effect
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?'
    const fontSize = 14
    const columns = canvas.width / fontSize
    
    const drops = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#00ff41'
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Show logo after a short delay
    const timer = setTimeout(() => setShowLogo(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Progress bar animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 1000)
          return 100
        }
        
        // Update message at certain progress points
        const messageIndex = Math.floor((prev / 100) * (bootMessages.length - 1))
        if (messageIndex > currentMessage) {
          setCurrentMessage(messageIndex)
        }
        
        return prev + Math.random() * 3 + 1
      })
    }, 80)

    return () => clearInterval(interval)
  }, [currentMessage, onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-cyber-black overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {showLogo && (
          <motion.pre
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-cyber-green text-[8px] sm:text-[10px] md:text-xs leading-tight glow-text-green font-mono"
            style={{ 
              textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41',
              whiteSpace: 'pre'
            }}
          >
            {asciiLogo}
          </motion.pre>
        )}
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 w-64 sm:w-80 md:w-96"
        >
          <div className="flex justify-between text-cyber-green text-xs mb-2 font-mono">
            <span>SYSTEM LOAD</span>
            <span>{Math.min(100, Math.floor(progress))}%</span>
          </div>
          
          <div className="h-2 bg-cyber-surface border border-cyber-green/30 rounded overflow-hidden">
            <motion.div
              className="h-full bg-cyber-green"
              style={{
                boxShadow: '0 0 10px #00ff41, 0 0 20px #00ff41'
              }}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4 text-cyber-green/70 text-xs font-mono h-4"
          >
            {bootMessages[currentMessage]}
          </motion.p>
        </motion.div>
      </div>

      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none scanlines" />
    </motion.div>
  )
}

export default BootScreen

