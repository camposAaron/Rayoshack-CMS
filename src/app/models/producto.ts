export interface Producto {
    nombre: string;
    marca: string;
    modelo: string;
    precio: string;
    galeria: Array<string>;
    portada: string;
    detalles: string;
    descripcion: string;
    categoria: Categoria;
    stock: boolean;
    promocion: object;
    comentario: Array<Comentario>,
    calificacion: string,
    descuento: number,
    estado: boolean;
}

interface Categoria{
    _id: string;
    nombre: string;
}

export interface Comentario{
        usuario : object;
        fecha : Date;
        msg : string;
        calificacion: number;
}