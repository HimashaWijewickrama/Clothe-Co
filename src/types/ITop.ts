export interface ITop {
    id: string;
    imageURL: string;
    title: string;
    content: string;
    subtitleSpans?: { backgroundColor: string }[];
    badgeText?: string;
    header?: string;
    featureImage?: string;
    item?: string;
    body1?: string;
    body2?: string;
    body3?: string;
    body4?: string;
    other?: { backgroundColor: string }[];
}
