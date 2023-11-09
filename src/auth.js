

const CLIENT_ID = '463066749424-rgk5td66egs5vn23r5jibabadq2rsdjf.apps.googleusercontent.com';
const API_KEY = 'AIzaSyB6sN1ePSrsktbVmqju-K3Ry--VQ-rZ0Mg';

const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

let tokenClient;
let gapiInited = false;
let gisInited = false;

document.getElementById("gapi").addEventListener("load",gapiLoaded());
document.getElementById("gis").addEventListener("load",gisLoaded());


let isUserAuthenticated = false;

function onSignIn(googleUser) {
    isUserAuthenticated = true;
}

function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    gapiLoaded();
}

function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '',
    });
    gisInited = true;
}


function handleAuthClick() {
    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
            throw (resp);
        }   
        await getPedidos();
    };

    if (gapi.client.getToken() === null) {
        tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
        tokenClient.requestAccessToken({ prompt: '' });
    }
}

function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
        google.accounts.oauth2.revoke(token.access_token);
        gapi.client.setToken('');
        document.getElementById('content').innerText = '';
        document.getElementById('authorize_button').innerText = 'Authorize';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    handleAuthClick();
});