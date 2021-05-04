import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './components/container/main-panel/content/products/products.component';
import {ProductComponent} from './components/container/main-panel/content/products/product/product.component';
import {OrdersComponent} from './components/container/main-panel/content/orders/orders.component';
import {CartsComponent} from './components/container/main-panel/content/carts/carts.component';
import {CartComponent} from './components/container/main-panel/content/carts/cart/cart.component';
import {OrderComponent} from './components/container/main-panel/content/orders/order/order.component';
import {LoginComponent} from './components/container/main-panel/content/login/login.component';
import {AuthGuard} from './helpers/auth.guard';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/container/main-panel/content/register/register.component';
import {CopiesComponent} from './components/container/main-panel/content/products/product/copies/copies.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'products/:productId', component: ProductComponent},
  {path: 'products/:productId/copies', component: CopiesComponent},
  {path: 'customers/cart', component: CartsComponent},
  {path: 'customers/cart/details', component: CartComponent},
  {path: 'customers/orders', component: OrdersComponent},
  {path: 'customers/orders/details', component: OrderComponent},
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
