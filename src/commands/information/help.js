const {
      SlashCommandBuilder
} = require('@discordjs/builders');
const {
      MessageEmbed
} = require('discord.js');

module.exports = {
      data: new SlashCommandBuilder()
            .setName('help')
            .setDescription('"Help you to get all possible commands')
            .addSubcommand(subcommand =>
                  subcommand
                  .setName("commands")
                  .setDescription("Information about the server commands.")),
      async execute(interaction, client) {
            if (interaction.options.getSubcommand() === "commands") {
                  const helpEmbed = new MessageEmbed()
                        .setAuthor(`${client.user.tag}`, client.user.displayAvatarURL())
                        .setTitle(`Server commands:`)
                        .addFields({
                              name: 'Command:',
                              value: `/info server`,
                              inline: true
                        }, {
                              name: 'Command ',
                              value: `/info user @...`,
                              inline: true
                        }, {
                              name: 'Command:',
                              value: `/ping`,
                              inline: true
                        }, {
                              name: 'Command ',
                              value: `/github`,
                              inline: true
                        }, {
                              name: 'Command:',
                              value: `empty/ not yet used`,
                              inline: true
                        }, {
                              name: 'Command ',
                              value: `empty/ not yet used`,
                              inline: true
                        }, {
                              name: 'Command:',
                              value: `empty/ not yet used`,
                              inline: true
                        }, {
                              name: 'Command ',
                              value: `empty/ not yet used`,
                              inline: true
                        }, {
                              name: 'Command:',
                              value: `empty/ not yet used`,
                              inline: true
                        }, )
                        .setTimestamp()
                        .setColor("RANDOM")
                        .setFooter(`${client.user.tag}`, client.user.displayAvatarURL());
                  //Reply the embed design
                  await interaction.reply({
                        embeds: [helpEmbed]
                  });
            } else {
                  await interaction.reply(`No command found`);
            }
      }
};
