

function createNewElement(type, params) {
    var parameters = Object.keys(params);
    var paramValues = Object.values(params);
    var newElement = document.createElement(type);

    for (var index = 0; index < parameters.length; index++) {
        newElement.setAttribute(parameters[index], paramValues[index]);
        if( parameters[index]=="innerHTML") {
            newElement.innerHTML=paramValues[index];
        }
    }
    return newElement;
}


