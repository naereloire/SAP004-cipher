
const cipher = {
  encode: function (offset, mensagem) {
    if (typeof mensagem != "string" || typeof offset != "number"){
      throw  new TypeError 
    }
    let lettersEncoded = ""

    for (let i = 0; i < mensagem.length; i++) {

      let letterCode = mensagem.charCodeAt(i)
      let firstLetterCode
      let encodeResult

      switch (true) {

        case (letterCode >= "A".charCodeAt()) && (letterCode <= "Z".charCodeAt()):
          firstLetterCode = "A".charCodeAt()

          encodeResult = ((letterCode - firstLetterCode + offset) % 26);
          if(encodeResult>=0){
          encodeResult +=firstLetterCode;}
          
          else{ encodeResult+=firstLetterCode+26}
         
          lettersEncoded+=String.fromCharCode(encodeResult)

          break;
        case (letterCode >= "a".charCodeAt()) && (letterCode <= "z".charCodeAt()):
          firstLetterCode = "a".charCodeAt()

          encodeResult = ((letterCode - firstLetterCode + offset) % 26);
          if(encodeResult>=0){
            encodeResult +=firstLetterCode;}

          else{ encodeResult+=firstLetterCode+26}

          lettersEncoded += String.fromCharCode(encodeResult)
          break;
        default: lettersEncoded += String.fromCharCode(letterCode)



      }




    }


    return lettersEncoded


  },

  decode: function (offset, mensagem) {

    let lettersDecoded = ""

    for (let i = 0; i < mensagem.length; i++) {
    let letterDecode = mensagem.charCodeAt(i)
    
    let decodedResult
    let firstLetterDecode

      switch(true){

        case (letterDecode >= "A".charCodeAt())  && (letterDecode <= "Z".charCodeAt()):
        firstLetterDecode = "A".charCodeAt()
        decodedResult = ((letterDecode - firstLetterDecode - offset) % 26);

        if (decodedResult >= 0) {
          decodedResult += firstLetterDecode
        }
        else {
          decodedResult += firstLetterDecode + 26
        }

        lettersDecoded += String.fromCharCode(decodedResult)
        
        break;
        case (letterDecode >= "a".charCodeAt()) && (letterDecode <= "z".charCodeAt()):
        firstLetterDecode = "a".charCodeAt()

        decodedResult = ((letterDecode - firstLetterDecode - offset) % 26);
  
          if (decodedResult >= 0) {
            decodedResult += firstLetterDecode
          }
          else {
            decodedResult += firstLetterDecode + 26
          }
  
          lettersDecoded += String.fromCharCode(decodedResult)  
        
        break;
        default:
        lettersDecoded+=String.fromCharCode(letterDecode)
        
        
        }

      }


    

    return lettersDecoded

  }




};

export default cipher;

