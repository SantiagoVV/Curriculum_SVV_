import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FirestoreService } from "src/services/firestore.service";

import { Education } from "src/models/education";
import { Experience } from "src/models/experience";
import { Language, Languages_list } from "src/models/language";
import { Speaking } from "src/models/speaking";
import { Firestore } from "firebase/firestore";
import { FormControl, FormGroup } from "@angular/forms";


@Component({
    selector: 'llamada_firestore',
    templateUrl: './llamada_firestore.html',
    styleUrls: []
  })
// LLamadaFirestore
  export class Llamada_firestore implements OnInit{

    listaEducation: Education[] = [];
    listaLanguage: Languages_list[] = [];
    lista : any;

    constructor(private firestoreService: FirestoreService) { }

    ngOnInit(): void { }

    educationData(){

      this.firestoreService.getEducation().then((educationData: any)=> {
        console.log("[LlamadaFirestore]: ", educationData);
        this.printListEducation();
        this.printListLanguage();
      });

      
      
    }

    printListEducation(){
      this.lista = this.firestoreService.getExperience();
      this.lista = this.firestoreService.getEducation();
      this.lista = this.firestoreService.getLanguage();
      this.lista = this.firestoreService.getSpeaking();
      console.log("print: ", this.listaEducation);
    }
    
    printListLanguage(){
      this.lista = this.firestoreService.getExperience();
      this.lista = this.firestoreService.getEducation();
      this.lista = this.firestoreService.getLanguage();
      this.lista = this.firestoreService.getSpeaking();
      console.log("print: ", this.listaEducation[0].name);
    }
  }