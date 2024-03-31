import TweeterIcon from '../../assets/twitter_icon.png'
import FacebookIcon from '../../assets/facebook_icon.png'
import GithubIcon from '../../assets/github_icon.png'
import InstagramIcon from '../../assets/instagram_icon.png'
import './index.css'

export default function Footer() {
	return (
		<>
			<footer className="card--footer">
				<a href="#">
					<img src={TweeterIcon} alt="tweeter icon" />
				</a>
				<a href="#">
					<img src={FacebookIcon} alt="facebook icon" />
				</a>
				<a href="https://www.instagram.com/mhmdhafs/">
					<img src={InstagramIcon} alt="instagram icon" />
				</a>
				<a href="https://github.com/muhafs">
					<img src={GithubIcon} alt="github icon" />
				</a>
			</footer>
		</>
	)
}
