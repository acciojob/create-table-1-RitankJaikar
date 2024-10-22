let i=1;
function insert_Row() {
	//Write your code here
	let sampleTable= document.querySelector("#sampleTable");
	let tr = document.createElement("tr");
	
	let td1 = document.createElement("td");
	td1.innerText = `New Cell1${i}`;
	i++;
	let td2 = document.createElement("td");
	td2.innerText = `New Cell1${i}`;

	tr.append(td1);
	tr.append(td2);
	sampleTable.prepend(tr);

	i++;
}
