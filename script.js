

const btn = document.getElementById("btn")
btn.addEventListener("click", man())

function man() {
console.log('nom')
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom').value;
    const age = document.getElementById("age").value;
    const container = document.getElementById("container");

    container.innerHTML = `prhgbhnklen`

    
    console.log(nom.data)
}