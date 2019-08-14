import { Component } from '@angular/core';
import {ExcelService} from '../excell.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface auditsummary {
  serial: number;
  description: string;
  status: boolean;
  evidence: string;
   comments: string;
    picturecomments: string;
     level: string;
}


export class Address {
  constructor(
    public firstname?: string,
    public lastname?: string,
    public address?: string,
    public city?: string,
    public state?: string,
    public postalcode?: string,
    public evidence ? :string
  ) {}
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alstomProject';
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  AuditSummaryObj : auditsummary[];
  audit1 = new Address();

  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  },
  {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  },
  {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];
  constructor(private excelService:ExcelService,private _formBuilder: FormBuilder){
    this.firstFormGroup = this._formBuilder.group({
      evidence: [''],
      comment: [''],
      status: [false]
    });
    this.secondFormGroup = this._formBuilder.group({
      evidence: [''],
      comment: [''],
      status: [false]
    });
    this.thirdFormGroup = this._formBuilder.group({
      evidence: [''],
      comment: [''],
      status: [false]
    });

    this.AuditSummaryObj =[
      {serial: 1, description: 'DMI', status: true, evidence: this.firstFormGroup.value["evidence"],comments:this.firstFormGroup.value["comment"],picturecomments : "",level:"L1"},
      {serial: 2, description: 'ATS', status: true, evidence: this.secondFormGroup.value["evidence"],comments:this.secondFormGroup.value["comment"],picturecomments : "",level:"L2"},
      {serial: 3, description: 'ATC', status: true, evidence: this.thirdFormGroup.value["evidence"],comments:this.thirdFormGroup.value["comment"],picturecomments : "",level:"L3"}
    ];

  //  this.audit1= {serial: 0, description: 'DMI', status: true, evidence: '',comments:"OK FINE",picturecomments : "",level:"L1"};
    
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.AuditSummaryObj, 'alstom');
  }

  resetData()
  {
   
    this.AuditSummaryObj =[
      {serial: 1, description: 'DMI', status: true, evidence: this.firstFormGroup.value["evidence"],comments:this.firstFormGroup.value["comment"],picturecomments : "",level:"L1"},
      {serial: 2, description: 'ATS', status: true, evidence: this.secondFormGroup.value["evidence"],comments:this.secondFormGroup.value["comment"],picturecomments : "",level:"L2"},
      {serial: 3, description: 'ATC', status: true, evidence: this.thirdFormGroup.value["evidence"],comments:this.thirdFormGroup.value["comment"],picturecomments : "",level:"L3"}
    ];
  }
}
