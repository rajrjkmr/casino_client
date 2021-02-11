import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/main/home', pathMatch: 'full' },
  {
    path: 'main',
    component: NavbarComponent,
    children: [
      { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'results',
    loadChildren: () => import('../app/results-management/results-management.module').then(m => m.ResultsManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
