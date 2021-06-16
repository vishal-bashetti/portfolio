// ----------------
// navbar toggle
// ----------------
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",() => {
   hideSection(); 
   toggleNavbar();
   document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

//----------------------active section-----------------------
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== "")
    {
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
        },500);
    }
})


// -------------------------
// About Tabs
// -------------------------
const tabscontainer = document.querySelector(".about-tabs");
aboutsection=document.querySelector(".about-section ");
tabscontainer.addEventListener("click", (e) => {
    // console.log(e.target);
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabscontainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        // console.log(target);
        aboutsection.querySelector(".tab-content.active").classList.remove("active");
        aboutsection.querySelector(target).classList.add("active");
    }
});


// ------------------ Portfolio item details popup----------------------
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn"))
    {
        togglePortfolioPopup();
        // Always scroll to at top -->scrollTo(0,0) x,y
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
        
    }
});
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup); 

// hide popup when clicked outside the box
document.addEventListener("click", (e) => {

    if(e.target.classList.contains("pp-inner"))
    {
        togglePortfolioPopup(); 
    }
})

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    
    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;

}


// ----------------
// navbar toggle
// ----------------
