import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./log-out/log-out.module').then(module => module.LogOutModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(module => module.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
