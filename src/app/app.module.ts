import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmenuComponent } from './header/submenu/submenu.component';
import { HeaderComponent } from './header/header.component';
import { DatetimeComponent } from './header/datetime/datetime.component';
import { LogoComponent } from './common/logo/logo.component';
import { SocialiconsComponent } from './common/socialicons/socialicons.component';
import { SearchboxComponent } from './header/searchbox/searchbox.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { EmailComponent } from './footer/email/email.component';
import { TitleComponent } from './footer/title/title.component';
import { FooteritemsComponent } from './footer/footeritems/footeritems.component';
import { ExternallinksComponent } from './footer/externallinks/externallinks.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { ServicesComponent } from './components/services/services.component';
import { FormComponent } from './components/form/form.component';
import { CountDetailsComponent } from './components/count-details/count-details.component';
import { ImagesliderComponent } from './components/imageslider/imageslider.component';
import { VideoblockComponent } from './components/videoblock/videoblock.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmenuComponent,
    HeaderComponent,
    DatetimeComponent,
    LogoComponent,
    SocialiconsComponent,
    SearchboxComponent,
    FooterComponent,
    CopyrightComponent,
    EmailComponent,
    TitleComponent,
    FooteritemsComponent,
    ExternallinksComponent,
    CardComponent,
    CarouselComponent,
    ProgressbarComponent,
    ServicesComponent,
    FormComponent,
    CountDetailsComponent,
    ImagesliderComponent,
    VideoblockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
