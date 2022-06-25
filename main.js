function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();

    if (elemento === null && elemento.localName === 'audio') {
        alert('Se divirta');
    } else {
        Alert('Vai embora kkk');
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

//for uma estrutura de laço ou repetição
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function() {
        tocaSom(idAudio);


    }


    ///Estrutura if e else 
    tecla.onkeydown = function(event) {
        if (event.code === 'space') {

            tecla.classList.add('ativa');

        } else {
            (event.code === 'Enter');
            tecla.classList.add('ativa');
        }



    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}