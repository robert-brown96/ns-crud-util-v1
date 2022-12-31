/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(["N/ui/serverWidget"], (serverWidget) => {
    /**
     * Defines the Suitelet script trigger point.
     * @param {Object} context
     * @param {ServerRequest} context.request - Incoming request
     * @param {ServerResponse} context.response - Suitelet response
     * @since 2015.2
     */
    const onRequest = (context) => {
        // Create an assistant
        const assistObj = serverWidget.createAssistant({
            title: "Data Tool"
        });
        // create step for action type
        const s__type = assistObj.addStep({
            id: "s__type"
        });
        // METHOD HANDLERS
        if (context.request.method === "GET") {
            log.debug({
                title: "GET START",
                details: context.request
            });
        } else {
            log.debug({
                title: "POST START",
                details: context.request
            });
        }
    };

    return { onRequest };
});
