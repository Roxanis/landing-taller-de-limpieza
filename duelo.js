document.querySelectorAll('.site-nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const section = document.querySelector(targetId);

    if (!section) {
      return;
    }

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll('a[href*="wa.me/5491169047724"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.fbq !== "function") {
      return;
    }

    window.fbq("track", "Lead", {
      content_name: "El duelo como puente",
      lead_source: "whatsapp_landing",
    });
  });
});
