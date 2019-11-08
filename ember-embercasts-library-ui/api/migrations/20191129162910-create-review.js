export default {
    async up(queryInterface, Sequelize) {
        return await queryInterface.createTable('Reviews', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user: {
                type: Sequelize.STRING
            },
            body: {
                type: Sequelize.STRING
            },
            BookId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Books',
                    key: 'id',
                    onDelete: 'cascade'
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
        return await queryInterface.dropTable('Reviews');
    }
};