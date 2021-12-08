module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Your bot is now online! Logged in as ${client.user.tag}`);
	},
};
