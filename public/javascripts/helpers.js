const url = 'https://reststop.randomhouse.com/resources/works?search=';
let searchBtn = document.getElementById("searchBtn");

function getResults()
{
    let query = document.getElementById("searchBar").value;
    fetch(url + query, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            let div_books = document.getElementById("books_found");
            console.log(data);
            div_books.style.display = "block";
            /* data.forEach(work => {
                works += `
                <p>A total of ${data.length} books were found</p>
                <div id="book_container">
                    <div id="title">
                        <p>Title : ${work.titleweb}</p>
                    </div>
                    <div id="book_id">
                        <p>Book ID : ${work.workid}</p>
                    </div>
                    <div id="author">
                        <p>Written by : ${work.authorweb}</p>
                    </div>
                    <div id="release">
                        <p>Release date : ${work.onsaledate}</p>
                    </div>
                </div>`;
            }); */
            let results = {};
            results.works = Handlebars.compile('{{#each work}}<div id="book_container"><div id="title"><p>Title : {{titleweb}}</p></div><div id="book_id"><p>Book ID : {{workid}}</p></div><div id="author"><p>Written by :{{authorweb}}</p></div><div id="release"><p>Release date : {{onsaledate}}</p></div></div>{{/each}}');
            let content = results.works(data);
            div_books.innerHTML = content;
        })
        .catch(error => console.log(error));
}

searchBtn.addEventListener('click', getResults);

const handleData = (res) =>
{
    console.log(works);
    if (works)
    {
        let handledWorks =  works.map(work => mapWork(work));
        return handledWorks;
    }
};

const mapWork = (work) =>
{
    return{
        title : work.titleweb,
        author: work.authorweb,
        release: work.onsaledate,
        id: work.workid
    };
};

const handleError = (error) =>
{
    let errorMsg;
    if (error.response)
    {
        errorMsg = `The API responded with ${error.response.status} : ${error.data.error.message}`;
    }
    else if (error.request)
    {
        errorMsg = `The API did not respond`;
    }
    else
    {
        errorMsg = `Error on request`;
    }

    throw new Error(errorMsg);
};