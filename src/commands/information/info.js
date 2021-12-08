const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Returns info based on input')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription("Get information about the user you mention.")
                .addUserOption(option => option.setName("target").setDescription("@ name you want to metion")))
        .addSubcommand(subcommand =>
            subcommand
                .setName("server")
                .setDescription("Information about this server.")),
	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target");
            if (user) {
                // Image will be used here in your embed will be called at setImage()
                const file = new MessageAttachment("./src/images/bot.jpg");
                const userEmbed = new MessageEmbed()
                    .setTitle(`${user.username}'s information: `)
                    .setDescription("This is the information you wanted to know.")
                    .setURL("https://maxarnouts.nl")
                    // .setAuthor("MUX_ON_WINDOWS", client.user.displayAvatarURL(),"https://maxarnouts.nl")

                    .setAuthor("MUX_ON_WINDOWS", client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .addFields(
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Username:', value: `Username is: ${user.username}`, inline: true },
                        { name: 'Tag:', value: `Tag is: #${user.discriminator}`, inline: true },
                    )
                    .setImage("attachment://bot.jpg")
                    .setTimestamp()
                    .setColor("DARKER_GREY")
                    .setFooter(client.user.tag, client.user.displayAvatarURL());
                    //Reply the embed design
                await interaction.reply({embeds: [userEmbed], files: [file]});

            } else {
                await interaction.reply(`Username: ${interaction.user.username}\nYour user ID: ${interaction.user.id}`);
            }
        } else if (interaction.options.getSubcommand() === "server") {
            await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
        } else {
            await interaction.reply("No command used, try again!");
        }
	},
};
