const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

const setMenu = (open) => {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.classList.toggle("is-open", open);
  menu.classList.toggle("is-open", open);
  document.body.style.overflow = open ? "hidden" : "";
};

toggle?.addEventListener("click", () =>
  setMenu(toggle.getAttribute("aria-expanded") !== "true"),
);
menu
  ?.querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setMenu(false)));

window.addEventListener(
  "scroll",
  () => header.classList.toggle("is-stuck", window.scrollY > 32),
  { passive: true },
);

document.querySelector("[data-year]").textContent = new Date().getFullYear();

document
  .querySelector("[data-enquiry-form]")
  ?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Zapytanie: ${form.get("event")}`);
    const body = encodeURIComponent(
      `Imię: ${form.get("name")}\nE-mail: ${form.get("email")}\nWydarzenie: ${form.get("event")}\n\nSzczegóły:\n${form.get("message") || "—"}`,
    );
    document.querySelector("[data-form-status]").textContent =
      "Otwieram wiadomość e-mail…";
    window.location.href = `mailto:poczta@imprezy-integracyjne.com?subject=${subject}&body=${body}`;
  });
