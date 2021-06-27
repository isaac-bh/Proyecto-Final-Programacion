toogled1 = true;
$("#modulo1-texto").click(function(){
    $("#modulo1").toggle("slow");
    if(toogled1 == true) {
        $(this).find("span").text("↑");
        toogled1 = false;
    }
    else {
        $(this).find("span").text("↓");
        toogled1 = true;
    }
});

toogled2 = true;
$("#modulo2-texto").click(function(){
    $("#modulo2").toggle("slow");
    if(toogled2 == true) {
        $(this).find("span").text("↑");
        toogled2 = false;
    }
    else {
        $(this).find("span").text("↓");
        toogled2 = true;
    }
});

toogled3 = true;
$("#modulo3-texto").click(function(){
    $("#modulo3").toggle("slow");
    if(toogled3 == true) {
        $(this).find("span").text("↑");
        toogled3 = false;
    }
    else {
        $(this).find("span").text("↓");
        toogled3 = true;
    }
});

toogled4 = true;
$("#modulo4-texto").click(function(){
    $("#modulo4").toggle("slow");
    if(toogled4 == true) {
        $(this).find("span").text("↑");
        toogled4 = false;
    }
    else {
        $(this).find("span").text("↓");
        toogled4 = true;
    }
});

$("#modulo1").toggle("slow");
$("#modulo2").toggle("slow");
$("#modulo3").toggle("slow");
$("#modulo4").toggle("slow");