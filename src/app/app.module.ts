import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import {ScriptService} from './components/services/script.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    { provide: 'ORIGIN_URL', useValue: location.origin },
    ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }


