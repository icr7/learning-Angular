import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Biodata } from '../biodata';

@Component({
  selector: 'app-bio-data',
  templateUrl: './bio-data.component.html',
  styleUrls: ['./bio-data.component.css']
})
export class BioDataComponent {
skills=["select","java","angular","python","cloud"];
model=new Biodata("","singh",9458595189,"ishwarchaiser@gmail.com","java");

loginUser(signInForm:NgForm){
  console.log(signInForm.value.emailAddressField)
  console.log(signInForm.value.passwordField)
  console.log(signInForm.value.termsField)
  console.log(signInForm.value.genderField)
  console.log(signInForm.value.commentField)
  console.log(signInForm.value.FavLangField)
}

}
