# SD Hub Qutubshahi - Production-Ready Web Application

A fully functional, production-ready clone of SD Hub Qutubshahi website with improved UI/UX and clean, modular codebase.

## 🏗️ Project Structure

```
/public/
  /assets/
    /images/           # All course, banner, and gallery images
      logo.png
      logo-white.png
      cloud-devops.jpg
      data-science.jpg
      mobile-app.jpg
      accounting.jpg
      data-analytics.jpg
      fullstack.jpg
      /gallery/        # Gallery images organized by event
        graduation-1.jpg
        speaker-1.jpg
        teachers-1.jpg
        techtalks-1.jpg
    /icons/            # Icon assets
    /banners/          # Banner images

/src/
  /components/
    /common/           # Reusable components
      CourseCard.jsx
      NewsCard.jsx
      ServiceCard.jsx
      GallerySection.jsx
    
    /sections/         # Page sections
      TechCarousel.jsx
      CoursesSection.jsx
      ServicesSection.jsx
      NewsSection.jsx
      StatsSection.jsx
      GalleriesSection.jsx
    
    /ui/              # Shadcn UI components
      button.jsx
      card.jsx
      dialog.jsx
      input.jsx
      ...
    
    Header.jsx        # Global header/navbar
    Footer.jsx        # Global footer
    ApplyModal.jsx    # Course application modal
  
  /pages/             # Route pages
    Home.jsx
    Courses.jsx
    CourseDetails.jsx
    About.jsx
    Contact.jsx
    NewsDetails.jsx
  
  /data/              # Data files (single source of truth)
    courses.js        # Course information
    services.js       # Services offered
    news.js           # News and updates
    stats.js          # Statistics
    galleries.js      # Gallery data
  
  App.js             # Main app component with routing
  App.css            # Global styles
  index.css          # Tailwind and base styles
```

## 🎨 Design System

### Colors
- **Primary**: `#2563EB` (Blue 600)
- **Background**: `#F8FAFC` (Gray 50)
- **Text**: `#0F172A` (Gray 900)
- **Secondary**: `#F1F5F9` (Gray 100)

### Spacing
- Uses 8px grid system
- Consistent padding and margins throughout

### Typography
- Modern sans-serif font stack
- Clear hierarchy with proper sizing

## 📦 Data-Driven Architecture

All content is stored in `/src/data/` directory:

### courses.js
```javascript
{
  id: 1,
  title: 'Cloud DevOps',
  slug: 'cloud-devops',
  instructor: 'Mr. Mudassir',
  category: 'IT',
  startDate: '2026-01-03',
  duration: '3-6 months',
  level: 'Beginner to Advanced',
  image: '/assets/images/cloud-devops.jpg',
  description: '...',
  fullDescription: '...',
  topics: [...],
  prerequisites: '...'
}
```

### news.js
```javascript
{
  id: 1,
  title: 'MERN Full stack web development',
  date: '25-10-2025',
  category: 'Batch 3',
  image: '/assets/images/mern-batch.jpg',
  excerpt: '...',
  content: '...'
}
```

## 🖼️ Image Management

### Guidelines
1. **Local Storage**: All images stored in `/public/assets/images/`
2. **Naming Convention**: Use descriptive kebab-case names
   - `cloud-devops.jpg`
   - `graduation-1.jpg`
   - `logo-white.png`

3. **Image References**: Use absolute paths from public directory
   ```javascript
   image: '/assets/images/cloud-devops.jpg'
   ```

4. **Aspect Ratios**:
   - Course cards: 16:9 (800x500)
   - News cards: 16:9 (800x500)
   - Gallery: 4:3 (400x300)
   - Logo: Maintain original aspect ratio

5. **Loading**: Use `loading="lazy"` for better performance

### Adding New Images
1. Place image in `/public/assets/images/`
2. Use consistent naming
3. Update data file with new path
4. UI updates automatically

## 🔄 Component Architecture

### Reusable Components
- **CourseCard**: Displays course information
- **NewsCard**: Displays news items
- **ServiceCard**: Displays service offerings
- **GallerySection**: Displays image galleries

### Section Components
- Organize related content
- Easy to maintain and update
- Consistent styling

### Benefits
- **DRY Principle**: Don't repeat yourself
- **Maintainability**: Change once, update everywhere
- **Consistency**: Same look and feel
- **Scalability**: Easy to add new items

## 🚀 Features

### Fully Functional
✅ Multi-page routing (React Router)
✅ Clickable course cards → Course details pages
✅ Clickable news items → News detail pages
✅ Application form modal
✅ Contact form with validation
✅ Responsive navigation menu
✅ Mobile-friendly design
✅ Social media integration
✅ WhatsApp floating button

### Interactive Elements
- All buttons have actions
- Hover effects on cards
- Smooth page transitions
- Form validations
- Toast notifications

### Navigation
- Home (/)
- Courses (/courses)
- Course Details (/course/:id)
- About (/about)
- Contact (/contact)
- News Details (/news/:id)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🎯 How to Update Content

### Adding a New Course
1. Open `/src/data/courses.js`
2. Add new course object:
```javascript
{
  id: 7,
  title: 'Your New Course',
  slug: 'your-new-course',
  instructor: 'Instructor Name',
  category: 'IT',
  startDate: '2026-XX-XX',
  duration: 'X months',
  level: 'Beginner',
  image: '/assets/images/new-course.jpg',
  description: 'Short description',
  fullDescription: 'Detailed description',
  topics: ['Topic 1', 'Topic 2'],
  prerequisites: 'Requirements'
}
```
3. Add course image to `/public/assets/images/new-course.jpg`
4. Course appears automatically on website

### Updating News
1. Open `/src/data/news.js`
2. Add or modify news item
3. Add corresponding image
4. News appears automatically

### Changing Statistics
1. Open `/src/data/stats.js`
2. Update values
3. Changes reflect immediately

## 🛠️ Technologies Used

- **React** 19.0.0
- **React Router** 7.5.1
- **Tailwind CSS** 3.4.17
- **Shadcn UI** Components
- **Lucide React** Icons
- **Axios** API calls

## 📝 Development Commands

```bash
# Start development server
yarn start

# Build for production
yarn build

# Run linter
yarn lint
```

## 🔒 Production Ready Features

- Clean, modular code
- Organized file structure
- Data-driven architecture
- Optimized images with lazy loading
- Responsive design
- SEO-friendly structure
- Performance optimized
- Maintainable codebase

## 🎨 Customization

### Changing Colors
Update colors in `/src/index.css`:
```css
:root {
  --primary: #2563EB;
  --background: #F8FAFC;
  --text: #0F172A;
}
```

### Modifying Layouts
- Components are in `/src/components/`
- Sections are in `/src/components/sections/`
- Pages are in `/src/pages/`

## 📄 License

© Managed by Professionals Solidarity Forum
Sponsored by Rahbar Foundation & The Safa Educational Welfare And Charitable Trust
Designed by Luminate Web Solutions

---

Built with ❤️ by Emergent AI
