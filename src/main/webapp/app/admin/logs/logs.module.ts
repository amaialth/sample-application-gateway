import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleJhipAppWithOAuth2SharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [SimpleJhipAppWithOAuth2SharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
