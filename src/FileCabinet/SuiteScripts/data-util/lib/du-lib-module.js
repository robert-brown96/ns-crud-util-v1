/**
 * @NApiVersion 2.1
 */
define(["N/record"], (record) => {
    let exports = {};

    /**
     * @typedef FieldInputVal
     * @property {String} fieldId
     * @property  value
     */

    /**
     *
     * @returns {Object|boolean}
     */
    exports.earliestOpenPeriod = () => {
        try {
            const firstOpenQl = `SELECT
                                  p.id as id,
                                  p.periodname as label,
                                  p.startdate as startdate
                                from
                                  accountingPeriod p
                                WHERE
                                  p.arlocked = 'F'
                                  and p.isposting = 'T'
                                ORDER BY
                                  p.startdate ASC
                                FETCH NEXT 1 ROWS ONLY`;

            const qlResults = query
                .runSuiteQL({ query: firstOpenQl })
                .asMappedResults();
            log.debug({
                title: "results",
                details: qlResults
            });
            return qlResults.length > 0 ? qlResults[0] : false;
        } catch (e) {
            log.error({
                title: "earliestOpenPeriod: ERROR",
                details: e
            });
        }
    };

    /**
     *
     * @param {String} recType
     * @param {String} ref
     * @param {FieldInputVal[]} vals
     * @returns {{error_message, recType, success: boolean, refId}|{recType, success: boolean, refId}}
     */
    exports.createBodyRecord = ({ recType, ref, vals }) => {
        try {
            const rec = record.create({
                type: recType,
                isDynamic: true
            });

            vals.forEach((v) => {
                const { fieldId, value } = v;
                rec.setValue({
                    fieldId,
                    value
                });
            });

            return { success: true, recType, refId: ref };
        } catch (e) {
            log.error({
                title: `createRecord:ERROR for ref: ${ref} and vals: ${vals}`,
                details: e
            });
            return { error_message: e, success: false, recType, refId: ref };
        }
    };

    /**
     *
     * @param recType
     * @param recId
     * @returns {{recType, error_message, success: boolean, recId}|{recType, success: boolean, recId: number}}
     */
    exports.deleteRecord = ({ recType, recId }) => {
        try {
            const res = record.delete({
                type: recType,
                id: recId
            });
            return { success: true, recId: res, recType };
        } catch (e) {
            log.error({
                title: `deleteRecord: ERROR ON ${recType} WITH ID ${recId}`,
                details: e
            });
            return { success: false, recId, recType, error_message: e };
        }
    };

    return exports;
});
