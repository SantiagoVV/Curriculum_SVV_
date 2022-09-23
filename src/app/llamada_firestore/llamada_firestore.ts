import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FirestoreService } from "src/services/firestore.service";

import { Education } from "src/models/education";
import { Experience } from "src/models/experience";
import { language } from "src/models/language";
import { speaking } from "src/models/speaking";
import { Firestore } from "firebase/firestore";
import { FormControl, FormGroup } from "@angular/forms";


@Component({
    selector: 'llamada_firestore',
    templateUrl: './llamada_firestore.html',
    styleUrls: []
  })
// LLamadaFirestore
  export class Llamada_firestore implements OnInit{

    formulario: FormGroup;
    constructor(private firestoreService: FirestoreService) {
      this.formulario = new FormGroup({
        name: new FormControl(),
        place: new FormControl(),
        date: new FormControl()
      })
     }

    ngOnInit(): void { }

    educationData(){

      this.firestoreService.getEducation().then((educationData: any)=> {
      console.log("[LlamadaFirestore]: ", educationData);
      
      });
      
    }
  }