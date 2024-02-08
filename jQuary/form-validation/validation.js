$(document).ready(function () {

    $("#addDetailsForm").validate({
        rules: {
            name: "required",
            age: "required",
            address: "required",
            phone: {
                required: true,
                maxlength: 10,
                minlength: 10,
                digits: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            },
            radio: "required",
            select: "required",

            date: "required",
            url: {
                required: true,
                url: true
            },

            file: "required",


            checkbox: "required",

        },
        messages: {
            name: "Please enter your name",
            age: "Please enter a age",
            address: "Please enter your address",
            phone:
            {
                required: "Please enter a telephone number",
                digits: "Enter Only Digit",
                maxlength: "Please enter only 10 digit",
                minlength: "Please enter only 10 digit"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 6 characters long"
            },
            confirmPassword: {
                required: "Please confirm your password",
                equalTo: "Password and Confirm Password must match"
            },

            date: "Please select a date",
            select: "Please select a Options",
            radio: "Please select a button",
            url: {
                required: "Please enter a URL",
                url: "Please enter a valid URL"
            },


            file: "Please upload a file",

            checkbox: "Please agree to the terms and conditions",

        },
    });
});