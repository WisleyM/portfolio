const carrocelContent = document.querySelector("#carrocel");

const avancarScroll = (direcao) => {


  if (direcao == 'left') {
    carrocelContent.scrollLeft -= 100;

  } else if (direcao == 'right') {
    carrocelContent.scrollLeft += 100;

  }
}
