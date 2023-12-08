function verifyPassword() {
    var pw = document.getElementById('contrasena');
    var pwc = document.getElementById('confirmacion')
    var btn = document.getElementById('registrar')

    if (pw.value.length < 8) {
        document.getElementById('pw-msj').innerHTML =
            '* La contrasena debe tener al menos 8 caracteres';
        pw.focus();
        document.getElementById('pw-msj').classList.add('red');
        btn.disabled = true;
        pwc.disabled = true;
        return false;
    } else {
        document.getElementById('pw-msj').innerHTML = 'La contrasena es segura.';
        document.getElementById('pw-msj').classList.add('green');
        btn.disabled = false;
        pwc.disabled = false;
        return;
    }
}

function confirmPassword() {
    var pw = document.getElementById('contrasena').value;
    var pwc = document.getElementById('confirmacion');
    var btn = document.getElementsById('registrar');

    if (pw == pwc.value) {
        document.getElementById('pwc-msj').innerHTML =
            'Correcto! Las contrasenas coinciden.';
        document.getElementById('pwc-msj').classList.add('green')
        return;
    } else {
        document.getElementById('pwc-msj').innerHTML =
            '* Su contrasena no coincide. Intente de nuevo.';
        pwc.focus();
        pwc.value = ''
        document.getElementById('pwc-msj').classList.add('red');
        btn.disabled = true;
        pwc.disabled = true;
        return false;
    }
}

function sendRegister() {
    var nombre = document.getElementById('nomobre');
    alert('Gracias' + nombre.value + ' Tu registro fue exitoso.')
}