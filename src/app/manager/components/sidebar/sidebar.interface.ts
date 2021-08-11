export interface Menu {
    codigo?: string;
    nome: string;
    ativo?:boolean;
    escondido?: boolean;
    desabilitado?: boolean;
    icone?: Icone;
    link?: Link;
    submenus?: Menu[];
  }
  
  export interface Icone {
    nome: string;
    svgExterno?: boolean;
  }
  
  export interface Link {
    urlExterna?: string;
    routerLink?: string;
  }