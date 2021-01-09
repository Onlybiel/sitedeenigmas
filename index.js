// 2.10 Dentro do arquivo index.js você irá escrever(ou colar) o código abaixo que basicamente servirá para deixar o bot online e funcionando:
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const fs = require("fs");
console.log("♨️ Ligando bot...");
const Discord = require("discord.js");
const client = new Discord.Client({
})
const config = require("./config.json");
const { Client, Util } = require("discord.js");
var token = config.token;
var prefix = config.prefix;
var dono = config.dono;

client.login("Nzk3MTE0OTUyOTU5MDAwNzA3.X_hxJg.O4MiPGn1q-B0f7l46nmT_4ItUhg");
client.on('ready',()=>{console.log(client.user.username)})
client.on("message", message => {
  if (message.channel.type == "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (e) {
    console.error(e.stack);
    message.reply(
      "**Esse comando não existe ou foi ultilizado de maneira incorreta! **");
  }
});