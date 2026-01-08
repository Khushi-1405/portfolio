<script>
document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     1. STICKY NAVIGATION
  ================================= */
  const mainNav = document.querySelector(".main-nav");
  const subNav = document.querySelector(".sub-nav");
  const heroSection = document.querySelector(".hero-section");

  const heroHeight = heroSection ? heroSection.offsetHeight : 0;

  function handleScroll() {
    if (window.scrollY > heroHeight - 80) {
      subNav.style.position = "fixed";
      subNav.style.top = "0";
      subNav.style.width = "100%";
      subNav.style.zIndex = "1000";
      mainNav.style.opacity = "0";
      mainNav.style.pointerEvents = "none";
    } else {
      subNav.style.position = "relative";
      mainNav.style.opacity = "1";
      mainNav.style.pointerEvents = "auto";
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();


  /* ================================
     2. SMOOTH SCROLL
  ================================= */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href"))
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });


  /* ================================
     3. GOOGLE FORM SUBMIT HANDLER
  ================================= */
  const form = document.getElementById("contactForm");
  const iframe = document.querySelector("iframe[name='hidden_iframe']");
  let submitted = false;

  // Animated success notification
  const toast = document.createElement("div");
  toast.innerHTML = "✅ Form submitted successfully!";
  Object.assign(toast.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "#22c55e",
    color: "#fff",
    padding: "14px 22px",
    borderRadius: "10px",
    fontWeight: "600",
    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
    transform: "translateX(120%)",
    opacity: "0",
    transition: "all 0.5s ease",
    zIndex: "9999"
  });

  document.body.appendChild(toast);

  form.addEventListener("submit", () => {
    submitted = true;
  });

  // Detect Google Form submission completion
  iframe.onload = () => {
    if (!submitted) return;

    // Reset form
    form.reset();

    // Show notification
    toast.style.transform = "translateX(0)";
    toast.style.opacity = "1";

    // Hide after 3s
    setTimeout(() => {
      toast.style.transform = "translateX(120%)";
      toast.style.opacity = "0";
    }, 3000);

    submitted = false;
  };

});
</script>
