import React from 'react'
// import PortableText from '../serializers/portableText'
import ContentComponents from '../serializers/contentComponents/index'
import FlexibleContentComponents from '../serializers/contentComponents/FlexibleContent'

// import styles from './page.module.css'

const Page = ({content, flexibleContent}) => {
  return (
    <>
      {flexibleContent && <FlexibleContentComponents blocks={flexibleContent} />}
      {content && <ContentComponents blocks={content} />}
      <section className='section level'>
        <div className='container'>
          <div className='columns is-vcentered is-centered'>
            <div className='column is-half'>

              <form name='contact' method='POST' data-netlify='true'>
                <div className='field'>
                  <label className='label'>Your Name:
                    <input className='input' type='text' name='name' />
                  </label>
                </div>
                <div className='field'>
                  <label className='label'>Your Email:
                    <input className='input' type='email' name='email' />
                  </label>
                </div>

                <div className='field'>
                  <label className='label'>Message:
                    <textarea className='textarea' name='message' />
                  </label>
                </div>
                <div className='field'>
                  <button className='button is-primary is-medium' type='submit'>Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Page
