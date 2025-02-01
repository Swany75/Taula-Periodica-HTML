// VARIABLES

let selection = null
let elements = null

// FUNCIONS 

function selectElements() {
    
    // Selecció del Menú

    if (selection == null) {
        this.classList.add("blau");
        selection = this;
    } else if (selection == this) {
        this.classList.remove("blau");
        selection = null
    }  else {
        selection.classList.remove("blau");
        this.classList.add("blau");
        selection = this;
    }

    // Selecció de la Taula Periodica

    let elements = document.querySelectorAll('.element');

    for (let i = 0; i < elements.length; i++) {
        if (selection == null || elements[i].classList.contains(selection.id)) {
            elements[i].classList.remove("eliminaElement");
        } else {
            elements[i].classList.add("eliminaElement");
        }

    }

}


// ASSIGNACIÓ DE LES FUNCIONS

const selector = document.querySelectorAll('li');

for (let i = 0; i < selector.length; i++) {
    selector[i].addEventListener("click", selectElements);
}