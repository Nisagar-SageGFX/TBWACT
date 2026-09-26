import { useEffect } from 'react';
import { seoDefaults } from '../data/seo';

const setMeta = (attr, key, content) => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/**
 * Applies per-page metadata. Content comes from src/data/seo.js so titles and
 * descriptions can be changed without editing any page component.
 */
export default function SEO({ meta, jsonLd }) {
  useEffect(() => {
    if (!meta) return;
    const url = seoDefaults.domain + (meta.path === '/' ? '/' : meta.path);
    const image = seoDefaults.domain + (meta.image || seoDefaults.image);

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('name', 'robots', meta.noindex ? 'noindex,follow' : 'index,follow');

    // A noindex page has no business declaring a canonical URL: the 404 page
    // would otherwise canonicalise to /404, an address that does not exist and
    // that contradicts its own noindex. Remove both rather than emit them.
    if (meta.noindex) {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    } else {
      setLink('canonical', url);
      setMeta('property', 'og:url', url);
    }

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', seoDefaults.siteName);
    setMeta('property', 'og:locale', seoDefaults.locale);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:image', image);

    setMeta('name', 'twitter:card', seoDefaults.twitterCard);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta('name', 'twitter:image', image);
  }, [meta]);

  useEffect(() => {
    if (!jsonLd) return undefined;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.page = 'true';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [jsonLd]);

  return null;
}
