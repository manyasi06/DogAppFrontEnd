import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Dogs } from '../models/Person';
import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { DogsService } from '../services/dogs.service';



@Component({
  selector: 'app-doglist',
  templateUrl: './doglist.component.html',
  styleUrls: ['./doglist.component.css'],

})
export class DoglistComponent implements OnInit {

  public listofDogs: Dogs[];
  public closeResult = ' ';
  contentProfileForm: FormGroup;
  @ViewChild('editProf', {static: false})
    defCtPfForm: TemplateRef<any>;
  @Input('id') id: number;
  @Input('breed') breed: string;
  @Input('nameofdog') nameofdog: string;
  @Input('ownerfirstname') ownerfirstname: string;
  @Input('ownerlastname') ownerlastname: string;
  public updatDog: Dogs;
  public testVal: string;



  constructor(private fb: FormBuilder, private dogServ: DogsService, private modalService: NgbModal) { }

  ngOnInit() {
      this.dogServ.getAllDogs().subscribe(
        (data: Dogs[]) => {
          console.log(data);
          this.listofDogs = data;
        },
        (error: Error) => {
          console.log('An error occurred');
          console.log(error.message);
        }
      );

      this.contentProfileForm = this.fb.group({
        breed: [''],
        nameofdog: [''],
        personId: [-1]
      });

      this.updatDog = {
        id: -1,
        breed: '',
        nameofdog: ''
      };


  }


  deleteDog(id: number): void {
    console.log('This current id: ' + id);
    const item = this.listofDogs.find( x => x.id === id);
    console.log('This is the index: ' + item);
    this.dogServ.deleteDog(id).subscribe(
      (response: any) => {
      console.log(response);
     }, (error: Error) => {
       console.log('Error during deletion: ' + error.message);
     }
    );
    this.listofDogs.splice(this.listofDogs.indexOf(item), 1);
  }

  open(contentProfileForm) {

    this.modalService.open(contentProfileForm, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openForEdit(item: Dogs) {
    console.log(item);
    this.id = item.id;
    this.breed = item.breed;
    this.nameofdog = item.nameofdog;





    this.modalService.open(this.defCtPfForm,
      {ariaLabelledBy: 'modal-basic-title'}
      ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.updatDog);
      this.updatDog.id = this.id;
      this.updatDog.breed = this.breed;
      this.updatDog.nameofdog = this.nameofdog;
      console.log('My payload: ' + JSON.stringify(this.updatDog));
      this.dogServ.editDog(this.updatDog).subscribe((response: any) => {
          console.log(response);
      }, (error: any) => {console.log(error); });

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
