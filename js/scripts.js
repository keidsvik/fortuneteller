$(document).ready(function() {
  $("form#formtune").submit(function(event){
    event.preventDefault();
    
    let unluckyEvent = 0;
    $("input:checkbox[name=unlucky]:checked").each(function() {
      unluckyEvent += 1;
    });
    let luckyEvent = 0;
    $("input:checkbox[name=lucky]:checked").each(function(){
      luckyEvent += 1;
    });
    
    $("#unluckyresults,#luckyresults,#neutralresults").hide();
    if (unluckyEvent === 6 && luckyEvent === 6) {
      $('#neutralresults').show();
    } else if (unluckyEvent > luckyEvent) {
      $('#unluckyresults').show();
    }  else {
        $('#luckyresults').show();
    }
    $(".results").show();
    
  });
});