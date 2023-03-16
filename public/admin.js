
async function listBooks(){
let response = await fetch("http://localhost:3001/listBooks",{
    method: "GET",
});
let listBook = await response.json();

let list = document.createElement("ul");

listBook.forEach(function(book){
  let input = document.createElement('input')
  input.type = 'number'
  input.value = ""
  input.placeholder = "Quantity."
  
  let sumbitButton = document.createElement('button');
  sumbitButton.innerHTML = 'Save';
  sumbitButton.addEventListener("click", async function(){
    let res = await fetch("http://localhost:3001/updateBook",{
        method:"PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            'id': book.id,
            'quantity':input.value
        })
    })
let updateBooks = await res.json()
console.log(updateBooks)
  })

  let listItem = document.createElement("li");
  listItem.innerHTML = `${book.title}`;
  list.appendChild(listItem);
  listItem.appendChild(input)
  listItem.appendChild(sumbitButton)
})

let container = document.querySelector('#root')
container.appendChild(list)
}
listBooks()
// Your Code Here
