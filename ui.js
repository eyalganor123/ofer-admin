init();

function init() {
  addEventListeners();
}

function addEventListeners() {

  // Add show button click event
  var addShowBtn = document.querySelector('.add-show-button');
  addShowBtn.addEventListener('click', function() {
    openDialog('add show', 'TODO: add show form');
  });

  // Dialog background click event
  var dialogBg = document.querySelector('.dialog-background');
  dialogBg.addEventListener('click', function() {
    closeDialog();
  });

  // ... add here more events ...
}

// Render shows into dom
function renderShows(shows) {
  var listElement = document.querySelector('.shows-list');
  shows.forEach(function(show) {
    var listItemElement = document.createElement('li');
    listItemElement.innerHTML = show.description;
    listElement.appendChild(listItemElement);
  });
}
