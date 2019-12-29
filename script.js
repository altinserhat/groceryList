let button  = document.querySelector("#add-item");
let input   = document.querySelector("#item-input");
let ul      = document.querySelector("ul");
let li      = document.querySelectorAll("li");


// Get value
function getValue() {
	if (input.value.length > 0) {
		let li = document.createElement("li");
		li.innerHTML = `${input.value} <span class="remove-item">X</span>`;
		ul.append(li);
		input.value = "";
	}
}

// Enter button
function enterButton(e) {
	if (e.key === 'Enter') {
		getValue()
	}
}

// Done remove <li>
function remove(e) {
	let tgt = e.target;
	if (tgt.innerText === "X") {
		tgt.parentNode.parentNode.removeChild(tgt.parentNode);
	}
}

// Linethrough <li>
function lineThrough(e) {
	let tgt = e.target;
	if (tgt.nodeName === "LI") {
		tgt.classList.toggle("done");
	}
}

// Events
button.addEventListener("click", getValue);          // Get value
ul.addEventListener("click", remove);                // Remove
ul.addEventListener("click", lineThrough);           // Line thorugh
document.addEventListener("keypress", enterButton);  // Enter button
