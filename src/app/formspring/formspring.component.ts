import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {QuestionService} from "../question.service";

@Component({
  selector: 'app-formspring',
  templateUrl: './formspring.component.html',
  styleUrls: ['./formspring.component.css']
})
export class FormspringComponent implements OnInit {

  registrationForm!: FormGroup;
  dynamicFormArray: any;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private serve:QuestionService
  ) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({});
    this.OngetSpring()
  }


  OngetSpring(){
    this.serve.gestspring()
      .subscribe(data => {
        this.dynamicFormArray = data;
        this.createFormControl();
        //console.log(this.dynamicFormArray);
      });
  }


  createFormControl() {
    this.dynamicFormArray.forEach((element: any) => {
      if (element.Required === true) {
        this.registrationForm.addControl(element.ID, new FormControl('', Validators.required));
      } else{
        this.registrationForm.addControl(element.ID, new FormControl(''));
      }
    });
    console.log(this.registrationForm);

  }
  
    Onsubmit() {
  
    window.alert("Enregistrer");
  }
  
  
  
  
  
  /*
  registrationForm!: FormGroup;
  dynamicFormArray: any;

  constructor( private http: HttpClient,
               private fb: FormBuilder,
               private serve:QuestionService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({});
    this.http.get("http://localhost:8080/JSON/data")
      .subscribe(data => {
        this.dynamicFormArray = data;
     console.log(this.dynamicFormArray);
        this.createFormControl();
      });
  }
  createFormControl() {
    this.dynamicFormArray.forEach((element: any) => {
      if (element.Required === true) {
        this.registrationForm.addControl(element.ID, new FormControl('', Validators.required));
      } else{
        this.registrationForm.addControl(element.ID, new FormControl(''));
      }
    });
    console.log(this.registrationForm);

  }
*/

}
