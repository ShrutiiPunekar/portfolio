import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { X, Minus, Square, Maximize2 } from 'lucide-react'

function Window({ 
  id, 
  title, 
  zIndex, 
  isActive, 
  onClose, 
  onMinimize, 
  onFocus, 
  children 
}) {
  const windowRef = useRef(null)

  return (
    <motion.div
      ref={windowRef}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        zIndex 
      }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 25 
      }}
      drag
      dragMomentum={false}
      onDragStart={() => onFocus()}
      className={`absolute pointer-events-auto ${
        isActive ? 'window-chrome' : 'opacity-90'
      } rounded-lg overflow-hidden shadow-2xl`}
      style={{
        top: '10%',
        left: '10%',
        width: '80%',
        maxWidth: '900px',
        height: '70%',
        maxHeight: '600px',
        zIndex
      }}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div 
        className="flex items-center justify-between px-3 py-2 cursor-move select-none"
        style={{
          background: isActive 
            ? 'linear-gradient(180deg, rgba(0, 255, 65, 0.15) 0%, rgba(0, 255, 65, 0.05) 100%)'
            : 'linear-gradient(180deg, rgba(136, 136, 136, 0.1) 0%, rgba(68, 68, 68, 0.05) 100%)',
          borderBottom: `1px solid ${isActive ? 'rgba(0, 255, 65, 0.3)' : 'rgba(136, 136, 136, 0.2)'}`
        }}
      >
        <div className="flex items-center gap-2">
          {/* Window Icon */}
          <div 
            className="w-4 h-4 rounded flex items-center justify-center text-xs"
            style={{
              background: isActive 
                ? 'rgba(0, 255, 65, 0.2)' 
                : 'rgba(136, 136, 136, 0.2)',
              border: `1px solid ${isActive ? '#00ff41' : '#888'}`
            }}
          >
            <span style={{ color: isActive ? '#00ff41' : '#888' }}>▣</span>
          </div>
          
          {/* Title */}
          <span 
            className="text-sm font-mono"
            style={{
              color: isActive ? '#00ff41' : '#888',
              textShadow: isActive ? '0 0 10px rgba(0, 255, 65, 0.5)' : 'none'
            }}
          >
            {title}
          </span>
        </div>

        {/* Window Controls */}
        <div className="flex items-center gap-1">
          {/* Minimize */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onMinimize()
            }}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-cyber-surface-light transition-colors group"
            title="Minimize"
          >
            <Minus 
              size={14} 
              className="text-cyber-text-dim group-hover:text-cyber-orange transition-colors" 
            />
          </button>
          
          {/* Maximize */}
          <button
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-cyber-surface-light transition-colors group"
            title="Maximize"
          >
            <Maximize2 
              size={12} 
              className="text-cyber-text-dim group-hover:text-cyber-cyan transition-colors" 
            />
          </button>
          
          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-red-500/20 transition-colors group"
            title="Close"
          >
            <X 
              size={16} 
              className="text-cyber-text-dim group-hover:text-red-500 transition-colors" 
            />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div 
        className="h-[calc(100%-40px)] overflow-auto bg-cyber-surface/80"
        style={{
          background: 'rgba(18, 18, 26, 0.95)'
        }}
      >
        {children}
      </div>

      {/* Active Border Glow */}
      {isActive && (
        <div 
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 20px rgba(0, 255, 65, 0.1), 0 0 30px rgba(0, 255, 65, 0.1)',
            border: '1px solid rgba(0, 255, 65, 0.3)'
          }}
        />
      )}
    </motion.div>
  )
}

export default Window

