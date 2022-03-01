import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(    private meta: Meta,private title: Title) { }

  ngOnInit(): void {
    this.meta.addTags([
      {name: 'description', content: 'nizar unique satwalcry'},
      {name: 'author', content: 'buttercms'},
      {name: 'keywords', content: 'Angular, ButterCMS'},
      {property: 'og:url', content: 'https://sdev.satt.atayen.us'},
      {property: 'og:site_name', content: 'Satt Welcome page'},
      {property: 'og:title', content: 'Satt Welcome page'},
      {property: 'og:description', content: 'Satt Welcome page'},
      {property: 'og:image', content: 'https://satt-token.com/assets/img/index/adpools.png'},
      {property: 'og:image:secure_url', content: 'https://satt-token.com/assets/img/index/adpools.png'},
    ]);
    this.title.setTitle( 'Home SATT Page' );

  }

}
