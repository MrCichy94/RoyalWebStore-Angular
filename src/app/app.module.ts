import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContainerComponent} from './components/container/container.component';
import {ScriptService} from './components/services/scriptService/script.service';
import {LeftPanelComponent} from './components/container/left-panel/left-panel.component';
import {MainPanelComponent} from './components/container/main-panel/main-panel.component';
import { NavbarComponent } from './components/container/main-panel/navbar/navbar.component';
import { UserImageComponent } from './components/container/left-panel/user-image/user-image.component';
import { OptionListComponent } from './components/container/left-panel/option-list/option-list.component';
import { OptionComponent } from './components/container/left-panel/option-list/option/option.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { ContentComponent } from './components/container/main-panel/content/content.component';
import { ProductsComponent } from './components/container/main-panel/content/products/products.component';
import {MatIconModule} from '@angular/material/icon';
import { ProductComponent } from './components/container/main-panel/content/products/product/product.component';

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
    ProductComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatIconModule
    ],
  exports: [RouterModule],
  providers: [
    {provide: 'ORIGIN_URL', useValue: location.origin},
    ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


