
function name(){
  $(document).ready(function() { 
        $('.list-of-bar').slideToggle();
   })
}
   function menufunction(){
        $('.list-of-bar').css('display','none');
        document.querySelector("#menu-icon").addEventListener("click",name); 

    }
    if(window.matchMedia('(max-width: 653px)').matches)
        {   
            menufunction();
    }
    $(window).resize(function(){
    if($(window).width()>=653)
        { $('.list-of-bar').css('display','flex');
        }  
    else
    {
        menufunction();
    }     
})

var i=1;

var len=$('.slide').length;
console.log(len);
$(document).ready(function(){
    $(".right").on('click',function(){
        clearInterval(slideinterval);
       slideinterval= setInterval(intervalmanager, 2500);
        
        if(i<len){
            $('.slide:nth-child('+ i +')').removeClass('main');
            i++;
            $('.slide:nth-child('+ i +')').addClass('main');
        }
        else{
            $('.slide:nth-child('+ i +')').removeClass('main');
            i=1;
            $('.slide:nth-child('+ i +')').addClass('main');
        }
    })

    $(".left").on('click',function(){
        clearInterval(slideinterval);
       slideinterval= setInterval(intervalmanager, 2500);
       
        if(i!=1){
            $('.slide:nth-child('+ i +')').removeClass('main');;
            i--;
            $('.slide:nth-child('+ i +')').addClass('main');

            
        } 
        else{
            $('.slide:nth-child('+ i +')').removeClass('main');
            i=6;
            $('.slide:nth-child('+ i +')').addClass('main');
        } 
    })

})


function intervalmanager(){
    if(i<len){
        $('.slide:nth-child('+ i +')').removeClass('main');
        i++;
        $('.slide:nth-child('+ i +')').addClass('main');
        
    }
    else{
        $('.slide:nth-child('+ i +')').removeClass('main');
        i=1;
        $('.slide:nth-child('+ i +')').addClass('main');
    }
    
}

var slideinterval=setInterval(intervalmanager, 3000);