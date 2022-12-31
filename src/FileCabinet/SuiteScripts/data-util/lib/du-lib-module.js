/**
 * @NApiVersion 2.1
 */
define([], () => {
    let exports = {};

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

    return exports;
});
