$(".calculateButton").click(function() {
    var userinput = $(".action").val();
    console.log(userinput);
    var answer =userinput*52*20;
    $(".answer").html(answer);
});