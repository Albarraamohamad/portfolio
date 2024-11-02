function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll(".links a i");
  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add("animate__animated", "animate__backInLeft");
    }, index * 100); // Staggered effect for each icon
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");
  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add("animate__animated", "animate__backInRight");
    }, index * 200); // Stagger each link's animation by 200ms
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".about1, .about2, .about3").forEach((section) => {
    observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".content").forEach((section) => {
    observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".card").forEach((section) => {
    observer.observe(section);
  });
});
