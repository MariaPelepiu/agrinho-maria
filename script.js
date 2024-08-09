// Script JavaScript para validação básica do formulário de contato
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Simples validação de campos (apenas para exemplo)
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // Aqui você poderia enviar os dados para um servidor ou fazer outra ação necessária
            alert("Formulário enviado com sucesso!");
            form.reset();
        }
    });
});