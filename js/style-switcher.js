

$(document).ready(function(){

    

    // toggling style switch 

    $(".style-switcher-toggler").click(function(){
        $(".style-switcher").toggleClass("open");

    });

    // hide style switcher on scroll 

    $(window).scroll(function(){
        if ($(".style-switcher").hasClass("open")){
            $(".style-switcher").removeClass("open");
        }
    });

    // theme color 

    $(".colors .color-1").click(function(){
        $(":root").css("--skin-color", "#ec1839");
        $(".style-switcher").removeClass("open");

    })

    $(".colors .color-2").click(function(){
        $(":root").css("--skin-color", "#fa5b0f");
        $(".style-switcher").removeClass("open");
        

    })

    $(".colors .color-3").click(function(){
        $(":root").css("--skin-color", "#37b182");
        $(".style-switcher").removeClass("open");
    })
    
    // theme light and dark mode
    $(window).ready(function(){
        if($("body").hasClass("dark")){
            $(".style-switcher .day-night i").addClass("fa-sun");

           
        }
        else
        {
            $(".style-switcher .day-night i").removeClass("fa-sun").addClass("fa-moon")

        }
    });


    // on click day night toggler change theme

    $("#thememode").click(function(){
        $("#themeicon").toggleClass("fa-sun");
        $('body').toggleClass("dark");
        

    })



    

    


});

const nav = document.querySelector('.nav'),
navList = document.querySelectorAll('li'),
totalNavList = navList.length;
// allSection = document.querySelectorAll(".section"),
// totalSection = allSection.length;

// function showSelection(elem){
//     for(let k=0; k<totalSection;k++){
//        $(allSection[k]).removeClass("active");
//     }
//     const target = $(elem).attr("href").split("#")[1];
//     $('#'+target).addClass("active");

//     console.log(target)


    
// }


$(document).ready(function(){
    for (let i=0;i<totalNavList;i++){
        const temp = navList[i].querySelector("a");
        // const backSec = navList[i-1].querySelector("a");


        $(temp).click(function(){

            $(".nav li a").removeClass("active")


            // for (let j=0;j<totalNavList;j++){
            //     $(navList[j]).removeClass("active")
            // }
            // console.log(temp)
            $(temp).addClass("active")
            // $(backSec).addClass("back-section");

            // showSelection(this)
            
        })


    }

});










