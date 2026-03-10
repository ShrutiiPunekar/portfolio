import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BootScreen from './components/BootScreen'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import Window from './components/Window'
import Terminal from './components/Terminal'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Contact from './components/Contact'

const appData = {
  about: {
    icon: '👤',
    title: 'About Me',
    component: 'about'
  },
  skills: {
    icon: '💻',
    title: 'Skills',
    component: 'skills'
  },
  projects: {
    icon: '📁',
    title: 'Projects',
    component: 'projects'
  },
  hackathons: {
    icon: '🏆',
    title: 'Hackathons',
    component: 'hackathons'
  },
  contact: {
    icon: '📧',
    title: 'Contact',
    component: 'contact'
  },
  terminal: {
    icon: '⬛',
    title: 'Terminal',
    component: 'terminal'
  }
}

function App() {
  const [booted, setBooted] = useState(false)
  const [windows, setWindows] = useState([])
  const [activeWindow, setActiveWindow] = useState(null)
  const [minimizedApps, setMinimizedApps] = useState([])
  const [desktopIcons] = useState(Object.keys(appData))

  const openWindow = useCallback((appKey) => {
    const app = appData[appKey]
    if (!app) return

    // Check if window already exists
    const existingWindow = windows.find(w => w.appKey === appKey)
    if (existingWindow) {
      // If minimized, restore it
      if (minimizedApps.includes(appKey)) {
        setMinimizedApps(prev => prev.filter(key => key !== appKey))
      }
      setActiveWindow(appKey)
      return
    }

    const newWindow = {
      id: Date.now(),
      appKey,
      title: app.title,
      isMinimized: false,
      zIndex: windows.length + 10
    }

    setWindows(prev => [...prev, newWindow])
    setActiveWindow(appKey)
  }, [windows, minimizedApps])

  const closeWindow = useCallback((windowId) => {
    const window = windows.find(w => w.id === windowId)
    if (window) {
      setMinimizedApps(prev => prev.filter(key => key !== window.appKey))
    }
    setWindows(prev => prev.filter(w => w.id !== windowId))
    if (activeWindow === windows.find(w => w.id === windowId)?.appKey) {
      setActiveWindow(null)
    }
  }, [windows, activeWindow])

  const minimizeWindow = useCallback((windowId) => {
    const window = windows.find(w => w.id === windowId)
    if (window) {
      setMinimizedApps(prev => [...prev, window.appKey])
      if (activeWindow === window.appKey) {
        setActiveWindow(null)
      }
    }
  }, [windows, activeWindow])

  const restoreWindow = useCallback((appKey) => {
    setMinimizedApps(prev => prev.filter(key => key !== appKey))
    setActiveWindow(appKey)
    setWindows(prev => prev.map(w => 
      w.appKey === appKey ? { ...w, zIndex: prev.length + 10 } : w
    ))
  }, [])

  const bringToFront = useCallback((windowId) => {
    const window = windows.find(w => w.id === windowId)
    if (window) {
      setActiveWindow(window.appKey)
      setWindows(prev => prev.map(w => 
        w.id === windowId ? { ...w, zIndex: prev.length + 10 } : w
      ))
    }
  }, [windows])

  const handleBootComplete = () => {
    setBooted(true)
  }

  const renderWindowContent = (appKey) => {
    switch (appKey) {
      case 'about':
        return <AboutMe />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'hackathons':
        return <Hackathons />
      case 'contact':
        return <Contact />
      case 'terminal':
        return <Terminal onCommand={openWindow} />
      default:
        return <div className="p-4 text-cyber-text">Unknown Application</div>
    }
  }

  return (
    <div className="w-full h-full bg-cyber-black overflow-hidden">
      <AnimatePresence>
        {!booted && (
          <BootScreen onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      {booted && (
        <>
          <Desktop 
            icons={desktopIcons} 
            appData={appData}
            onIconClick={openWindow}
          />
          
          <div className="absolute inset-0 pointer-events-none">
            {windows.map((window) => (
              !minimizedApps.includes(window.appKey) && (
                <Window
                  key={window.id}
                  id={window.id}
                  title={window.title}
                  zIndex={window.zIndex}
                  isActive={activeWindow === window.appKey}
                  onClose={() => closeWindow(window.id)}
                  onMinimize={() => minimizeWindow(window.id)}
                  onFocus={() => bringToFront(window.id)}
                >
                  {renderWindowContent(window.appKey)}
                </Window>
              )
            ))}
          </div>

          <Taskbar
            windows={windows}
            activeWindow={activeWindow}
            minimizedApps={minimizedApps}
            appData={appData}
            onWindowClick={(appKey) => {
              if (minimizedApps.includes(appKey)) {
                restoreWindow(appKey)
              } else if (activeWindow === appKey) {
                minimizeWindow(windows.find(w => w.appKey === appKey)?.id)
              } else {
                setActiveWindow(appKey)
              }
            }}
            onStartClick={() => openWindow('terminal')}
          />
        </>
      )}
    </div>
  )
}

export default App

