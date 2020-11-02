import React from 'react'
import MenuItem from '../menu/MenuItem.js'
import './directory.styles.scss'

class Directory extends React.Component {
 // constructor() {
 //  super();

 state = {
  sections: [
   {
    title: 'Watches',
    imageUrl: "https://ae01.alicdn.com/kf/H77cdd4f1b4d44afcb3b07b975066f3bdy/2020-Minimalist-Men-s-Fashion-Ultra-Thin-Watches-Simple-Men-Business-Stainless-Steel-Mesh-Belt-Quartz.jpg",
    id: 1,
   },
   {
    title: "Phones",
    imageUrl: " https://photos5.appleinsider.com/gallery/37523-70507-218-hero-xl.jpg",
    id: 2,
   },

   {
    title: 'Camera',
    imageUrl: "https://cdn1.bigcommerce.com/n-ou1isn/8w72fk/products/3044/images/6798/1535007761000_IMG_1052118__19987.1535069944.1280.1280.jpg?c=2 ",
    id: 3,
   },
  ]
 }

 // }


 render() {
  return (
   <>
    <div className='directory-menu'>
     {this.state.sections.map(({ title, imageUrl, id }) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} />
     ))}
    </div>
   </>

  )
 }
}
export default Directory