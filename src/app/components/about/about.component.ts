import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';


@Component({
  selector: 'app-about',
  imports: [CommonModule, LottieComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  facts = [
    {
      title: '4',
      description: 'Years of Experience',
    },
    {
      title: '25+',
      description: 'Projects Completed',
    },
    {
      title: '21',
      description: 'Technologies worked with',
    },
    {
      title: '1,661',
      description: 'Contributions made on GitHub',
    },
  ]

  // options: AnimationOptions = {
  //   path: 'assets/rocket.json',
  //   loop: true,
  //   autoplay: true,
  // };
  options: AnimationOptions[] = [
    {
      path: 'assets/rocket.json',
      loop: true,
      autoplay: true,
    },
    {
      path: 'assets/developer.json',
      loop: true,
      autoplay: true,
    },
  ];


  animationCreated(animationItem: AnimationItem): void {
    // console.log(animationItem);
    console.log('Rendering animation with path:', animationItem.assetsPath);

  }

}
