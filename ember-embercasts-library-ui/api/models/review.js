const createModel = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        user: DataTypes.STRING,
        body: DataTypes.STRING
    }, {});

    Review.associate = function(models) {
        Review.belongsTo(models.Book);
    };

    return Review;
};

export default createModel;