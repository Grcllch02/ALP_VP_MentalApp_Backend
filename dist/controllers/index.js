"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = exports.GameStateController = void 0;
var gameState_controller_1 = require("./gameState-controller");
Object.defineProperty(exports, "GameStateController", { enumerable: true, get: function () { return gameState_controller_1.GameStateController; } });
var auth_controller_1 = require("./auth-controller");
Object.defineProperty(exports, "AuthController", { enumerable: true, get: function () { return auth_controller_1.AuthController; } });
__exportStar(require("./music-controller"), exports);
//# sourceMappingURL=index.js.map