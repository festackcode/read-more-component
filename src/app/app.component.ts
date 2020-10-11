import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Demo: Read more component';
  data: string = "I like this read-more component because it's very helpful. This tutorial so good. I will share it with others.";
  isReadMore: boolean = false;

  ngOnInit() { 
    this.checkDataLength(this.data);
  }
  
  checkDataLength(data:string) {
    console.log('string-length', data.length);
    
    this.isReadMore = (data.length > 60);
  }
}
