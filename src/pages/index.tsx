import { GetStaticProps } from 'next';
import Head from 'next/head'
import Prismic from '@prismicio/client'
//importação do stripe

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({postsPagination}: HomeProps) {
  return(
    <>
      <Head>
        {/* Logo */}
        <img src='./images/logo.svg'/>
      </Head>
      <main className={styles.contentContainer}>
        {/* posts */}
        <section>
          <h4>text</h4>
        </section>
      </main>

    </>
  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query([
    Prismic.predicates.at('document.type', 'pos') // pos é o id que vem do prismic
  ], {
    fetch: ['title', 'content'],
    pageSize: 100,
  });

  // TODO
};
