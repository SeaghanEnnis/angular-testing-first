import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, HomeComponent, SidebarComponent]
})
export class AppComponent implements OnInit{

  title = 'orange';

  intervalSub: any | undefined;

  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log("Online!");
    }, 10000);
  }
;
}
