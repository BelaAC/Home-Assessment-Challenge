/**
 * Interface representing user details
 */
export interface userDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
  };
}
