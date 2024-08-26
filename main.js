var typed = new Typed(".text", {
    strings: [ "Web Developer", " AI ML Enthusiast"], // "Strings" should be "strings"
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the navigation links
    const homeLink = document.querySelector('.navbar a:nth-child(1)');
    const aboutLink = document.querySelector('.navbar a:nth-child(2)');
    const skillsLink = document.querySelector('.navbar a:nth-child(3)');
    const projectLink = document.querySelector('.navbar a:nth-child(4)');
    const contactLink = document.querySelector('.navbar a:nth-child(5)');

    // Get references to the sections
    const homeSection = document.querySelector('.home');
    const aboutSection = document.querySelector('.about');
    const skillsSection = document.querySelector('.skills');
    const projectSection = document.querySelector('.project');
    const contactSection = document.querySelector('.contact');

    // Add click event listeners to the navigation links
    homeLink.addEventListener('click', () => {
        homeSection.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("more-about-btn").addEventListener("click", function() {
        window.location.href = "#about";
    });

    aboutLink.addEventListener('click', () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    skillsLink.addEventListener('click', () => {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    });

    projectLink.addEventListener('click', () => {
        projectSection.scrollIntoView({ behavior: 'smooth' });
    });

    contactLink.addEventListener('click', () => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
// Toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('open');
});
