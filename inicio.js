link = () =>{
    window.location.href="/presentacion.html"};

Swal.fire({
    title: 'BIENVENIDO ES LA PRIMERA VEZ QUE INGRESA',
    color: 'black',
    iconHtml: '<img src=/imagenes/world-2747353.png  width=800px height=800px > ',
    confirmButtonColor:'black',
    confirmButtonText: 'SI',
    showDenyButton:true,
    denyButtonColor:'black',
    denyButtonText:'Ya ingrese mi informacion ',
    denyButtonClass: "bingreso",
    allowOutsideClick:false
}).then((result)=>{
    if(result.isConfirmed){
        let form = document.getElementById('formulario');

        form.addEventListener('submit', () => {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let pais = document.getElementById("pais").value;
        let edad = document.getElementById("edad").value;
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('apellido', apellido);
        localStorage.setItem('pais', pais);
        localStorage.setItem('edad', edad);
        localStorage.setItem("usuario", usarioObjeto);
        })
    }else if(result.isDenied){Swal.fire({
        title: 'BIENVENIDO A TRIVIA MUNDIAL!!JUGAMOS?',
        color: 'black',
        iconHtml: '<img src=/imagenes/world-2747353.png  width=800px height=800px > ',
        confirmButtonColor:'black',
        confirmButtonText: 'Juguemos',
        showDenyButton:true,
        denyButtonColor:'black',
        denyButtonText:'No',
        allowOutsideClick:false
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire({
                title: 'MUY BIEN ! COMENCEMOS',
                color: 'black',
                iconHtml: '<img src=/imagenes/world-2747353.png  width=800px height=800px > ',
                icon: 'success',
                confirmButtonColor:'black',
                confirmButtonText: 'OK',
                allowOutsideClick:false
            }).then((result)=>{
                if(result.isConfirmed){
                    let x = document.getElementById("formulario");
                    x.style.display="none"
                        Swal.fire({
                            title: usuario1.infoUsuario(),
                            type: 'success',
                            confirmButtonText: 'Comenzar ',
                            color: 'black',
                            iconHtml: '<img src=/imagenes/world-2747353.png  width=900px height=900px > ',
                            confirmButtonColor:'black',
                            allowOutsideClick:false,
                            grow:false
                            
                        }).then(() => {
                            
                            link(); 
                        })
        }})
        } else if (result.isDenied){
            Swal.fire({
                title: 'HASTA LA PROXIMA',
                color: 'black',
                iconHtml: '<img src=/imagenes/world-2747353.png  width=800px height=800px > ',
                showConfirmButton:false,
                confirmButtonColor:'black',
                confirmButtonText: 'OK',
                allowOutsideClick:false
                    })
    }})}})


    class usuario {
        constructor(nombre,apellido,pais,edad){
        this.nombre= nombre;
        this.apellido= apellido;
        this.pais = pais;
        this.edad= edad;
        }
        infoUsuario(){
            if (localStorage.getItem("puntaje")){
            return `Bienvenido, ${this.nombre} ${this.apellido}, de ${this.pais}. Vamos a poner a prueba tus ${this.edad} años de conocimiento. En tu ultimo juego obtuviste ${localStorage.getItem("puntaje")} puntos`;
            } else {
            return `Bienvenido ${this.nombre} ${this.apellido}, de ${this.pais}. Vamos a poner a prueba tus ${this.edad} años de conocimiento.`;
            }
        }
    }

const usuario1= new usuario ( localStorage.getItem('nombre'), localStorage.getItem('apellido'), localStorage.getItem('pais'), localStorage.getItem('edad'));

const usarioObjeto = JSON.stringify(usuario1);
localStorage.setItem("usuario", usarioObjeto);
