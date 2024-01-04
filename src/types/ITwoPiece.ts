export interface ITwoPiece {
    id: string;
    imageURL: string;
    title: string;
    content: string;
    subtitleSpans?: { backgroundColor: string }[];
    badgeText?: string;
}
