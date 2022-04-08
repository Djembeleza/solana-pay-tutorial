import Products from '../../components/Products'
import SiteHeading from '../../components/SiteHeading'
import Head from 'next/head'

export default function ShopPage() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-24">
       <Head>
        <meta name='description' content='The best herb shop powered by blockchain technology' />
      </Head>
      <SiteHeading>Tsa Felo</SiteHeading>
      <Products submitTarget='/shop/checkout' enabled={true} />
    </div>
  )
}
