export interface LessonSection {
	title: string;
	content: string;
	verse?: string;
	verseRef?: string;
	image?: string;
}

export interface QuizQuestion {
	question: string;
	options: string[];
	correctIndex: number;
	explanation: string;
}

export interface Lesson {
	id: number;
	title: string;
	subtitle: string;
	icon: string;
	color: string;
	sections: LessonSection[];
	quiz: QuizQuestion[];
}
