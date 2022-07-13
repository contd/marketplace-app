import type { NextPage } from 'next'
import { gql, useQuery } from '@apollo/client'
import ProductList from '../components/ProductList'

const GET_PRODUCTS = gql`
query {
  getAllProducts {
    data {
      _id
      name
      description
      price
      imageUrl
      shop {
        _id
      }
    }
  }
}
`

const Home: NextPage = () => {
  const { data } = useQuery(GET_PRODUCTS)
  console.log(' ==> ', data)
  return (
    <ProductList products={[1,2,3]} />
  )
}

export default Home
