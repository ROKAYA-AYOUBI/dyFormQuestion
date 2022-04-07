import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {QuestionService} from "../question.service";

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

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
    this.OngetJson()
  }


  OngetJson(){
    this.serve.getJson()
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

/*

  ngOnInit() {
    this.registrationForm = this.fb.group({});

    // Calling API to get dynamic control details
    // (recupere les donne dans file json)
    this.httpClient.get("../assets/DynamicFormControl.json")
      .subscribe(data => {
        this.dynamicFormArray = data;
        // console.log(this.dynamicFormArray);
        // we call method here so once response binded to dynamicFromArray
        this.createFormControl();
      });
  }

  createFormControl() {
    // in this method we create formcontrol based on dynamiFormArray
    this.dynamicFormArray.forEach((element: any) => {
// validation de chaque ellement
      if (element.Required === true) {
        this.registrationForm.addControl(element.ID, new FormControl('', Validators.required));
      } else{
        // here we are not settin
        this.registrationForm.addControl(element.ID, new FormControl(''));
      }
    });
    console.log(this.registrationForm);

  }
*/

  Onsubmit() {
    console.log("Enregistrer");
    window.alert("Enregistrer");
  }
}
