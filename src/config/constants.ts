export interface PageConfig {
  id: string;
  name: string;
  icon: string;
  code: string;
  description: string;
  position: string;
}

export const pageConfig: PageConfig[] = [
  {
    id: 'monet',
    name: 'CG 档案馆',
    icon: 'ARC',
    code: 'SEAL 01',
    description: '主视觉断面与命运展签',
    position: '9%'
  },
  {
    id: 'tech',
    name: '回响链路',
    icon: 'ECHO',
    code: 'SEAL 02',
    description: '远程建议窗口与异响读数',
    position: '43%'
  }
];
