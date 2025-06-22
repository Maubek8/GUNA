// Função para abrir popups
function openPopup(page) {
    // Se for entities ou register, redireciona diretamente
    if(page === 'entities.html' || page === 'register.html') {
        window.location.href = page;
        return;
    }
    
    // Cria o container do popup se não existir
    let popupContainer = document.getElementById('popup-container');
    if(!popupContainer) {
        popupContainer = document.createElement('div');
        popupContainer.id = 'popup-container';
        popupContainer.className = 'popup-active';
        popupContainer.innerHTML = `
            <div class="popup-content">
                <button onclick="closePopup()">✖</button>
                <iframe id="popup-frame" src="${page}" frameborder="0"></iframe>
            </div>
        `;
        document.body.appendChild(popupContainer);
    } else {
        popupContainer.className = 'popup-active';
        document.getElementById('popup-frame').src = page;
    }
    
    // Bloqueia scroll da página principal
    document.body.style.overflow = 'hidden';
}

// Função para fechar popup
function closePopup() {
    const popupContainer = document.getElementById('popup-container');
    if(popupContainer) {
        popupContainer.className = 'popup-hidden';
        document.getElementById('popup-frame').src = '';
        document.body.style.overflow = 'auto';
    }
}

// Fechar popup ao clicar fora do conteúdo
window.onclick = function(event) {
    const popupContainer = document.getElementById('popup-container');
    if(event.target === popupContainer) {
        closePopup();
    }
}

// Função especial para o registro
function openRegisterPopup() {
    let popupContainer = document.getElementById('register-popup');
    if(!popupContainer) {
        popupContainer = document.createElement('div');
        popupContainer.id = 'register-popup';
        popupContainer.className = 'popup-active';
        popupContainer.innerHTML = `
            <div class="modern-popup-content">
                <div class="popup-header">
                    <img src="assets/images/logo1.jpg" alt="Logo GUNA" class="popup-logo">
                    <h2>Registro de Empresa</h2>
                </div>
                <form id="register-form" onsubmit="submitRegisterForm(event)">
                    <div class="modern-form-group">
                        <label for="company-name">Nombre de la Empresa:</label>
                        <input type="text" id="company-name" required>
                    </div>
                    <div class="modern-form-group">
                        <label for="registration-number">Número de Registro:</label>
                        <input type="text" id="registration-number" required>
                    </div>
                    <button type="submit" class="modern-submit-btn">Registrar Empresa</button>
                </form>
                <button onclick="closeRegisterPopup()" class="modern-close-btn">✖</button>
            </div>
        `;
        document.body.appendChild(popupContainer);
    } else {
        popupContainer.className = 'popup-active';
    }
    document.body.style.overflow = 'hidden';
}

function closeRegisterPopup() {
    const popupContainer = document.getElementById('register-popup');
    if(popupContainer) {
        popupContainer.className = 'popup-hidden';
        document.body.style.overflow = 'auto';
    }
}

function submitRegisterForm(event) {
    event.preventDefault();
    const companyName = document.getElementById('company-name').value;
    const regNumber = document.getElementById('registration-number').value;
    
    // Redireciona para register.html com os parâmetros
    window.location.href = `register.html?name=${encodeURIComponent(companyName)}&reg=${encodeURIComponent(regNumber)}`;
}
