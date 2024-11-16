export interface ObjetivoResponse {
    success: boolean;
    message: string;
    data: Objetivo;
  }
  
  export interface Objetivo {
    _id: string;
    nombre: string;
    descripcion: string;
    fechaFinalizacion: string;
    fechaCreacion: string;
    prioridad: string;
    categoria: string;
    completado: boolean;
    rememberDays: string[];
    subObjetivos: SubObjetivo[];
    usuarioId: string;
  }
  
  export interface SubObjetivo {
    titulo: string;
    descripcion: string;
  }