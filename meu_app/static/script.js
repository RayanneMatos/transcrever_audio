document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.querySelector('.file-input');
    const submitButton = document.querySelector('.btn-submit');
    const form = document.getElementById("audioForm");

    // Mostra nome do arquivo
    const fileNameDisplay = document.createElement('p');
    fileNameDisplay.style.fontStyle = "italic";
    fileNameDisplay.style.color = "#333";
    form.insertBefore(fileNameDisplay, submitButton);

    fileInput.addEventListener("change", function() {
        if (fileInput.files.length > 0) {
            fileNameDisplay.textContent = `Arquivo selecionado: ${fileInput.files[0].name}`;
        } else {
            fileNameDisplay.textContent = "";
        }
    });

    form.addEventListener("submit", function(e) {
        submitButton.disabled = true;
        submitButton.textContent = "Transcrevendo... ⏳";

        // Mostra a barra de progresso
        const progressContainer = document.querySelector('.progress-container');
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        progressContainer.style.display = "block";

        // Simula progresso
        let progress = 0;
        const interval = setInterval(() => {
            if (progress < 90) { // vai até 90% até o servidor responder
                progress += Math.floor(Math.random() * 5) + 1;
                if (progress > 90) progress = 90;
                progressBar.style.width = progress + "%";
                progressText.textContent = progress + "%";
            }
        }, 300);

        // Quando o arquivo for baixado, barra chega a 100%
        form.addEventListener("submit", function() {
            clearInterval(interval);
            progressBar.style.width = "100%";
            progressText.textContent = "100%";
        });
    });
});
