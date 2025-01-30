import About from './components/about/About'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title title='What we offer' subtitle='OUR PROGRAMS' />
        <Programs />
        <About />
        <Title title='Campus Photos' subtitle='Gallery' />
      </div>
    </div>
  )
}

export default App
