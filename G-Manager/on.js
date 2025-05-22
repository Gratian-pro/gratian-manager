const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

// Caminho do bot principal
const botPrincipal = path.join(__dirname, "..", "index.js");

// Caminho da pasta bots/
const botsDir = path.join(__dirname, "..", "bots");

// Array para armazenar os status dos bots
const statusBots = [];

// Função para adicionar status formatado
const addStatus = (nome, status, icone) => {
  statusBots.push(`[${nome}] ${icone} ${status}`);
};

// Inicia o processo
(async () => {
  // Executa o bot principal
  try {
    require(botPrincipal);
    addStatus("Principal", "Bot online", "🟢 ");
  } catch (err) {
    addStatus("Principal", "Erro ao iniciar", "🔴 ");
  }

  // Lê as subpastas de bots/
  const pastas = fs.readdirSync(botsDir, { withFileTypes: true });

  for (const dirent of pastas) {
    if (!dirent.isDirectory()) continue;

    const nomeBot = `Bot ${dirent.name}`;
    const botFolderPath = path.join(botsDir, dirent.name);
    const indexPath = path.join(botFolderPath, "index.js");

    if (!fs.existsSync(indexPath)) {
      addStatus(nomeBot, "Nenhuma index localizada.", "❔ ");
      continue;
    }

    const nodeModulesPath = path.join(botFolderPath, "node_modules");

    if (!fs.existsSync(nodeModulesPath)) {
      await new Promise((resolve) => {
        console.log(`[${nomeBot}] Instalando dependências...`);
        exec("npm install", { cwd: botFolderPath }, (err) => {
          if (err) {
            addStatus(nomeBot, "Erro ao instalar dependências.", "🔴 ");
            return resolve();
          }
          console.log(`[${nomeBot}] Dependências instaladas.`);
          try {
            require(indexPath);
            addStatus(nomeBot, "Bot Online", "🟢 ");
          } catch {
            addStatus(nomeBot, "Erro ao iniciar", "🔴 ");
          }
          resolve();
        });
      });
    } else {
      try {
        require(indexPath);
        addStatus(nomeBot, "Bot Online", "🟢 ");
      } catch {
        addStatus(nomeBot, "Erro ao iniciar", "🔴 ");
      }
    }
  }

  // Limpa o terminal
  console.clear();

  // Exibe status final
  console.log(chalk.green("Status"));
  statusBots.forEach(msg => {
    console.log(chalk.green(msg));
  });

  console.log(chalk.green("\nGratian Manager - Gratian.pro"));
})();