var fs = require('fs');
const axios = require('axios');

let header = '<?xml version="1.0" encoding="UTF-8"?>'
let new_line = '\r\n'
let urlset_start = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
let urlset_end = '</sitemapindex>'
let urls = ''
let modified_start = '<lastmod>'
let modified =''
let modified_end = '</lastmod>'
let url_start = '<sitemap>'
let locstat = "<loc>"
let locend = '</loc>'
let urlend = '</sitemap>'


axios.get('https://getwebinc.com/api/wp-json/fr-all-url-api-route/v2/any-post-type/').then((data) => {
    data.data.forEach(element => {
        let url = 'https://getwebinc.com/' + element.title
        
        urls = urls + new_line + url_start + new_line + locstat +  url + locend + new_line + modified_start + element.modified + modified_end + new_line + urlend
    });
})
.then(() => {
        let final_str = header + new_line + urlset_start + new_line + urls + new_line + new_line + urlset_end
        fs.writeFile('./public/sitemap.xml', final_str, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    })
