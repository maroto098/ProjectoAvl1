window.onload = () => {
  let defaultSet = setTimeout(redirect, 5000);

  document.body.addEventListener('keyup', teclaPulsada);

  function teclaPulsada(ev) {
    if (ev.ctrlKey) {
      console.log('vale');
      if (ev.key == 'F10') {
        clearTimeout(defaultSet);
        redirect();
        console.log('vamos');
      }
    }
  }

  function redirect() {
    window.location.replace('./login.html');
  }
};
