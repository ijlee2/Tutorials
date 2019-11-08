export default class NotFoundError extends Error {
    constructor(modelName, id) {
        super();

        this.modelName = modelName;
        this.id = id;
    }
}