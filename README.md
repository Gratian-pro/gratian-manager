# Gratian Manager

**Gratian Manager** é um sistema de gerenciamento de múltiplos bots com suporte a autoatualização via terminal, desenvolvido para rodar com simplicidade e eficiência em servidores Node.js.

---

## 📦 Funcionalidades

- Suporte a múltiplos bots simultâneos  
- Autoatualização automática ao reiniciar servidor  
- Reinício automático após atualizações  
- Estrutura modular e expansível  
- Leve e fácil de instalar  

---

## 🚀 Como instalar

1. **Instale a dependência no seu servidor:**

<img src="https://media.discordapp.net/attachments/978811018505494571/1375600664767369247/20250523_192542.png?ex=68324773&is=6830f5f3&hm=eb7f63584b207fe6473aeea89e2e0fd90bbddda6023a6b246c1bbcfd52ba314e&=&format=webp&quality=lossless" width="450" height="150" alt="Imagem Pequena" />


2. **Crie o arquivo "g-manager.js" no diretório principal do seu servidor (necessário para o sistema funcionar):**
```bash
const { exec, spawn } = require("child_process");
const { existsSync } = require("fs");
const { resolve } = require("path");

const cli = resolve(__dirname, "node_modules/.bin/gratian-manager");

const iniciar = () => {
  console.log("Iniciando 'gratian-manager'...");
  const proc = spawn(cli, [], { stdio: "inherit" });

  proc.on("error", err => console.error("Erro:", err));
  proc.on("exit", code => console.log(`Finalizado com código ${code}`));
};

if (existsSync(resolve(__dirname, "bots"))) {
  console.log("Pasta 'bots/' já existe. Pulando 'init'...");
  iniciar();
} else {
  console.log("Executando 'gratian-manager init'...");
  exec(`${cli} init`, (err, out, errOut) => {
    if (err) return console.error("Erro:", err.message);
    if (errOut) console.error("Stderr:", errOut);
    if (out) console.log(out);
    iniciar();
  });
}
```


3. **Defina o arquivo como principal do seu servidor:**

<img src="https://media.discordapp.net/attachments/978811018505494571/1375621613583728711/20250523_204900.png?ex=68325af6&is=68310976&hm=250658769711c16a6631ef8ea1034fcf25043c529d4b2631c367a0aa3f113890&=&format=webp&quality=lossless" width="450" height="150" alt="Imagem Pequena" />


4. **Inicie o servidor:**

![iniciar](https://i.imgur.com/kHXf9gP.png)

---

## 🔁 Autoatualização ao iniciar

Ao iniciar, o sistema:

1. Acessa um servidor remoto para obter o `version.json`
2. Compara com a versão local
3. Se houver nova versão:
   - Baixa o `.zip` da atualização
   - Extrai os arquivos automaticamente
   - Reinicia o sistema
4. Se estiver atualizado, continua a execução normalmente

### Exemplo de `version.json` que deve haver no seu servidor:

```json
{
  "version": "1.0.2"
}
```

---

## 🌐 Estrutura do Projeto

```
diretório principal do seu servidor/
├── bots                   # Pasta onde deve colcocar pastas com arquivos dos seus bots
├── g-manager.js           # Arquivo necessário pra executar
```

---

## ⚠ Informações importantes
1. Você deve ter um index.js ao menos no diretório dentro da pasta bots do seu servidor.
2. Cada pasta de "bots" é aonde você pode colocar os arquivos dos seus bots. Ex: bots/meubot/index.js
3. Não é necessário apagar os arquivos do seu bot atual antes de instalar esse sistema.

---
## 🤝 Contribuindo

Quer sugerir melhorias ou reportar bugs?  
Abra uma [issue](https://github.com/luizdeveloperr/gratian-manager/issues) ou um pull request.

---

## ⚠️ Licença e uso

Este software é de uso **restrito e exclusivo**.  
**Proibido copiar, modificar, redistribuir ou revender** sem autorização da **[Gratian.pro](https://gratian.pro)**.  
Todos os direitos reservados.

Entre em contato para solicitar uso autorizado.

---

## 📞 Suporte

- 🌐 Site: [https://gratian.pro](https://gratian.pro)  
- 📧 E-mail: sac@gratian.pro  
- 💬 Discord: [discord.gg/gratian](https://discord.gg/gratian)
