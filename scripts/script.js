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


// Função para trocar as classes no tema claro
function applyLightThemeChanges() {
    const borderElements = document.querySelectorAll('.border-info');
    const textElements = document.querySelectorAll('.text-info');

    borderElements.forEach(element => {
        element.classList.remove('border-info');
        element.classList.add('border-primary');
    });

    textElements.forEach(element => {
        element.classList.remove('text-info');
        element.classList.add('text-primary');
    });
}

// Função para reverter as classes no tema escuro
function revertDarkThemeChanges() {
    const borderElements = document.querySelectorAll('.border-primary');
    const textElements = document.querySelectorAll('.text-primary');

    borderElements.forEach(element => {
        element.classList.remove('border-primary');
        element.classList.add('border-info');
    });

    textElements.forEach(element => {
        element.classList.remove('text-primary');
        element.classList.add('text-info');
    });
}

// Detectar troca de tema
document.getElementById('theme-toggle').addEventListener('click', function () {
    const isLightTheme = document.documentElement.getAttribute('data-bs-theme') === 'light';
    
    if (isLightTheme) {
        applyLightThemeChanges();
    } else {
        revertDarkThemeChanges();
    }
});

