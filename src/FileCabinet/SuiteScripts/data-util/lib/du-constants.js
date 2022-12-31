/**
 * @NApiVersion 2.1
 */
define([], () => {
    let exports = {};

    exports.PROCESS_RECORD = {
        id: "",
        fields: {
            STATUS: "",
            IN_FILE: "",
            OUT_FILE: "",
            ACTION_TYPE: ""
        }
    };

    exports.ACTION_TYPE = {
        CREATE: "create",
        READ: "read",
        UPDATE: "update",
        DELETE: "delete",
        UPSERT: "upsert"
    };

    exports.PROCESS_STATUS = {
        NEW: "new",
        SETUP: "setup",
        PROCESSING: "processing",
        PROCESSED: "processed",
        SUCCESS: "success",
        ERRORS: "errors",
        FAILURE: "failure"
    };
    return exports;
});
