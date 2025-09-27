import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'order/:cartId',
    renderMode: RenderMode.Server
  },
  {
    path: 'details/:pId',
    renderMode: RenderMode.Server
  }
];
