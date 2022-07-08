/** 
 * @exports
 * @function swCustom
 */
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

export default function swCustom(params) {
  if (params.debug) {
    console.log('[Docusaurus-PWA][SW]: ', params);
  }

  // Cache responses from external resources
  registerRoute(
    (context) =>
      [
        /netlify\.com\/img/,
        /avatars1\.githubusercontent/,
      ].some((regex) => context.url.href.match(regex)),
    new StaleWhileRevalidate(),
  );
}