import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head'

import { getPrismicClient } from '../../services/prismic';

import { FiCalendar, FiUser, FiClock } from 'react-icons/fi'
import Header from '../../components/Header/index'

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />

      <img src='/test.png' alt='imagem' className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo de exemplo</h1>
            <ul>
              <li>
                <FiCalendar />
                12 Mar 2021
              </li>
              <li>
                <FiUser />
                Flavio Santos
              </li>
              <li>
                <FiClock />
                5 min
              </li>
            </ul>
          </div>

          <article>
            <h2>Titulo sessão</h2>
            <p>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. <strong>Numquam quod</strong>, sunt
              labore animi quis doloremque quia! Ab,
              id reprehenderit facilis enim, sed
              eaque quia laboriosam odio fugit minus
              hic ipsum!
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. <a href="#">Numquam quod</a>, sunt
              labore animi quis doloremque quia! Ab,
              id reprehenderit facilis enim, sed
              eaque quia laboriosam odio fugit minus
              hic ipsum!
            </p>
          </article>
        </div>
      </main>
    </>
  )
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
