document.addEventListener('DOMContentLoaded', () => {
    const requestButton = document.getElementById('requestButton');
    const loading = document.getElementById('loading');
    const responseContainer = document.getElementById('responseContainer');

    let loadingInterval;

    function startLoadingAnimation() {
        loading.classList.remove('hidden');
        let dots = 0;
        loadingInterval = setInterval(() => {
            dots = (dots + 1) % 4;
            loading.innerText = 'Loading' + ' .'.repeat(dots);
        }, 500);
    }

    function stopLoadingAnimation() {
        loading.classList.add('hidden');
        clearInterval(loadingInterval);
    }

    function handleRequest() {
        startLoadingAnimation();
        responseContainer.innerText = ''; // Clear previous response

        // Replace 'http://localhost:3333/ask2/' with your actual API endpoint
        const apiUrl = 'http://localhost:3333/ask2/';

        axios.get(apiUrl)
            .then(response => {
                // Handle the data as needed
                const data = response.data;
                responseContainer.innerText = data.content;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                responseContainer.innerText = 'Error fetching data';
            })
            .finally(() => {
                stopLoadingAnimation();
            });
    }

    // Attach the handleRequest function to the button click event
    requestButton.addEventListener('click', handleRequest);
});
