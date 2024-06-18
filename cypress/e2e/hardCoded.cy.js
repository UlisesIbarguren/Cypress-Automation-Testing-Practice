/// <reference types="cypress" />

import ShopByCategory from '../pageObjects/hardcoded';

describe('Description of the Test Suite', () => {
    const shopByCategory = new ShopByCategory();

it('Description of the individual test', () => {
    shopByCategory.selectShopByCategory()
    shopByCategory.selectLaptops()
    shopByCategory.selectLaptopsTitle()
    })
});
  