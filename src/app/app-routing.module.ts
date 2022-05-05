import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFormComponent } from './components/list-form/list-form.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  { path: 'auth', 
    loadChildren: () => import('./eg2/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: '',
    component: ListFormComponent
  },
  // {
  //   path: '',
  //   redirectTo: ListFo,
  //   pathMatch: 'full'
  // },
  {
    path: 'gg',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
