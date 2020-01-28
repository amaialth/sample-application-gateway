import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SimpleJhipAppWithOAuth2SharedModule } from 'app/shared/shared.module';
import { SimpleJhipAppWithOAuth2CoreModule } from 'app/core/core.module';
import { SimpleJhipAppWithOAuth2AppRoutingModule } from './app-routing.module';
import { SimpleJhipAppWithOAuth2HomeModule } from './home/home.module';
import { SimpleJhipAppWithOAuth2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SimpleJhipAppWithOAuth2SharedModule,
    SimpleJhipAppWithOAuth2CoreModule,
    SimpleJhipAppWithOAuth2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SimpleJhipAppWithOAuth2EntityModule,
    SimpleJhipAppWithOAuth2AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class SimpleJhipAppWithOAuth2AppModule {}
