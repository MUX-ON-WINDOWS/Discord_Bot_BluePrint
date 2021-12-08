module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Your bot is now online! Logged in as ${client.user.tag}`);
		//Playing	0, Streaming   1 Listening	2, Watching	3, Custom	4, Competing	5,
		client.user.setPresence({ activities: [{ type: `WATCHING`, name: `Muxic`, url:`https://maxarnouts.nl`}], status: 'dnd', afk: false});
	},
};
