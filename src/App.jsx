import About from './components/about/About'
import Campus from './components/campus/Campus'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Programs from './components/programs/Programs'
import Testimonials from './components/testimonials/Testimonials'
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
        <Campus />
        <Title title='What Student Says' subtitle='Testimonials' />
        <Testimonials />
        <Title title='Get In Touch' subtitle='Contact us' />
      </div>
    </div>
  )
}

export default App
