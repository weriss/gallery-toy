<template>
  <nav
    class="bubble-nav"
    :class="{ 'is-collapsed': isCollapsed }"
    aria-label="Section navigation"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focusin="handleMouseEnter"
    @focusout="handleMouseLeave"
  >
    <div
      class="nav-toggle"
      :aria-hidden="(!isCollapsed).toString()"
    >
      <span class="nav-toggle-copy">{{ isCollapsed ? 'OPEN' : 'RITE' }}</span>
    </div>
    <div class="nav-shell"></div>
    <div class="nav-axis">
      <span class="axis-label">RITUAL INDEX</span>
    </div>

    <div
      v-for="(page, index) in pages"
      :key="page.id"
      class="bubble-item"
      :class="{ active: currentPage === page.id }"
      :style="{ top: page.position }"
      @click="$emit('page-change', page.id)"
    >
      <div class="item-connector" aria-hidden="true"></div>
      <div class="bubble">
        <div class="bubble-crest" aria-hidden="true">
          <span class="crest-core"></span>
          <span class="crest-ring"></span>
        </div>
        <div class="bubble-copy">
          <div class="bubble-code">{{ page.code }}</div>
          <div class="bubble-label">{{ page.name }}</div>
          <div class="bubble-description">{{ page.description }}</div>
        </div>
        <div class="bubble-icon">{{ page.icon }}</div>
        <div class="bubble-index">0{{ index + 1 }}</div>
        <div class="bubble-glow"></div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onBeforeUnmount, defineProps, defineEmits } from 'vue';

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

const isCollapsed = ref(true);
let collapseTimer = null;

const clearCollapseTimer = () => {
  if (collapseTimer) {
    window.clearTimeout(collapseTimer);
    collapseTimer = null;
  }
};

const handleMouseEnter = () => {
  clearCollapseTimer();
  isCollapsed.value = false;
};

const handleMouseLeave = () => {
  clearCollapseTimer();
  collapseTimer = window.setTimeout(() => {
    isCollapsed.value = true;
  }, 900);
};

onBeforeUnmount(() => {
  clearCollapseTimer();
});
</script>

<style scoped>
.bubble-nav {
  position: fixed;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 274px;
  height: 460px;
  z-index: 9999;
  transition: width 0.52s cubic-bezier(0.22, 1, 0.36, 1);
  overflow: visible;
}

.nav-toggle {
  position: absolute;
  left: 0;
  top: 50%;
  width: 42px;
  height: 132px;
  transform: translateY(-50%);
  border: 1px solid rgba(185, 151, 106, 0.38);
  border-left: none;
  background:
    linear-gradient(180deg, rgba(48, 34, 24, 0.96), rgba(10, 9, 8, 0.96));
  color: rgba(220, 192, 147, 0.72);
  clip-path: polygon(0 10px, 100% 0, 100% 100%, 0 calc(100% - 10px));
  box-shadow:
    0 16px 30px rgba(0, 0, 0, 0.42),
    inset 0 0 0 1px rgba(240, 222, 192, 0.05);
  transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.nav-toggle:hover {
  transform: translateY(-50%) translateX(2px);
  border-color: rgba(224, 194, 144, 0.58);
  color: rgba(250, 231, 196, 0.86);
}

.nav-toggle-copy {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  letter-spacing: 0.18em;
  line-height: 1;
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-align: center;
}

.nav-shell {
  position: absolute;
  inset: 0 0 0 42px;
  pointer-events: none;
  border-left: 1px solid rgba(207, 168, 111, 0.35);
  background:
    radial-gradient(circle at 30px 14%, rgba(158, 26, 22, 0.14), transparent 18%),
    linear-gradient(180deg, rgba(68, 49, 33, 0.08) 0%, rgba(0, 0, 0, 0) 28%, rgba(68, 49, 33, 0.1) 100%);
  box-shadow: inset 18px 0 40px rgba(0, 0, 0, 0.45);
  transition: opacity 0.32s ease, transform 0.52s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-axis {
  position: absolute;
  left: 66px;
  top: 36px;
  bottom: 36px;
  width: 26px;
  pointer-events: none;
  transition: opacity 0.32s ease, transform 0.52s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-axis::before,
.nav-axis::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-axis::before {
  top: 0;
  bottom: 0;
  width: 1px;
  background:
    linear-gradient(180deg, rgba(219, 192, 144, 0) 0%, rgba(219, 192, 144, 0.7) 12%, rgba(127, 95, 61, 0.85) 50%, rgba(219, 192, 144, 0.65) 88%, rgba(219, 192, 144, 0) 100%);
  box-shadow: 0 0 18px rgba(126, 34, 24, 0.22);
}

.nav-axis::after {
  top: 14px;
  width: 13px;
  height: calc(100% - 28px);
  border-top: 1px solid rgba(191, 148, 92, 0.3);
  border-bottom: 1px solid rgba(191, 148, 92, 0.3);
  opacity: 0.7;
}

.axis-label {
  position: absolute;
  top: -8px;
  left: -12px;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: left top;
  font-size: 10px;
  letter-spacing: 0.38em;
  color: rgba(204, 172, 123, 0.48);
  white-space: nowrap;
}

.bubble-item {
  position: absolute;
  left: 42px;
  width: calc(100% - 42px);
  cursor: pointer;
  transition: transform 0.52s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.28s ease, filter 0.36s ease;
  z-index: 1;
}

.bubble-item:hover {
  transform: translateX(4px);
}

.bubble-item.active {
  z-index: 2;
}

.item-connector {
  position: absolute;
  left: 26px;
  top: 50%;
  width: 44px;
  height: 1px;
  transform: translateY(-50%);
  background: linear-gradient(90deg, rgba(207, 168, 111, 0.65), rgba(207, 168, 111, 0));
}

.item-connector::after {
  content: '';
  position: absolute;
  right: 6px;
  top: 50%;
  width: 7px;
  height: 7px;
  border: 1px solid rgba(207, 168, 111, 0.6);
  background: rgba(16, 11, 8, 0.86);
  transform: translateY(-50%) rotate(45deg);
}

.bubble {
  position: relative;
  margin-left: 64px;
  width: 126px;
  min-height: 92px;
  padding: 14px 16px 14px 16px;
  background:
    linear-gradient(180deg, rgba(54, 38, 26, 0.78), rgba(12, 9, 8, 0.94)),
    radial-gradient(circle at 18% 18%, rgba(165, 28, 24, 0.18), transparent 28%);
  border: 1px solid rgba(183, 149, 100, 0.42);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  clip-path: polygon(0 10px, 10px 0, calc(100% - 18px) 0, 100% 18px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 18px 100%, 0 calc(100% - 18px));
  transition:
    transform 0.52s cubic-bezier(0.22, 1, 0.36, 1),
    width 0.52s cubic-bezier(0.22, 1, 0.36, 1),
    min-height 0.52s cubic-bezier(0.22, 1, 0.36, 1),
    padding 0.52s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease,
    opacity 0.28s ease;
  box-shadow:
    0 18px 30px rgba(0, 0, 0, 0.44),
    inset 0 0 0 1px rgba(242, 221, 189, 0.05),
    inset 0 0 28px rgba(0, 0, 0, 0.32);
}

.bubble::before,
.bubble::after {
  content: '';
  position: absolute;
  pointer-events: none;
}

.bubble::before {
  inset: 8px;
  border: 1px solid rgba(186, 152, 102, 0.16);
  clip-path: polygon(0 8px, 8px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 14px 100%, 0 calc(100% - 14px));
}

.bubble::after {
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(213, 180, 131, 0.7), rgba(0, 0, 0, 0));
  opacity: 0.8;
}

.bubble-icon {
  position: absolute;
  right: 14px;
  top: 11px;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: rgba(210, 180, 132, 0.5);
  transition: opacity 0.35s ease, transform 0.52s cubic-bezier(0.22, 1, 0.36, 1);
}

.bubble-crest {
  position: absolute;
  left: -18px;
  top: 50%;
  width: 34px;
  height: 34px;
  transform: translateY(-50%) rotate(45deg);
  border: 1px solid rgba(192, 152, 95, 0.65);
  background:
    linear-gradient(180deg, rgba(52, 38, 23, 0.98), rgba(12, 10, 8, 0.98));
  box-shadow:
    0 0 0 6px rgba(10, 8, 7, 0.85),
    0 0 26px rgba(133, 33, 22, 0.18);
  transition: transform 0.52s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
}

.crest-core,
.crest-ring {
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}

.crest-core {
  width: 10px;
  height: 10px;
  border: 1px solid rgba(233, 213, 185, 0.68);
  background: radial-gradient(circle, rgba(209, 38, 30, 0.5), rgba(80, 18, 12, 0.05) 72%);
}

.crest-ring {
  width: 18px;
  height: 18px;
  border: 1px solid rgba(174, 143, 97, 0.34);
  border-radius: 50%;
}

.bubble-copy {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 6px;
  padding-right: 24px;
  transition: padding-right 0.52s cubic-bezier(0.22, 1, 0.36, 1);
}

.bubble-code {
  font-size: 10px;
  letter-spacing: 0.24em;
  color: rgba(191, 158, 113, 0.62);
  transition: color 0.35s ease;
}

.bubble-label {
  font-size: 16px;
  line-height: 1.15;
  letter-spacing: 0.08em;
  color: #f1dfba;
  text-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
  transition: color 0.35s ease, font-size 0.52s cubic-bezier(0.22, 1, 0.36, 1);
}

.bubble-description {
  max-width: 136px;
  max-height: 0;
  overflow: hidden;
  font-size: 10px;
  line-height: 1.55;
  letter-spacing: 0.12em;
  color: rgba(221, 206, 182, 0.58);
  opacity: 0;
  transform: translateY(-4px);
  transition:
    max-height 0.45s ease,
    opacity 0.28s ease,
    transform 0.45s ease,
    color 0.35s ease;
}

.bubble-index {
  position: absolute;
  right: 14px;
  bottom: 12px;
  font-size: 22px;
  line-height: 1;
  color: rgba(94, 75, 56, 0.44);
  font-family: 'Times New Roman', serif;
  transition: font-size 0.52s cubic-bezier(0.22, 1, 0.36, 1), color 0.35s ease;
}

.bubble-glow {
  position: absolute;
  inset: -18px -24px;
  background: radial-gradient(circle at 30% 50%, rgba(160, 26, 18, 0.18), transparent 44%);
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.bubble-item:hover .bubble {
  transform: translateX(1px);
  border-color: rgba(215, 183, 132, 0.62);
  box-shadow:
    0 24px 38px rgba(0, 0, 0, 0.52),
    0 0 24px rgba(127, 28, 21, 0.16),
    inset 0 0 0 1px rgba(242, 221, 189, 0.08);
}

.bubble-item:not(.active) .bubble {
  opacity: 0.88;
}

.bubble-item:not(.active) .bubble-label {
  color: rgba(232, 216, 189, 0.78);
}

.bubble-item.active .bubble {
  width: 156px;
  min-height: 116px;
  padding: 16px 18px 16px 18px;
}

.bubble-item.active .bubble-copy {
  padding-right: 34px;
}

.bubble-item.active .bubble-label {
  font-size: 20px;
}

.bubble-item.active .bubble-description {
  max-height: 56px;
  opacity: 1;
  transform: translateY(0);
}

.bubble-item.active .bubble-icon {
  transform: translateX(0);
  opacity: 1;
}

.bubble-item:not(.active) .bubble-icon {
  transform: translateX(-4px);
  opacity: 0.72;
}

.bubble-item.active .bubble-index {
  font-size: 28px;
}

.bubble-item.active .bubble-crest {
  transform: translateY(-50%) rotate(45deg) scale(1.08);
}

.bubble-item:hover .bubble-glow {
  opacity: 1;
}

.bubble-item.active .item-connector {
  background: linear-gradient(90deg, rgba(228, 198, 146, 0.95), rgba(134, 40, 27, 0.18));
}

.bubble-item.active .item-connector::after {
  border-color: rgba(228, 198, 146, 0.9);
  box-shadow: 0 0 10px rgba(171, 43, 27, 0.32);
}

.bubble-item.active .bubble {
  background:
    linear-gradient(180deg, rgba(74, 49, 30, 0.9), rgba(12, 9, 8, 0.98)),
    radial-gradient(circle at 18% 18%, rgba(176, 28, 22, 0.24), transparent 28%);
  border-color: rgba(231, 202, 151, 0.72);
  box-shadow:
    0 24px 42px rgba(0, 0, 0, 0.56),
    0 0 28px rgba(145, 37, 26, 0.22),
    inset 0 0 0 1px rgba(253, 231, 198, 0.12),
    inset 0 0 30px rgba(113, 25, 18, 0.18);
}

.bubble-item.active .bubble-label {
  color: #ffefc7;
}

.bubble-item.active .bubble-description {
  color: rgba(241, 226, 201, 0.74);
}

.bubble-item.active .bubble-glow {
  opacity: 1;
  animation: sealPulse 2.6s ease-in-out infinite;
}

.bubble-item.active .crest-core {
  background: radial-gradient(circle, rgba(255, 111, 82, 0.75), rgba(92, 18, 14, 0.1) 72%);
  box-shadow: 0 0 16px rgba(173, 32, 24, 0.34);
}

@keyframes sealPulse {
  0%, 100% {
    opacity: 0.56;
    transform: scale(0.98);
  }
  50% {
    opacity: 0.92;
    transform: scale(1.04);
  }
}

.bubble-nav.is-collapsed {
  width: 42px;
  overflow: hidden;
}

.bubble-nav.is-collapsed .nav-shell,
.bubble-nav.is-collapsed .nav-axis,
.bubble-nav.is-collapsed .bubble-item {
  opacity: 0;
  visibility: hidden;
  transform: translateX(-18px);
}

.bubble-nav.is-collapsed .bubble-item {
  filter: blur(2px);
  pointer-events: none;
}

.bubble-nav.is-collapsed .nav-toggle {
  border-color: rgba(224, 194, 144, 0.62);
  color: rgba(250, 231, 196, 0.9);
}

@media (max-width: 900px) {
  .bubble-nav {
    left: 12px;
    width: 248px;
    height: 420px;
  }

  .bubble {
    width: 112px;
    min-height: 88px;
    margin-left: 58px;
    padding: 13px 14px 13px 14px;
  }

  .bubble-item.active .bubble {
    width: 138px;
    min-height: 108px;
  }

  .bubble-label {
    font-size: 15px;
  }

  .bubble-description {
    max-width: 118px;
    font-size: 10px;
  }
}

@media (max-width: 640px) {
  .bubble-nav {
    left: 8px;
    width: 210px;
    height: 360px;
  }

  .nav-toggle {
    width: 36px;
    height: 112px;
  }

  .nav-axis {
    left: 50px;
  }

  .item-connector {
    left: 18px;
    width: 32px;
  }

  .bubble {
    width: 96px;
    min-height: 82px;
    margin-left: 48px;
    padding: 12px 12px 12px 12px;
  }

  .bubble-item.active .bubble {
    width: 118px;
    min-height: 98px;
  }

  .bubble-crest {
    left: -16px;
    width: 32px;
    height: 32px;
  }

  .bubble-copy {
    padding-right: 18px;
  }

  .bubble-label {
    font-size: 14px;
  }

  .bubble-index {
    font-size: 18px;
  }

  .bubble-nav.is-collapsed {
    width: 36px;
  }
}
</style>
