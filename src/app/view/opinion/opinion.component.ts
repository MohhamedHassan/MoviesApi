import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {
  done=false
contact = new FormGroup({
  name: new FormControl("",[Validators.required,Validators.pattern(/^[A-Z]/)]),
  email: new FormControl("",[Validators.required,Validators.email]),
  opinion: new FormControl("",[Validators.required,Validators.minLength(15)])
})
  constructor(private _Title:Title) {
    _Title.setTitle("your Opinion")
   }

  ngOnInit() {
  }
sub() {
 this.done=!this.done
 setTimeout(() => {this.done=!this.done},2000)
}
}
