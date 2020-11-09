import { createSelector } from 'reselect'
const selectShop = state => state.shop
const COLLECTION_ID_MAP = {
 watches: 74,
 camera: 75,
 phones: 76


}

export const selectCollections = createSelector(
 [selectShop],
 shop => shop.collections
)
export const selectCollection = collectionUrlParam => {
 createSelector(
  [selectCollections],
  collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
 )
}