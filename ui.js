init();

function init() {
    addEventListeners();

}

function addEventListeners() {

    // Add show button click event
    var addShowBtn = document.querySelector('.add-show-button');
    addShowBtn.addEventListener('click', function() {
        openDialog('add show', getAddForm());
    });

    // Dialog background click event
    var dialogBg = document.querySelector('.dialog-background');
    dialogBg.addEventListener('click', function() {
        closeDialog();
    });

    // ... add here more events ...

    // var addShowSubmit = document.querySelector('.add-submit-button');
    // addShowSubmit.addEventListener('click', function() {
    //     alert(123);
    // closeDialog();

}

// Render shows into dom
function renderShows(shows) {
    var listElement = document.querySelector('.shows-list');
    var i = -1;
    shows.forEach(function(show) {
        i++;
        var listItemElement = document.createElement('li');
        listItemElement.setAttribute("id", i);
        listItemElement.setAttribute("onclick", "openEditDialog(" + i + ")");
        listItemElement.innerHTML = show.description + "   " + show.showLocation + "       " + show.date;
        listElement.appendChild(listItemElement);
    });
}

function openEditDialog(i) {
    // alert(i);
    openDialog('edit your show', getEditForm(i));
}