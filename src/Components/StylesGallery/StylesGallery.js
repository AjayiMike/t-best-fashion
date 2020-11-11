import React, {useState, useEffect} from 'react';
import GalleryImage from "./GalleryImage";
import ImageModal from "./ImageModal"


const initialImages = [
  {
    src: "./images/t-best-fashion-style-000.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-001.jpg",
    alt: "t-best-fashion-design-jean",
    category: "jean",
  },
  {
    src: "./images/t-best-fashion-style-002.jpg",
    alt: "t-best-fashion-design-jean",
    category: "jean",
  },
  {
    src: "./images/t-best-fashion-style-003.jpg",
    alt: "t-best-fashion-design-jean",
    category: "jean",
  },
  {
    src: "./images/t-best-fashion-style-004.jpg",
    alt: "t-best-fashion-design-jean",
    category: "jean",
  },
  {
    src: "./images/t-best-fashion-style-005.jpg",
    alt: "t-best-fashion-design-mannequine",
    category: "",
  },
  {
    src: "./images/t-best-fashion-style-006.png",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-008.jpg",
    alt: "t-best-fashion-design-shirt",
    category: "shirt",
  },
  {
    src: "./images/t-best-fashion-style-009.jpg",
    alt: "t-best-fashion-design-shirt",
    category: "shirt",
  },
  {
    src: "./images/t-best-fashion-style-010.jpg",
    alt: "t-best-fashion-design-shirt",
    category: "shirt",
  },
  {
    src: "./images/t-best-fashion-style-011.jpg",
    alt: "t-best-fashion-design-shirt",
    category: "shirt",
  },
  {
    src: "./images/t-best-fashion-style-012.jpg",
    alt: "t-best-fashion-design-shirt",
    category: "shirt",
  },
  {
    src: "./images/t-best-fashion-style-013.jpg",
    alt: "t-best-fashion-design-shirt",
    category: "shirt",
  },
  {
    src: "./images/t-best-fashion-style-014.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-015.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-016.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-017.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-018.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-019.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-020.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-021.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-022.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-023.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-024.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-026.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-027.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-028.jpg",
    alt: "t-best-fashion-design-suit",
    category: "suit",
  },
  {
    src: "./images/t-best-fashion-style-029.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-030.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-031.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-032.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-033.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-034.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-035.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-036.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-037.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-038.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-039.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-040.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-041.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-042.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-043.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-044.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-045.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-046.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-047.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-048.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-049.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-050.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-051.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-052.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-053.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-054.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-055.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-056.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-057.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },{
    src: "./images/t-best-fashion-style-058.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-059.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-060.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-061.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-062.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-063.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-064.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-065.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },

  {
    src: "./images/t-best-fashion-style-066.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-067.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },

  {
    src: "./images/t-best-fashion-style-068.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-069.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-070.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-071.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-072.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-073.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-074.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-075.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-076.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-077.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-078.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-079.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-080.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-081.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  },
  {
    src: "./images/t-best-fashion-style-082.jpg",
    alt: "t-best-fashion-design-native",
    category: "native",
  }

]

// shuffle images array using Fisher-Yate algorithm
const shuffleArray = (arr) => {
  let temp, randomNum;
  for(let i = arr.length-1; i > 0; i--) {
    randomNum = Math.floor(Math.random() * (i+1));
    temp = arr[i];
    arr[i] = arr[randomNum];
    arr[randomNum] = temp;
  }
  return arr;
}

const StyleGallery = () => {
const [images, setImages] = useState(shuffleArray(initialImages));
const [filterBy, setFilterBy] = useState("all");
const [previewImageSrc, setPreviewImageSrc] = useState("");

// setting the page title on page first load 
useEffect(() => {
  document.title = "T-Best Fashion | Styles";
}, []);


// filter gallery
const handleFilter = (e) => {
  setFilterBy(e.target.value);
}

// hook to run when the "filterBy" state changes
useEffect(() => {
    const filteredImages =  filterBy !== "all" ? shuffleArray(initialImages.filter(img => img.category === filterBy)) : shuffleArray(initialImages);
  setImages(filteredImages);
},[filterBy])

// handle previewing image
const previewImage = (e) => {
  setPreviewImageSrc(e.target.src)
  document.querySelector(".image-modal-container").classList.add("show-image-modal")
}

// close preview image
const closePreviewImage = (e) => {
  document.querySelector(".image-modal-container").classList.remove("show-image-modal")
}



    return (
        <div id = 'styles-gallery-page' className = "main-container">
          <div className = "header">
            <h1>STYLES COLLECTIONS</h1>
            <div className = "filter">
              <label htmlFor="filter-styles"><i className = "fa fa-filter"></i>&nbsp;&nbsp;</label>
              <select id="filter-styles" onChange = {(e) => handleFilter(e)}>
                <option value="all">All</option>
                <option value="suit">Suit</option>
                <option value="native">Native</option>
                <option value="jean">Jean</option>
              </select>
            </div>
          </div>
          
          <div className = "gallery-container">
            {images.map(image => {
             return <GalleryImage src = {image.src} alt = {image.alt} key = {image.src} handlePreview = {previewImage} />
            })}
          </div>
          <ImageModal src = {previewImageSrc}  handleClosePreview = {closePreviewImage} />  
        </div>
      );
}
 
export default StyleGallery;