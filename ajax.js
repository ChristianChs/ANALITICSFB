console.log("correcto")
    //https://www.youtube.com/watch?v=M4LaQ3KUGOM
document.querySelector('#boton').addEventListener('click', traerDatos);
//document.querySelector('#btnfb').addEventListener('click', linkFacebook);
document.querySelector('#botonlike').addEventListener('click', llenarGrafico);

function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'HUARINO_posts.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let item of data) {
                res.innerHTML += `
                <tr>
                    <td>${item.post_id}</td>
                    <td>${item.time}</td>
                    <td>${item.reaction_count}</td>
                    <td>${item.comments}</td>
                    <td>${item.shares}</td>
                    <td><button class="waves-effect waves-light btn" onclick="location.href='${item.post_url}';" >Acceder</button></td>
                </tr>
                `
            }
            console.log(data)
        }
    }
}

function llenarGrafico() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'HUARINO_posts.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var posteo = [];
            var reactiontotal = [];
            let data = JSON.parse(this.responseText);
            for (let item of data) {
                posteo.push(item.post_id)
                reactiontotal.push(item.reaction_count)
            }
            console.log(posteo)
            console.log(reactiontotal)
            let res = document.querySelector('#resgraf');
            res.innerHTML += `
            <canvas id="grafica"></canvas>`;
            const $grafica = document.querySelector("#grafica")
            const etiquetas = posteo;
            const datosVentas2020 = {
                label: "REACCIONES DE PUBLICACIONES",
                // Pasar los datos igualmente desde PHP
                data: reactiontotal, // <- Aquí estamos pasando el valor traído usando AJAX
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
                borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
                borderWidth: 1, // Ancho del borde
            };
            new Chart($grafica, {
                type: 'line', // Tipo de gráfica
                data: {
                    labels: etiquetas,
                    datasets: [
                        datosVentas2020,
                        // Aquí más datos...
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    },
                }
            });
        }
    }
}