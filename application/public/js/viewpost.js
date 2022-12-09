function addNewComment(data){
    let commentList = document.getElementById('comment-list');
    let newComment = document.createElement('template');
    newComment.innerHTML = `<div id="message-${data.commentId}" class="comment">
    <strong class="comment-author">${data.username}</strong>
    <span class="comment-date">${new Date().toLocaleString("en-US",{
        timeStyle:"long",
        dateStyle:"long"
    })}</span>
    <div class="comment-text">${data.comment}</div>
</div>`;
    commentList.append(newComment.content);
    document.getElementById(`message-${data.commentId}`).scrollIntoView();
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
            addNewComment(res_json.data);
        })
        .catch(err => console.log(err));
    })