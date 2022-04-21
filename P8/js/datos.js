window.onload = function() {
    recuperarDatos();
}

function recuperarDatosLocal() {
    let personal = localStorage.getItem('personal');
    console.log(personal)
    personal = JSON.parse(personal);
    const [nombre, app, apm] = personal
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

    document.getElementById("nombre").textContent = nombre;
}