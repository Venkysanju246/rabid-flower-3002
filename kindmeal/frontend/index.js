
let logoutBtns = document.getElementById("logout-btns")
let signin = document.getElementById("signin")

function signIn() {
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    var form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', oauth2Endpoint);

    var params = {
        'client_id': '110757877155-bdhbuq97c1hgo9jg9fb9tue7hlos3331.apps.googleusercontent.com',
        'redirect_uri': 'http://127.0.0.1:5500/frontend/profile.html',
        'response_type': 'token',
        'scope': 'https://www.googleapis.com/auth/userinfo.profile',
        'include_granted_scopes': 'true',
        'state': 'pass-through value'
    }

    for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
    // signin.style.display = "none"
    // logoutBtns.style.display = "block"

}


