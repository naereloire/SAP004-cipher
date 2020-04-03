import cipher from './cipher.js';

console.log(cipher);

var getButtonEncode = document.getElementById("buttonEncode")
getButtonEncode.onclick = function (event) {
  let getTextArea = document.getElementById("messageTextArea").value
  let getOffSet = document.getElementById("quantity").value
  let getBoxResult = document.getElementById("ResultTextarea")
  getBoxResult.innerHTML = cipher.cifrar(getTextArea, getOffSet)
  let getBoxOutput = document.getElementById("boxOutput")
  getBoxOutput.style.display = "block"
 
  
}

var getButtonDecode = document.getElementById("buttonDecode")
getButtonDecode.onclick = function (event) {
  let getTextArea = document.getElementById("messageTextArea").value
  let getOffSet = document.getElementById("quantity").value
  let getBoxResult = document.getElementById("ResultTextarea")
  getBoxResult.innerHTML = cipher.decifrar(getTextArea, getOffSet)
  let getBoxOutput = document.getElementById("boxOutput")
  getBoxOutput.style.display = "block"
 

}


function cifrar(offset, mensagem) {

  return ("manga")

}

function decifrar(offset, mensagem) {

  return ("abacate")

}

var getButtonOut=document.getElementById("buttonOut")

function clickButtonOut (event){

  let deletMain=document.getElementById("main")
  deletMain.parentNode.removeChild(deletMain)
  let getDivTextBy=document.getElementById("texby")
  getDivTextBy.innerHTML= "Não sabemos de nada!"
  

}
getButtonOut.addEventListener("click", clickButtonOut)




let getButtonRefresh= document.getElementById("buttonRefresh")
function clickButtonReiniciar(event){

document.location.reload(true)
}

getButtonRefresh.addEventListener("click",clickButtonReiniciar)

let getButtonCopy=document.getElementById("buttonCopy")
function clickButtonCopy(event){
let getBoxOutput= document.getElementById("ResultTextarea")
getBoxOutput.select();
document.execCommand("copy");
alert("texto copiado"+getBoxOutput.value)

}
 getButtonCopy.addEventListener("click",clickButtonCopy)




// addEventListener recebe 2 parametros o evento q ele vai ouvir e a função
// elemento evento e instrução