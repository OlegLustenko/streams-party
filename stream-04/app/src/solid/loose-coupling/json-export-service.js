"use strict";
exports.__esModule = true;
var JsonExportService = /** @class */ (function () {
    function JsonExportService() {
    }
    JsonExportService.prototype["export"] = function (posts) {
        return JSON.stringify(posts);
    };
    return JsonExportService;
}());
exports.JsonExportService = JsonExportService;
