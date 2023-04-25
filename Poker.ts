import { JuegosCasino } from "./juegos";

class Poker extends JuegosCasino{
    cartas:number[]

    constructor(nombre: string, tipo: string) {
        super(nombre, tipo);
        this.cartas = [];
    }

    aleatorio(hasta:number) {
        return Math.floor(Math.random() * hasta);
    }

    repartirCartas(){
        (this.cartas.push(this.aleatorio(12 + 1)));
        (this.cartas.push(this.aleatorio(12 + 1)));
        console.log("Tus cartas son:", this.cartas);
        
    }

    verResultado(){
        let resultado = this.aleatorio(2);
        if(resultado === 0) {
            console.log("Ganaste!!");
            
        } else if(resultado === 1) {
            console.log("Perdiste!!");
        }
    }
}

let nuevo = new Poker("Milagros", "Cartas");

nuevo.repartirCartas();
nuevo.verResultado();