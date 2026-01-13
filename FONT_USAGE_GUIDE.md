# Font Usage Guide - JU Rhythm

## New Fonts Integrated

### 1. **Druk Wide** - For Titles and Main Headings
- **Purpose**: Main titles, headings, hero text, section headers
- **Weights Available**: 
  - Medium (500)
  - Bold (700)
  - Heavy (800)
  - Super (900)

### 2. **PP Neue Montreal** - For Descriptions and Body Text
- **Purpose**: Body text, descriptions, subtitles, paragraphs
- **Weights Available**:
  - Thin (300)
  - Book/Regular (400)
  - Medium (500)
  - Bold (700)
  - Italic (400)
  - SemiBold Italic (600)

---

## How to Use in Your Components

### Using Tailwind Classes

```tsx
// Druk Wide for Titles
<h1 className="font-druk text-5xl font-bold">
  JU RHYTHM 2026
</h1>

// PP Neue Montreal for Descriptions
<p className="font-pp-neue text-lg font-normal">
  Experience the rhythm of innovation and culture
</p>
```

### Quick Reference Table

| Element Type | Font Family | Tailwind Class | Example Weight |
|--------------|-------------|----------------|----------------|
| Main Titles/Hero | Druk Wide | `font-druk` | `font-bold` or `font-black` |
| Section Headings | Druk Wide | `font-druk` | `font-bold` |
| Body Text | PP Neue Montreal | `font-pp-neue` | `font-normal` |
| Descriptions | PP Neue Montreal | `font-pp-neue` | `font-normal` or `font-medium` |
| Subtitles | PP Neue Montreal | `font-pp-neue` | `font-medium` |
| Bold Text | PP Neue Montreal | `font-pp-neue` | `font-bold` |

---

## Default Behavior

By default (without specifying a font class):
- **All headings (h1-h6)** will use **Druk Wide** with bold weight
- **Body text and paragraphs** will use **PP Neue Montreal** with normal weight

---

## Migration from Old Fonts

### Replace Old Font Classes:

```tsx
// OLD - New Amsterdam
className="font-new-amsterdam"

// NEW - Druk Wide
className="font-druk"

// OLD - Delius
className="font-delius"

// NEW - PP Neue Montreal
className="font-pp-neue"
```

---

## Example Component Usage

```tsx
export default function EventCard() {
  return (
    <div className="bg-black p-6 rounded-lg">
      {/* Title - Druk Wide */}
      <h2 className="font-druk text-4xl font-bold text-[#fbbf24] mb-4">
        CULTURAL NIGHT
      </h2>
      
      {/* Subtitle - PP Neue Montreal Medium */}
      <h3 className="font-pp-neue text-xl font-medium text-white/80 mb-2">
        An Evening of Performances
      </h3>
      
      {/* Description - PP Neue Montreal Regular */}
      <p className="font-pp-neue text-base font-normal text-white/60">
        Join us for an unforgettable night filled with music, dance, 
        and cultural performances from talented artists.
      </p>
      
      {/* CTA Button - Druk Wide */}
      <button className="font-druk text-sm font-bold uppercase tracking-wider mt-4">
        Register Now
      </button>
    </div>
  );
}
```

---

## Font Weight Guidelines

### Druk Wide Weights:
- `font-medium` (500) - Subtle emphasis
- `font-bold` (700) - Standard headings
- `font-extrabold` (800) - Heavy emphasis
- `font-black` (900) - Maximum impact

### PP Neue Montreal Weights:
- `font-light` (300) - Subtle text
- `font-normal` (400) - Body text
- `font-medium` (500) - Subtitles
- `font-bold` (700) - Emphasis

---

## Typography Best Practices

1. **Use Druk Wide for impact** - Hero sections, main titles, CTAs
2. **Use PP Neue Montreal for readability** - Long-form content, descriptions
3. **Maintain hierarchy** - Larger sizes + Druk for importance, smaller + PP Neue for details
4. **Letter spacing** - Druk looks great with `tracking-wide` or `tracking-wider`
5. **Line height** - PP Neue benefits from `leading-relaxed` for body text

---

## Performance Note

All fonts are loaded locally from `/public/fonts/` for optimal performance:
- Druk Wide: `.otf` files
- PP Neue Montreal: `.woff` files

Both use `font-display: swap` for fast initial rendering.
