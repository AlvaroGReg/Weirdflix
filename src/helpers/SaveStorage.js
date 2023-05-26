
export const SaveStorage = (key, element) => {

	//Get Storaged elements
	let elements = JSON.parse(localStorage.getItem(key))

	//Check if storaged is array

	if(Array.isArray(elements)){
		elements.push(element)
	}else{
		elements = [element]
	}
	//Save
	localStorage.setItem(key, JSON.stringify(elements))
	//Return the item just in case
	return element
}