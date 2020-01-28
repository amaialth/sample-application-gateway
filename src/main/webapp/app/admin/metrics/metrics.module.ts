import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleJhipAppWithOAuth2SharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [SimpleJhipAppWithOAuth2SharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent]
})
export class MetricsModule {}
