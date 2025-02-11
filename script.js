const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileUpload");
const uploadText = document.getElementById("uploadText");

dropZone.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", handleFile);

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#007bff";
});

dropZone.addEventListener("dragleave", () => {
    dropZone.style.borderColor = "#ccc";
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#ccc";

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        fileInput.files = files;
    }
});