import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreejsViewerComponent } from './threejs-viewer.component';

@NgModule({
  declarations: [ThreejsViewerComponent],
  imports: [CommonModule],
  exports: [ThreejsViewerComponent]
})
export class ThreejsViewerModule { }