/**
 * Create a batch of HTML elements
 * @param {tagName, attributes } elementsArray 
 * @returns [] // array of HTML elements
 */
function createElements (elementsArray) {
    
  var elements = [];
  // Iterate over data array
  elementsArray.forEach (elementData => {
    
    // Create an HTML element
    var element = document.createElement (elementData.tagName);

    // Attach attributes to HTML element
    Object.keys (elementData).forEach (attributeKey => {
      if (attributeKey !== 'tagName') {
        var attribute = elementData[attributeKey];
        element[attributeKey] = attribute;
      }      
    });

    elements.push (element);
  });
  return elements;
}

function createNewElement (type, params) {
  var parameters = Object.keys (params);
  var paramValues = Object.values (params);
  var newElement = document.createElement (type);

  for (var index = 0; index < parameters.length; index++) {
    newElement.setAttribute (parameters[index], paramValues[index]);
    if (parameters[index] == 'innerHTML') {
      newElement.innerHTML = paramValues[index];
    }
  }
  return newElement;
}
