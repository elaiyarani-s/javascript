function calc() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }
    const sum = num1 + num2;

    document.getElementById("sum").value = sum;
}

function showText() {
    document.getElementById("more").style.display = "none";
    document.getElementById("text").style.display = "inline";
}

function extractText() {
    const listItems = document.querySelectorAll("#items li");
    const resultTextarea = document.getElementById("result");
    resultTextarea.value = "";
    listItems.forEach(item => {
        resultTextarea.value += item.textContent + "\n"; 
    });
}

function addItem() {
    const newText = document.getElementById("newText").value;

    if (newText.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    const textNode = document.createTextNode(newText);
    const deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.textContent = " [Delete]";
    deleteLink.onclick = function() {
        deleteItem(li); 
    };

    li.appendChild(textNode);
    li.appendChild(deleteLink);

    document.getElementById("items").appendChild(li);
    document.getElementById("newText").value = "";
}

function deleteItem(item) {
    item.remove();
}

