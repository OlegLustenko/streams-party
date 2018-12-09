"use strict";
exports.__esModule = true;
var json_export_service_1 = require("./json-export-service");
var post_service_1 = require("./post-service");
var app = new post_service_1.PostService();
app["export"](new json_export_service_1.JsonExportService()).then(function (posts) {
    console.log('result: ', posts);
});
