$(document).ready(function () {
    function inicial () {
        $.ajax({
            url: "/pessoa",
            success: function (response) {
                response.map(function (item) {
                    var $tr, $td1, $td2, $td3;

                    $tr = $("<tr>");
                    $td1 = $(`<td>${item.nome}</td>`);
                    $td2 = $(`<td>${item.cpf}</td>`);
                    $td3 = $(`<td>${item.sexo}</td>`);

                    $("tbody").append($tr);

                    $tr.append($td1);
                    $tr.append($td2);
                    $tr.append($td3);
                });
            },
            error: function (response) {
                console.error(response);
            }
        });
    }

    inicial();
});