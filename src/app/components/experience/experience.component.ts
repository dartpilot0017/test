import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      "title": "Software Engineer",
      "company": "Google",
      "locaation": "Mountain View, CA",
      "startDate": "2018-01-01",
      "endDate": "2022-12-31",
      "imagePath": "/assets/oryx.png",
      "description": "Developed and maintained web applications using Angular, TypeScript, and Node.js."
    },
    {
      "title": "Software Engineer",
      "company": "Google",
      "locaation": "Mountain View, CA",
      "startDate": "2018-01-01",
      "endDate": "2022-12-31",
      "imagePath": "/assets/bifrost.svg",
      "description": "Developed and maintained web applications using Angular, TypeScript, and Node.js."
    },
    {
      "title": "Software Engineer",
      "company": "Google",
      "locaation": "Mountain View, CA",
      "startDate": "2018-01-01",
      "endDate": "2022-12-31",
      "imagePath": "/assets/leadway.png",
      "description": "Developed and maintained web applications using Angular, TypeScript, and Node.js."
    },
  ];
}
