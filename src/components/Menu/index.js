import React, {Fragment} from 'react';
import {withStyles} from '@material-ui/core';
import menuHeaderImage from '../images/menu-photo-1.jpg';
import HeroImage from "../Hero-Image";
import icons from "../images/icons";
import {menuItemsArr} from '../messages/menu';
import MenuSection from './menuSection';
import './menu.css';

const styles = () => ({
	image: {
		backgroundImage: `url(${menuHeaderImage})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		height: "100vh",
		width: "100vw"
	},
	text: {
		color: "white",
		fontSize: "7rem",
		fontFamily: `'Courgette', cursive`,
		textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
	}
})

const Menu = ({
	classes,
}) => {
	const x = window.matchMedia('(min-width: 376px)');
	const {grubhub, doordash, call} = icons
	const heroStyles = {
		image: {
			backgroundImage: `url(${menuHeaderImage})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			height: "100vh",
			width: "100vw"
		},
		text: {
			color: "white",
			fontSize: "7rem",
			fontFamily: `'Courgette', cursive`,
			textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
		}
	}

	return (
		<Fragment>
			{x.matches && <HeroImage imageText="menu"></HeroImage>}
			<div className="menu-wrapper">
				<div className="social-media-wrapper">
					<div className="social-media">
						<a href="https://www.grubhub.com/restaurant/chevitas-juice-and-bagel-209-w-4th-st-santa-ana/1472683" target="_blank" rel="noreferrer">
							<img src={grubhub} alt="grubhub icon"></img>
							</a>
						<a href="https://www.doordash.com/store/chevita-s-juice---bagels-santa-ana-783486/en-US" target="_blank" rel="noreferrer">
							<img src={doordash} alt="doordash icon"></img>
							</a>
						<a href="tel:7148523650" target="_blank" rel="noreferrer">
							<img src={call} alt="call icon"></img>
							</a>
					</div>
				</div>
				<main className="menu">
					<div>
						{menuItemsArr.map((type, i) => i < 3 && <MenuSection type={type}/>)}
					</div>
					{x.matches && <div className="vertical-divider"></div>}
					<div>
						{menuItemsArr.map((type, i) => i >= 3 && <MenuSection type={type}/>)}
					</div>
				</main>
			</div>
		</Fragment>

	)
}

export default withStyles(styles)(Menu);