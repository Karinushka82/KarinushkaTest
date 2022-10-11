function init() {
    console.error(`Mocking error ${innerHeight + a}`);
}

/**
 * For API calls we will use axios library and star wars API
 * axios documentations: https://axios-http.com/docs/api_intro
 * API documentations: https://swapi.dev/
 */
function getPlanets () {
    axios.get('https://swapi.dev/api/').then(() =>{console.log(`Res ${JSON.stringify(response)}`);});
}

function creatAPIError () {
    const response = axios.get('https://swapi.dev/api/people/202/');
    reportCustomError('Star Wars... Really!');
    console.error(`Res ${JSON.stringify(response)}`);
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.style.visibility = 'visible';
}

function onLangSelect(selectedLang) {
    if (selectedLang === 'French') {
        reportCustomError ();
    }
}

function reportCustomError() {
    console.log('Send CE')
   _uxa.push(['trackError', 'Oopps', {"severity" : 'urgent', "language": getAppLang()}]);
}

function getAppLang() {
    return 'english'
}
init();
