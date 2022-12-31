/**
 * @NApiVersion 2.1
 */
define([], () => {
    let exports = {};

    exports.PROCESS_RECORD = {
        id: "customrecord_scgdu_p_job",
        fields: {
            STATUS: "custrecord_scgdu_p_job_status",
            IN_FILE: "custrecord_scgdu_p_job_in_file",
            OUT_FILE: "custrecord_scgdu_p_job_out_file",
            ACTION_TYPE: "custrecord_scgdu_p_action_type",
            SUBMIT_COUNT: "custrecord_scgdu_p_job_submitted",
            ERROR_COUNT: "custrecord_scgdu_p_job_errored",
            SUCCESS_COUNT: "custrecord_scgdu_p_job_count_success"
        }
    };

    exports.ACTION_TYPE = {
        CREATE: 1,
        READ: 2,
        UPDATE: 3,
        DELETE: 4,
        UPSERT: 5
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
