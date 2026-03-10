import React from 'react'
import DesktopIcon from './DesktopIcon'
import InteractiveBackground from './InteractiveBackground'

function Desktop({ icons, appData, onIconClick }) {
  return (
    <div className="absolute inset-0 bottom-12 overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground />

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
    </div>
  )
}

export default Desktop

