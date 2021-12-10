const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
          .setName('github')
          .setDescription('This is my github check it out if you want.')
          .addSubcommand(subcommand =>
                subcommand
                .setName("codes")
                .setDescription("Go to my github.")),
    async execute(interaction, client) {
        // Get your subcommand name with the command name it won't work.
          if (interaction.options.getSubcommand() === "codes") {
                const row = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setLabel('Github')
                            .setURL('https://github.com/MUX-ON-WINDOWS')
                            .setStyle('LINK')
                            .setEmoji('/guilds/779841852798533653/emojis'),

                    );
                const helpEmbed = new MessageEmbed()
                    .setAuthor(`${client.user.tag}`, client.user.displayAvatarURL())
                    .setTitle(`My github codes:`)
                    .setAuthor(`${client.user.tag}`, client.user.displayAvatarURL())
                    .setColor('RANDOM')
                    // .setTimestamp();

		    await interaction.reply({ ephemeral: true, embeds: [helpEmbed], components: [row] });
          } else {
                await interaction.reply(`No command found`);
          }
    }
};
