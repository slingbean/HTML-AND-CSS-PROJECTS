// Portfolio JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Scroll Reveal Animation

    const revealElements = document.querySelectorAll(
        ".About_Content, .Work_Content, .Contact_Content"
    );

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    // Active Navigation Indicator

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const navLinks = document.querySelectorAll(
        ".Nav_Links a"
    );

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(function (section) {

            if (window.scrollY >= section.offsetTop - 150) {
                currentSection = section.id;
            }

        });

        navLinks.forEach(function (link) {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentSection
            );

        });

    }

    window.addEventListener("scroll", updateActiveNavigation);
    updateActiveNavigation();

});