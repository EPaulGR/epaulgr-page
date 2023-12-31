import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
    .then(m => m.HomeModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module')
    .then(m => m.ProjectsModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module')
    .then(m => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
