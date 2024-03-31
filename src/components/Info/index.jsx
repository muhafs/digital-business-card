import './index.css'
import Photo from '../../assets/me.jpg'
import Mail from '../../assets/Mail.png'
import LinkedIn from '../../assets/linkedin.png'

export default function Info() {
	return (
		<>
			<img className="card--image" src={Photo} alt="personal photo" />

			<div className="card--text">
				<h1 className="card--text_name">Muhamad Haspin</h1>
				<h2 className="card--text_title">Frontend Developer</h2>
				<a className="card--text_link" href="https://muhafs.github.io/muhamad-portfolio/">
					muhafs.website
				</a>
			</div>

			<div className="card--button">
				<a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhamadhaspin@gmail.com&su=SUBJECT&body=BODY" className="card--button_email">
					<img src={Mail} alt="mail logo" />
					<span>Email</span>
				</a>
				<a href="https://www.linkedin.com/in/muhamad-haspin-037557228/" className="card--button_linkedin">
					<img src={LinkedIn} alt="linked in logo" />
					<span>LinkedIn</span>
				</a>
			</div>
		</>
	)
}
