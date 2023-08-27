"use strict";
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
exports.AdminGuard = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const jwt_1 = require("@nestjs/jwt");
let AdminGuard = exports.AdminGuard = class AdminGuard {
    constructor(jwtService, cacheManager) {
        this.jwtService = jwtService;
        this.cacheManager = cacheManager;
    }
    canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            const jwtoken = request.headers['authorization'].split(' ')[1];
            if (jwtoken != 'undefined') {
                const payload = this.jwtService.verify(jwtoken, {
                    secret: process.env.JWT_SECRET,
                });
                return this.cacheManager.get('logged_in').then((res) => {
                    if (res && res.includes(jwtoken)) {
                        return true;
                    }
                });
            }
            return false;
        }
        catch (err) {
            return false;
        }
    }
};
exports.AdminGuard = AdminGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [jwt_1.JwtService, Object])
], AdminGuard);
//# sourceMappingURL=admin.guard.js.map