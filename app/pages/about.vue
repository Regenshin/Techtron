<script setup lang="ts">
import { computed, nextTick, ref, onMounted, onBeforeUnmount } from 'vue'

useSeoMeta({
  title: 'About Us - Techtron Live Limited',
  description: 'Learn about Techtron Live Limited, our mission, values, and the leadership team dedicated to delivering exceptional technology solutions.'
})

const leadershipTeam = [
  {
    name: 'Roshane Walters',
    role: 'Chief Executive Officer',
    bio: 'With over 15 years of experience in the technology industry, James founded Techtron Live with a vision to make quality tech services accessible to everyone.',
    image: 'https://fhi.duke.edu/sites/default/files/styles/focal_point_large/public/LOB_MAN_SQUARE.png?h=a6e99d5e&itok=MvSf706p',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Sarah Anderson',
    role: 'Chief Operations Officer',
    bio: 'Sarah oversees all operational aspects of Techtron Live, ensuring seamless service delivery and customer satisfaction across all departments.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqWJtRsEmNYUBJHtCSRYAHdjaalz7ALNCXg&s',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Michael leads our technical team with expertise in mobile technology, solar systems, and security solutions. He ensures we stay at the forefront of innovation.',
    image: 'https://media.istockphoto.com/id/1289461335/photo/portrait-of-a-handsome-black-man.jpg?s=612x612&w=0&k=20&c=gDibbpmkeV04ta3ociwAgpqcjdeU5sI1nnd78wrnz-g=',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Customer Experience',
    bio: 'Emily is passionate about creating exceptional customer journeys. She has built our customer support team from the ground up.',
    image: 'https://t3.ftcdn.net/jpg/03/62/50/16/360_F_362501638_FimxwTbbGUoRtjaypXDPGAyYCFvfvYy0.jpg',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'David Kim',
    role: 'Lead Repair Technician',
    bio: 'David brings 10 years of hands-on experience in device repair. He trains our technicians and maintains our high quality standards.',
    image: 'https://img.freepik.com/premium-photo/man-white-suit-black-pocket-square_1257035-3442.jpg?semt=ais_hybrid&w=740&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Lisa Thompson',
    role: 'Solar Solutions Director',
    bio: 'Lisa heads our renewable energy division, bringing expertise in solar installation and sustainable technology solutions.',
    image: 'https://img.magnific.com/free-photo/smiling-happy-woman-standing-white-casual-t-shirt-grey_176420-20793.jpg?semt=ais_hybrid&w=740&q=80',
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

const teamCarouselRef = ref<HTMLElement | null>(null)
let teamAutoplayId: number | null = null
const teamCount = leadershipTeam.length
const teamSlides = computed(() => [...leadershipTeam, ...leadershipTeam, ...leadershipTeam])

const getGap = (el: HTMLElement) => {
  const gap = window.getComputedStyle(el).gap
  return gap ? parseFloat(gap) : 0
}

const scrollTeamToIndex = (index: number, behavior: ScrollBehavior = 'smooth') => {
  const el = teamCarouselRef.value
  if (!el) return
  const child = el.children[teamCount + index] as HTMLElement | undefined
  if (!child) return
  el.scrollTo({ left: child.offsetLeft, behavior })
}

const resetTeamPosition = () => {
  const el = teamCarouselRef.value
  if (!el) return
  const child = el.children[teamCount] as HTMLElement | undefined
  if (!child) return
  el.scrollLeft = child.offsetLeft
}

const keepTeamLooping = () => {
  const el = teamCarouselRef.value
  if (!el) return
  const children = Array.from(el.children) as HTMLElement[]
  if (children.length === 0) return

  const gap = getGap(el)
  const itemWidth = children[0].offsetWidth + gap
  const startOffset = children[teamCount]?.offsetLeft ?? 0
  const totalWidth = itemWidth * teamCount

  if (el.scrollLeft <= startOffset - itemWidth) {
    el.scrollLeft += totalWidth
  } else if (el.scrollLeft >= startOffset + totalWidth) {
    el.scrollLeft -= totalWidth
  }
}

const teamIndex = ref(0)

const nextTeam = () => {
  teamIndex.value = (teamIndex.value + 1) % teamCount
  scrollTeamToIndex(teamIndex.value)
}

const prevTeam = () => {
  teamIndex.value = (teamIndex.value - 1 + teamCount) % teamCount
  scrollTeamToIndex(teamIndex.value)
}

const stopTeamAutoplay = () => {
  if (teamAutoplayId) {
    clearInterval(teamAutoplayId)
    teamAutoplayId = null
  }
}

const startTeamAutoplay = () => {
  stopTeamAutoplay()
  teamAutoplayId = window.setInterval(nextTeam, 4000)
}

onMounted(async () => {
  await nextTick()
  resetTeamPosition()
  startTeamAutoplay()
})

onBeforeUnmount(() => {
  stopTeamAutoplay()
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 class="text-4xl md:text-5xl font-bold text-neutral-800 mt-4 mb-6">
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
            <h2 class="text-3xl font-bold text-neutral-800 mt-4 mb-6">
              From a Single Shop to a Trusted Brand
            </h2>
            <div class="space-y-4 text-neutral-400">
              <p>
               Techtron Live Limited was founded in 2019 and has rapidly established itself as a trusted technology solutions provider, delivering reliable, affordable, and innovative services to customers across Jamaica. What began as a small device repair operation has evolved into a dynamic company offering a wide range of modern technology and energy solutions for homes and businesses alike.
              </p>
              <p>
                Today, Techtron Live Limited encompasses several specialized service divisions, including computer and mobile device repairs, security system installation, air conditioning (AC) installation and maintenance, solar energy system installation, and the supply of the latest technology products and accessories. Through professional service, technical expertise, and customer-focused support, the company continues to strengthen its reputation as a dependable partner in the technology and renewable energy industries.
              </p>
              <p>
                Driven by a commitment to quality and customer satisfaction, Techtron Live Limited proudly serves thousands of customers throughout the region. The company remains dedicated to treating every project with care and professionalism while helping to power and protect homes and businesses through advanced technology, efficient cooling solutions, and sustainable solar energy systems.
              </p>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 glow-red">
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/017/153/701/small/technician-repairing-inside-of-mobile-phone-integrated-circuit-the-concept-of-data-hardware-technology-photo.jpg" 
                alt="Techtron Live team"
                class="rounded-xl w-full h-auto"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Values -->
    <section class="py-16 bg-neutral-900">
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
          <h2 class="text-3xl font-bold text-neutral-800 mt-4 mb-4">Meet Our Leadership</h2>
          <p class="text-neutral-400 max-w-2xl mx-auto">
            The passionate professionals behind Techtron Live Limited who work tirelessly to deliver excellence.
          </p>
        </div>
        
        <div class="relative">
          <button
            @click="prevTeam"
            @mousedown="stopTeamAutoplay"
            @mouseup="startTeamAutoplay"
            class="absolute left-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-red-600/20 text-red-600 hover:bg-red-600/30 p-2 shadow-lg"
            aria-label="Previous team member"
          >
            <UIcon name="i-lucide-chevron-left" class="size-5 text-red-600" />
          </button>
          <button
            @click="nextTeam"
            @mousedown="stopTeamAutoplay"
            @mouseup="startTeamAutoplay"
            class="absolute right-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-red-600/20 text-red-600 hover:bg-red-600/30 p-2 shadow-lg"
            aria-label="Next team member"
          >
            <UIcon name="i-lucide-chevron-right" class="size-5 text-red-600" />
          </button>

          <div
            ref="teamCarouselRef"
            class="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-2 px-12"
            @scroll="keepTeamLooping"
            @pointerdown="stopTeamAutoplay"
            @pointerup="startTeamAutoplay"
            @touchstart="stopTeamAutoplay"
            @touchend="startTeamAutoplay"
          >
            <div
              v-for="(member, i) in teamSlides"
              :key="`${member.name}-${i}`"
              class="min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] snap-start group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden card-hover"
            >
              <div class="p-6">
                <div class="w-16 h-16 rounded-full bg-red-600/10 text-red-500 flex items-center justify-center text-xl font-semibold mb-4">
                  {{ member.name.split(' ').map((part: string) => part[0]).join('').slice(0, 2) }}
                </div>
                <h3 class="text-xl font-semibold text-white mb-1">{{ member.name }}</h3>
                <p class="text-red-500 font-medium text-sm mb-3">{{ member.role }}</p>
                <p class="text-neutral-400 text-sm">{{ member.bio }}</p>

                <div class="flex gap-2 mt-5">
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
          </div>
        </div>
      </div>
    </section>
    
    <!-- Timeline / Milestones -->
    <section class="py-16 bg-neutral-900">
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
              v-for="(milestone, index) in milestones as Array<{ year: string; title: string; description: string }>" 
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
        <div class=" from-red-950/50 via-red-900/30 to-red-950/50 rounded-2xl p-8 lg:p-12">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl lg:text-5xl font-bold text-neutral-800 mb-2">10K+</div>
              <div class="text-neutral-400">Devices Repaired</div>
            </div>
            <div class="text-center">
              <div class="text-4xl lg:text-5xl font-bold text-neutral-800 mb-2">500+</div>
              <div class="text-neutral-400">Solar Installations</div>
            </div>
            <div class="text-center">
              <div class="text-4xl lg:text-5xl font-bold text-neutral-800 mb-2">25+</div>
              <div class="text-neutral-400">Team Members</div>
            </div>
            <div class="text-center">
              <div class="text-4xl lg:text-5xl font-bold text-neutral-800 mb-2">99%</div>
              <div class="text-neutral-400">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-neutral-800 mb-4">
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
