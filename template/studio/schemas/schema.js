// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import richDate from 'part:@sanity/form-builder/input/rich-date/schema'

// document schemas
import author from './documents/author'
import category from './documents/category'
import page from './documents/page'
import landingPage from './documents/landingPage'
import home from './documents/home'
import siteSettings from './documents/siteSettings'
import navigation from './documents/navigation'
import post from './documents/post'
import tag from './documents/tag'

// Object types
import siteLink from './objects/siteLink'
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'
import seo from './objects/seo'
import form from './objects/form'
import youtube from './objects/youtube'
import slideshow from './objects/slideShow'
import pdfFile from './objects/pdfFile'
import slideImage from './objects/slideImage'
import imageGallery from './objects/imageGallery'
import iframe from './objects/iframe'
import link from './objects/link'
import singleLink from './objects/singleLink'
import logo from './objects/logo'
import vimeo from './objects/vimeo'
import columnContent from './objects/contentComponents/columnContent'
import sectionHeading from './objects/contentComponents/sectionHeading'
import cta from './objects/contentComponents/cta'
import textBlock from './objects/contentComponents/textBlock'
import callOut from './objects/contentComponents/callOut'
import imageComponent from './objects/contentComponents/imageComponent'
import imageBackground from './objects/contentComponents/imageBackground'
import contentViews from './objects/contentComponents/contentViews'
import flexibleContentOptions from './objects/contentComponents/flexibleContentOptions'
import flexibleContentLayout from './objects/contentComponents/flexibleContentLayout'
import flexibleContentLayoutOptions from './objects/contentComponents/flexibleContentLayoutOptions'
import flexibleContent from './objects/contentComponents/flexibleContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteSettings,
    post,
    category,
    page,
    landingPage,
    home,
    tag,
    author,
    bodyPortableText,
    mainImage,
    richDate,
    siteLink,
    navigation,
    seo,
    form,
    youtube,
    slideshow,
    pdfFile,
    slideImage,
    imageGallery,
    iframe,
    link,
    singleLink,
    logo,
    columnContent,
    sectionHeading,
    cta,
    textBlock,
    callOut,
    imageComponent,
    vimeo,
    imageBackground,
    contentViews,
    flexibleContentOptions,
    flexibleContent,
    flexibleContentLayout,
    flexibleContentLayoutOptions
  ])
})
