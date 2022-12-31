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
    const onRequest = (context) => {};

    return { onRequest };
});
