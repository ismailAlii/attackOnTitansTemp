
/* Start Nav Bar Function */
let hum = document.querySelector(".hum-menu")
let miniM = document.querySelector(".mini-menu")

hum.addEventListener("click", function () {

    hum.classList.toggle("menu-active")

    miniM.classList.toggle("mini-active")

})
/* active Links */

let allLinks = document.querySelectorAll(".links a");
let landingH = document.querySelector("#landing").scrollHeight;
let videoH = document.querySelector("#video").scrollHeight;
let charsH = document.querySelector("#chars").scrollHeight;
let titansH = document.querySelector("#titans").scrollHeight;

window.addEventListener("scroll", function() {

    if (window.scrollY <= landingH) {

        allLinks.forEach(function (e) {

            e.classList.remove("active")

            allLinks[0].classList.add("active")

        })
    } else if (window.scrollY < landingH + videoH) {

        allLinks.forEach(function (e) {

            e.classList.remove("active")

            allLinks[1].classList.add("active")
        })
    } else if (window.scrollY < landingH + videoH + charsH) {

        allLinks.forEach(function (e) {

            e.classList.remove("active")

            allLinks[2].classList.add("active")

        })
    } else if (window.scrollY < landingH + videoH + charsH + titansH) {

        allLinks.forEach(function (e) {

            e.classList.remove("active")

            allLinks[3].classList.add("active")
        })
    }
})
/* End Nav Bar Function */
/* Start Scroll To Top */
let scrollTop = document.querySelector(".scroll-top")

window.addEventListener("scroll", function() {

    if (window.scrollY >= document.getElementById("landing").scrollHeight) {

        scrollTop.style.cssText = "top: calc(100% - 80px);";

    } else {

        scrollTop.style.cssText = "top: -100%;";

    }
});
/* End Scroll To Top */
/* Start Contact List */
let contactShow = document.querySelector(".contact")
let contactShowInner = document.querySelector(".contact i")
let contactContent = document.querySelector(".contact-list")

contactShow.addEventListener("click", function () {

    contactContent.classList.toggle("contact-active")

    if (contactShowInner.classList.contains("fa-link")) {

        contactShowInner.classList.remove("fa-link");

        contactShowInner.classList.add("fa-unlink");

    } else {
        contactShowInner.classList.add("fa-link");

        contactShowInner.classList.remove("fa-unlink");
    }
})
/* End Contact List */
/* Start Arrow Function */

let arrowLeft = document.querySelector(".left");
let arrowRight = document.querySelector(".right");
let landingOne = document.querySelector(".landing-one");
let landingTwo = document.querySelector(".landing-two");
let landingThree = document.querySelector(".landing-three");
let navB = document.querySelector(".header");
let toggles = document.querySelectorAll(".toggle span")

arrowLeft.addEventListener("click", function() {

    if (landingOne.classList.contains("landing-one-active")) {

        landingOne.classList.toggle("landing-one-active")

        landingTwo.classList.toggle("landing-two-active")

        navB.classList.toggle("header-active-two")

        toggles[1].classList.toggle("span-active")

        toggles[0].classList.toggle("span-active")

        arrowRight.style.display = "flex";

    } else if (landingTwo.classList.contains("landing-two-active")) {

        landingTwo.classList.toggle("landing-two-active")

        landingThree.classList.toggle("landing-three-active")

        navB.classList.toggle("header-active-two")

        navB.classList.toggle("header-active-three")

        toggles[1].classList.toggle("span-active")

        toggles[2].classList.toggle("span-active")

        arrowLeft.style.display = "none";

    }
})
arrowRight.addEventListener("click", function() {

    if (landingThree.classList.contains("landing-three-active")) {

        landingTwo.classList.toggle("landing-two-active")

        landingThree.classList.toggle("landing-three-active")

        navB.classList.toggle("header-active-two")

        navB.classList.toggle("header-active-three")

        toggles[1].classList.toggle("span-active")

        toggles[2].classList.toggle("span-active")

        arrowLeft.style.display = "flex";

    } else if (landingTwo.classList.contains("landing-two-active")) {

        landingOne.classList.toggle("landing-one-active")

        landingTwo.classList.toggle("landing-two-active")

        navB.classList.toggle("header-active-two")

        toggles[1].classList.toggle("span-active")

        toggles[0].classList.toggle("span-active")

        arrowRight.style.display = "none";
    }
})

/* End Arrow Function */
/* Start Video */
let vid = document.querySelector("video");
let aMute = document.querySelector(".mute")
let iMute = document.querySelector(".mute i")
vid.volume = 0;

aMute.addEventListener("click", function() {

    iMute.classList.toggle("fa-volume-up")

    iMute.classList.toggle("fa-volume-mute")

    if (iMute.classList.contains("fa-volume-up")) {

        vid.volume = .2;

        aMute.setAttribute("data-state", "Mute")

    } else {
        
        vid.volume = 0;

        aMute.setAttribute("data-state", "Muted")

    }
})
/* End Video */
/* Start Audio */
let audOne = document.querySelectorAll("audio")[0];
let audTwo = document.querySelectorAll("audio")[1];
let audThree = document.querySelectorAll("audio")[2];
let audE = document.querySelectorAll(".audio")[0];
let audM = document.querySelectorAll(".audio")[1];
let audA = document.querySelectorAll(".audio")[2];

audE.addEventListener("click", function() {

    audOne.play()

})

audM.addEventListener("click", function() {

    audTwo.play()

})

audA.addEventListener("click", function() {

    audThree.play()

})
/* End Audio */
/* Start Titnas Info */

let showMore = document.querySelector("#showMore");
let showContent = document.querySelector(".show-onclick")
let hideContent = document.querySelector(".show-onclick button")

showMore.addEventListener("click", function () {

    showContent.classList.add("show-onclick-active")
})

hideContent.addEventListener("click", function () {

    showContent.classList.remove("show-onclick-active")
})

/* End Titnas Info */



