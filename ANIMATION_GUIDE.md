# Animation Sequence Guide

This document explains the multi-stage intro animation sequence implemented in the portfolio website.

## Animation Flow

The intro sequence consists of 5 stages that play automatically when the website loads:

### Stage 1: Disclaimer (5 seconds)
**Duration**: 5 seconds  
**Effect**: Fade in and fade out  
**Content**: "Disclaimer: Please press F11 for better experience"

**Animation Details**:
- Text fades in over 0.75 seconds
- Stays visible for 3.5 seconds
- Fades out over 0.75 seconds
- Uses primary color (cyan) for text

### Stage 2: Device Scanning (6 seconds)
**Duration**: 6 seconds  
**Effect**: Green barcode scanner with grid overlay  
**Content**: "Scanning your device" with animated dots

**Animation Details**:
- Large gradient scanning bar moves from top to bottom (2 passes)
- 5 thin green lines scan across the screen with staggered delays (0.15s between each)
- 144-cell grid overlay pulses in sequence
- Text appears with loading dots animation
- All elements use green color (#22c55e) for scanner effect

**Visual Elements**:
- Main scanning bar: 30% screen height with gradient and glow (5s duration)
- Barcode lines: 5 thin lines with 0.15s delay between each (5s duration)
- Grid: 12x12 grid with sequential fade animation (3s duration)
- Loading dots: 3 dots pulsing continuously

### Stage 3: Creating Profile (5 seconds)
**Duration**: 5 seconds  
**Effect**: Loading bar with text animation  
**Content**: "Creating a customized profile" and "Wait for a moment..."

**Animation Details**:
- Main text slides up and fades in
- Subtitle fades in after 0.3s delay
- Animated gradient loading bar moves continuously (2.5s per cycle)
- "Processing..." text pulses
- Uses primary/secondary gradient colors

**Visual Elements**:
- Loading bar: 256px wide, gradient animation
- Text animations: Slide up + fade in
- Pulsing text indicator

### Stage 4: Line Animation (4 seconds)
**Duration**: 4 seconds  
**Effect**: Horizontal neon line sweep  
**Content**: Animated line with glow effect

**Animation Details**:
- Thin cyan line grows from 0 to 100% width
- Neon glow effect with box-shadow
- Blur layer for enhanced glow
- Smooth easeInOut transition (3.5s duration)

### Stage 5: Portfolio Reveal
**Duration**: Instant (with 0.8s fade-in)  
**Effect**: Scale and fade in  
**Content**: Full portfolio content

**Animation Details**:
- Portfolio scales from 95% to 100%
- Fades in from 0 to 100% opacity
- Smooth easeOut transition

## Total Sequence Duration

**Total**: ~20 seconds from page load to portfolio display

- Stage 1: 0s - 5s
- Stage 2: 5s - 11s
- Stage 3: 11s - 16s
- Stage 4: 16s - 20s
- Stage 5: 20s onwards

## Customization

### Adjusting Stage Durations

Edit `src/App.tsx` and modify the setTimeout values:

```typescript
useEffect(() => {
  const timers: NodeJS.Timeout[] = [];

  // Adjust these values (in milliseconds)
  timers.push(setTimeout(() => setStage("scanning"), 5000));    // Stage 1 duration
  timers.push(setTimeout(() => setStage("creating"), 11000));   // Stage 1 + 2 duration
  timers.push(setTimeout(() => setStage("line"), 16000));       // Stage 1 + 2 + 3 duration
  timers.push(setTimeout(() => setStage("portfolio"), 20000));  // Total duration

  return () => timers.forEach(clearTimeout);
}, []);
```

### Modifying Individual Animations

Each stage has its own animation parameters that can be adjusted:

**Disclaimer Stage**:
```typescript
animate={{ opacity: [0, 1, 1, 0] }}
transition={{ duration: 5, times: [0, 0.15, 0.85, 1] }}
```

**Scanning Stage**:
```typescript
// Main scanning bar
transition={{ duration: 5, ease: "linear", repeat: 1 }}

// Barcode lines
transition={{ duration: 5, ease: "linear", delay: i * 0.15, repeat: 1 }}

// Grid animation
transition={{ duration: 3, delay: (i % 12) * 0.08, repeat: 1 }}
```

**Creating Stage**:
```typescript
// Loading bar
transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
```

**Line Stage**:
```typescript
transition={{ duration: 3.5, ease: "easeInOut" }}
```

### Skipping the Intro

To skip the intro sequence and go directly to the portfolio, change the initial state:

```typescript
const [stage, setStage] = useState<Stage>("portfolio");
```

And comment out the useEffect hook.

### Adding More Stages

1. Add a new stage to the type definition:
```typescript
type Stage = "disclaimer" | "scanning" | "creating" | "line" | "newStage" | "portfolio";
```

2. Add a setTimeout for the new stage in the useEffect

3. Create a new conditional render block:
```typescript
{stage === "newStage" && (
  <motion.div key="newStage">
    {/* Your animation here */}
  </motion.div>
)}
```

## Performance Considerations

- All animations use GPU-accelerated properties (opacity, transform)
- AnimatePresence ensures smooth transitions between stages
- Grid overlay in scanning stage may impact performance on low-end devices
- Consider reducing grid cells (144 → 64) for better performance

## Browser Compatibility

- Requires modern browser with CSS Grid support
- Framer Motion requires JavaScript enabled
- Tested on Chrome, Firefox, Safari, Edge
- Mobile devices: animations are responsive and work on all screen sizes

## Accessibility

- Animations respect `prefers-reduced-motion` media query (to be implemented)
- Text remains readable throughout all stages
- Color contrast meets WCAG guidelines
- Keyboard navigation works after portfolio loads

## Future Enhancements

Potential improvements:
- Add skip button for users who want to bypass intro
- Implement prefers-reduced-motion support
- Add sound effects (optional)
- Save preference to localStorage (show intro only on first visit)
- Add progress indicator showing current stage
