document.addEventListener('DOMContentLoaded', (event) => { //Google button funtionality
    const button = document.getElementById('googlebtn');
    button.addEventListener('click', () => {
        window.location.href = 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=251853629051-4v7vu75n1dgl5ki71q3im59mgtj034ta.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fzed-app-444bf.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDlS7NwCUIThkpUtQIcXdq-yZ0R37gbt6MQvrq0ltY5rebT5L-TpEQWBlTxrKx4Su-HX4S0TGxN5i7d_4h1_P8AAPOZweDMZDz_DMaMBIbDHLlDFmZ7kmPo6DTm_ZPjSzsQhNQviJGe6xogvHpbvbu7Mi8Dj5pwcabYUf6B0Cf1xi3TcFvMKGNNHAiElOZ6gppEYQKfOBeBUdw8xpc5DGp7emt-ikIwduH2wpGX0rHX_CE5qeJ0e-yeFaWNmojo9BTFWLgejsygWUXi5Zu_j-L8NHPqSq4OvvXCD6O_hUwev8tZIBgvbPw2k7dXMcW5NXZCZyGw&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile&context_uri=https%3A%2F%2Fdev.zed.business&service=lso&o2v=1&ddm=1&flowName=GeneralOAuthFlow';
    });
});

document.addEventListener('DOMContentLoaded', (event) => { //Facebook button funtionality
    const button = document.getElementById('facebookbtn');
    button.addEventListener('click', () => {
        window.location.href = 'https://www.facebook.com/login.php?skip_api_login=1&api_key=185480867675953&kid_directed_site=0&app_id=185480867675953&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv8.0%2Fdialog%2Foauth%3Fresponse_type%3Dcode%252Cgranted_scopes%26client_id%3D185480867675953%26redirect_uri%3Dhttps%253A%252F%252Fzed-app-444bf.firebaseapp.com%252F__%252Fauth%252Fhandler%26state%3DAMbdmDl3olHoxaGZXN-QZWroxPPaSQfvRtyOZU0n-xs8ghjkZTCNrHtG-QYycKMJb-tufBzUN8wr9Or3R6w1eezNOKYnsqg1fHFrFHbI2DgyoBAXHqQfFoZm3AEpV-1UqNwgEh0__rP_EqLIBl6PsZpsQmhMu4grUGtDgT02S6mc6r9013UJfL0DTvM7CaPWbaJQbf4yLJqyxTdIFeqmcYeN-r7eM_coLHs6DPgrOHDhbxLikeD_c90QxNLUrngC2ilxirJkpxMx-rPEZgr7tBFCy0ztXJCz0wTDYnrTlF_rhg0XQ_OMkiANa5XV5ATlLMaqyUNhVBbiL0xwnNTCTA%26scope%3Dpublic_profile%252Cemail%26context_uri%3Dhttps%253A%252F%252Fdev.zed.business%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Df26a17a5-22fb-422c-89ab-423657b536e6%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fzed-app-444bf.firebaseapp.com%2F__%2Fauth%2Fhandler%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DAMbdmDl3olHoxaGZXN-QZWroxPPaSQfvRtyOZU0n-xs8ghjkZTCNrHtG-QYycKMJb-tufBzUN8wr9Or3R6w1eezNOKYnsqg1fHFrFHbI2DgyoBAXHqQfFoZm3AEpV-1UqNwgEh0__rP_EqLIBl6PsZpsQmhMu4grUGtDgT02S6mc6r9013UJfL0DTvM7CaPWbaJQbf4yLJqyxTdIFeqmcYeN-r7eM_coLHs6DPgrOHDhbxLikeD_c90QxNLUrngC2ilxirJkpxMx-rPEZgr7tBFCy0ztXJCz0wTDYnrTlF_rhg0XQ_OMkiANa5XV5ATlLMaqyUNhVBbiL0xwnNTCTA%23_%3D_&display=page&locale=en_GB&pl_dbl=0';
    });
});

document.addEventListener('DOMContentLoaded', (event) => { //Email button funtionality
    const button = document.getElementById('emailbtn');
    button.addEventListener('click', () => {
        window.location.href = 'Emailsignup.html';
    });
});