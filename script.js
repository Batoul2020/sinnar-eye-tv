document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("anthem-video");
    const unmuteBtn = document.getElementById("unmute-btn");
    const skipBtn = document.getElementById("skip-btn");
    const introOverlay = document.getElementById("intro");
    const irisWipe = document.getElementById("iris-wipe");
    const mainSite = document.getElementById("main-site");
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    // Unmute Button Toggle
    if (unmuteBtn) {
        unmuteBtn.addEventListener("click", function () {
            if (video.muted) {
                video.muted = false;
                unmuteBtn.textContent = "🔇 إكتام الصوت";
            } else {
                video.muted = true;
                unmuteBtn.textContent = "🔊 تشغيل الصوت";
            }
        });
    }

    // Function to trigger Iris Reveal Animation
    function revealSite() {
        irisWipe.classList.add("iris-open");
        setTimeout(function () {
            introOverlay.classList.add("hidden");
            mainSite.classList.remove("hidden");
        }, 1000);
    }

    // Skip Intro Button
    if (skipBtn) {
        skipBtn.addEventListener("click", function () {
            video.pause();
            revealSite();
        });
    }

    // Auto Transition when Anthem Video Ends
    if (video) {
        video.addEventListener("ended", function () {
            revealSite();
        });
    }

    // Mobile Hamburger Menu Toggle
    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("open");
        });
    }
});
