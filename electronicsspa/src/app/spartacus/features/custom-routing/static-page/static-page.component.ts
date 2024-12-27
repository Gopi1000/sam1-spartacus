import { Component, OnInit } from '@angular/core';
import { CustomnavigationserviceService } from './customnavigationservice.service';


@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrl: './static-page.component.scss'
})
export class StaticPageComponent implements OnInit {
  componentsData: any[] = [];

  // scrollToTop(): void {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }

  constructor(private dataService: CustomnavigationserviceService) { }

  ngOnInit(): void {
    this.dataService.getComponents().subscribe(
      (data: any) => {
        this.componentsData = data.component;
        console.log(data.component);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}
