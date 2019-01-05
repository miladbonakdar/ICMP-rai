const log = require("../repositories/logRepository");
const csvConverter = require("../utils/csvConverter");
const dailyReportCsvStatics = require("./dailyReportCsvStatics");
/** TODO: add description
 *
 */
module.exports = async () => {
    const logRepository = new log();

    const logs = logRepository.getLogs();
    const csv = new csvConverter(
        logs,
        dailyReportCsvStatics.getHeader(),
        dailyReportCsvStatics.getFilePath()
    );
    csv.convert();
    await csv.saveToFileAsync();
};
