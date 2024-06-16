/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({

    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,// animation repeat
})

sr.reveal(`.info`)
sr.reveal(`.numero`)
sr.reveal(`.ojala_andes`,{origin:'bottom'})
sr.reveal(`.p-especial`,{origin:'bottom'})
sr.reveal(`.p-dobleEspecial`,{origin:'bottom'})
sr.reveal(`.fila-nosotros`,{origin:'bottom'})
sr.reveal(`.opciones`,{origin:'bottom'})
sr.reveal(`.fila`,{origin:'bottom'})
sr.reveal(`.ojala_andes2`,{origin:'bottom'})
sr.reveal(`.comodidades`,{origin:'bottom'})
sr.reveal(`textarea`,{origin:'bottom'} )