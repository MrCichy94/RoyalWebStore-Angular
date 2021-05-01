import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContainerComponent} from './components/container/container.component';
import {ScriptService} from './services/scriptService/script.service';
import {LeftPanelComponent} from './components/container/left-panel/left-panel.component';
import {MainPanelComponent} from './components/container/main-panel/main-panel.component';
import { NavbarComponent } from './components/container/main-panel/navbar/navbar.component';
import { UserImageComponent } from './components/container/left-panel/user-image/user-image.component';
import { OptionListComponent } from './components/container/left-panel/option-list/option-list.component';
import { OptionComponent } from './components/container/left-panel/option-list/option/option.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { ContentComponent } from './components/container/main-panel/content/content.component';
import {FilterPipe, ProductsComponent} from './components/container/main-panel/content/products/products.component';
import {MatIconModule} from '@angular/material/icon';
import { ProductComponent } from './components/container/main-panel/content/products/product/product.component';
import { CartsComponent } from './components/container/main-panel/content/carts/carts.component';
import { OrdersComponent } from './components/container/main-panel/content/orders/orders.component';
import { OrderComponent } from './components/container/main-panel/content/orders/order/order.component';
import { CartComponent } from './components/container/main-panel/content/carts/cart/cart.component';
import { CopiesComponent } from './components/container/main-panel/content/products/product/copies/copies.component';
import { CopyComponent } from './components/container/main-panel/content/products/product/copies/copy/copy.component';
import { LoginComponent } from './components/container/main-panel/content/login/login.component';
import { AlertComponent } from './components/container/main-panel/content/login/alert/alert.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import { HomeComponent } from './components/home/home.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/container/main-panel/content/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LeftPanelComponent,
    MainPanelComponent,
    NavbarComponent,
    UserImageComponent,
    OptionListComponent,
    OptionComponent,
    ContentComponent,
    ProductsComponent,
    ProductComponent,
    CartsComponent,
    OrdersComponent,
    OrderComponent,
    CartComponent,
    CopiesComponent,
    CopyComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    FilterPipe,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [RouterModule],
  providers: [
    {provide: 'ORIGIN_URL', useValue: location.origin},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
