import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/client"

const useUser = () => {
	const userCollection = collection(db, "users")
	const getUsers = async () => {
		try {
			const querySnapshot = await getDocs(userCollection)
			const users = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}))
			return users
		} catch (error) {
			console.log(error)
			return []
		}
	}
	return {
		getUsers,
	}
}
export default useUser
