import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {path: '', component: ProfilesComponent},
  {path: 'profiles', component: ProfilesComponent},
  {path: 'history', component: HistoryComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
