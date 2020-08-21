"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var cors_1 = __importDefault(require("cors"));
var apollo_server_express_1 = require("apollo-server-express");
var express_1 = __importDefault(require("express"));
var typeorm_1 = require("typeorm");
var type_graphql_1 = require("type-graphql");
var register_1 = require("./modules/User/register");
var Login_1 = require("./modules/User/Login");
var PORT = process.env.PORT || 8000;
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, e_1, schema, apolloServer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                app = express_1.default();
                app.use(cors_1.default({
                    credentials: true,
                    origin: 'http://localhost:3000',
                }));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, typeorm_1.createConnection()];
            case 2:
                _a.sent();
                return [3, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1.message);
                throw e_1;
            case 4: return [4, type_graphql_1.buildSchema({
                    resolvers: [register_1.RegisterResolver, Login_1.LoginResolver],
                })];
            case 5:
                schema = _a.sent();
                apolloServer = new apollo_server_express_1.ApolloServer({
                    schema: schema,
                    context: function (req, res) { return ({ req: req, res: res }); },
                });
                apolloServer.applyMiddleware({ app: app });
                app.listen(PORT, function () {
                    console.log("listening on port: " + PORT + "/graphql");
                });
                return [2];
        }
    });
}); };
main();
//# sourceMappingURL=index.js.map