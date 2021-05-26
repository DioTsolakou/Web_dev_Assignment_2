const url = 'https://reststop.randomhouse.com/resources/works?search=';
let searchBtn = document.getElementById("searchBtn");
let favIcon = document.getElementById("fav_icon_img");

searchBtn.addEventListener('click', getResults);

let favList = new FavoritesList();

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
        .then(handleData)
        .catch(handleError);
}

function addFav(workid)
{
    let bookToadd = new book();
    if (favList.favoritesList.has())
    favIcon.src = "images/";

    // might need fetch to POST
}


const handleData = (data) =>
{
    let div_books = document.getElementById("books_found");
            console.log(data);
            div_books.style.display = "block";
            let results = {};
            results.works = Handlebars.compile(
                `{{#each work}}
                    <div id="book_container">
                        <div id="title">
                            <p>Title : {{titleweb}}</p>
                        </div>
                        <div id="book_id">
                            <p>Book ID : {{workid}}</p>
                        </div>
                        <div id="author">
                            <p>Written by :{{authorweb}}</p>
                        </div>
                        <div id="release">
                            <p>Release date : {{onsaledate}}</p>
                        </div>
                        <div id="fav_icon_div">
                            <img id="fav_icon_img" src="/images/empty_star.webp" width="48" height="48" onclick="addFav({{workid}})">
                        </div>
                    </div>
                {{/each}}`);
            let content = results.works(data);
            div_books.innerHTML = content;
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