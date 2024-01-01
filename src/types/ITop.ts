export interface ITop {
    id: string;
    imageURL: string;
    title: string;
    content: string;
    subtitleSpans: { backgroundColor: string }[];
    badgeText?: string;
}
