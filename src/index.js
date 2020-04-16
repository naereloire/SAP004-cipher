import cipher from './cipher.js';


var getButtonEncode = document.getElementById("buttonencode")

function clickButtonEncode() {

  let getTextArea = document.getElementById("messagetextarea").value
  let getOffSet = Number(document.getElementById("input-number").value)
  let getBoxResult = document.getElementById("resulttextarea")
  getBoxResult.innerHTML = cipher.encode(getOffSet, getTextArea)
  let getBoxOutput = document.getElementById("boxout")
  getBoxOutput.style.display = "block"

}

getButtonEncode.addEventListener("click", clickButtonEncode)


var getButtonDecode = document.getElementById("buttondecode")

function clickButtonDecode() {

  let getTextArea = document.getElementById("messagetextarea").value
  let getOffSet = Number(document.getElementById("input-number").value)
  let getBoxResult = document.getElementById("resulttextarea")
  getBoxResult.innerHTML = cipher.decode(getOffSet, getTextArea)
  let getBoxOutput = document.getElementById("boxout")
  getBoxOutput.style.display = "block"

}

getButtonDecode.addEventListener("click", clickButtonDecode)


var getButtonOut = document.getElementById("buttonout")

function clickButtonOut() {

  let deletMain = document.getElementById("main")
  deletMain.parentNode.removeChild(deletMain)
  let getDivTextBy = document.getElementsByClassName("tex-by")
  getDivTextBy= getDivTextBy.item(0)
  getDivTextBy.innerHTML = "Não sabemos de nada!"
  getDivTextBy.style.display = "block"
  let CreateImgBy= document.createElement("img")
  getDivTextBy.appendChild(CreateImgBy)
  CreateImgBy.srcset="https://media.giphy.com/media/3ov9jUEETwqYJaijGo/giphy.gif"


}
getButtonOut.addEventListener("click", clickButtonOut)


let getButtonRefresh = document.getElementById("buttonrefresh")

function clickButtonRefresh() {

  document.location.reload(true)
}

getButtonRefresh.addEventListener("click", clickButtonRefresh)


let getButtonCopy = document.getElementById("buttoncopy")

function clickButtonCopy() {

  let getBoxOutput = document.getElementById("resulttextarea")
  getBoxOutput.select();
  document.execCommand("copy");

}
getButtonCopy.addEventListener("click", clickButtonCopy)