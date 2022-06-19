import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

const sections = [
  {
    title: <>🧰 Developer Support</>,
    description: <>Developer API built from source API files</>,
  },
  {
    title: <>🧩 Customizable</>,
    description: <>Pass in custom RPC Methods for generating documentation</>,
  },
  {
    title: <>📑 Schema Definitions</>,
    description: <>Use individual schema definitions directly in your MDX docs</>,
  },
  {
    title: <>⛓ Concensus and Execution</>,
    description: (
      <>
        Support for
        <a href="/docs/guides/build-time-rendering"> All Clients</a>
      </>
    ),
  },
];

/**
 *
 * @param {{
 *   title: string | React.ReactNode;
 *   description: string | React.ReactNode;
 *   link?: string;
 * }} param0
 */
function Section({ title, description, link }) {
  const sectionComponent = <h3>{title}</h3>;
  const fullLink = useBaseUrl(link);
  return (
    <div className={clsx('col col--6', styles.feature, styles.featuresCol)}>
      {link ? <Link to={fullLink}>{sectionComponent}</Link> : sectionComponent}
      <p>{description}</p>
    </div>
  );
}

function Docs() {
  return (
    <Layout title="Redocusaurus" description="OpenAPI documentation solution">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Ethereum2</h1>
          <p>Ethereum2 Beacon Node API's</p>
          <span>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=rohit-gohri&amp;repo=redocusaurus&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </header>
      <main>
        {sections && sections.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {sections.map((props, idx) => (
                  <Section key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Docs;
