import { Component,OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CustomValidators} from './custom-validators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-reactive-form';
  EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
  //mygroup: FormGroup
  user: FormGroup

  //DI - Constructor Injection
  constructor(private fb:FormBuilder){

  }

 // ngOnInit(){
  /*   this.mygroup = new FormGroup({
      name: new FormControl('MaanavaN'),
      location: new FormControl('Chennai')
    }); */

    /* this.user = new FormGroup({
        name: new FormControl('MaanavaN',[Validators.required,Validators.minLength(5)]),
        account:new FormGroup({
          email:new FormControl('',Validators.required),
          confirm:new FormControl('',Validators.required)
        })
    }); */
 // }
 ngOnInit(){
   this.user = this.fb.group({
    name: ["",[Validators.required,Validators.minLength(5)]],
    password:["",[Validators.required,CustomValidators.passwordStrength]],
    confirmPassword:["",Validators.required],
    account:this.fb.group({
      email:["",[Validators.required,Validators.pattern(this.EMAIL_REGEX)]],
      confirm:["",Validators.required]
    })
   },
    {validator:CustomValidators.passwordMatcher});

 }
  onSubmit(formdata){
    console.log(formdata)
    console.log(this.user.value,this.user.valid)
  }
}
