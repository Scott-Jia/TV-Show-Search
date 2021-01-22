
// const form = document.querySelector('#searchForm');

// form.addEventListener('submit', async function(e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
//     console.log(res.data[0].show.image.medium);
//     const img = document.createElement('IMG');
//     img.src = res.data[0].show.image.medium;
//     document.body.append(img);
// })

//make http request via API
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    //extract searchTerm from form
    const searchTerm = form.elements.query.value;
    //make query string object with params property
    const config = {params: {q: searchTerm} }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})

//create a bunch of images, append them to page
const makeImages = (shows) =>{
    for (let result of shows){
        if (result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}