import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

  qrCode = "./images/image-qr-code.png";
  codeAlt:string = "QR CODE";
  protected readonly title = signal('qr-code-component');
}
