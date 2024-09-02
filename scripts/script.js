function copyText() {
    // Seleciona o texto
    const numberToCopy = document.getElementById("numberToCopy").innerText;

    // Usa a API Clipboard para copiar o texto
    navigator.clipboard.writeText(numberToCopy).then(() => {
        // Exibe a mensagem de confirmação
        // const copyMessage = document.getElementById("copyMessage");
        // copyMessage.style.display = "block";
        
        // Oculta a mensagem após 2 segundos
        setTimeout(() => {
            copyMessage.style.display = "none";
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
    });
}

const themeToggleBtn = document.getElementById('theme-toggle');
let currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-bs-theme', currentTheme);

themeToggleBtn.addEventListener('click', function() {
    currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
