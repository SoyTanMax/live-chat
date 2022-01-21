import { collection, query, onSnapshot, orderBy} from "firebase/firestore";
import { ref, watchEffect } from "vue";
import { db } from "../services/firebase";

const getCollection = (col) => {
    const error = ref(null)
    const documents = ref(null)

    const collectionRef = query(collection(db, col), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(collectionRef, (snapshot) => {
        let results = []
        snapshot.docs.forEach( doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })

        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = "Could not fetch data"
    })

    watchEffect((onInvalidate)=> {
        //unsubscribe from previous collection when the watcher is stopped (component unmounted)
        onInvalidate(() => unsub())
    })

    return { error, documents }
}

export default getCollection