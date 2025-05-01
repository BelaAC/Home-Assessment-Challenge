# Test info

- Name: Buy Product Scenarios >> Should successfully buy featured product @ui @product
- Location: /Users/isabelaalborghetti/Documents/Home-Assessment-Challenge/tests/frontend/specs/buyProduct.spec.ts:16:7

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)

Locator: locator(':root')
Expected string: "Thank you for your purchase! - Monkey Bakery - Checkout"
Received string: "Checkout - Monkey Bakery"
Call log:
  - expect.toHaveTitle with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html lang="en" dir="ltr">…</html>
      - unexpected value "Checkout - Monkey Bakery"

    at OrderConfirmationPage.validateOrderConfirmationPage (/Users/isabelaalborghetti/Documents/Home-Assessment-Challenge/tests/frontend/src/pages/OrderConfirmationPage.ts:126:29)
    at /Users/isabelaalborghetti/Documents/Home-Assessment-Challenge/tests/frontend/specs/buyProduct.spec.ts:25:33
```

# Page snapshot

```yaml
- link "Skip to content":
  - /url: "#checkout-main"
- banner:
  - link "Monkey Bakery":
    - /url: https://monkey-bakery.myshopify.com/
- main:
  - heading "Monkey Bakery Checkout" [level=1]
  - region "Contact":
    - heading "Contact" [level=2]
    - text: Email
    - textbox "Email": Makenzie_Champlin@gmail.com
    - checkbox "Email me with news and offers"
    - text: Email me with news and offers
  - heading "Delivery" [level=2]
  - region "Shipping address":
    - text: Country/Region
    - combobox "Country/Region":
      - option "United States" [selected]
      - option "Brazil"
      - option "---"
      - option "Afghanistan"
      - option "Åland Islands"
      - option "Albania"
      - option "Algeria"
      - option "Andorra"
      - option "Angola"
      - option "Anguilla"
      - option "Antigua & Barbuda"
      - option "Argentina"
      - option "Armenia"
      - option "Aruba"
      - option "Ascension Island"
      - option "Australia"
      - option "Austria"
      - option "Azerbaijan"
      - option "Bahamas"
      - option "Bahrain"
      - option "Bangladesh"
      - option "Barbados"
      - option "Belarus"
      - option "Belgium"
      - option "Belize"
      - option "Benin"
      - option "Bermuda"
      - option "Bhutan"
      - option "Bolivia"
      - option "Bosnia & Herzegovina"
      - option "Botswana"
      - option "Brazil"
      - option "British Indian Ocean Territory"
      - option "British Virgin Islands"
      - option "Brunei"
      - option "Bulgaria"
      - option "Burkina Faso"
      - option "Burundi"
      - option "Cambodia"
      - option "Cameroon"
      - option "Canada"
      - option "Cape Verde"
      - option "Caribbean Netherlands"
      - option "Cayman Islands"
      - option "Central African Republic"
      - option "Chad"
      - option "Chile"
      - option "China"
      - option "Christmas Island"
      - option "Cocos (Keeling) Islands"
      - option "Colombia"
      - option "Comoros"
      - option "Congo - Brazzaville"
      - option "Congo - Kinshasa"
      - option "Cook Islands"
      - option "Costa Rica"
      - option "Croatia"
      - option "Curaçao"
      - option "Cyprus"
      - option "Czechia"
      - option "Côte d’Ivoire"
      - option "Denmark"
      - option "Djibouti"
      - option "Dominica"
      - option "Dominican Republic"
      - option "Ecuador"
      - option "Egypt"
      - option "El Salvador"
      - option "Equatorial Guinea"
      - option "Eritrea"
      - option "Estonia"
      - option "Eswatini"
      - option "Ethiopia"
      - option "Falkland Islands"
      - option "Faroe Islands"
      - option "Fiji"
      - option "Finland"
      - option "France"
      - option "French Guiana"
      - option "French Polynesia"
      - option "French Southern Territories"
      - option "Gabon"
      - option "Gambia"
      - option "Georgia"
      - option "Germany"
      - option "Ghana"
      - option "Gibraltar"
      - option "Greece"
      - option "Greenland"
      - option "Grenada"
      - option "Guadeloupe"
      - option "Guatemala"
      - option "Guernsey"
      - option "Guinea"
      - option "Guinea-Bissau"
      - option "Guyana"
      - option "Haiti"
      - option "Honduras"
      - option "Hong Kong SAR"
      - option "Hungary"
      - option "Iceland"
      - option "India"
      - option "Indonesia"
      - option "Iraq"
      - option "Ireland"
      - option "Isle of Man"
      - option "Israel"
      - option "Italy"
      - option "Jamaica"
      - option "Japan"
      - option "Jersey"
      - option "Jordan"
      - option "Kazakhstan"
      - option "Kenya"
      - option "Kiribati"
      - option "Kosovo"
      - option "Kuwait"
      - option "Kyrgyzstan"
      - option "Laos"
      - option "Latvia"
      - option "Lebanon"
      - option "Lesotho"
      - option "Liberia"
      - option "Libya"
      - option "Liechtenstein"
      - option "Lithuania"
      - option "Luxembourg"
      - option "Macao SAR"
      - option "Madagascar"
      - option "Malawi"
      - option "Malaysia"
      - option "Maldives"
      - option "Mali"
      - option "Malta"
      - option "Martinique"
      - option "Mauritania"
      - option "Mauritius"
      - option "Mayotte"
      - option "Mexico"
      - option "Moldova"
      - option "Monaco"
      - option "Mongolia"
      - option "Montenegro"
      - option "Montserrat"
      - option "Morocco"
      - option "Mozambique"
      - option "Myanmar (Burma)"
      - option "Namibia"
      - option "Nauru"
      - option "Nepal"
      - option "Netherlands"
      - option "New Caledonia"
      - option "New Zealand"
      - option "Nicaragua"
      - option "Niger"
      - option "Nigeria"
      - option "Niue"
      - option "Norfolk Island"
      - option "North Macedonia"
      - option "Norway"
      - option "Oman"
      - option "Pakistan"
      - option "Palestinian Territories"
      - option "Panama"
      - option "Papua New Guinea"
      - option "Paraguay"
      - option "Peru"
      - option "Philippines"
      - option "Pitcairn Islands"
      - option "Poland"
      - option "Portugal"
      - option "Qatar"
      - option "Réunion"
      - option "Romania"
      - option "Russia"
      - option "Rwanda"
      - option "Samoa"
      - option "San Marino"
      - option "São Tomé & Príncipe"
      - option "Saudi Arabia"
      - option "Senegal"
      - option "Serbia"
      - option "Seychelles"
      - option "Sierra Leone"
      - option "Singapore"
      - option "Sint Maarten"
      - option "Slovakia"
      - option "Slovenia"
      - option "Solomon Islands"
      - option "Somalia"
      - option "South Africa"
      - option "South Georgia & South Sandwich Islands"
      - option "South Korea"
      - option "South Sudan"
      - option "Spain"
      - option "Sri Lanka"
      - option "St. Barthélemy"
      - option "St. Helena"
      - option "St. Kitts & Nevis"
      - option "St. Lucia"
      - option "St. Martin"
      - option "St. Pierre & Miquelon"
      - option "St. Vincent & Grenadines"
      - option "Sudan"
      - option "Suriname"
      - option "Svalbard & Jan Mayen"
      - option "Sweden"
      - option "Switzerland"
      - option "Taiwan"
      - option "Tajikistan"
      - option "Tanzania"
      - option "Thailand"
      - option "Timor-Leste"
      - option "Togo"
      - option "Tokelau"
      - option "Tonga"
      - option "Trinidad & Tobago"
      - option "Tristan da Cunha"
      - option "Tunisia"
      - option "Türkiye"
      - option "Turkmenistan"
      - option "Turks & Caicos Islands"
      - option "Tuvalu"
      - option "U.S. Outlying Islands"
      - option "Uganda"
      - option "Ukraine"
      - option "United Arab Emirates"
      - option "United Kingdom"
      - option "United States"
      - option "Uruguay"
      - option "Uzbekistan"
      - option "Vanuatu"
      - option "Vatican City"
      - option "Venezuela"
      - option "Vietnam"
      - option "Wallis & Futuna"
      - option "Western Sahara"
      - option "Yemen"
      - option "Zambia"
      - option "Zimbabwe"
    - text: First name (optional)
    - textbox "First name (optional)": Kyla
    - text: Last name
    - textbox "Last name": Corwin
    - text: Address
    - combobox "Address": 7497 Kemmer Fields
    - text: Apartment, suite, etc. (optional)
    - textbox "Apartment, suite, etc. (optional)"
    - text: City
    - textbox "City": Friesenhaven
    - text: State
    - combobox "State":
      - option "Alabama"
      - option "Alaska"
      - option "American Samoa"
      - option "Arizona"
      - option "Arkansas"
      - option "California"
      - option "Colorado"
      - option "Connecticut"
      - option "Delaware"
      - option "Micronesia"
      - option "Florida"
      - option "Georgia"
      - option "Guam"
      - option "Hawaii"
      - option "Idaho"
      - option "Illinois"
      - option "Indiana"
      - option "Iowa"
      - option "Kansas"
      - option "Kentucky"
      - option "Louisiana"
      - option "Maine" [selected]
      - option "Marshall Islands"
      - option "Maryland"
      - option "Massachusetts"
      - option "Michigan"
      - option "Minnesota"
      - option "Mississippi"
      - option "Missouri"
      - option "Montana"
      - option "Nebraska"
      - option "Nevada"
      - option "New Hampshire"
      - option "New Jersey"
      - option "New Mexico"
      - option "New York"
      - option "North Carolina"
      - option "North Dakota"
      - option "Northern Mariana Islands"
      - option "Ohio"
      - option "Oklahoma"
      - option "Oregon"
      - option "Palau"
      - option "Pennsylvania"
      - option "Puerto Rico"
      - option "Rhode Island"
      - option "South Carolina"
      - option "South Dakota"
      - option "Tennessee"
      - option "Texas"
      - option "Utah"
      - option "Vermont"
      - option "Virginia"
      - option "Washington"
      - option "Washington DC"
      - option "West Virginia"
      - option "Wisconsin"
      - option "Wyoming"
      - option "U.S. Virgin Islands"
      - option "Armed Forces Americas"
      - option "Armed Forces Europe"
      - option "Armed Forces Pacific"
    - text: ZIP code
    - textbox "ZIP code": "4836"
    - paragraph: Enter a valid ZIP / postal code for United States
    - checkbox "Save this information for next time"
    - text: Save this information for next time
    - heading "Shipping method" [level=3]
    - group "Choose a shipping method":
      - text: Choose a shipping method
      - heading "Standard Shipping" [level=4]:
        - paragraph: Standard Shipping
      - strong: $10.00
  - region "Payment":
    - heading "Payment" [level=2]
    - paragraph: All transactions are secure and encrypted.
    - heading "Credit card" [level=3]
    - img "BOGUS"
    - text: Card number
    - iframe
    - text: Expiration date (MM / YY)
    - iframe
    - text: Security code
    - iframe
    - button "More information"
    - text: Name on card
    - iframe
    - button "Clear"
    - checkbox "Use shipping address as billing address" [checked]
    - text: Use shipping address as billing address
    - button "Pay now"
- contentinfo: All rights reserved Monkey Bakery
- complementary:
  - heading "Order summary" [level=2]
  - group:
    - heading "Shopping cart" [level=3]
    - table "Shopping cart":
      - rowgroup:
        - row "Product image Description Quantity Price":
          - columnheader "Product image"
          - columnheader "Description"
          - columnheader "Quantity"
          - columnheader "Price"
      - rowgroup:
        - row "Monkey Bread Baking Kit Quantity 1 Monkey Bread Baking Kit 1 $19.99":
          - cell "Monkey Bread Baking Kit Quantity 1":
            - img "Monkey Bread Baking Kit"
            - text: Quantity 1
          - cell "Monkey Bread Baking Kit":
            - paragraph: Monkey Bread Baking Kit
          - cell "1"
          - cell "$19.99"
  - heading "Discount" [level=3]
  - text: Discount code
  - textbox "Discount code"
  - button "Apply Discount Code" [disabled]: Apply
  - heading "Cost summary" [level=3]
  - table "Cost summary":
    - rowgroup:
      - row "Item Value":
        - columnheader "Item"
        - columnheader "Value"
    - rowgroup:
      - row "Subtotal $19.99":
        - rowheader "Subtotal"
        - cell "$19.99"
      - row "Shipping $10.00":
        - rowheader "Shipping"
        - cell "$10.00"
      - row "Total USD $29.99":
        - rowheader "Total":
          - strong: Total
        - cell "USD $29.99":
          - text: USD
          - strong: $29.99
- status: "Updated total price: $29.99 USDUpdated shipping method: Standard Shipping"
- alert
```

# Test source

```ts
   26 |   private readonly orderSummaryPrice: Locator;
   27 |   private readonly orderSummarySubtotal: Locator;
   28 |   private readonly orderSummaryShipping: Locator;
   29 |   private readonly orderSummaryTotal: Locator;
   30 |
   31 |   // Order details locators
   32 |   private readonly contactEmailLocator: Locator;
   33 |   private readonly shippingAddressLocator: Locator;
   34 |   private readonly shippingMethodLocator: Locator;
   35 |   private readonly paymentMethodLocator: Locator;
   36 |   private readonly billingAddressLocator: Locator;
   37 |
   38 |   // Continue shopping button locator
   39 |   private readonly continueShoppingButtonLocator: Locator;
   40 |
   41 |   constructor(private readonly page: Page) {
   42 |     // Header elements
   43 |     this.orderConfirmationTitleLocator = page.locator(".os-header__title");
   44 |     this.orderConfirmationMapSectionLocator = page.locator(
   45 |       ".content-box__row.text-container"
   46 |     );
   47 |
   48 |     // Map section elements
   49 |     this.orderConfirmationMapiFrameLocator =
   50 |       page.frameLocator("iframe.map__iframe");
   51 |     this.mapOrderConfirmationTitleLocator =
   52 |       this.orderConfirmationMapSectionLocator.locator(
   53 |         ".heading-2.os-step__title"
   54 |       );
   55 |     this.orderConfirmationMapSectionSubtitleLocator =
   56 |       this.orderConfirmationMapSectionLocator.locator(
   57 |         ".os-step__special-description p"
   58 |       );
   59 |     this.orderConfirmationMapShippingAddressTitleLocator =
   60 |       this.orderConfirmationMapiFrameLocator.locator(
   61 |         "[role='dialog'] span.small-text"
   62 |       );
   63 |     this.orderConfirmationMapShippingAddressLocator =
   64 |       this.orderConfirmationMapiFrameLocator.locator(
   65 |         "[role='dialog'] span.emphasis"
   66 |       );
   67 |     this.orderConfirmationDownloadButtonLocator = page.locator(
   68 |       "[data-qr-code-handle]"
   69 |     );
   70 |     this.emailNewsAndOffersCheckboxLocator = page.locator("[method='post']");
   71 |
   72 |     // Order summary locators
   73 |     this.orderSummaryTitle = page.locator(".product__description__name");
   74 |     this.orderSummaryQuantity = page.locator(
   75 |       ".product__quantity .visually-hidden"
   76 |     );
   77 |     this.orderSummaryPrice = page.locator(
   78 |       ".product__price .order-summary__price"
   79 |     );
   80 |     this.orderSummarySubtotal = page.locator(
   81 |       ".total-line--subtotal .order-summary__emphasis"
   82 |     );
   83 |     this.orderSummaryShipping = page.locator(
   84 |       ".total-line--shipping .order-summary__emphasis"
   85 |     );
   86 |     this.orderSummaryTotal = page.locator(".payment-due__price");
   87 |
   88 |     // Order details locators
   89 |     this.contactEmailLocator = page.locator(
   90 |       'h3:has-text("Contact information") + p bdo'
   91 |     );
   92 |
   93 |     this.shippingAddressLocator = page.locator(
   94 |       'h3:has-text("Shipping address") + address'
   95 |     );
   96 |
   97 |     this.shippingMethodLocator = page.locator(
   98 |       'h3:has-text("Shipping method") + p'
   99 |     );
  100 |
  101 |     this.paymentMethodLocator = page.locator(
  102 |       ".payment-method-list__item__info"
  103 |     );
  104 |
  105 |     this.billingAddressLocator = page.locator(
  106 |       'h3:has-text("Billing address") + address'
  107 |     );
  108 |
  109 |     // Continue shopping button locator
  110 |     this.continueShoppingButtonLocator = page.locator(
  111 |       ".step__footer__continue-btn.btn"
  112 |     );
  113 |   }
  114 |
  115 |   /**
  116 |    * Validates the order confirmation page
  117 |    * @param userDetails - The user details
  118 |    * @param orderDetails - The order details
  119 |    * @param productDetails - The product details
  120 |    */
  121 |   async validateOrderConfirmationPage(
  122 |     userDetails: userDetails,
  123 |     orderDetails: orderDetails,
  124 |     productDetails: productDetails
  125 |   ): Promise<void> {
> 126 |     await expect(this.page).toHaveTitle(
      |                             ^ Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)
  127 |       pageTitles.orderConfirmationPage.default
  128 |     );
  129 |     await this.validateTitle(userDetails);
  130 |     await this.validateMap(userDetails, orderDetails);
  131 |     await this.validateOrderSummary(productDetails);
  132 |     await this.validateOrderDetails(userDetails, orderDetails);
  133 |     await this.validateContinueShoppingButton();
  134 |   }
  135 |
  136 |   /**
  137 |    * Validates the title of the order confirmation page
  138 |    * @param userDetails - The user details
  139 |    */
  140 |   async validateTitle(userDetails: userDetails): Promise<void> {
  141 |     const expectedTitle = userDetails.firstName
  142 |       ? orderConfirmationPage.title.withName(userDetails.firstName)
  143 |       : orderConfirmationPage.title.default;
  144 |
  145 |     await expect(this.orderConfirmationTitleLocator).toHaveText(expectedTitle);
  146 |   }
  147 |
  148 |   /**
  149 |    * Validates the map section of the order confirmation page
  150 |    * @param userDetails - The user details
  151 |    * @param orderDetails - The order details
  152 |    */
  153 |   async validateMap(
  154 |     userDetails: userDetails,
  155 |     orderDetails: orderDetails
  156 |   ): Promise<void> {
  157 |     await this.orderConfirmationMapShippingAddressTitleLocator.waitFor({
  158 |       state: "visible",
  159 |     });
  160 |     await expect(
  161 |       this.orderConfirmationMapShippingAddressTitleLocator
  162 |     ).toHaveText(orderConfirmationPage.map.shippingAddressTitle);
  163 |     await expect(this.orderConfirmationMapShippingAddressLocator).toContainText(
  164 |       userDetails.address.city
  165 |     );
  166 |     await expect(this.mapOrderConfirmationTitleLocator).toHaveText(
  167 |       orderConfirmationPage.map.title
  168 |     );
  169 |     await expect(this.orderConfirmationMapSectionSubtitleLocator).toHaveText(
  170 |       orderConfirmationPage.map.subtitle
  171 |     );
  172 |     await expect(this.emailNewsAndOffersCheckboxLocator).toBeVisible();
  173 |
  174 |     if (orderDetails.shippingMethod === shippingMethod.StandardShipping) {
  175 |       await expect(this.orderConfirmationDownloadButtonLocator).toBeVisible();
  176 |     }
  177 |   }
  178 |
  179 |   /**
  180 |    * Validates the order summary section of the order confirmation page
  181 |    * @param productDetails - The product details
  182 |    */
  183 |   async validateOrderSummary(productDetails: productDetails): Promise<void> {
  184 |     try {
  185 |       // Wait for the order summary section to be visible
  186 |       await this.page.locator(".order-summary").waitFor({ state: "visible" });
  187 |
  188 |       const productName = (await this.orderSummaryTitle.textContent())?.trim();
  189 |       expect(productName).toEqual(productDetails.title);
  190 |
  191 |       const productQuantity = (
  192 |         await this.orderSummaryQuantity.textContent()
  193 |       )?.trim();
  194 |       expect(productQuantity).toEqual(productDetails.quantity);
  195 |
  196 |       const productPriceRaw = await this.orderSummaryPrice.textContent();
  197 |       const productPrice = productPriceRaw?.replace(/[^\d.]/g, "").trim();
  198 |
  199 |       const salePrice = parseFloat(
  200 |         productDetails.priceSale?.replace(/[^\d.]/g, "") || "0"
  201 |       );
  202 |       const regularPrice = parseFloat(
  203 |         productDetails.priceRegular?.replace(/[^\d.]/g, "") || "0"
  204 |       );
  205 |
  206 |       let expectedPrice = 0;
  207 |       if (!isNaN(salePrice) && !isNaN(regularPrice)) {
  208 |         expectedPrice = Math.min(salePrice, regularPrice);
  209 |       } else if (!isNaN(salePrice)) {
  210 |         expectedPrice = salePrice;
  211 |       } else if (!isNaN(regularPrice)) {
  212 |         expectedPrice = regularPrice;
  213 |       }
  214 |
  215 |       expect(productPrice).toEqual(expectedPrice.toFixed(2));
  216 |
  217 |       const subtotal = (await this.orderSummarySubtotal.textContent())
  218 |         ?.replace(/[^\d.]/g, "")
  219 |         .trim();
  220 |       expect(subtotal).toEqual(expectedPrice.toFixed(2));
  221 |
  222 |       const shippingRaw = await this.orderSummaryShipping.textContent();
  223 |       const shippingPrice = parseFloat(
  224 |         shippingRaw?.replace(/[^\d.]/g, "") || "0"
  225 |       );
  226 |
```