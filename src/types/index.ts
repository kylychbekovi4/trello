export interface newData {
	title: string;
	password: string;
	userProfile: string;
}

export interface trelloCard {
	title: string;
	password: string;
	userProfile: string;
}

export interface card {
	card: trelloCard[];
}

export interface RequestsProps {
	_id?: number;
	title: string;
	name?: string;
	values: [
		{
			_id: number;
			title: string;
		}
	];
}

export interface updatedValues {
	_id: number;
	title: string;
}

export interface TrelloCards {
	_id?: number;
	name: string;
	values: updatedValues[];
}

export interface PostProps {
	name: string;
	values: never[];
}
