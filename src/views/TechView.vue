<template>
  <div class="page-tech">
    <!-- 扫描线效果 -->
    <div class="scanline-overlay"></div>
    
    <!-- 背景汉字 -->
    <div class="bg-kanji">
      <span data-text="未">未</span>
    </div>

    <!-- HUD 角框 -->
    <div class="hud-corner tl"></div>
    <div class="hud-corner tr"></div>
    <div class="hud-corner bl"></div>
    <div class="hud-corner br"></div>

    <!-- HUD 状态 -->
    <div class="hud-status">
      <div><span class="status-dot"></span>SYSTEM ONLINE</div>
      <div>{{ currentDate }}</div>
      <div>COORD: 35.6762°N</div>
    </div>

    <!-- 主内容 -->
    <div class="tech-content">
      <div class="tech-label">// DIGITAL GALLERY</div>
      <h1 class="tech-title" data-text="WERISS">WERISS</h1>
      <div class="tech-tagline">
        <span class="tag-line"></span>
        CREATIVE TECHNOLOGIST × VISUAL DESIGNER
      </div>
      
      <div class="tech-description">
        探索数字艺术与传统艺术的边界<br/>
        在像素与笔触之间寻找平衡
      </div>

      <button class="tech-btn" @click="handleExplore">
        <span class="btn-bracket">[</span>
        EXPLORE
        <span class="btn-bracket">]</span>
      </button>
    </div>

    <!-- 网格背景 -->
    <div class="grid-bg"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import gsap from 'gsap';

const currentDate = computed(() => {
  const now = new Date();
  return `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
});

const handleExplore = () => {
  gsap.timeline()
    .to('.tech-title', {
      textShadow: '0 0 20px rgba(204, 26, 26, 0.8), 0 0 40px rgba(204, 26, 26, 0.4)',
      duration: 0.3,
      ease: "power2.out"
    })
    .to('.tech-title', {
      textShadow: '0 0 10px rgba(204, 26, 26, 0.3)',
      duration: 0.5,
      ease: "power2.in"
    });
    
  gsap.to('.tech-btn', {
    scale: 0.95,
    duration: 0.1,
    ease: "power1.out",
    yoyo: true,
    repeat: 1
  });
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Noto+Serif+SC:wght@900&display=swap');

.page-tech {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: 'Space Mono', 'Courier New', monospace;
  background: #080808;
  color: #f0e040;
}

.scanline-overlay {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.15) 2px,
    rgba(0,0,0,0.15) 4px
  );
  pointer-events: none;
  z-index: 100;
}

.bg-kanji {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 4vw;
  pointer-events: none;
  user-select: none;
  z-index: 1;
}

.bg-kanji span {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(200px, 40vw, 560px);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(240, 224, 64, 0.08);
  letter-spacing: -0.05em;
  line-height: 1;
  transition: transform 0.1s ease-out;
}

.hud-corner {
  position: absolute;
  width: 60px;
  height: 60px;
  pointer-events: none;
  z-index: 10;
}

.hud-corner::before,
.hud-corner::after {
  content: '';
  position: absolute;
  background: #f0e040;
}

.hud-corner::before { width: 2px; height: 20px; }
.hud-corner::after  { width: 20px; height: 2px; }

.hud-corner.tl { top: 40px; left: 40px; }
.hud-corner.tl::before { top: 0; left: 0; }
.hud-corner.tl::after  { top: 0; left: 0; }

.hud-corner.tr { top: 40px; right: 40px; }
.hud-corner.tr::before { top: 0; right: 0; }
.hud-corner.tr::after  { top: 0; right: 0; }

.hud-corner.bl { bottom: 40px; left: 40px; }
.hud-corner.bl::before { bottom: 0; left: 0; }
.hud-corner.bl::after  { bottom: 0; left: 0; }

.hud-corner.br { bottom: 40px; right: 40px; }
.hud-corner.br::before { bottom: 0; right: 0; }
.hud-corner.br::after  { bottom: 0; right: 0; }

.hud-status {
  position: absolute;
  top: 48px;
  right: 80px;
  font-size: 10px;
  color: rgba(240, 224, 64, 0.45);
  line-height: 1.8;
  text-align: right;
  letter-spacing: 0.08em;
  z-index: 10;
}

.status-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f0e040;
  margin-right: 6px;
  animation: statusBlink 2s infinite;
}

@keyframes statusBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.tech-content {
  position: relative;
  z-index: 10;
  padding: 0 8vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tech-label {
  font-size: 11px;
  letter-spacing: 0.3em;
  color: rgba(240, 224, 64, 0.5);
  margin-bottom: 16px;
  text-transform: uppercase;
}

.tech-title {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(64px, 10vw, 140px);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.02em;
  color: #f0e040;
  position: relative;
  text-shadow: 0 0 10px rgba(204, 26, 26, 0.3);
  margin-bottom: 24px;
}

.tech-title::before,
.tech-title::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: 900;
  line-height: inherit;
  letter-spacing: inherit;
}

.tech-title::before {
  color: #cc1a1a;
  clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
  animation: glitch-1 4s infinite;
}

.tech-title::after {
  color: #40d0f0;
  clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
  animation: glitch-2 4s infinite;
}

@keyframes glitch-1 {
  0%, 90%, 100% { transform: translate(0); }
  91% { transform: translate(-3px, 2px); }
  93% { transform: translate(2px, -1px); }
  95% { transform: translate(-2px, 1px); }
}

@keyframes glitch-2 {
  0%, 90%, 100% { transform: translate(0); }
  92% { transform: translate(3px, -2px); }
  94% { transform: translate(-2px, 2px); }
  96% { transform: translate(2px, -1px); }
}

.tech-tagline {
  font-size: 13px;
  letter-spacing: 0.15em;
  color: rgba(240, 224, 64, 0.7);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.tag-line {
  width: 30px;
  height: 2px;
  background: #cc1a1a;
}

.tech-description {
  font-size: 16px;
  line-height: 1.8;
  color: rgba(240, 224, 64, 0.6);
  max-width: 500px;
  margin-bottom: 40px;
}

.tech-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 32px;
  background: transparent;
  border: 2px solid #f0e040;
  color: #f0e040;
  font-family: 'Space Mono', monospace;
  font-size: 14px;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: fit-content;
}

.tech-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #f0e040;
  transition: left 0.3s ease;
  z-index: -1;
}

.tech-btn:hover::before {
  left: 0;
}

.tech-btn:hover {
  color: #080808;
  box-shadow: 0 0 20px rgba(240, 224, 64, 0.4);
}

.btn-bracket {
  font-weight: bold;
  color: #cc1a1a;
  transition: color 0.3s ease;
}

.tech-btn:hover .btn-bracket {
  color: #080808;
}

.grid-bg {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(240, 224, 64, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(240, 224, 64, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}
</style>
