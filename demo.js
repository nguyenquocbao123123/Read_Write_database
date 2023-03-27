// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8jz-kHOJo4QEaWFOlymwT1Al3usKNWTI",
  authDomain: "kc236-n08.firebaseapp.com",
  databaseURL: "https://kc236-n08-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kc236-n08",
  storageBucket: "kc236-n08.appspot.com",
  messagingSenderId: "877976867684",
  appId: "1:877976867684:web:9c3c7f0c11031569f4e071",
  measurementId: "G-M01772E38P"
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
const database = firebase.database();
const db = getDatabase(app);

//get data from database------------
database.ref("/value/temp").on("value", function(snapshot){
    var temp = snapshot.val();
    document.getElementById("nhietdo").innerHTML = temp; 
});
database.ref("/value/hum").on("value", function(snapshot){
    var humidity = snapshot.val();
    document.getElementById("doam").innerHTML = humidity; 
});
//-------read-data-----------------
sendbtn.addEventListener('click',(e)=>{
    var data1 = document.getElementById('d1').value;
    var data2 = document.getElementById('d2').value;

    //const userId = push(child(ref(database),'users')).key;

    set(ref(db, 'data/' ), {
        data1: data1,
        data2: data2,
    });
alert("saved user");
});