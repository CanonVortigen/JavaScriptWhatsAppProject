import { Firebase } from '../util/Firebase.js';
import { ClassEvent } from '../util/ClassEvent.js';

export class User extends ClassEvent {
    
    static getRef() {

        return Firebase.db().collection('users');

    }

    static findByEmail(email) {

        return User.getRef().doc(email);

    }

}