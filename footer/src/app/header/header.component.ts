import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imagem : string = '../../assets/logo.png';
  lupa : string = '../../assets/lupa.png';
}
