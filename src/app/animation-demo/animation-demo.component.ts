import { animate,state, style,transition,trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations: [
    trigger('openClose', [
      state('open',style({
        height:'300px',
        backgroundColor:"red"
      })),
      state('close',style({
        height:'100px',
        backgroundColor:"green"
      })),
      transition('open =>close',[
        animate('1s')
      ]),
     transition('close =>open',[
     animate('2s')
      ])
    ])

  ]
})
export class AnimationDemoComponent implements OnInit {
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }

}
