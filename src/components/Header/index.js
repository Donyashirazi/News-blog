import { FaSistrix, FaFortAwesome } from 'react-icons/fa';
import './style.scss';

const Header = () => {
	return (
		<div className="header">
			<FaFortAwesome style={{ color: 'white', fontSize: '32px' }} />
			<FaSistrix style={{ color: 'white' }} />
		</div>
	);
};
export default Header;
