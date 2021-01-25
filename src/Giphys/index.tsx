import React, { useState, useEffect } from "react";
import "./styles.css";

type TGiphysProps = {
	searchQuery?: string;
};

type TGiphyImage = {
	url: string;
};
type TGiphyImageKeys = "original" | "downsized" | "fixed_height_downsampled";
type TGiphyData = {
	id: string;
	title: string;
	slug: string;
	images: {
		[k in TGiphyImageKeys]: TGiphyImage;
	};
};
type TPagination = {
	total_count: number;
	count: number;
	offset: number;
};
type TTrendingGifsResponse = {
	data: TGiphyData[];
	pagination: TPagination;
};
type TQueryPagination = {
	limit: number;
	offset: number;
};

const GiphyConfig = {
	api_key: "0FN4Q05kFTNZTyNkHLHw4kXG7epp4mvt",
	trendingUrl: "https://api.giphy.com/v1/gifs/trending",
};

async function getTrendingGifs({
	limit,
	offset,
}: {
	limit: number;
	offset: number;
}) {
	const queryParameters = new URLSearchParams();
	queryParameters.append("api_key", GiphyConfig.api_key);
	queryParameters.append("limit", limit.toString());
	queryParameters.append("offset", offset.toString());
	const trendingUrl = `${GiphyConfig.trendingUrl}?${queryParameters}`;

	try {
		const trendingResp = await fetch(trendingUrl);
		const trendingGifs: TTrendingGifsResponse = await trendingResp.json();
		const { data, pagination } = trendingGifs;
		return {
			data,
			pagination,
		};
	} catch (e) {
		throw e;
	}
}

function Giphys(props: TGiphysProps) {
	const [gifs, setGifs] = useState<any[]>([]);
	const [scrolledToBottom, setScrolledToBottom] = useState(false);
	const defaultLimit = 24;
	const [pagination, setPagination] = useState<TQueryPagination>({
		limit: defaultLimit,
		offset: 0,
	});
	const [fetchNextBatch, setFetchNextBatch] = useState(false);

	function handleScrollEvent(_e) {
		if (
			window.innerHeight + document.documentElement.scrollTop + 200 >=
			document.documentElement.offsetHeight
		) {
			setScrolledToBottom(true);
		}
	}

	useEffect(() => {
		let mounted = true;

		async function go() {
			try {
				const { data } = await getTrendingGifs({
					limit: defaultLimit,
					offset: 0,
				});
				if (mounted) {
					setGifs(data);
					setPagination({
						limit: defaultLimit + defaultLimit,
						offset: defaultLimit,
					});
					window.addEventListener("scroll", handleScrollEvent);
				}
			} catch (e) {
				alert(`There was an error loading gifs from giphy: ${e}`);
			}
		}

		go();
		return () => {
			mounted = false;
			window.removeEventListener("scroll", handleScrollEvent);
		};
	}, []);

	useEffect(() => {
		console.log(`Running scrolledToBottom effect`);
		if (scrolledToBottom) {
			setFetchNextBatch(true);
		}
	}, [scrolledToBottom]);

	useEffect(() => {
		console.log(`Running setFetchNextBatch effect`);
		if (fetchNextBatch) {
			const nextPagination = {
				limit: pagination.limit + defaultLimit,
				offset: pagination.offset + defaultLimit,
			};
			console.log(`nextPagination: ${JSON.stringify(nextPagination)}`);
			getTrendingGifs(nextPagination)
				.then(({ data }) => {
					setFetchNextBatch(false);
					setScrolledToBottom(false);
					const uniqueGifs = gifs.concat(
						data.filter((d) => gifs.findIndex((g) => g.id === d.id) === -1)
					);
					setGifs(uniqueGifs);
					setPagination(nextPagination);
				})
				.catch((e) => {
					console.error(e);
				});
		}
	}, [fetchNextBatch]);

	return (
		<div className="giphs-wrap">
			<div className="giphs">
				{gifs.map((g) => {
					return (
						<div key={g.id} className="giph">
							<img src={g.images.fixed_height_downsampled.url} alt={g.slug} />
							<div className="title">{g.title}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Giphys;
