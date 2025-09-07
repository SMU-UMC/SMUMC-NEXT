# ID Usage Guidelines for React/Next.js

## ⚠️ Important: Avoid Static String IDs

Static string literal IDs trigger Biome linting errors (`biomelint/correctness/useUniqueElementIds`). Follow these guidelines to avoid issues while maintaining accessibility.

---

## 1. When to Avoid IDs

### ❌ Don't Use IDs For:
- Simple labeling that can be done with `aria-label`
- Section identification that doesn't need cross-referencing
- Styling purposes (use classes instead)
- Component identification (use React keys instead)

### Examples to Avoid:
```tsx
// ❌ BAD: Static ID for simple labeling
<section aria-labelledby="section-title">
  <h2 id="section-title">Title</h2>
</section>

// ✅ GOOD: Direct aria-label
<section aria-label="Section Title">
  <h2>Title</h2>
</section>

// ❌ BAD: Unnecessary ID for form label
<label htmlFor="email-input">Email</label>
<input id="email-input" type="email" />

// ✅ GOOD: Wrap input with label
<label>
  Email
  <input type="email" />
</label>
```

---

## 2. When IDs Are Necessary

### ✅ Use IDs Only For:

#### 1. **aria-controls Relationships**
When a button controls another element's visibility:
```tsx
// ✅ NECESSARY: Button controls a collapsible element
const [isOpen, setIsOpen] = useState(false);
const panelId = useId(); // React 18+ hook

<button aria-controls={panelId} aria-expanded={isOpen}>
  Toggle
</button>
<div id={panelId} hidden={!isOpen}>
  Content
</div>
```

#### 2. **Skip Links**
For main content navigation:
```tsx
// ✅ NECESSARY: Skip link target
<a href="#main-content">Skip to main</a>
<main id="main-content" tabIndex={-1}>
  Content
</main>
```

#### 3. **Form Error Messages**
When error messages need to be associated with inputs:
```tsx
// ✅ NECESSARY: Error message association
const errorId = useId();

<input aria-describedby={hasError ? errorId : undefined} />
{hasError && <div id={errorId} role="alert">Error message</div>}
```

---

## 3. Best Practices

### Use React's useId() Hook
When you must use IDs, generate them dynamically:
```tsx
import { useId } from 'react';

function FormField() {
  const inputId = useId();
  const errorId = useId();
  
  return (
    <>
      <label htmlFor={inputId}>Name</label>
      <input id={inputId} aria-describedby={errorId} />
      <div id={errorId}>Helper text</div>
    </>
  );
}
```

### Prefer Direct ARIA Labels
Instead of ID-based labeling:
```tsx
// ❌ AVOID
<nav aria-labelledby="nav-title">
  <h2 id="nav-title">Navigation</h2>
</nav>

// ✅ PREFER
<nav aria-label="Main navigation">
  <h2>Navigation</h2>
</nav>
```

### Use Label Wrapping for Forms
Instead of htmlFor/id pattern:
```tsx
// ❌ AVOID
<label htmlFor="username">Username</label>
<input id="username" />

// ✅ PREFER
<label>
  Username
  <input type="text" />
</label>
```

---

## 4. Accessibility Alternatives to IDs

### For Sections and Regions
```tsx
// Instead of aria-labelledby with ID
<section aria-label="사용자 정보">
  <h2>사용자 정보</h2>
</section>
```

### For Navigation
```tsx
// Direct labeling
<nav aria-label="주 메뉴">
  <ul>...</ul>
</nav>
```

### For Tab Panels
```tsx
// Use index-based or dynamic IDs only when necessary
const tabPanelId = `tabpanel-${index}`;
```

### For Accordions
```tsx
// Generate IDs dynamically if needed
const accordionId = useId();
```

---

## 5. Migration Guide

If you have existing static IDs:

1. **Check if the ID is necessary** - Can you use `aria-label` instead?
2. **For form fields** - Can you wrap the input with the label?
3. **For required IDs** - Use `useId()` hook or generate dynamically
4. **For styling** - Replace with classes
5. **For testing** - Use `data-testid` instead

---

## 6. Common Patterns

### Modal/Dialog
```tsx
function Modal({ isOpen, onClose, children }) {
  // No ID needed - use aria-modal and role
  return (
    <div role="dialog" aria-modal="true" aria-label="Modal dialog">
      {children}
    </div>
  );
}
```

### Dropdown Menu
```tsx
function Dropdown() {
  const menuId = useId(); // Only if aria-controls is needed
  
  return (
    <>
      <button aria-haspopup="menu" aria-expanded={isOpen}>
        Menu
      </button>
      <ul role="menu" aria-label="Dropdown menu">
        {/* items */}
      </ul>
    </>
  );
}
```

### Tabs
```tsx
function Tabs({ tabs }) {
  // Use index for relationships
  return tabs.map((tab, index) => (
    <button
      role="tab"
      aria-selected={selectedIndex === index}
      aria-controls={`panel-${index}`}
    >
      {tab.label}
    </button>
  ));
}
```

---

## Summary

- **Avoid static string IDs** to prevent Biome linting errors
- **Use `aria-label` directly** instead of `aria-labelledby` with IDs
- **Wrap form inputs with labels** instead of using htmlFor/id
- **Generate IDs dynamically** with `useId()` when absolutely necessary
- **Keep IDs only for** aria-controls, skip links, and complex form validations