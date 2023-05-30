import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'orange';
}
