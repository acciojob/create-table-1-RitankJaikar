
function insert_Row() {
	//Write your code here
	let sampleTableTBody= document.querySelector("#sampleTable tbody");
	let tr = document.createElement("tr");
	
	let td1 = document.createElement("td");
	td1.innerText = "New Cell1";
	let td2 = document.createElement("td");
	td2.innerText = "New Cell2";

	tr.append(td1);
	tr.append(td2);
	sampleTableTBody.prepend(tr);
}
