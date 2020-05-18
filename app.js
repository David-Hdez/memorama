document.addEventListener('DOMContentLoaded', () => {
    //tarjetasJuego
    const tarjetasJuego = [
        {
            nombre: 'carro',
            img: 'imagenes/carro.png'
        },
        {
            nombre: 'carro',
            img: 'imagenes/carro.png'
        },
        {
            nombre: 'control',
            img: 'imagenes/control.png'
        },
        {
            nombre: 'control',
            img: 'imagenes/control.png'
        },
        {
            nombre: 'hamburguesa',
            img: 'imagenes/hamburguesa.png'
        },
        {
            nombre: 'hamburguesa',
            img: 'imagenes/hamburguesa.png'
        },
        {
            nombre: 'laptop',
            img: 'imagenes/laptop.png'
        },
        {
            nombre: 'laptop',
            img: 'imagenes/laptop.png'
        },
        {
            nombre: 'palomitas',
            img: 'imagenes/palomitas.png'
        },
        {
            nombre: 'palomitas',
            img: 'imagenes/palomitas.png'
        },
        {
            nombre: 'pizza',
            img: 'imagenes/pizza.png'
        },
        {
            nombre: 'pizza',
            img: 'imagenes/pizza.png'
        }
    ]

    tarjetasJuego.sort(()=>Math.random());//Obtener las tarjetas aleatoriamente

    const puntos=document.querySelector('#puntuaje')
    const tablero=document.querySelector('.tablero');
    var tarjetasElegidas=[];
    var tarjetasElegidasID=[];
    var tarjetasGanadas=[];

    //Creando tablero
    function crearTablero(){        
        for (let index = 0; index < tarjetasJuego.length; index++) {         
            var tarjeta=document.createElement('img');
            tarjeta.setAttribute('src','imagenes/oculto.png');
            tarjeta.setAttribute('data-id',index);
            tarjeta.addEventListener('click',voltearTarjeta);
            tablero.appendChild(tarjeta);
        }
    }

    //Coinciden las tarjetas 
    function checkCoincide(){
        var tarjetas=document.querySelectorAll('img');
        const opcionUnoId=tarjetasElegidasID[0];
        const opcionDosId=tarjetasElegidasID[1];
        debugger;
        
        if (tarjetasElegidasID[0]==tarjetasElegidasID[1]) {            
            swal("¡Haz encontrado su par!");
            tarjetas[opcionUnoId].setAttribute('src','imagenes/blanco.jpg');
            tarjetas[opcionDosId].setAttribute('src','imagenes/blanco.jpg');
            tarjetasGanadas.push(tarjetasElegidas);
        }else{
            tarjetas[opcionUnoId].setAttribute('src','imagenes/oculto.png');
            tarjetas[opcionDosId].setAttribute('src','imagenes/oculto.png');            
        }

        tarjetasElegidas=[];
        tarjetasElegidasID=[];
        puntos.textContent=tarjetasGanadas.length;

        if (tarjetasGanadas==tarjetasJuego/2) {
            puntos.textContent='¡Haz encontrado todas las tarjetas!';
        }
    }

    //Voltear tarjetasJuego
    function voltearTarjeta(){
        var idTarjeta=this.getAttribute('data-id');
        tarjetasElegidas.push(tarjetasJuego[idTarjeta].name);
        tarjetasElegidasID.push(idTarjeta);
        this.setAttribute('src',tarjetasJuego[idTarjeta].img);

        //Verifica si coinciden las tarjetasJuego
        if (tarjetasElegidas.length==2) {
            setTimeout(checkCoincide,500);
        }
    }

    crearTablero();
})
