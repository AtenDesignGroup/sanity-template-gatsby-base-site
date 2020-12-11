import React from 'react'

import {MdSlideshow as Icon} from 'react-icons/md'


export default {
  type: 'object',
  name: 'slideshow',
  title: 'Slideshow',
  icon: Icon,
  options: {
    hotspot: false
  },
  fields: [
    {
      type: 'array',
      name: 'slides',
      title: 'Slides',
      description: 'The image needs to be a minimum of 800px wide.',
      of: [{type: 'slideImage'}],
      options: {
        layout: 'grid'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'link',
      media: 'Icon'
    }
  }
}
