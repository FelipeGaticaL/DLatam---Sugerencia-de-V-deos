import Multimedia from "./multimedia.js";

/* Crear una clase “Reproductor  */

class Reproductor extends Multimedia {

    #id;
    constructor(url, id) {
        super(url);

        this.#id = id;
    }

    playMultimedia() {
        FuncionPublica(this.getUrl(), this.#id);
    }

    setInicio(tiempo) {
        this.setUrl(`${this.getUrl()}?start=${tiempo}`);
    }
}


/* Implementar el Patrón Módulo mediante IIFE */
/* Función publica = FuncionPUblica
  Función Privada = SetVideodata
*/
const FuncionPublica = function (url, id) {
    const SeleccionarVideo = (Url_Video, Id_Video) => {
        const video = document.getElementById(Id_Video);
        if (video) {
            video.setAttribute("src", Url_Video);
        } else {
            console.Error("error! revisar");
        }
    };
    return SeleccionarVideo(url, id);
};



export default Reproductor