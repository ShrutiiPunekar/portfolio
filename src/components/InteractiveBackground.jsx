import React, { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

function InteractiveBackground() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const particlesRef = useRef([])
  const animationRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Initialize particles
  const initParticles = useCallback((width, height) => {
    const particleCount = Math.min(60, Math.floor((width * height) / 15000))
    const particles = []
    const colors = ['#00ff41', '#0ff0fc', '#ff00ff', '#00ff41', '#0ff0fc']
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01
      })
    }
    particlesRef.current = particles
  }, [])

  // Handle mouse movement
  const handleMouseMove = useCallback((e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseRef.current.targetX = e.clientX - rect.left
      mouseRef.current.targetY = e.clientY - rect.top
    }
  }, [])

  // Handle touch movement
  const handleTouchMove = useCallback((e) => {
    if (containerRef.current && e.touches[0]) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseRef.current.targetX = e.touches[0].clientX - rect.left
      mouseRef.current.targetY = e.touches[0].clientY - rect.top
    }
  }, [])

  // Initialize canvas and animation
  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    let width = container.clientWidth
    let height = container.clientHeight

    const handleResize = () => {
      width = container.clientWidth
      height = container.clientHeight
      canvas.width = width
      canvas.height = height
      setDimensions({ width, height })
      initParticles(width, height)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      // Smooth mouse following
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw animated grid
      drawGrid(ctx, width, height)

      // Draw glow orbs
      drawGlowOrbs(ctx, width, height)

      // Update and draw particles
      updateParticles(ctx, width, height)

      // Draw connections between nearby particles
      drawConnections(ctx, width, height)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initParticles])

  // Draw animated grid with parallax
  const drawGrid = (ctx, width, height) => {
    const offsetX = (mouseRef.current.x - width / 2) * 0.02
    const offsetY = (mouseRef.current.y - height / 2) * 0.02
    
    ctx.strokeStyle = 'rgba(0, 255, 65, 0.03)'
    ctx.lineWidth = 1

    const gridSize = 60
    const startX = -gridSize + (offsetX % gridSize)
    const startY = -gridSize + (offsetY % gridSize)

    // Vertical lines
    for (let x = startX; x < width + gridSize; x += gridSize) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    // Horizontal lines
    for (let y = startY; y < height + gridSize; y += gridSize) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  // Draw ambient glow orbs
  const drawGlowOrbs = (ctx, width, height) => {
    const time = Date.now() * 0.001
    
    const orbs = [
      { x: width * 0.2, y: height * 0.8, radius: 300, color: 'rgba(0, 255, 65, 0.03)' },
      { x: width * 0.8, y: height * 0.2, radius: 250, color: 'rgba(15, 240, 252, 0.03)' },
      { x: width * 0.5, y: height * 0.5, radius: 350, color: 'rgba(255, 0, 255, 0.02)' }
    ]

    orbs.forEach(orb => {
      const gradient = ctx.createRadialGradient(
        orb.x + Math.sin(time + orb.x) * 20,
        orb.y + Math.cos(time + orb.y) * 20,
        0,
        orb.x + Math.sin(time + orb.x) * 20,
        orb.y + Math.cos(time + orb.y) * 20,
        orb.radius
      )
      gradient.addColorStop(0, orb.color)
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    })
  }

  // Update particles with mouse interaction
  const updateParticles = (ctx, width, height) => {
    const particles = particlesRef.current
    const mouseX = mouseRef.current.x
    const mouseY = mouseRef.current.y

    particles.forEach((particle, index) => {
      // Update pulse
      particle.pulse += particle.pulseSpeed

      // Mouse interaction - repel particles
      const dx = mouseX - particle.x
      const dy = mouseY - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const repelRadius = 150

      if (distance < repelRadius) {
        const force = (repelRadius - distance) / repelRadius
        particle.vx -= (dx / distance) * force * 0.5
        particle.vy -= (dy / distance) * force * 0.5
      }

      // Add slight movement
      particle.vx += (Math.random() - 0.5) * 0.1
      particle.vy += (Math.random() - 0.5) * 0.1

      // Damping
      particle.vx *= 0.99
      particle.vy *= 0.99

      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Wrap around edges
      if (particle.x < 0) particle.x = width
      if (particle.x > width) particle.x = 0
      if (particle.y < 0) particle.y = height
      if (particle.y > height) particle.y = 0

      // Draw particle with glow - ensure positive size
      const glowSize = Math.max(0.5, particle.size + Math.sin(particle.pulse) * 1.5)
      const glowRadius = Math.max(1, glowSize * 3)
      
      // Glow effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, glowRadius
      )
      gradient.addColorStop(0, particle.color)
      gradient.addColorStop(0.3, particle.color + '80')
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2)
      ctx.fill()

      // Core particle
      ctx.fillStyle = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2)
      ctx.fill()
    })
  }

  // Draw lines between nearby particles
  const drawConnections = (ctx, width, height) => {
    const particles = particlesRef.current
    const connectionDistance = 120

    particles.forEach((particle, i) => {
      particles.slice(i + 1).forEach(other => {
        const dx = particle.x - other.x
        const dy = particle.y - other.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * 0.15
          ctx.strokeStyle = `rgba(0, 255, 65, ${opacity})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
        }
      })

      // Draw line to mouse if close
      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y
      const dx = particle.x - mouseX
      const dy = particle.y - mouseY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 100) {
        const opacity = (1 - distance / 100) * 0.2
        ctx.strokeStyle = particle.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba').replace('#', '')
        // Convert hex to rgba
        const hex = particle.color
        const r = parseInt(hex.slice(1, 3), 16)
        const g = parseInt(hex.slice(3, 5), 16)
        const b = parseInt(hex.slice(5, 7), 16)
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(mouseX, mouseY)
        ctx.stroke()
      }
    })
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Base gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(0, 255, 65, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(15, 240, 252, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(255, 0, 255, 0.05) 0%, transparent 70%),
            linear-gradient(180deg, #0a0a0f 0%, #0d1117 100%)
          `
        }}
      />

      {/* Canvas for particles and effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Subtle scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 4px)',
          zIndex: 2
        }}
      />

      {/* Floating decorative elements with parallax */}
      <ParallaxElement 
        delay={0} 
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-500/30 blur-sm"
        style={{ boxShadow: '0 0 20px #0ff0fc' }}
      />
      <ParallaxElement 
        delay={0.5} 
        className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-green-500/30 blur-sm"
        style={{ boxShadow: '0 0 30px #00ff41' }}
      />
      <ParallaxElement 
        delay={1} 
        className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-magenta-500/30 blur-sm"
        style={{ boxShadow: '0 0 20px #ff00ff' }}
      />
    </div>
  )
}

// Parallax floating element
function ParallaxElement({ children, delay = 0, className = '', style = {} }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.parentElement?.getBoundingClientRect()
      if (!rect) return

      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      element.style.transform = `translate(${x * 20}px, ${y * 20}px)`
    }

    const parent = element.parentElement
    parent?.addEventListener('mousemove', handleMouseMove)

    return () => {
      parent?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={elementRef}
      className={className}
      style={style}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

export default InteractiveBackground

