window.onload = () => {
  let user = document.getElementById('user');

  user.addEventListener('blur', comprobar);

  function comprobar() {
    var patt = /\w@\w.\w/;
    if (user.value.match(patt)) {
      Cookies.set('currentUser', user.value);
      window.location.replace('./saludo.html');
    } else {
      setTimeout(seleccionar, 1);
    }
  }

  function seleccionar() {
    user.select();
  }
};
