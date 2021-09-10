  // pegando dados do index.html
  let body = document.getElementsByTagName('body')[0];
  let paragraph = document.getElementsByClassName('paragrafo');

  // ******************************************Lendo do Local Storage*******************************
  //lendo dados do local storage
  let backgroundColor = localStorage.getItem('backgroundColor');
  let fonteColor = localStorage.getItem('fonteColor');
  let fonteSize = localStorage.getItem('fonteSize');
  let lineSpace = localStorage.getItem('lineSpace');
  let fontType = localStorage.getItem('fontType');

  // Se os dados do local storage não forem nulos mude os dados padrões por eles
  if (backgroundColor !== null) {
    body.style.backgroundColor = backgroundColor;
  }

  for (key of paragraph) {
    if (fonteColor !== null) {
      key.style.color = fonteColor;
    }
  
    if (fonteSize !== null) {
      key.style.fontSize = fonteSize;
    }

    if (lineSpace !== null) {
      key.style.lineHeight = lineSpace;
    }

    if (fontType !== null) {
      key.style.fontFamily = fontType;
    }
  }
