import MainNewsHolder from '../MainNewsHolder';
import SportsNews from '../Sports';
import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import './style.scss';

const Main = () => {
	const [filter, setFilter] = useState('newest');
	return (
		<div className="all-data">
			<div className="top-container">
				<h1>Top Stories</h1>
				<div className="right-container">
					<button className="bookmark-button">
						<FaBookmark
							style={{ color: 'white', margin: '0 6px' }}
						/>
						<p>view Bookmark</p>
					</button>
					<select
						value={filter}
						name="select-list"
						className="select-list"
						onChange={(e) => setFilter(e.target.value)}
					>
						<option value="oldest">oldest</option>
						<option value="newest">newest</option>
					</select>
				</div>
			</div>
			<MainNewsHolder filter={filter} />
			<div className="bottom-container">
				<h2>Sports</h2>
				<SportsNews filter={filter} />
			</div>
		</div>
	);
};
export default Main;
