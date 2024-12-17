export type CreateUserDto = {
  name: string;
  email: string;
  password: string;
};

export type LoginUserDto = {
  email: string;
  password: string;
};

export type UserResponseDto = {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'USER';
};
