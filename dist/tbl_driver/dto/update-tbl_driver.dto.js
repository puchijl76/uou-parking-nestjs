"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTblDriverDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tbl_driver_dto_1 = require("./create-tbl_driver.dto");
class UpdateTblDriverDto extends (0, mapped_types_1.PartialType)(create_tbl_driver_dto_1.CreateTblDriverDto) {
}
exports.UpdateTblDriverDto = UpdateTblDriverDto;
//# sourceMappingURL=update-tbl_driver.dto.js.map