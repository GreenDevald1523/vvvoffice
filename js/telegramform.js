(function ($) {
  $("#form").submit(function (event) {
    event.preventDefault();

    // Сообщения формы
    let word = "Спасибо за заявку!";
    let suc = "Мы позвоним вам в течние 15 минут, чтобы уточнить детали";
    let errorSendText = "Сообщение не отправлено. Попробуйте еще раз!";
    let requiredFieldsText = "Заполните поля с именем и телефоном";
    // let successTitle = document.querySelector('.sec-11-title')
    // let input = document.querySelector('.form')

    // Сохраняем в переменную класс с параграфом для вывода сообщений об отправке
    let message = $(this).find(".contact-form__message");

    let form = $("#" + $(this).attr("id"))[0];
    let fd = new FormData(form);
    $.ajax({
      url: "../php/telegram.php",
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      success: function success(res) {
        let respond = $.parseJSON(res);

        if (respond === "SUCCESS") {
          message.text(suc);
          $(".sec-11-title").text(word);
          document.querySelector(".name").classList.add("dn");
          document.querySelector(".name").value = ""
          document.querySelector(".phone").classList.add("dn");
          document.querySelector(".phone").value = ""
          document.querySelector("#booking").classList.add("dn");
          document.querySelector("#bookingBack").classList.remove("dn");
          $('.blur').css("display", "block")
        } else if (respond === "NOTVALID") {
          message.text(requiredFieldsText);
        } else {
          message.text(errorSendText);
        }
      },
    });
  });
})(jQuery);

const bookingBack = document.getElementById("bookingBack");
bookingBack.addEventListener("click", () => {
  $(".sec-11-title").text("Работай отдыхая в VVVOFFICE");
  $("contact-form__message").text('')
  $('.blur').css("display", "none")
  document.querySelector(".name").classList.remove("dn");
  document.querySelector(".phone").classList.remove("dn");
  document.querySelector("#booking").classList.remove("dn");
  bookingBack.classList.add("dn");
});
