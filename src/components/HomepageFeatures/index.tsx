import React, {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '方便使用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          启梦主题专为博客、自媒体、资讯类的网站设计开发，简约优雅的设计风格，全面的前端用户功能，简单的模块化配置，欢迎您的体验
      </>
    ),
  },
  {
    title: '轻松创作',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        启梦主题基于WordPress进行开发，拥有成熟的框架，小白也能方便上手
      </>
    ),
  },
  {
    title: '永久更新',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        启梦主题一次付费终身接收更新，欢迎大家体验
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
