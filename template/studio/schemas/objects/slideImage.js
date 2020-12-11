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
import MdSlideshow from 'react-icons/md'


export default {
  name: 'slideImage',
  title: 'Slide',
  type: 'object',
  icon: MdSlideshow,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required()
    },
    {
      name: 'link',
      type: 'url',
      validation: Rule => Rule.uri({'allowRelative': true, scheme: ['https', 'http']}),
      description: 'Optional link for the slide image.',
      title: 'Link'
    },
    {
      name: 'slideImage',
      title: 'Slide Image',
      type: 'image',
      description: 'The image needs to be a minimum of 900px wide.',
      validation: Rule => Rule.required(),
      options: {
        hotspot: false
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