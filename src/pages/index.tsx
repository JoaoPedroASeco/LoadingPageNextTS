import type { NextPage } from 'next'
import { 
  Button,
  Input,
  Space, 
} from 'antd'
import Link from 'next/link'

const { Search } = Input

const Home: NextPage = () => {
  return (
    <>
      <Link href="/page2" passHref >
        Page 2
      </Link>
    </>
  )
}

export default Home
