let XMLhttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLhttpRequest();
    //Los estados de un request de acuerdo a la documentacion:
//0: request not initialized
//1: server connection established
//2: request received
//3: processing request
//4: request finished and response is ready

    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}
//1porque no voy usar fetch : esta disponible en es6 en adelate es paera hacer peticiones y trabaja con promesas
//Aclaraciòn de varias cosas que quizás no entiendas si estas empezando:

//2.A)XMLHttpRequest es la forma antigua de hacer llamados, como el profesor lo menciona usa ese y no Fetch que es el actual, por que no conocemos aùn las promesas y fecth es con promesas, para saber por que el profesor uso OPEN y todas esas funciones aqui està la forma de usar XMLHttpRequest : https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest.

//B)" new Error " que el profesor crea, es una nueva instancia de la clase Error que tiene Javascript, son clases ya implicitas que tiene javascript en este caso es para monstrar bien un mensaje de error podemos usarla, màs informaciòn aqui : https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error.

//C) los que son fron-end y están aprendiendo de Back, el profesor uso GET por que hace parte de los método http, en este caso necesitamos pedir información a las url ,màs información: https://developer.mozilla.org/es/docs/Web/HTTP/Methods

//D)Por ultimo recomiendo una escucha atenta a lo que dice el profesor por que el explica el por que de cada cosa que hace y si no la conoces recomiendo buscarlas en Internet y asì avanzas en el curso.

fetchData(API,function (error1, data1) {
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2) {
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})