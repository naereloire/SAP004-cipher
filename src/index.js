import cipher from './cipher.js';


var getButtonEncode = document.getElementById("buttonEncode")

function clickButtonEncode() {

  let getTextArea = document.getElementById("messageTextArea").value
  let getOffSet = Number(document.getElementById("quantity").value)
  let getBoxResult = document.getElementById("ResultTextarea")
  getBoxResult.innerHTML = cipher.encode(getOffSet, getTextArea)
  let getBoxOutput = document.getElementById("boxOutput")
  getBoxOutput.style.display = "block"

}

getButtonEncode.addEventListener("click", clickButtonEncode)


var getButtonDecode = document.getElementById("buttonDecode")

function clickButtonDecode() {

  let getTextArea = document.getElementById("messageTextArea").value
  let getOffSet = Number(document.getElementById("quantity").value)
  let getBoxResult = document.getElementById("ResultTextarea")
  getBoxResult.innerHTML = cipher.decode(getOffSet, getTextArea)
  let getBoxOutput = document.getElementById("boxOutput")
  getBoxOutput.style.display = "block"

}

getButtonDecode.addEventListener("click", clickButtonDecode)


var getButtonOut = document.getElementById("buttonOut")

function clickButtonOut() {

  let deletMain = document.getElementById("main")
  deletMain.parentNode.removeChild(deletMain)
  let getDivTextBy = document.getElementById("texby")
  getDivTextBy.innerHTML = "Não sabemos de nada!"
  getDivTextBy.style.display = "block"
  let CreateImgBy= document.createElement("img")
  getDivTextBy.appendChild(CreateImgBy)
  CreateImgBy.srcset="https://media.giphy.com/media/3ov9jUEETwqYJaijGo/giphy.gif"


}
getButtonOut.addEventListener("click", clickButtonOut)


let getButtonRefresh = document.getElementById("buttonRefresh")

function clickButtonReiniciar() {

  document.location.reload(true)
}

getButtonRefresh.addEventListener("click", clickButtonReiniciar)


let getButtonCopy = document.getElementById("buttonCopy")

function clickButtonCopy() {

  let getBoxOutput = document.getElementById("ResultTextarea")
  getBoxOutput.select();
  document.execCommand("copy");

}
getButtonCopy.addEventListener("click", clickButtonCopy)