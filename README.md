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

1. **Baixe o projeto em zip ou pelo link do repositório:**

![Instalação](https://i.imgur.com/znE80KD.png) ![Instalação2](https://i.imgur.com/P9IdgmI.png)


2. **Altere o arquivo de start do seu servidor na aba "Startup":**

![upload](https://i.imgur.com/FB94pgb.png)

![upload2](https://i.imgur.com/vnV38yS.png)


3. **Ainda na aba Startup, Instale as dependências necessárias:**

```bash
npm i unzipper
```
![dependencia](https://i.imgur.com/jZRWksp.png)


4. **Inicie o servidor:**

![iniciar](https://i.imgur.com/kHXf9gP.png)

---

## 🔁 Autoatualização via HTTP

Ao iniciar o `loader.js`, o sistema:

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
├── index.js e arquivos do seu bot principal
├── loader.js              # Sistema de atualização e inicialização
├── version.json           # Versão atual instalada
├── G-Manager/
│   └── on.js              # Script principal dos bots
```

---

## 🤝 Contribuindo

Quer sugerir melhorias ou reportar bugs?  
Abra uma [issue](https://github.com/luizdeveloperr/gratian-manager/issues) ou um pull request.

---

## 📜 Licença

Projeto mantido por [Gratian.pro](https://gratian.pro)  
Licenciado sob os termos da **MIT License**.

---

## 📞 Suporte

- 🌐 Site: [https://gratian.pro](https://gratian.pro)  
- 📧 E-mail: sac@gratian.pro  
- 💬 Discord: [discord.gg/gratian](https://discord.gg/gratian)
