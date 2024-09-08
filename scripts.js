// scripts.ts
document.addEventListener('DOMContentLoaded', function () {
    console.log("Resume loaded successfully!");
});
document.addEventListener('DOMContentLoaded', function () {
    var moreInfoButton = document.getElementById('more-info-button');
    var modal = document.getElementById('modal');
    var closeModal = document.getElementById('close-modal');
    // Show the modal when the button is clicked
    moreInfoButton === null || moreInfoButton === void 0 ? void 0 : moreInfoButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });
    // Hide the modal when the close button is clicked
    closeModal === null || closeModal === void 0 ? void 0 : closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
    // Hide the modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
