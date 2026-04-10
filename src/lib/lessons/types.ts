export interface LessonSection {
	title: string;
	content: string;
	verse?: string;
	verseRef?: string;
	image?: string;
}

export interface LessonSource {
	provider: string;
	series: string;
	lessonNumber: number;
	titleEn: string;
	url: string;
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
	source?: LessonSource;
}
