import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AddonModuleBase } from "./base/addon.module.base";
import { AddonService } from "./addon.service";
import { AddonController } from "./addon.controller";
import { AddonResolver } from "./addon.resolver";

@Module({
  imports: [AddonModuleBase, forwardRef(() => AuthModule)],
  controllers: [AddonController],
  providers: [AddonService, AddonResolver],
  exports: [AddonService],
})
export class AddonModule {}
