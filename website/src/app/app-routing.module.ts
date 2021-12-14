import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArtComponent } from './art/art.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'art', component: ArtComponent },
  { path: 'about', component: AboutComponent },
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
