document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getJson").addEventListener("click", getJson);
document.getElementById("getHere").addEventListener("click", getHere);
document.getElementById("addPost").addEventListener("submit", addPost);

// Usar nomenclatura de funcion viejaEscuela, a esta funcion vamos a pasarle el metod .fetch "EL METODO FETCH EN PRINCIPIO ES UNA PROMESA, RECUERDEN QUE AL TENER ACCESSO A LAS PROMESAS, PODEMOS ACCEDER A LOS METODOS RELACIONADOS DE LAS PROMESAS QUE SERIAM: .THEN() - .CATCH() - Promise.all()"

// Calling an internal TXT document
// parte 1 - expression de funcion
function getText() {
  // parte 2 - incializamos el metodo fetch y apuntamos al endpoint que queremos usar
  fetch("sample.txt")
    // parte 3 - recibimos info sin limpieza del formato que aputnamos con el metodo fetch() y lo pasamaos mediante una funcion con la promesa .then() para sacar la respuesta mediante un argumento/parametro que lo limpiamos/editamos con algun  metodo en especifico que en este caso es el metodo text() - RESOLVE()
    .then((response) => {
      response.text();
    })
    .then((infoFromText) => {
      document.querySelector("#samane").innerHTML = infoFromText;
    })
    // parte 5 - si existe algun error de connection con el archivo en el fetch parametrizamos el error mediante el REJECT de la promesa - REJECT()
    .catch((error) => {
      console.log(error);
    });
}

// Calling an internal JSON document
function getJson() {
  fetch("users.json")
    .then((response) => response.json())
    .then((userInfo) => {
      let userData = "";
      userInfo.forEach((user) => {
        userData += `
        <ul>
          <li>${user.name}</li>
          <li>${user.email}</li>
          <li>${user.id}</li>
        </ul>
        `;
      });
      document.querySelector("#samane").innerHTML = userData;
    })
    .catch((error) => {
      console.log(error);
    });
}

// Calling an external API
function getHere() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      let externalApiData = "";

      res.forEach((post) => {
        externalApiData += `
        <div class="card" style="width: 18rem">
        <img
            class="card-img-top"
            src="https://www.cruillabarcelona.com/wp-content/uploads/2022/02/RubenBlades.jpeg"
            alt="Ruben Fucking Blades aka ruben blade's"
        />
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">
                ${post.body}
            </p>
        </div>
        </div>
        `;
      });

      document.querySelector("#samane").innerHTML = externalApiData;
    })
    .catch((error) => console.log(error));
}

// Enviar mediante el fetch method un post usando un objeto dentro del fetch como segundo parametro que dentro del mismo pasaremos cierta informacion, esta informacion es asociada con los HTTP methods, [CREATE, READ, UPDATE, DELETE]. Vamos a enviar la informacion del formulario al API falso y veremos como se registra el ID correspondiente a la sequencia de objetos que nos presenta el API.
