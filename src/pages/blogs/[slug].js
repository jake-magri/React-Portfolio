import SiteHead from '../../components/SiteHead';
import BlogPost from '../../components/Blog-Page/BlogPost';
import { blogData } from '../../data/blogData';
export function getStaticPaths() { return { paths: blogData.map(p => ({ params: { slug: p.slug } })), fallback: false }; }
export function getStaticProps({ params }) { const post = blogData.find(p => p.slug === params.slug); return post ? { props: { post } } : { notFound: true }; }
export default function Page({ post }) { return <><SiteHead title={`${post.title} | Jake Magri`} description={post.excerpt} /><BlogPost post={post} /></>; }
