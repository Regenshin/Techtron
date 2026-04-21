<script setup lang="ts">
useSeoMeta({
  title: 'Techtron Live Limited - Technology Solutions & Repairs',
  description: 'Your trusted partner for phone repairs, laptop repairs, solar panel installation, camera systems, iPhone trading, and the latest technology products.'
})

const services = [
  {
    icon: 'i-lucide-smartphone',
    title: 'Phone Repairs',
    description: 'Expert repairs for all smartphone brands. Screen replacements, battery changes, and more.'
  },
  {
    icon: 'i-lucide-laptop',
    title: 'Laptop Repairs',
    description: 'Professional laptop diagnostics and repairs. Hardware upgrades and software solutions.'
  },
  {
    icon: 'i-lucide-sun',
    title: 'Solar Installation',
    description: 'Sustainable energy solutions. Professional solar panel installation for homes and businesses.'
  },
  {
    icon: 'i-lucide-camera',
    title: 'Camera Systems',
    description: 'Security camera installation and CCTV systems. Protect what matters most.'
  },
  {
    icon: 'i-lucide-repeat',
    title: 'iPhone Trading',
    description: 'Trade in your old iPhone for cash or upgrade to the latest model.'
  },
  {
    icon: 'i-lucide-cpu',
    title: 'Latest Technology',
    description: 'Access the newest gadgets and tech products. From smartphones to smart home devices.'
  }
]

const stats = [
  { value: '10K+', label: 'Devices Repaired' },
  { value: '500+', label: 'Solar Installations' },
  { value: '99%', label: 'Customer Satisfaction' },
  { value: '5+', label: 'Years Experience' }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    content: 'Techtron Live saved my business! They repaired my laptop within hours and even recovered all my data. Exceptional service!',
    avatar: '/placeholder-user.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Homeowner',
    content: 'The solar panel installation was seamless. Professional team, great communication, and my energy bills have dropped significantly.',
    avatar: '/placeholder-user.jpg'
  },
  {
    name: 'Emily Williams',
    role: 'Tech Enthusiast',
    content: 'Best place to trade in iPhones! Got a great deal and the process was super quick. Highly recommend their services.',
    avatar: '/placeholder-user.jpg'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section with Globe -->
    <section class="relative overflow-hidden py-12 lg:py-20">
      <!-- Background effects -->
      <div class="absolute inset-0 from-red-950/20 via-transparent to-transparent" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px]  rounded-full blur-3xl" />
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-6">
              <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span class="text-red-400 text-sm font-medium">Now Serving Nationwide</span>
            </div>
            
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Powering Your
              <span class="text-red-500">Digital</span>
              <br />
              World Forward
            </h1>
            
            <p class="text-lg text-neutral-400 mb-8 max-w-xl mx-auto lg:mx-0">
              From smartphone repairs to solar installations, Techtron Live Limited delivers comprehensive technology solutions you can trust. Experience reliability at its finest.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <UButton 
                label="Explore Services" 
                color="primary" 
                size="lg"
                to="/services"
                icon="i-lucide-arrow-right"
                trailing
              />
              <UButton 
                label="Get Free Quote" 
                color="neutral" 
                variant="outline"
                size="lg"
                to="/contact"
              />
            </div>
          </div>
          
          <!-- Globe -->
          <div class="flex justify-center lg:justify-end">
            <SpinningGlobe />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-12 bg-black border-y border-neutral-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="text-center"
          >
            <div class="text-3xl md:text-4xl font-bold text-red-500 mb-2">{{ stat.value }}</div>
            <div class="text-neutral-400 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 class="text-3xl md:text-4xl font-bold text-black mt-4 mb-4">
            Comprehensive Tech Solutions
          </h2>
          <p class="text-neutral-400 max-w-2xl mx-auto">
            From repairs to installations, we provide end-to-end technology services designed to keep you connected and powered.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="service in services" 
            :key="service.title"
            class="group bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover"
          >
            <div class="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
              <UIcon :name="service.icon" class="size-6 text-red-500" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">{{ service.title }}</h3>
            <p class="text-neutral-400 text-sm">{{ service.description }}</p>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <UButton 
            label="View All Services" 
            to="/services"
            color="primary"
            variant="outline"
            icon="i-lucide-arrow-right"
            trailing
          />
        </div>
      </div>
    </section>
    
    <!-- Why Choose Us Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 class="text-3xl md:text-4xl font-bold text-black mt-4 mb-6">
              Building Trust Through Technology
            </h2>
            <p class="text-neutral-400 mb-8">
              At Techtron Live Limited, we believe in delivering more than just services. We build lasting relationships through quality workmanship, transparent pricing, and unmatched customer support.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UIcon name="i-lucide-shield-check" class="size-5 text-red-500" />
                </div>
                <div>
                  <h4 class="text-black font-semibold">Warranty Guaranteed</h4>
                  <p class="text-neutral-400 text-sm">All repairs come with a comprehensive warranty for your peace of mind.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UIcon name="i-lucide-clock" class="size-5 text-red-500" />
                </div>
                <div>
                  <h4 class="text-black font-semibold">Quick Turnaround</h4>
                  <p class="text-neutral-400 text-sm">Most repairs completed within 24-48 hours. Same-day service available.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UIcon name="i-lucide-users" class="size-5 text-red-500" />
                </div>
                <div>
                  <h4 class="text-black font-semibold">Expert Technicians</h4>
                  <p class="text-neutral-400 text-sm">Certified professionals with years of experience in the industry.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 glow-red">
              <img 
                src="/placeholder.jpg" 
                alt="Techtron Live technician at work"
                class="rounded-xl w-full h-auto"
              />
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-4 -left-4 bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <div class="text-2xl font-bold">5+</div>
              <div class="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-800 mt-4 mb-4">
            What Our Customers Say
          </h2>
          <p class="text-neutral-400 max-w-2xl mx-auto">
            {"Don't just take our word for it. Here's what our satisfied customers have to say about their experience."}
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.name"
            class="bg-white border border-neutral-800 rounded-xl p-6"
          >
            <div class="flex items-center gap-1 mb-4">
              <UIcon v-for="i in 5" :key="i" name="i-lucide-star" class="size-4 text-yellow-500 fill-yellow-500" />
            </div>
            <p class="text-black mb-6">{{ `"${testimonial.content}"` }}</p>
            <div class="flex items-center gap-3">
              <UAvatar :src="testimonial.avatar" :alt="testimonial.name" size="md" />
              <div>
                <div class="text-neutral-800 font-semibold">{{ testimonial.name }}</div>
                <div class="text-neutral-500 text-sm">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20  from-red-950/50 via-red-900/30 to-red-950/50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-neutral-600 mb-8 text-lg">
          Contact us today for a free consultation and quote. Let us help you solve your technology needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton 
            label="Contact Us Now" 
            color="primary" 
            size="lg"
            to="/contact"
            icon="i-lucide-send"
            trailing
          />
          <UButton 
            label="View Products" 
            color="neutral" 
            variant="outline"
            size="lg"
            to="/products"
          />
        </div>
      </div>
    </section>
  </div>
</template>
