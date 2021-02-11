import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { client } from '../prismicPosts'
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

export default function Home(props) {
  return (
   <div>
     <ul>
        {props.posts.results.map((post) => (
          <li key={post.uid} className={styles.lnk}>
           <Link href="posts/[id]" as={`/posts/${post.uid}`}>
              <a> {RichText.render(post.data.title)} </a> 
            </Link>
          </li>
        ))}
      </ul>
   </div>
  );
}


export async function getStaticProps(){
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[my.post.date desc]" }
  )
  return {
    props: {
      posts,
    },
  }  
}