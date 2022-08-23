/* Crear Clase Multimedia que permita albergar parámetro URL, obtenerlo y modificarlo
Agregar un método denominado “setInicio”, que retorne el siguiente mensaje “Este método es para realizar un cambio en la URL del video”.
*/

class Multimedia {

    #url;
    constructor(url) {
        this.#url = url;
    }

    getUrl() {
        return this.#url;
    }


    setUrl(value) {
        this.#url = value;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

export default Multimedia