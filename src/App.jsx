import './App.css'
import Info from './components/Info/index.jsx'
import About from './components/About/index.jsx'
import Interests from './components/Interests/index.jsx'
import Footer from './components/Footer/index.jsx'

export default function App() {
	return (
		<div className="container">
			<Info />
			<About />
			<Interests />
			<Footer />
		</div>
	)
}
