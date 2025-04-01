document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button-row .btn");
    const imageDisplay = document.getElementById("architecture-image");
    const instructionsBox = document.getElementById("instructions-box");

    // Button click event listeners
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove "active" class from all buttons
            buttons.forEach((btn) => btn.classList.remove("active"));

            // Add "active" class to the clicked button
            button.classList.add("active");

            // Update content based on the clicked button
            if (button.id === "old-architecture-btn") {
                updateContent(
                    "images/old-architecture.drawio.svg",
                    "Old Architecture",
                    [
                        "In this Architecture, the user transaction system and modeling system were separate.",
                        "We could trigger the long running GMA loads even during working hours. Because the memory issues would only affect the Hana system"
                        
                    ]
                );
            } else if (button.id === "current-architecture-btn") {
                updateContent(
                    "images/current-architecture.drawio.svg",
                    "Current Architecture",
                    [
                        "Single system for 'Daily user transactons' and 'backend modeling for reports'",
                        "Cannot re-run the jobs during working hours, as the memory issue might freeze the complete system",
                        "Reports are not real time. Still dependent on nightly jobs"
                    ]
                );
            } else if (button.id === "new-architecture-btn") {
                updateContent(
                    "images/new-architecture.drawio.svg",
                    "New Architecture",
                    [
                        "Real time reports : No dependency on nightly jobs",
                        "Can get rid of the BODS system",
                        "Backend modeling done using CDS views, which is also recommended in future SAP solutions (SAP Publc Cloud)"
                    ]
                );
            }
        });
    });

    // Function to update the image and instructions
    function updateContent(imageSrc, title, description) {
        // Update the image
        imageDisplay.src = imageSrc;
        imageDisplay.style.display = "block"; // Show the image when a button is clicked
        imageDisplay.style.position = "static"; // Reset position to normal
        imageDisplay.style.width = "95%"; // Restore original width
        imageDisplay.style.height = "auto"; // Restore original height
        imageDisplay.style.margin = "0 auto"; // Center the image horizontally
        imageDisplay.style.padding = "10px"; // Restore padding
        imageDisplay.style.objectFit = "initial"; // Reset scaling behavior
        imageDisplay.style.zIndex = "auto"; // Reset z-index
        imageDisplay.style.backgroundColor = "transparent"; // Reset background

    // Generate the ordered list dynamically
    const orderedList = description.map(item => `<li>${item}</li>`).join("");

        // Update the instructions box
        instructionsBox.innerHTML = `
            <h3>${title}</h3>
           <ol>
            ${orderedList}
        </ol>
        `;
        instructionsBox.style.display = "block"; // Ensure the instructions box is visible
    }
});