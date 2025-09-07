# Next.js 15 HTML Semantic Tags Improvement Guide

---

## Objective

Improve excessive `<div>` usage by applying semantic tags that match content meaning, enhancing code readability, accessibility, and SEO in Next.js 15 environment.

---

## 1. Distinguishing div vs Semantic Tags

### Semantic Conversion Targets

- Major page regions (header, main, footer)
- Content sections (articles, sections, navigation)
- Meaningful content groups

### Keep div For

- Tailwind Flexbox/Grid containers
- Pure layout/styling purposes
- CSS animation wrappers

```tsx
// ❌ BEFORE
<div>
  <div>
    <div>Site Name</div>
    <div>
      <div><Link href="/">Home</Link></div>
    </div>
  </div>
</div>

// ✅ AFTER
<header>
  <div> {/* Layout container */}
    <h1>Site Name</h1>
    <nav>
      <Link href="/">Home</Link>
    </nav>
  </div>
</header>
```

---

## 2. Page Structure Semantic Tags

### 2.1 Basic Page Structure

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <h1>Site Name</h1>
            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2025 Company Name</p>
        </footer>
      </body>
    </html>
  );
}
```

### 2.2 Content Page

```tsx
// app/blog/page.tsx
export default function BlogPage() {
  return (
    <div>
      <header>
        <h1>Blog</h1>
        <p>Latest tech news</p>
      </header>

      <section>
        <h2>Recent Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <article>
                <header>
                  <h3>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <time dateTime={post.date}>{post.date}</time>
                </header>
                <p>{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
```

---

## 3. Semantic Tag Usage Guidelines

### 3.1 header - When to use?

**Usage timing**: When you need an 'introduction section' for page or section

- Top of page (logo, menu, title)
- Top of article/post (title, author, date)
- Beginning of section (section title and description)

```tsx
// Page level header
<header>
  <h1>Site Name</h1>
  <nav>Menu items</nav>
</header>

// Article level header
<article>
  <header>
    <h2>Article Title</h2>
    <p>Published: 2025-01-15 | Author: John Doe</p>
  </header>
  <p>Article content...</p>
</article>
```

### 3.2 nav - When to use?

**Usage timing**: Group of links for 'navigation' to other pages/sections

- Main menu
- Breadcrumbs
- Pagination
- Sidebar menu

**Note**: Small footer links don't need nav, just use ul

```tsx
// ✅ Use nav for these cases
<nav aria-label="Main menu">
  <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
  </ul>
</nav>

// ❌ Nav not necessary (footer links)
<footer>
  <ul>
    <li><Link href="/privacy">Privacy Policy</Link></li>
    <li><Link href="/terms">Terms</Link></li>
  </ul>
</footer>
```

### 3.3 main - When to use?

**Usage timing**: To wrap the 'core content' of the page

- **Only one** per page
- Main content excluding header, footer, sidebar
- The area search engines consider most important

```tsx
<body>
  <header>Header</header>
  <main>
    {" "}
    {/* Core content of this page */}
    <h1>Blog Post</h1>
    <p>Post content...</p>
  </main>
  <footer>Footer</footer>
</body>
```

### 3.4 section - When to use?

**Usage timing**: To group related content by 'topic'

- Must have a heading (h2~h6)
- Area covering one topic
- Can have multiple sections

```tsx
// E-commerce main page
<main>
  <section>
    {" "}
    {/* First topic */}
    <h2>New Products</h2>
    <div>{/* New products list */}</div>
  </section>

  <section>
    {" "}
    {/* Second topic */}
    <h2>Best Sellers</h2>
    <div>{/* Best sellers list */}</div>
  </section>
</main>
```

### 3.5 article - When to use?

**Usage timing**: Content that is 'independently meaningful'

- Unit that can go into RSS feed
- Blog posts, news articles, product reviews
- Content that makes sense when copied elsewhere

```tsx
// Each post in blog list
<section>
  <h2>Latest Posts</h2>
  <ul>
    <li>
      <article>
        {" "}
        {/* Complete meaning even when isolated */}
        <h3>Next.js 15 New Features</h3>
        <p>Let's explore the new features in Next.js 15...</p>
      </article>
    </li>
    <li>
      <article>
        {" "}
        {/* Another independent article */}
        <h3>React 19 Updates</h3>
        <p>Major changes in React 19...</p>
      </article>
    </li>
  </ul>
</section>
```

### 3.6 aside - When to use?

**Usage timing**: Supplementary information 'not directly related' to main content

- Sidebar
- Advertisements
- Related links
- Tag lists

```tsx
<div>
  <main>
    <h1>Blog Post</h1>
    <p>Post content...</p>
  </main>

  <aside>
    {" "}
    {/* Information not directly related to main */}
    <h3>Popular Tags</h3>
    <ul>
      <li>#React</li>
      <li>#Next.js</li>
    </ul>
  </aside>
</div>
```

### 3.7 footer - When to use?

**Usage timing**: 'Closing information' for page or section

- Bottom of page (copyright, contact, company info)
- Bottom of article (tags, share buttons, related links)

```tsx
// Page level footer
<footer>
  <p>© 2025 Company Name. All rights reserved.</p>
  <p>Contact: contact@company.com</p>
</footer>

// Article level footer
<article>
  <h2>Article Title</h2>
  <p>Article content...</p>
  <footer>
    <p>Tags: #React #Next.js</p>
    <p>Share: [Facebook] [Twitter]</p>
  </footer>
</article>
```

### 3.8 p - When to use?

**Usage timing**: When sentences form a 'paragraph'

- Group of related sentences
- Use p tags instead of multiple br tags
- Use p even for single sentence if it's independent content

```tsx
// ✅ Correct paragraph usage
<article>
  <p>First paragraph. This content consists of related sentences.</p>
  <p>Second paragraph. This covers a different topic or perspective.</p>
</article>

// ❌ Wrong usage - creating spacing with br
<div>
  First sentence.<br/><br/>
  Second sentence.<br/><br/>
</div>
```

### 3.9 span - When to use?

**Usage timing**: When you need 'styling only' without meaning

- CSS styling wrapper
- Color/size changes for part of text
- Use only when no meaningful tag exists

```tsx
// ✅ For styling purposes
<p>
  Price: <span>$29.00</span>
</p>

<p>
  Status: <span>Complete</span>
</p>

// ❌ Using span instead of meaningful tags
<span>Title</span> {/* Should use h1~h6 */}
<span>Important text</span> {/* Should use strong, em */}
```

### 3.10 Text Meaning Tags

**strong - Important content emphasis**

```tsx
<p>
  <strong>Warning:</strong> This feature is in beta.
</p>
```

**em - Stress/emphasis**

```tsx
<p>
  This method is <em>really</em> effective.
</p>
```

**mark - Highlight/marking**

```tsx
<p>
  Search results: <mark>React</mark> related documents
</p>
```

**small - Additional info/fine print**

```tsx
<p>
  Product name <small>(tax included)</small>
</p>
```

**time - Date/time**

```tsx
<p>
  Published: <time dateTime="2025-01-15">January 15, 2025</time>
</p>
```

**address - Contact information**

```tsx
<address>
  Author: <a href="mailto:contact@example.com">John Doe</a>
</address>
```

### 3.11 Heading Tags (h1-h6)

**Usage timing**: To represent 'hierarchical structure' of content

- h1: One per page, most important title
- h2-h6: Use in order, don't skip levels

```tsx
// ✅ Correct heading structure
<main>
  <h1>Main Title</h1>
  <section>
    <h2>Section Title</h2>
    <article>
      <h3>Article Title</h3>
      <section>
        <h4>Sub Title</h4>
      </section>
    </article>
  </section>
</main>
```

### 3.12 List Tags

**ul - Unordered list**

```tsx
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```

**ol - Ordered list**

```tsx
<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
```

**dl, dt, dd - Description list**

```tsx
<dl>
  <div>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
  </div>
  <div>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
  </div>
</dl>
```

### 3.13 Quote and Code Related Tags

**blockquote - Long quotation**

```tsx
<blockquote>
  <p>Life is beautiful.</p>
  <cite>- Roberto Benigni</cite>
</blockquote>
```

**q - Short quotation**

```tsx
<p>
  He said <q>Hello</q>.
</p>
```

**cite - Work title**

```tsx
<p>
  <cite>Harry Potter</cite> is a popular novel.
</p>
```

**code - Inline code**

```tsx
<p>
  Use the <code>useState</code> hook.
</p>
```

**pre - Preformatted text**

```tsx
<pre>
  <code>{`function hello() {
  console.log("Hello World");
}`}</code>
</pre>
```

**kbd - Keyboard input**

```tsx
<p>
  Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy
</p>
```

**samp - Program output**

```tsx
<p>
  Result: <samp>Success</samp>
</p>
```

**var - Variable name**

```tsx
<p>
  <var>x</var> + <var>y</var> = 10
</p>
```

### 3.14 Subscript and Superscript

**sub - Subscript**

```tsx
<p>
  H<sub>2</sub>O (water formula)
</p>
```

**sup - Superscript**

```tsx
<p>
  E = mc<sup>2</sup> (Einstein's formula)
</p>
```

### 3.15 Text Modification Marks

**del - Deleted text**

```tsx
<p>
  Price: <del>$50.00</del> $30.00
</p>
```

**ins - Inserted text**

```tsx
<p>
  New feature: <ins>Dark mode support</ins>
</p>
```

### 3.16 Abbreviations and Definitions

**abbr - Abbreviation**

```tsx
<p>
  Learn <abbr title="HyperText Markup Language">HTML</abbr>.
</p>
```

**dfn - Term definition**

```tsx
<p>
  A <dfn>component</dfn> is a reusable UI unit.
</p>
```

### 3.17 Form Related Tags

**form - Form container**

```tsx
<form onSubmit={handleSubmit}>
  <fieldset>
    <legend>Personal Information</legend>

    <div>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
    </div>
  </fieldset>

  <button type="submit">Submit</button>
</form>
```

**textarea - Multi-line input**

```tsx
<div>
  <label htmlFor="message">Message</label>
  <textarea id="message" rows={4} />
</div>
```

**select, option - Selection menu**

```tsx
<div>
  <label htmlFor="country">Country</label>
  <select id="country">
    <option value="">Choose...</option>
    <option value="kr">Korea</option>
    <option value="us">United States</option>
  </select>
</div>
```

### 3.18 Table Related Tags

**table - Table structure**

```tsx
<table>
  <caption>2024 Sales Report</caption>

  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$12,000</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>Total</td>
      <td>$22,000</td>
    </tr>
  </tfoot>
</table>
```

### 3.19 Media Related Tags

**img - Image (Next.js Image component recommended)**

```tsx
<Image src="/product.jpg" alt="Product detail image" width={400} height={300} />
```

**figure, figcaption - Image with caption**

```tsx
<figure>
  <Image src="/chart.png" alt="Sales increase graph" width={500} height={300} />
  <figcaption>2024 Quarterly Sales Status</figcaption>
</figure>
```

**audio - Audio**

```tsx
<audio controls>
  <source src="/audio.mp3" type="audio/mpeg" />
  <source src="/audio.ogg" type="audio/ogg" />
  Your browser does not support audio.
</audio>
```

**video - Video**

```tsx
<video controls>
  <source src="/video.mp4" type="video/mp4" />
  <source src="/video.webm" type="video/webm" />
  Your browser does not support video.
</video>
```

### 3.20 Interactive Elements

**details, summary - Collapsible content**

```tsx
<details>
  <summary>Frequently Asked Questions</summary>
  <div>
    <p>Answer goes here.</p>
  </div>
</details>
```

**dialog - Dialog box (modal)**

```tsx
<dialog open={isOpen}>
  <h2>Alert</h2>
  <p>Are you sure you want to delete?</p>
  <div>
    <button onClick={handleConfirm}>Confirm</button>
    <button onClick={handleCancel}>Cancel</button>
  </div>
</dialog>
```

### 3.21 Links and Connections

**a - Link (Next.js Link component recommended)**

```tsx
<Link href="/about">About Us</Link>

// External link
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  External Site
</a>
```

### 3.22 div - When to use?

**Usage timing**: Only when you need a meaningless 'container'

- Tailwind Flexbox/Grid layout
- CSS animation wrapper
- Styling-only grouping

```tsx
// ✅ Cases where div should be used
<div> {/* Layout purpose */}
  <header>Header</header>
  <nav>Navigation</nav>
</div>

<div> {/* Animation wrapper */}
  <article>Content</article>
</div>

// ❌ Cases where semantic tags should be used instead of div
<div>Article Title</div> {/* Use h1-h6 */}
<div>Menu</div> {/* Use nav */}
<div>Paragraph content</div> {/* Use p */}
```

---

## 4. Heading Structure Rules

### 4.1 Correct Heading Hierarchy

```tsx
// ✅ CORRECT
<main>
  <h1>Page Title</h1>           {/* One per page */}
    <section>
      <h2>Section Title</h2>          {/* Major sections */}
        <article>
          <h3>Article Title</h3>      {/* Sub content */}
            <section>
              <h4>Detail Item</h4>   {/* More detailed divisions */}
            </section>
        </article>
    </section>
</main>

// ❌ WRONG
<h1>Title</h1>
<h4>Sudden h4</h4>  {/* Don't skip h2, h3 */}
<h1>Another h1</h1> {/* Only one h1 per page */}
```

### 4.2 Real Usage Example

```tsx
export default function ProductPage() {
  return (
    <div>
      <h1>All Products</h1>

      <section>
        <h2>Electronics</h2>
        <ul>
          {electronics.map((item) => (
            <li key={item.id}>
              <article>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Clothing</h2>
        {/* Clothing list */}
      </section>
    </div>
  );
}
```

---

## 5. Forms and Input Elements

### 5.1 Basic Form Structure

```tsx
<form>
  <fieldset>
    <legend>Personal Information</legend>

    <div>
      <label htmlFor="name">
        Name <span>*</span>
      </label>
      <input type="text" id="name" required />
    </div>
  </fieldset>

  <button type="submit">Submit</button>
</form>
```

### 5.2 Error Messages

```tsx
<div>
  <label htmlFor="email">Email</label>
  <input
    type="email"
    id="email"
    aria-invalid={hasError}
    aria-describedby="email-error"
  />
  {hasError && (
    <div id="email-error" role="alert">
      Please enter a valid email
    </div>
  )}
</div>
```

---

## 6. Checklist

### Post-Conversion Verification

- [ ] Does the page have only one h1?
- [ ] Are headings used in order? (h1→h2→h3)
- [ ] Do all sections/articles have titles?
- [ ] Are form elements connected to labels?
- [ ] Do meaningful images have alt text?
- [ ] Is nav used only for actual navigation?

### Tool Utilization

- **HTML Validation**: W3C Markup Validator
- **Accessibility Check**: axe DevTools
- **SEO Check**: Lighthouse
- **Screen Reader Test**: NVDA, JAWS

Convert only divs that wrap meaningful content to semantic tags, and keep layout-purpose divs to work harmoniously with Tailwind CSS.
