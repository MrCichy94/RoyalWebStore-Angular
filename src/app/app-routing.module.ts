import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './components/container/main-panel/content/products/products.component';
import {ProductComponent} from './components/container/main-panel/content/products/product/product.component';
import {OrdersComponent} from './components/container/main-panel/content/orders/orders.component';
import {CartsComponent} from './components/container/main-panel/content/carts/carts.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'products/:productId', component: ProductComponent},
  {path: 'customers/carts', component: CartsComponent},
  {path: 'customers/orders', component: OrdersComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
