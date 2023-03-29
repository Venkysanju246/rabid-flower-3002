function signIn() {
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    var form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', oauth2Endpoint);

    var params = {
        'client_id': '##yourclientid##',
        'redirect_uri': '##yourredirecturi##',
        'response_type': 'token',
        'scope': 'https://www.googleapis.com/auth/userinfo.profile',
        'include_granted_scopes': 'true',
        'state': 'pass-through value'
    }
}

