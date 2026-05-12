// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');

    if (form) {
        form.addEventListener('submit', function(event) {
            // Impede o envio real do formulário para validar primeiro
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            // Validação simples obrigatória por JavaScript
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            // Simulação de envio conforme solicitado no item 5 da atividade
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso (Simulação).`);
            
            // Limpa o formulário após o sucesso
            form.reset();
        });
    }
});
