var jsonfile = require('jsonfile');

var file = 'datax.json';

const scrapeIt = require("scrape-it");

var i = 1;

function q(i) {
    if(i <= 20)
    {
        var fs = require("fs");

    scrapeIt("http://www.imdb.com/search/title?groups=top_1000&sort=user_rating&view=simple&page=" + i + "&ref_=adv_nxt", {

        articles: {
            listItem: ".lister-item",
            data: {

                title: "span > span:nth-child(2) > a",

                rating: ".col-imdb-rating > strong",
                year: ".text-muted",
                ranking: ".text-primary",

            }
        }
    }, (err, page) => {
        jsonfile.writeFile(file, page, { spaces: 2 }, function (err) {
            console.error(err)
        })
    });
    setTimeout(q(),3000);
    i++;
    }
    
}