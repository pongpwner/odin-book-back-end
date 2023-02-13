export {};

declare global {
  namespace Express {
    interface ReSponse {
      status: string;
      render: Function;
      locals: Object;
    }
  }
}
