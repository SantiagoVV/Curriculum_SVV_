import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FirestoreService } from "src/services/firestore.service";

import { Education } from "src/models/education";
import { Experience } from "src/models/experience";
import { language } from "src/models/language";
import { speaking } from "src/models/speaking";
import { Firestore } from "firebase/firestore";


@Component({
    selector: 'llamada_firestore',
    templateUrl: './llamada_firestore.html',
    styleUrls: []
  })

  export class Llamada_firestore implements OnInit{

    constructor(private firestoreService: FirestoreService) { }

    ngOnInit(): void { }

    saveTutorial(): void {
        this.firestoreService.getEducation();
    }
  }