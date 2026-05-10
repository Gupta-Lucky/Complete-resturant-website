const WHATSAPP_NUMBER = "919263413181";

document.querySelectorAll(".nav-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const nav = button.nextElementSibling;
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelectorAll(".whatsapp-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const lines = [`${form.dataset.formType || "Website"} Request`];

    formData.forEach((value, key) => {
      if (String(value).trim()) {
        const label = key.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
        lines.push(`${label}: ${value}`);
      }
    });

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
    form.reset();
  });
});
