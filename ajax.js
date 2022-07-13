console.log("correcto")
    //https://www.youtube.com/watch?v=M4LaQ3KUGOM
document.querySelector('#boton').addEventListener('click', traerDatos);
document.querySelector('#btnfb').addEventListener('click', linkFacebook);

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