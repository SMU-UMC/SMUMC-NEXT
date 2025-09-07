# Web Accessibility Development Guide

---

## Objective

Present inclusive web development principles and specific implementation methods that enable all users to access web services equally, regardless of their physical characteristics, environment, or technology.

---

## Core 4 Principles

### 1. Build Proper Structure

**Creating content structure and navigation order that considers accessibility is the starting point.**

#### Logical Navigation Order

```tsx
// ✅ Screen reader friendly order
<header>
  <h1>Page Title</h1>
  <nav aria-label="Main menu">
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/products">Products</Link></li>
    </ul>
  </nav>
</header>

<main>
  <h2>Main Content</h2>
  {/* Main content */}
</main>

// ❌ Wrong order
<aside>Sidebar content</aside> {/* Should not come before main */}
<main>Main content</main>
```

#### Provide Skip Links

```tsx
function Layout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>{/* Navigation */}</header>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </>
  );
}

// CSS
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

#### Logical Heading Structure

```tsx
// ✅ Use in order
<h1>Page Title</h1>           {/* One per page */}
  <h2>Major Section</h2>
    <h3>Subsection</h3>
      <h4>Detail Item</h4>
    <h3>Another Subsection</h3>
  <h2>Another Major Section</h2>

// ❌ Don't skip levels
<h1>Page Title</h1>
<h4>Sudden h4</h4> {/* Don't skip h2, h3 */}
```

### 2. Convey Meaning Accurately

**Users must clearly understand what each element is and what role it serves.**

#### Provide Alternative Text

```tsx
// ✅ Meaningful images
<img src="chart.png" alt="Bar graph showing 25% increase in 2024 sales compared to previous year" />

// ✅ Functional images
<button onClick={goHome}>
  <img src="home-icon.svg" alt="Go to home" />
</button>

// ✅ Decorative images
<img src="decoration.png" alt="" />

// ✅ Icons with text
<button>
  <img src="trash-icon.svg" alt="" />
  Delete
</button>

// ❌ Wrong examples
<img src="chart.png" /> {/* No alt */}
<img src="chart.png" alt="chart" /> {/* Too simple */}
<img src="decoration.png" alt="decorative image" /> {/* Decorative but described */}
<button>
  <img src="trash-icon.svg" alt="delete icon" /> {/* Redundant */}
  Delete
</button>
```

#### Form Element Labeling

```tsx
// ✅ Explicit label connection
<div>
  <label htmlFor="email">Email Address</label>
  <input
    type="email"
    id="email"
    required
    aria-describedby="email-help"
  />
  <div id="email-help">Enter the email you'll use for login</div>
</div>

// ✅ Icon button labels
<button aria-label="Search">
  <img src="search-icon.svg" alt="" />
</button>

// ✅ Group labeling
<fieldset>
  <legend>Shipping Information</legend>
  <label htmlFor="address">Address</label>
  <input type="text" id="address" />
</fieldset>

// ❌ Wrong examples
<input type="email" placeholder="Email" /> {/* No label */}
<button><img src="close.svg" /></button> {/* No label for icon button */}
```

#### Using ARIA Attributes

```tsx
// ✅ Connect with aria-labelledby
<h2 id="billing-title">Payment Information</h2>
<section aria-labelledby="billing-title">
  {/* Payment related form */}
</section>

// ✅ Connect description with aria-describedby
<input
  type="password"
  aria-describedby="pwd-help"
/>
<div id="pwd-help">8+ characters, include numbers</div>

// ✅ Convey state information
<button
  aria-expanded={isOpen}
  aria-controls="menu"
>
  Menu
</button>
<ul id="menu" hidden={!isOpen}>
  {/* Menu items */}
</ul>
```

### 3. Create Predictable Interactions

**Visual appearance and actual behavior must match.**

#### Keyboard Accessibility

```tsx
// ✅ Custom interactive element
function CustomButton({ onClick, children }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <div role="button" tabIndex={0} onClick={onClick} onKeyDown={handleKeyDown}>
      {children}
    </div>
  );
}

// ❌ Not keyboard accessible
<div onClick={handleClick}>Click me</div>;
```

#### Focus Management - When is it needed?

**Situations requiring focus management:**

- Opening/closing modals/dialogs
- Opening/closing dropdown menus
- Page transitions to appropriate location
- Moving to new content after dynamic loading
- Moving to result messages after form submission
- Moving to error messages when errors occur
- Accordion/tab panel switching
- After search results update

**1) Modal Focus Trap**

```tsx
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // When modal opens: save previous focus and move to modal
      previousFocusRef.current = document.activeElement;
      modalRef.current?.focus();
    } else {
      // When modal closes: return to previous focus location
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }

    // Tab key focus trap
    if (e.key === "Tab") {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
}
```

**2) Dropdown Menu Focus**

```tsx
function Dropdown({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      // When dropdown opens: focus to first menu item
      setTimeout(() => {
        const firstItem = menuRef.current?.querySelector('[role="menuitem"]');
        firstItem?.focus();
      }, 0);
    }
  };

  const handleMenuKeyDown = (e) => {
    const items = Array.from(
      menuRef.current?.querySelectorAll('[role="menuitem"]') || []
    );
    const currentIndex = items.indexOf(e.target);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex]?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevIndex =
          currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
        items[prevIndex]?.focus();
        break;
      case "Escape":
        setIsOpen(false);
        triggerRef.current?.focus(); // Return focus to trigger
        break;
    }
  };

  return (
    <div>
      <button
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={handleToggle}
      >
        {trigger}
      </button>

      {isOpen && (
        <div ref={menuRef} role="menu" onKeyDown={handleMenuKeyDown}>
          {children}
        </div>
      )}
    </div>
  );
}
```

**3) Focus After Page Transition**

```tsx
// In Next.js for page transitions
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Move focus to main content after page change
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.focus();
        // Announce page change to screen readers
        announcePageChange();
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router]);

  const announcePageChange = () => {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.textContent = `Page changed to ${document.title}`;
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return <Component {...pageProps} />;
}

// Set main content in layout
function Layout({ children }) {
  return (
    <>
      <header>{/* Header */}</header>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </>
  );
}
```

**4) Focus After Form Submission**

```tsx
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      await submitForm();
      setMessage("Inquiry sent successfully.");

      // Move focus to success message
      setTimeout(() => {
        messageRef.current?.focus();
      }, 100);
    } catch (error) {
      setErrors({ submit: "An error occurred during submission." });

      // Move focus to error message
      setTimeout(() => {
        const errorElement = document.querySelector('[role="alert"]');
        errorElement?.focus();
      }, 100);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}

      {message && (
        <div
          ref={messageRef}
          role="status"
          tabIndex={-1}
          className="success-message"
        >
          {message}
        </div>
      )}

      {errors.submit && (
        <div role="alert" tabIndex={-1}>
          {errors.submit}
        </div>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
```

**5) Focus After Dynamic Content Loading**

```tsx
function SearchResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const resultsRef = useRef(null);

  const handleSearch = async (query) => {
    setLoading(true);

    try {
      const data = await searchAPI(query);
      setResults(data);

      // Move focus to results area after search completion
      setTimeout(() => {
        resultsRef.current?.focus();
      }, 100);
    } catch (error) {
      // Error handling
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />

      {loading && <div role="status">Searching...</div>}

      {results.length > 0 && (
        <section ref={resultsRef} tabIndex={-1} aria-label="Search results">
          <h2>Search Results ({results.length})</h2>
          {results.map((item) => (
            <article key={item.id}>{/* Result items */}</article>
          ))}
        </section>
      )}
    </div>
  );
}
```

**6) Accordion Focus**

```tsx
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);

    if (newIndex !== null) {
      // Move focus to content when accordion opens
      setTimeout(() => {
        const content = document.getElementById(`content-${index}`);
        content?.focus();
      }, 100);
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button
            aria-expanded={openIndex === index}
            aria-controls={`content-${index}`}
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </button>

          {openIndex === index && (
            <div id={`content-${index}`} tabIndex={-1}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

**7) Sidebar Toggle Focus**

```tsx
function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);

    if (!sidebarOpen) {
      // When sidebar opens: focus to first link
      setTimeout(() => {
        const firstLink = sidebarRef.current?.querySelector("a, button");
        firstLink?.focus();
      }, 100);
    } else {
      // When sidebar closes: return focus to toggle button
      toggleButtonRef.current?.focus();
    }
  };

  return (
    <div>
      <button
        ref={toggleButtonRef}
        aria-expanded={sidebarOpen}
        aria-controls="sidebar"
        onClick={handleToggle}
      >
        Menu
      </button>

      {sidebarOpen && (
        <aside
          id="sidebar"
          ref={sidebarRef}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setSidebarOpen(false);
              toggleButtonRef.current?.focus();
            }
          }}
        >
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </aside>
      )}
    </div>
  );
}
```

#### State Change Announcements

```tsx
// ✅ Live regions for dynamic content announcements
function SearchResults() {
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  const handleSearch = async (query) => {
    setMessage("Searching...");

    try {
      const data = await searchAPI(query);
      setResults(data);
      setMessage(`Found ${data.length} results.`);
    } catch (error) {
      setMessage("An error occurred during search.");
    }
  };

  return (
    <div>
      {/* Search form */}

      {/* Status message */}
      <div role="status" aria-live="polite">
        {message}
      </div>

      {/* Error message */}
      {error && (
        <div role="alert" aria-live="assertive">
          {error}
        </div>
      )}

      {/* Search results */}
    </div>
  );
}
```

### 4. Don't Rely Only on Visual Information

**Colors, images, and icons must be supplemented with text or other means.**

#### Ensure Color Contrast

```tsx
// ✅ Meet WCAG AA standard (4.5:1)
const colors = {
  text: '#1a1a1a',        // 15.8:1 contrast
  textSecondary: '#666666', // 4.54:1 contrast
  error: '#d32f2f',        // 5.5:1 contrast
  success: '#2e7d32',      // 5.9:1 contrast
};

// ✅ Additional visual cues beyond color
.error {
  color: #d32f2f;
  border-left: 4px solid #d32f2f; /* Add border */
}

.error::before {
  content: "⚠️ Error: "; /* Icon + text */
}
```

#### Diversify Information Delivery Methods

```tsx
// ✅ Required field indication
<label>
  Name
  <span aria-label="Required">*</span>
  <span className="required-text">(Required)</span>
</label>

// ✅ Status indication
<div>
  <span aria-hidden="true" style={{ color: 'green' }}>●</span>
  <span>Online</span> {/* Color + text */}
</div>

// ✅ Provide chart alternatives
function AccessibleChart({ data, title }) {
  const [showTable, setShowTable] = useState(false);

  return (
    <div>
      <h3>{title}</h3>

      {/* Visual chart */}
      <div role="img" aria-describedby="chart-desc">
        <ChartComponent data={data} />
      </div>
      <p id="chart-desc">2024 quarterly sales growth trend</p>

      {/* Data table alternative */}
      <button onClick={() => setShowTable(!showTable)}>
        {showTable ? 'Show Chart' : 'Show Data Table'}
      </button>

      {showTable && (
        <table>
          <caption>Quarterly Sales Data</caption>
          <thead>
            <tr>
              <th>Quarter</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.quarter}>
                <td>{item.quarter}</td>
                <td>{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// ❌ Convey information only through color
<span style={{ color: 'red' }}>Error</span> {/* Hard to distinguish for colorblind users */}
<div className="green-dot"></div> {/* Unclear meaning */}
```

---

## Common Accessibility Issues and Solutions

### Interactive Element Issues

```tsx
// ❌ Issue: Click events on non-interactive elements
<div onClick={handleClick}>Click</div>
<p onClick={handleClick}>Paragraph click</p>

// ✅ Solution: Appropriate role and keyboard support
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Click me
</div>

// Or use appropriate HTML element
<button onClick={handleClick}>Click me</button>
```

### Tab Index Issues

```tsx
// ❌ Issue: Using positive tabIndex
<input tabIndex={1} />
<button tabIndex={2}>Confirm</button>

// ✅ Solution: Use only 0 or -1
<input /> {/* Default tab order */}
<button tabIndex={0}>Confirm</button> {/* Include in tab order */}
<div tabIndex={-1}>Not focusable</div> {/* Programmatically focusable only */}
```

### Missing Label Issues

```tsx
// ❌ Issue: Controls without labels
<button>
  <img src="close.svg" />
</button>

// ✅ Solutions
<button aria-label="Close">
  <img src="close.svg" alt="" />
</button>

// Or
<button>
  <img src="close.svg" alt="Close" />
</button>

// Or hidden text
<button>
  <span className="sr-only">Close</span>
  <img src="close.svg" alt="" />
</button>
```

---

## Practical Checklist

### Post-Development Verification

**Structure and Navigation**

- [ ] Does the page have only one h1?
- [ ] Are headings used in order? (h1→h2→h3)
- [ ] Are skip links provided?
- [ ] Can you navigate in logical order with Tab key?

**Images and Media**

- [ ] Do meaningful images have appropriate alt text?
- [ ] Are decorative images handled with alt="" or CSS?
- [ ] Are detailed descriptions provided for complex images?

**Forms and Interaction**

- [ ] Are all form elements connected to labels?
- [ ] Are error messages clear with role="alert"?
- [ ] Do all buttons and links have clear text or labels?
- [ ] Can all functionality be used with keyboard only?

**Color and Visual**

- [ ] Is text-to-background contrast 4.5:1 or higher?
- [ ] Is information not conveyed through color alone?
- [ ] Are focus indicators clearly visible?

### Testing Tools

**Automated Testing**

- axe DevTools (browser extension)
- Lighthouse accessibility score
- WAVE Web Accessibility Evaluator

**Manual Testing**

- Keyboard-only navigation (Tab, Shift+Tab, Enter, Space)
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast checking tools

**Built-in Browser Features**

- High contrast mode testing
- Zoom up to 200% testing
- Animation disable option verification

---

## Screen Reader Only Text

### Tailwind CSS Approach

```tsx
// ✅ Tailwind built-in sr-only class
<button>
  <span className="sr-only">Add to cart</span>
  Add
</button>;

// ✅ Skip link with Tailwind
function Layout({ children }) {
  return (
    <>
      <a
        href="#main-content"
        className="absolute -top-40 left-6 bg-black text-white px-2 py-1 z-50 focus:top-6"
      >
        Skip to main content
      </a>

      <header>{/* Navigation */}</header>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </>
  );
}

// ✅ Custom component for reusable skip link
function SkipLink({ href, children }) {
  return (
    <a
      href={href}
      className="absolute -top-40 left-6 bg-black text-white px-2 py-1 rounded z-50 focus:top-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </a>
  );
}
```

### Alternative: Tailwind Component Classes

```tsx
// tailwind.config.js - Add custom component classes
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.skip-link': {
          position: 'absolute',
          top: '-10rem',
          left: '1.5rem',
          backgroundColor: '#000',
          color: '#fff',
          padding: '0.5rem 1rem',
          zIndex: '50',
          '&:focus': {
            top: '1.5rem',
          }
        }
      })
    }
  ],
}

// Usage
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

### Usage Examples

```tsx
// Usage example with Tailwind sr-only
<button className="flex items-center space-x-2">
  <span className="sr-only">Add to cart:</span>
  <ShoppingCartIcon className="w-5 h-5" />
  <span>Add</span>
</button>
// Screen reader: "Add to cart: Add button"
// Visual: [cart icon] "Add"

// Required field indicator
<label className="block text-sm font-medium">
  Email
  <span className="text-red-500" aria-label="Required">*</span>
  <span className="sr-only">(Required field)</span>
</label>

// Status with hidden text
<div className="flex items-center space-x-2">
  <div className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true"></div>
  <span>Online</span>
  <span className="sr-only">Status: Currently online</span>
</div>
```
