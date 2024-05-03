document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("bulletTextarea");

    textarea.addEventListener("keydown", function(event) {
        // Check if Enter key is pressed
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default newline behavior

            // Get the current text in the textarea
            var text = textarea.value.trim();

            // Append a new bullet point
            if (text !== "") {
                textarea.value = text + "\n• ";
            } else {
                textarea.value = "• "; // Start with bullet point if textarea is empty
            }
        }
    });
});