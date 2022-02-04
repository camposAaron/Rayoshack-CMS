export interface Producto {
    nombre: string;
    marca: string;
    modelo: string;
    precio: string;
    galeria: Array<string>;
    portada: string;
    detalles: string;
    descripcion: string;
    categoria: object;
    stock: boolean;
    promocion: object;
    comentario: Array<Comentario>,
    calificacion: string,
    estado: boolean;
}


export interface Comentario{
        usuario : object;
        fecha : Date;
        msg : string;
        calificacion: number;
}