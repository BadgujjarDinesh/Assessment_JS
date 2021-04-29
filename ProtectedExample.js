var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee2 = /** @class */ (function () {
    function Employee2(ID, Name) {
        this.EmpId = ID;
        this.EmpName = Name;
    }
    return Employee2;
}());
var ITEmployee = /** @class */ (function (_super) {
    __extends(ITEmployee, _super);
    function ITEmployee(ID, dept, Name) {
        var _this = _super.call(this, ID, Name) || this;
        _this.Department = dept;
        return _this;
    }
    return ITEmployee;
}(Employee2));
var emp1 = new ITEmployee(101, "Dinesh", "CSE");
