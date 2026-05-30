"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Feather, Flame, Leaf, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="medium"
        background="floatingGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Varieties",          id: "#features"},
        {
          name: "Products",          id: "#products"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="asset://logo"
      logoAlt="Om Pappu Pan Logo"
      brandName="Om Pappu Pan"
      button={{
        text: "Order Now",        href: "#contact"}}
      animateOnLoad={true}
    />
  </div>

  <div id="home" data-section="home">
      <HeroCentered
      background={{
        variant: "radial-gradient"}}
      title="Experience the Art of Pan"
      description="Indulge in the finest traditional and gourmet Pan varieties, handcrafted with passion and premium ingredients. A flavor journey awaits."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-hindu-guy-posing-laughing-crossed-his-arms-studio-black-background_613910-20913.jpg",          alt: "Happy Customer 1"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-male-indian-freelancer-fast-food-cafe-handsome-head-asian-man-wear-shirt-comfortable-coffee-shop-shows-two-fingers-sign_627829-1370.jpg",          alt: "Happy Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-male-student-wearing-yellow-backpack-holding-files-blue-wall_140725-46902.jpg",          alt: "Happy Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-walks-through-autumn-city-happy-body-female-with-curly-hair-raincoat_1321-4541.jpg",          alt: "Happy Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-latin-man-wearing-summer-clothes-listening-music-with-earphones-against-yellow-space_58466-11962.jpg",          alt: "Happy Customer 5"},
      ]}
      avatarText="Loved by thousands of Pan enthusiasts!"
      buttons={[
        {
          text: "Explore Our Menu",          href: "#products"},
        {
          text: "Order Now",          href: "#contact"},
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text-icon",          text: "Authentic Flavors",          icon: Leaf,
        },
        {
          type: "text-icon",          text: "Handcrafted Perfection",          icon: Sparkles,
        },
        {
          type: "text-icon",          text: "Fresh Ingredients Daily",          icon: Flame,
        },
        {
          type: "text-icon",          text: "Unique Creations",          icon: Feather,
        },
        {
          type: "text-icon",          text: "Customer Favorites",          icon: Star,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Our Legacy of Flavor"
      description={[
        "At Om Pappu Pan, we are dedicated to preserving the rich heritage of Pan-making while innovating with new, exciting flavors. Our journey began decades ago with a simple goal: to craft the most authentic and delightful Pan experience.",        "Every Pan is a masterpiece, prepared with the freshest betel leaves, handpicked spices, and a secret blend of ingredients passed down through generations. We believe in quality, tradition, and the joy of sharing this exquisite Indian delicacy with the world. Join us in celebrating the true essence of Pan." ]}
      buttons={[
        {
          text: "Our Story",          href: "#"},
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "The Sweet Meetha Pan",          description: "A delightful blend of gulkand, desiccated coconut, and candied fruits, offering a burst of sweetness with every bite.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/friends-suffering-from-social-media-addiction_23-2149415981.jpg",            imageAlt: "Sweet Meetha Pan on phone"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/male-courier-blue-uniform-holding-coffee-cups-smartphone-pink-worker-uniform-service-delivery_140725-37285.jpg",            imageAlt: "Customer enjoying sweet pan"}
        },
        {
          title: "Fiery Fire Pan",          description: "Experience the thrill of our unique Fire Pan, carefully prepared and flambéed to deliver a dramatic and unforgettable taste.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/cropped-image-young-man-checking-shopping-list-smartphone-grocery-store_662251-1400.jpg",            imageAlt: "Fire Pan on phone"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-holding-phone-with-online-menu_23-2149303455.jpg",            imageAlt: "Customer surprised by fire pan"}
        },
        {
          title: "Signature Chocolate Pan",          description: "A decadent fusion of rich chocolate, traditional Pan ingredients, and a hint of mint, perfect for dessert lovers.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/bearded-smiling-asian-man-using-tablet-video-conversation-while-relaxing-sofa-modern-office-concept-young-business-people-working-home-panoramic-banner_1253-948.jpg",            imageAlt: "Chocolate Pan on phone"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/collage-customer-experience-concept_23-2149367125.jpg",            imageAlt: "Customer delighted with chocolate pan"}
        }
      ]}
      showStepNumbers={true}
      title="Discover Our Unique Pan Creations"
      description="From classic traditions to bold new flavors, each Pan is a unique culinary experience."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Classic Meetha Pan",          price: "$5.00",          variant: "Sweet & Traditional",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-dessert-with-white-cream-candies-white-background-dessert-cream-cake-fruit_140725-96382.jpg",          imageAlt: "Classic Meetha Pan"},
        {
          id: "p2",          name: "Spicy Fire Pan",          price: "$8.00",          variant: "Bold & Fiery",          imageSrc: "http://img.b2bpic.net/free-photo/lohri-celebration-india_23-2151099091.jpg",          imageAlt: "Spicy Fire Pan"},
        {
          id: "p3",          name: "Decadent Chocolate Pan",          price: "$7.00",          variant: "Rich & Creamy",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cinnamon-coffee-chocolate-brown-desk-dark_140725-13253.jpg",          imageAlt: "Decadent Chocolate Pan"},
        {
          id: "p4",          name: "Mumbai Special Pan",          price: "$6.00",          variant: "Authentic Street Style",          imageSrc: "http://img.b2bpic.net/free-photo/brown-tropical-leaf-closeup_23-2148245270.jpg",          imageAlt: "Mumbai Special Pan"},
        {
          id: "p5",          name: "Refreshing Fruit Pan",          price: "$6.50",          variant: "Fresh & Fruity",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-tasty-dessert-with-fruits_23-2149707921.jpg",          imageAlt: "Refreshing Fruit Pan"},
        {
          id: "p6",          name: "Cool Kulfi Pan",          price: "$7.50",          variant: "Dessert Fusion",          imageSrc: "http://img.b2bpic.net/free-photo/mango-kulfi-with-pistachios_23-2151994681.jpg",          imageAlt: "Cool Kulfi Pan"},
      ]}
      title="Explore Our Exquisite Pan Selection"
      description="Handcrafted with fresh ingredients, choose from our diverse range of traditional and contemporary Pan flavors."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Priya Sharma",          role: "Food Blogger",          company: "TasteBuds",          rating: 5,
          imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d877340c02?q=80&w=2660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Priya Sharma"},
        {
          id: "t2",          name: "Rajesh Kumar",          role: "Entrepreneur",          company: "Innovate Labs",          rating: 5,
          imageSrc: "https://images.unsplash.com/photo-1544723795-3fb6469e380f?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Rajesh Kumar"},
        {
          id: "t3",          name: "Anjali Singh",          role: "Event Planner",          company: "Grand Celebrations",          rating: 5,
          imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Anjali Singh"},
        {
          id: "t4",          name: "Sanjay Gupta",          role: "Local Business Owner",          company: "Gupta Groceries",          rating: 5,
          imageSrc: "https://images.unsplash.com/photo-1560250097-fb5ee0f33946?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Sanjay Gupta"},
        {
          id: "t5",          name: "Deepa Patel",          role: "Homemaker",          company: "Pan Lover",          rating: 5,
          imageSrc: "https://images.unsplash.com/photo-1542155823-3e19864273c5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Deepa Patel"},
      ]}
      kpiItems={[
        {
          value: "5000+",          label: "Happy Customers"},
        {
          value: "10+",          label: "Years of Tradition"},
        {
          value: "100+",          label: "Unique Varieties"},
      ]}
      title="What Our Customers Say"
      description="Hear from those who have savored the unique taste and quality of Om Pappu Pan."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",          badge: "Everyday Treat",          badgeIcon: Sparkles,
          price: "$49",          subtitle: "Pan Box of 10",          features: [
            "Assorted Classic Pans",            "Freshly Prepared",            "Perfect for Small Gatherings",            "Local Delivery Available"],
        },
        {
          id: "premium",          badge: "Party Pack",          badgeIcon: Sparkles,
          price: "$99",          subtitle: "Pan Box of 25",          features: [
            "Assorted Gourmet & Classic Pans",            "Custom Flavor Options",            "Elegant Packaging",            "Ideal for Celebrations"],
        },
        {
          id: "catering",          badge: "Event Special",          badgeIcon: Sparkles,
          price: "Contact for Quote",          subtitle: "Custom Event Catering",          features: [
            "Live Pan Counter",            "Personalized Menu",            "Dedicated Pan Artist",            "Unforgettable Guest Experience"],
        },
      ]}
      title="Custom Pan Packages & Catering"
      description="Perfect for events, parties, or just a delightful treat at home. Choose the package that suits your needs."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "What are the main ingredients in your Pan?",          content: "Our Pan primarily consists of fresh betel leaves, gulkand (rose petal preserve), various spices like fennel seeds, cardamom, and optional additions like desiccated coconut, candied fruits, and nuts."},
        {
          id: "q2",          title: "Do you offer customizable Pan options?",          content: "Yes, for bulk orders and catering packages, we offer customization to suit your preferences and dietary requirements. Please contact us to discuss your specific needs."},
        {
          id: "q3",          title: "How long does the Pan stay fresh?",          content: "For optimal taste and freshness, we recommend consuming our Pan within 24 hours of purchase. Keep it refrigerated in an airtight container."},
        {
          id: "q4",          title: "Do you offer delivery services?",          content: "Yes, we offer local delivery within a specific radius. Delivery charges may apply. Please check our 'Order Now' section for more details on delivery options and areas."},
        {
          id: "q5",          title: "Are there any vegan or vegetarian options?",          content: "All our traditional Pan varieties are naturally vegetarian. We ensure our ingredients are sourced to accommodate various dietary preferences. For specific vegan requests, please inform us."},
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our Pan, ingredients, and services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "downward-rays-static"}}
      tag="Get in Touch"
      title="Ready to Order Your Perfect Pan?"
      description="Send us a message for inquiries, custom orders, or catering services. We'd love to hear from you!"
      inputPlaceholder="Your Email Address"
      buttonText="Send Message"
      termsText="By submitting your inquiry, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="asset://logo"
      logoAlt="Om Pappu Pan Logo"
      columns={[
        {
          items: [
            {
              label: "Home",              href: "#home"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Menu",              href: "#products"},
            {
              label: "Testimonials",              href: "#testimonials"},
          ],
        },
        {
          items: [
            {
              label: "Catering",              href: "#pricing"},
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Order Online",              href: "#contact"},
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      logoText="Om Pappu Pan"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
