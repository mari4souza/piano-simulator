const pianoKeys = document.querySelectorAll(".piano-keys .key"); /* Pegando as teclas */

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

/* Funçao */
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`); /* Pegando o elemento HTML que tem data-key dinamicamente, como se fosse um for com i */
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150) /* Adicionando e removendo a classe active da key a cada 150s*/
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key)) /* Chamando o playTune conforme o click */
    mapedKeys.push(key.dataset.key); /* Guardando as teclas permitidas */
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) { /* Verificando se é uma tecla válida (mapeada) */
        playTune(e.key);
    }

    playTune(e.key)
});

const handleVolume = (e) => { /* Pegando a propriedade volume do range */
    audio.volume = e.target.value
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide")) /* Efeito de liga e desliga na parte de mostrar escita na tecla ou nao */
} /* Aqui estamos add a classe hide pra esconder */

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys)
