import { useRouter } from 'next/router'

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const { testSlug } = params
  return testSlug ? { props: { testSlug } } : { notFound: true }
}

export default function Test({ testSlug }) {
  const { isFallback } = useRouter()
  return isFallback ? <h1>fallback...</h1> : <h1>{testSlug}</h1>
}
