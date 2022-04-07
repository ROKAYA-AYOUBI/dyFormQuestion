import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

 public getJson(){
   return this.http.get("../assets/DynamicFormControl.json");

  }
  public gestspring(){
	return this.http.get("http://localhost:8080/question");
    
  }
}
