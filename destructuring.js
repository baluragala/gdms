/*
let apiResponse = {"username": "baluragala", "url": "https://github.com/baluragala", "type1": "paid"};

let {username, url, type1:subscription='N/A'} = apiResponse;

console.log(username, url, subscription);

var metadata = {
    title: "Scratchpad",
    translations: [
        {
            locale: "de",
            localization_tags: [ ],
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung"
        },
        {
            locale: "en",
            localization_tags: [ ],
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript"
        }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

*/

let [ _, b, c, h] = [1, 2, 3, 4, 5, 6];

console.log(a, b, c, h);