$(document).ready(function () {
    function inicial () {
        $.ajax({
            url: "/pessoa",
            success: function (response) {
                response.map(function (item) {
                    var $tr, $td1, $td2, $td3, $del;

                    $tr = $("<tr>");
                    $td1 = $(`<td>${item.nome}</td>`);
                    $td2 = $(`<td class="cpf">${item.cpf}</td>`);
                    $td3 = $(`<td>${item.sexo}</td>`);
                    $del = $(`<button class="btn btn-danger">Deletar</button>`);

                    $("tbody").append($tr);

                    $tr.append($td1);
                    $tr.append($td2);
                    $tr.append($td3);
                    $tr.append($del);
                });

                // Colocado aqui porque só funcionará se o botão estiver criado
                $(".btn-danger").on("click", function () {
                    var $button, cpf;

                    $button = $(this);
                    cpf = $button.closest("tr").find(".cpf").text();

                    $.ajax({
                        url:"/pessoa/deletar/" + cpf,
                        method: "DELETE",
                        success: function (response) {
                            alert("Usuário deletado com sucesso!");
                            $("tbody").empty();
                            inicial();
                        },
                        error: function (response) {
                            console.error(response);
                        }
                    });
                });
            },
            error: function (response) {
                console.error(response);
            }
        });
    }

    inicial();

    $(".main-form").on("submit", function (event) {
        var data, nome, cpf, sexo;
        
        event.preventDefault();

        nome = $("#nome").val();
        cpf = $("#cpf").val();
        sexo = $("#sexo").val();

        data = {
            nome: nome,
            cpf: cpf,
            sexo: sexo
        }

        $.ajax({
            url: "/pessoa/cadastrar",
            method: "POST",
            data: data,
            success: function (response) {
                alert("Inserido com sucesso!");
                $("tbody").empty();
                inicial();
            },
            error: function (response) {
                alert("Erro ao inserir o cliente");
            }
        });
    });
});