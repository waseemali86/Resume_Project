// scripts.ts
document.addEventListener('DOMContentLoaded', () => {
    console.log("Resume loaded successfully!");
});

document.addEventListener('DOMContentLoaded', () => {
    const moreInfoButton = document.getElementById('more-info-button');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');

    // Show the modal when the button is clicked
    moreInfoButton?.addEventListener('click', () => {
        modal!.style.display = 'block';
    });

    // Hide the modal when the close button is clicked
    closeModal?.addEventListener('click', () => {
        modal!.style.display = 'none';
    });

    // Hide the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal!.style.display = 'none';
        }
    });
});
