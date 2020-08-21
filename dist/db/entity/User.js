"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var type_graphql_1 = require("type-graphql");
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.name = function (parent) {
        return parent.firstName + " " + parent.lastName;
    };
    __decorate([
        type_graphql_1.Field(function () { return type_graphql_1.ID; }),
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column('text', { nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column('text', { nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column('text', { unique: true, nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column('text', { unique: true }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.CreateDateColumn({ type: 'date' }),
        __metadata("design:type", String)
    ], User.prototype, "dateOfBirth", void 0);
    __decorate([
        type_graphql_1.Field(),
        __param(0, type_graphql_1.Root()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [User]),
        __metadata("design:returntype", String)
    ], User.prototype, "name", null);
    User = __decorate([
        type_graphql_1.ObjectType(),
        typeorm_1.Entity()
    ], User);
    return User;
}(typeorm_1.BaseEntity));
exports.User = User;
//# sourceMappingURL=User.js.map