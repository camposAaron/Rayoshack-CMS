export interface Promocion {
    _id: string,
    titulo : String;
    descripcion: String;
    banner: String;
    descuento: Number;
    fechaInicio: Date;
    fechaFinal: Date;
    estado: Boolean;
}