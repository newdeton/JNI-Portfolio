
// ===========================
// SAFE DOM GETTER
// ===========================
function $(id) {
    return document.getElementById(id);
}

// ===========================
// RUN AFTER LOAD
// ===========================
document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // TYPE EFFECT (SAFE)
    // ===========================
    const typedText = $("typed-text");

    if (typedText) {

        const texts = [
            "Full-Stack Web Developer",
            "Node.js Developer",
            "MongoDB Developer",
            "Express.js Developer",
            "JavaScript Developer"
        ];

        let i = 0, j = 0, deleting = false;

        function type() {
            const current = texts[i];

            if (!deleting) {
                typedText.textContent = current.substring(0, j++);
            } else {
                typedText.textContent = current.substring(0, j--);
            }

            let speed = deleting ? 40 : 100;

            if (!deleting && j > current.length) {
                deleting = true;
                speed = 1200;
            } else if (deleting && j < 0) {
                deleting = false;
                i = (i + 1) % texts.length;
                speed = 200;
            }

            setTimeout(type, speed);
        }

        type();
    }

    // ===========================
    // MOBILE MENU (SAFE)
    // ===========================
    const menuToggle = $("menuToggle");
    const navLinks = $("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // ===========================
    // BACK TO TOP (SAFE)
    // ===========================
    const backToTop = $("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            backToTop.style.display = window.scrollY > 300 ? "block" : "none";
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ===========================
    // WHATSAPP FORM (FIXED)
    // ===========================
    const contactForm = $("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = $("name").value.trim();
            const email = $("email").value.trim();
            const subject = $("subject").value.trim();
            const message = $("message").value.trim();

            const whatsappMessage =
`Hello Joe,

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}`;

            const url =
`https://wa.me/254111565424?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(url, "_blank");
        });
    }

});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const update = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 50;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(update, 30);
        } else {
            counter.innerText = target;
        }
    };

    update();
});

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});

const profile = document.querySelector(".profile-card");

if (profile) {

    profile.addEventListener("mousemove", (e) => {

        const rect = profile.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (x - centerX) / 20;

        profile.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    profile.addEventListener("mouseleave", () => {
        profile.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
}

gsap.registerPlugin(ScrollTrigger);

gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".project-card",
        start: "top 80%"
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});

gsap.from(".skill", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top 80%"
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    stagger: 0.05
});

gsap.from(".contact-form", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8
});
