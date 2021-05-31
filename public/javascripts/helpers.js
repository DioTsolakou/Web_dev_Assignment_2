const url = 'https://reststop.randomhouse.com/resources/works?max=14&search=';
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener('click', getResults);

let tmpResultList = new Map();

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

function deleteFav(workid)
{
    if (!window.confirm("Are you sure you want to delete this book from your favorites?"))
    {
        return;
    }

    let book_container_id = "book_container_" + workid;
    let favIcon = document.getElementById(book_container_id).querySelector("#fav_icon_img");
    let binIcon = document.getElementById(book_container_id).querySelector("#bin_icon_img");

    fetch('/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({action: 'delete', id: workid})
    })
    .then((res) => res.json())
    .then(data => {
        console.log(data.errValue);
        if (data.errValue == "-1")
        {
            window.alert("There was a problem deleting this book.")
        }
        else
        {
            favIcon.src = "images/empty_star.webp";
            binIcon.style.display = "none";
        }
    })
}

function addFav(workid)
{
    let book_container_id = "book_container_" + workid;

    //console.log(tmpResultList.get(workid));

    let workTitle = tmpResultList.get(workid).titleweb;
    let workAuthor = tmpResultList.get(workid).authorweb;
    let workDate = tmpResultList.get(workid).onsaledate;

    let favIcon = document.getElementById(book_container_id).querySelector("#fav_icon_img");
    let binIcon = document.getElementById(book_container_id).querySelector("#bin_icon_img");

    fetch('/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({action: 'add', title: workTitle, id: workid, author: workAuthor, releaseDate: workDate})
    })
    .then((res) => res.json())
    .then(data => {
        console.log(data.errValue);
        if (data.errValue == "-1")
        {
            window.alert("You have already added this book to your favorites.");
        }
        favIcon.src = "images/full_star.png";
        binIcon.style.display = "inline-block";
    });
}

const handleData = (data) =>
{
    let div_books = document.getElementById("books_found");
    console.log(data);
    
    for (let i of data.work) tmpResultList.set(i.workid, i);

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
                <img id="bin_icon_img" style="display:none;" src="/images/bin_icon.png" width="48" height="48" onclick="deleteFav('{{workid}}')">
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