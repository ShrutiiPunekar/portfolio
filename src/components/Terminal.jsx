import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const commands = {
  help: {
    description: 'Show all available commands',
    output: `
╔═══════════════════════════════════════════════════════════╗
║              AVAILABLE COMMANDS                           ║
╠═══════════════════════════════════════════════════════════╣
║  whoami      - About me                                   ║
║  skills      - View my technical skills                   ║
║  projects    - View my projects                           ║
║  hackathons  - View hackathon achievements                ║
║  contact     - Get contact information                    ║
║  clear       - Clear terminal                             ║
║  matrix      - Enter the Matrix...                        ║
║  sudo        - [Easter Egg]                               ║
║  exit        - Close terminal                             ║
╚═══════════════════════════════════════════════════════════╝
    `
  },
  whoami: {
    description: 'About me',
    output: `
╔═══════════════════════════════════════════════════════════╗
║                    ABOUT ME                               ║
╠═══════════════════════════════════════════════════════════╣
║  Name:    Vijayalaxmi Punekar                             ║
║  Role:    Full Stack & Android Developer                  ║
║  Location: Solapur, Maharashtra, India                    ║
║                                                           ║
║  A passionate developer skilled in building               ║
║  innovative solutions. Always eager to learn              ║
║  and explore new technologies.                            ║
╚═══════════════════════════════════════════════════════════╝
    `
  },
  skills: {
    description: 'View technical skills',
    output: `
╔═══════════════════════════════════════════════════════════╗
║                    SKILLS                                 ║
╠═══════════════════════════════════════════════════════════╣
║  Frontend:    React.js, HTML/CSS, JavaScript, Tailwind    ║
║  Backend:     Node.js, Python, Express, MongoDB           ║
║  Tools:       Git, VS Code, Docker, AWS                   ║
║  Database:    MongoDB, MySQL                              ║
║  Other:       Android, Figma,                             ║
╚═══════════════════════════════════════════════════════════╝
    `
  },
  projects: {
    description: 'View projects',
    output: `
╔══════════════════════════════════════════════════════════════════════════════════╗
║                    PROJECTS                                                      ║
╠══════════════════════════════════════════════════════════════════════════════════╣
║  1. SafeHER      - Women Safety App                                              ║
║     Technologies: Android, Firebase, Kotlin, Java, Google Maps, Sensors          ║
║                                                                                  ║
║  2. Placify      - AI Placement Management Platform                              ║
║     Technologies: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, OpenAI   ║
║                                                                                  ║
║  3. Click&Shop   - E-commerce Platform                                           ║
║     Technologies: React, Node.js, MongoDB                                        ║
╚══════════════════════════════════════════════════════════════════════════════════╝
    `
  },
  hackathons: {
    description: 'View hackathon achievements',
    output: `
╔═══════════════════════════════════════════════════════════╗
║                  HACKATHONS                               ║
╠═══════════════════════════════════════════════════════════╣
║  1. ORCHATHON 2K25-24                                     ║
║     Project: SafeHER - Women Safety Platform              ║
║     Position: Best Innovative Girls Team Award            ║
║                                                           ║
║  2. TECHATHON 1.0                                         ║
║     Project: Placify - AI Placement Management Platform   ║
║     Position: Participated                                ║
║                                                           ║
║  3. Smart India Hackathon 2025                            ║
║     Project: Railvision                                   ║
║     position: College level                               ║
╚═══════════════════════════════════════════════════════════╝
    `
  },
  contact: {
    description: 'Get contact information',
    output: `
╔════════════════════════════════════════════════════════════════════════╗
║                   CONTACT                                              ║
╠════════════════════════════════════════════════════════════════════════╣
║  Email:    shrutip112005@gmail.com                                     ║
║  GitHub:   https://github.com/ShrutiiPunekar                           ║
║  LinkedIn: https://www.linkedin.com/in/vijayalaxmi-punekar-8613b1257/  ║
║                                                                        ║
║  Feel free to reach out!                                               ║
╚════════════════════════════════════════════════════════════════════════╝
    `
  },
  sudo: {
    description: '[Easter Egg]',
    output: `
    ⚠️  WARNING: Superuser access denied
    
    "With great power comes great responsibility."
    But since you're already here... 
    
    ██╗   ██╗ ██████╗  ██╗ ██████╗ 
    ██║   ██║██╔═══██╗ ██║ ██╔══██╗
    ██║   ██║██║   ██║ ██║ ██║  ██║
    ╚██╗ ██╔╝██║   ██║ ██║ ██║  ██║
     ╚████╔╝ ╚██████╔╝ ██║ ██████╔╝
      ╚═╝   ╚═════╝ ╚══╝╚═════╝ 
    
    Nice try! 😏
    `
  },
  matrix: {
    description: 'Enter the Matrix',
    output: `
    ╔═══════════════════════════════════════════════════════════╗
    ║         W E L C O M E   T O   T H E   M A T R I X         ║
    ╠═══════════════════════════════════════════════════════════╣
    ║                                                           ║
    ║    The Matrix has you...                                  ║
    ║    Follow the white rabbit.                               ║
    ║                                                           ║
    ║    🐰🕳️                                                  ║
    ║                                                           ║
    ║    'Reality is merely a construct of your mind.'          ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
    `
  },
  clear: {
    description: 'Clear terminal',
    output: 'CLEAR'
  },
  exit: {
    description: 'Exit terminal',
    output: 'EXIT'
  }
}

function Terminal({ onCommand }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'output', content: `
  ╔═══════════════════════════════════════════════════════════╗
  ║          DevOS Terminal v2.0.1                            ║
  ║          Type 'help' for available commands               ║
  ╚═══════════════════════════════════════════════════════════╝
    ` }
  ])
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const outputRef = useRef(null)

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [history])

  const handleSubmit = (e) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    
    if (!cmd) return

    // Add command to history
    setHistory(prev => [...prev, { type: 'command', content: `> ${cmd}` }])
    setCommandHistory(prev => [...prev, cmd])
    setHistoryIndex(-1)

    // Process command
    if (cmd === 'clear') {
      setHistory([])
    } else if (cmd === 'exit') {
      // Close terminal window - handled by parent
      if (onCommand) {
        // Just clear input
        setInput('')
      }
    } else if (commands[cmd]) {
      const output = commands[cmd].output
      if (output === 'CLEAR') {
        setHistory([])
      } else if (output === 'EXIT') {
        setHistory(prev => [...prev, { type: 'output', content: 'Goodbye!' }])
      } else {
        setHistory(prev => [...prev, { type: 'output', content: output }])
      }
    } else {
      setHistory(prev => [...prev, { 
        type: 'error', 
        content: `Command not found: ${cmd}\nType 'help' for available commands.` 
      }])
    }

    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    }
  }

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (
    <div 
      className="h-full font-mono text-sm overflow-hidden flex flex-col"
      style={{ background: 'rgba(10, 10, 15, 0.98)' }}
      onClick={focusInput}
    >
      {/* Terminal Output */}
      <div 
        ref={outputRef}
        className="flex-1 overflow-auto p-4 space-y-1"
      >
        {history.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className={`whitespace-pre-wrap ${
              item.type === 'command' ? 'text-cyber-cyan' :
              item.type === 'error' ? 'text-red-400' :
              'text-cyber-green'
            }`}
            style={{
              color: item.type === 'command' ? '#0ff0fc' :
                     item.type === 'error' ? '#ff6b6b' : '#00ff41',
              textShadow: item.type === 'output' ? '0 0 5px rgba(0, 255, 65, 0.5)' : 'none'
            }}
          >
            {item.content}
          </motion.div>
        ))}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex items-center gap-2">
          <span style={{ color: '#0ff0fc' }}>➜</span>
          <span style={{ color: '#00ff41' }}>~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-cyber-text"
            style={{ 
              color: '#e0e0e0',
              caretColor: '#00ff41'
            }}
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2.5 h-5"
            style={{ background: '#00ff41' }}
          />
        </div>
      </form>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 scanlines" />
    </div>
  )
}

export default Terminal

