import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent, CommonModule, LottieComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {

  options: AnimationOptions = {
    path: 'assets/download-dark.json',
    loop: true,
    autoplay: true,
  };

  overleafPdfUrl = 'https://www.overleaf.com/download/project/64f0352d3faa92d424accc91/build/1945ce989f8-fd796447fa3c29b9/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-n2d-c-f-vgmj&enable_pdf_caching=true&popupDownload=true'; // Replace with your Overleaf link

  animationCreated(animationItem: AnimationItem): void {
    // console.log(animationItem);
  }

  downloadPdf(): void {
    window.open(this.overleafPdfUrl, '_blank');
  }

}
