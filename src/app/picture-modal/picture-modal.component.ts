import { DummyPersonsService } from './../services/dummy-persons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-modal',
  templateUrl: './picture-modal.component.html',
  styleUrls: ['./picture-modal.component.css']
})
export class PictureModalComponent implements OnInit {

  private img: string
  constructor(private dPS: DummyPersonsService) { }

  ngOnInit(): void {
  }

}
