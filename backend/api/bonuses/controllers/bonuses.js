const { sanitizeEntity } = require("strapi-utils");

module.exports = {
	/**
	 * Retrieve a record.
	 *
	 * @return {Object}
	 */

	async findOne(ctx) {
		const { slug } = ctx.params;

		const entity = await strapi.services.bonuses.findOne({ slug });
		return sanitizeEntity(entity, { model: strapi.models.bonuses });
	},
};
