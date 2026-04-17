<script setup lang="ts">
useSeoMeta({
  title: 'About Us - Techtron Live Limited',
  description: 'Learn about Techtron Live Limited, our mission, values, and the leadership team dedicated to delivering exceptional technology solutions.'
})

const leadershipTeam = [
  {
    name: 'James Mitchell',
    role: 'Chief Executive Officer',
    bio: 'With over 15 years of experience in the technology industry, James founded Techtron Live with a vision to make quality tech services accessible to everyone.',
    image: '/placeholder-user.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Sarah Anderson',
    role: 'Chief Operations Officer',
    bio: 'Sarah oversees all operational aspects of Techtron Live, ensuring seamless service delivery and customer satisfaction across all departments.',
    image: '/placeholder-user.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Michael leads our technical team with expertise in mobile technology, solar systems, and security solutions. He ensures we stay at the forefront of innovation.',
    image: '/placeholder-user.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Customer Experience',
    bio: 'Emily is passionate about creating exceptional customer journeys. She has built our customer support team from the ground up.',
    image: '/placeholder-user.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'David Kim',
    role: 'Lead Repair Technician',
    bio: 'David brings 10 years of hands-on experience in device repair. He trains our technicians and maintains our high quality standards.',
    image: '/placeholder-user.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Lisa Thompson',
    role: 'Solar Solutions Director',
    bio: 'Lisa heads our renewable energy division, bringing expertise in solar installation and sustainable technology solutions.',
    image: '/placeholder-user.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
]

const values = [
  {
    icon: 'i-lucide-shield-check',
    title: 'Reliability',
    description: 'We stand behind every service we provide with comprehensive warranties and guarantees.'
  },
  {
    icon: 'i-lucide-heart',
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We go above and beyond to exceed expectations.'
  },
  {
    icon: 'i-lucide-lightbulb',
    title: 'Innovation',
    description: 'We continuously evolve our services and embrace new technologies to serve you better.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Community',
    description: 'We are committed to giving back and supporting the communities we serve.'
  }
]

const milestones = [
  { year: '2019', title: 'Founded', description: 'Techtron Live Limited was established with a single repair shop.' },
  { year: '2020', title: 'Expansion', description: 'Opened our second location and launched solar installation services.' },
  { year: '2021', title: 'Growth', description: 'Expanded team to 25+ employees and added security systems division.' },
  { year: '2022', title: 'Recognition', description: 'Awarded Best Tech Service Provider in the region.' },
  { year: '2023', title: 'Innovation', description: 'Launched online store and nationwide delivery services.' },
  { year: '2024', title: 'Future', description: 'Continuing to grow and serve more customers than ever.' }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 class="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Powering Technology, Building Trust
          </h1>
          <p class="text-neutral-400 text-lg">
            At Techtron Live Limited, we are more than just a tech company. We are your partners in navigating the digital world, committed to delivering excellence in every interaction.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Our Story -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 class="text-3xl font-bold text-white mt-4 mb-6">
              From a Single Shop to a Trusted Brand
            </h2>
            <div class="space-y-4 text-neutral-400">
              <p>
                Techtron Live Limited began in 2019 with a simple mission: to provide honest, reliable, and affordable technology services to our community. What started as a small repair shop has grown into a comprehensive technology solutions provider.
              </p>
              <p>
                Over the years, we have expanded our services to include solar panel installation, security systems, and a full range of the latest technology products. Our growth has been fueled by one thing - the trust of our customers.
              </p>
              <p>
                Today, we serve thousands of customers across the region, but our commitment remains the same: to treat every device as if it were our own, and every customer as part of our family.
              </p>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 glow-red">
              <img 
                src="/placeholder.jpg" 
                alt="Techtron Live team"
                class="rounded-xl w-full h-auto"
              />
            </div>
            <div class="absolute -bottom-6 -right-6 bg-red-600 text-white px-8 py-4 rounded-xl">
              <div class="text-3xl font-bold">5+</div>
              <div class="text-sm opacity-90">Years Strong</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Values -->
    <section class="py-16 bg-neutral-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">Our Values</span>
          <h2 class="text-3xl font-bold text-white mt-4 mb-4">What Drives Us</h2>
          <p class="text-neutral-400 max-w-2xl mx-auto">
            Our core values guide every decision we make and every service we provide.
          </p>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="value in values" 
            :key="value.title"
            class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center"
          >
            <div class="w-14 h-14 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon :name="value.icon" class="size-7 text-red-500" />
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ value.title }}</h3>
            <p class="text-neutral-400 text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Leadership Team -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 class="text-3xl font-bold text-white mt-4 mb-4">Meet Our Leadership</h2>
          <p class="text-neutral-400 max-w-2xl mx-auto">
            The passionate professionals behind Techtron Live Limited who work tirelessly to deliver excellence.
          </p>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="member in leadershipTeam" 
            :key="member.name"
            class="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden card-hover"
          >
            <!-- Image -->
            <div class="relative aspect-[4/3] bg-neutral-800 overflow-hidden">
              <img 
                :src="member.image" 
                :alt="member.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <!-- Overlay with social links -->
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <div class="flex gap-2">
                  <UButton 
                    icon="i-simple-icons-linkedin" 
                    color="neutral" 
                    variant="solid"
                    size="sm"
                    :to="member.social.linkedin"
                  />
                  <UButton 
                    icon="i-simple-icons-x" 
                    color="neutral" 
                    variant="solid"
                    size="sm"
                    :to="member.social.twitter"
                  />
                </div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-1">{{ member.name }}</h3>
              <p class="text-red-500 font-medium text-sm mb-3">{{ member.role }}</p>
              <p class="text-neutral-400 text-sm">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Timeline / Milestones -->
    <section class="py-16 bg-neutral-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
          <h2 class="text-3xl font-bold text-white mt-4 mb-4">Milestones</h2>
        </div>
        
        <div class="relative">
          <!-- Timeline line -->
          <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-700" />
          
          <div class="space-y-8 lg:space-y-0">
            <div 
              v-for="(milestone, index) in milestones" 
              :key="milestone.year"
              :class="[
                'lg:flex lg:items-center lg:gap-8',
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              ]"
            >
              <div 
                :class="[
                  'lg:w-1/2 mb-4 lg:mb-8',
                  index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                ]"
              >
                <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 inline-block">
                  <span class="text-red-500 font-bold text-xl">{{ milestone.year }}</span>
                  <h3 class="text-white font-semibold mt-1">{{ milestone.title }}</h3>
                  <p class="text-neutral-400 text-sm mt-2">{{ milestone.description }}</p>
                </div>
              </div>
              
              <!-- Center dot (desktop) -->
              <div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                <div class="w-4 h-4 bg-red-600 rounded-full ring-4 ring-neutral-900" />
              </div>
              
              <div class="lg:w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 rounded-2xl p-8 lg:p-12">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl lg:text-5xl font-bold text-white mb-2">10K+</div>
              <div class="text-neutral-400">Devices Repaired</div>
            </div>
            <div class="text-center">
              <div class="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div class="text-neutral-400">Solar Installations</div>
            </div>
            <div class="text-center">
              <div class="text-4xl lg:text-5xl font-bold text-white mb-2">25+</div>
              <div class="text-neutral-400">Team Members</div>
            </div>
            <div class="text-center">
              <div class="text-4xl lg:text-5xl font-bold text-white mb-2">99%</div>
              <div class="text-neutral-400">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Join the Techtron Family
        </h2>
        <p class="text-neutral-400 mb-8">
          Whether you need a repair, installation, or the latest tech products, we are here to help.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton 
            label="Contact Us" 
            color="primary" 
            size="lg"
            to="/contact"
            icon="i-lucide-send"
            trailing
          />
          <UButton 
            label="View Services" 
            color="neutral" 
            variant="outline"
            size="lg"
            to="/services"
          />
        </div>
      </div>
    </section>
  </div>
</template>
