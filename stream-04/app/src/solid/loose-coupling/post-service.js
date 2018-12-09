"use strict";
exports.__esModule = true;
var fs = require("fs");
var PostService = /** @class */ (function () {
    function PostService() {
        this._fileName = 'posts.json';
    }
    PostService.prototype.getAll = function () {
        return fs.promises.readFile(this._fileName, 'utf8').then(function (posts) {
            return JSON.parse(posts);
        });
    };
    PostService.prototype.save = function (post) {
        return fs.promises.writeFile(this._fileName, post);
    };
    PostService.prototype["export"] = function (service) {
        return this.getAll().then(function (posts) { return service["export"](posts); });
    };
    return PostService;
}());
exports.PostService = PostService;
