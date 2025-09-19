// auth-check.js

// --- COLE AQUI O SEU MESMO OBJETO 'firebaseConfig' ---
const firebaseConfig = {
          

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if (!user) {
        // Se não há usuário logado, redireciona para a página de login.
        console.log("Usuário não autenticado. Redirecionando para login...");
        // Adiciona o caminho da página atual como um parâmetro, para podermos voltar depois
        const currentPage = window.location.pathname;
        window.location.href = `login.html`;
    } else {
        // Se o usuário está logado, a página pode carregar.
        console.log("Usuário autenticado:", user.email);
    }
});

function logout() {
    if (confirm("Tem certeza que deseja sair?")) {
        auth.signOut();
    }
}
