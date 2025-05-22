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

1. **Baixe o projeto em zip:**

![Instalação](https://i.imgur.com/znE80KD.png)


2. **Extraia o arquivo no servidor clicando em "Unarchive".**
![extrair](https://i.imgur.com/ZZX2gQq.png)


3. **Mova os arquivos de dentro da pasta "gratian-manager-main" para o diretório principal.**


4. **Altere o arquivo de start do seu servidor na aba "Startup":**

![upload](https://i.imgur.com/FB94pgb.png)

![upload2](https://i.imgur.com/vnV38yS.png)


5. **Ainda na aba Startup, Instale as dependências necessárias:**

```bash
npm i unzipper
```
![dependencia](https://i.imgur.com/jZRWksp.png)


5. **Inicie o servidor:**

![iniciar](https://i.imgur.com/kHXf9gP.png)

---

## 🔁 Autoatualização ao iniciar

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
├── index.js               # Arquivos do seu bot principal
├── loader.js              # Sistema de atualização e inicialização
├── version.json           # Versão atual instalada
├── bots
│   └── 1
│   └── 2
│   └── 3
│   └── 4
│   └── 5
├── G-Manager/
│   └── on.js              # Script principal dos bots
```

---

## ⚠ Informações importantes
1. Você deve ter um index.js ao menos no diretório principal do seu servidor.
2. Cada pasta de "bots" é aonde você pode colocar os arquivos dos seus bots.
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
