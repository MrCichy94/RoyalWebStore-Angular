import { NgModule } from '@angular/core';
import {MainPanelComponent} from './components/container/main-panel/main-panel.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'products', component: MainPanelComponent},
  {path: 'products/:id', component: MainPanelComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
