import {UserList} from "./usersList.js";

window.onload = () => {
  let str = Cookies.get("usersList");
  let userlist = new  UserList(str);
  let user = Cookies.get("userId");
 console.log(JSON.stringify(userlist.json));
 
  
  document.getElementById('saludo').innerHTML =
    'Hola ' + userlist.getName(user);
  document.getElementById("lastCon").innerHTML = userlist.getDate(user)

};