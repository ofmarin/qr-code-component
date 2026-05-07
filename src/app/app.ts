import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

  qrCode = "./images/image-qr-code.png";
  codeAlt:string = "QR CODE";
  protected readonly title = signal('qr-code-component');
}
