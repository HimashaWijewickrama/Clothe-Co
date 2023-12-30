export interface INewin {
    id: string;
    imageURL: string;
    title: string;
    content: string;
    subtitleSpans ?: { backgroundColor: string }[];
    badgeText?: string;
    showFooter?:boolean;
}
