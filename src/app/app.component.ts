import {Component, EventEmitter, Output, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {SidenavComponent} from "../sidenav/sidenav.component";
import {SideNavToggle} from "../interface/side-nav-toggle";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NgForOf, NgIf, NgClass, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Nav';
  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data:SideNavToggle){
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }


}
