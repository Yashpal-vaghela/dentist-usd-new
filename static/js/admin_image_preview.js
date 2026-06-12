/**
 * Admin Live Image Preview
 * Jab bhi image file select ho — turant preview dikhao
 */
(function () {
  "use strict";

  function setupImagePreview() {
    // Image field input dhundo
    const imageInput = document.querySelector('input[name="image"]');
    if (!imageInput) return;

    // Preview container banao
    const previewContainer = document.createElement("div");
    previewContainer.id = "live-image-preview-container";
    previewContainer.style.cssText = `
      margin-top: 12px;
      display: none;
    `;

    const previewLabel = document.createElement("p");
    previewLabel.textContent = "Selected Image Preview:";
    previewLabel.style.cssText = `
      font-weight: bold;
      font-size: 13px;
      color: #666;
      margin-bottom: 8px;
    `;

    const previewImg = document.createElement("img");
    previewImg.id = "live-preview-img";
    previewImg.style.cssText = `
      max-width: 150px;
      max-height: 150px;
      border-radius: 10px;
      object-fit: cover;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
      border: 3px solid #59595aff;
      display: block;
    `;

    previewContainer.appendChild(previewLabel);
    previewContainer.appendChild(previewImg);

    // Input ke baad insert karo
    imageInput.parentNode.insertBefore(previewContainer, imageInput.nextSibling);

    // File change listener
    imageInput.addEventListener("change", function () {
      const file = this.files[0];
      if (!file) {
        previewContainer.style.display = "none";
        return;
      }

      // Sirf image files accept karo
      if (!file.type.startsWith("image/")) {
        previewContainer.style.display = "none";
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        previewImg.src = e.target.result;
        previewContainer.style.display = "block";

        // Smooth fade-in animation
        previewImg.style.opacity = "0";
        previewImg.style.transition = "opacity 0.3s ease";
        setTimeout(function () {
          previewImg.style.opacity = "1";
        }, 50);
      };
      reader.readAsDataURL(file);
    });
  }

  // DOM ready hone par chalao
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupImagePreview);
  } else {
    setupImagePreview();
  }
})();
