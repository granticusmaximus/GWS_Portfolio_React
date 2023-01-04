import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
import { fb_Config } from "./fbconfig";

const app = initializeApp(fb_Config);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

function getAllNoteItems() {
    return new Promise((resolve, reject) => {
        db.collection("notes").get().then((allNoteItems) => {
            resolve(allNoteItems);
        }).catch((e) => {
            reject(e);
        })
    })
}

function getAllNoteCategories() {
    return new Promise((resolve, reject) => {
        db.collection("NoteCategories").get().then((allNoteCategories) => {
            resolve(allNoteCategories);
        }).catch((e) => {
            reject(e);
        })
    })
}

function AddNewNoteItem(title, category, content, dateAdded) {
    return new Promise((resolve, reject) => {
        const data = {
            "title": title,
            "category": category,
            "content": content,
            "dateAdded": dateAdded
        }
        addDoc(collection(db, "notes"), {
            nid: data.uid,
            title,
            category,
            content,
            dateAdded
        });
        db.collection("notes").add(data).then((docRef) => {
            resolve(docRef);
        }).catch((e) => {
            reject(e);
        })

    })
}

function UpateNoteItem(noteItemID, title, category, content) {

    return new Promise((resolve, reject) => {

        const data = {
            "title": title,
            "category": category,
            "content": content
        }

        db.collection("notes").doc(noteItemID).update(data).then(() => {
            resolve()
        }).catch((e) => {
            reject(e)
        })
    })
}

function DeleteNoteItem(noteItemID) {
    return new Promise((resolve, reject) => {
        db.collection("notes").doc(noteItemID).delete().then(() => {
            resolve()
        }).catch((e) => {
            reject(e)
        })
    })
}

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    getAllNoteItems,
    DeleteNoteItem,
    UpateNoteItem,
    AddNewNoteItem,
    getAllNoteCategories,
};