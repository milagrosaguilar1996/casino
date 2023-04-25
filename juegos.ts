 export class JuegosCasino{
    private nombre:string;
    private tipo:string;

    
     constructor(nombre: string, tipo: string ){
            this.nombre=nombre;
            this.tipo=tipo;
        }
    
        public getInfo(){
            console.log(this);
        }
    };
