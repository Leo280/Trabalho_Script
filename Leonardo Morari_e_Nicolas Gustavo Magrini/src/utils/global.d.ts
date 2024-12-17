declare global {
  module 'express-session' {
    interface Session {
      nameUser?: string;
      userId?: string;
      email?: string;
      isAdmin?: boolean;
    }
  }
}
