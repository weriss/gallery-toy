export interface PageConfig {
  id: string;
  name: string;
  icon: string;
  position: string;
}

export interface LayerAsset {
  url: string;
  depth: number;
  scale: number;
  name: string;
}

export const pageConfig: PageConfig[] = [
  { id: 'monet', name: '印象派', icon: '🎨', position: '5%' },
  { id: 'tech', name: '科技', icon: '⚡', position: '35%' }
];

export const layerAssets: LayerAsset[] = [
  { url: 'sky.png', depth: -2, scale: 6, name: 'sky' },
  { url: 'boy.png', depth: -0.5, scale: 4.5, name: 'boy' },
  { url: 'lady-removebg-preview.png', depth: 1, scale: 3.8, name: 'woman' },
  { url: 'grass-removebg-preview.png', depth: 2.5, scale: 5, name: 'grass' }
];
