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
    return PostService;
}());
exports.PostService = PostService;
var MockPostService = /** @class */ (function () {
    function MockPostService() {
        this.mockPosts = [
            {
                id: 1,
                title: 'mock title',
                body: 'mock body',
                postedBy: 'qwe'
            },
            {
                id: 100,
                title: 'mock title',
                body: 'mock body',
                postedBy: 'qwe'
            },
            {
                id: 10000,
                title: 'mock title',
                body: 'mock body',
                postedBy: 'qwe'
            },
            {
                id: 1000,
                title: 'mock title',
                body: 'mock body',
                postedBy: 'qwe'
            },
        ];
    }
    MockPostService.prototype.getAll = function () {
        return Promise.resolve(this.mockPosts);
    };
    MockPostService.prototype.save = function (post) {
        this.mockPosts.push(post);
        return Promise.resolve();
    };
    return MockPostService;
}());
exports.MockPostService = MockPostService;
var NewsFeed = /** @class */ (function () {
    function NewsFeed(_service) {
        this._service = _service;
    }
    NewsFeed.prototype.show = function () {
        return this._service.getAll().then(function (posts) {
            posts.forEach(function (post) {
                console.log(post);
            });
        });
    };
    return NewsFeed;
}());
exports.NewsFeed = NewsFeed;
// const newsFeed = new NewsFeed(new PostService());
var newsFeed = new NewsFeed(new MockPostService());
newsFeed.show();
/*
* private*
* this._service = _service
*
* */
