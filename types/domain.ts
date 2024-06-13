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

export type { Projects };
