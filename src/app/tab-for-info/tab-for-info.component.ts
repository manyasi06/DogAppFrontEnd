import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tab-for-info',
  templateUrl: './tab-for-info.component.html',
  styleUrls: ['./tab-for-info.component.css']
})
export class TabForInfoComponent implements OnInit {
  active = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
