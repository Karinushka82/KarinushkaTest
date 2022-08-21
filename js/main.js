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

function reportCustomError(errorValue) {
   _uxa.push(['trackError', 'The visitor selected wrong option in UI', {"custom att 1" : errorValue}]);
}
init();
