<template>
  <nav class="bubble-nav">
    <!-- 连接弧线的 SVG -->
    <svg class="nav-curve" viewBox="0 0 100 400" preserveAspectRatio="none">
      <path 
        d="M 50 30 Q 80 100, 50 170 Q 20 240, 50 310"
        fill="none" 
        stroke="rgba(255, 255, 255, 0.3)" 
        stroke-width="2"
        class="curve-path"
      />
    </svg>

    <!-- 泡泡按钮 -->
    <div 
      v-for="(page, index) in pages" 
      :key="page.id"
      class="bubble-item"
      :class="{ active: currentPage === page.id }"
      :style="{ top: page.position }"
      @click="$emit('page-change', page.id)"
    >
      <div class="bubble">
        <div class="bubble-icon">{{ page.icon }}</div>
        <div class="bubble-glow"></div>
      </div>
      <div class="bubble-label">{{ page.name }}</div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  pages: {
    type: Array,
    required: true
  },
  currentPage: {
    type: String,
    required: true
  }
});

defineEmits(['page-change']);
</script>

<style scoped>
.bubble-nav {
  position: fixed;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: 400px;
  z-index: 9999;
}

.nav-curve {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  pointer-events: none;
}

.curve-path {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: drawCurve 2s ease-out forwards;
}

@keyframes drawCurve {
  to {
    stroke-dashoffset: 0;
  }
}

.bubble-item {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: all 0.3s ease;
}

.bubble {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
}

.bubble-icon {
  font-size: 28px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.bubble-glow {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.bubble-item:hover .bubble {
  transform: scale(1.15);
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3);
}

.bubble-item:hover .bubble-glow {
  opacity: 1;
}

.bubble-item.active .bubble {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5),
              0 0 60px rgba(255, 255, 255, 0.2);
  animation: bubblePulse 2s ease-in-out infinite;
}

@keyframes bubblePulse {
  0%, 100% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.5),
                0 0 60px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.7),
                0 0 80px rgba(255, 255, 255, 0.3);
  }
}

.bubble-label {
  position: absolute;
  left: 80px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  letter-spacing: 2px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.bubble-item:hover .bubble-label {
  opacity: 1;
  left: 85px;
}
</style>
