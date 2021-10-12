let db: any = firebase.firestore()

interface _question{
	name: string,
	email: string,
	question: string,
	created: any
}
const time = () => firebase.firestore.FieldValue.serverTimestamp()

const question = {
	add(data: _question){
		data.created = time()
		return db.ref('question').add(data)
	}
}

export {
	question
}