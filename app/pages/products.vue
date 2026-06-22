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
    price: 155000,
    originalPrice: 180000,
    image: 'https://i5.walmartimages.com/seo/Straight-Talk-Apple-iPhone-15-Pro-Max-256GB-Natural-Prepaid-Smartphone_f7536905-a661-4689-ba6b-56a6458780ab.e8ed88bd7406156792d9bb58356744ce.jpeg',
    badge: 'Best Seller',
    rating: 4.9,
    reviews: 245
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'phones',
    price: 140000,
    originalPrice: 160000,
    image: 'https://i5.walmartimages.com/seo/Samsung-Galaxy-S24-Ultra-5G-SM-S928B-DS-256GB-12GB-RAM-Factory-Unlocked-GSM-Titanium-Violet_27c8a138-e673-4372-831a-744cb9511b5f.26c52035bd3a5280da10538de73f88ae.jpeg',
    badge: 'New',
    rating: 4.8,
    reviews: 189
  },
  {
    id: 3,
    name: 'MacBook Pro 16" M3',
    category: 'laptops',
    price: 65000,
    originalPrice: 95000,
    image: 'https://www.hoxtonmacs.co.uk/cdn/shop/files/apple-macbook-pro-16-inch-macbook-pro-16-inch-m3-max-16-core-silver-2023-good-46544305586492_1024x1024.jpg?v=1719449053',
    badge: 'Sale',
    rating: 4.9,
    reviews: 312
  },
  {
    id: 4,
    name: 'Dell XPS 15',
    category: 'laptops',
    price: 250000,
    originalPrice: 270000,
    image: 'https://i.dell.com/is/image/DellContent//content/dam/images/products/laptops-and-2-in-1s/xps/15-9500-touch/xs9500t-cnb-05000ff090-bk.psd?fmt=pjpg&pscan=auto&scl=1&wid=3778&hei=2323&qlt=100,1&resMode=sharp2&size=3778,2323&chrss=full&imwidth=5000',
    badge: null,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 5,
    name: 'iPad Pro 12.9"',
    category: 'tablets',
    price: 95000,
    originalPrice: 115000,
    image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/112024_SP723-iPad_Pro.png',
    badge: 'Popular',
    rating: 4.8,
    reviews: 203
  },
  {
    id: 6,
    name: 'Samsung Galaxy Tab S9+',
    category: 'tablets',
    price: 45000,
    originalPrice: 55000,
    image: 'https://soundmachine.com.mt/wp-content/uploads/2023/08/Galaxy-TabS9-GRAPHITE-1.jpg',
    badge: 'Sale',
    rating: 4.6,
    reviews: 98
  },
  
  {
    id: 9,
    name: '4K Security Camera System',
    category: 'security',
    price: 799,
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/9949d1ae-0fc1-4f38-8635-bb60964a5d84.__CR0,0,1250,938_PT0_SX600_V1___.jpg',
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
    image: 'data:image/jpeg;base64,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',
    badge: 'Sale',
    rating: 4.5,
    reviews: 312
  },
  {
    id: 11,
    name: 'AirPods Pro 2',
    category: 'accessories',
    price: 35000,
    originalPrice: null,
    image: 'https://files.refurbed.com/ii/apple-airpods-pro-2-1699965337.jpg?t=fitdesign&h=600&w=800',
    badge: null,
    rating: 4.8,
    reviews: 567
  },
  {
    id: 12,
    name: 'Universal Phone Charger',
    category: 'accessories',
    price: 2500,
    originalPrice: 3500,
    image: 'https://chargetech.com/cdn/shop/products/universal-phone-charger_1200x.jpg?v=1678933902',
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
