// document.getElementById("registration").addEventListener("submit" , function(event) {
//     event.preventDefault(); //Prevent From refreshing the page

//     let UserData = {
//         username : document.getElementById("username").value,
//         email : document.getElementById("email").value,
//         password : document.getElementById("password").value 
//     };

//     let xhr = new XMLHttpRequest();

//     xhr.open("POST" , "https://jsonplaceholder.typicode.com/posts" , true);
//     xhr.setRequestHeader("Content-Type" , "application/json");

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState == 4 && xhr.status == 201) {
//             console.log("User registered " , UserData);

//             let users = JSON.parse(localStorage.getItem("users")) || [] ;
//             users.push(UserData);
//             localStorage.setItem("users" , JSON.stringify(users));

//             window.location.href = "user_list.html";

//         }
//     };

//     xhr.send(JSON.stringify(UserData));

// }
// );