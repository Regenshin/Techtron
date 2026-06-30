<script setup lang="ts">
import { ref, computed } from 'vue'

useSeoMeta({
  title: 'Products - Techtron Live Limited',
  description: 'Shop the latest technology products including smartphones, laptops, tablets, solar panels, security cameras, and accessories.'
})

type Product = {
  id: number
  name: string
  category: string
  price: number
  originalPrice: number | null
  image: string
  badge: string | null
  rating: number
  reviews: number
  description: string
  features: string[]
}

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'phones', label: 'Smartphones' },
  { id: 'laptops', label: 'Laptops' },
  { id: 'tablets', label: 'Tablets' },
  { id: 'solar', label: 'Solar Panels' },
  { id: 'security', label: 'Security' },
  { id: 'accessories', label: 'Accessories' }
]

const brandLogos = [
  { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Samsung', src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'HP', src: 'https://upload.wikimedia.org/wikipedia/commons/3/31/HP_logo_2012.svg' },
  { name: 'Dell', src: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
  { name: 'Lenovo', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Lenovo-logo.svg' },
  { name: 'Acer', src: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Acer_2016_logo.svg' },
  { name: 'Asus', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/ASUS_Logo.svg' }
]

const scrollingBrandLogos = computed(() => [...brandLogos, ...brandLogos])

const selectedCategory = ref('all')
const selectedProduct = ref<Product | null>(null)

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    category: 'phones',
    price: 155000,
    originalPrice: 180000,
    image: 'https://i5.walmartimages.com/seo/Straight-Talk-Apple-iPhone-15-Pro-Max-256GB-Natural-Prepaid-Smartphone_f7536905-a661-4689-ba6b-56a6458780ab.e8ed88bd7406156792d9bb58356744ce.jpeg',
    badge: 'Best Seller',
    rating: 4.9,
    reviews: 245,
    description: 'Apple’s flagship smartphone with the fastest chip, advanced camera system, and premium finish.',
    features: ['6.7-inch OLED display', 'A17 Pro chip', '48MP main camera', 'Up to 29 hours battery life']
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
    reviews: 189,
    description: 'Premium Android handset with a dynamic AMOLED display, pro-grade cameras, and S Pen support.',
    features: ['6.8-inch Dynamic AMOLED', 'Snapdragon 8 Gen 3', '200MP main camera', '5000mAh battery']
  },
  {
    id: 13,
    name: 'iPhone 15 Plus',
    category: 'phones',
    price: 125000,
    originalPrice: 145000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-plus-pink-select-2023?wid=940&hei=1112&fmt=png-alpha&.v=1695965240675',
    badge: 'Popular',
    rating: 4.8,
    reviews: 189,
    description: 'Large-screen iPhone with powerful A17 chip, dual-camera system, and all-day battery life.',
    features: ['6.7-inch OLED display', 'A17 Pro chip', 'Dual 48MP camera', 'Up to 26 hours battery life']
  },
  {
    id: 14,
    name: 'Samsung Galaxy S24+',
    category: 'phones',
    price: 129000,
    originalPrice: 149000,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/levant/2402/gallery/levant-galaxy-s24-plus-sm-s926ezgdmea-590343340?$1300_1038_PNG$',
    badge: 'Best Value',
    rating: 4.7,
    reviews: 210,
    description: 'Supercharged Galaxy phone with bright display, long battery life, and premium metal finish.',
    features: ['6.7-inch Dynamic AMOLED', 'Snapdragon 8 Gen 3', '50MP main camera', 'Up to 28 hours battery life']
  },
  {
    id: 26,
    name: 'iPhone 15 Pro',
    category: 'phones',
    price: 145000,
    originalPrice: 165000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-blue-select-2023?wid=940&hei=1112&fmt=png-alpha&.v=1695200239846',
    badge: 'New',
    rating: 4.9,
    reviews: 220,
    description: 'Pro-level iPhone with advanced camera capabilities and ultra-smooth performance.',
    features: ['6.1-inch ProMotion display', 'A17 Pro chip', '48MP main camera', 'ProRAW photography']
  },
  {
    id: 27,
    name: 'Samsung Galaxy Z Flip5',
    category: 'phones',
    price: 125000,
    originalPrice: 139000,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/levant/2405/gallery/levant-galaxy-z-flip5-490519-sm-f731bzkamea-696563459?$1300_1038_PNG$',
    badge: 'Featured',
    rating: 4.6,
    reviews: 142,
    description: 'Compact foldable phone with flexible display, powerful camera, and stylish finish.',
    features: ['6.7-inch Flex AMOLED', 'Snapdragon 8 Gen 3', '64MP main camera', 'Flexible hinge design']
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
    reviews: 312,
    description: 'Powerful laptop for creative professionals with an M3 chip and stunning Liquid Retina XDR display.',
    features: ['16-inch Liquid Retina XDR', 'Apple M3 chip', '1TB SSD option', 'Up to 22 hours battery life']
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
    reviews: 156,
    description: 'Premium Windows laptop with strong performance, sleek design, and excellent display quality.',
    features: ['15.6-inch OLED display', 'Intel Core i9', 'NVIDIA RTX 4070', 'Up to 14 hours battery']
  },
  {
    id: 15,
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'laptops',
    price: 210000,
    originalPrice: 230000,
    image: 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-11-gallery-1.png',
    badge: 'Business',
    rating: 4.8,
    reviews: 198,
    description: 'Lightweight business laptop with exceptional keyboard, security features, and durable design.',
    features: ['14-inch IPS display', 'Intel Core i7', 'MIL-STD durability', 'Fingerprint reader']
  },
  {
    id: 16,
    name: 'HP Spectre x360',
    category: 'laptops',
    price: 180000,
    originalPrice: 200000,
    image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08158652.png',
    badge: 'Convertible',
    rating: 4.5,
    reviews: 128,
    description: 'Convertible 2-in-1 laptop with a premium finish, touchscreen, and long battery life.',
    features: ['13.5-inch OLED touchscreen', 'Intel Core i7', '360-degree hinge', 'Bang & Olufsen audio']
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
    reviews: 203,
    description: 'Pro tablet with a large Liquid Retina display, powerful processor, and Apple Pencil support.',
    features: ['12.9-inch Liquid Retina XDR', 'Apple M2 chip', 'Thunderbolt port', 'Support for Apple Pencil Pro']
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
    reviews: 98,
    description: 'High-end Android tablet with vibrant display, S Pen support, and powerful performance.',
    features: ['12.4-inch Super AMOLED', 'Snapdragon 8 Gen 2', 'S Pen included', 'Multi-window productivity']
  },
  {
    id: 17,
    name: 'Microsoft Surface Pro 9',
    category: 'tablets',
    price: 70000,
    originalPrice: 82000,
    image: 'https://www.microsoft.com/content/dam/commerce/Surface/Products/Surface%20Pro%209/SurfacePro9_Platinum_Back.png',
    badge: 'Convertible',
    rating: 4.6,
    reviews: 112,
    description: 'Versatile tablet that converts into a laptop with an attachable keyboard and pen support.',
    features: ['13-inch PixelSense Flow', 'Intel Core i7', '5G ready option', 'Surface Slim Pen 2 support']
  },
  {
    id: 18,
    name: 'Amazon Fire Max 11',
    category: 'tablets',
    price: 22000,
    originalPrice: 28000,
    image: 'https://m.media-amazon.com/images/I/71W8M5J+0TL._AC_SL1500_.jpg',
    badge: 'Value',
    rating: 4.3,
    reviews: 84,
    description: 'Affordable tablet with large screen, great battery life, and built-in Alexa support.',
    features: ['11-inch 2.8K display', 'Expandable storage', '12-hour battery', 'Alexa voice assistant']
  },
  {
    id: 7,
    name: 'Solar Panel Kit 200W',
    category: 'solar',
    price: 24999,
    originalPrice: 29999,
    image: 'https://images.squarespace-cdn.com/content/v1/5d986c732241fe0a5f3cae4e/1592579705361-599YNBITB1R6263A2YHP/solar-panel.jpg',
    badge: 'Eco',
    rating: 4.7,
    reviews: 78,
    description: 'Complete 200W solar panel kit for home and RV charging, including panels, cables, and mounting brackets.',
    features: ['200W total output', 'Monocrystalline panels', 'Easy mount kit', 'Weather-resistant design']
  },
  {
    id: 19,
    name: 'Solar Battery Backup',
    category: 'solar',
    price: 89000,
    originalPrice: 99000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5p7ZGvjluUeoHMnTxvVsFr7JmT1eRIMS7JQ&usqp=CAU',
    badge: 'New',
    rating: 4.8,
    reviews: 54,
    description: 'High-capacity battery backup designed for solar systems to store energy and power your home overnight.',
    features: ['10kWh storage', 'LiFePO4 cells', 'Pure sine wave output', 'Smart energy management']
  },
  {
    id: 20,
    name: 'Solar Inverter System',
    category: 'solar',
    price: 129000,
    originalPrice: 145000,
    image: 'https://www.solarbaba.com/wp-content/uploads/2023/08/Solar-Inverter.jpg',
    badge: 'Top Rated',
    rating: 4.7,
    reviews: 63,
    description: 'Reliable inverter system for solar installations, compatible with battery storage and grid-tied setups.',
    features: ['5kW inverter', 'MPPT charge controller', 'LCD display', 'Hybrid ready']
  },
  {
    id: 21,
    name: 'Portable Solar Generator',
    category: 'solar',
    price: 52000,
    originalPrice: 62000,
    image: 'https://m.media-amazon.com/images/I/61fCJHHYxpL._AC_SL1500_.jpg',
    badge: 'Popular',
    rating: 4.5,
    reviews: 112,
    description: 'Portable solar generator with multiple AC outlets and fast solar recharging for camping and backup power.',
    features: ['2000W peak output', 'Solar recharging', 'LCD battery monitor', 'Multiple USB/AC ports']
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
    reviews: 234,
    description: 'Professional 4K security camera kit with night vision, remote viewing, and motion alerts.',
    features: ['4K UHD recording', 'Night vision', 'Two-way audio', 'Remote app access']
  },
  {
    id: 10,
    name: 'Wireless Doorbell Camera',
    category: 'security',
    price: 179,
    originalPrice: 249,
    image: 'https://m.media-amazon.com/images/I/71h-h9cL3EL._AC_SL1500_.jpg',
    badge: 'Sale',
    rating: 4.5,
    reviews: 312,
    description: 'Wireless doorbell camera with two-way audio, motion detection, and easy app setup.',
    features: ['1080p HD video', 'Motion alerts', 'Two-way audio', 'Weatherproof design']
  },
  {
    id: 24,
    name: 'Smart Home Alarm Kit',
    category: 'security',
    price: 1299,
    originalPrice: 1799,
    image: 'https://www.smarthome.com/media/catalog/product/cache/87199c7ecb8eef77f94cef9ff5d62f33/s/h/sh-001_1_1_1_1_1_1_1_1.jpg',
    badge: 'New',
    rating: 4.6,
    reviews: 128,
    description: 'Complete alarm system with sensors, siren, and app control for home protection.',
    features: ['Door/window sensors', 'Loud siren', 'Mobile alerts', 'Easy DIY setup']
  },
  {
    id: 25,
    name: 'Indoor Pan-Tilt Camera',
    category: 'security',
    price: 129,
    originalPrice: 179,
    image: 'https://m.media-amazon.com/images/I/61h-h9cL3EL._AC_SL1500_.jpg',
    badge: 'Top Rated',
    rating: 4.7,
    reviews: 98,
    description: 'Smart indoor camera with pan/tilt control, night vision, and two-way audio.',
    features: ['360° pan and tilt', '1080p HD video', 'Night vision', 'Two-way audio']
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
    reviews: 567,
    description: 'Noise-cancelling true wireless earbuds with adaptive audio and long battery life.',
    features: ['Active Noise Cancellation', 'Spatial Audio', 'MagSafe charging case', 'Up to 30 hours total listening']
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
    reviews: 892,
    description: 'Universal fast charger compatible with USB-C, Lightning, and Micro USB devices.',
    features: ['65W fast charge', '3-in-1 cable set', 'Compact design', 'Overheat protection']
  },
  {
    id: 22,
    name: 'Magnetic Wireless Charger',
    category: 'accessories',
    price: 4500,
    originalPrice: 6500,
    image: 'https://cdn.shopify.com/s/files/1/0559/8762/0822/products/charger_630x.jpg',
    badge: 'New',
    rating: 4.5,
    reviews: 320,
    description: 'Magnetic charger with fast wireless charging for compatible phones and accessories.',
    features: ['15W magnetic charging', 'Compact stand design', 'LED status indicator', 'Multi-device support']
  },
  {
    id: 23,
    name: 'Portable Power Bank',
    category: 'accessories',
    price: 6500,
    originalPrice: 8500,
    image: 'https://m.media-amazon.com/images/I/61F1K-07wlL._AC_SL1500_.jpg',
    badge: 'Best Value',
    rating: 4.7,
    reviews: 410,
    description: 'High-capacity portable power bank for charging phones, tablets, and laptops on the go.',
    features: ['20,000mAh capacity', 'USB-C and USB-A ports', 'Fast recharge', 'LED power display']
  }
]

const openProductDetails = (product: Product) => {
  selectedProduct.value = product
}

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
      <div class="absolute inset-0 bg-linear-to-b from-red-950/20 via-transparent to-transparent" />
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
    <section class="py-8 bg-neutral-900 border-b border-neutral-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-3 justify-center">
          <UButton 
            v-for="cat in categories" 
            :key="cat.id"
            :label="cat.label"
            :color="selectedCategory === cat.id ? 'primary' : 'solid'"
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
                  @click="openProductDetails(product)"
                />
                <!-- <UButton 
                  icon="i-lucide-shopping-cart" 
                  color="primary"
                  size="sm"
                /> -->
              </div>
            </div>
          </div>
        </div>
        
        <!-- Product Details Modal -->
        <div
          v-if="selectedProduct"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          @click.self="selectedProduct = null"
        >
          <div class="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div class="flex items-start justify-between gap-4 border-b border-gray-200 p-6">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-red-600">{{ selectedProduct.badge || 'Product Details' }}</p>
                <h3 class="text-2xl font-semibold text-neutral-900">{{ selectedProduct.name }}</h3>
                <p class="mt-2 text-sm text-neutral-600">{{ selectedProduct.category }} · {{ selectedProduct.rating }} ★ ({{ selectedProduct.reviews }} reviews)</p>
              </div>
              <button
                type="button"
                class="rounded-full border border-neutral-200 bg-white p-2 text-neutral-500 transition hover:text-neutral-900"
                @click="selectedProduct = null"
              >
                <UIcon name="i-lucide-x" class="size-5" />
              </button>
            </div>

            <div class="grid gap-6 p-6 md:grid-cols-[1.5fr_1fr]">
              <div>
                <img
                  :src="selectedProduct.image"
                  :alt="selectedProduct.name"
                  class="h-full w-full rounded-3xl object-cover"
                />
              </div>
              <div class="space-y-4">
                <p class="text-neutral-700">{{ selectedProduct.description }}</p>
                <div>
                  <h4 class="text-sm font-semibold uppercase tracking-[0.25em] text-red-600 mb-3">Key features</h4>
                  <ul class="space-y-2 text-neutral-600 text-sm">
                    <li v-for="(feature, index) in selectedProduct.features" :key="index" class="flex items-start gap-2">
                      <UIcon name="i-lucide-check-circle" class="size-4 text-red-500 mt-1" />
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </div>
                <div class="rounded-3xl border border-red-100 bg-red-50 p-4">
                  <p class="text-sm text-red-600">Price</p>
                  <p class="text-3xl font-semibold text-neutral-900">{{ formatPrice(selectedProduct.price) }}</p>
                  <span v-if="selectedProduct.originalPrice" class="text-sm text-neutral-500 line-through">{{ formatPrice(selectedProduct.originalPrice) }}</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-3 border-t border-gray-200 p-6 sm:flex-row sm:justify-end">
              <UButton label="Close" color="neutral" variant="outline" @click="selectedProduct = null" />
              <!-- <UButton label="Add to Cart" color="primary" icon="i-lucide-shopping-cart" /> -->
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

        <div class="overflow-hidden rounded-3xl border border-neutral-200 bg-white/90">
          <div class="flex animate-brand-scroll items-center gap-12 px-6 py-10">
            <div
              v-for="(brand, index) in scrollingBrandLogos"
              :key="brand.name + '-' + index"
              class="flex-none min-w-44 items-center justify-center"
            >
              <img
                :src="brand.src"
                :alt="brand.name"
                class="h-16 object-contain grayscale opacity-80 transition duration-300 hover:opacity-100"
              />
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
          Can't Find What You're Looking For?
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
