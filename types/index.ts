export const PARTS = [
	'IOS',
	'ANDROID',
	'WEB',
	'NODE',
	'SPRING',
	'DESIGN',
	'PLAN',
] as const;
export const POSITIONS = [
	'회장',
	'부회장',
	'운영진',
	'파트장',
	'챌린저',
] as const;
export const GENDERS = ['M', 'W'] as const;

export type Part = (typeof PARTS)[number];
export type Position = (typeof POSITIONS)[number];
export type Gender = (typeof GENDERS)[number];

export interface Member {
	id: number;
	year: number;
	nickname: string;
	name: string;
	part: Part;
	position: Position;
	github: string | null;
	sex: Gender;
	project: string | null;
	image?: string;
}

export interface Project {
	id: number;
	name: string;
	description: string;
	theme?: Part[];
	github: string | null;
	year: number;
	member: string[];
	stack: string[];
	img?: string;
	release: string | null;
}
