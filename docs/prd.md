# Split Line Animation with Portfolio Requirements Document\n
## 1. Website Overview

### 1.1 Website Name
Split Line Animation Portfolio

### 1.2 Website Description
A minimalist web page featuring a multi-stage animated intro sequence with disclaimer, device scanning effect, profile creation message, followed by an animated horizontal line that splits the screen, and finally a portfolio showcase section.
\n### 1.3 Core Purpose
Deliver an immersive onboarding experience with sequential animations (disclaimer → device scan → profile creation → split line), then transition to display personal portfolio content.

---

## 2. Technical Stack

### 2.1 Framework & Core Technologies
- **Framework**: Next.js 15+ with App Router\n- **Language**: TypeScript\n- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter via next/font

### 2.2 Performance
- Image optimization via next/image
- Smooth 60fps animations
- Lightweight implementation

---

## 3. Website Features

### 3.1 Intro Animation Sequence
\n#### Stage 1: Disclaimer Message (0-4s)
- Text:'Disclaimer: Please press f11 for better experience'
- Animation: Fade in (0.8s) → Hold (2.5s) → Fade out (0.8s)
- Styling: Centered text, white color with subtle glow
- Duration: ~4 seconds total

#### Stage 2: Device Scanning (4-8s)
- Text: 'Scanning your device...'
- Animation: Fade in text (0.5s) → Hold (0.5s)\n- Scanning effect:\n  - Green barcode-style scanner bar (3-4px height)
  - Neon green glow (#00ff41)
  - Animates from top (0%) to bottom (100%) of viewport
  - Duration: 2.5 seconds
  - Smooth linear motion with trailing glow effect
- Text fades out after scan completes (0.5s)
- Total duration: ~4seconds

#### Stage 3: Profile Creation (8-12s)
- Text: 'Creating a customized profile, wait for a moment...'
- Animation: Fade in (0.6s) → Hold (2.5s) → Fade out (0.6s)
- Optional: Subtle loading dots animation after text
- Duration: ~4 seconds total

#### Stage 4: Horizontal Line Split (12-15s)
- Thin glowing line (2-3px height) at center (50vh)
- Neon glow effect with subtle pulse
- Animation sequence:
  - Starts from center as a point
  - Expands horizontally to full width
  - Duration: 1.5-2 seconds
  - Easing: smooth ease-out curve
- Continuous subtle pulse after initial animation\n\n### 3.2 Split Zones
- **Top Section**: Empty or subtle gradient background
- **Bottom Section**: Empty or subtle gradient background
- Both sections fade in after line animation completes

### 3.3 Portfolio Section
- Appears after split line animation completes (after ~15seconds total)
- Smooth fade-in and slide-up transition
- Portfolio content includes:
  - Project cards with title, description, and thumbnail
  - Grid or masonry layout
  - Hover effects on project cards
  - Click to view project details
- Scrollable section below the split animation\n
---

## 4. Component Structure

### 4.1 Components (components/)
- IntroSequence.tsx — orchestrates all intro animations with timing control
- DisclaimerText.tsx — fade in/out disclaimer message
- DeviceScanner.tsx — scanning animation with green barcode effect
- ProfileCreation.tsx — profile creation message with fade animation
- SplitLayout.tsx — manages two zones and divider
- AnimatedDivider.tsx — horizontal line with animation logic
- BackgroundGradient.tsx — optional gradient backgrounds
- PortfolioSection.tsx — portfolio showcase container
- ProjectCard.tsx — individual project display card

---

## 5. Design Style

### 5.1 Color Scheme
- **Background**: Dark theme (#0a0a0a to #1a1a1a gradient)
- **Disclaimer text**: White (#ffffff) with soft glow
- **Scanner bar**: Neon green (#00ff41) with bright glow
- **Profile text**: White (#ffffff) with soft glow
- **Horizontal line**: Electric cyan (#00d9ff) or neon magenta (#ff00ff)
- **Portfolio section**: Consistent dark theme with subtle contrast

### 5.2 Visual Effects
- Disclaimer glow: text-shadow: 0 0 10px rgba(255,255,255,0.5)\n- Scanner glow: box-shadow: 0 0 20px #00ff41, 0 0 40px #00ff41, 0 -50px 60px rgba(0,255,65,0.3)
- Horizontal line glow: box-shadow: 0 0 25px var(--line-color), 0 0 50px var(--line-color)
- Subtle pulse animation on horizontal line: opacity oscillates between 0.8 and 1
- Project cards: subtle hover scale effect (1.05x) with shadow elevation\n
### 5.3 Animations
- Disclaimer: fade in (0.8s) → hold → fade out (0.8s)\n- Scanner text: fade in (0.5s) → fade out (0.5s)
- Scanner bar: translateY from -4px to 100vh + 4px, linear motion (2.5s)
- Profile text: fade in (0.6s) → hold → fade out (0.6s)
- Horizontal line expansion: scaleX from 0 to 1, transform-origin center (1.5-2s)
- Line pulse: infinite animation with 2s duration
- Portfolio entrance: fade-in + translateY(-20px to 0) with 0.8s duration
- Staggered animation for project cards (0.1s delay between each)

### 5.4 Timing Intervals
- Stage 1 (Disclaimer): 0s - 4s
- Stage 2 (Scanning): 4s - 8s
- Stage 3 (Profile Creation): 8s - 12s
- Stage 4 (Split Line): 12s - 15s
- Portfolio Reveal: 15s+
- Total intro sequence: ~15 seconds

### 5.5 Layout
- Initial viewport: full height (100vh) for intro sequence
- All intro text: centered horizontally and vertically
- Scanner bar: full width, moves vertically
- Portfolio section: scrollable content below
- Project cards: responsive grid (1column mobile, 2-3 columns tablet/desktop)
- Centered content with max-width constraint\n
---

## 6. Implementation Steps

1. Initialize Next.js app with App Router and Tailwind CSS
2. Configure Inter font with next/font
3. Install framer-motion for animations\n4. Set up global CSS with dark theme and neon utilities
5. Build IntroSequence component with state management for animation stages
6. Implement DisclaimerText with fade in/out animation
7. Create DeviceScanner with green barcode scanning effect
8. Build ProfileCreation component with fade animation
9. Integrate AnimatedDivider with expansion and pulse animations
10. Add gradient backgrounds to top/bottom sections
11. Create PortfolioSection component with delayed fade-in trigger
12. Build ProjectCard component with hover effects
13. Implement timing control to sequence all animations with proper intervals
14. Test animation flow and timing across different screen sizes
15. Optimize performance for smooth 60fps throughout entire sequence

---

## 7. Performance Targets

- Smooth 60fps animation throughout entire intro sequence
- Fast initial load (< 1s)
- Responsive from 320px to 1920px+
- No layout shift during animations
- Lightweight bundle size\n- Lazy loading for portfolio images
- Efficient animation sequencing without blocking\n
---

## 8. Deliverables

1. Complete Next.js codebase with full intro animation sequence and portfolio section
2. README with setup instructions
3. Optimized for Vercel deployment
4. Clean, maintainable code structure
5. Fully functional multi-stage intro animation (disclaimer → scan → profile → split line)
6. Responsive portfolio grid layout
7. Smooth transition between all animation stages