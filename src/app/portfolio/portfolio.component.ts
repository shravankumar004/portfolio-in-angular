import { Component, OnInit } from '@angular/core';
import portfolio_data from '../portfolio_data.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {;
  public portfolioList:{project_name:string,url:string,type:string}[] = portfolio_data;
  constructor() { }

  ngOnInit(): void {
  }

}
