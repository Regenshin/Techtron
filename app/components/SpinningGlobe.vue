<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

// Make canvas responsive
const canvasSize = computed(() => {
  if (process.client) {
    return window.innerWidth < 640 ? 300 : 400
  }
  return 400
})

onMounted(() => {
  if (!canvasRef.value) return
  
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  
  const width = canvas.width = canvasSize.value
  const height = canvas.height = canvasSize.value
  const centerX = width / 2
  const centerY = height / 2
  const radius = width * 0.375 // 150/400 = 0.375
  
  let rotation = 0
  
  function drawGlobe() {
    if (!ctx) return
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height)
    
    // Draw globe base
    const gradient = ctx.createRadialGradient(centerX - 40, centerY - 40, 0, centerX, centerY, radius)
    gradient.addColorStop(0, '#ffffff')
    gradient.addColorStop(0.5, '#1a1a1a')
    gradient.addColorStop(1, '#0a0a0a')
    
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.fill()
    
    // Draw latitude lines
    ctx.strokeStyle = 'rgba(220, 38, 38, 0.3)'
    ctx.lineWidth = 1
    
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = centerY + radius * Math.sin(lat * Math.PI / 180)
      const latRadius = radius * Math.cos(lat * Math.PI / 180)
      
      ctx.beginPath()
      ctx.ellipse(centerX, y, latRadius, latRadius * 0.3, 0, 0, Math.PI * 2)
      ctx.stroke()
    }
    
    // Draw longitude lines
    for (let lon = 0; lon < 360; lon += 30) {
      const adjustedLon = lon + rotation
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(220, 38, 38, 0.4)'
      
      for (let lat = -90; lat <= 90; lat += 5) {
        const x = centerX + radius * Math.cos(lat * Math.PI / 180) * Math.sin(adjustedLon * Math.PI / 180)
        const y = centerY + radius * Math.sin(lat * Math.PI / 180)
        const depth = Math.cos(adjustedLon * Math.PI / 180)
        
        if (depth > 0) {
          if (lat === -90) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
      }
      ctx.stroke()
    }
    
    // Draw connection points (nodes)
    const nodes = [
      { lat: 40, lon: -74 },   // New York
      { lat: 51, lon: -0.1 },  // London
      { lat: 35, lon: 139 },   // Tokyo
      { lat: -33, lon: 151 },  // Sydney
      { lat: 1, lon: 103 },    // Singapore
      { lat: 48, lon: 2 },     // Paris
      { lat: 37, lon: -122 },  // San Francisco
    ]
    
    nodes.forEach(node => {
      const adjustedLon = node.lon + rotation
      const x = centerX + radius * Math.cos(node.lat * Math.PI / 180) * Math.sin(adjustedLon * Math.PI / 180)
      const y = centerY + radius * Math.sin(node.lat * Math.PI / 180)
      const depth = Math.cos(adjustedLon * Math.PI / 180)
      
      if (depth > 0) {
        // Node glow
        const nodeGlow = ctx.createRadialGradient(x, y, 0, x, y, 8)
        nodeGlow.addColorStop(0, 'rgba(220, 38, 38, 0.8)')
        nodeGlow.addColorStop(1, 'rgba(220, 38, 38, 0)')
        ctx.fillStyle = nodeGlow
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fill()
        
        // Node center
        ctx.fillStyle = '#dc2626'
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
      }
    })
    
    // Draw orbiting ring
    ctx.strokeStyle = 'rgba(220, 38, 38, 0.5)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.ellipse(centerX, centerY, radius + 20, (radius + 20) * 0.3, rotation * Math.PI / 180, 0, Math.PI * 2)
    ctx.stroke()
    
    // Orbiting dot
    const orbitX = centerX + (radius + 20) * Math.cos(rotation * 3 * Math.PI / 180)
    const orbitY = centerY + (radius + 20) * 0.3 * Math.sin(rotation * 3 * Math.PI / 180)
    
    ctx.fillStyle = '#dc2626'
    ctx.beginPath()
    ctx.arc(orbitX, orbitY, 5, 0, Math.PI * 2)
    ctx.fill()
    
    rotation += 0.3
    requestAnimationFrame(drawGlobe)
  }
  
  drawGlobe()
})
</script>

<template>
  <div class="relative w-full max-w-sm mx-auto lg:max-w-md">
    <canvas 
      ref="canvasRef" 
      :width="canvasSize"
      :height="canvasSize"
      class="w-full h-auto max-w-full"
    />
    <!-- Floating tech icons around globe -->
    <div class="absolute top-4 left-1/4 animate-bounce" style="animation-delay: 0s; animation-duration: 3s;">
      <div class="w-8 h-8 sm:w-10 sm:h-10 bg-neutral-900 border border-red-500/30 rounded-lg flex items-center justify-center">
        <UIcon name="i-lucide-smartphone" class="size-4 sm:size-5 text-red-500" />
      </div>
    </div>
    <div class="absolute top-1/4 right-4 animate-bounce" style="animation-delay: 0.5s; animation-duration: 3s;">
      <div class="w-8 h-8 sm:w-10 sm:h-10 bg-neutral-900 border border-red-500/30 rounded-lg flex items-center justify-center">
        <UIcon name="i-lucide-laptop" class="size-4 sm:size-5 text-red-500" />
      </div>
    </div>
    <div class="absolute bottom-1/4 left-4 animate-bounce" style="animation-delay: 1s; animation-duration: 3s;">
      <div class="w-8 h-8 sm:w-10 sm:h-10 bg-neutral-900 border border-red-500/30 rounded-lg flex items-center justify-center">
        <UIcon name="i-lucide-sun" class="size-4 sm:size-5 text-red-500" />
      </div>
    </div>
    <div class="absolute bottom-4 right-1/4 animate-bounce" style="animation-delay: 1.5s; animation-duration: 3s;">
      <div class="w-8 h-8 sm:w-10 sm:h-10 bg-neutral-900 border border-red-500/30 rounded-lg flex items-center justify-center">
        <UIcon name="i-lucide-camera" class="size-4 sm:size-5 text-red-500" />
      </div>
    </div>
  </div>
</template>
