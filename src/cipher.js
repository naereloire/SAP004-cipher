
const cipher = {
  encode: function (offset, mensagem) {

    mensagem = mensagem.toUpperCase()

    let lettersEncoded = ""

    for (let i = 0; i < mensagem.length; i++) {

      let letterCode = mensagem.charCodeAt(i)
      if (letterCode == " ".charCodeAt()) {
        lettersEncoded += " "
      }
      else {

        let firstLetterCode = "A".charCodeAt()

        let encodeResult = ((letterCode - firstLetterCode + offset) % 26) + firstLetterCode;

        lettersEncoded += String.fromCharCode(encodeResult)
      }
    }


    return lettersEncoded


  },

  decode: function (offset, mensagem) {

    mensagem = mensagem.toUpperCase()

    let lettersDecoded = ""

    for (let i = 0; i < mensagem.length; i++) {

      let letterDecode = mensagem.charCodeAt(i)
      if (letterDecode == " ".charCodeAt()) {
        lettersDecoded += " "
      }
      else {

        let firstLetterDecode = "A".charCodeAt()

        let decodedResult = ((letterDecode - firstLetterDecode - offset) % 26);

        if (decodedResult >= 0) {
          decodedResult += firstLetterDecode
        }
        else {
          decodedResult += firstLetterDecode + 26
        }

        lettersDecoded += String.fromCharCode(decodedResult)
      }


    }

    return lettersDecoded

  }




};

export default cipher;



