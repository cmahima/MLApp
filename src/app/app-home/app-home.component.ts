import {Component, EventEmitter, Inject, Input, OnInit, Output, VERSION} from '@angular/core';
import {AppItemService, CsvInJson} from '../app-item.service';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';


@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {
  constructor(private appItemService: AppItemService) { }
  name = 'Angular ' + VERSION.major;
  //convertedObj: CsvInJson;
  convertedObj: CsvInJson;
  convertedObjstr: string;
  finaljson: {};

  convert(objArray) {
    console.log(objArray);
    this.convertedObjstr = JSON.stringify(objArray, null, 2);
    this.convertedObj = objArray;
    this.appItemService.changeData(this.convertedObj);
    console.log(this.convertedObj);
    console.log(typeof this.convertedObjstr)
  }
  onError(err) {
    this.convertedObj = err;
    console.log(err);
  }


  ngOnInit(): void {
    this.appItemService.currentData.subscribe( message => {this.convertedObj = message; } );
    this.appItemService.finalcurrentData.subscribe( message => {this.finaljson = message; } );

  }
}

