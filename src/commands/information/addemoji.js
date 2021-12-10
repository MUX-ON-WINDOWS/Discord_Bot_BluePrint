const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
	.setName('addemoji')
	.setDescription('test'),

	async execute(interaction, args) {
		if (!args.lenght) return interaction.reply('Specify your emoijs to the server.');

		for (const emojis of args) {
			const getEmoji = Discord.Util.parseEmoji(emojis);
			if (getEmoji.id) {
				const emojiExt = getEmoji.animated ? ".gif" : ".png";
				const emojiURL = `https://cdn.discordapp.com/emojis/${getEmoji.id + emojiExt}`
				await interaction.guild.emojis.create(emojiURL, getEmoji.name).then(emoji => interaction.reply(`added: ${emoji.name} `))
			}
		}
	},
};
