import React, { useEffect, useState } from 'react';
import axios from 'axios';
const useGetNews = (filter) => {
	console.log(filter, 'filter');
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(false);

	const getNews = async () => {
		try {
			setLoading(true);
			const response = await axios.get(
				`https://content.guardianapis.com/search?api-key=3d149bb1-1c06-49c0-8e6b-30cc45257a56&show-fields=thumbnail,body&section=news&order-by=${filter}`
			);
			console.log(response);
			setNews(response.data.response.results);
			setLoading(false);
		} catch (err) {
			setLoading(false);
			console.log(`Error:${err.message}`);
		}
	};

	useEffect(() => {
		getNews();
	}, [filter]);

	return { news, loading };
};

export default useGetNews;
