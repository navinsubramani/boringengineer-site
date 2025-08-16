import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Introduction from '@site/src/components/HomepageFeatures';
import {Journey, SkillSet, Certification} from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Personal site of Navin Subramani, where Navin blogs and shares his experiences in engineering, tech, and life.">
      <main>
        <div className={styles.sectionSpacing}>
          <Introduction />
        </div>
        <div className={styles.sectionSpacing}>
          <SkillSet />
        </div>
        <div className={styles.sectionSpacing}>
          <Certification />
        </div>
        <div className={styles.sectionSpacing}>
          <Journey />
        </div>
      </main>
    </Layout>
  );
}
