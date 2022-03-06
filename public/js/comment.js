const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment_content = document.querySelector('#comment').value;
    const post_id = parseInt(document.querySelector('#post_id').value);

    if (comment_content) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                comment_content,
                post_id
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
           
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);