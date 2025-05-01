/**
 * The filters for the search page
 */
export enum searchFilters {
  availability = "Availability",
  price = "Price",
}

/**
 * The options for the availability filter
 */
export enum availabilityOptions {
  inStock = "In stock",
  outOfStock = "Out of stock",
}

/**
 * The number of the ids for the availability filter
 */
export enum availabilityOptionNumber {
  instock = 1,
  outOfStock = 2,
}

/**
 * The options for the sort by filter
 */
export enum sortByOptions {
  featured = "Featured",
  bestSelling = "Best selling",
  alphabeticallyAtoZ = "Alphabetically, A-Z",
  alphabeticallyZtoA = "Alphabetically, Z-A",
  priceLowToHigh = "Price, low to high",
  priceHighToLow = "Price, high to low",
  dateOldToNew = "Date, old to new",
  dateNewToOld = "Date, new to old",
}
