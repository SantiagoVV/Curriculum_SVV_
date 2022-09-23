import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, updateDoc, onSnapshot, where, doc, getDoc, getDocs, query, QuerySnapshot, addDoc } from '@angular/fire/firestore';
import { Education } from 'src/models/education';
import { Observable } from 'rxjs';

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

    education_list: Education[] | undefined;

    constructor(private firestore: Firestore){
        
    }

    getObjectEducation(doc: any): Education {
        const education: Education = {
            name: doc.data().name,
            place : doc.data().place,
            date : doc.data().date,
        }
        return education;
    }

    getEducation(): Promise<any> {
        this.education_list = [];
        return new Promise((resolve) => {
          
            getDocs(collection(this.firestore, 'education')).then((QuerySnapshot: any) => {  
                QuerySnapshot.forEach((doc: any) => {
                    console.log("a",doc.data());
                    this.education_list.push(this.getObjectEducation(doc));    
                });
                resolve(this.education_list);
            });
            
        });

        
    }
/*
    getEducation(): Observable<Education[]>{
        const educationRef = collection(this.firestore, 'educations');
        console.log(collectionData(educationRef, { idField: 'id' }) as Observable<Education[]>);
        return collectionData(educationRef, { idField: 'id' }) as Observable<Education[]>;
    }
*/

    addEducation(education: Education) {
        const educationRef = collection(this.firestore, 'educations');
        return addDoc(educationRef, education);
      }
}