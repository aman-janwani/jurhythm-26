# Music Card Carousel Component

## Overview
Extracted from `music-card-carousel.zip` - A beautiful interactive music card carousel with animated equalizer bars.

## Components Added

### 1. **CurveCarousel** (`/components/curve-carousel.tsx`)
- **Description**: A curved layout carousel with 3D flip cards
- **Features**:
  - 3 cards arranged in a curved formation
  - Flip animation on scroll (IntersectionObserver)
  - Staggered animation delays
  - Card positions: Left (-8°), Center (0°), Right (+8°)
  
### 2. **MusicCard** (`/components/music-card.tsx`)
- **Description**: Individual music card with 3D tilt effect
- **Features**:
  - Front: Album art, song name, progress bar, playback controls
  - Back: Dark gradient with vinyl record visual
  - Mouse-based 3D tilt effect (up to 10° in any direction)
  - Smooth flip animation (800ms)
  - Interactive hover states
  
### 3. **Equalizer** (`/components/equalizer.tsx`)
- **Description**: Animated audio equalizer visualization
- **Features**:
  - 400 animated bars with varying heights
  - 4 height categories (tall peaks, medium, small, tiny dots)
  - Golden gradient theme (#fbbf24 to #F4C542)
  - Glowing effect
  - Updates every 250ms for smooth animation

## Test Page
**URL**: `/music-test`

## Customization Done

### Theme Integration:
- ✅ Updated equalizer bars to golden gradient
- ✅ Added golden glow effect to bars
- ✅ Applied Druk Wide font to headings
- ✅ Applied PP Neue Montreal font to body text
- ✅ Updated card images to use project posters

### Default Cards:
1. **Cultural Night** - `/posters/jurhythm.png`
2. **DJ Night** - `/jurhythm.png`
3. **Rock Concert** - `/posters/jurhythm.png`

## Usage Ideas

### Where to Use in Main Site:

#### 1. **PRONITE Section** (Best Option)
```tsx
// Replace or add after StarsSection
<section id="pronite" className="min-h-screen bg-black py-20">
  <h1 className="font-druk text-[#fbbf24] text-8xl text-center">PRONITE</h1>
  <Equalizer />
  <CurveCarousel />
</section>
```

#### 2. **Media Section**
- Perfect for showcasing featured artists/performers
- Can display event highlights

#### 3. **Cultural Section**
- Showcase cultural performances
- Display artist lineups

#### 4. **Sponsors Section**
- Use for featured/premium sponsors
- Flip cards can show sponsor logos on front, details on back

## Technical Details

### Dependencies:
- Next.js Image component
- React hooks (useState, useEffect, useRef)
- IntersectionObserver API
- CSS 3D transforms

### Performance:
- Lazy loading with IntersectionObserver
- Smooth 60fps animations
- GPU-accelerated transforms
- Optimized re-renders

### Responsive:
- Full width equalizer
- Cards scale on mobile
- Touch-friendly (no tilt on mobile)

## Animation Timings:
- **Card flip**: 800ms ease-out
- **Card stagger**: 200ms delay between cards
- **Tilt response**: 100ms
- **Equalizer update**: 250ms interval

## File Cleanup:
- ✅ Removed `temp-music-carousel/` folder
- ✅ Deleted `music-card-carousel.zip`
- ✅ Kept only essential components

## Next Steps:
1. Visit `/music-test` to preview the components
2. Add actual performer images to cards
3. Integrate into main site where needed
4. Customize card content (song names → performer names)
5. Adjust colors/spacing as needed
