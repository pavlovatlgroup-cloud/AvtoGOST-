# WebP Images Content Guide
## Optimized Visual Assets for Russian Logistics Website

### Image Specifications & Requirements

#### **General WebP Settings**
- **Format**: WebP with fallback to JPEG/PNG
- **Quality**: 85-90% for photos, 95% for graphics with text
- **Compression**: Lossy for photos, lossless for logos/icons
- **Color Profile**: sRGB
- **Progressive Loading**: Enabled for large images

#### **Responsive Image Sizes**
- **Mobile**: 320px, 480px, 768px
- **Tablet**: 1024px, 1200px
- **Desktop**: 1440px, 1920px, 2560px (for high-DPI displays)

---

## Required Images by Page

### 1. Homepage Images

#### **Hero Section**
**File**: `hero-logistics-russia.webp`
- **Dimensions**: 1920x1080px (16:9 ratio)
- **Content**: Modern trucks on Russian highways, professional freight transportation
- **Style**: High-quality, bright lighting, blue color accents
- **Text Overlay**: Space for headline text (left or right alignment)
- **Mobile Version**: `hero-logistics-russia-mobile.webp` (768x1024px)

**Alternative Hero Images**:
- `hero-warehouse-operations.webp` - Modern logistics warehouse
- `hero-truck-fleet.webp` - Professional truck fleet lineup
- `hero-cargo-loading.webp` - Loading/unloading operations

#### **Services Overview Section**
**FTL Service Icon/Image**:
- `ftl-truck-illustration.webp` (400x300px)
- Content: Single large truck with full load
- Style: Clean illustration or high-quality photo

**LTL Service Icon/Image**:
- `ltl-consolidated-cargo.webp` (400x300px)
- Content: Mixed cargo packages in truck
- Style: Showing consolidation concept

**Coverage Map**:
- `russia-coverage-map.webp` (800x600px)
- Content: Map of Russia with service routes highlighted
- Style: Professional, blue color scheme

#### **Why Choose Us Section**
- `reliable-transport-icon.webp` (120x120px)
- `cost-effective-icon.webp` (120x120px)
- `support-24-7-icon.webp` (120x120px)
- `experience-icon.webp` (120x120px)

### 2. FTL Services Page Images

#### **Main Header Image**
**File**: `ftl-dedicated-truck.webp`
- **Dimensions**: 1200x400px
- **Content**: Large truck on highway, emphasizing dedicated service
- **Style**: Professional, motion blur background

#### **Vehicle Types Gallery**
- `standard-truck-ftl.webp` (400x300px)
- `refrigerated-truck-ftl.webp` (400x300px)
- `oversized-cargo-truck.webp` (400x300px)
- `specialized-equipment-truck.webp` (400x300px)

#### **Process Illustrations**
- `ftl-booking-process.webp` (600x400px)
- `ftl-loading-process.webp` (600x400px)
- `ftl-tracking-dashboard.webp` (600x400px)
- `ftl-delivery-process.webp` (600x400px)

### 3. LTL Services Page Images

#### **Main Header Image**
**File**: `ltl-consolidation-center.webp`
- **Dimensions**: 1200x400px
- **Content**: Warehouse with mixed cargo being consolidated
- **Style**: Organized, efficient operations

#### **LTL Process Visualization**
- `ltl-pickup-coordination.webp` (500x350px)
- `ltl-sorting-warehouse.webp` (500x350px)
- `ltl-consolidation-process.webp` (500x350px)
- `ltl-network-hubs.webp` (500x350px)

#### **Benefits Illustrations**
- `cost-efficiency-chart.webp` (400x300px)
- `environmental-benefits.webp` (400x300px)
- `flexible-scheduling.webp` (400x300px)

### 4. About Us Page Images

#### **Company Images**
- `team-logistics-professionals.webp` (800x500px)
- `company-office-russia.webp` (600x400px)
- `logistics-expertise-infographic.webp` (700x500px)
- `company-timeline.webp` (900x400px)

#### **Values & Expertise**
- `customer-focus-illustration.webp` (300x200px)
- `reliability-commitment.webp` (300x200px)
- `technology-solutions.webp` (300x200px)

### 5. Contact Page Images

#### **Contact Illustrations**
- `contact-form-illustration.webp` (400x300px)
- `communication-icons-set.webp` (500x200px)
- `response-time-graphic.webp` (350x250px)
- `office-location-image.webp` (600x400px)

#### **Social Media Icons (WebP format)**
- `whatsapp-icon.webp` (64x64px)
- `telegram-icon.webp` (64x64px)
- `email-icon.webp` (64x64px)
- `phone-icon.webp` (64x64px)

### 6. FAQ Page Images

#### **Visual Aids**
- `faq-illustrations-set.webp` (800x400px)
- `ftl-vs-ltl-comparison.webp` (700x500px)
- `shipping-process-flowchart.webp` (900x600px)
- `pricing-explanation-graphic.webp` (600x400px)

### 7. Blog/Resources Page Images

#### **Article Featured Images**
- `freight-transportation-trends.webp` (600x400px)
- `logistics-cost-optimization.webp` (600x400px)
- `russian-transport-regulations.webp` (600x400px)
- `seasonal-transportation-tips.webp` (600x400px)

---

## Image Content Specifications

### **Transportation Vehicles**

#### **Truck Types to Feature**:
1. **Standard Cargo Trucks**
   - KAMAZ, GAZ, or similar Russian brands
   - Clean, well-maintained appearance
   - Professional drivers in uniform

2. **Refrigerated Transport**
   - Temperature-controlled vehicles
   - Food/pharmaceutical cargo focus
   - Modern cooling equipment visible

3. **Oversized Cargo Vehicles**
   - Heavy-duty trailers
   - Construction/industrial equipment transport
   - Safety equipment and escort vehicles

4. **LTL Consolidation Trucks**
   - Mixed cargo visible
   - Organized loading/compartments
   - Efficiency-focused presentation

### **Infrastructure & Facilities**

#### **Warehouses & Hubs**:
- Modern logistics centers
- Organized storage systems
- Loading dock operations
- Technology integration (scanners, computers)

#### **Geographic Elements**:
- Russian highways and landscapes
- Major city skylines (Moscow, St. Petersburg, etc.)
- Transportation corridors
- Border crossings and checkpoints

### **People & Operations**

#### **Professional Team**:
- Logistics coordinators at desks
- Drivers with vehicles
- Warehouse operators
- Customer service representatives
- Diverse, professional appearance

#### **Operations in Action**:
- Cargo loading/unloading
- Documentation processing
- Route planning sessions
- Customer consultations
- Technology usage

---

## WebP Implementation Code

### **HTML Picture Element with Fallback**

```html
<!-- Hero Section Image -->
<picture class="hero-image">
    <source media="(max-width: 768px)" 
            srcset="images/hero-logistics-russia-mobile.webp" 
            type="image/webp">
    <source media="(max-width: 768px)" 
            srcset="images/hero-logistics-russia-mobile.jpg">
    <source srcset="images/hero-logistics-russia.webp" 
            type="image/webp">
    <img src="images/hero-logistics-russia.jpg" 
         alt="Professional freight transportation services across Russia"
         class="responsive-image"
         loading="lazy">
</picture>

<!-- Service Card Images -->
<picture class="service-image">
    <source srcset="images/ftl-truck-illustration.webp" 
            type="image/webp">
    <img src="images/ftl-truck-illustration.png" 
         alt="Full Truckload (FTL) transportation services"
         class="responsive-image"
         loading="lazy">
</picture>

<!-- Gallery Images with Multiple Sizes -->
<picture class="gallery-image">
    <source media="(max-width: 480px)" 
            srcset="images/standard-truck-ftl-480.webp" 
            type="image/webp">
    <source media="(max-width: 768px)" 
            srcset="images/standard-truck-ftl-768.webp" 
            type="image/webp">
    <source media="(max-width: 1200px)" 
            srcset="images/standard-truck-ftl-1200.webp" 
            type="image/webp">
    <source srcset="images/standard-truck-ftl.webp" 
            type="image/webp">
    <img src="images/standard-truck-ftl.jpg" 
         alt="Standard truck for FTL transportation"
         class="responsive-image"
         loading="lazy">
</picture>
```

### **CSS for WebP Images**

```css
/* Responsive Image Base Styles */
.responsive-image {
    max-width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.3s ease;
}

/* Hero Section Styling */
.hero-image {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    position: relative;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* Service Card Images */
.service-image {
    width: 100%;
    max-width: 400px;
    margin: 0 auto 20px;
}

.service-image img {
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(46, 134, 171, 0.1);
}

/* Gallery Grid */
.image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
}

.gallery-image {
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.gallery-image:hover {
    transform: scale(1.05);
}

/* Icon Images */
.icon-image {
    width: 64px;
    height: 64px;
    object-fit: contain;
}

/* Lazy Loading Animation */
img[loading="lazy"] {
    opacity: 0;
    transition: opacity 0.3s ease;
}

img[loading="lazy"].loaded {
    opacity: 1;
}

/* WebP Support Detection */
.webp-support .hero-section {
    background-image: url('images/hero-logistics-russia.webp');
}

.no-webp .hero-section {
    background-image: url('images/hero-logistics-russia.jpg');
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    .hero-image {
        height: 50vh;
    }
    
    .image-gallery {
        grid-template-columns: 1fr;
        gap: 15px;
    }
}
```

### **JavaScript for WebP Support and Lazy Loading**

```javascript
// WebP Support Detection
function supportsWebP(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height === 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

// Apply WebP support class
supportsWebP(function(supported) {
    document.documentElement.classList.add(supported ? 'webp-support' : 'no-webp');
});

// Enhanced Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    
                    // Add loaded class for animation
                    image.classList.add('loaded');
                    
                    // Stop observing this image
                    observer.unobserve(image);
                }
            });
        }, {
            rootMargin: '50px 0px', // Start loading 50px before entering viewport
            threshold: 0.1
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => img.classList.add('loaded'));
    }
});

// Preload Critical Images
function preloadCriticalImages() {
    const criticalImages = [
        'images/hero-logistics-russia.webp',
        'images/hero-logistics-russia.jpg', // Fallback
        'images/ftl-truck-illustration.webp',
        'images/ltl-consolidated-cargo.webp'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Call preload function
preloadCriticalImages();
```

---

## Image Optimization Workflow

### **Conversion Settings**

#### **For cwebp command line tool**:
```bash
# High quality photos (85% quality)
cwebp -q 85 -m 6 input.jpg -o output.webp

# Graphics with text (95% quality, lossless)
cwebp -lossless input.png -o output.webp

# Resize and optimize
cwebp -resize 1920 1080 -q 85 input.jpg -o hero-logistics-russia.webp

# Create multiple sizes
cwebp -resize 480 320 -q 80 input.jpg -o image-480.webp
cwebp -resize 768 512 -q 85 input.jpg -o image-768.webp
cwebp -resize 1200 800 -q 85 input.jpg -o image-1200.webp
```

### **Batch Conversion Script**

```bash
#!/bin/bash
# Convert all images in directory to WebP

for img in *.jpg *.jpeg *.png; do
    if [ -f "$img" ]; then
        filename="${img%.*}"
        echo "Converting $img to ${filename}.webp"
        cwebp -q 85 -m 6 "$img" -o "${filename}.webp"
    fi
done
```

### **File Naming Convention**

```
Format: [purpose]-[description]-[size].webp

Examples:
- hero-logistics-russia-1920.webp
- ftl-truck-illustration-400.webp
- ltl-consolidation-process-mobile.webp
- icon-whatsapp-64.webp
- gallery-warehouse-operations-768.webp
```

---

## Content Creation Guidelines

### **Photography Requirements**

#### **Image Style**:
- **Lighting**: Bright, professional lighting
- **Colors**: Complement blue color scheme (#2E86AB, #A3D5FF)
- **Composition**: Clean, uncluttered backgrounds
- **Quality**: High resolution, sharp focus

#### **Brand Consistency**:
- Modern, professional appearance
- Russian context (vehicles, locations, people)
- Safety and reliability emphasis
- Technology integration visible

### **Stock Photo Alternatives**

#### **Recommended Sources**:
- Shutterstock (search: "Russian logistics", "freight Russia")
- Adobe Stock ("cargo transportation Russia")
- Getty Images ("commercial vehicles Russia")
- Unsplash (free alternative for generic logistics)

#### **Search Keywords**:
- "грузоперевозки Россия"
- "логистика транспорт"
- "фуры автомобили"
- "склад грузы"
- "Russian trucks highway"
- "freight transportation warehouse"

This comprehensive WebP images guide provides everything needed to create and implement optimized visual content for your Russian logistics website, ensuring fast loading times, excellent visual quality, and professional presentation across all devices.