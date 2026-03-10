import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Wifi, Volume2, VolumeX, Menu } from 'lucide-react'

function Taskbar({ windows, activeWindow, minimizedApps, appData, onWindowClick, onStartClick }) {
  const [time, setTime] = useState(new Date())
  const [soundEnabled, setSoundEnabled] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
  }

  const runningApps = windows.filter(w => !minimizedApps.includes(w.appKey))

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="absolute bottom-0 left-0 right-0 z-50"
    >
      {/* Taskbar Glass Effect */}
      <div 
        className="h-12 mx-2 mb-2 rounded-lg flex items-center justify-between px-2"
        style={{
          background: 'rgba(18, 18, 26, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 255, 65, 0.2)',
          boxShadow: '0 -5px 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 65, 0.05)'
        }}
      >
        {/* Start Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStartClick}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors"
          style={{
            background: activeWindow === 'terminal' 
              ? 'rgba(0, 255, 65, 0.2)' 
              : 'transparent',
            border: `1px solid ${activeWindow === 'terminal' ? '#00ff41' : 'transparent'}`
          }}
        >
          <div 
            className="w-8 h-8 rounded flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #00ff41 0%, #00cc33 100%)',
              boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
            }}
          >
            <span className="text-cyber-black font-bold text-sm">DS</span>
          </div>
          <span 
            className="text-sm font-mono hidden sm:inline"
            style={{ 
              color: activeWindow === 'terminal' ? '#00ff41' : '#e0e0e0'
            }}
          >
            Start
          </span>
        </motion.button>

        {/* Running Apps */}
        <div className="flex-1 flex items-center gap-1 mx-4 overflow-x-auto">
          {windows.map((window) => {
            const isAppActive = activeWindow === window.appKey
            const isAppMinimized = minimizedApps.includes(window.appKey)
            const appInfo = appData[window.appKey]
            
            return (
              <motion.button
                key={window.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onWindowClick(window.appKey)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg min-w-fit transition-all ${
                  isAppActive ? 'bg-cyber-surface-light' : ''
                }`}
                style={{
                  background: isAppActive 
                    ? 'rgba(26, 26, 46, 0.8)' 
                    : isAppMinimized 
                      ? 'rgba(18, 18, 26, 0.5)' 
                      : 'transparent',
                  border: `1px solid ${isAppActive ? 'rgba(0, 255, 65, 0.3)' : 'transparent'}`,
                  opacity: isAppMinimized ? 0.6 : 1
                }}
              >
                <span className="text-lg">{appInfo?.icon}</span>
                <span 
                  className="text-xs font-mono hidden md:inline truncate max-w-24"
                  style={{ 
                    color: isAppActive ? '#00ff41' : '#e0e0e0'
                  }}
                >
                  {window.title}
                </span>
                {isAppActive && (
                  <div 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: '#00ff41', boxShadow: '0 0 5px #00ff41' }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* System Tray */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-lg hover:bg-cyber-surface-light transition-colors"
          >
            {soundEnabled ? (
              <Volume2 size={18} className="text-cyber-green" />
            ) : (
              <VolumeX size={18} className="text-cyber-text-dim" />
            )}
          </motion.button>

          {/* Wifi */}
          <div className="p-2">
            <Wifi size={18} className="text-cyber-green" />
          </div>

          {/* Time */}
          <div 
            className="px-3 py-1 rounded text-sm font-mono"
            style={{
              background: 'rgba(0, 255, 65, 0.1)',
              border: '1px solid rgba(0, 255, 65, 0.2)',
              color: '#00ff41',
              textShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
            }}
          >
            {formatTime(time)}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Taskbar

