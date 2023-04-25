
import {JuegosCasino}from "./juegos"

export class Casino {
private nombre: string;
private categoria:string;
private juegosCasinoPalmeras:[];

    
constructor(nombre:string,categoria:string,){
this.nombre=nombre;
this.categoria=categoria;
this.juegosCasinoPalmeras=[];
}

public getInfo(): Casino{
    console.log(this);
    return this;
}

public setCasinoJuego(juego){
    this.juegosCasinoPalmeras.push();
}   
};
