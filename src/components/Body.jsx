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
          <h2>Respaldo en GitHub</h2>
          
          <ul>
            <li>
              <code>git remote add origin <code className="text-white">https://github.com/usuario/proyecto.git</code></code> Con este comando indicamos a github que estamos conectados a este. Este repositorio tendrá conexión directa con GitHub. <br/>
              Este comando solo se realiza una sola vez por repositorio ya que solo puedes estar conectado a un solo repositorio.
            </li>
            <li>
              <code>git push <code className="text-white">-u origin master</code></code> Este comando sirve para sincronizar el repositorio local con el remoto. <br/>
              Los comandos <code className="text-white">-u origin master</code> solo se realizan la primera vez. El resto de veces para enviar el repositorio local al remoto solo hay que usar <code>git push</code>.
            </li>
            <li>
              <code>git pull</code>
              <p>
                Este sería lo contrario a push. En vez de actualizar el repositorio remoto desde el local. Este Actualiza el repositorio local desde el remoto.
              </p>
            </li>
            <li>
              <code>git tag version1.0 -m <code className="text-white">"version 1.0"</code></code>
              <p>
                Con este comando indicas a git que cree las famosas "versiones" del código.
              </p>
              <p>
                Cuando usas el comando <code>git log --oneline</code> podrás ver que aparece en el repositorio actual un tag: [nombre tag].
              </p>
            </li>
            <li>
              s
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Body;
