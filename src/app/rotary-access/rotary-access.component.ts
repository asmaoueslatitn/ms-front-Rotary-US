import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rotary-access',
  templateUrl: './rotary-access.component.html',
  styleUrls: ['./rotary-access.component.css']
})
export class RotaryAccessComponent implements OnInit {

  constructor(private router : Router) {  }

  ngOnInit() {
  }
  out()
  {
    this.router.navigate(['/page3'])

  }
}
