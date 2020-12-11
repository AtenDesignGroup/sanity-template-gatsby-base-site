import React from 'react'
import {MdImage as Icon} from 'react-icons/md'

const GalleryPreview = ({value}) => {
  const ImageWrapper = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
    gridRowGap: '20px'
  }
  return (
    <div style={ImageWrapper}>
      {value.images && value.images && value.images.map(image => (
        <div key={image._key}>
         <Icon />
        </div>
      ))}
    </div>
  )
}

export default {
  type: 'object',
  name: 'imageGallery',
  title: 'Image Gallery',
  Icon: Icon,
  fields: [
    {
      type: 'array',
      name: 'images',
      title: 'Images',
      of: [{type: 'mainImage'}],
      options: {
        layout: 'grid'
      }
    }
  ],
  preview: {
    select: {
      images: 'images'
    },
    component: GalleryPreview
  }
}
