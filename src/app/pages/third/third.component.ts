import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  form_1!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form_1 = this.fb.group({
      email: 'sample@email.com',
      password: 'password',
    })
  }

}
