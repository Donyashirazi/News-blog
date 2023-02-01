import './style.scss';
import useGetNews from '../Api';
import HtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import Test from '../Test';

const SportsNews = ({ filter }) => {
	const { news, loading } = useGetNews(filter);
	if (loading) return <div>loading...</div>;
	console.log('sport news', news);
	const newNews = news.filter((item, index) => index < 3);

	return (
		<div className="second-container">
			{news.length &&
				newNews.map(
					(item, index) => (
						index < 2,
						(
							<Link to="/Test">
								<div
									item={item}
									className="news-box"
									key={item.id}
								>
									<div className="image-container"></div>
									<div className="sports-data">
										{HtmlParser(item.fields.body)}
									</div>
								</div>
							</Link>
						)
					)
				)}
		</div>
	);
};
export default SportsNews;
