import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ThreejsViewerComponent } from './threejs-viewer/threejs-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreejsViewerComponent  // Make sure this is declared
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
