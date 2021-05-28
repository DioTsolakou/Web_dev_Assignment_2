const url = 'https://reststop.randomhouse.com/resources/works?max=14&search=';
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener('click', getResults);

function getResults()
{
    let query = document.getElementById("searchBar").value;
    fetch(url + query, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((res) => res.json())
    .then(handleData)
    .catch(handleError);
}

function editFav(workid)
{
    // check with fetch if it already exists and call the appropriate function


}

/* function changeFavIcon(workid)
{
    // update favorite icon on load according to the database
    let book_container_id = "book_container_" + workid;
    let favIcon = document.getElementById(book_container_id).querySelector("#fav_icon_img");

    fetch
} */

function addFav(workid)
{
    let book_container_id = "book_container_" + workid;
    let favIcon = document.getElementById(book_container_id).querySelector("#fav_icon_img");
    favIcon.src = "images/full_star.png";

    // needs post to routes/data
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({action: 'add', id: workid})
    })
    .then((res) => res.json)
    .then(data => {
        if (data == -1)
        {
            window.alert("You have already added this book to your favorites.");
        }
    });
}


const handleData = (data) =>
{
    let div_books = document.getElementById("books_found");
    console.log(data);
    div_books.style.display = "inline-block";
    let results = {};
    results.works = Handlebars.compile(
        `{{#each work}}
            <span class="book_container" id="book_container_{{workid}}">
                <span id="title">
                    <p>Title :<br>{{titleweb}}</p>
                </span>
                <span id="book_id">
                    <p>Book ID :<br>{{workid}}</p>
                </span>
                <span id="author">
                    <p>Written by :<br>{{authorweb}}</p>
                </span>
                <span id="release">
                    <p>Release date :<br>{{onsaledate}}</p>
                </span>
                <img id="fav_icon_img" src="/images/empty_star.webp" width="48" height="48" onclick="addFav('{{workid}}')">
            </span>
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

function checkExists(workid)
{
    for (let i in favList.favoritesSet)
    {
        if (favList.favoritesSet[i].has == workid) return true;
    }
    return false;
}