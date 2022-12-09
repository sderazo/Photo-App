function addNewComment(data){

}

document.getElementById('comment-button')
    .addEventListener('click', function(ev){
        let commentTextElement = document.getElementById('comment-text');
        let commentText = commentTextElement.value;
        let postId = ev.currentTarget.dataset.postid;

        if(!commentText) return;

        fetch("/comments/create", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                comment: commentText,
                postId: postId
            })
        })
        .then(response => response.json())
        .then(res_json => {
            console.log(res_json);
        })
        .catch(err => console.log(err));
    })