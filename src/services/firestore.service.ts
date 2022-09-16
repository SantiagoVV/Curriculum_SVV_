import { Injectable } from '@angular/core';
import { Firestore, collection, updateDoc, onSnapshot, where, doc, getDoc, getDocs, query, QuerySnapshot } from '@angular/fire/firestore';


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

*/

@Injectable({
    providedIn: 'root'
}) // Para que llame a esta clase desde cualquier componente
 // Para que llame a esta clase desde cualquier componente
 // Para que llame a esta clase desde cualquier componente


export class FirestoreService {


    constructor(private firestore: Firestore){
        
    }

    getEducation(): Promise<boolean> {
        return new Promise((resolve) => {

            getDocs(collection(this.firestore, 'education')).then((QuerySnapshot: any) => {
                QuerySnapshot.forEach((doc: any) => {
                    console.log("Documento: ", doc);
                });
            });
            resolve(true);
        });

        
    }

}