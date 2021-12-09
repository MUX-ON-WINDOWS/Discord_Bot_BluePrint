const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    MessageEmbed,
    MessageAttachment
} = require('discord.js');

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
                    // .setAuthor("MUX_ON_WINDOWS", client.user.displayAvatarURL(),"https://maxarnouts.nl")
                    .setAuthor(`${client.user.tag}`, client.user.displayAvatarURL())
                    .setThumbnail(client.user.displayAvatarURL())
                    .addFields(
                        // create empty space.
                        {
                            name: '\u200B',
                            value: '\u200B'
                        },
                        // gets username.
                        {
                            name: 'Username:',
                            value: `Username is: ${user.username}`,
                            inline: true
                        },
                        // #tag discord.
                        {
                            name: 'Tag:',
                            value: `Tag is: #${user.discriminator}`,
                            inline: true
                        },
                    )
                    .setImage("attachment://bot.jpg")
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${client.user.tag}`, client.user.displayAvatarURL());
                //Reply the embed design
                await interaction.reply({
                    embeds: [userEmbed],
                    files: [file]
                });

            } else {
                await interaction.reply(`Username: ${interaction.user.username}\nYour user ID: ${interaction.user.id}`);
            }
        } else if (interaction.options.getSubcommand() === "server") {
            const serverEmbed = new MessageEmbed()
                .setAuthor(`${client.user.tag}`, client.user.displayAvatarURL())
                .setTitle(`Server information:`)
                .addFields({
                    name: 'Server name:',
                    value: `${interaction.guild.name}`,
                    inline: true
                }, {
                    name: 'Total members: ',
                    value: `${interaction.guild.memberCount}`,
                    inline: true
                }, )
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter(`${client.user.tag}`, client.user.displayAvatarURL());
            //Reply the embed design
            await interaction.reply({
                embeds: [serverEmbed]
            });

        } else {
            await interaction.reply(`Command didn't work please contact the owner of the bot`);
        }
    },
};
