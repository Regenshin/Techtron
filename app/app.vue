<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { div } from 'three/tsl';

const navItems = computed<NavigationMenuItem[]>(() => [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'About Us', to: '/about' },
  { label: 'Policies', to: '/Policies' },
  { label: 'Contact', to: '/contact' }
])
</script>

<template>
  <UApp>
    <UHeader class="bg-red-600 border-b border-red-700 h-30 text-white">
      <template #title>
        <NuxtLink to="/" class="flex items-center gap-3">
           <img src="/Logo.png" alt="Techtron Live Limited" class="h-28 w-auto" />
          
        </NuxtLink>
      </template>

      <UNavigationMenu :items="navItems" class="hidden lg:flex text-white! **:text-white! **:hover:text-white!" />

      <template #right>
        <NuxtLink to="/contact" class="hidden sm:flex">
          <UButton 
            label="Get Quote" 
            class="bg-red-700! text-white! hover:bg-red-800!"
          />
        </NuxtLink>
      </template>

      <template #body>
        <UNavigationMenu
          :items="navItems"
          orientation="vertical"
          class="-mx-2.5 text-white! **:text-white! **:hover:text-white!"
        />
      </template>
    </UHeader>

    <UMain class="bg-white">
      <NuxtPage />
    </UMain>

    <footer class="bg-white border-t border-red-100">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand -->
          <div class="md:col-span-1">
            <NuxtLink to="/" class="flex items-center gap-3 mb-4">
              <img src="/Logo.png" alt="Techtron Live Limited" class="h-28 w-auto" />
            </NuxtLink>
            <p class="text-neutral-500 text-sm">
              Your trusted partner for all technology solutions. Building reliability, one device at a time.
            </p>
          </div>
          
          <!-- Services -->
          <div>
            <h4 class="text-neutral-900 font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-neutral-500 text-sm">
              <li><NuxtLink to="/services" class="hover:text-red-500 transition-colors">Phone Repairs</NuxtLink></li>
              <li><NuxtLink to="/services" class="hover:text-red-500 transition-colors">Laptop Repairs</NuxtLink></li>
              <li><NuxtLink to="/services" class="hover:text-red-500 transition-colors">Solar Installation</NuxtLink></li>
              <li><NuxtLink to="/services" class="hover:text-red-500 transition-colors">Camera Systems</NuxtLink></li>
            </ul>
          </div>
          
          <!-- Company -->
          <div>
            <h4 class="text-neutral-900 font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-neutral-500 text-sm">
              <li><NuxtLink to="/about" class="hover:text-red-500 transition-colors">About Us</NuxtLink></li>
              <li><NuxtLink to="/products" class="hover:text-red-500 transition-colors">Products</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-red-500 transition-colors">Contact</NuxtLink></li>
            </ul>
          </div>
          
          <!-- Contact -->
          <div>
            <h4 class="text-neutral-900 font-semibold mb-4">Contact Us</h4>
            <ul class="space-y-2 text-neutral-500 text-sm">
              
              
              <li class="flex items-center gap-2">
                <UIcon name="i-lucide-map-pin" class="size-4 text-red-500" />
                 Sovereign Center , Mandeville, Manchester, Jamaica
                <br>
                
                +1 (876) 208-1629
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-lucide-map-pin" class="size-4 text-red-500" />
                 Reliance Center Shop #13, Mandeville, Manchester, Jamaica
                <br>
                 +1 (876) 253-1007 
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-lucide-mail" class="size-4 text-red-500" />
                techtronlive@gmail.com
              </li>
            </ul>
            <div class="flex gap-3 mt-4">
              <UButton icon="i-simple-icons-facebook" color="neutral" variant="ghost" size="sm" />
              <UButton icon="i-simple-icons-x" color="neutral" variant="ghost" size="sm" />
              <UButton icon="i-simple-icons-instagram" color="neutral" variant="ghost" size="sm" />
              <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost" size="sm" />
            </div>
          </div>
        </div>
        
        <div class="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-neutral-500 text-sm">
            © {{ new Date().getFullYear() }} Techtron Live Limited. All rights reserved.
          </p>
          <div class="flex gap-6 text-neutral-400 text-sm">
            <a href="javascript:void(0)" class="hover:text-red-500 transition-colors cursor-default">Privacy Policy</a>
            <a href="javascript:void(0)" class="hover:text-red-500 transition-colors cursor-default">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </UApp>
</template>
