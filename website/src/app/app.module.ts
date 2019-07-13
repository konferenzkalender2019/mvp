import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { EventComponent } from './event/event.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { OverviewComponent } from './overview/overview.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieLawModule } from 'angular2-cookie-law';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    EventComponent,
    ImpressumComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // BrowserAnimationsModule is required
    CookieLawModule // import Angular's CookieLaw modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
