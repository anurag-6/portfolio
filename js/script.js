
//  typing animation


var typed = new Typed(".typing",{
    strings:["","Web Developer","Web Designer","Backend Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



// aside active
function asideSectionTogglerBtn()
{
    aside.classlist.toggle("open");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
   aside = document.querySelector(".aside");
   navTogglerBtn.addEventListener("click", () =>
   {
    asideSectionTogglerBtn()

   })
   



