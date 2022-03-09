import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home( {exploreData} ) {
  return (
    <div className="">
      <Head>
        <title>AIRBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
    <Banner/>
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <secction className="pt-6">
        <h2 className="text-4xl">Explore Nearby</h2>
        {exploreData.map((item) => (<h1>{item.location}</h1>))}
        </secction>
    </main>

    </div>
  )
}

export async function getStaticProps() {
const exploreData = await fetch('https://links.papareact.com/pyp').then((res)=> res.json());
 return {
   props: {
    exploreData,
   } 
 }
}
