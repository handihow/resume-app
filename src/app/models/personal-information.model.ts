import { DocumentReference } from "@angular/fire/firestore";

export interface PersonalInformation {
    firstName: string;
    lastName: string;
    address: string;
    postalCode: string;
    city: string;
    phoneNumber: string;
    email: string;
    picture: DocumentReference[];
}