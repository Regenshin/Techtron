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

const slug = (title: string) => title.toLowerCase().replace(/\s+/g, '-')

import { computed, nextTick, ref, onMounted, onBeforeUnmount } from 'vue'

const carouselRef = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
let autoplayId: number | null = null
const serviceCount = services.length
const carouselServices = computed(() => [...services, ...services, ...services])

const getGap = (el: HTMLElement) => {
  const gap = window.getComputedStyle(el).gap
  return gap ? parseFloat(gap) : 0
}

const scrollToIndex = (idx: number, behavior: ScrollBehavior = 'smooth') => {
  const el = carouselRef.value
  if (!el) return
  const child = el.children[serviceCount + idx] as HTMLElement | undefined
  if (!child) return
  el.scrollTo({ left: child.offsetLeft, behavior })
  currentIndex.value = idx
}

const resetCarouselPosition = () => {
  const el = carouselRef.value
  if (!el) return
  const child = el.children[serviceCount] as HTMLElement | undefined
  if (!child) return
  el.scrollLeft = child.offsetLeft
}

const keepCarouselLooping = () => {
  const el = carouselRef.value
  if (!el) return
  const children = Array.from(el.children) as HTMLElement[]
  if (children.length === 0) return

  const gap = getGap(el)
  const itemWidth = children[0].offsetWidth + gap
  const startOffset = children[serviceCount]?.offsetLeft ?? 0
  const totalWidth = itemWidth * serviceCount

  if (el.scrollLeft <= startOffset - itemWidth) {
    el.scrollLeft += totalWidth
  } else if (el.scrollLeft >= startOffset + totalWidth) {
    el.scrollLeft -= totalWidth
  }
}

const nextSlide = () => {
  const next = (currentIndex.value + 1) % serviceCount
  scrollToIndex(next)
}

const prevSlide = () => {
  const prev = (currentIndex.value - 1 + serviceCount) % serviceCount
  scrollToIndex(prev)
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayId = window.setInterval(nextSlide, 3500)
}

const stopAutoplay = () => {
  if (autoplayId) {
    clearInterval(autoplayId)
    autoplayId = null
  }
}

onMounted(async () => {
  await nextTick()
  resetCarouselPosition()
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section with Globe -->
    <section class="relative overflow-hidden py-12 lg:py-20">
      <!-- Background effects -->
      
      
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Content -->
          <div class="text-center lg:text-left">
            
            
            <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-6 text-center">
              Powering Your
              <br />
              <span class="text-red-500">Digital</span>
              <br />
              World Forward
            </h1>
            
            <p class="text-base sm:text-lg text-neutral-400 mb-8 max-w-xl mx-auto lg:mx-0">
              From smartphone repairs to solar installations, Techtron Live Limited delivers comprehensive technology solutions you can trust. Experience reliability at its finest.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink
                to="/services"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-700"
              >
                <span>Explore Services</span>
                <UIcon name="i-lucide-arrow-right" class="size-5" />
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-base font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                Get Free Quote
              </NuxtLink>
            </div>
          </div>
          
          <!-- Globe -->
          <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <SpinningGlobe />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-12 bg-neutral-900 border-y border-neutral-800">
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
        
        <div class="relative">
          <button
            @click="prevSlide"
            @mousedown="stopAutoplay"
            @mouseup="startAutoplay"
            class="absolute left-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-red-600/20 text-red-600 hover:bg-red-600/30 p-2 shadow-lg"
            aria-label="Previous"
          >
            <UIcon name="i-lucide-chevron-left" class="size-5 text-red-600" />
          </button>
          <button
            @click="nextSlide"
            @mousedown="stopAutoplay"
            @mouseup="startAutoplay"
            class="absolute right-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-red-600/20 text-red-600 hover:bg-red-600/30 p-2 shadow-lg"
            aria-label="Next"
          >
            <UIcon name="i-lucide-chevron-right" class="size-5 text-red-600" />
          </button>
          <div
            ref="carouselRef"
            class="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory flex gap-4 py-2 px-12"
            @scroll="keepCarouselLooping"
            @pointerdown="stopAutoplay"
            @pointerup="startAutoplay"
            @touchstart="stopAutoplay"
            @touchend="startAutoplay"
          >
            <NuxtLink
              v-for="(service, i) in carouselServices"
              :key="`${service.title}-${i}`"
              :to="`/services#${slug(service.title)}`"
              class="min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] snap-start bg-neutral-900 border border-neutral-800 rounded-xl p-6 card-hover block"
            >
              <div class="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                <UIcon :name="service.icon" class="size-6 text-red-500" />
              </div>
              <h3 class="text-xl font-semibold text-white mb-2">{{ service.title }}</h3>
              <p class="text-neutral-400 text-sm">{{ service.description }}</p>
            </NuxtLink>
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
                <div class="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-shield-check" class="size-5 text-red-500" />
                </div>
                <div>
                  <h4 class="text-black font-semibold">Warranty Guaranteed</h4>
                  <p class="text-neutral-400 text-sm">All repairs come with a comprehensive warranty for your peace of mind.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-clock" class="size-5 text-red-500" />
                </div>
                <div>
                  <h4 class="text-black font-semibold">Quick Turnaround</h4>
                  <p class="text-neutral-400 text-sm">Same-day service available. Most repairs completed within 24-48 hours. </p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-users" class="size-5 text-red-500" />
                </div>
                <div>
                  <h4 class="text-black font-semibold">Expert Technicians</h4>
                  <p class="text-neutral-400 text-sm">Certified professionals with more than 10 years of experience in the industry.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 glow-red">
              <img 
                src="https://www.shutterstock.com/image-photo/confident-guy-happy-black-man-600nw-2522055013.jpg" 
                alt="Techtron Live technician at work"
                class="rounded-xl w-full h-auto"
              />
            </div>
            <!-- Floating badge -->
            
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
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
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
