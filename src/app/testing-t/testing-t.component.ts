import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import {Subscription } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-testing-t',
  templateUrl: './testing-t.component.html',
  styleUrls: ['./testing-t.component.css']
})
export class TestingTComponent implements OnInit {
  user = {
    name: 'Arthur',
    age: 42
  };

  private subscription: Subscription;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

   

    ngOnInit() {
    // subscribe to router event
    
  }

 
}
