# Developer Portfolio - Hacker OS Interface

## Project Overview
- **Project Name**: DevOS Portfolio
- **Type**: Interactive Single Page Application (React.js)
- **Core Functionality**: A hacker-style operating system interface portfolio with boot sequence, terminal navigation, and draggable desktop windows
- **Target Users**: Recruiters, potential clients, fellow developers viewing the portfolio

---

## UI/UX Specification

### Visual Design

#### Color Palette
- **Background**: `#0a0a0f` (Deep dark blue-black)
- **Primary**: `#00ff41` (Matrix green)
- **Secondary**: `#0ff0fc` (Cyber cyan)
- **Accent**: `#ff00ff` (Neon magenta)
- **Warning**: `#ff6b35` (Orange)
- **Surface**: `#12121a` (Dark surface)
- **Surface Light**: `#1a1a2e` (Lighter surface)
- **Text Primary**: `#e0e0e0` (Light gray)
- **Text Secondary**: `#888888` (Medium gray)

#### Typography
- **Primary Font**: 'JetBrains Mono', monospace (Terminal/Code)
- **Secondary Font**: 'Orbitron', sans-serif (Headers/Titles)
- **Body Size**: 14px
- **Header Size**: 24px-48px
- **Terminal Font**: 'JetBrains Mono', monospace

#### Visual Effects
- **Glow Effects**: Box-shadow with color spread for cyberpunk feel
- **Scanlines**: CRT scanline overlay effect
- **Glitch**: Text glitch animation on hover
- **Typing**: Character-by-character typing effect for terminal
- **Particles**: Matrix-style falling characters background

### Layout Structure

#### 1. Boot Screen
- Full screen black with green matrix rain animation
- ASCII art logo appears
- Loading progress bar (simulated)
- System initialization messages
- Auto-transition to desktop after 4-5 seconds

#### 2. Desktop Interface
- Desktop wallpaper: Dark gradient with circuit pattern
- Taskbar at bottom (fixed)
- Desktop icons in grid layout
- Draggable windows on icon click

#### 3. Taskbar
- Start button (left)
- Running applications indicators
- System tray (right): Time, sound toggle, minimize all
- Glassmorphism effect

#### 4. Desktop Icons (6 icons)
- About Me
- Skills
- Projects
- Hackathons
- Contact
- Terminal (direct terminal access)

---

## Components Specification

### 1. BootScreen Component
- Matrix rain canvas background
- ASCII logo with glow effect
- Loading progress bar (0-100%)
- Scrolling system messages:
  - "Initializing kernel..."
  - "Loading drivers..."
  - "Mounting file systems..."
  - "Starting GUI..."
- Fade out animation on complete

### 2. Desktop Component
- Desktop icons grid (4 columns)
- Each icon: 80x80px with icon + label
- Hover: Scale up + glow effect
- Click: Open corresponding window

### 3. Window Component
- Title bar with: Icon, Title, Minimize, Maximize, Close buttons
- Draggable from title bar
- Resizable (optional)
- Content area with scroll
- Window controls: minimize (minimize to taskbar), maximize, close
- Z-index management for window stacking
- Glassmorphism background

### 4. Terminal Component
- Command input with blinking cursor
- Command history (up/down arrows)
- Auto-scroll to bottom
- Available commands:
  - `help` - Show all available commands
  - `whoami` - About me summary
  - `skills` - List of skills
  - `projects` - List projects
  - `hackathons` - Hackathon achievements
  - `contact` - Contact information
  - `clear` - Clear terminal
  - `exit` - Close terminal window

### 5. AboutMe Component
- Profile image (circular, glowing border)
- Name and title
- Bio text with typing effect
- Social links (GitHub, LinkedIn, Email)
- Location and availability status

### 6. Skills Component
- Categories: Frontend, Backend, Tools, Soft Skills
- Skill bars with percentage
- Animated fill on window open
- Technology icons

### 7. Projects Component
- Project cards in grid
- Each card: Title, description, tech stack, links
- Projects to display:
  1. SafeHER - Women safety app
  2. Placify - AI placement platform
  3. Click&Shop - E-commerce platform

### 8. Hackathons Component
- Timeline/list of hackathon achievements
- Each entry: Name, date, position/achievement, description

### 9. Contact Component
- Contact form (visual only)
- Email: Display email address
- Social links
- Call to action message

### 10. Easter Eggs
- `sudo` command in terminal (fun response)
- `matrix` command (triggers matrix rain)
- Konami code on desktop (special animation)
- Hidden clickable element in taskbar
- Double-click title bar for "matrix mode"

---

## Functionality Specification

### Core Features

1. **Boot Sequence**
   - Triggered on page load
   - 4-5 second duration
   - Animated progress
   - Sound effect (optional, muted by default)

2. **Terminal System**
   - Parse commands on Enter
   - Command validation
   - Output display with typing effect
   - Error handling for unknown commands
   - Command history navigation

3. **Window Management**
   - Open windows on icon click
   - Drag windows by title bar
   - Close windows with X button
   - Minimize to taskbar
   - Focus management (click to bring to front)

4. **Taskbar**
   - Show running apps
   - Click to restore minimized windows
   - Real-time clock
   - Start menu (optional)

### User Interactions
- Hover effects on all interactive elements
- Click to open windows
- Drag to move windows
- Double-click icons to open
- Keyboard navigation in terminal

### Animations (Framer Motion)
- Boot screen fade transitions
- Window open/close animations
- Icon hover scales
- Terminal text typing
- Skill bars animated fill
- Page load stagger effects

---

## Acceptance Criteria

### Visual Checkpoints
- [ ] Boot screen displays with matrix rain
- [ ] Loading progress bar animates
- [ ] Desktop icons are visible and interactive
- [ ] Windows open as draggable elements
- [ ] Terminal accepts and responds to commands
- [ ] All sections display correct content
- [ ] Cyberpunk glow effects visible
- [ ] Smooth animations throughout

### Functional Checkpoints
- [ ] All terminal commands work correctly
- [ ] Windows can be dragged
- [ ] Windows can be closed/minimized
- [ ] Taskbar shows time correctly
- [ ] Easter eggs are discoverable
- [ ] Responsive on different screen sizes
- [ ] No console errors on load

### Content Requirements
- [ ] About Me: "Shruti" as developer name
- [ ] Skills: Minimum 8 skills with categories
- [ ] Projects: SafeHER, Placify, Click&Shop included
- [ ] Hackathons: At least 2 hackathon entries
- [ ] Contact: Email and social links present

---

## Technical Stack
- React.js 18+
- Tailwind CSS
- Framer Motion
- Vite (build tool)
- Lucide React (icons)

---

## File Structure
```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BootScreen.jsx
│   │   ├── Desktop.jsx
│   │   ├── Taskbar.jsx
│   │   ├── Window.jsx
│   │   ├── Terminal.jsx
│   │   ├── DesktopIcon.jsx
│   │   ├── AboutMe.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Hackathons.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

