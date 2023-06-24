const allprf = document.querySelectorAll(".prf")
const allsection = document.querySelectorAll(".section")
const trash = document.querySelectorAll(".trash-can")

allprf.forEach(prf => {

    prf.addEventListener("dragstart", event => {
      prf.classList.add("dragging")
      event.dataTransfer.setData("id", prf.id)
  })


      prf.addEventListener("dragend", () => {
      prf.classList.remove("dragging")
  })
})

allsection.forEach (section => {

    section.addEventListener("dragover", event => {
        event.preventDefault()
    })


    section.addEventListener("drop", event =>{
        const id_prf = event.dataTransfer.getData("id")
        const prf = document.getElementById(id_prf)
        section.appendChild(prf)
    })
})

trash.forEach(trashCan => {
    trashCan.addEventListener("dragover", event => {
        event.preventDefault()
    })
    trashCan.addEventListener("drop", event =>{
        console.log(event.dataTransfer.getData("id"))
        const id_prf = event.dataTransfer.getData("id")
        const prf = document.getElementById(id_prf)
        prf.remove()
    })
})

