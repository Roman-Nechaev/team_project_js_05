export const newsMarkup = (newsData) => {

    newsData.map(oneNewItem => {
           const {
    id, //data-id="${id}"
    media,
    section, //category
    abstract,//description
    title,//title
    published_date,
    url,//Read more
   } = oneNewItem
        
        //media це масив з обєктами
        const alt = media[0].caption //-----те що піде в атрибут альт
        const img = media[0]['media-metadata'][2].url//------ссилка на картинку
    })
    //
}



// Властивість медіа приходить в такому вигляді
// "media": [
            //     {
            //         "type": "image",
            //         "subtype": "photo",
            //         "caption": "Mayor Lori Lightfoot of Chicago walking with supporters the morning of the election.",
            //         "copyright": "Jamie Kelter Davis for The New York Times",
            //         "approved_for_syndication": 1,
            //         "media-metadata": [
            //             {
            //                 "url": "https://static01.nyt.com/images/2023/02/28/multimedia/28NAT-CHICAGO-ELECTION-lightfoot-top-pfbw/28NAT-CHICAGO-ELECTION-lightfoot-top-pfbw-thumbStandard.jpg",
            //                 "format": "Standard Thumbnail",
            //                 "height": 75,
            //                 "width": 75
            //             },
            //             {
            //                 "url": "https://static01.nyt.com/images/2023/02/28/multimedia/28NAT-CHICAGO-ELECTION-lightfoot-top-pfbw/28NAT-CHICAGO-ELECTION-lightfoot-top-pfbw-mediumThreeByTwo210.jpg",
            //                 "format": "mediumThreeByTwo210",
            //                 "height": 140,
            //                 "width": 210
            //             },
            //             {
            //                 "url": "https://static01.nyt.com/images/2023/02/28/multimedia/28NAT-CHICAGO-ELECTION-lightfoot-top-pfbw/28NAT-CHICAGO-ELECTION-lightfoot-top-pfbw-mediumThreeByTwo440.jpg",
            //                 "format": "mediumThreeByTwo440",
            //                 "height": 293,
            //                 "width": 440
            //             }
            //         ]
            //     }
            // ],