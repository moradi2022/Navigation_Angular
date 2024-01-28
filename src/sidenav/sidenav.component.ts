import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {navbarData} from "./navData";
import {SideNavToggle} from "../interface/side-nav-toggle";
import {RouterLink} from "@angular/router";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity : 0}),
        animate('200ms', style({opacity : 1}))
      ]),
      transition(':leave',
        [
          style({opacity : 1}),
          animate('200ms',style({opacity : 0}))
        ]
      )
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1s',keyframes([
          style({transform:"rotate(0deg)",offset: "0"}),
          style({transform:"rotate(2turn)",offset: "1"}),
        ]))
      ])
    ])
  ]
})
export class SidenavComponent implements  OnInit{

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed : this.collapsed,screenWidth : this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      screenWidth : this.screenWidth,
      collapsed : this.collapsed
    });
  }

  closeSidenav(){
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed : this.collapsed,
      screenWidth : this.screenWidth
    });
  }

}
