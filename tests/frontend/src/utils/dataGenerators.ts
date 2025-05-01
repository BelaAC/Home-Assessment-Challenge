import { faker } from "@faker-js/faker";

// Initialize faker with US locale
faker.setLocale("en_US");

/**
 * Generates a random email address
 * @returns A random email address
 */
export const generateRandomEmail = () => {
  return faker.internet.email();
};

/**
 * Generates a random address
 * @returns A random address
 */
export const generateRandomAddress = () => {
  const state = faker.address.stateAbbr();

  return {
    postalCode: faker.address.zipCodeByState(state),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state,
  };
};

/**
 * Generates random user data
 * @returns A random user
 */
export const generateRandomUser = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: generateRandomEmail(),
    address: generateRandomAddress(),
  };
};

/**
 * Generates random card information
 * @returns A random card information
 */
export const generateRandomCardInfo = () => {
  return {
    cardNumber: faker.finance.creditCardNumber(),
    cardExpirationDate: faker.date
      .future(5)
      .toLocaleDateString("en-US", { month: "2-digit", year: "2-digit" }),
    cardCvv: faker.finance.creditCardCVV(),
  };
};
