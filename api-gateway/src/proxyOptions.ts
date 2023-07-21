  interface IOptions {
    target?: string;
    changeOrigin?: boolean;
    // true needed for virtual hosted sites
    ws?: boolean;
    // proxy websockets
    pathRewrite?: IPathRewrite;
    router?: IRouter;
  }
  interface IRouter {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    '/admins'?: string;
    '/service'?: string;
  }
  interface IPathRewrite {
    // Customer Api
    '^/api/v1/customers'?: string;
    '^/api/v1/customers/users'?: string;
    // Admin Api
    '^/api/v1/admins'?: string;
    '^/api/v1/admins/admins'?: string;
    // Service Api
    '^/api/v1/service'?: string;
  }

  export {IOptions, IPathRewrite, IRouter}