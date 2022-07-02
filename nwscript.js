var btn = document.querySelector("#btn");
btn.addEventListener("click", main);

function main() {
    getUserInfos()
    // updateArray()
    addRow()
    addUserToStorage(getUserInfos())
}
table = document.getElementsByTagName('tbody')[0];
let userID = 0;

function addRow() {
   userID ++;
    let user = getUserInfos();
        user.id = userID
        addUserInTable(user)
}
function addUserInTable(user) {
    table.innerHTML = `
    <tr>
    <td><input type='checkbox' ></td>
    <td>${user.id}</td>
    <td>${user.nom}</td>
    <td>${user.prenom}</td>
    <td>${user.naissance}</td>
    <td>${user.mail}</td>
    <td>${user.phone}</td>
    <td>${user.sexe}</td>
    <td>
    <button><i class='fa-solid fa-pen-to-square'></i></button>
    <button class='remove-line' onclick="removeLine()"><i class='fa-solid fa-delete-left'></i></button>
    <button><i class=' fa-regular fa-comment'></i></button>
    </td>
</tr>
${table.innerHTML}
        `
    }
function getDataFromStorage(){
    let  dataInStorage = localStorage.getItem('dataBase')
try{
    dataInStorage = dataInStorage ? JSON.parse(dataInStorage) : [];
}
catch(e){
    dataInStorage = [];
}
return dataInStorage
}
function addUserToStorage(user){
    let dataInStorage = getDataFromStorage()
    console.log(dataInStorage)
dataInStorage.push(user);

localStorage.setItem('dataBase', JSON.stringify(dataInStorage))

}

function displayTable(){
    dataInStorage = getDataFromStorage();
    dataInStorage.forEach(function(user){
        
        addUserInTable(user)
  
    });

}

function getUserInfos() {
    class personne {
        constructor(nom, prenom, naissance, mail, phone, sexe) {
            this.nom = nom;
            this.prenom = prenom;
            this.naissance = naissance;
            this.mail = mail;
            this.phone = phone;
            this.sexe = sexe;
        }
    }
    // AJOUTER LES INFOS DES INPUTS DANS UN OBJET
   return user = new personne(document.getElementById('nom').value, document.getElementById('prenom').value, document.getElementById('naissance').value, document.getElementById('mail').value, document.getElementById('phone').value, document.getElementById('sexe').value)
}