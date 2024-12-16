const { EmbedBuilder } = require("discord.js");

module.exports = async (interaction) => {
  if (!interaction.isButton()) {
    return;
  }

  const customId = interaction.customId;
  const dataChangeRequestCount = 41; // Replace with dynamic count fetching mechanism

  try {
    if (customId.startsWith("confirm_remove_data")) {
      const updatedEmbed = new EmbedBuilder()
        .setColor(0x19e619)
        .setTitle(`Data Removal Request #${dataChangeRequestCount}`)
        .setDescription("Data removal request completed.")
        .setTimestamp();

      await interaction.update({
        components: [], // Disable buttons
        embeds: [updatedEmbed], // Send updated embed
      });

      console.log(`Data removal request completed by ${interaction.user.tag}.`);
    } else if (customId.startsWith("cancel_remove_data")) {
      const updatedEmbed = new EmbedBuilder()
        .setColor(0x2c2d30) // Light red
        .setTitle(`Cancelled: Data Removal Request #${dataChangeRequestCount}`)
        .setDescription("Data removal request cancelled.")
        .setTimestamp();

      await interaction.update({
        components: [], // Disable buttons
        embeds: [updatedEmbed], // Send updated embed
      });

      console.log(`Data removal request cancelled by ${interaction.user.tag}.`);
    } else if (customId.startsWith("confirm_change_data")) {
      const updatedEmbed = new EmbedBuilder()
        .setColor(0x00ff00) // Green for confirmation
        .setTitle(`Data Change Request #${dataChangeRequestCount}`)
        .setDescription("Data change request completed.")
        .setTimestamp();

      await interaction.update({
        components: [], // Disable buttons
        embeds: [updatedEmbed], // Send updated embed
      });

      console.log(`Data change request completed by ${interaction.user.tag}.`);
    } else if (customId.startsWith("cancel_change_data")) {
      const updatedEmbed = new EmbedBuilder()
        .setColor(0x2c2d30) // Light gray
        .setTitle(`Cancelled: Data Change Request #${dataChangeRequestCount}`)
        .setDescription("Data change request cancelled.")
        .setTimestamp();

      await interaction.update({
        components: [], // Disable buttons
        embeds: [updatedEmbed], // Send updated embed
      });

      console.log(`Data change request cancelled by ${interaction.user.tag}.`);
    } else {
      await interaction.reply({
        content: `Unhandled button interaction: ${customId}`,
        ephemeral: true,
      });
    }
  } catch (error) {
    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content: "An error occurred while processing the interaction.",
        ephemeral: true,
      });
    }
  }
};
