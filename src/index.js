import cipher from './cipher.js';

// console.log(cipher);

var getButtonEncode = document.getElementById("buttonEncode")
 getButtonEncode.onclick = function () {
  let getTextArea = document.getElementById("messageTextArea").value
  let getOffSet = Number(document.getElementById("quantity").value)
  let getBoxResult = document.getElementById("ResultTextarea")
  getBoxResult.innerHTML = cipher.encode( getOffSet,getTextArea)
  let getBoxOutput = document.getElementById("boxOutput")
  getBoxOutput.style.display = "block"
 
  
}

var getButtonDecode = document.getElementById("buttonDecode")
getButtonDecode.onclick = function () {
  let getTextArea = document.getElementById("messageTextArea").value
  let getOffSet = Number(document.getElementById("quantity").value)
  let getBoxResult = document.getElementById("ResultTextarea")
  getBoxResult.innerHTML = cipher.decode( getOffSet,getTextArea)
  let getBoxOutput = document.getElementById("boxOutput")
  getBoxOutput.style.display = "block"
 

}


var getButtonOut=document.getElementById("buttonOut")

function clickButtonOut (){

  let deletMain=document.getElementById("main")
  deletMain.parentNode.removeChild(deletMain)
  let getDivTextBy=document.getElementById("texby")
  getDivTextBy.innerHTML= "Não sabemos de nada!"
  

}
getButtonOut.addEventListener("click", clickButtonOut)




let getButtonRefresh= document.getElementById("buttonRefresh")
function clickButtonReiniciar(){

document.location.reload(true)
}

getButtonRefresh.addEventListener("click",clickButtonReiniciar)

let getButtonCopy=document.getElementById("buttonCopy")
function clickButtonCopy(){
let getBoxOutput= document.getElementById("ResultTextarea")
getBoxOutput.select();
document.execCommand("copy");

}
 getButtonCopy.addEventListener("click",clickButtonCopy)




// addEventListener recebe 2 parametros o evento q ele vai ouvir e a função
// elemento evento e instrução