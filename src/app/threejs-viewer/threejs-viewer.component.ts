import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

@Component({
  selector: 'app-threejs-viewer',
  templateUrl: './threejs-viewer.component.html',
  styleUrls: ['./threejs-viewer.component.css']
})
export class ThreejsViewerComponent implements AfterViewInit {
  @ViewChild('container') containerRef: ElementRef | undefined;
  controls!: OrbitControls;

  constructor() { }

  ngAfterViewInit(): void {
    this.containerRef = this.containerRef as ElementRef;  
    const width = this.containerRef.nativeElement.clientWidth;
    const height = this.containerRef.nativeElement.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.2, 20000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    this.containerRef.nativeElement.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshMatcapMaterial({ color: 0xd3cfec });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;

    this.controls = new OrbitControls(camera, renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      this.controls.update();
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
      const newWidth = width;
      const newHeight = height;
      renderer.setSize(newWidth, newHeight);
      camera.updateProjectionMatrix();
    });
  }
}
