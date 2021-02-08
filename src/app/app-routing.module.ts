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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
