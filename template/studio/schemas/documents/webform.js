// import {MdEmail} from 'react-icons/md'

import React from 'react'
const Icon = () => <span style={{fontSize: "1.5rem"}}>{"✉️"}</span>


export default {
  name: 'webform',
  title: 'Webforms',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  icon: Icon,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Form Settings',
      name: 'formSettings',
      type: 'form',
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      title: 'Form Submissions',
      name: 'formSubmissions',
      type: 'array',
      of: [{
        type: 'submission'
      }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare (selection) {
      const {title, subtitle} = selection
      return {
        title: `${title}`,
        subtitle: `/${subtitle}`,
      }
    }
  }
}