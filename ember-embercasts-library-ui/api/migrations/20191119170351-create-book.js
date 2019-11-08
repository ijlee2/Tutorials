export default {
    async up(queryInterface, Sequelize) {
        return await queryInterface.createTable('Books', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            isbn: {
                type: Sequelize.STRING
            },
            publicationDate: {
                type: Sequelize.DATE
            },
            // Create an association
            AuthorId: {
                type: Sequelize.INTEGER,
                // Make the author id the foreign key
                references: {
                    model: 'Authors',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        return await queryInterface.dropTable('Books');
    }
};