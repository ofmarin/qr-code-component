import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  qrCode = "/image-qr-code.png";
  codeAlt:string = "QR CODE";
  protected readonly title = signal('qr-code-component');
}
