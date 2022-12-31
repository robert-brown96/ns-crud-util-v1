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
        NEW: 1,
        SETUP: 2,
        PROCESSING: 3,
        PROCESSED: 4,
        SUCCESS: 5,
        ERRORS: 6,
        FAILURE: 7
    };
    return exports;
});
