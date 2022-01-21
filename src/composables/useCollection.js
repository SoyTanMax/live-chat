import { collection, addDoc} from "firebase/firestore";
import { ref } from "vue";
import { db } from "../services/firebase";

const useCollection = (col) => {
    const error = ref(null)

    const newDoc = async (doc) => {
        error.value = null
        try {
            await addDoc(collection(db, col), doc)
        } catch (err) {
            console.log(err.message)
            error.value = 'Could not send the message'
        }
    }

    return { error, newDoc}
}

export default useCollection