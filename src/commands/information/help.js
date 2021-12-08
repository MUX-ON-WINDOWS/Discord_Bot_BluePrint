const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Returns an overview of the commands'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
