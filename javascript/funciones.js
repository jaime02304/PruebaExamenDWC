export function creaImagen() {
    // Función que crea un elemento imagen, completa sus clases y el src (puedes usar la imagen adjunta u otra)
    let img = document.createElement('img');
    //img.className 
    img.src="imagenes/elcano.jpg";
    // Devuelve el elemento imagen
    return img;
}

export function creaTabla() {
    const arrayHuracanes = [
        { cat: 1, vel: '120-153' },
        { cat: 2, vel: '154-177' },
        { cat: 3, vel: '178-209' },
        { cat: 4, vel: '210-249' },
        { cat: 5, vel: 'Más de 250' },
    ]
    // Crea una tabla con los datos de este array
    tabla = document.createElement('table');
     let tr ;
    let td ;
    arrayHuracanes.forEach(elemento =>{
         tr = document.createElement('tr');
         td = document.createElement('td');
        td.innerText=elemento.cat + " " + elemento.vel;
        tr.appendChild(td);
        tabla.appendChild(tr);
    });
    
    return tabla;

}

export function creaParrafo() {
    // Crea un párrafo con texto genérico
    let p = document.createElement('p');
    p.innerText = "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nostrum fugit tenetur, eligendi rerum vitae saepe! Dolorum aperiam ab ducimus velit consectetur. Numquam soluta error ut debitis veniam quaerat! Magni!"
    return p;
}

export function creaLista() {
    const lista = ['Bananas', 'Manzanas', 'Melocotones', 'Naranjas'];
    // Crea una lista con este array y la devuelve
    let ul = document.createElement('ul');
    let li;
    lista.forEach(elemento=>{
             li = document.createElement('li');
            li.innerText=elemento;
            ul.appendChild(li);
    });
    return ul;
}