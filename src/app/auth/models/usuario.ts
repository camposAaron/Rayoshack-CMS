export interface Usuario {
    rol:    string;
    estado: boolean;
    google: boolean;
    nombre: string;
    email:  string;
    uid:    string;
}

export interface Auth {
    token : string
}

export interface Login {
    email : string,
    password : string
}

