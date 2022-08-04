const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval (function time (){

    // Pegando os valores da data, horas, minutos e segundos
    let dateToday = new Date()
    let hr = dateToday.getHours() 
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    //Colocando os valores pegos nas variaveis declaradas


    if (hr < 10) hr = '0' + hr // Colocando o zero antes para n ficar com uma casa decimal apenas
    if (min < 10) min = '0' + min
    if (s < 10) s = '0' + s

    
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s

})