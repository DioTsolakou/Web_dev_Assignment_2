const url = 'https://reststop.randomhouse.com/resources/works?search=';

async function getResults(query)
{
    await fetch(url + query)
        .then(handleData)
        .catch(handleError);
}

function handleData(res)
{
    let works = res.data.items;
    if (works)
    {
        return works.map(work => mapWork(work));
    }
}

function mapWork(work)
{
    return{
        title : work.titleweb,
        author: work.authorweb,
        release: work.onsaledate,
        id: work.workid
    };
}

function handleError(error)
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
}