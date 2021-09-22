import React from 'react';
import PropTypes from 'prop-types';
import {Popup} from './Popup';

export const Gallery = ({photoList,openPhoto,selectedImage,closePhoto,deletePhoto}) => {

    console.log(photoList);
    return(
        <div id="gallery">
            {photoList.slice(0,50).map(photo=>{
                return(
                    <div
                    key={photo.id}
                    className="image-holder"
                    onClick={()=>{openPhoto(photo)}}
                    >
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </div>
                )
            })}
            {
                selectedImage !== undefined && <Popup selektiranaSlika={selectedImage} zatvoriSlika={closePhoto} deletePhoto={deletePhoto} />
            }
        </div>
    )
}

Gallery.propTypes = {
    photoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    openPhoto: PropTypes.func,
    selectedImage:PropTypes.string,
    closePhoto:PropTypes.func,
    deletePhoto:PropTypes.func
}