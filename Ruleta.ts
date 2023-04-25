import { JuegosCasino } from "./juegos";
export class Ruleta extends JuegosCasino{
    numeroElegido: number;
    color: string;
    esPar: boolean;
    numeroOutput: number;

    constructor(nombre: string, tipo: string, numero: number, color: string, esPar: boolean) {
        super(nombre, tipo);
        this.numeroElegido = numero;
        this.color = color;
        this.esPar = esPar;
        this.numeroOutput = 0;
    }

    aleatorio(hasta:number) {
        return Math.floor(Math.random() * hasta);
    }

    girarRuleta() {
        this.numeroOutput = this.aleatorio(32);
        console.log("Salio el numero", this.numeroOutput);
        
    }

    verResultado() {
        if(this.numeroElegido === this.numeroOutput) {
            console.log("Ganaste u$d1000");
        }
        let random = this.aleatorio(2);
        if(random === 0) {
            console.log("Salio el color negro");
            console.log("Salio par");
            
        } else if(random === 1) {
            console.log("Salio el color rojo")
            console.log("Salio impar");
        }
    }

    
};

let ruleta = new Ruleta("Milagros", "Fichas", 5, "negro", true);

ruleta.girarRuleta();
ruleta.verResultado();