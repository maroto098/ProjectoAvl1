window.onload = () => {
  document.getElementById('saludo').innerHTML =
    'Hola ' + Cookies.get('currentUser');
};
