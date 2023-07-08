import { LoaderArgs, json } from '@remix-run/node'

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url)
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return json({ data: 'APIだよ', url, posts })
}
