
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5042, hash: 'b4652c131a6608c72077acf7486298ddd158b6f0a57d03b3c41b8ef4f0e1e11c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: '1b96a8f91b4e72673ea35cff063ad6592c8e6de1f95be99c8e865db4111e1b7e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6794, hash: '5172896424d73486f2c3d129b07a0bce575692c04d8aabef078968f297c64609', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-63C7QGJG.css': {size: 232342, hash: 'v8ucZsHxoyY', text: () => import('./assets-chunks/styles-63C7QGJG_css.mjs').then(m => m.default)}
  },
};
