import React from "react";

const ImageModal = ({src, handleClosePreview}) => {
    return (
        <div className = "image-modal-container">
            <div className = "image-modal">
                <div className = "close-button" onClick = {handleClosePreview}>✕</div>
                <img src = {src} alt = "" />
            </div>
        </div>
    );
}

export default ImageModal;