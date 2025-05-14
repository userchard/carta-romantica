const cartaContainer = document.getElementById('cartaContainer');
const carta = document.getElementById('carta');
const musica = document.getElementById('musica');
const fotoQuadro = document.getElementById('foto-quadro');
const abrirBtn = document.getElementById('abrirBtn');

function abrirCarta() {
  cartaContainer.style.display = 'block';
  cartaContainer.classList.remove('fechando');
  cartaContainer.classList.add('abrindo');
  carta.scrollTop = 0;
  abrirBtn.style.display = 'none';
}

function fecharCarta() {
  cartaContainer.classList.remove('abrindo');
  cartaContainer.classList.add('fechando');
  musica.pause();
  setTimeout(() => {
    cartaContainer.style.display = 'none';
    abrirBtn.style.display = 'inline-block';
    fotoQuadro.style.display = 'block';
    fotoQuadro.scrollIntoView({ behavior: 'smooth' });
  }, 1000);
}

function toggleMusica() {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}