function cipherOperation(offset, letterCode) {
  const alfhabetLength = 26;
  let firstLetterCode;
  let changedLetter;

  switch (true) {

    case (letterCode >= "A".charCodeAt()) && (letterCode <= "Z".charCodeAt()):
      firstLetterCode = "A".charCodeAt()
      changedLetter = ((letterCode - firstLetterCode + offset) % alfhabetLength);

      if (changedLetter >= 0) {
        changedLetter += firstLetterCode
      }
      else {
        changedLetter += firstLetterCode + alfhabetLength
      }

      return String.fromCharCode(changedLetter);

    case (letterCode >= "a".charCodeAt()) && (letterCode <= "z".charCodeAt()):
      firstLetterCode = "a".charCodeAt()
      changedLetter = ((letterCode - firstLetterCode + offset) % alfhabetLength);

      if (changedLetter >= 0) {
        changedLetter += firstLetterCode
      }
      else {
        changedLetter += firstLetterCode + alfhabetLength
      }

      return String.fromCharCode(changedLetter);

    default: return String.fromCharCode(letterCode);
  }

}

const cipher = {
  encode: function (offset, mensagem) {

    if (typeof mensagem != "string" || typeof offset != "number") {
      throw new TypeError
    }
    let lettersEncoded = ""

    for (let i = 0; i < mensagem.length; i++) {

      let letterCode = mensagem.charCodeAt(i)

      lettersEncoded += cipherOperation(offset, letterCode)
    }

    return lettersEncoded

  },


  decode: function (offset, mensagem) {
    if (typeof mensagem != "string" || typeof offset != "number") {
      throw new TypeError
    }

    let lettersDecoded = ""

    for (let i = 0; i < mensagem.length; i++) {

      let letterCode = mensagem.charCodeAt(i)

      lettersDecoded += cipherOperation(-offset, letterCode)


    }

    return lettersDecoded

  }

};

export default cipher;

