export default {
    async up(queryInterface, Sequelize) {
        /*
            Add altering commands here.
            Await any promises to handle asynchronicity.

            Example:
            return  await queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        await queryInterface.createTable('Authors', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            firstName: {
                type: Sequelize.STRING
            },

            lastName: {
                type: Sequelize.STRING
            },

            createdAt: {
                type: Sequelize.DATE
            },

            updatedAt: {
                type: Sequelize.DATE
            }
        });
    },

    async down(queryInterface, Sequelize) {
        /*
            Add reverting commands here.
            Await any promises to handle asynchronicity.

            Example:
            return  await queryInterface.dropTable('users');
        */
        await queryInterface.dropTable('Authors');
    }
};
