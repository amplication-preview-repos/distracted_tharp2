import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AddonService } from "./addon.service";
import { AddonControllerBase } from "./base/addon.controller.base";

@swagger.ApiTags("addons")
@common.Controller("addons")
export class AddonController extends AddonControllerBase {
  constructor(
    protected readonly service: AddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
