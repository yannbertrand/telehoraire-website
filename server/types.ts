export type DateString = string;

export type Credits = {
	director?: string[];
	actor?: string[];
	writer?: string[];
	adapter?: string[];
	producer?: string[];
	composer?: string[];
	editor?: string[];
	presenter?: string[];
	commentator?: string[];
	guest?: string[];
};

export type Icon = {
	src: string;
	width?: number;
	height?: number;
};

export type EpisodeNumber = {
	system?: "onscreen" | "xmltv_ns";
	_value?: string;
};

export type Rating = {
	value: string;
	system?: string;
	icon?: Icon[];
};

export type Programme = {
	channel: string;
	title: string;
	start: DateString;
	stop: DateString;
	startStop: string;
	desc: string;
	category: string[];
	subTitle?: string[];
	credits?: Credits;
	icon?: Icon[];
	episodeNum?: EpisodeNumber[];
	rating?: Rating[];
};

export type Url = {
	_value: string;
	system?: string;
};

export type Channel = {
	id: string;
	displayName: string;
	icon: Icon[];
	url?: Url[];
};

export type EndpointData = {
	channels: Channel[];
	programmes: Programme[];
	date?: DateString;
	sourceInfoUrl: string;
	sourceInfoName: string;
	generatorInfoName: string;
	sourceDataUrl?: string;
	generatorInfoUrl: string;
};
