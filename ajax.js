console.log("correcto")
//https://www.youtube.com/watch?v=M4LaQ3KUGOM
document.querySelector('#boton').addEventListener('click', traerDatos);
//document.querySelector('#btnfb').addEventListener('click', linkFacebook);
document.querySelector('#botonlike').addEventListener('click', llenarGrafico);

function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'HUARINO_posts.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
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
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var posteo = [],posteo2 = [],posteo3 = [],posteo4 = [],posteo5 = [],posteo6 = [],posteo7 = [],posteo8 = [],posteo9 = [],posteo10 = [],posteo11 = [],posteo12 = [];
            var reactiontotal = [],reactiontotal2 = [],reactiontotal3 = [],reactiontotal4 = [],reactiontotal5 = [],reactiontotal6 = [],reactiontotal7 = [],reactiontotal8 = [], reactiontotal9 = [],reactiontotal10 = [],reactiontotal11= [],reactiontotal12= [];
            var coment1=[],coment2=[],coment3=[],coment4=[],coment5=[],coment6=[],coment7=[],coment8=[],coment9=[],coment10=[],coment11=[],coment12=[]
            var compa1=[],compa2=[],compa3=[],compa4=[],compa5=[],compa6=[],compa7=[],compa8=[],compa9=[],compa10=[],compa11=[],compa12=[]
            let data1 = JSON.parse(this.responseText);
            for (let item of data1) {
                // var fecha = item.time.split(' ')[0] //OBTIENE LA PRIMERA LETRA
                // console.log(item.time)
                // console.log(item.time.split(' ')[0])
                
                console.log(item.time.slice(5,7))
                switch (item.time.slice(5, 7)) {
                    case '01':
                        posteo.push(item.time)
                        reactiontotal.push(item.reaction_count)
                        compa1.push(item.shares)
                        coment1.push(item.comments)
                        break;
                    case '02':
                        posteo2.push(item.time)
                        reactiontotal2.push(item.reaction_count)
                        compa2.push(item.shares)
                        coment2.push(item.comments)
                        break;
                    case '03':
                        posteo3.push(item.time)
                        reactiontotal3.push(item.reaction_count)
                        compa3.push(item.shares)
                        coment3.push(item.comments)
                        break;
                    case '04':
                        posteo4.push(item.time)
                        reactiontotal4.push(item.reaction_count)
                        compa4.push(item.shares)
                        coment4.push(item.comments)
                        break;
                    case '05':
                        posteo5.push(item.time)
                        reactiontotal5.push(item.reaction_count)
                        compa5.push(item.shares)
                        coment5.push(item.comments)
                        break;
                    case '06':
                        posteo6.push(item.time)
                        reactiontotal6.push(item.reaction_count)
                        compa6.push(item.shares)
                        coment6.push(item.comments)
                        break;
                    case '07':
                        posteo7.push(item.time)
                        reactiontotal7.push(item.reaction_count)
                        compa7.push(item.shares)
                        coment7.push(item.comments)
                        break;
                    case '08':
                        posteo8.push(item.time)
                        reactiontotal8.push(item.reaction_count)
                        compa8.push(item.shares)
                        coment8.push(item.comments)
                        break;
                    case '09':
                        posteo9.push(item.time)
                        reactiontotal9.push(item.reaction_count)
                        compa9.push(item.shares)
                        coment9.push(item.comments)
                        break;
                    case '10':
                        posteo10.push(item.time)
                        reactiontotal10.push(item.reaction_count)
                        compa10.push(item.shares)
                        coment10.push(item.comments)
                        break;
                    case '11':
                        posteo11.push(item.time)
                        reactiontotal11.push(item.reaction_count)
                        compa11.push(item.shares)
                        coment11.push(item.comments)
                        break;
                    case '12':
                        posteo12.push(item.time)
                        reactiontotal12.push(item.reaction_count)
                        compa12.push(item.shares)
                        coment12.push(item.comments)
                        break;

                    default:
                        break;
                }
            }
            //empieza 1
            // let res = document.querySelector('#resgraf');
            // console.log(res)
            // res.innerHTML += `
            // <canvas id="grafica"></canvas>`;
            // const $grafica = document.querySelector("#grafica")
            // const etiquetas = posteo7;
            // const datosVentas2020 = {
            //     label: "REACCIONES DE PUBLICACIONES",
            //     // Pasar los datos igualmente desde PHP
            //     data: reactiontotal7, // <- Aquí estamos pasando el valor traído usando AJAX
            //     backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
            //     borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
            //     borderWidth: 1, // Ancho del borde
            // };
            // new Chart($grafica, {
            //     type: 'bar', // Tipo de gráfica
            //     data: {
            //         labels: etiquetas,
            //         datasets: [
            //             datosVentas2020,
            //             // Aquí más datos...
            //         ]
            //     },
            //     options: {
            //         scales: {
            //             yAxes: [{
            //                 ticks: {
            //                     beginAtZero: true
            //                 }
            //             }],
            //         },
            //     }
            // });
            //FINALIZA 1
            //NUEVO MAPA
            data1.map(item=>{
                if(item.time.slice(5, 7)=='07'){
                    console.log(new Intl.DateTimeFormat('es-PE').format(new Date(item.time)))
                    return new Intl.DateTimeFormat('es-PE').format(new Date(item.time))
                }
            })
            let res = document.querySelector(`#grafmas`);
            res.innerHTML += `
                <canvas id="mas"></canvas>`;
            const $grafica = document.querySelector(`#mas`)
            
            new Chart($grafica, {
                type: 'line', // Tipo de gráfica DateTimeFormat('es-PE',{month:'long',day:'numeric})
                data: {
                    labels: data1.map(item=> new Intl.DateTimeFormat('es-PE').format(new Date(item.time))),
                    datasets: [
                        {
                        label:'Reacciones',
                        borderColor:'green',
                        data:data1.map(item =>item.reaction_count)
                    },
                    {
                        label:'Comentarios',
                        borderColor:'yellow',
                        data:data1.map(item =>item.comments)
                    },{
                        label:'Compartidos',
                        borderColor:'blue',
                        data:data1.map(item =>item.shares)
                    }
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
                    plugins:{
                        title:{
                            display:true,
                            text:'Resumen general de Publicaciones',
                            fullSize:false,
                            font:{
                                size:20
                            },
                            padding:30,
                            color:'#12619c'
                        },
                        legend:{
                            position:'bottom',
                            labels:{
                                padding:20,
                                boxWidth:15,
                                fontFamily:'system-ui',
                                fontColor:'black'
                            }
                        }
                    }
                    
                }
            });
            //
            if(posteo.length !==0){
                addGraficoMes('enero',reactiontotal,posteo,compa1,coment1)
            }
            if(posteo2.length!==0){
                addGraficoMes('febrero',reactiontotal2,posteo2,compa2,coment2)
            }
            if(posteo3.length!==0){
                addGraficoMes('marzo',reactiontotal3,posteo3,compa3,coment3)
            }
            if(posteo4.length!==0){
                addGraficoMes('abril',reactiontotal4,posteo4,compa4,coment4)
            }
            if(posteo5.length!==0){
                addGraficoMes('mayo',reactiontotal5,posteo5,compa5,coment5)
            }
            if(posteo6.length!==0){
                addGraficoMes('junio',reactiontotal6,posteo6,compa6,coment6)
            }
            if(posteo7.length!==0){
                addGraficoMes('julio',reactiontotal7,posteo7,compa7,coment7)
            }
            if(posteo8.length!==0){
                addGraficoMes('agosto',reactiontotal8,posteo8,compa8,coment8)
            }
            if(posteo9.length!==0){
                addGraficoMes('setiembre',reactiontotal9,posteo9,compa9,coment9)
            }
            if(posteo10.length!==0){
                addGraficoMes('octubre',reactiontotal10,posteo10,compa10,coment10)
            }
            if(posteo11.length!==0){
                addGraficoMes('noviembre',reactiontotal11,posteo11,compa11,coment11)
            }
            if(posteo12.length!==0){
                addGraficoMes('diciembre',reactiontotal12,posteo12,compa12,coment12)
            }            
        }
    }
}
function addGraficoMes(mes,reactiontotal,posteo,compa1,coment1){
            let res = document.querySelector(`#graf${mes}`);
            res.innerHTML += `
            <canvas id="${mes}"></canvas>`;
            const $grafica = document.querySelector(`#${mes}`)
            const etiquetas = posteo;
            const texto = mes.toUpperCase();
            const datosVentas2020 = {
                label: `REACCIONES DE PUBLICACIONES ${texto}`,
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
                        {
                            label:'Reacciones',
                        borderColor:'green',
                        data:reactiontotal
                        },
                        {
                            label:'Comentarios',
                        borderColor:'yellow',
                        data:coment1
                        },
                        {
                            label:'Compartidos',
                        borderColor:'blue',
                        data:compa1
                        }
                        

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
                    plugins:{
                        title:{
                            display:true,
                            text:`Resumen general de Publicaciones de ${mes}`,
                            fullSize:false,
                            font:{
                                size:20
                            },
                            padding:30,
                            color:'#12619c'
                        },
                        legend:{
                            position:'bottom',
                            labels:{
                                padding:20,
                                boxWidth:15,
                                fontFamily:'system-ui',
                                fontColor:'black'
                            }
                        }
                    }
                }
            });
}

function addGraficoMes1(mes,reactiontotal,posteo){
    let res = document.querySelector(`#graf${mes}`);
    res.innerHTML += `
    <canvas id="${mes}"></canvas>`;
    const $grafica = document.querySelector(`#${mes}`)
    const etiquetas = posteo;
    const texto = mes.toUpperCase();
    const datosVentas2020 = {
        label: `REACCIONES DE PUBLICACIONES ${texto}`,
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
