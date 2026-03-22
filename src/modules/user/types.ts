export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault?: boolean;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  addresses: Address[];
  createdAt: string;
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface UserActions {
  setUser: (user: User | null) => void;
  logout: () => void;
}

export type UserStore = UserState & UserActions;
