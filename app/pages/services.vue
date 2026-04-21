<script setup lang="ts">
useSeoMeta({
  title: 'Our Services - Techtron Live Limited',
  description: 'Explore our comprehensive range of technology services including phone repairs, laptop repairs, solar panel installation, camera systems, and more.'
})

const mainServices = [
  {
    icon: 'i-lucide-smartphone',
    title: 'Phone Repairs',
    description: 'Expert smartphone repair services for all major brands including Apple, Samsung, Google, and more.',
    features: [
      'Screen Replacement & Repair',
      'Battery Replacement',
      'Charging Port Repairs',
      'Water Damage Recovery',
      'Software Issues & Data Recovery',
      'Camera & Speaker Repairs'
    ],
    price: 'Starting from $1000'
  },
  {
    icon: 'i-lucide-laptop',
    title: 'Laptop Repairs',
    description: 'Professional laptop repair and maintenance services for Windows, Mac, and Chromebook devices.',
    features: [
      'Screen Replacement',
      'Keyboard Repairs',
      'Hard Drive & SSD Upgrades',
      'RAM Upgrades',
      'Virus Removal & System Restore',
      'Motherboard Repairs'
    ],
    price: 'Starting from $2,500'
  },
  {
    icon: 'i-lucide-sun',
    title: 'Solar Panel Installation',
    description: 'Sustainable energy solutions for residential and commercial properties. Save money while saving the planet.',
    features: [
      'Site Assessment & Consultation',
      'Custom System Design',
      'Professional Installation',
      'Inverter Setup & Configuration',
      'Grid Connection Assistance',
      'Maintenance & Monitoring'
    ],
    price: 'Free Consultation'
  },
  {
    icon: 'i-lucide-camera',
    title: 'Camera & Security Systems',
    description: 'Protect your home or business with state-of-the-art security camera systems and CCTV solutions.',
    features: [
      'HD & 4K Camera Systems',
      'Night Vision Cameras',
      'Remote Monitoring Setup',
      'Motion Detection Systems',
      'Video Storage Solutions',
      'Smart Home Integration'
    ],
    price: 'Starting from $7,000'
  },
  {
    icon: 'i-lucide-repeat',
    title: 'iPhone Trading',
    description: 'Trade in your old iPhone for cash or credit towards a new device. Best prices guaranteed.',
    features: [
      'Instant Device Valuation',
      'All iPhone Models Accepted',
      'Same-Day Payment',
      'Data Wiping Service',
      'Trade-In Credit Options',
      'Bulk Trade Programs'
    ],
    price: 'Instant Quotes'
  },
  {
    icon: 'i-lucide-monitor',
    title: 'Console & PC Services',
    description: 'Comprehensive desktop computer services including repairs, upgrades, and custom builds.',
    features: [
      'Hardware Diagnostics',
      'Component Upgrades',
      'Custom PC Building',
      'Network Setup',
      'Data Backup Solutions',
      'Performance Optimization'
    ],
    price: 'Starting from $2,500'
  }
]

const additionalServices = [
  { icon: 'i-lucide-wifi', title: 'Network Setup', description: 'Home and office networking solutions' },
  { icon: 'i-lucide-tablet', title: 'Tablet Repairs', description: 'iPad and Android tablet repairs' },
  { icon: 'i-lucide-gamepad-2', title: 'Gaming Console Repairs', description: 'PlayStation, Xbox, and Nintendo' },
  { icon: 'i-lucide-camera', title: 'Camera System Setup', description: 'Instalation of cameras and all accessories' },
  { icon: 'i-lucide-droplet', title: 'Generator Maintenance', description: 'Regular maintenance and servicing of generators' },
  { icon: 'i-lucide-sun', title: 'Solar Panel Installation', description: 'Residential and commercial solar panel installation' }
]

const process = [
  {
    step: '01',
    title: 'Contact Us',
    description: 'Reach out via phone, email, or visit our store. Describe your issue or requirements.'
  },
  {
    step: '02',
    title: 'Diagnosis',
    description: 'Our experts will assess your device and provide a detailed diagnosis and quote.'
  },
  {
    step: '03',
    title: 'Repair/Install',
    description: 'Once approved, we complete the work using quality parts and professional techniques.'
  },
  {
    step: '04',
    title: 'Quality Check',
    description: 'Every job undergoes rigorous testing to ensure everything works perfectly.'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 class="text-4xl md:text-5xl font-bold text-neutral-800 mt-4 mb-6">
            Expert Technology Solutions
          </h1>
          <p class="text-neutral-400 text-lg">
            From quick repairs to complete installations, we offer comprehensive technology services designed to meet all your needs. Quality workmanship guaranteed.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Main Services -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8">
          <div 
            v-for="(service, index) in mainServices" 
            :key="service.title"
            class="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden"
          >
            <div class="grid lg:grid-cols-5 gap-6 p-6 lg:p-8">
              <!-- Service Info -->
              <div class="lg:col-span-3">
                <div class="flex items-start gap-4 mb-4">
                  <div class="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <UIcon :name="service.icon" class="size-7 text-red-500" />
                  </div>
                  <div>
                    <h2 class="text-2xl font-bold text-white">{{ service.title }}</h2>
                    <p class="text-red-500 font-semibold mt-1">{{ service.price }}</p>
                  </div>
                </div>
                <p class="text-neutral-400 mb-6">{{ service.description }}</p>
                
                <div class="grid sm:grid-cols-2 gap-3">
                  <div 
                    v-for="feature in service.features" 
                    :key="feature"
                    class="flex items-center gap-2"
                  >
                    <UIcon name="i-lucide-check-circle" class="size-5 text-red-500 flex-shrink-0" />
                    <span class="text-neutral-300 text-sm">{{ feature }}</span>
                  </div>
                </div>
              </div>
              
              <!-- CTA -->
              <div class="lg:col-span-2 flex flex-col justify-center lg:items-end">
                <div class="bg-neutral-800/50 rounded-xl p-6 w-full lg:max-w-xs">
                  <p class="text-neutral-400 text-sm mb-4">Get started with our {{ service.title.toLowerCase() }} today</p>
                  <UButton 
                    label="Get Quote" 
                    color="primary" 
                    block
                    to="/contact"
                    icon="i-lucide-arrow-right"
                    trailing
                  />
                  <UButton 
                    label="Learn More" 
                    color="neutral" 
                    variant="ghost"
                    block
                    class="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Additional Services -->
    <section class="py-16 bg-neutral-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">Additional Services</h2>
          <p class="text-neutral-400">We also offer a wide range of other technology services</p>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="service in additionalServices" 
            :key="service.title"
            class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover"
          >
            <div class="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
              <UIcon :name="service.icon" class="size-6 text-red-500" />
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ service.title }}</h3>
            <p class="text-neutral-400 text-sm">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Process -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 class="text-3xl font-bold text-neutral-800 mt-4 mb-4">Our Simple Process</h2>
          <p class="text-neutral-400">Getting your device fixed or service installed is easy</p>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="item in process" 
            :key="item.step"
            class="relative"
          >
            <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 h-full">
              <span class="text-4xl font-bold text-red-500/20">{{ item.step }}</span>
              <h3 class="text-xl font-semibold text-white mt-2 mb-2">{{ item.title }}</h3>
              <p class="text-neutral-400 text-sm">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 from-red-950/50 via-red-900/30 to-red-950/50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-neutral-800 mb-4">
          Need a Service Not Listed?
        </h2>
        <p class="text-neutral-400 mb-8">
          Contact us and let us know what you need. We are always expanding our services to better serve you.
        </p>
        <UButton 
          label="Contact Us" 
          color="primary" 
          size="lg"
          to="/contact"
          icon="i-lucide-send"
          trailing
        />
      </div>
    </section>
  </div>
</template>
