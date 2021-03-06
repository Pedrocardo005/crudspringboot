$(document).ready(function () {
    function inicial () {
        $.ajax({
            url: "/pessoa",
            success: function (response) {
                response.map(function (item) {
                    var $tr, $td1, $td2, $td3, $td4, $att, $del, $ahref;

                    $tr = $("<tr>");
                    $td1 = $(`<td>${item.nome}</td>`);
                    $td2 = $(`<td class="cpf">${item.cpf}</td>`);
                    $td3 = $(`<td>${item.sexo}</td>`);
                    $td4 = $("<td>");
                    $ahref = $(`<a href="/pessoa/find?cpf=${item.cpf}"></a>`);
                    $att = $(`<button class="btn btn-info">Atualizar</button>`);
                    $del = $(`<td><button class="btn btn-danger">Deletar</button></td>`);

                    $("tbody").append($tr);

                    $tr.append($td1);
                    $tr.append($td2);
                    $tr.append($td3);
                    $tr.append($td4);
                    $tr.append($del);
                    $ahref.append($att);
                    $td4.append($ahref);
                });

                // Colocado aqui porque só funcionará se o botão estiver criado
                $(".btn-danger").on("click", function () {
                    if (confirm("Deseja realmente deletar?")) {
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
                                alert("Erro ao tentar deletar o usuário");
                                console.error(response);
                            }
                        });
                    }
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