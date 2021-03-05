import React from 'react'
import clientConfig from '../../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from '../serializers/serializers'
import BlogView from '../serializers/viewComponents/BlogView'
// import styles from './page.module.css'

const Page = ({content, slug}) => {
  return (
    <div>
      <div className='portableText'>
        <BasePortableText blocks={content} serializers={serializers} {...clientConfig.sanity} />
      </div>
      {slug === 'blog' &&
      <div>
        <BlogView />
      </div>
      }
    </div>
  )
}
export default Page
