function editFav(workid)
{
    window.location.href = `/edit/${workid}`;
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
            //document.getElementById("favs_amount").innerHTML = Handlebars.compile("You have {{favs.length}}");
        }
    });
}

function keyUpDelay()
{
    let timer = 0;
    clearTimeout(timer);
    timer = setTimeout(() => {
        filterFav();
    }, 500);
}

function filterFav()
{
    let filterInput = (document.getElementById("filterBar").value).toUpperCase();
    let topDiv = document.getElementById("books_faved");
    let innerDiv = topDiv.getElementsByClassName("book_container");
    
    for (i = 0; i < innerDiv.length; i++)
    {
        let title = innerDiv[i].querySelector("#title p").innerHTML;
        let author = innerDiv[i].querySelector("#author p").innerHTML;

        if ((title.toUpperCase().indexOf(filterInput) > -1) || author.toUpperCase().indexOf(filterInput) > -1)
        {
            innerDiv[i].style.display = "";
        }
        else innerDiv[i].style.display = "none";
    }
}

function showReview(workid)
{
    let book_container_id = "book_container_" + workid;
    let reviewContent = document.getElementById(book_container_id).querySelector("#review_p").innerHTML;

    if (reviewContent == null || reviewContent == "")
    {
        window.alert("You haven't written a review for this book.");
        return;
    }

    let modal = document.getElementById(book_container_id).querySelector("#modal");
    let showBtn = document.getElementById(book_container_id).querySelector("#showBtn");
    let closeModalBtn = document.getElementById(book_container_id).querySelector("#close");

    showBtn.onclick = () => {
        modal.style.display = "block";
    }

    closeModalBtn.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
}