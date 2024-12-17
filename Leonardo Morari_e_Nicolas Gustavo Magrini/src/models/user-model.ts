export type UserModel = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'USER';
  createdAt: string;
};
