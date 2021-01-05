import {UserList} from "./usersList.js";

window.onload = () => {
  /*Parte 1: esperar 5 segundos*/
  let defaultSet = setTimeout(login, 5000);
  document.body.addEventListener('keyup', teclaPulsada);

  function teclaPulsada(ev) {
    if (ev.ctrlKey) {
      if (ev.key == 'F12') {
        clearTimeout(defaultSet);
        login();
      }
    }
  }
  function login(){

    document.getElementById("bienvenida").remove();
  
    let label = document.createElement("p");
    let textfield = document.createElement("input");
  
    label.innerHTML = "Usuario:";
    textfield.setAttribute("type","email");
    textfield.autofocus = true;
    textfield.id = "email";
    textfield.addEventListener('blur', logear);
    document.body.appendChild(label);
    document.body.appendChild(textfield);
  }


  /*Parte 2: login y cookies*/ 
  setUserList();
  let str = Cookies.get("usersList");
  let userlist = new UserList(str);
  

  function logear(){
    let email = document.getElementById('email');
    if(validate(email.value)){
        Cookies.set("userId",userlist.getUsers.length,{expires: 1});

      if(isNew(email.value)){

          userlist.addUser(email.value, Date.now());
        

      }else{
          userlist.changeDate(userlist.getUsers.length);
      }


    let cookie = JSON.stringify(userlist.json);
    
    Cookies.set("usersList",cookie,{expires: 1});

      window.location.replace('./saludo.html');

    }else{

      setTimeout(seleccionar, 1);

    }


     function seleccionar() {
      email.select();
    };

  };
  function isNew(email){
    let result = true;
    let users = userlist.getUsers();
    console.log(users);

    for ( let user of users) {

      if ( user.name == email){
        result = false;
      }

    }
    return result;

  };

  function validate(email) {
    var patt = /\w@\w.\w/;
    if (email.match(patt)) {
      
      return true;
    } else {
      return false;
    }
    };
   

    function setUserList(){

      if (Cookies.get("usersList") == null){

        
        let objUserList = {
          "users" : [
           
          
          ]
        }

        let strUserList = JSON.stringify(objUserList);
        Cookies.set("usersList",strUserList,{expires: 1});

      }
     
     Cookies.set("userId",-1,{expires: 1});
    };
};
