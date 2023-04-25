export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  roles: {
    admin?: boolean;
  };
  emailVerified?: boolean;
  accountType: string;
}
