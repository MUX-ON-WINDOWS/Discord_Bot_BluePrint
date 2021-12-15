const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    MessageActionRow,
    MessageButton
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sellix')
        .setDescription('My Sellix shop')
        .addSubcommand(subcommand =>
            subcommand
            .setName("shop")
            .setDescription("huts")),
    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === "shop") {
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setLabel('Sellix shop')
                    .setURL('https://sellix.io/MUX-ON-WINDOWS')
                    .setStyle('LINK'),
                );

            //Reply the embed design
            await interaction.reply({
                content: `Check out my sellix shop!`,
                ephemeral: true,
                components: [row]
            });

        } else {
            await interaction.reply(`No command found`);
        }
    }
};
