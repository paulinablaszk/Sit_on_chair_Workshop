
document.addEventListener('DOMContentLoaded', function(){

    //-----WYSUWANE SUBMENU-----

    var navLi = document.querySelectorAll('.menu>ul>li');

    var submenu = document.querySelectorAll('.submenu');



    for (var i = 0; i < navLi.length; i++) {

        navLi[i].addEventListener('mouseout', function() {
            if (this.firstElementChild.nextElementSibling !== null) {
                this.firstElementChild.nextElementSibling.style.display ='none';
            }
        });

    }
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].addEventListener('mouseover', function() {
            if (this.firstElementChild.nextElementSibling !== null) {
                this.firstElementChild.nextElementSibling.style.display ='inline-block';
            }
        })
    }

    //-----CHOWANIE BLOKU Z NAPISEM Z OBRAZKA-----

    var chairImage = document.querySelectorAll('.chair_image');
    console.log(chairImage);

    for (var i = 0; i < chairImage.length; i++) {
    chairImage[i].addEventListener('mouseover', function() {
        if (this.firstElementChild.className === 'product_name') {
            this.firstElementChild.style.display ='none';
        }
    });

}
    for (var i = 0; i < chairImage.length; i++) {
    chairImage[i].addEventListener('mouseout', function() {
        if (this.firstElementChild.className === 'product_name') {
            this.firstElementChild.style.display ='inline-block';
        }
    })
}

    //-----SLIDER-----

    var arrowRight = document.querySelector('.arrow_right');
    var arrowLeft = document.querySelector('.arrow_left');
    var index = 0;
    console.log(arrowRight);
    console.log(arrowLeft);
    console.log(index);

    var list = document.querySelector('.slider_img');
    var image = list.children;
    console.log(list);
    console.log(image);

    image[index].classList.add("visible");

    arrowRight.addEventListener('click', function() {
        image[index].classList.remove("visible");
        if (index < image.length-1){
            index++;
        }else {
            index = 0;
        }
        image[index].classList.add("visible");
    });

    arrowLeft.addEventListener('click', function() {
        image[index].classList.remove("visible");
        if (index > 0){
            index--;
        }else {
            index = image.length-1;
        }
        image[index].classList.add("visible");
    })

});

