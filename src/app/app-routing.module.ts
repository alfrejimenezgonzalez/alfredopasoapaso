import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'motos',
    loadChildren: () => import('./motos/motos.module').then( m => m.MotosPageModule)
  },
  {
    path: 'coches',
    loadChildren: () => import('./coches/coches.module').then( m => m.CochesPageModule)
  },
  {
    path: 'becarios',
    loadChildren: () => import('./becarios/becarios.module').then( m => m.BecariosPageModule)
  },
  {
    path: 'permisos',
    loadChildren: () => import('./permisos/permisos.module').then( m => m.PermisosPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
