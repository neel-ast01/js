//task 1
$("#par").css({ "font-size": "20px", "font-family": "Arial", "background-color": "lightblue" });

//task 2
$(".p").css({ "font-size": "20px", "font-family": "Arial", "background-color": "red" });

$(document).ready(function () {

    //task 3
    $(".btn").click(function () {
        $(".Welcome").toggle();
    })

    //task 4
    $(".in").click(function () {
        $(".in").toggleClass("bg-color");
    })

    //task 5
    $(".change").addClass("style1");

    //task 6
    $(".btn-change").click(function () {
        $(".change").addClass("style2");
    });


    //task 7
    $(".change-1").click(function () {
        $(".change-1").css({ "font-size": "20px", "font-family": "Arial", "background-color": "lightblue" });
    });

    //task 8
    $(".show").click(function () {
        // console.log("Hello");
        var text = $("#textBox").val();
        // console.log(text);
        $("#text").text(text);
    })

    //task 9
    var txt = document.createElement("div");
    txt.innerHTML = "Welcome Message";
    $("#message").append(txt);


    //task 10
    var div1 = $("<div></div>").addClass("div1").css("background-color", "yellow").text("First Div");
    var div2 = $("<div></div>").addClass("div1").css("background-color", "yellow").text("Second Div");
    $("#twoDiv").append(div1, div2);


    //task 11
    $("#showButton").click(function () {
        $("#messageDiv").show();
    });


    $("#hideButton").click(function () {
        $("#messageDiv").hide();
    });

    //task 12
    $("#myToggleButton").click(function () {
        $("#myMessageDiv").toggle();
    });

    //task 13
    $("#showNameButton").click(function () {
        $("#nameDisplay").text("Neel Bhalodiya").show();
    });

    //task 14
    $("#countButton").click(function () {

        var text = $("#textInput").val();
        var textLength = text.length;
        $("#textLengthDisplay").text("Length of Text: " + textLength);
    });

    //task 15
    $("#myTextInput").on("input", function () {

        var text = $(this).val();
        var textLength = text.length;
        $("#myTextLengthDisplay").text("Length of Text: " + textLength);
    });


    //task 16
    $("#textInputPro").on("input", function () {

        var text = $(this).val();
        var textLength = text.length;
        var percentage = (textLength / 100) * 100;
        $("#textLengthProgress").attr("value", percentage);

    });


    //task 17
    $("#newTextInput").focusout(function () {

        var text = $(this).val();
        if (text.length > 10) {
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
        }

    });

    //task 18
    // Addition
    $("#add").click(function () {
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var sum = num1 + num2;
        $("#result").text("Result: " + sum);
    });

    // Subtraction
    $("#subtract").click(function () {
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var difference = num1 - num2;
        $("#result").text("Result: " + difference);
    });

    // Multiplication
    $("#multiply").click(function () {
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var product = num1 * num2;
        $("#result").text("Result: " + product);
    });

    // Division
    $("#divide").click(function () {
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        if (num2 !== 0) {
            var quotient = num1 / num2;
            $("#result").text("Result: " + quotient);
        } else {
            $("#result").text("Cannot divide by zero");
        }
    });



    //task 19
    function isBothFilled() {
        return $("#textbox1").val().trim() !== "" && $("#textbox2").val().trim() !== "";
    }


    $("#textbox1, #textbox2").on("blur", function () {
        $("#submitButton").prop("disabled", !isBothFilled());
    });

    //task 20
    $("#login-form").click(function () {
        var name = "user123";
        var pass = "password123";
        var inputName = $("#name").val();
        var inputPass = $("#password").val();
        if (inputName === name && inputPass === pass) {
            $("#name").hide();
            $("#password").hide();
            $("#msg").text("Welcome Neel !");
        } else {
            $("#name").hide();
            $("#password").hide();
            $("#msg").text("Invaild Name and Password !");
        }
    });


    //task 21
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#backToTopBtn").fadeIn();
        } else {
            $("#backToTopBtn").fadeOut();
        }
    });


    $("#backToTopBtn").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


    //task 22
    $("#resizableElement").click(function () {
        $("#resizableElement").css({ "font-size": "30px", "background-color": "red" });
    });

})