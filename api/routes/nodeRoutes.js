const nodeController = require("../nodeController");
const baseUrl = require("../utils/baseRoutController");
const nodeStatics = require("../statics/node_statics");
module.exports = router => {
    /**
     * get all nodes
     */
    router
        .route(baseUrl(nodeController.controllerName))
        .get(nodeController[nodeStatics.getAll]);
    /**
     * add an node
     */
    router
        .route(baseUrl(nodeController.controllerName))
        .post(nodeController[nodeStatics.create]);
    /**
     * update an node
     */
    router
        .route(baseUrl(nodeController.controllerNamedate))
        .put(nodeController[nodeStatics.update]);
    /**
     * delete an node
     */
    router
        .route(baseUrl(nodeController.controllerName, true))
        .delete(nodeController[nodeStatics.delete]);
    /**
     * get an node
     */
    router
        .route(baseUrl(nodeController.controllerName, true))
        .get(nodeController[nodeStatics.get]);
};
