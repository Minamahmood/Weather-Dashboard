(function() {
    $("#form-submit").submit(function(event) {
        performSearch(event);
    });
});

function performSearch(event) {
    var request;
    event.preventDefault();

    request.ajax({
        url: "api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            q: $("#city").val(),
            appid: "39907d575f349b1b0380ef04160f3574",
            units: "metric",
        },
    });
}