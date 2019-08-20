function getAddForm() {
    var addFormParams = [{ class: "container" },
    { id: "inputDescription", placeholder: "Description" },
    { id: "inputLocation", placeholder: "Location" },
    { id: "inputDate", type: "date", required: "required" },
    { class: "add-submit-button", innerHTML: "go!" }];
    var addElements = ["div", "input", "input", "input", "button"];
    var addVariables = ["form", "inputDescription", "inputLocation", "inputDate", "addButton"]

    for (var index = 0; index < addVariables.length; index++) {
        window[addVariables[index]] = createNewElement(addElements[index], addFormParams[index]);
    }

    addButton.addEventListener('click', function () {
        validate(inputDescription.value, inputLocation.value, inputDate.value);

    });

    form.appendChild(inputDescription);
    form.appendChild(inputLocation);
    form.appendChild(inputDate);
    form.appendChild(addButton);

    return form;
}


function validate(desc, loc, date) {

    if (desc == "" || loc == "" || date == "") {
        alert("you must enter all fields");
        return;
    } else {
        clearList();
        document.getElementById('empty-state').innerHTML = "";
        createShow(desc, loc, date);
        renderShows(state.shows);
        var testObject = state.shows;
        localStorage.setItem('testObject', JSON.stringify(testObject));
        closeDialog();
    }
}

function clearList() {
    var ul = $("ol li");
    ul.remove();
    return true;
}

function getEditForm(i) {
    var form = document.createElement('div');

    var inputDescriptionParams = { id: "inputDescription", value: state.shows[i].description };
    var inputDescription = createNewElement('input', inputDescriptionParams);

    var inputLocationParams = { id: "inputLocation", value: state.shows[i].showLocation };
    var inputLocation = createNewElement('input', inputLocationParams);

    var inputDateParams = { type: "date", name: "date", id: "inputDate", value: state.shows[i].date };
    var inputDate = createNewElement('input', inputDateParams);

    var addButtonParams = { class: "add-submit-button", innerHTML: "submit", onclick: "finalAdd(" + i + ")"  };
    var addButton = createNewElement('button', addButtonParams);

    var addDeleteParams = { class: "delete-button", innerHTML: "delete", onclick: "finalDelete(" + i + ")" };
    var deleteButton = createNewElement('button', addDeleteParams);

    form.appendChild(inputDescription);
    form.appendChild(inputLocation);
    form.appendChild(inputDate);
    form.appendChild(addButton);
    form.appendChild(deleteButton);

    return form;
}
function finalDelete(i) {
    deleteShow(i);
    clearList();
    if (state.shows == "") {
        document.getElementById("empty-state").innerHTML = "you have no shows, press + to add a new show";
    }
    renderShows(state.shows);
    setLocal();
    closeDialog();
}
function finalAdd(i) {
    var newDescription = document.getElementById("inputDescription").value;
    var newLocation = document.getElementById("inputLocation").value;
    var newDate = document.getElementById("inputDate").value;
    var newData = {
        description: newDescription,
        showLocation: newLocation,
        date: newDate};

    updateShow(newData, i);
    clearList();
    renderShows(state.shows);
    closeDialog();
}

getLocal();