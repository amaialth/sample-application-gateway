import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleJhipAppWithOAuth2SharedModule } from 'app/shared/shared.module';

import { GatewayComponent } from './gateway.component';

import { gatewayRoute } from './gateway.route';

@NgModule({
  imports: [SimpleJhipAppWithOAuth2SharedModule, RouterModule.forChild([gatewayRoute])],
  declarations: [GatewayComponent]
})
export class GatewayModule {}
