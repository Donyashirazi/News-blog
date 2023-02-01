import Header from '../Header';
import Main from '../Main';
import MainNewsHolder from '../MainNewsHolder';
import './style.scss';

const HomePage = () => {
	return (
		<div className="container">
			<div className="header">
				<Header />
			</div>
			<div className="main">
				<Main />
			</div>
			<div className="footer"></div>
		</div>
	);
};
export default HomePage;
