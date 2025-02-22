function confirmPresence() {
    let guestName = prompt("Digite seu nome para confirmar presença:");

    if (guestName && guestName.trim() !== "") {
        console.log("🔄 Enviando requisição para o Apps Script...");

        fetch("https://script.google.com/macros/s/AKfycbw8VqcxwMajKb96O4DAn8k-nsZHZr7cQ8ptrDSQP2QLtSxXMoqNR_jb6YhUpHS5nZl5/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "no-cors",  
            body: JSON.stringify({ nome: guestName }) 
        })
        .then(response => {
            console.log("✅ Requisição enviada com sucesso!", response);
            alert("Presença confirmada! Obrigado 🎉");
        })
        .catch(error => {
            console.error("❌ Erro ao enviar confirmação:", error);
            alert("Ocorreu um erro. Verifique o console para mais detalhes.");
        });
    } else {
        alert("Por favor, insira um nome válido!");
    }
}
