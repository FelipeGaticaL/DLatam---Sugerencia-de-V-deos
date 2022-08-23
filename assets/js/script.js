import Reproductor from "./reproductor.js";

/* Instanciando URL en IIFE y en la Clase Reproductor> Clase Multimedia */
/* Instanciar la clase hija pasando como argumento la URL y el id para cada etiqueta iframe, por lo que se deben crear tres instancias, una para música, otra para película y otra para serie, con sus respectivas URL. */

/* Peliculas parámetros URL,  */

let Musica = new Reproductor(
  "https://www.youtube.com/embed/AuvrZha-7XI",
  "musica"
);

let Series = new Reproductor(
  "https://www.youtube.com/embed/X4QYV5GTz7c",
  "series"
);

let Peliculas = new Reproductor(
  "https://www.youtube.com/embed/zSWdZVtXT7E",
  "peliculas"
);



/* Invocar al método “playMultimedia” para cada instancia creada, mostrando así los videos en el documento HTML */

Musica.playMultimedia();
Peliculas.playMultimedia();
Series.playMultimedia();

/* Utiliza el método “setInicio” para modificar el tiempo de inicio en alguna de las instancias creadas */

Peliculas.setInicio(12);
Musica.setInicio(15);
Series.setInicio(18);