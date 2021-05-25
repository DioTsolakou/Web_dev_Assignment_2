const url = 'https://reststop.randomhouse.com/resources/works?search=';
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getResults);

function getResults()
{
    let query = document.getElementById("searchBar").value;
    console.log(query);
    fetch(url + query, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(handleError);
}

const handleData = (res) =>
{
    let works = res.json();
    console.log(works);
    if (works)
    {
        return works.map(work => mapWork(work));
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