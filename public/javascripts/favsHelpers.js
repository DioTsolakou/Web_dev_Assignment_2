let filterBtn = document.getElementById("filterBtn");

function editFav(workid)
{
    window.location.href = `edit/${workid}`;
}

function deleteFav(workid)
{
    if (!window.confirm("Are you sure you want to delete this book from your favourites?"))
    {
        return;
    }

    let book_container_id = "book_container_" + workid;
    let binIcon = document.getElementById(book_container_id).querySelector("#bin_icon_img");

    fetch('/favs', {
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
            document.getElementById(book_container_id).style.display = "none";
            //document.getElementById("favs_amount").innerHTML = "";
        }
    })
}