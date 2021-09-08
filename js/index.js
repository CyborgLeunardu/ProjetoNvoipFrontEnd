var btnSearch = document.getElementById("btn-search")
var btnPrevious = document.getElementById("btn-previous")
var btnNext = document.getElementById("btn-next")
var btnEdit = document.getElementById("btn-edit")
var btnDelete = document.getElementById("btn-delete")
var btnSendSMS = document.getElementById("btn-sendSMS")
var btnVoiceSMS = document.getElementById("btn-voiceSMS")
var sectionMother = document.getElementById("section-mother")
var body = document.getElementById("body")
var menu = document.getElementById("menu")


function openPopup(idPopup){
    var popup = document.getElementById(idPopup)
    popup.style.display = "block"  

    btnSearch.disabled = true
    btnPrevious.disabled = true
    btnNext.disabled = true
    btnEdit.disabled = true
    btnDelete.disabled = true
    btnSendSMS.disabled = true
    btnVoiceSMS.disabled = true
    sectionMother.classList.add("popup-aberto")
    menu.classList.add("popup-aberto")
    body.style.backgroundColor = "#898989"

}

function closePopup(idPopup){
    document.getElementById(idPopup).style.display = "none"

    btnSearch.disabled = false;
    btnPrevious.disabled = false;
    btnNext.disabled = false;
    btnEdit.disabled = false;
    btnDelete.disabled = false;
    btnSendSMS.disabled = false;
    btnVoiceSMS.disabled = false;

    sectionMother.classList.remove("popup-aberto")
    menu.classList.remove("popup-aberto")
    body.style.backgroundColor = "#ededed"
}