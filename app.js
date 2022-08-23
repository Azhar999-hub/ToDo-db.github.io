// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCODRplyWoXS07jkod__gvLirQwrRzw_lo",
  authDomain: "todo-db-9211a.firebaseapp.com",
  projectId: "todo-db-9211a",
  storageBucket: "todo-db-9211a.appspot.com",
  messagingSenderId: "994314267579",
  appId: "1:994314267579:web:f7dc20b51683b16695729e",
  measurementId: "G-6N1XY7KHR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const databs = getDatabase();


// ____________________________________________________________________


var list =[];
var inp = document.getElementById("inp");
var parent = document.getElementById("parent");




function renderList (){
   

    parent.innerHTML ="";
    for(var i = 0; i < list.length; i++){
        parent.innerHTML +=`<li> <span> ${list[i].text}</span>
        <span class="time"> ${list[i].time}</span> <button class="edit" onclick="edititem(this)">Edit</button> <button class="delete" onclick="deleteitem(this)">Delete</button> 
        </li> `;
             
         }   
}

window.add= function(){
    var inp =  document.getElementById("inp");
    var reference = ref(databs, 'inps/' );
    var newRef = push(reference)
    set(newRef, {
        text: inp.value,
        time: new Date().getHours()+":"+new Date().getMinutes(),
        id: newRef.key,

    });



    var obj ={
        text: inp.value,
        time: new Date().getHours()+":"+new Date().getMinutes(),
    };
    

    
    list.push(obj);
    renderList();

    inp.value="";
}

window.DeleteAll = function(){

    parent.innerHTML = "";

}


function edititem(e) {

    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
  }

  function deleteitem(e){
    e.parentNode.remove();
}




