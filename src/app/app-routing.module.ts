import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilesComponent,
    data: { title: 'List of Users' }
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    data: { title: 'User Profile' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
