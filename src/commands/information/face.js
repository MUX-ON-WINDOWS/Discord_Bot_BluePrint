const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('face')
		.setDescription('I will show you my face'),
	async execute(interaction) {
		const message = await interaction.reply({
			content: '( ͡° ͜ʖ ͡°)╭∩╮' || 'ʕっ•ᴥ•ʔっ',
			fetchReply: true
		});
		const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'monkey');
		message.react(reactionEmoji)
			.then(() => message.react('😄'))
			.then(() => message.react('🍇'))
			.catch(error => console.error('One of the emojis failed to react:', error));
	},
};
