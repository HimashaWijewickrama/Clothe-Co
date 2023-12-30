interface INewin {
    id: string;
    imageURL: string;
    title: string;
    content: string;
    subtitleSpans?: { backgroundColor: string }[];    // Add other properties as needed
    badgeText?: string;
    footer?:boolean;
}
const pantColor1 = [
    { backgroundColor: '#ffffff' },
    { backgroundColor: '#000000' },
    { backgroundColor: '#38419D' }
];
const pantColor2 = [
    { backgroundColor: '#FFC7C7' },
    { backgroundColor: '#FBA1B7' },
];
const pantColor3 = [
    { backgroundColor: '#a4c3de' },
    { backgroundColor: '#84aed3' },
    { backgroundColor: '#609cd0' },
    { backgroundColor: '#4482b8' },
    { backgroundColor: '#276499' },

];
const pantColor4 = [
    { backgroundColor: '#F875AA' },
    { backgroundColor: '#FBA1B7' },
];
const pantColor5 = [
    { backgroundColor: '#303030' },
    { backgroundColor: '#8E7F78' },
    { backgroundColor: '#ffffff' },

];
const pantColor6 = [
    { backgroundColor: '#97441A' },
    { backgroundColor: '#E14D2A' },
    { backgroundColor: '#142F43' },
];
const pantColor7 = [
    { backgroundColor: '#97441A' },
    { backgroundColor: '#E14D2A' },
    { backgroundColor: '#6C4826' },
];
const pantColor8 = [
    { backgroundColor: '#171C22' },
    { backgroundColor: '#384847' },
];
const pantColor9 = [
    { backgroundColor: '#ffffff' },

];
const pantColor10 = [
    { backgroundColor: '#AA9992' },
    { backgroundColor: '#ffffff' },
    { backgroundColor: '#0f1036' },
];
const pantColor11 = [
    { backgroundColor: '#a4c3de' },
    { backgroundColor: '#84aed3' },
    { backgroundColor: '#609cd0' },

];
const pantColor12 = [
    { backgroundColor: '#a4c3de' },
    { backgroundColor: '#84aed3' },
    { backgroundColor: '#609cd0' },
    { backgroundColor: '#4482b8' },
    { backgroundColor: '#3B5983' },
];

export const newinData: INewin[] = [
    {
        id: '1',
        imageURL: "https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "LKR 1,600.00",
        content: "Subtle Adjustable Gold Plated Ring",
        // subtitleSpans: pantColor1,
        badgeText:"New"
    },
    {
        id: '2',
        imageURL: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        title: 'LKR 2,990.00',
        content: "Andriana Women's Front Pockets Pant",
        subtitleSpans: pantColor2,
        badgeText:"New"
    },
    {
        id: '3',
        imageURL: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        title: 'LKR 3,599.00',
        content: "Harem Women's Vintage Denim Jeans",
        subtitleSpans: pantColor3,
        badgeText:"New"
    },
    {
        id: '4',
        imageURL: "https://images.pexels.com/photos/7203477/pexels-photo-7203477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: 'LKR 5,800.00',
        content: "Envogue Women's Office Jegging Pant",
        subtitleSpans: pantColor4,
        badgeText:"New"
    },
    {
        id: '5',
        imageURL: "https://sslimages.shoppersstop.com/sys-master/images/h29/hbb/29441780383774/FLWASCRGF294882_LIGHT_GREY.jpg_136Wx204H",
        title: 'LKR 3,799.00',
        content: "Andriana Women's Office Jegging Pant",
        subtitleSpans: pantColor5,
        badgeText:"New"
    },
    {
        id: '6',
        imageURL: "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        title: 'LKR 4,599.00',
        content: "Andriana Women's Casual Jegging Pant",
        subtitleSpans: pantColor6,
        badgeText:"New"
    },
    {
        id: '7',
        imageURL: "https://images.unsplash.com/photo-1519211777646-3a7ccf759b64?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: 'LKR 3,750.00',
        content: "Harem Women's Casual Jegging Pant",
        subtitleSpans: pantColor7,
        badgeText:"New"

    },
    {
        id: '8',
        imageURL: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        title: 'LKR 4,599.00',
        content: "SHEIN Teen Girl Ripped Raw Hem Skinny Jeans",
        subtitleSpans: pantColor8,
        badgeText:"New"
    },
    {
        id: '9',
        imageURL: "https://images.unsplash.com/photo-1602583459551-c0e623f7af36?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: 'LKR 3,890.00',
        content: "SHEIN printed white color Casual pant",
        subtitleSpans: pantColor9,
        badgeText:"New"
    },
    {
        id: '10',
        imageURL: "https://4.imimg.com/data4/MI/DF/MY-1863278/ladies-formal-trouser.jpg",
        title: 'LKR 3,999.00',
        content: "Envogue Women's Office Jegging Pant",
        subtitleSpans: pantColor10,
        badgeText:"New"

    },
    {
        id: '11',
        imageURL: "https://mypamperedlifeseattle.com/cdn/shop/files/18720300_5462b370-7dbb-4004-b626-5dc635aee7ec.jpg?v=1691043970&width=533",
        title: 'LKR 3,799.00',
        content: "SHEIN Teen girl high waisted ripped jean",
        subtitleSpans: pantColor11,
        badgeText:"New"
    },
    {
        id: '12',
        imageURL: "https://rukminim2.flixcart.com/image/850/1250/xif0q/jean/1/e/6/28-mid-blue-skg-original-imagzf9hzv8thead.jpeg?q=20",
        title: 'LKR 7,699.00',
        content: "SHEIN high waisted wide leg women's jean",
        subtitleSpans: pantColor12,
        badgeText:"New"
    }


];





