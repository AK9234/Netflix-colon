
    fetch('https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=movie')
        .then(response => response.json())
        .then(data => {
            const movieContainer = document.querySelector('.video-container');
            data.Search.forEach(movie => {
                let videoDiv = document.createElement('div');
                videoDiv.classList.add('video');
                videoDiv.innerHTML = `
                    <video width="320" height="250" controls>
                        <source src="${movie.Poster}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
                movieContainer.appendChild(videoDiv);
            });
        });

