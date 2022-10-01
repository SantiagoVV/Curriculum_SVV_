import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, updateDoc, onSnapshot, where, doc, getDoc, getDocs, query, QuerySnapshot, addDoc } from '@angular/fire/firestore';
import { Education } from 'src/models/education';
import { Experience } from 'src/models/experience';
import { Language, Languages_list } from 'src/models/language';
import { Speaking, Idioms } from 'src/models/speaking';
import { stringLength } from '@firebase/util'
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { State } from 'src/app/state/definition';
import { setExperienceList } from 'src/app/state/experience/actions';
import { setEducationList } from 'src/app/state/education/actions';
import { setLanguageList } from 'src/app/state/language/actions';
import { setSpeakingList } from 'src/app/state/speaking/actions';
/*
public getUsers(): Promise<boolean> {
    return new Promise((resolve) => {
        getDocs(collection(this.firestore, 'users')).then((QuerySnapshot: any) => {
            QuerySnapshot.forEach((doc: any) => {
                this.store.dispatch(addUser(this.getObjectUser(doc)));
            });
            resolve(true);
        });
    });
}


getObjectUser(doc: any): User {
        const user: User = {
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            apps: doc.data().apps,
            role: doc.data().role ? doc.data().role : 'user',
            isDarkMode: doc.data().isDarkMode ? doc.data().isDarkMode : false,
            language: doc.data().language ? doc.data().language : 'es'
        }
        return user;
    }



*/

@Injectable({
    providedIn: 'root'
}) // Para que llame a esta clase desde cualquier componente



export class FirestoreService {

    education_list: Education[] = [];
    experience_list: Experience[] = [];
    language_list: Languages_list[] = [];
    speaking_list: Idioms[] = [];
    modelos_lista: string[] = [
        'education', 'experience',
        'languages', 'languages_speaking'
    ];

    constructor(private firestore: Firestore, 
        private store: Store<State>) {

    }

    ngOnInit() {
        this.getEducation();
    }

    getObjectEducation(doc: any): Education {
        const education: Education = {
            name: doc.data().name,
            place: doc.data().place,
            date: doc.data().date,
        }
        return education;
    }

    getObjectExperience(doc: any): Experience {
        const experience: Experience = {
            business: doc.data().business,
            city: doc.data().city,
            dateFin: doc.data().dateFin,
            dateInit: doc.data().dateInit,
            description: doc.data().description,
            icon: doc.data().icon,
            title: doc.data().title,
        }
        return experience;
    }

    getObjectLanguage(doc: any): Languages_list {

        const language_list_: Languages_list = {
            list: doc.data().list_languages,
        }
        return language_list_;
    }

    getObjectSpeaking(doc: any): Idioms {

        const idiomas_: Idioms = {
            name_list: doc.data().list,
        }
        return idiomas_;
    }

    getEducation(): Promise<any> {
        return new Promise((resolve) => {

            this.modelos_lista.forEach((name, index) => {
                getDocs(collection(this.firestore, 'education')).then((QuerySnapshot: any) => {
                    QuerySnapshot.forEach((doc: any) => {
                        console.log("a", doc.data());
                        this.education_list.push(this.getObjectEducation(doc));
                    });
                    console.log("b", this.education_list[0]);
                    this.store.dispatch(setEducationList(this.education_list));
                    resolve(this.education_list);
                });
            });

        });
    }

    getExperience(): Promise<any> {
        return new Promise((resolve) => {

            getDocs(collection(this.firestore, 'experience')).then((QuerySnapshot: any) => {
                QuerySnapshot.forEach((doc: any) => {
                    console.log("a", doc.data());
                    this.experience_list.push(this.getObjectExperience(doc));
                });

                console.log("b", this.experience_list[0].business);
                this.store.dispatch(setExperienceList(this.experience_list));
                resolve(this.experience_list);

            });
        });
    }

    getSpeaking(): Promise<any> {
        return new Promise((resolve) => {

            getDocs(collection(this.firestore, 'languages_speaking')).then((QuerySnapshot: any) => {
                QuerySnapshot.forEach((doc: any) => {
                    console.log("a", doc.data());
                    this.speaking_list.push(this.getObjectSpeaking(doc));
                });

                console.log("b", this.speaking_list[0]);
                this.store.dispatch(setSpeakingList(this.speaking_list));
                resolve(this.speaking_list);

            });
        });
    }

    getLanguage(): Promise<any> {
        return new Promise((resolve) => {

            getDocs(collection(this.firestore, 'languages')).then((QuerySnapshot: any) => {
                QuerySnapshot.forEach((doc: any) => {
                    console.log("a", doc.data());
                    this.language_list.push(this.getObjectLanguage(doc));
                });

                console.log("b", this.language_list[0]);
                this.store.dispatch(setLanguageList(this.language_list));
                resolve(this.language_list);

            });
        });
    }



    getListEducation() {
        return this.education_list;
    }

    getListLanguage() {
        return this.language_list;
    }


}