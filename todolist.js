const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task when pressing Enter key
inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Function to add task
let addTask = () => {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();  // Save data after adding task
    }
};

// Toggle task completion or remove task
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();  // Save data after toggling task completion
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();  // Save data after removing task
    }
}, false);

// Function to save data in localStorage
const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};

// Function to show data from localStorage when page loads
const showData = () => {
    listContainer.innerHTML = localStorage.getItem("data") || "";
};

// Call showData to load tasks when page is refreshed
showData();
