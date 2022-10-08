import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Llamada_firestore } from './llamada_firestore/llamada_firestore';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { experience } from './state/experience/reducer';
import { language } from './state/language/reducer';
import { education } from './state/education/reducer';
import { speaking } from './state/speaking/reducer';


@NgModule({
    declarations: [
        AppComponent,
        Llamada_firestore
    ],
    imports: [
        BrowserModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        StoreModule.forRoot({
            experience,
            language,
            education,
            speaking


        },
            {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false
                }
            }),
        StoreDevtoolsModule.instrument({
            //  logOnly: environment.production
        }),


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
