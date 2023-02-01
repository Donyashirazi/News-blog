import './style.scss';
import useGetNews from '../Api';
import HtmlParser from 'react-html-parser';
import clsx from 'clsx';

const MainNewsHolder = ({ filter }) => {
	const { news, loading } = useGetNews(filter);
	if (loading) return <div>loading...</div>;

	return (
		<>
			<div className="main-container">
				{news.splice(-1) &&
					news.length &&
					news.map((item, index) => (
						<div
							className="newsCard"
							key={index}
						>
							<div className="image-container"></div>
							<div className="data-container">
								{HtmlParser(item.fields.body)}
							</div>
						</div>
					))}
			</div>
		</>
	);
};
export default MainNewsHolder;
