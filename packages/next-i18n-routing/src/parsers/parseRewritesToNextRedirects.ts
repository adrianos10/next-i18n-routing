import { Redirect, Rewrite } from 'next/dist/lib/load-custom-routes';

const parseRewritesToNextRedirects = (rewrites: Rewrite[]): Redirect[] =>
  rewrites.map(({ locale, source, destination }) => ({
    source: destination,
    destination: source,
    locale,
    permanent: true,
  }));

export { parseRewritesToNextRedirects };
