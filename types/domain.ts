type Projects = {
	id: number;
	name: string;
	description: string;
	theme?: string[];
	github: string | null;
	year: number;
	member: string[];
	stack: string[];
	img: string | null;
	release: string | null;
};

type Member = {
	id: number;
	year: number;
	nickname: string;
	name: string;
	part: string;
	position: string;
	github: string | null;
	sex: string;
	project: string | null;
	skill: string[];
};

export type { Projects, Member };
