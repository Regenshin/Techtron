<script setup lang="ts">
useSeoMeta({
  title: 'Products - Techtron Live Limited',
  description: 'Shop the latest technology products including smartphones, laptops, tablets, solar panels, security cameras, and accessories.'
})

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'phones', label: 'Smartphones' },
  { id: 'laptops', label: 'Laptops' },
  { id: 'tablets', label: 'Tablets' },
  { id: 'solar', label: 'Solar Panels' },
  { id: 'security', label: 'Security' },
  { id: 'accessories', label: 'Accessories' }
]

const selectedCategory = ref('all')

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    category: 'phones',
    price: 1199,
    originalPrice: 1299,
    image: '/placeholder.jpg',
    badge: 'Best Seller',
    rating: 4.9,
    reviews: 245
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'phones',
    price: 1099,
    originalPrice: null,
    image: '/placeholder.jpg',
    badge: 'New',
    rating: 4.8,
    reviews: 189
  },
  {
    id: 3,
    name: 'MacBook Pro 16" M3',
    category: 'laptops',
    price: 2499,
    originalPrice: 2699,
    image: '/placeholder.jpg',
    badge: 'Sale',
    rating: 4.9,
    reviews: 312
  },
  {
    id: 4,
    name: 'Dell XPS 15',
    category: 'laptops',
    price: 1799,
    originalPrice: null,
    image: '/placeholder.jpg',
    badge: null,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 5,
    name: 'iPad Pro 12.9"',
    category: 'tablets',
    price: 1099,
    originalPrice: null,
    image: '/placeholder.jpg',
    badge: 'Popular',
    rating: 4.8,
    reviews: 203
  },
  {
    id: 6,
    name: 'Samsung Galaxy Tab S9',
    category: 'tablets',
    price: 849,
    originalPrice: 999,
    image: '/placeholder.jpg',
    badge: 'Sale',
    rating: 4.6,
    reviews: 98
  },
  {
    id: 7,
    name: 'Solar Panel Kit 400W',
    category: 'solar',
    price: 599,
    originalPrice: null,
    image: '/placeholder.jpg',
    badge: 'Eco',
    rating: 4.7,
    reviews: 87
  },
  {
    id: 8,
    name: 'Complete Solar System 5kW',
    category: 'solar',
    price: 4999,
    originalPrice: 5499,
    image: '/placeholder.jpg',
    badge: 'Best Value',
    rating: 4.9,
    reviews: 156
  },
  {
    id: 9,
    name: '4K Security Camera System',
    category: 'security',
    price: 799,
    originalPrice: null,
    image: '/placeholder.jpg',
    badge: 'Top Rated',
    rating: 4.8,
    reviews: 234
  },
  {
    id: 10,
    name: 'Wireless Doorbell Camera',
    category: 'security',
    price: 179,
    originalPrice: 249,
    image: '/placeholder.jpg',
    badge: 'Sale',
    rating: 4.5,
    reviews: 312
  },
  {
    id: 11,
    name: 'AirPods Pro 2',
    category: 'accessories',
    price: 249,
    originalPrice: null,
    image: '/placeholder.jpg',
    badge: null,
    rating: 4.8,
    reviews: 567
  },
  {
    id: 12,
    name: 'Universal Phone Charger',
    category: 'accessories',
    price: 39,
    originalPrice: 49,
    image: '/placeholder.jpg',
    badge: 'Sale',
    rating: 4.4,
    reviews: 892
  }
]

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products
  }
  return products.filter(p => p.category === selectedCategory.value)
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(price)
}

const getBadgeColor = (badge: string | null) => {
  if (!badge) return 'neutral'
  const colors: Record<string, string> = {
    'Best Seller': 'error',
    'New': 'success',
    'Sale': 'error',
    'Popular': 'info',
    'Eco': 'success',
    'Best Value': 'warning',
    'Top Rated': 'info'
  }
  return colors[badge] || 'neutral'
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-3xl mx-auto">
          <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h1 class="text-4xl md:text-5xl font-bold text-neutral-800 mt-4 mb-6">
            Latest Technology Products
          </h1>
          <p class="text-neutral-400 text-lg">
            Discover our curated selection of premium technology products. From the latest smartphones to complete solar systems, we have everything you need.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Category Filter -->
    <section class="py-8 bg-neutral-800 border-b border-neutral-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-3 justify-center">
          <UButton 
            v-for="cat in categories" 
            :key="cat.id"
            :label="cat.label"
            :color="selectedCategory === cat.id ? 'primary' : 'neutral'"
            :variant="selectedCategory === cat.id ? 'solid' : 'ghost'"
            @click="selectedCategory = cat.id"
          />
        </div>
      </div>
    </section>
    
    <!-- Products Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id"
            class="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden card-hover"
          >
            <!-- Image -->
            <div class="relative aspect-square bg-neutral-800 overflow-hidden">
              <img 
                :src="product.image" 
                :alt="product.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <UBadge 
                v-if="product.badge" 
                :color="getBadgeColor(product.badge) as any"
                class="absolute top-3 left-3"
              >
                {{ product.badge }}
              </UBadge>
            </div>
            
            <!-- Content -->
            <div class="p-4">
              <h3 class="text-white font-semibold mb-2 group-hover:text-red-500 transition-colors">
                {{ product.name }}
              </h3>
              
              <!-- Rating -->
              <div class="flex items-center gap-2 mb-3">
                <div class="flex items-center gap-1">
                  <UIcon name="i-lucide-star" class="size-4 text-yellow-500 fill-yellow-500" />
                  <span class="text-white text-sm font-medium">{{ product.rating }}</span>
                </div>
                <span class="text-neutral-500 text-sm">({{ product.reviews }} reviews)</span>
              </div>
              
              <!-- Price -->
              <div class="flex items-center gap-2 mb-4">
                <span class="text-xl font-bold text-white">{{ formatPrice(product.price) }}</span>
                <span 
                  v-if="product.originalPrice" 
                  class="text-neutral-500 line-through text-sm"
                >
                  {{ formatPrice(product.originalPrice) }}
                </span>
              </div>
              
              <!-- Actions -->
              <div class="flex gap-2">
                <UButton 
                  label="View Details" 
                  color="primary" 
                  variant="outline"
                  size="sm"
                  class="flex-1"
                />
                <UButton 
                  icon="i-lucide-shopping-cart" 
                  color="primary"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Empty State -->
        <div 
          v-if="filteredProducts.length === 0"
          class="text-center py-16"
        >
          <UIcon name="i-lucide-package-x" class="size-16 text-neutral-600 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-white mb-2">No Products Found</h3>
          <p class="text-neutral-400 mb-6">Try selecting a different category</p>
          <UButton 
            label="View All Products" 
            color="primary"
            @click="selectedCategory = 'all'"
          />
        </div>
      </div>
    </section>
    
    <!-- Featured Brands -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-neutral-800 mb-4">Trusted Brands We Carry</h2>
          <p class="text-neutral-400">We partner with the world's leading technology brands</p>
        </div>
        
        <div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          <div v-for="i in 6" :key="i" class="flex items-center justify-center">
            <div class="w-20 h-20 bg-neutral-800 rounded-lg flex items-center justify-center">
              <UIcon name="i-lucide-cpu" class="size-10 text-neutral-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Benefits -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-6">
            <div class="w-14 h-14 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-truck" class="size-7 text-red-500" />
            </div>
            <h3 class="text-white font-semibold mb-2">Free Delivery</h3>
            <p class="text-neutral-400 text-sm">Free shipping on orders over $100</p>
          </div>
          
          <div class="text-center p-6">
            <div class="w-14 h-14 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-shield-check" class="size-7 text-red-500" />
            </div>
            <h3 class="text-white font-semibold mb-2">Warranty Included</h3>
            <p class="text-neutral-400 text-sm">All products come with manufacturer warranty</p>
          </div>
          
          <div class="text-center p-6">
            <div class="w-14 h-14 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-refresh-cw" class="size-7 text-red-500" />
            </div>
            <h3 class="text-white font-semibold mb-2">Easy Returns</h3>
            <p class="text-neutral-400 text-sm">30-day hassle-free return policy</p>
          </div>
          
          <div class="text-center p-6">
            <div class="w-14 h-14 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-headset" class="size-7 text-red-500" />
            </div>
            <h3 class="text-white font-semibold mb-2">24/7 Support</h3>
            <p class="text-neutral-400 text-sm">Expert support whenever you need it</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="py-16 from-red-950/50 via-red-900/30 to-red-950/50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-neutral-800 mb-4">
          {"Can't Find What You're Looking For?"}
        </h2>
        <p class="text-neutral-800 mb-8">
          Contact us and we will help you find the perfect product or source it for you.
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
