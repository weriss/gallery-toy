<template>
  <div 
    class="gallery-container" 
    ref="container" 
    :class="{ 'tech-mode': currentPage === 'tech' }"
  >
    <!-- 泡泡导航 -->
    <BubbleNav 
      :pages="pages" 
      :currentPage="currentPage" 
      @page-change="handlePageChange"
    />

    <!-- 莫奈页面 -->
    <MonetView v-show="currentPage === 'monet'" />

    <!-- 科技页面 -->
    <TechView v-show="currentPage === 'tech'" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BubbleNav from '@/components/BubbleNav.vue';
import MonetView from '@/views/MonetView.vue';
import TechView from '@/views/TechView.vue';
import { pageConfig } from '@/config/constants';
import { usePageTransition } from '@/composables/usePageTransition';
import { useAnimations } from '@/composables/useAnimations';

const container = ref(null);
const currentPage = ref('monet');
const pages = ref(pageConfig);

const { switchToTech, switchToMonet, animateBubbles } = usePageTransition();
const { initHeaderAnimation, initBubbleAnimation } = useAnimations();

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
  background: radial-gradient(circle, #eef2f3 0%, #8e9eab 100%);
  overflow: hidden;
  font-family: 'PingFang SC', serif;
  position: relative;
  transition: background 1s ease;
}

.gallery-container.tech-mode {
  background: #080808;
}
</style>
