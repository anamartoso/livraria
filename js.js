let url = "dados.xml";
var id = 0;

$.ajax(url)
    .done(function(xml){
        $(xml).find("livro").each(function(){
            $("#cards").append('<div class="card"><a href="individual.html?id='+$(this).find("id").text()+'"><p class="titulo">'+ $(this).find("titulo").text() +'</p> <p class="autor">'+ $(this).find("autor").text() +'</p> <p class="genero">'+ $(this).find("genero").text()+'</p> <p class="ano">Ano:'+ $(this).find("ano").text()+'</p> <p class="status">'+ $(this).find("status").text()+'</p></a></div>');
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    });

var url_string = window.location.href;
var url1 = new URL(url_string);
var id = parseInt(url1.searchParams.get("id"));

$.ajax(url)
    .done(function(xml){
        $(xml).find("livro").each(function(){
            var pos = parseInt($(this).find("id").text());
            if(id == pos){
                $("#individual").append('<div class="card"><p class="titulo">'+ $(this).find("titulo").text() +'</p> <p class="autor">'+ $(this).find("autor").text() +'</p> <p class="genero">'+ $(this).find("genero").text()+'</p> <p class="ano">Ano:'+ $(this).find("ano").text()+'</p> <p class="status">'+ $(this).find("status").text()+'</p></div>');
            }
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    });
