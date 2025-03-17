
function onSubmit(input) {
    print("hello, i'm inside the onSubmit function");
    var validationErrors = [];

    return {
        'settings': input.settings,
        'validationErrors': validationErrors
    };
}

