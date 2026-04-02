# SD Hub Qutubshahi - Complete Website Clone Project Prompt

## 🎯 Project Overview
Build a fully functional, production-ready clone of SD Hub Qutubshahi website (https://sdhubqutubshahi.com/) with modern UI/UX improvements, enhanced features, and complete interactivity.

---

## 📋 Core Requirements

### 1. **Technology Stack**
- **Frontend**: React 19.0.0 with React Router 7.5.1
- **Styling**: Tailwind CSS 3.4.17 with Shadcn UI components
- **Icons**: Lucide React
- **Backend**: FastAPI (for future integration)
- **Database**: MongoDB (for future integration)

### 2. **Project Structure** (CRITICAL)
```
/public/assets/
  /images/          # All local images (courses, news, gallery, logos)
  /icons/           # Icon assets
  /banners/         # Banner images

/src/
  /components/
    /common/        # Reusable components (CourseCard, NewsCard, ServiceCard, GallerySection)
    /sections/      # Page sections (TechCarousel, CoursesSection, ServicesSection, etc.)
    /ui/            # Shadcn UI components
    Header.jsx
    Footer.jsx
    Chatbot.jsx
    ApplyModal.jsx
    ImageLightbox.jsx
  
  /pages/           # Route pages (Home, Courses, CourseDetails, About, Contact, NewsDetails)
  /data/            # Data files - SINGLE SOURCE OF TRUTH
    courses.js
    services.js
    news.js
    testimonials.js
    stats.js
    galleries.js
  
  App.js
  App.css
  index.css
```

---

## 🎨 Design Requirements

### **Color Scheme**
- Primary: `#2563EB` (Blue 600)
- Background: `#F8FAFC` (Gray 50)
- Text: `#0F172A` (Gray 900)
- Accent: Use blue gradient `from-blue-600 to-blue-700`

### **Design Principles**
1. **NO dark colorful gradients** on buttons or backgrounds
2. **NO emoji icons** - use Lucide React icons only
3. Use **8px spacing grid system**
4. Proper **shadows and rounded corners**
5. **Smooth hover effects and transitions**
6. **Mobile-first responsive design**
7. Professional **typography with proper hierarchy**

---

## 🚀 Key Features to Implement

### **1. Technology Carousel**
```
REQUIREMENTS:
- Seamless endless loop auto-scroll
- NO arrows, NO play/pause buttons
- Pauses on mouse hover
- Resumes auto-scroll when mouse leaves
- Each technology clickable → opens modal with:
  * Technology name and icon
  * Description
  * Use cases
  * Call-to-action to learn at SD Hub
```

### **2. Course System**
```
FEATURES:
- Display 6 courses with cards:
  * Image (16:9 ratio, 800x500px)
  * Title, Instructor, Category, Start Date
  * Description
  * "View Details" button
- Clickable cards → navigate to detailed course page
- Course details page includes:
  * Full description
  * Topics covered
  * Prerequisites
  * Duration and level
  * "Apply Now" button → opens modal form
```

### **3. Services Section ("What We Do")**
```
6 SERVICES WITH MODALS:
1. Job Oriented Training
2. Career Counselling
3. Interview Clinics
4. Soft Skills Training
5. Industry Partnerships
6. Placement Support

Each service card:
- Icon from Lucide React
- Title and short description
- Clickable → opens detailed modal with:
  * Overview
  * Features (checkmarked list)
  * Benefits
  * Call-to-action
```

### **4. Testimonials Section**
```
DATA SOURCE: Real Google Maps reviews
REQUIREMENTS:
- 6 authentic student testimonials
- Include:
  * Student photo
  * Name and role
  * Course taken
  * 5-star rating display
  * Review text
  * Date
```

### **5. Success Stories Section**
```
DATA SOURCE: Real placements from sdhubqutubshahi.com/placements
REQUIREMENTS:
- 6 real success stories
- Each story shows:
  * Student name and photo
  * Before role → After role
  * Company name
  * Course completed
  * Achievement highlight
  * Full story narrative
```

### **6. News & Updates Section**
```
4 NEWS CARDS:
- MERN Full Stack Development - Batch 3
- Mobile App Development with Internship - Batch 1
- Graduation Day announcement
- Interview Clinic announcement

Each card:
- Relevant image (16:9 ratio)
- Title, date, category
- Clickable → navigates to news detail page
```

### **7. Gallery Section**
```
3 GALLERIES:
1. Graduation Day (2 photos - USER's actual graduation photos)
2. Tech Talks & Guest Sessions (4 photos - USER's event photos)
3. Teacher's Day (4 photos - USER's celebration photos)

CRITICAL FEATURES:
- Section heading "Gallery" with subtitle
- Each image has hover effect with "Click to view"
- Clicking image → opens full-screen lightbox with:
  * Full-size image display
  * Previous/Next navigation (arrows + keyboard support)
  * Image counter (e.g., "2 / 4")
  * Dark overlay background
  * Close button (X) and ESC key support
```

### **8. Statistics Section**
```
DISPLAY 5 STATS:
- Enquires: 2950+
- Enrollments: 1475+
- Positive Feedback: 95%
- Batches: 48+
- Courses: 36+

Design: Blue background with hover scale animation
```

### **9. Chatbot Widget**
```
REQUIREMENTS:
- Floating blue button (bottom right, above WhatsApp)
- Opens chat window with:
  * Welcome message
  * Quick reply buttons (Courses, Contact, Placements, Location)
  * Smart responses about:
    - Courses offered
    - Contact information
    - Placements & companies
    - Location & address
    - Fees & duration
    - Registration process
  * Real-time chat interface
  * Message timestamps
- Position: bottom-24 right-6 (to avoid WhatsApp overlap)
```

### **10. Navigation & Routing**
```
PAGES:
- Home (/)
- Courses (/courses)
- Course Details (/course/:id)
- About (/about)
- Contact (/contact)
- News Details (/news/:id)

HEADER:
- Logo (clickable → home)
- Navigation: Home, Courses, About, Contact
- Register Now button
- Sign In button
- Social media icons (LinkedIn, Instagram, Facebook)
- Sticky on scroll

FOOTER:
- Logo and description
- Quick Links (About, Contact, Registration, Sign In)
- Information (Courses, Support)
- Social media icons
- WhatsApp floating button (bottom-8 right-8)
- Copyright and sponsors info
```

### **11. Contact Page**
```
FEATURES:
- Contact form with fields:
  * Name, Email, Phone, Subject, Message
  * Form validation
  * Submit → shows toast notification
- Contact information cards:
  * Phone: +91 91549 44461
  * Email: info@sdhubqutubshahi.com
  * Address: Qutub Shahi, Hyderabad
  * Working hours
- WhatsApp quick chat button
```

### **12. About Page**
```
SECTIONS:
- Mission statement
- Values (4 cards with icons):
  * Excellence
  * Community
  * Achievement
  * Inclusivity
- What We Offer (detailed list)
- Supporters & sponsors information
```

---

## 🎭 Animation Requirements

### **Global Animations**
```css
@keyframes fade-in { ... }
@keyframes slide-up { ... }
@keyframes slide-down { ... }
@keyframes scale-in { ... }
@keyframes bounce-slow { ... }
@keyframes pulse-slow { ... }
```

### **Apply Animations To:**
- Page sections: fade-in on load
- Cards: slide-up with staggered delay
- Hover effects: scale-105 and shadow transitions
- Modals: scale-in animation
- Gallery images: fadeInScale with delays
- Chatbot: scale-in on open, bounce-slow on button

---

## 📸 Asset Management

### **Image Guidelines**
```
ALL IMAGES MUST BE LOCAL:
- Location: /public/assets/images/
- Naming: kebab-case (cloud-devops.jpg, data-science.jpg)
- Courses: 800x500px (16:9 ratio)
- News: 800x500px (16:9 ratio)
- Gallery: 400x300px (4:3 ratio)
- Format: JPG or PNG
- Size: Under 200KB for performance

REFERENCE IN CODE:
image: '/assets/images/cloud-devops.jpg'
```

### **Required Images**
```
/images/
  logo.png
  logo-white.png
  cloud-devops.jpg
  data-science.jpg
  mobile-app.jpg
  accounting.jpg
  data-analytics.jpg
  fullstack.jpg
  news-graduation.jpg
  mern-batch.jpg
  mobile-batch.jpg
  interview-clinic.jpg
  /gallery/
    graduation-1.jpg (USER's actual photo)
    graduation-2.jpg (USER's actual photo)
    techtalks-1.jpg (USER's actual photo)
    techtalks-2.jpg (USER's actual photo)
    techtalks-3.jpg (USER's actual photo)
    techtalks-4.jpg (USER's actual photo)
    teachers-1.jpg (USER's actual photo)
    teachers-2.jpg (USER's actual photo)
    teachers-3.jpg (USER's actual photo)
    teachers-4.jpg (USER's actual photo)
```

---

## 📊 Data-Driven Architecture

### **courses.js Structure**
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
  description: 'Short description...',
  fullDescription: 'Detailed description...',
  topics: ['Topic 1', 'Topic 2', ...],
  prerequisites: 'Requirements...'
}
```

### **testimonials.js Structure**
```javascript
{
  id: 1,
  name: 'Abdul Samad',
  role: 'Former Student',
  course: 'Full Stack Development',
  image: 'photo_url',
  rating: 5,
  text: 'Review text...',
  date: '2 months ago'
}
```

### **successStories Structure**
```javascript
{
  id: 1,
  name: 'Ammar Touseef',
  title: 'From Student to Software Engineer',
  course: 'Full Stack Development',
  image: 'photo_url',
  beforeRole: 'Student',
  afterRole: 'Software Engineer at Tech Marvaly',
  company: 'Tech Marvaly',
  batch: 'Batch 2025',
  story: 'Full narrative...',
  achievement: 'Placed as Software Engineer'
}
```

---

## ✅ Functional Requirements

### **ALL Interactive Elements Must Work:**
- ❌ NO dummy "#" links
- ✅ Every button has meaningful action
- ✅ All navigation links work
- ✅ Forms submit with validation
- ✅ Modals open/close properly
- ✅ Toast notifications on form submissions
- ✅ Image lightbox for all gallery images
- ✅ Chatbot provides intelligent responses

---

## 🎯 Content Requirements

### **ONLY REAL DATA:**
- ❌ NO synthetic/mock content
- ✅ Real Google Maps reviews for testimonials
- ✅ Real placement data from sdhubqutubshahi.com/placements
- ✅ Actual course information
- ✅ USER's actual event photos
- ✅ Real contact information

---

## 📱 Responsive Design

```
BREAKPOINTS:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

REQUIREMENTS:
- Mobile-first approach
- Hamburger menu for mobile
- Stacked layouts on mobile
- Touch-friendly buttons (min 44px)
- Readable text sizes
- Images scale properly
- No horizontal scroll
```

---

## 🔧 Technical Specifications

### **React Router Setup**
```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/course/:id" element={<CourseDetails />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/news/:id" element={<NewsDetails />} />
</Routes>
```

### **Component Hierarchy**
```
App.js
├── Header
├── Routes
│   ├── Home
│   │   ├── TechCarousel
│   │   ├── CoursesSection
│   │   ├── ServicesSection
│   │   ├── StatsSection
│   │   ├── TestimonialsSection
│   │   ├── SuccessStoriesSection
│   │   ├── NewsSection
│   │   └── GalleriesSection
│   ├── Courses
│   ├── CourseDetails
│   ├── About
│   ├── Contact
│   └── NewsDetails
├── Footer
├── Chatbot
└── Toaster
```

---

## 🎨 UI Components (Shadcn)

**Use these Shadcn components:**
- Button
- Card (CardContent, CardHeader, CardTitle, CardDescription, CardFooter)
- Dialog (DialogContent, DialogHeader, DialogTitle, DialogDescription)
- Input
- Textarea
- Label
- Select
- Toast/Toaster

**Component Location:** `/app/frontend/src/components/ui/`

---

## 🚫 Critical DON'Ts

1. **DON'T** use dark colorful gradients
2. **DON'T** use emoji icons (🎓📚💡) - use Lucide React
3. **DON'T** center align app container
4. **DON'T** use external image URLs - all local
5. **DON'T** hardcode data in components - use data files
6. **DON'T** leave dummy "#" links
7. **DON'T** use system-UI fonts
8. **DON'T** add announcement bar at top
9. **DON'T** add arrows to tech carousel
10. **DON'T** add play/pause to tech carousel

---

## ✅ Critical DOs

1. **DO** use 8px spacing grid
2. **DO** use local assets in /public/assets/
3. **DO** make all elements functional
4. **DO** add smooth animations
5. **DO** implement hover effects
6. **DO** use Lucide React icons
7. **DO** validate forms
8. **DO** show toast notifications
9. **DO** make carousel pause on hover
10. **DO** use real data from sources

---

## 🎯 Success Criteria

**The project is complete when:**

✅ All 6 courses display correctly with images
✅ Course detail pages work with "Apply Now" modal
✅ All 6 services have clickable modals
✅ 6 real Google reviews displayed
✅ 6 real success stories from placements
✅ 4 news items with correct images
✅ Gallery with USER's actual photos
✅ Image lightbox works on all gallery images
✅ Tech carousel auto-scrolls seamlessly (pauses on hover)
✅ Chatbot responds intelligently
✅ All navigation works
✅ Contact form submits
✅ Mobile responsive
✅ No console errors
✅ Fast load times
✅ Professional appearance

---

## 📞 Contact Information (Hardcoded)

```
Phone: +91 91549 44461
Email: info@sdhubqutubshahi.com
Location: Qutub Shahi, Hyderabad, Telangana
WhatsApp: +91 91549 44461
```

**Social Media:**
- LinkedIn: https://www.linkedin.com/company/sdhub-qutubshahi
- Instagram: https://www.instagram.com/sdhubqutubshahi
- Facebook: https://www.facebook.com/people/SD-Hub-Qutub-Shahi

---

## 🎓 Courses Data

```javascript
const courses = [
  {
    id: 1,
    title: 'Cloud DevOps',
    instructor: 'Mr. Mudassir',
    startDate: '2026-01-03'
  },
  {
    id: 2,
    title: 'Data Science + Gen AI',
    instructor: 'Mr. S.M. Hussain',
    startDate: '2026-04-30'
  },
  {
    id: 3,
    title: 'Mobile App Development',
    instructor: 'Mr. Abdur Rahman',
    startDate: '2026-03-09'
  },
  {
    id: 4,
    title: 'Accounting + Tally ERP',
    instructor: 'Mr. Syed Shaida Hussain',
    startDate: '2026-03-09'
  },
  {
    id: 5,
    title: 'Data Analytics',
    instructor: 'Mr. Arif',
    startDate: '2026-03-22'
  },
  {
    id: 6,
    title: 'Full Stack Development',
    instructor: 'Mr. Abdur Rahman',
    startDate: '2026-03-01'
  }
];
```

---

## 🏁 Final Deliverables

1. **Production-ready website** matching original structure
2. **Clean, modular codebase** with proper organization
3. **All images stored locally** in /public/assets/
4. **Data-driven architecture** using /src/data/ files
5. **Full functionality** - no dummy elements
6. **Beautiful animations** throughout
7. **Mobile responsive** design
8. **Real content only** from authentic sources
9. **Working chatbot** with intelligent responses
10. **Image lightbox** for gallery
11. **Documentation** (README with instructions)

---

## 🎨 Example Component: CourseCard

```jsx
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  
  return (
    <Card 
      onClick={() => navigate(`/course/${course.id}`)}
      className="overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 group cursor-pointer h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {course.category}
          </span>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">
          {course.title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {course.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-2 flex-grow">
        <div className="flex items-center text-sm text-gray-600">
          <User className="w-4 h-4 mr-2 text-blue-600" />
          <span>Instructor: {course.instructor}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2 text-blue-600" />
          <span>Start Date: {course.startDate}</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
```

---

## 📝 Notes

- **Priority**: Functionality over perfection
- **Approach**: Mobile-first responsive design
- **Performance**: Lazy load images, optimize assets
- **Accessibility**: Proper ARIA labels, keyboard navigation
- **SEO**: Semantic HTML, meta tags, alt text
- **Code Quality**: Clean, commented, modular
- **Testing**: Test all interactive elements
- **Browser Support**: Chrome, Firefox, Safari, Edge

---

**END OF PROJECT PROMPT**

---

**Website URL**: https://qutub-clone.preview.emergentagent.com
**Original Website**: https://sdhubqutubshahi.com/
**Project Status**: ✅ Production Ready
