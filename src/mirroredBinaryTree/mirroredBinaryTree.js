function isMirrored(node) {
	let isMirrored = true
	let children = node.children
	while(children.length && isMirrored) {
		let index = Math.floor(children.length / 2)
		let leftChildren = children.slice(0, index))
		let rightChildren = children.slice(index, children.length)

		if (leftChildren.length !== rightChildren.length) {
			isMirrored = false
		} else if ()
	}	

	function isSymmetric() {

	}
}