import {Component, OnInit, Inject, Input} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { lookupListToken } from '../providers';
import {AppItemService, CsvInJson, fftData} from '../app-item.service';
// tslint:disable-next-line:import-spacing

@Component({
  selector: 'app-app-preprocess',
  templateUrl: './app-preprocess.component.html',
  styleUrls: ['./app-preprocess.component.css']
})
export class AppPreprocessComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  askFftParams = false;
  timeWindow = false;
  convertedObj: CsvInJson;
  fftParams;
  otherParams;
  preProcess;
  fftretobj: Object;
  finaljson: {}={}

  // @ts-ignore
  constructor(private appItemService: AppItemService,
    private formBuilder: FormBuilder,
    @Inject(lookupListToken) public lookupLists,
    private router: Router) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.appItemService.currentData.subscribe( message => {this.convertedObj = message; } );
    this.appItemService.finalcurrentData.subscribe( message => {this.finaljson = message; } );


    // @ts-ignore
    this.form = this.formBuilder.group({
      Preprocess_1: this.formBuilder.control(''),
      Preprocess_2: this.formBuilder.control(''),
      Preprocess_3: this.formBuilder.control(''),
      Preprocess_4: this.formBuilder.control(''),
    });
    this.form2 = this.formBuilder.group({
      minfreq: this.formBuilder.control(''),
      maxfreq: this.formBuilder.control(''),
      srate: this.formBuilder.control('')
    });
    this.form3 = this.formBuilder.group({
      timewin: this.formBuilder.control('')});
  }
  // tslint:disable-next-line:typedef
  onSubmit(preprocess) {
    //this.mediaItemService.add(preprocess);
    console.log(preprocess);
    this.preProcess=preprocess;
    console.log(this.convertedObj)
    this.groupkeys(this.convertedObj);
    console.log(this.finaljson);
    // tslint:disable-next-line:max-line-length
    if (preprocess.Preprocess_1 === 'FFT' || preprocess.Preprocess_2 === 'FFT' || preprocess.Preprocess_3 === 'FFT' || preprocess.Preprocess_4 === 'FFT' ) {
      this.askFftParams = true;
    }
    // tslint:disable-next-line:max-line-length
    if (preprocess.Preprocess_1 === 'variance' || preprocess.Preprocess_2 === 'variance' || preprocess.Preprocess_3 === 'variance' || preprocess.Preprocess_4 === 'variance' ) {
      this.timeWindow = true;
    }
    // tslint:disable-next-line:max-line-length
    if (preprocess.Preprocess_1 === 'average' || preprocess.Preprocess_2 === 'average' || preprocess.Preprocess_3 === 'average' || preprocess.Preprocess_4 === 'average' ) {
      this.timeWindow = true;
    }
    // tslint:disable-next-line:max-line-length
    if (preprocess.Preprocess_1 === 'kurtosis' || preprocess.Preprocess_2 === 'kurtosis' || preprocess.Preprocess_3 === 'kurtosis' || preprocess.Preprocess_4 === 'kurtosis' ) {
      this.timeWindow = true;
    }
  }

  groupkeys(input){
    let i,j;
    let output: {}={};

    for (i=0; i<input.properties.length; i++) {
      output[input.properties[i]] = {};
      for (j = 0; j < input.result.length; j++) {
        output[input.properties[i]][j] =  parseFloat(input.result[j][input.properties[i]]);
      }
    }
    this.finaljson= output;

 }

  // tslint:disable-next-line:typedef
  onSubmit2(fftparams) {
    this.fftParams=fftparams;
    console.log(fftparams);
  }

  // tslint:disable-next-line:typedef
  onSubmit3(timewin) {
    this.otherParams=timewin;
    console.log(timewin);
  }


  // tslint:disable-next-line:typedef
  performPreprocess() {
    // @ts-ignore
    console.log("here")
    console.log(this.finaljson)
    this.finaljson['fftParams']=this.fftParams;
    this.finaljson['otherParams']= this.otherParams;
    this.finaljson['preprocess']=this.preProcess;
    this.finaljson= JSON.stringify(this.finaljson)
    console.log(this.finaljson)
    this.appItemService.getFFT(this.finaljson).subscribe(message =>{this.fftretobj=message;
    console.log(this.fftretobj)
    })


      // subscribe(message => {this.finaljson = message[0].data; })

  }

  checkresp() {
    console.log(this.fftretobj)
  }
}
