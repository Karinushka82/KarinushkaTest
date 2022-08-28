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
    reportCustomError('Star Wars... Really!');
}

function creatAPIError () {
    const response = axios.get('https://swapi.dev/api/people/202/');
    console.error(`Res ${JSON.stringify(response)}`);
}

function onLangSelect(selectedLang) {
    if (selectedLang === 'French') {
        reportCustomError ();
    }
}

function reportCustomError() {
   _uxa.push(['trackError', 'The visitor typed wrong language option in UI', {"Language" : 'French'}]);
}
init();
