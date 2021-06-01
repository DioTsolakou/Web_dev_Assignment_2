function editBook(workid)
{
    let newTitle = document.getElementById("title").value;
    let newAuthor = document.getElementById("author").value;
    let newReview = document.getElementById("review").value;

    fetch(`/edit/${workid}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            updatedWork: {
                title: newTitle,
                id: workid,
                author: newAuthor,
                review: newReview
            }
        })
    })
    .then((res) => res.json())
    .then(data => {
        console.log(data.errValue);
        if (data.errValue == "-1")
        {
            window.alert("There was a problem updating this book.")
        }
        else window.location.href = "/favs"
    });
}