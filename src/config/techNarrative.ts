export type StatKey = 'trust' | 'risk' | 'truth';

export interface CommChoice {
  id: string;
  label: string;
  advisory: string;
  reply: string;
  effects: Partial<Record<StatKey, number>>;
  obscured?: boolean;
}

export interface AnalysisClue {
  id: string;
  title: string;
  tag: string;
  summary: string;
  detail: string;
  whyItMatters: string;
  focusTarget?: AnalysisFocusTarget;
  sceneLabel: string;
  sceneAnchor: AnalysisSceneAnchor;
}

export interface AnalysisHypothesis {
  id: string;
  label: string;
  detail: string;
}

export type AnalysisFocusTarget = 'sun' | 'storm' | 'fissure' | 'magnetic' | 'skyfold';
export type AnalysisSceneAnchor =
  | 'red_sun'
  | 'ridge_vent'
  | 'echo_spine'
  | 'storm_front'
  | 'stone_shelter'
  | 'crosswind_gap'
  | 'fissure_probe'
  | 'fissure_core'
  | 'snow_loop'
  | 'hud_glitch'
  | 'old_map'
  | 'body_vector'
  | 'route_beacon'
  | 'sky_seam'
  | 'final_voice';

export interface AnalysisBriefCard {
  label: string;
  text: string;
}

export interface AnalysisScenario {
  displayTitle: string;
  question: string;
  briefing: string;
  briefCards: AnalysisBriefCard[];
  objective: string;
  howToPlay: string[];
  clues: AnalysisClue[];
  hypotheses: AnalysisHypothesis[];
  solutionId: string;
  solutionFeedback: string;
  failureFeedback: string;
  breakthroughTitle: string;
  breakthroughDetail: string;
}

export interface CommEvent {
  title: string;
  subtitle: string;
  message: string;
  choices: CommChoice[];
  analysis: AnalysisScenario;
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
    body: '高空像幕布一样展开，全部山脊同时发亮。最后一道窗口不会凭空制造命运，它只会替你们前面一路推出来的倾向签字。',
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
      analysis: {
        displayTitle: '红脊后面的红光，到底是什么',
        question: '你现在不是立刻指路，而是先判断这片红光究竟是天气、活物，还是设备误报。',
        briefing: '第一道窗口没有马上对你开放。红脊后的红光像天气，但它逆风移动，说明你先要判断它到底是“环境”还是“生物式回响”。',
        briefCards: [
          {
            label: '她看到了什么',
            text: '山脊后面有一大片发红的东西，看起来像云，但移动方向不对。',
          },
          {
            label: '现在危险在哪',
            text: '如果你把它当天气误判，NIA-7 可能会直接撞进它的推进边缘。',
          },
          {
            label: '你这一步先做什么',
            text: '先判断红光究竟是什么，再决定让她靠近、拉远还是原地不动。',
          },
        ],
        objective: '比对风场、热源和回声，确认这片红光真正受什么规则支配。',
        howToPlay: [
          '先点开线索卡，看看 NIA-7 回传了什么异常。',
          '注意每张卡最后一句“这说明什么”，它会帮你翻译专业词。',
          '读完至少两条线索后，再选择你认为最合理的解释。',
        ],
        clues: [
          {
            id: 'wind',
            title: '红光和风向是反着走的',
            tag: 'FIELD LOG',
            summary: '风往西吹，但红光却在往东移动。',
            detail: 'NIA-7 的风场记录显示阵风始终向西，速度稳定；只有红光边缘以恒定速度向东贴着山脊推进，说明它不受表层风向驱动。',
            whyItMatters: '这说明红光不像普通天气。真正的云雾通常会跟着风走。',
            focusTarget: 'sun',
            sceneLabel: '红日',
            sceneAnchor: 'red_sun',
          },
          {
            id: 'thermal',
            title: '发热的位置总贴着山体褶皱',
            tag: 'SENSOR',
            summary: '热像里最亮的地方没有飘开，而是在山体缝隙里反复亮起。',
            detail: '热像回传里最亮的区域没有在空中扩散，而是沿着山体裂隙周期性亮起，像是某种被地形束缚的脉冲。',
            whyItMatters: '这说明红光更像“山体里有什么在活动”，而不是天上的云层。',
            focusTarget: 'sun',
            sceneLabel: '热痕',
            sceneAnchor: 'ridge_vent',
          },
          {
            id: 'echo',
            title: '山里每十五秒会传出一次低鸣',
            tag: 'ARCHIVE',
            summary: '档案里记着一种每十五秒出现一次的低沉回声，它和红光移动节奏一致。',
            detail: '旧档案里记录过同频脉冲: 每十五秒一次，山体内部会传出低频换气声；红光每次位移都和这道脉冲同步。',
            whyItMatters: '这说明红光不是随机现象，它和山体内部某种规律活动绑在一起。',
            focusTarget: 'sun',
            sceneLabel: '回声点',
            sceneAnchor: 'echo_spine',
          },
        ],
        hypotheses: [
          {
            id: 'weather',
            label: '先把它当天气处理，让她顺着风躲开就行',
            detail: '如果这只是奇怪的红色云层，那最稳的做法就是别靠近，按风向避开。',
          },
          {
            id: 'surface',
            label: '这更像贴着山体移动的东西，先拉远看清全貌再说',
            detail: '如果红光不是云，而是沿着山体活动的异常层，那现在最重要的是先看清它怎么移动。',
          },
          {
            id: 'sensor',
            label: '先别管它，先当成设备误报，原地校准一轮再说',
            detail: '如果主要是传感器漂移，那没必要急着做判断，先让她停住校准。',
          },
        ],
        solutionId: 'surface',
        solutionFeedback: '你确认这不是普通天气，而是一层贴着山体移动的“呼吸层”。现在真正的问题不是跑不跑，而是先不要在贴脸距离做判断。',
        failureFeedback: '这个推断解释不了逆风位移和固定脉冲。链路噪声抬升了一格，你还需要更可靠的规则。',
        breakthroughTitle: '破局点 / 呼吸层不是云',
        breakthroughDetail: '红光由山体内部脉冲驱动，只会沿着地形褶皱推进。先获得高处视野，才有资格做第一次正式建议。',
      },
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
      analysis: {
        displayTitle: '雾墙逼近时，第三条路在哪里',
        question: '眼前看起来像只有“硬闯”或“后撤”两个选项，但你要先找出有没有更聪明的走法。',
        briefing: '雾墙已经接近，但真正的危险还不是“会不会撞上”，而是它会不会把链路和氧气一起掐断。你要先看懂它的移动规则。',
        briefCards: [
          {
            label: '她看到了什么',
            text: '一整面发光雾墙正在从峡谷对面横着压过来，像要把路整个堵死。',
          },
          {
            label: '现在危险在哪',
            text: '硬闯会迅速掉氧、掉链路，纯后撤又可能彻底失去观察机会。',
          },
          {
            label: '你这一步先做什么',
            text: '先判断有没有“既不硬闯也不白撤”的第三种路线。',
          },
        ],
        objective: '分析雾墙的推进方式，判断它最怕的是正面对抗、原地等待，还是横向切出视角。',
        howToPlay: [
          '先看地形、耗氧和速度三类线索。',
          '重点找“有没有安全观察位”，而不是急着选冲还是退。',
          '如果你能找出第三种路线，这关就算破局。',
        ],
        clues: [
          {
            id: 'shelter',
            title: '峡谷侧面有一段能挡风的石棚',
            tag: 'TERRAIN',
            summary: '石棚后的噪声显著下降，但雾墙边缘仍在可视范围内。',
            detail: '地形扫描显示峡谷侧壁有一段半塌石棚。进入其背风面后，链路噪声下降 42%，同时仍能看到雾墙横移速度。',
            whyItMatters: '这说明你不一定非要硬闯。地形本身可能就是解法的一部分。',
            focusTarget: 'storm',
            sceneLabel: '石棚',
            sceneAnchor: 'stone_shelter',
          },
          {
            id: 'oxygen',
            title: '直接冲进雾墙会让耗氧暴涨',
            tag: 'BIOMETRIC',
            summary: '正面穿越雾墙时，耗氧会在一分钟内猛升。',
            detail: '模拟路径显示，一旦直接穿入雾墙核心，NIA-7 的耗氧和心率会同时抬升，链路掉帧概率也随之翻倍。',
            whyItMatters: '这说明“正面硬闯”虽然快，但代价非常高，很可能还没看清就先掉线。',
            focusTarget: 'storm',
            sceneLabel: '雾墙',
            sceneAnchor: 'storm_front',
          },
          {
            id: 'velocity',
            title: '雾墙横着移动，其实没有看上去那么快',
            tag: 'MOTION',
            summary: '雾墙横移比你预估的慢，说明它有可借的观察窗口。',
            detail: '测速日志表明雾墙的横移速度低于体感压迫。它看起来像“整面压来”，其实移动存在迟滞，横向绕行能抢出观察时间。',
            whyItMatters: '这说明还有抢时间的空间。问题不是“逃不掉”，而是“能不能找到更好的观察角度”。',
            focusTarget: 'storm',
            sceneLabel: '扫频波',
            sceneAnchor: 'crosswind_gap',
          },
        ],
        hypotheses: [
          {
            id: 'rush',
            label: '别想太多了，趁它还没压过来直接冲过去',
            detail: '这种判断把“时间差”看得最重要，赌的是她能在彻底失控前抢过去。',
          },
          {
            id: 'retreat',
            label: '这段不值，直接撤，先把人和链路保住',
            detail: '如果这关没有更优解，那最稳的就是承认拿不到视角，立刻后撤。',
          },
          {
            id: 'lateral',
            label: '先别冲也别退，绕到侧面找掩体再看它怎么动',
            detail: '这种判断默认“第三条路”存在，重点是借地形压住风险，再继续观察。',
          },
        ],
        solutionId: 'lateral',
        solutionFeedback: '你抓到了这关的核心: 雾墙最可怕的是让人误以为只能二选一。真正的活路，是借地形切出第三种观察位。',
        failureFeedback: '这个判断不是完全错，但它解释不了速度迟滞和石棚背风面的稳定窗口。你还没抓到真正的破局点。',
        breakthroughTitle: '关键掩体 / 背风观察位',
        breakthroughDetail: '半塌石棚能压住风噪，让 NIA-7 在不硬闯的前提下持续观察雾墙，这才会解锁更值的正式建议。',
      },
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
      analysis: {
        displayTitle: '蓝色裂口下面，是更深还是在循环',
        question: '这道裂口最危险的地方，可能不是太深，而是它会把人困在重复空间里。',
        briefing: '蓝裂口看起来像“往下走就能得到真相”，但回传深度却在重复。你得先判断它是空间异常，还是只是过深难测。',
        briefCards: [
          {
            label: '她看到了什么',
            text: '雪坡裂开后，下面露出一道发蓝的缝，看起来像通往更深处的入口。',
          },
          {
            label: '现在危险在哪',
            text: '如果它不是单纯的“很深”，而是在重复空间，下去的人可能会被困住。',
          },
          {
            label: '你这一步先做什么',
            text: '先确认裂口是在继续往下延伸，还是其实在原地循环折返。',
          },
        ],
        objective: '利用深度、反光和探针回传，确认裂口下方到底在“延伸”，还是在“循环”。',
        howToPlay: [
          '先看探针、光线和雪片轨迹三种信息。',
          '不要被“往下走=更接近真相”这个直觉骗到。',
          '如果多个线索都在说“它在重复自己”，那就别把它当普通深井。',
        ],
        clues: [
          {
            id: 'probe',
            title: '探针一直在掉，但读数总回到同一段',
            tag: 'PROBE',
            summary: '探针一直在下坠，但读数周期性回到同一段高度。',
            detail: '回传数据里，探针的高度从未真正归零，却每隔数秒回到同一组深度区间，像是在重复穿过同一层空间切片。',
            whyItMatters: '这说明下面不只是“深”，而是很可能存在重复层。',
            focusTarget: 'fissure',
            sceneLabel: '探针',
            sceneAnchor: 'fissure_probe',
          },
          {
            id: 'glare',
            title: '蓝光像在侧壁之间来回弹',
            tag: 'VISUAL',
            summary: '蓝光不是从底部打上来，而是从侧壁之间互相反射。',
            detail: '增亮后的画面表明，蓝光并没有稳定光源点，而是沿着侧壁来回折返。这更像一个环状腔体，而不是单向深井。',
            whyItMatters: '这说明裂口内部结构不是直通到底，更像会把视野绕回来的封闭空间。',
            focusTarget: 'fissure',
            sceneLabel: '蓝裂口',
            sceneAnchor: 'fissure_core',
          },
          {
            id: 'snowfall',
            title: '同一片雪在画面里出现了两次',
            tag: 'MATERIAL',
            summary: '雪片掉入裂口后，在同一视野里出现了两次。',
            detail: '慢速回放里，一块雪幕残片落入裂口，五秒后又从更深处的同一画面边缘掠过，说明视野本身被折叠了。',
            whyItMatters: '这说明“往下”可能并没有真的离开原位，只是在同一个空间里循环。',
            focusTarget: 'fissure',
            sceneLabel: '雪幕残片',
            sceneAnchor: 'snow_loop',
          },
        ],
        hypotheses: [
          {
            id: 'pit',
            label: '它只是太深了，准备够了就能直接往下走',
            detail: '这个判断默认下面只是普通深井，异常都是因为太深、太亮、太难测。',
          },
          {
            id: 'loop',
            label: '这地方不只是深，而是在重复自己，直接下去会被困住',
            detail: '如果裂口内部在循环折返，那“下去看看”反而是最容易被套住的做法。',
          },
          {
            id: 'avalanche',
            label: '别被蓝光唬住了，当普通雪崩绕开就好',
            detail: '这种判断把异常都当成地质噪声，优先放弃分析，快速离开。',
          },
        ],
        solutionId: 'loop',
        solutionFeedback: '你看穿了蓝裂口真正的危险: 它诱导人把“更深”误判成“更接近真相”，其实先会困住人。',
        failureFeedback: '这个解释压不住重复深度和折返雪片。裂口最关键的不是亮，而是它在重复自己。',
        breakthroughTitle: '关键规则 / 深度在循环',
        breakthroughDetail: '裂口内部存在折返层，任何直接下行都可能进入重复切片。只有先确认边缘和探针结果，正式建议才有意义。',
      },
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
      analysis: {
        displayTitle: '两套地图打架时，什么才是真锚点',
        question: '这关不是选哪张地图更帅，而是先找出什么信息最不容易被磁暴篡改。',
        briefing: '这关最像《赌博默示录》式的陷阱: 两套地图都说得通，真正要分辨的是“谁在制造更高的信息税”。',
        briefCards: [
          {
            label: '她看到了什么',
            text: '指南针乱转，HUD 和脚下环境给出了两套完全不同的路线。',
          },
          {
            label: '现在危险在哪',
            text: '如果你信错了那套信息，NIA-7 可能会被直接带去断崖或错误山脊。',
          },
          {
            label: '你这一步先做什么',
            text: '先找出哪类信息最不容易被磁暴一起篡改，再决定该信什么。',
          },
        ],
        objective: '判断旧地图、实时 HUD 和身体感知三者里，哪一套才是最不容易被磁暴操纵的锚点。',
        howToPlay: [
          '先比较界面层、旧资料层和身体感知层。',
          '重点不是“谁更完整”，而是“谁更不容易一起撒谎”。',
          '如果某类信息在系统乱掉后还连续稳定，它就更可能是真锚点。',
        ],
        clues: [
          {
            id: 'hud',
            title: '界面上的字乱了，但心跳和海拔还连续',
            tag: 'INTERFACE',
            summary: '文字顺序乱了，但海拔和心跳数值仍连续。',
            detail: '磁暴打乱了 HUD 的文本与箭头顺序，可海拔和心跳曲线依旧连续，这说明“抽象指令层”被污染得比“原始身体数据层”更重。',
            whyItMatters: '这说明越“解释型”的信息越容易出错，越原始的数据反而更可信。',
            focusTarget: 'magnetic',
            sceneLabel: '信标',
            sceneAnchor: 'hud_glitch',
          },
          {
            id: 'oldmap',
            title: '旧地图能对上远山，却对不上脚下断崖',
            tag: 'ARCHIVE',
            summary: '旧地图能对应远山亮起的位置，却对不上眼前断崖。',
            detail: '旧地图在宏观方向上没完全失真，但它把 NIA-7 当前所在的断崖标成了可通行山脊，说明它可能只保留了远距结构。',
            whyItMatters: '这说明旧地图不是完全假，但也不能直接拿来走脚下这一步。',
            focusTarget: 'magnetic',
            sceneLabel: '旧地图',
            sceneAnchor: 'old_map',
          },
          {
            id: 'wind',
            title: '关掉辅助层后，坡度和横风会重新一致',
            tag: 'BODY',
            summary: '闭掉辅助后，坡度和横风反馈会重新稳定。',
            detail: '身体传感器记录显示，只要关闭覆盖层，脚下坡度与横风方向会立刻恢复一致，而界面层仍继续漂移。',
            whyItMatters: '这说明脚下坡度和风向是最底层的真实信息，比地图更不容易被带偏。',
            focusTarget: 'magnetic',
            sceneLabel: '体感向量',
            sceneAnchor: 'body_vector',
          },
        ],
        hypotheses: [
          {
            id: 'hud',
            label: '还是信实时 HUD 吧，再乱也比旧资料新',
            detail: '这种判断把“实时”看得最重要，觉得系统迟早会自己纠正过来。',
          },
          {
            id: 'oldmap',
            label: '别看现场乱成这样了，直接按旧地图走',
            detail: '如果你觉得旧档案比现场系统更可靠，那最简单的就是锁死旧地图。',
          },
          {
            id: 'body',
            label: '先信脚下、风向和她自己的身体感觉，地图都往后放',
            detail: '这种判断认为最低层的身体感知最难一起出错，其它图层只能做参考。',
          },
        ],
        solutionId: 'body',
        solutionFeedback: '你找到这场磁暴里的最低层现实了。地图可以漂，字可以乱，但脚下坡度和横风不会一起替你撒谎。',
        failureFeedback: '这个判断还停留在“选哪张图”，但真正要找的是不容易被图层污染的锚点。',
        breakthroughTitle: '锚点 / 身体层真值',
        breakthroughDetail: '只保留心跳、高度、坡度和横风，才能在两套地图都开始争夺解释权时保住现实。',
      },
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
      analysis: {
        displayTitle: '终局不是重开一题，而是给前面的路线签字',
        question: '你最后要做的，不是临时赌一把，而是承认前面一路积累下来的倾向到底是什么。',
        briefing: '终局不是“看不看见”的问题，而是“把前面一路积累的倾向兑现成哪种结局”。你要先认清 skyfold 到底在向谁要代价。',
        briefCards: [
          {
            label: '她看到了什么',
            text: '高空像幕布一样展开，整片山脊同时发亮，终局已经开始收口。',
          },
          {
            label: '现在危险在哪',
            text: '继续前进、立刻回头、原地维持都要付代价，已经没有“白拿答案”的走法。',
          },
          {
            label: '你这一步先做什么',
            text: '先承认前面一路把路线推向了哪里，再决定最后这次要为哪种代价签字。',
          },
        ],
        objective: '对照一路以来的链路代价，判断最后的破局点是抢最后一步、强行带人回、还是把人留在回响中心当锚点。',
        howToPlay: [
          '回头看你前面一路把信任、风险和真相推向了哪里。',
          '这关不会凭空给你标准答案，只会放大你之前的路线。',
          '想清楚你愿意接受哪种代价，再进入最后一次正式建议。',
        ],
        clues: [
          {
            id: 'route',
            title: '前四轮选择已经把路线推向一种倾向',
            tag: 'ROUTE',
            summary: '前四轮建议已经把路线推向某种稳定倾向。',
            detail: '链路回算显示，你的选择不是孤立按钮。前面累积下来的信任、风险和真相，已经把路线推成一条倾向明确的轨迹。',
            whyItMatters: '这说明终局不是新题，而是你前面一路选择的结果开始收束了。',
            focusTarget: 'skyfold',
            sceneLabel: '路径信标',
            sceneAnchor: 'route_beacon',
          },
          {
            id: 'sky',
            title: '继续前进、立刻回头、原地维持，代价各不相同',
            tag: 'EVENT',
            summary: 'skyfold 会吞掉链路，但不会立刻吞掉“停在原地的锚点”。',
            detail: '展开曲线显示，继续深入会最先断掉链路；立刻回撤能保住人；原地维持则会让链路变成一个短暂稳定的锚点。',
            whyItMatters: '这说明三种终局不是简单对错，而是三种不同代价。',
            focusTarget: 'skyfold',
            sceneLabel: '天幕裂缝',
            sceneAnchor: 'sky_seam',
          },
          {
            id: 'voice',
            title: '她最后问的不是路线，而是你愿意承认什么代价',
            tag: 'FIELD',
            summary: '她不是单纯在问方向，而是在问你最后愿意让哪种代价落地。',
            detail: '末段语音里，她没有再追问路线细节，而是把“证据”“回头”“不断线”摆成同级选项，说明终局的关键是选择哪种代价被承认。',
            whyItMatters: '这说明你最后要做的是表态，而不是继续拖时间等标准答案出现。',
            focusTarget: 'skyfold',
            sceneLabel: '末端回声',
            sceneAnchor: 'final_voice',
          },
        ],
        hypotheses: [
          {
            id: 'proof',
            label: '别管前面了，就看现在这一下，哪里最刺激就选哪里',
            detail: '这种想法把终局当成一张新考卷，觉得最后一手可以推翻前面全部积累。',
          },
          {
            id: 'vector',
            label: '先承认前面一路已经走成什么样了，再做最后签字',
            detail: '如果前面的选择已经把路线推向一种倾向，那最后这一手更像确认，而不是重开。',
          },
          {
            id: 'delay',
            label: '再拖一会儿，等天幕自己把标准答案亮出来',
            detail: '这种判断希望用继续观察来逃避最后裁决，赌环境会替你做选择。',
          },
        ],
        solutionId: 'vector',
        solutionFeedback: '你抓住了无限流终局最重要的东西: 最后一扇门不是给你重新考试，而是让你为前面的路线签字。',
        failureFeedback: '终局已经不会再给你一套全新的标准解了。真正重要的是认清，这里只会兑现你前面一路累积下来的倾向。',
        breakthroughTitle: '终局破局点 / 为路线签字',
        breakthroughDetail: 'skyfold 不制造命运，只放大代价。正式建议会根据你之前的路线倾向改写成不同版本。',
      },
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
