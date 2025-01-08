const darkModeToggle = document.getElementById("darkModeToggle");
const languageToggle = document.getElementById("languageToggle");
const createAccountButton = document.getElementById("createAccount");

let darkMode = false;
let language = "en";

darkModeToggle.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
    darkModeToggle.textContent = darkMode ? "☀️" : "🌙";
});

languageToggle.addEventListener("click", () => {
    language = language === "en" ? "es" : "en";
    if (language === "es") {
        document.getElementById("heroTitle").textContent = "Bienvenido a BarberStyle";
        document.getElementById("heroSubtitle").textContent = "¡Experimenta los mejores cortes y estilos en la ciudad!";
        document.getElementById("servicesTitle").textContent = "Nuestros Servicios";
        document.getElementById("cutTitle").textContent = "Corte de Pelo";
        document.getElementById("cutDesc").textContent = "Cortes de precisión adaptados a tu estilo.";
        document.getElementById("shaveTitle").textContent = "Afeitado";
        document.getElementById("shaveDesc").textContent = "Experiencia de afeitado suave y lujosa.";
        document.getElementById("styleTitle").textContent = "Estilo";
        document.getElementById("styleDesc").textContent = "Estilos modernos para destacar.";
    } else {
        document.getElementById("heroTitle").textContent = "Welcome to BarberStyle";
        document.getElementById("heroSubtitle").textContent = "Experience the finest cuts and styles in town!";
        document.getElementById("servicesTitle").textContent = "Our Services";
        document.getElementById("cutTitle").textContent = "Haircut";
        document.getElementById("cutDesc").textContent = "Precision cuts tailored to your style.";
        document.getElementById("shaveTitle").textContent = "Shaving";
        document.getElementById("shaveDesc").textContent = "Smooth and luxurious shaving experience.";
        document.getElementById("styleTitle").textContent = "Styling";
        document.getElementById("styleDesc").textContent = "Trendy styles to make you stand out.";
    }
});

createAccountButton.addEventListener("click", () => {
    alert("Account creation coming soon!");
});
