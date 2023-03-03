import { loadPopularData } from './js/loadPopularNews/loadPopularNews';

const transformPublishedDate=(pubslishedDate)=>+pubslishedDate.split('-').join('')

export function filterNewsByData(selectedDate) {
    loadPopularData().then(data => {
        return data.filter(({ published_date }) => {
           return transformPublishedDate(published_date) === selectedDate
        })
    })
}
