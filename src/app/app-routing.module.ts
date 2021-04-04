import { NgModule } from '@angular/core';
import {MainPanelComponent} from './components/container/main-panel/main-panel.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './components/container/main-panel/content/products/products.component';
import {ContentComponent} from './components/container/main-panel/content/content.component';
import {ProductComponent} from './components/container/main-panel/content/products/product/product.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'products/:productId', component: ProductComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
