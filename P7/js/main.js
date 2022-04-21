window.onload = function () {    
    const btn = document.getElementById("enviar");
    if(btn){
        btn.addEventListener('click', obtenerDatos, false);
    }
}

function obtenerDatos() {
    const nombre = document.getElementById("nombre").value;
    const app = document.getElementById("app").value;
    const apm = document.getElementById("apm").value;    
    const calle = document.getElementById("calle").value;
    const no = document.getElementById("no").value;
    const colonia = document.getElementById("colonia").value;
    const cp = document.getElementById("cp").value;
    const combo = document.getElementById("delegacion");
    const delegacion = combo.options[combo.selectedIndex].text;
    const direccion = [calle, no, colonia, cp, delegacion]
    //Guardamos en local storage
    localStorage.setItem('direccion', JSON.stringify(direccion));
    const radio = document.getElementsByName("sexo");
    let sexo = "";
    for(let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            sexo = radio[i].value;
        }
    }    
    const combo2 = document.getElementById("mes");
    const mes = combo2.options[combo2.selectedIndex].text;
    const combo3 = document.getElementById("dia");
    const dia = combo3.options[combo3.selectedIndex].text;
    const combo4 = document.getElementById("anio");
    const anio = combo4.options[combo4.selectedIndex].text;
    const nacimiento = [dia, mes, anio]
    localStorage.setItem('nacimiento', JSON.stringify(nacimiento));
    const curp = document.getElementById("curp").value;
    const personal = [nombre, app, apm, sexo, curp];
    localStorage.setItem('personal', JSON.stringify(personal));
    /*--------------CheckBoxes-----------------------*/
    const cc = document.getElementById("c");
    const ru = document.getElementById("ruby");
    const cm = document.getElementById("cpp");
    const pe = document.getElementById("perl");
    const ja = document.getElementById("java");
    const rr = document.getElementById("r");
    const py = document.getElementById("python");
    const otr = document.getElementById("otro-l");
    if(cc.checked) {
        var c = document.getElementById("c").value;
    }
    if(ru.checked) {
        var ruby = document.getElementById("ruby").value;
    }
    if(cm.checked) {
        var cpp = document.getElementById("cpp").value;
    }
    if(pe.checked) {
        var perl = document.getElementById("perl").value;
    }
    if(ja.checked) {
        var java = document.getElementById("java").value;
    }
    if(rr.checked) {
        var r = document.getElementById("r").value;
    }
    if(py.checked) {
        var python = document.getElementById("python").value;
    }
    if(otr.checked) {
        var ot = document.getElementById("otro-l").value;
    }
    const lenguajesFav = [c, ruby, cpp, perl, java, r, python, ot]
    for(let i = 0; i < 8; i++) {
        if(lenguajesFav[i] == null) {
            lenguajesFav[i] = "";
        }
    }
    localStorage.setItem('lenguajesFav', JSON.stringify(lenguajesFav));
    const l = document.getElementById("leer");
    const v = document.getElementById("videojuegos");
    const t = document.getElementById("tv");
    const cn = document.getElementById("cine");
    const os = document.getElementById("otras");
    const it = document.getElementById("internet");
    const n = document.getElementById("netflix");
    if(l.checked) {
        var leer = document.getElementById("leer").value;
    }
    if(v.checked) {
        var videojuegos = document.getElementById("videojuegos").value;
    }
    if(t.checked) {
        var tv = document.getElementById("tv").value;
    }
    if(cn.checked) {
        var cine = document.getElementById("cine").value;
    }
    if(os.checked) {
        var otras = document.getElementById("otras").value;
    }
    if(it.checked) {
        var internet = document.getElementById("internet").value;
    }
    if(n.checked) {
        var netflix = document.getElementById("netflix").value;
    }
    const pasatiempos = [leer, videojuegos, tv, cine, otras, internet, netflix]
    for(let i = 0; i < 7; i++) {
        if(pasatiempos[i] == null) {
            pasatiempos[i] = "";
        }
    }
    localStorage.setItem('pasatiempos', JSON.stringify(pasatiempos));
    /*--------------CheckBoxes-----------------------*/
    const comentarios = document.getElementById("comentarios").value;
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
    window.open("datos.html", "Datos")
}

function recuperarDatos() {
    let personal = localStorage.getItem('personal');
    console.log(personal)
    personal = JSON.parse(personal);
    const [nombre, app, apm, sexo, curp] = personal
    let nacimiento = localStorage.getItem('nacimiento');
    nacimiento = JSON.parse(nacimiento);
    const [dia, mes, anio] = nacimiento
    let direccion = localStorage.getItem('direccion');
    direccion = JSON.parse(direccion);
    const [calle, no, colonia, cp, delegacion] = direccion
    let lenguajesFav = localStorage.getItem('lenguajesFav');
    lenguajesFav = JSON.parse(lenguajesFav);
    const [c, ruby, cpp, perl, java, r, python, ot] = lenguajesFav
    let pasatiempos = localStorage.getItem('pasatiempos');
    pasatiempos = JSON.parse(pasatiempos);
    const [leer, videojuegos, tv, cine, otras, internet, netflix] = pasatiempos
    let comentarios = localStorage.getItem('comentarios');
    comentarios = JSON.parse(comentarios);

    document.getElementById("nombre").textContent = "Nombre: " + nombre;
    document.getElementById("app").textContent = "Apellido paterno: " + app;
    document.getElementById("apm").textContent = "Apellido materno: " + apm;
    document.getElementById("cumple").textContent = "Fecha de nacimiento: " + dia + "/" + mes + "/" + anio;
    document.getElementById("sexo").textContent = "Sexo: " + sexo;
    document.getElementById("curp").textContent = "CURP: " + curp;
    document.getElementById("calle").textContent = "Calle: " + calle;
    document.getElementById("no").textContent = "Número: " + no;
    document.getElementById("colonia").textContent = "Colonia: " + colonia;
    document.getElementById("cp").textContent = "Código postal: " + cp;
    document.getElementById("delegacion").textContent = "Delegación: " + delegacion;
    document.getElementById("favoritos").textContent = "Lenguajes favoritos: "
    + " " + c + " " + ruby + " " + cpp + " " + perl + " " + java + " " + r + " " + python + " " + ot;
    document.getElementById("pasatiempos").textContent = "Pasatiempos: "
    + " " + leer + " " + videojuegos + " " + tv + " " + cine + " " + internet + " " + netflix + " " + otras;
    document.getElementById("com").textContent = "Comentarios: " + comentarios;
}