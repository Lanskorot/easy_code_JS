function burgerClick(){
    let burger = document.querySelector(".burger");
    let line = document.querySelector(".burger__line");
    let pHidden = document.querySelector(".burger_menu");

    burger.classList.toggle("burger--active");
    line.classList.toggle("active");
    pHidden.classList.toggle("active");

    console.log(burger)
}


$(document).ready(function(){
    $(".form").validate(
        {
            errorClass: "error fail-alert", 
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                },
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                    minlength: 10,
                },
                square: {
                    required: true,
                    minlength: 1,
                },
                country: {
                    required: true,
                    minlength: 1,
                },
                region: {
                    required: true,
                    minlength: 1,
                },
                phone: {
                    required: true,
                    phone: true,
                },
                weight: {
                    required: true,
                    minlength: 1,
                },
                city: {
                    required: true,
                    minlength: 2,
                },
                city_to: {
                    required: true,
                    minlength: 2,
                },
            },
            messages: {
                name: {
                    minlength: "Имя должно содержать 3 символа",
                    required: "Введите ваше имя !"
                },
                email: {
                    minlength: "Введите e-mail",
                    email: "неверный формат"
                },
                password: {
                    minlength: "Пароль должен содержать 10 символов",
                    required: "Введите ваше имя !"
                }
            }
        }
    )
})