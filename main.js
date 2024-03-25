$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        $("#lista").append("<li>" + novaTarefa + "</li>");
        $('#nome-tarefa').val('');

    })
    $("#lista").on("click", "li", function(){
        $(this).css("text-decoration", "line-through");
    })
})