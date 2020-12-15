import { Component, OnInit, Input  } from '@angular/core';

declare var $: any;
declare const NgbModule: any;
declare const jqueryScrollbarMin: any;
declare const bootstrapNotifyMin: any;
declare const popperMin: any;
declare const bootstrapMin: any;
declare const sweetalertMin: any;
declare const atlantisMin: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css','../../assets/css/bootstrap.min.css','../../assets/css/atlantis.min.css']
})
export class MainComponent implements OnInit {

  item="Hello word!";
  
  constructor() { }

  ngOnInit(): void {
  //  item="Hello word!";
  }

  goMenu(url: string):void{
this.item=url;

  }
}
