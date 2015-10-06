var Remarks = (function () {
    function Remarks() {
        var _this = this;
        this.add = function (comment) {
            _this.comments.push(comment);
        };
        this.toArray = function () {
            return JSON.parse(_this.toJson());
        };
        this.toJson = function () {
            return JSON.stringify(_this.comments);
        };
    }
    Remarks.prototype.constructors = function (json) {
        this.comments = this.tryParse(json);
    };
    Remarks.prototype.tryParse = function (json) {
        if (!json)
            return [];
        try {
            var comments = JSON.parse(json);
            if (Array.isArray(comments))
                return comments;
            throw new Error('Comments did not parse to an array');
        }
        catch (ex) {
            throw new Error("Unable to parse comments: " + ex.message);
        }
    };
    return Remarks;
})();
exports.Remarks = Remarks;
//# sourceMappingURL=index.js.map