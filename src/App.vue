<template>
  <div
    class="gallery-container"
    ref="container" 
    :class="{ 'tech-mode': currentPage === 'tech' }"
  >
    <!-- 泡泡导航 -->
    <BubbleNav 
      v-show="!navHidden"
      :pages="pages" 
      :currentPage="currentPage" 
      @page-change="handlePageChange"
    />

    <!-- CG 档案馆 -->
    <MonetView v-show="currentPage === 'monet'" :active="currentPage === 'monet'" />

    <!-- 回响链路 -->
    <TechView
      v-show="currentPage === 'tech'"
      :active="currentPage === 'tech'"
      @explore-mode="handleExploreMode"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import BubbleNav from '@/components/BubbleNav.vue';
import MonetView from '@/views/MonetView.vue';
import TechView from '@/views/TechView.vue';
import { pageConfig } from '@/config/constants';
import { usePageTransition } from '@/composables/usePageTransition';
import { useAnimations } from '@/composables/useAnimations';

const container = ref(null);
const currentPage = ref('tech');
const pages = ref(pageConfig);
const navHidden = ref(false);

const { switchToTech, switchToMonet, animateBubbles } = usePageTransition();
const { initHeaderAnimation, initBubbleAnimation } = useAnimations();

const handleExploreMode = (active) => {
  if (active) {
    gsap.to('.bubble-nav', { x: -120, opacity: 0, duration: 0.7, ease: 'power2.in',
      onComplete: () => { navHidden.value = true; }
    });
  } else {
    navHidden.value = false;
    gsap.fromTo('.bubble-nav',
      { x: -120, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
    );
  }
};

const handlePageChange = (pageId) => {
  if (currentPage.value === pageId) return;
  
  currentPage.value = pageId;
  
  animateBubbles(pageId);
  
  if (pageId === 'tech') {
    switchToTech();
  } else {
    switchToMonet();
  }
};

onMounted(() => {
  initHeaderAnimation();
  initBubbleAnimation();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Noto+Serif+SC:wght@900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.gallery-container {
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at 50% 22%, #4c3925 0%, #17120f 58%, #060505 100%);
  overflow: hidden;
  font-family: 'PingFang SC', serif;
  position: relative;
  transition: background 1s ease;
}

.gallery-container.tech-mode {
  background: #080808;
}
</style>
