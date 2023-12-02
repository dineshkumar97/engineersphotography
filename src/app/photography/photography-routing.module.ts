import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'engagement', component: EngagementComponent },
  { path: 'coupleshoot', component: CoupleShootComponent },
  { path: 'birthday', component: BirthayComponent },
  { path: 'babyshower', component: BabyShowerComponent },
  { path: 'newborn', component: NewBornComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotographyRoutingModule { }
