
// var btn = document.querySelector("#btn");
// btn.addEventListener("click", addUser);


// let jsArray = []
// let userID
// let dataFromLocalStorage
// let table = document.getElementsByTagName('tbody')[0];

// // VERIFIER LE LOCALSTORAGE
// function getDataFromStorage() {
//     dataFromLocalStorage = localStorage.getItem("list")
//     dataFromLocalStorage = JSON.parse(dataFromLocalStorage)
//     return dataFromLocalStorage
// }

// // RECUPERER LES DONNER DU STOCKAGE
// getDataFromStorage()

// // SI IL Y A UN CONTENUE, L'AFFICHER
// if (dataFromLocalStorage) {
//     console.log('exist')
//     parcuorArray(dataFromLocalStorage)

//     // METTRE A JOUR LE JSARRAY
//     updateArray()
// }

// function AddLine() {
//     table.innerHTML = `
//         <tr>
//         <td><input type='checkbox' user-name="'${nom}'" class = "user-checkBox"></td>
//         <td>${id}</td>
//         <td>${nom}</td>
//         <td>${prenom}</td>
//         <td>${naissance}</td>
//         <td>${mail}</td>
//         <td>${phone}</td>
//         <td>${sexe}</td>
//         <td>
//         <button><i class='fa-solid fa-pen-to-square'></i></button>
//         <button class='remove-line'><i class='fa-solid fa-delete-left'></i></button>
//         <button><i class=' fa-regular fa-comment'></i></button>
//         </td>
//     </tr>
//     ${table.innerHTML}
//             `
// }
// function parcuorArray(arr) {
//     // dataFromLocalStorage.forEach(element => {
//     arr.forEach(element => {
//         id = element.id
//         nom = element.nom
//         prenom = element.prenom
//         naissance = element.naissance
//         mail = element.mail
//         phone = element.phone
//         sexe = element.sexe

//         table = document.getElementsByTagName('tbody')[0];
//         AddLine()
//     });
// }




// // S'IL N'Y A PAS DE CONTENUE,  .................


// // ON RENTRE DANS LA FONCTION main()

// function addUser() {
//     getUserInfos()
//     // updateArray()
//     addRow()

// }


// // getUserInfos()
// function getUserInfos() {
//     class personne {
//         constructor(id, nom, prenom, naissance, mail, phone, sexe) {
//             this.id = id;
//             this.nom = nom;
//             this.prenom = prenom;
//             this.naissance = naissance;
//             this.mail = mail;
//             this.phone = phone;
//             this.sexe = sexe;
//         }
//     }
//     // AJOUTER LES INFOS DES INPUTS DANS UN OBJET
//     user = new personne(userID, document.getElementById('nom').value, document.getElementById('prenom').value, document.getElementById('naissance').value, document.getElementById('mail').value, document.getElementById('phone').value, document.getElementById('sexe').value)
//     console.log(user)
// }

// function updateArray() {
//     jsArray = dataFromLocalStorage
// }


// function addRow() {
//     userID = 0
//     // console.log(userID++)

//     // AJOUTER LE NOUVEL  UTILISATEUR
//     jsArray.push(user)

//     // REAJOUTER AU STORAGE
//     localStorage.setItem("list", JSON.stringify(jsArray))
//     // ECRASER L4ANCIEN AFFICHAGE
//     table.innerHTML = ""
//     // AFFICHER

//     parcuorArray(jsArray)
// }


// // table.addEventListener("click", removeLine);

// function removeSelectedCheckbox(e) {
//     // alert('deleted')
//     let checkedBox = table.getElementsByClassName('user-checkBox')
//     let toRemove = []


//     Array.from(checkedBox).forEach(element => {
//         if (element.checked) {
//             console.log('element' + element.getAttribute('user-name'))

//             toRemove.push(element.getAttribute('user-name'))

//         }
//     });
//     console.log(toRemove)

//     let users = getDataFromStorage()

//     // users.map((item)=>{
//     //     console.log(item)
//     //     console.log(item.indexOff)
//     // })
//     let keepUsers = users.filter((user) => {
//         console.log(toRemove)
//         console.log(users.indexOf(user))
//         console.log(toRemove.indexOf(user))
//         return toRemove.indexOf(user.nom) < 0;

//     })
//     console.log(keepUsers)
// } 



















var btn = document.querySelector("#btn");
btn.addEventListener("click", addUser);


let jsArray = []
let dataFromLocalStorage
let table = document.getElementsByTagName('tbody')[0];

// VERIFIER LE LOCALSTORAGE

// RECUPERER LES DONNER DU STOCKAGE
// getDataFromStorage()

// SI IL Y A UN CONTENUE, L'AFFICHER

function displayInTable() {
    table.innerHTML = `
        <tr>
        <td><input type='checkbox' user-id="${id}" class = "user-checkBox"></td>
        <td>${id}</td>
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${naissance}</td>
        <td>${mail}</td>
        <td>${phone}</td>
        <td>${sexe}</td>
        <td>
        <button><i class='fa-solid fa-pen-to-square'></i></button>
        <button class='remove-line'><i class='fa-solid fa-delete-left'></i></button>
        <button><i class=' fa-regular fa-comment'></i></button>
        </td>
    </tr>
    ${table.innerHTML}
    `

}
function parcuorArray(arr) {
    // dataFromLocalStorage.forEach(element => {
    arr.forEach(element => {
        id = element.id
        nom = element.nom
        prenom = element.prenom
        naissance = element.naissance
        mail = element.mail
        phone = element.phone
        sexe = element.sexe

        // table = document.getElementsByTagName('tbody')[0];
        displayInTable()
    });
}

// S'IL N'Y A PAS DE CONTENUE,  .................


// ON RENTRE DANS LA FONCTION main()
let userID = 0




// getUserInfos()
function getUserInfos() {
    class personne {
        constructor(id, nom, prenom, naissance, mail, phone, sexe) {
            this.id = id;
            this.nom = nom;
            this.prenom = prenom;
            this.naissance = naissance;
            this.mail = mail;
            this.phone = phone;
            this.sexe = sexe;
        }
    }
    // AJOUTER LES INFOS DES INPUTS DANS UN OBJET
    user = new personne(userID, document.getElementById('nom').value, document.getElementById('prenom').value, document.getElementById('naissance').value, document.getElementById('mail').value, document.getElementById('phone').value, document.getElementById('sexe').value)
}

// table.addEventListener("click", removeLine);

function removeSelectedCheckbox() {
    // alert('deleted')
    let checkedBox = table.getElementsByClassName('user-checkBox')
    let toRemove = []



    Array.from(checkedBox).forEach(element => {
        if (element.checked) {
            console.log('element' + parseInt(element.getAttribute('user-id')))

            toRemove.push(parseInt(element.getAttribute('user-id')))

        }
    });
    console.log(toRemove)

    let users = getUsersFromStorage()

    let keepUsers = users.filter((user) => {
        // console.log(toRemove)
        console.log(users.indexOf(user))
        return toRemove.indexOf(user.id) < 0;

    })
    console.log(keepUsers)

    localStorage.setItem('users', JSON.stringify(keepUsers))
    table.innerHTML = ''
    parcuorArray(keepUsers)
}




// *********************REPRISE ************************


function addUser() {
    getUserInfos()
    userID++
    user.id = userID
    table.innerHTML = `
        <tr>
        <td><input type='checkbox' user-name="'${nom}'" class = "user-checkBox"></td>
        <td>${user.id}</td>
        <td>${user.nom}</td>
        <td>${user.prenom}</td>
        <td>${user.naissance}</td>
        <td>${user.mail}</td>
        <td>${user.phone}</td>
        <td>${user.sexe}</td>
        <td>
        <button><i class='fa-solid fa-pen-to-square'></i></button>
        <button class='remove-line'><i class='fa-solid fa-delete-left'></i></button>
        <button><i class=' fa-regular fa-comment'></i></button>
        </td>
    </tr>
    ${table.innerHTML}
    `
    getUserFromStorage(user)
    console.log(user)

}

function getUserFromStorage(user) {

    getUsersFromStorage()

    dataFromLocalStorage.push(user)

    localStorage.setItem('users', JSON.stringify(dataFromLocalStorage))

    return dataFromLocalStorage
}

function getUsersFromStorage() {
    dataFromLocalStorage = localStorage.getItem("users")
    try {
        dataFromLocalStorage = dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : [];
    }
    catch (e) {
        dataFromLocalStorage = [];
    }

    return dataFromLocalStorage
}


// ****************** RECHERCHE REGEX *****************

function filter(event) {
    let key = event.target.value
    let sexKey = document.getElementById('sexe_filter').value
    let users = getUsersFromStorage()

   let userFiltered = users.filter((user)=>{
        // apres il faut essayer avec include ; 'i' pour dire insensible à la case (majuscule ou minicule)
        return(new RegExp(sexKey, 'i')).test(user.sexe)&&
         (new RegExp(key, 'i')).test(user.nom) || 
        (new RegExp(key, 'i')).test(user.prenom) ||
        (new RegExp(key, 'i')).test(user.naissance) ||
        (new RegExp(key, 'i')).test(user.mail) ||
        (new RegExp(key, 'i')).test(user.phone) 


        
    })
    table.innerHTML = ''
    console.log(sexKey);
    parcuorArray(userFiltered)
}

// function filterSexe(event) {
//     let chose = event.target.value
//     let users = getUsersFromStorage()
//     let last = users.filter((user)=>{
//         // apres il faut essayer avec include ; 'i' pour dire insensible à la case (majuscule ou minicule)
//         return (new RegExp(chose, 'i')).test(user.sexe)
//     })
//     table.innerHTML = ''

//     parcuorArray(last)
    
//     console.log(chose);
// }


(function () {
    console.log('debut')
    getUsersFromStorage()
    dataFromLocalStorage.forEach(function (user) {
        userID = user.id > userID ? user.id : userID;
    })
    parcuorArray(dataFromLocalStorage)
}())

