import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import dbConfig from '../config/db';
import NotFoundError from '../errors/not-found';

const basename = path.basename(__filename);
// Get the configuration object for development mode
const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];
const db = {};
let sequelize;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Find all .js files in the models folder and create a model instance
// for each model file
fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    const Model = db[modelName];

    // Add relationships between models
    if (Model.associate) {
        Model.associate(db);
    }

    // Define custom methods
    Model.findOrFail = async (id) => {
        const model = await Model.findByPk(id);

        if (model === null) {
            throw new NotFoundError(modelName, id);
        }

        return model;
    };
});

// Add the Sequelize instance to the db object so that we may do
// raw queries in SQL
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;