import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreejsViewerModule } from './threejs-viewer/threejs.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThreejsViewerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '3d-model-viewer';
}
