import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  clicked = false;
  donations = 31;
  onClickButton() {
    this.donations++;
    this.clicked = true;
  }
  onClickImage(){
    window.open("https://supporting.afsp.org/?_gl=1*7t7xa1*_ga*MTgzNDI2ODE1OS4xNzE1MTA0NjUw*_ga_44VZZG2H84*MTcxNTEwNDY1MC4xLjAuMTcxNTEwNDY1MC42MC4wLjA.", "_blank")
  }
}
