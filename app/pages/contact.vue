<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

useSeoMeta({
  title: 'Contact Us - Techtron Live Limited',
  description: 'Get in touch with Techtron Live Limited. Contact us for phone repairs, laptop services, solar installation, security systems, and more.'
})

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type Schema = z.output<typeof schema>

const state = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const serviceOptions = [
  { label: 'Phone Repair', value: 'phone-repair' },
  { label: 'Laptop Repair', value: 'laptop-repair' },
  { label: 'Solar Installation', value: 'solar' },
  { label: 'Security Cameras', value: 'security' },
  { label: 'iPhone Trading', value: 'iphone-trade' },
  { label: 'Product Inquiry', value: 'product' },
  { label: 'General Inquiry', value: 'general' },
  { label: 'Other', value: 'other' }
]

const isSubmitting = ref(false)
const isSubmitted = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  isSubmitting.value = false
  isSubmitted.value = true
  
  // Reset form
  state.name = ''
  state.email = ''
  state.phone = ''
  state.service = ''
  state.message = ''
}

const contactInfo = [
  {
    icon: 'i-lucide-map-pin',
    title: 'Visit Us',
    details: ['Shop #F1 Sovereign Center, Mandeville, Manchester, Jamaica', 'Shop 13 Reliance Center, Mandeville, Manchester, Jamaica']
  },
  {
    icon: 'i-lucide-phone',
    title: 'Call Us',
    details: ['+1 (876) 208-1629 / 253-1007', 'Mon-Sat: 9AM - 7PM']
  },
  {
    icon: 'i-lucide-mail',
    title: 'Email Us',
    details: ['techtronlive@gmail.com', 'techtronliverepairs@gmail.com']
  }
]

const faqs = [
  {
    question: 'How long does a typical phone repair take?',
    answer: 'Most phone repairs can be completed within 1-2 hours. Complex repairs may take 24-48 hours. We will provide an accurate estimate when you bring in your device.'
  },
  {
    question: 'Do you offer warranties on repairs?',
    answer: 'Yes! All our repairs come with a minimum 90-day warranty. Specific warranty periods vary by service type.'
  },
  {
    question: 'What areas do you service for solar installation?',
    answer: 'We currently serve the greater metropolitan area and surrounding regions. Contact us to confirm if we service your location.'
  },
  {
    question: 'How do I get a quote for my project?',
    answer: 'Simply fill out the contact form above or call us directly. We offer free consultations and quotes for all services.'
  }
]

const openFaq = ref<number | null>(null)

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h1 class="text-4xl md:text-5xl font-bold text-neutral-800 mt-4 mb-6">
            {"Let's Connect"}
          </h1>
          <p class="text-neutral-400 text-lg">
            Have a question or need a quote? We are here to help. Reach out to us and our team will get back to you promptly.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Contact Info -->
          <div class="lg:col-span-1">
            <h2 class="text-2xl font-bold text-neutral-800 mb-6">Get in Touch</h2>
            
            <div class="space-y-6">
              <div 
                v-for="info in contactInfo" 
                :key="info.title"
                class="flex gap-4"
              >
                <div class="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UIcon :name="info.icon" class="size-6 text-red-500" />
                </div>
                <div>
                  <h3 class="text-neutral-800 font-semibold mb-1">{{ info.title }}</h3>
                  <p 
                    v-for="detail in info.details" 
                    :key="detail"
                    class="text-neutral-600 text-sm"
                  >
                    {{ detail }}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="mt-8">
              <h3 class="text-white font-semibold mb-4">Follow Us</h3>
              <div class="flex gap-3">
                <UButton to="" icon="i-simple-icons-tiktok" color="neutral" variant="outline" />
                <UButton to="https://www.instagram.com/techtron_live?igsh=MWE4emsxOTl3dHk3aA==" icon="i-simple-icons-instagram" color="neutral" variant="outline" />
                
              </div>
            </div>
            
            <!-- Business Hours -->
            <div class="mt-8 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
                <UIcon name="i-lucide-clock" class="size-5 text-red-500" />
                Business Hours
              </h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-neutral-400">Monday - Saturday</span>
                  <span class="text-white">8:30 AM - 7:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-neutral-400">Sunday</span>
                  <span class="text-white">10:00 AM - 5:30 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-neutral-400">Sunday</span>
                  <span class="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 lg:p-8">
              <h2 class="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
              <p class="text-neutral-400 mb-6">Fill out the form below and we will get back to you within 24 hours.</p>
              
              <!-- Success Message -->
              <div 
                v-if="isSubmitted"
                class="bg-green-600/10 border border-green-600/20 rounded-xl p-6 mb-6"
              >
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center">
                    <UIcon name="i-lucide-check-circle" class="size-6 text-green-500" />
                  </div>
                  <div>
                    <h3 class="text-white font-semibold">Message Sent Successfully!</h3>
                    <p class="text-neutral-400 text-sm">We will get back to you within 24 hours.</p>
                  </div>
                </div>
                <UButton 
                  label="Send Another Message" 
                  color="neutral" 
                  variant="ghost"
                  class="mt-4"
                  @click="isSubmitted = false"
                />
              </div>
              
              <UForm 
                v-else
                :schema="schema" 
                :state="state" 
                class="space-y-6" 
                @submit="onSubmit"
              >
                <div class="grid sm:grid-cols-2 gap-6">
                  <UFormField name="name" label="Full Name" required>
                    <UInput 
                      v-model="state.name" 
                      placeholder="John Doe"
                      icon="i-lucide-user"
                      size="lg"
                    />
                  </UFormField>
                  
                  <UFormField name="email" label="Email Address" required>
                    <UInput 
                      v-model="state.email" 
                      type="email"
                      placeholder="john@example.com"
                      icon="i-lucide-mail"
                      size="lg"
                    />
                  </UFormField>
                </div>
                
                <div class="grid sm:grid-cols-2 gap-6">
                  <UFormField name="phone" label="Phone Number">
                    <UInput 
                      v-model="state.phone" 
                      placeholder="+1 (555) 000-0000"
                      icon="i-lucide-phone"
                      size="lg"
                    />
                  </UFormField>
                  
                  <UFormField name="service" label="Service Interested In" required>
                    <USelect
                      v-model="state.service"
                      :items="serviceOptions"
                      placeholder="Select a service"
                      size="lg"
                    />
                  </UFormField>
                </div>
                
                <UFormField name="message" label="Your Message" required>
                  <UTextarea 
                    v-model="state.message" 
                    placeholder="Tell us about your project or inquiry..."
                    :rows="5"
                    autoresize
                    size="lg"
                  />
                </UFormField>
                
                <UButton 
                  type="submit" 
                  label="Send Message" 
                  color="primary"
                  size="lg"
                  :loading="isSubmitting"
                  icon="i-lucide-send"
                  trailing
                />
              </UForm>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section class="py-16 bg-neutral-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold text-white mb-2">Find Us</h2>
      <p class="text-neutral-400">Visit our store for in-person service and support</p>
    </div>

    <!-- Responsive Map -->
    <div class="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.7177221208935!2d-77.50945082481994!3d18.03829918296426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edbbfa3941ca727%3A0x90876e6aff6cc3b!2sTechtron%20Live%20Phone%20Store!5e0!3m2!1sen!2sjm!4v1776790974795!5m2!1sen!2sjm"
        class="w-full h-full border-0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

  </div>
</section>
    
    <!-- FAQs -->
    <section class="py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">FAQs</span>
          <h2 class="text-3xl font-bold text-neutral-800 mt-4 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden"
          >
            <button 
              class="w-full flex items-center justify-between p-6 text-left"
              @click="toggleFaq(index)"
            >
              <span class="text-white font-semibold pr-4">{{ faq.question }}</span>
              <UIcon 
                :name="openFaq === index ? 'i-lucide-minus' : 'i-lucide-plus'" 
                class="size-5 text-red-500 flex-shrink-0" 
              />
            </button>
            <div 
              v-if="openFaq === index"
              class="px-6 pb-6"
            >
              <p class="text-neutral-400">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="py-16 from-red-950/50 via-red-900/30 to-red-950/50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-neutral-800 mb-4">
          Prefer to Talk Directly?
        </h2>
        <p class="text-neutral-400 mb-8">
          Give us a call and speak with one of our friendly team members right away.
        </p>
        <UButton 
          label="Call +1 (876) 208-1629" 
          color="primary" 
          size="lg"
          icon="i-lucide-phone"
        />
      </div>
    </section>
  </div>
</template>
