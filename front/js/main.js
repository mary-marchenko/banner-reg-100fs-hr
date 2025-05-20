(function init100vh(){
    function setHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();

window.addEventListener("orientationchange", () => {
    location.reload(true)
});

// padding no-ios
document.addEventListener("DOMContentLoaded", function() {
    let bonus = document.querySelector('.bonus');
    let grn = document.querySelector('.money');
    let fs = document.querySelector('.fs');

    if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
        bonus.classList.add('noios-padding');
        grn.classList.add('noios-padding');
        fs.classList.add('noios-padding');
    }
});