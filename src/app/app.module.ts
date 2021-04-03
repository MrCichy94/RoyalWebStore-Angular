import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContainerComponent} from './components/container/container.component';
import {ScriptService} from './components/services/scriptService/script.service';
import {LeftPanelComponent} from './components/container/left-panel/left-panel.component';
import {MainPanelComponent} from './components/container/main-panel/main-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LeftPanelComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    {provide: 'ORIGIN_URL', useValue: location.origin},
    ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


