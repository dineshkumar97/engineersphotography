import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographyRoutingModule } from './photography-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { VideosComponent } from './component/videos/videos.component';
import { WeddingsComponent } from './component/weddings/weddings.component';
import { EngagementComponent } from './component/engagement/engagement.component';
import { CoupleShootComponent } from './component/couple-shoot/couple-shoot.component';
import { BirthayComponent } from './component/birthay/birthay.component';
import { BabyShowerComponent } from './component/baby-shower/baby-shower.component';
import { NewBornComponent } from './component/new-born/new-born.component';
import { ContactComponent } from './component/contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    GalleryComponent,
    VideosComponent,
    WeddingsComponent,
    EngagementComponent,
    CoupleShootComponent,
    BirthayComponent,
    BabyShowerComponent,
    NewBornComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    PhotographyRoutingModule
  ], 
  exports: [HeaderComponent,FooterComponent],
})
export class PhotographyModule { }
