function burgerClick(){
    let burger = document.querySelector(".burger");
    let line = document.querySelector(".burger__line");
    let pHidden = document.querySelector(".burger_menu");

    burger.classList.toggle("burger--active");
    line.classList.toggle("active");
    pHidden.classList.toggle("active");

    console.log(burger)
}