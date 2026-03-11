export type StatKey = 'trust' | 'risk' | 'truth';

export interface CommChoice {
  id: string;
  label: string;
  advisory: string;
  reply: string;
  effects: Partial<Record<StatKey, number>>;
  obscured?: boolean;
}

export interface CommEvent {
  title: string;
  subtitle: string;
  message: string;
  choices: CommChoice[];
  delayMs?: number;
}

export interface SignalNodeLayout {
  id: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  event: CommEvent;
}

export interface ActiveTransmission {
  id: string;
  title: string;
  subtitle: string;
  dist: string;
  message: string;
  choices: CommChoice[];
  stage: 'choice' | 'response';
  selectedChoice?: CommChoice;
  reply?: string;
}

export interface EndingPanel {
  code: string;
  vector: string;
  title: string;
  summary: string;
  body: string;
}

export type SceneCueMode = 'quake' | 'storm' | 'fissure' | 'whiteout' | 'magnetic' | 'skyfold';

export interface SceneCue {
  mode: SceneCueMode;
  title: string;
  body: string;
}

export interface IntroBriefing {
  label: string;
  title: string;
  body: string;
  action: string;
}

export const FINAL_SIGNAL_ID = 'X-05';
export const INITIAL_ADVISORY_STATUS = 'WINDOW OPEN';
export const INITIAL_FIELD_REPLY = 'NIA-7 requesting first advisory.';
export const CLOSED_ADVISORY_STATUS = 'LINK CLOSED';
export const IDLE_FIELD_REPLY = 'Awaiting first signal.';
export const TECH_INTRO_SEQUENCE_CUE: SceneCue = {
  mode: 'quake',
  title: 'MOUNTAIN BREACH / AUTHORIZATION OPEN',
  body: '平静结束了。回响台已获准读取山脉全貌，第一道建议窗口正在形成。',
};
export const TECH_INTRO_BRIEFING: IntroBriefing[] = [
  {
    label: 'ROLE',
    title: '你不是进入者',
    body: '你坐在 ECHO DESK 前，通过失真的远程链路观察 WERISS。山里的人不是你，你也不会替她迈出任何一步。',
    action: '知道了，继续',
  },
  {
    label: 'ABILITY',
    title: '你唯一的能力是建议',
    body: '链路只会短暂打开几秒。你能做的只有在信息不完整时给出倾向，而不是命令。她会理解、误解，或者赌一把。',
    action: '继续授权',
  },
  {
    label: 'COST',
    title: '每一次建议都会改写局势',
    body: '信任、风险和真相会被你的话推向不同方向。等你看见整座山的时候，平静也会一起结束。',
    action: '接入第一道建议窗口',
  },
];

export const TECH_WINDOW_CUES: Record<string, SceneCue> = {
  'Ω-01': {
    mode: 'quake',
    title: 'RED RIDGE / SURFACE FAILURE',
    body: '整条山脊在逆风震动，裂隙正在把视野撕开。这是你第一次看到 WERISS 真正移动。',
  },
  'Ψ-02': {
    mode: 'storm',
    title: 'LUMINOUS FRONT / CROSSWIND WALL',
    body: '发光雾墙压向峡谷，链路噪声开始翻倍。你给出的建议会决定她是穿过去，还是保住呼吸。',
  },
  'Δ-03': {
    mode: 'fissure',
    title: 'BLUE FISSURE / DEPTH OPEN',
    body: '雪幕被整面撕裂，裂口下方不是黑暗，而是一层正在发亮的深度。这里不该只是山表。',
  },
  'Λ-04': {
    mode: 'magnetic',
    title: 'DOUBLE MAP / SIGNAL DRIFT',
    body: '地形开始复制自己，HUD 和脚下给出两套完全不同的路线。你必须替她选一套现实。',
  },
  'X-05': {
    mode: 'skyfold',
    title: 'SKYFOLD / FINAL WINDOW',
    body: '高空像幕布一样展开，全部山脊同时发亮。最后一次建议会决定她带回人，还是带回真相。',
  },
};

export const TECH_RESPONSE_CUES: Record<string, SceneCue> = {
  A1: {
    mode: 'quake',
    title: 'RIDGE STABILIZED',
    body: '镜头抬高后，裂纹从山体里蔓延出来。你让她先保住了视野，也让第一次震动有了轮廓。',
  },
  A2: {
    mode: 'quake',
    title: 'FORWARD PUSH',
    body: '山体换气声直接压进了链路。你把她推近了红脊，也把第一次风险抬高了。',
  },
  A3: {
    mode: 'whiteout',
    title: 'SENSOR CALIBRATION',
    body: '雪雾压暗了整个画面，只剩参数流和呼吸声。你让信息先于行动抵达。',
  },
  B1: {
    mode: 'storm',
    title: 'WALL BREACH',
    body: '她穿过了发光雾墙，镜头像被骤冷灼了一下。链路抖得更厉害，但前方被打开了。',
  },
  B2: {
    mode: 'storm',
    title: 'CONTROLLED RETREAT',
    body: '雾墙掠过山脊，风声盖住了脚步。你保住了链路稳定，但也看着原路被吞掉。',
  },
  B3: {
    mode: 'storm',
    title: 'COVER FOUND',
    body: '半塌石棚切开了风噪，镜头边缘仍在滴落雪水。你让她在灾变里争取到一次观察角度。',
  },
  C1: {
    mode: 'fissure',
    title: 'EDGE WALK',
    body: '裂口一直在镜头下方发蓝，你却命令她不去看。山体没有回答，但活路还在。',
  },
  C2: {
    mode: 'fissure',
    title: 'DESCENT',
    body: '镜头沉入裂口，地表被一道竖直光井取代。你不再只是看山脉，而是看山脉里面。',
  },
  C3: {
    mode: 'fissure',
    title: 'PROBE DROP',
    body: '探针掉进深度时，画面像被拉长了一瞬。数值在重复，说明下面不是正常空间。',
  },
  D1: {
    mode: 'magnetic',
    title: 'BLIND WALK',
    body: '她闭眼穿过噪声层，屏幕只剩几次短促闪烁。你让脚下地形暂时压过了错误地图。',
  },
  D2: {
    mode: 'magnetic',
    title: 'OLD MAP LOCK',
    body: '旧地图把镜头推向更亮的山脊，色差和雪花屏一起加重。真相更近，但现实更薄。',
  },
  D3: {
    mode: 'magnetic',
    title: 'OVERLAY KILLED',
    body: '辅助层熄灭后，画面黑了一瞬，只剩高度、心跳和你的链路还亮着。',
  },
  E1: {
    mode: 'whiteout',
    title: 'RETURN VECTOR',
    body: '风雪和天光一起压回镜头边缘。你放弃了最深处，把“活着回来”放到了真相前面。',
  },
  E2: {
    mode: 'skyfold',
    title: 'DEEP VECTOR',
    body: '高空彻底展开，山脊像一张反向星图。你让她继续往前，也接受了链路随时会断。',
  },
  E3: {
    mode: 'skyfold',
    title: 'HOLD VECTOR',
    body: '她停在回响最强的位置，画面像被整片天空按住。你没有撤离，也没有继续深入。',
  },
};

export const TECH_SIGNAL_LAYOUTS: SignalNodeLayout[] = [
  {
    id: 'Ω-01',
    position: { x: -7, y: 2, z: 8 },
    event: {
      title: 'RED RIDGE ASSESSMENT',
      subtitle: 'FIELD UNIT NIA-7',
      message: '如果你真的能看到我的画面，先回答我。<br/>左边山脊后面那片发红的东西，像云，但它在逆风移动。<br/><span class="hl">我应该先看清它，还是先避开？</span>',
      choices: [
        {
          id: 'A1',
          label: '退到高处，先确认整片视野',
          advisory: 'Gain altitude and confirm the ridge line before moving.',
          reply: '收到。我先上切到高处。红光不是一个点，像一整片贴着山走的云墙。',
          effects: { trust: 1, risk: -1 },
        },
        {
          id: 'A2',
          label: '继续靠近，我需要更多现场画面',
          advisory: 'Close the distance. I need a better look at the red front.',
          reply: '你是真敢开口。行，我再往前二十米。地面开始轻震，像有什么东西在山体里换气。',
          effects: { truth: 1, risk: 1 },
        },
        {
          id: 'A3',
          label: '原地停留，先校准传感器',
          advisory: 'Hold position and stabilize your sensors before moving.',
          reply: '校准完成。风场和温度都在跳，但频率很稳定。我把参数发回给你了。',
          effects: { trust: 1, truth: 1 },
        },
      ],
    },
  },
  {
    id: 'Ψ-02',
    position: { x: 0, y: 3.5, z: 1 },
    event: {
      title: 'MOVING CLOUD WALL',
      subtitle: 'FIELD UNIT NIA-7',
      message: '不是云。是一整面在发光的雾墙，从峡谷对面横着压过来了。<br/>我能冲过去，也能后撤保链路。<br/><span class="hl">你给我一个更值的选项。</span>',
      delayMs: 380,
      choices: [
        {
          id: 'B1',
          label: '穿过去，抢时间拿画面',
          advisory: 'Push through the wall before it closes. We need the view beyond it.',
          reply: '冲过去了。像从热水里穿到雪里，头盔差点掉线，但我看见前面有一条蓝色裂口。',
          effects: { truth: 2, risk: 2 },
          obscured: true,
        },
        {
          id: 'B2',
          label: '后撤，优先保住链路和体力',
          advisory: 'Fall back. Keep the link stable and save your oxygen.',
          reply: '明白。我退回岩脊后面了。链路稳多了，但那道雾墙已经把原来的路盖住。',
          effects: { trust: 1, risk: -1 },
        },
        {
          id: 'B3',
          label: '横向绕行，找掩体再观察',
          advisory: 'Traverse laterally. Find cover and keep visual on the front.',
          reply: '我找到一段半塌的石棚，风声小了很多。墙体还在移动，但速度比我想的慢。',
          effects: { trust: 1, truth: 1 },
        },
      ],
    },
  },
  {
    id: 'Δ-03',
    position: { x: 7, y: 2, z: 7 },
    event: {
      title: 'SHEAR BREAK',
      subtitle: 'FIELD UNIT NIA-7',
      message: '前面的雪坡塌了，不是普通雪崩，像整张白幕从山上被撕下来。<br/>裂口下面有一道发蓝的缝，我能下去。<br/><span class="hl">你要我绕，还是要我赌一把？</span>',
      choices: [
        {
          id: 'C1',
          label: '别下裂口，沿边缘继续走',
          advisory: 'Stay on the edge. Do not descend into the blue fissure.',
          reply: '收到。我贴边过去了。下面一直有像水一样的反光，但没有声音。',
          effects: { trust: 1, risk: -1 },
        },
        {
          id: 'C2',
          label: '下去看蓝光来源，抓住窗口',
          advisory: 'Descend into the fissure and identify the blue source.',
          reply: '我下来了。这里不是冰，是一层会发亮的碎石，像有人把星空砸碎铺在地上。',
          effects: { truth: 2, risk: 1 },
        },
        {
          id: 'C3',
          label: '先丢探针，再决定要不要下',
          advisory: 'Deploy a probe first. I want the depth and temperature before you move.',
          reply: '探针下去了。回传深度不对，它像一直在往下掉，但读数又在重复同一段。',
          effects: { trust: 1, truth: 1 },
        },
      ],
    },
  },
  {
    id: 'Λ-04',
    position: { x: -5, y: 3, z: 3 },
    event: {
      title: 'MAGNETIC STORM',
      subtitle: 'FIELD UNIT NIA-7',
      message: '链路在跳。我收到你的字了，但顺序全乱。<br/>指南针开始绕圈，头盔 HUD 出现了两套地形。<br/><span class="hl">我该信地图，还是信脚下？</span>',
      delayMs: 520,
      choices: [
        {
          id: 'D1',
          label: '闭眼十秒，只按坡度和风向走',
          advisory: 'Ignore the HUD. Count ten seconds and walk by slope and wind.',
          reply: '照做了。奇怪的是，一闭眼之后干扰反而小了。我像从一道缝里挤了出来。',
          effects: { trust: 2 },
        },
        {
          id: 'D2',
          label: '相信旧地图，向北切过去',
          advisory: 'Trust the old map and cut north before the storm thickens.',
          reply: '旧地图把我带到了一段断崖前。风很大，但我能看到更远的山脊全部亮起来了。',
          effects: { truth: 1, risk: 1 },
          obscured: true,
        },
        {
          id: 'D3',
          label: '关掉辅助系统，只保留心跳和高度',
          advisory: 'Kill the overlays. Keep only heart rate, altitude, and the link.',
          reply: '辅助全关了。现在只剩你的链路和我自己的呼吸声。至少方向感回来了。',
          effects: { trust: 1, risk: -1, truth: 1 },
        },
      ],
    },
  },
  {
    id: 'X-05',
    position: { x: 4, y: 5, z: 16 },
    event: {
      title: 'SKYFOLD DECISION',
      subtitle: 'FIELD UNIT NIA-7',
      message: '天不是在变暗，像有什么巨大的东西从高空展开了。<br/>所有山脊轮廓都亮起来，像一张地上的星图。<br/><span class="hl">如果我继续往前，链路会断；如果我现在回头，我可能带不走任何证据。</span>',
      delayMs: 760,
      choices: [
        {
          id: 'E1',
          label: '返回。把人带回来比答案重要',
          advisory: 'Return now. Bring yourself home before the sky closes.',
          reply: '收到。我转身了。你这次没让我看到最深处，但你把我从那里带了出来。',
          effects: { trust: 2, risk: -2 },
        },
        {
          id: 'E2',
          label: '继续。把真相带到最深处',
          advisory: 'Keep moving. I need you at the center before the link dies.',
          reply: '明白。我继续走。链路开始一段一段掉帧了，如果这次断了，就把我看到的记住。',
          effects: { truth: 2, risk: 2 },
          obscured: true,
        },
        {
          id: 'E3',
          label: '留在原地，保持链路直到回响结束',
          advisory: 'Hold position. Keep the link alive and let the mountain finish speaking.',
          reply: '那我就留在这里。山脊全亮了，像在对齐什么。别断线，我还有最后几句要发给你。',
          effects: { trust: 1, truth: 1 },
        },
      ],
    },
  },
];
