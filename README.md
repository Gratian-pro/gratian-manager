# Gratian Manager

**Gratian Manager** é um sistema de gerenciamento de múltiplos bots com suporte a autoatualização via HTTP, desenvolvido para rodar com simplicidade e eficiência em servidores Node.js.

---

## 📦 Funcionalidades

- Suporte a múltiplos bots simultâneos  
- Autoatualização automática via servidor HTTP  
- Reinício automático após atualizações  
- Estrutura modular e expansível  
- Leve e fácil de instalar  

---

## 🚀 Como instalar

1. **Baixe o projeto em zip:**

```bash
wget https://seu-servidor.com/gratianmanager.zip
unzip gratianmanager.zip
cd gratianmanager
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Verifique o arquivo `version.json`:**

```json
{
  "version": "1.0.0"
}
```

4. **Inicie o sistema com o loader:**

```bash
node loader.js
```

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

### Exemplo de `version.json` no servidor remoto:

```json
{
  "version": "1.0.1",
  "zip": "http://seu-servidor.com/updates/gratianmanager-v1.0.1.zip"
}
```

---

## 🌐 Estrutura do Projeto

```
gratianmanager/
├── loader.js              # Sistema de atualização e inicialização
├── version.json           # Versão atual instalada
├── G-Manager/
│   └── on.js              # Script principal dos bots
```

---

## 🤝 Contribuindo

Quer sugerir melhorias ou reportar bugs?  
Abra uma [issue](https://github.com/seuusuario/gratianmanager/issues) ou um pull request.

---

## 📜 Licença

Projeto mantido por [Gratian.pro](https://gratian.pro)  
Licenciado sob os termos da **MIT License**.

---

## 📞 Suporte

- 🌐 Site: [https://gratian.pro](https://gratian.pro)  
- 📧 E-mail: suporte@gratian.pro  
- 💬 Discord: [discord.gg/seulink](https://discord.gg/seulink)
