// Form 
const form = document.wish_form;


form.addEventListener("submit", function(e){
    e.preventDefault()

    const name = form.name.value;
    const item = form.item.value;
    const cost = form.cost.value;
    
    var wishList = document.createElement("ul");
    // Create items for list
    var newName = document.createElement("li");
    var newItem = document.createElement("li");
    var newcost = document.createElement("li");
    var deleteButton = document.createElement("button");
    document.getElementById("wish_list").append(wishList);
    document.getElementById("title").innerHTML = "Wish List Items:";

    deleteButton.className = "deleteButton";
    newName.className = "newName";
    newItem.className = "newItem";
    newcost.className = "newcost";

    //Style List Items
    newName.textContent = `Name: ${name}`;
    newItem.style.marginTop = "10px" 
     
    newName.style.listStyleType = "none";       

    newItem.textContent = `Wish List Item: ${item}`;
    newItem.style.marginTop = "3px";
    newItem.style.listStyleType = "none";

    newcost.textContent = `Cost: $ ${cost}`;
    newcost.style.marginTop = "3px";
    newcost.style.listStyleType = "none";

    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "lightgray";
    deleteButton.style.marginTop = "3px";
    deleteButton.style.marginBottom = "10px";

    // Append items to list
    var wishList = document.querySelector('ul');
    wishList.appendChild(newName);
    wishList.appendChild(newItem);
    wishList.appendChild(newcost);
    wishList.appendChild(deleteButton);
    
    // Clear form
    form.reset(); 
    
    // Delete 
    deleteButton.addEventListener('click', function(e) {
        e.preventDefault();
        wishList.removeChild(newName);
            wishList.removeChild(newItem);
            wishList.removeChild(newcost);
            wishList.removeChild(deleteButton);
    });

})  