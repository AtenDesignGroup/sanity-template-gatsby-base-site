import React from 'react'

const Page = ({title, posts}) => {
  return (
    <>
      <article>
        <h1>{title}</h1>
        <pre>{JSON.stringify(posts, null, 4)}</pre>
      </article>
    </>
  )
}
export default Page
