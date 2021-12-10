const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('face')
		.setDescription('I will show you my face'),
	async execute(interaction) {
		await interaction.reply('( ͡° ͜ʖ ͡°)╭∩╮');
	},
};
