$(document).ready(function(){
    $("#newModal").modal("hide");
    $("#button1").click(function(){
        $("#newModal").modal("show");
    });
  });

  function open(x){
    $(x).modal('show');
}