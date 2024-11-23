document.getElementById("saveButton").addEventListener("click", function () {
    // Coletar dados do formulário
    const user = {
      nome: document.getElementById("nome").value,
      login: document.getElementById("login").value,
      senha: document.getElementById("senha").value,
      email: document.getElementById("email").value,
      endereco: document.getElementById("endereco").value,
      telefone: document.getElementById("telefone").value,
    };
  
    // Recuperar os dados já salvos no LocalStorage (se existirem)
    let users = JSON.parse(localStorage.getItem("cliente")) || [];
  
    // Adicionar o novo usuário
    users.push(user);
  
    // Salvar novamente no LocalStorage
    localStorage.setItem("cliente", JSON.stringify(users));
  
    // Limpar o formulário
    document.getElementById("userForm").reset();
  
    // Mensagem de confirmação
    M.toast({ html: "Usuário cadastrado com sucesso!" });
  });