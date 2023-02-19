// Connect to the DB
const connectBtn = document.getElementById("connect");

connectBtn.addEventListener("click", (e) => {
    // Prevent page from reloading
    if (connectBtn.classList.contains("disabled")) {
        alert("Already connected to the database! Don't click me.");
    } else {
        e.preventDefault();

        // Show an alert dialog
        alert("Connecting to the Database Server now...");

        const status = document.querySelector('.status');
        // Change text and color
        status.innerHTML = "Now connected successfully :)";
        status.style.color = "green";

        // Disable connect button
        connectBtn.classList.add("disabled");
    }
});