import React from "react";

const GalleryImage = ({src, alt, handlePreview}) => {
    return (
        <div className = "gallery-item">
            <div className = "image">
                <img src = {require(`${src}`)} alt = {alt} onClick = {(e) => handlePreview(e)} />
            </div>
        </div>
    );
}

export default GalleryImage;