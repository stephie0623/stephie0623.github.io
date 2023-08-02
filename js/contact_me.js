//宣告預設表單內容為空 （你想要的話也可以加東西）
var initSubject = '',
    initBody = '';

//按下傳送按鈕後執行
function submitHandler() {
    var to = "wego10306@gmail.com"; //寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
    var name = nameText.value; //讀取ID為 nameTextuser 物件中的值
    var email = emailText.value;
    var tel = telText.value;
    var subject = subText.value;
    //把user填的資料都塞到 mail body 中
    var body = "" + bodyText.value + '%0A%0A%0A'; //%0A是換行 換了三行
    body += "From：" + nameText.value + '%0A';
    body += "Email：" + emailText.value + '%0A';
    body += "Tel：" + telText.value;
    //傳送的主要程式碼
    mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    mailTo.click();
}
//在body onload
function init() {
    subText.value = initSubject;
    toText.value = initTo;
    bodyText.value = initBody;
}

/*$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                complete: function() {
                    setTimeout(function() {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                }
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});
*/
/*When clicking on Full hide fail/success boxes */
/*$('#name').focus(function() {
    $('#success').html('');
});*/