import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCrad from '../components/SmallCrad';

export default function Home( {exploreData} ) {
  return (
    <div>
      <Head>
        <title>AIRBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
    <Banner/>
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <secction className="pt-6">
        <h2 className="text-4xl">Explore Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData?.map(({img , distance , location }) => (<SmallCrad key={img} img={img} distance={distance} location={location} />))}
        </div>
        
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
