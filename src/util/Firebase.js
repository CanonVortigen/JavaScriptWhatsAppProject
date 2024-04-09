import firebase from "firebase";
import 'firebase/firestore';

export class Firebase {

    constructor() {

        this._config = {

            apiKey: "AIzaSyBvQNvtJp4HNwlxsQNs05e092h0_YmO84I",
            authDomain: "whatsapp-clone-53f49.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-53f49-default-rtdb.firebaseio.com",
            projectId: "whatsapp-clone-53f49",
            storageBucket: "whatsapp-clone-53f49.appspot.com",
            messagingSenderId: "66955063454",
            appId: "1:66955063454:web:31b3f30a566174ac1e8b8f"

        }

        this.init();       

    }

    init() {

        if (!window._initializedFirebase) {

            firebase.initializeApp(this._config);
            firebase.firestore().settings({
                timestampsInSnapshots: true, merge: true
            });

            window._initializedFirebase = true;

        }        

    }

    static db() {

        return firebase.firestore();

    }

    static hd() {

        return firebase.storage();

    }

    initAuth() {

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(result => {

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user, 
                    token
                });

            }).catch(err => {

                f(err);

            });

        });

    }

}