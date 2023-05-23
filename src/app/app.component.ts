import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Motos lista', url: '/motos', icon: 'bicycle' },
    { title: 'Coches en lista con images ruta absoluta', url: '/coches', icon: 'car' },
    { title: 'Becarios con JSON', url: '/becarios', icon: 'man' },
    { title: 'Permisos con NGif', url: '/permisos', icon: 'alert' },

  ];
  constructor() {}
}
