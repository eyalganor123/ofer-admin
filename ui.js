init();

function init() {
    addEventListeners();
}

function getForm() {
    var form = document.createElement('UL')
    var inputDescription = document.createElement('input');
    inputDescription.setAttribute("placeholder", "Description");
    inputDescription.setAttribute("id", "formDescription");
    inputDescription.autofocus = true;

    var inputLocation = document.createElement('input');
    inputLocation.setAttribute("placeholder", "Location");
    inputLocation.setAttribute("id", "formLocation");

    var inputDate = document.createElement('input');
    inputDate.setAttribute("placeholder", "Date");
    inputDate.setAttribute("id", "formDate");

    var button = document.createElement('input')
    button.setAttribute("onclick", "saveForm()");
    button.setAttribute("type", "button");
    button.setAttribute("value", "add");

    form.appendChild(inputDescription);
    form.appendChild(inputLocation);
    form.appendChild(inputDate);
    form.appendChild(button);
    return form;
}

function addEventListeners() {

    // Add show button click event
    var addShowBtn = document.querySelector('.add-show-button');
    addShowBtn.addEventListener('click', function() {
        openDialog('add show', getForm());
    });

    // Dialog background click event
    var dialogBg = document.querySelector('.dialog-background');
    dialogBg.addEventListener('click', function() {
        closeDialog();
    });

    // ... add here more events ...

    // click on  item to update;

}

// Render shows into dom
function renderShows(shows) {
    var listElement = document.querySelector('.shows-list');
    listElement.innerHTML = "";
    shows.forEach(function(show) {
        var listItemElement = document.createElement('li');
        var x = show.id;

        var deleteButton = document.createElement('input');

        Object.assign(deleteButton, {
            type: "button",
            className: 'delButton',
            height: 20, // pixels
            width: 60, // pixels
            value: "x",
            onclick: function() {
                openDialog('delete item', getDeleteForm(show.id));
            }
        })
        Object.assign(listItemElement, {
            id: x,
            onclick: function() {
                openDialog('update item', getUpdateForm(show.description, show.showLocation, show.date, x));
            }
        })
        listItemElement.innerHTML = show.description + " " + show.showLocation + " " + show.date;
        listElement.appendChild(listItemElement);
        listElement.appendChild(deleteButton);
    });
}

function saveForm() {
    var description = document.getElementById("formDescription");
    var location = document.getElementById("formLocation");
    var date = document.getElementById("formDate");
    createShow(description.value, location.value, date.value);
    console.table(state.shows);
    renderShows(state.shows);
    closeDialog();
}

function getDeleteForm(index) {
    console.log(index - 1);
    var form = document.createElement('UL')
    var inputDescription = document.createElement('div');
    inputDescription.setAttribute("value", "Description");
    inputDescription.setAttribute("id", "formDescription");
    inputDescription.autofocus = true;
    inputDescription.innerHTML = "Are You Sure?";

    var button = document.createElement('input');
    Object.assign(button, {
        type: "button",
        className: 'delete',
        height: 20, // pixels
        width: 60, // pixels
        value: "delete",
        onclick: function() {
            finalDelete(index);
        }
    })

    form.appendChild(inputDescription);

    form.appendChild(button);

    return form;

}

function finalDelete(index) {
    console.log(index);
    deleteShow(index);
    renderShows(state.shows);
    closeDialog();
}

function getUpdateForm(description, location, date, id) {
    var form = document.createElement('UL')
    var inputDescription = document.createElement('input');
    inputDescription.setAttribute("value", description);
    inputDescription.setAttribute("id", "updateDescription");
    inputDescription.autofocus = true;

    var inputLocation = document.createElement('input');
    inputLocation.setAttribute("value", location);
    inputLocation.setAttribute("id", "updateLocation");

    var inputDate = document.createElement('input');
    inputDate.setAttribute("value", date);
    inputDate.setAttribute("id", "updateDate");

    var button = document.createElement('input')
        // button.setAttribute("onclick", "saveForm()");
        // button.setAttribute("type", "button");
        // button.setAttribute("value", "update");
        // button.setAttribute("class", "updateButton");

    Object.assign(button, {
        type: "button",
        className: 'updateButton',
        height: 20, // pixels
        width: 60, // pixels
        value: "Update",
        onclick: function(index) {
            var updatedDescription = document.getElementById('updateDescription').value;
            var updatedLocation = document.getElementById('updateLocation').value;
            var updatedDate = document.getElementById('updateDate').value;

            var updatedObject = { description: updatedDescription, showLocation: updatedLocation, date: updatedDate };
            updateShow(updatedObject, id);
            renderShows(state.shows);
            closeDialog();
        }
    })


    // var updateListener = document.getElementsByClassName("updateButton")
    // updateListener.addEventListener('click', function() {
    //     alert(123);
    // });


    form.appendChild(inputDescription);
    form.appendChild(inputLocation);
    form.appendChild(inputDate);
    form.appendChild(button);
    return form;
}