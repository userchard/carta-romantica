const cartaContainer = document.getElementById('cartaContainer');
const carta = document.getElementById('carta');
const musica = document.getElementById('musica');
const fotoQuadro = document.getElementById('foto-quadro');
const abrirBtn = document.getElementById('abrirBtn');

function abrirCarta() {
  cartaContainer.style.display = 'flex';
  setTimeout(() => {
    cartaContainer.classList.remove('fechando');
    cartaContainer.classList.add('abrindo');
    carta.scrollTop = 0;
    abrirBtn.style.display = 'none';
    fotoQuadro.classList.remove('mostrar'); // Esconde a imagem suavemente
  }, 10);
}

function fecharCarta() {
  cartaContainer.classList.remove('abrindo');
  cartaContainer.classList.add('fechando');
  musica.pause();
  setTimeout(() => {
    cartaContainer.style.display = 'none';
    abrirBtn.style.display = 'inline-block';
    fotoQuadro.classList.add('mostrar'); // Mostra a imagem suavemente
    fotoQuadro.scrollIntoView({ behavior: 'smooth' });
  }, 700); // igual ao tempo da transição
}

function toggleMusica() {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
