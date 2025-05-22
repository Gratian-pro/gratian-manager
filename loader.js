const http = require("http");
const fs = require("fs");
const unzipper = require("unzipper");
const path = require("path");
const { spawn } = require("child_process");

const LOCAL_VERSION_PATH = path.join(__dirname, "version.json");
const LOCAL_VERSION = JSON.parse(fs.readFileSync(LOCAL_VERSION_PATH)).version;

const UPDATE_URL = "http://167.114.206.209:3039/updates/version.json";

function baixarAtualizacao(zipUrl) {
  const zipPath = path.join(__dirname, "atualizacao.zip");
  console.log("⬇️ Baixando atualização...");

  const file = fs.createWriteStream(zipPath);
  http.get(zipUrl, (res) => {
    res.pipe(file);
    file.on("finish", () => {
      file.close(() => {
        console.log("📦 Atualização baixada. Extraindo...");
        fs.createReadStream(zipPath)
          .pipe(unzipper.Extract({ path: __dirname }))
          .on("close", () => {
            fs.unlinkSync(zipPath);
            console.log("✅ Atualização concluída. Reiniciando...");
            spawn("node", [path.basename(__filename)], {
              cwd: __dirname,
              stdio: "inherit"
            });
            process.exit();
          });
      });
    });
  }).on("error", err => {
    console.error("❌ Erro ao baixar atualização:", err.message);
  });
}

function checarAtualizacao() {
  http.get(UPDATE_URL, (res) => {
    let dados = "";
    res.on("data", chunk => dados += chunk);
    res.on("end", () => {
      try {
        const remoto = JSON.parse(dados);
        if (remoto.version !== LOCAL_VERSION) {
          console.log(`🔄 Atualização encontrada: ${remoto.version}`);
          baixarAtualizacao(remoto.zip);
        } else {
          console.log("✅ Nenhuma atualização disponível.");
          iniciarSistema();
        }
      } catch (err) {
        console.error("❌ Erro ao analisar versão remota:", err.message);
      }
    });
  }).on("error", err => {
    console.error("❌ Erro ao checar atualização:", err.message);
    iniciarSistema();
  });
}

function iniciarSistema() {
  console.log("🚀 Iniciando o sistema...");
  require("./G-Manager/on.js"); // ou outro script principal
}

checarAtualizacao();
