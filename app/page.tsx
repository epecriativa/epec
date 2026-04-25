import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Gallery from './components/Gallery/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Courses />
      <Gallery />
    </main>
  )
}
