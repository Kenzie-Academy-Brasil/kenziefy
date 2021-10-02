
/**
 * variaveis
 * funções
 * loop
 * condicionais
 */

// variaveis
const meuNome = 'Maria';
let minhaIdade = 20;

// console.log(meuNome);
// console.log(minhaIdade);

minhaIdade = 21;
// console.log(minhaIdade);
// meuNome = 'Maria Porcina'; => retorna um erro

// funções

// declaração de função
function imprimirNome(){
    console.log(meuNome);
}
// chamada/executando a função
// imprimirNome();

// loop
for(let contador = 0; contador < 5; contador++){
    // imprimirNome();
}

// condicionais
if(minhaIdade > 18) {
    // console.log('Atingiu a maioridade');
} else {
    // console.log('Não atingiu a maioridade');
}

/* ------------ */

const baseMusicas = [
    {
        'name': 'Anonymous Choir - Unus Ex Discipulis Meis',
        'artist': 'Anonymous',
        'path': './src/audio/Anonymous_Choir_-_Unus_Ex_Discipulis_Meis.mp3',
        'album': 'Good Enough',
    },
    {
        'name': 'Felipe Sarro - C Schumann Scherzo in C minor Op 14',
        'artist': 'Anonymous',
        'path': './src/audio/Felipe_Sarro_-_11_-_C_Schumann_Scherzo_in_C_minor_Op_14.mp3',
        'album': 'Good Enough',
    },
    {
        'name': 'James Scott - Frog Legs Rag 1906 piano roll',
        'artist': 'Anonymous',
        'path': './src/audio/James_Scott_-_01_-_Frog_Legs_Rag_1906_piano_roll.mp3',
        'album': 'Good Enough',
    }
];

/**
 *  <li>    
        <p class="primeiroItem">0 Good Enough</p>
        <p>MeiaUm</p>
        <p>Good Enough</p>
    </li>
 */

const listaMusicas = document.querySelector('.listaMusicas');

const tagAudio = document.getElementById('saidaAudio');
const primeiraMusica = baseMusicas[0];
tagAudio.src = primeiraMusica.path;

const botaoPausar = document.getElementById('btnPause');

const botaoPlay = document.getElementById('btnControlPlay');

function construirPlaylist(musica, musicaId){
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const nomeArtista = document.createElement('p');
    const nomeAlbum = document.createElement('p');

    musicaElemento.dataset.id = musicaId;

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = musica.name;
    nomeArtista.innerText = musica.artist;
    nomeAlbum.innerText = musica.album;

    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(nomeArtista);
    musicaElemento.appendChild(nomeAlbum);

    musicaElemento.addEventListener('click', tocarMusica);

    listaMusicas.appendChild(musicaElemento);
}

for(let contador = 0; contador < baseMusicas.length; contador++){
    construirPlaylist(baseMusicas[contador], contador);
}

function tocarMusica(evento){
    const elementoClicado = evento.currentTarget;

    if(elementoClicado.tagName === 'LI'){
        const musicaId = elementoClicado.dataset.id;
        const musicaSelecionada = baseMusicas[musicaId];
    
        tagAudio.src = musicaSelecionada.path;
        tagAudio.play();
    } else {
        if(tagAudio.paused){
            tagAudio.play();
        } else {
            tagAudio.pause();
        }
    }
}
botaoPlay.addEventListener('click', tocarMusica);

function pausarMusica(){
    tagAudio.pause();
}
botaoPausar.addEventListener('click', pausarMusica);