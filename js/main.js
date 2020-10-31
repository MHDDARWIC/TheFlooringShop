console.log("Working...");  
//First slider
$('.slider-one')
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});

//Second slider
$('.slider-two')
.not(".slick-initialized")
.slick({
    prevArrow:".site-slider-two .prev",
    nextArrow:".site-slider-two .next",
    slidesToShow:3,
    slidesToScroll:3,
    autoplay:true,
    autoplaySpeed:2500,
});

//get estimate



//Form validation and sending requests
$(document).ready(function(){
    $('.submit').click(function(event){
        console.log("Clicked Button")

        var email=$('.email').val()
        var subject=$('.subject').val()
        var message=$('.message').val()
        var phone=$('.phone').val()
        var zip=$('.zip').val()
        var statusElm=$('.status')
        statusElm.empty()

        if(email.length>5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>email is valid</div>')
        }
        else{
            event.preventDefault()
            statusElm.append('<div>email is not valid</div>')
        }

        if(subject.length>2){
            statusElm.append('<div>subject is valid</div>')
        }
        else{
            event.preventDefault()
            statusElm.append('<div>subject is not valid</div>')
        }

        if(message.length >1){
            statusElm.append('<div>valid message</div>')
        }
        else{
            event.preventDefault()
            statusElm.append('<div>please enter a more detailed message</div>')
        }

        if(phone.length==10){
            statusElm.append('<div>valid message</div>')
        }
        else{
            event.preventDefault()
            statusElm.append('<div>please enter a valid phone number</div>')
        }

        if(phone.length<=5){
            statusElm.append('<div>valid zip code</div>')
        }
        else{
            event.preventDefault()
            statusElm.append('<div>please enter a valid zip code</div>')
        }

    })

})