include('utils.js');


function onRender(input) {
    print("hello, i'm inside the onRender function");

    var validationErrors = [];
    var validationWarnings = [];

    if (input.currentAnalysisSettings == null) {
        //null first time, and this way we can safely use it in the remainder of he javascript
        input.currentAnalysisSettings = input.analysisSettings;
    }
    
    var storageSize = checkStorageSize(input, validationErrors);

    switch(input.context) {
        case 'Initial': {
            renderInitial(input, validationErrors, validationWarnings);
            break;
        }
        case 'FieldChanged': {
            renderFieldChanged(input, validationErrors, validationWarnings);
            break;
        }
        case 'Edited': {
            renderEdited(input, validationErrors, validationWarnings);
            break;
        }
        default:
            return {};
    }

    return {
        'analysisSettings': input.currentAnalysisSettings,
        'settingValues': input.settingValues,
        'validationErrors': validationErrors,
        'validationWarnings': validationWarnings,
        'storageSize': storageSize
    };
}

function renderInitial(input, validationErrors, validationWarnings) {
}

function renderEdited(input, validationErrors, validationWarnings) {
}

function renderFieldChanged(input, validationErrors, validationWarnings) {
}

function findField(input, fieldId){
    var fields = input.currentAnalysisSettings['fields'];
    for (var i = 0; i < fields.length; i++){
        if (fields[i].id === fieldId) {
            return fields[i];
        }
    }
    return null;
}

