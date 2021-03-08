import React from "react";

function Body() {
  return (
    <div className="container p-0">
      <div className="container-fluid" id="body">
        <div className="container-fluid p-0">
          <h3>Profesor Bluuweb</h3>
          <a
            href="https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ"
            target="_BLANK"
          >
            <h6>Bluuweb - YouTube</h6>
          </a>
        </div>
        <div className="container-fluid">
          <h4 className="text-info">Inicio</h4>
          <p>
            Esto es un repaso de las cosas básicas y conseguir nuevos
            conocimientos para el repositorio.
          </p>
          <h2>Lista de comandos para la CLI</h2>
          <ul>
            <li>
              <code>git status -s</code>
              <p className="mt-2">
                Con el <code>-s</code> Muestra iconos para obtener información
                más comodamente. Además de su función habitual de obtener si se
                ha agregado los archivos a la area temporal.
              </p>
            </li>
            <li>
              <code>git add . | nombre_archivo.extension</code>
              <p>
                add sirve para pasar las archivos a la area virtual previa al
                commit. Puedes elegir los archivos que quieres agregar
                individualmente.
              </p>
            </li>
            <li>
              <code>git commit -m "texto"</code>
              <p>
                Los commits son los que nos permiten recuperar versiones de los
                códigos si deseamos volver para atras en el tiempo.
              </p>
            </li>
            <li>
              <code>
                git log <code className="text-white">--oneline</code>
              </code>
              <p>
                <code>git log</code> sirve para ver los commits que tiene ese
                archivo. De manera que esta información nos permite acceder a
                otras versiones de ese archivo que se hayan comitado.
              </p>
              <p>
                <code className="text-white">--online</code> se le agrega esa
                función para que no se active (Supongo que VIM) para poder
                acceder a las versiones solo con el cli.
              </p>
            </li>
            <li>
              <code>
                git reset <code className="text-white">--mixed || --hard</code>
              </code>
              <p>
                <code>git reset --hard [número id]</code> Este comando sirve para poder viajar entre los commits, cada commit tiene un id y con el uso de este comando puedes viajar a esa versión del archivo.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Body;
