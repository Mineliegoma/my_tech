const INITIAL_STATE = {

 sections: [
  {
   title: 'Watches',
   imageUrl: "https://ae01.alicdn.com/kf/H77cdd4f1b4d44afcb3b07b975066f3bdy/2020-Minimalist-Men-s-Fashion-Ultra-Thin-Watches-Simple-Men-Business-Stainless-Steel-Mesh-Belt-Quartz.jpg",
   id: 1,
   linkUrl: 'shop/watches'
  },
  {
   title: "Phones",
   imageUrl: " https://cdn.mos.cms.futurecdn.net/PDgYH6UffDmB6cGDj6fAEd.jpg",
   id: 2,
   linkUrl: 'shop/phones'
  },

  {
   title: 'Camera',
   imageUrl: " https://cdn.mos.cms.futurecdn.net/7UKru4akuGz2QcUPp6smqX.jpg",
   id: 3,
   linkUrl: 'shop/cameras'
  }
 ]
};
const directoryReducer = (state = INITIAL_STATE, action) => {
 switch (action.type) {
  default:
   return state;
 }
};
export default directoryReducer