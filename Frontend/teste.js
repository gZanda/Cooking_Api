document.addEventListener('DOMContentLoaded', () => {
    const requestButton = document.getElementById('requestButton');
    const loading = document.getElementById('loading');
    const responseContainer = document.getElementById('responseContainer');
    const registerButton = document.getElementById('registerButton');
    const requestButton2 = document.getElementById('requestButton2');

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

        // Replace 'http://localhost:3333/ask1/' with your actual API endpoint
        const apiUrl = 'http://localhost:3333/ask1/';

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

    function handleRequest2() {
        startLoadingAnimation();
        responseContainer.innerText = ''; // Clear previous response

        // Replace 'http://localhost:3333/ask1/' with your actual API endpoint
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

    function submitForm() {
        const foodName = document.getElementById('foodName').value;
        const foodAmount = document.getElementById('foodAmount').value;
        console.log(foodName, foodAmount);
    
        axios.post('http://localhost:3333/createFood/', {
            name: foodName,
            amount: foodAmount,
        })
        .then(response => {
            console.log('Success:', response.data);
            // You can do something here with the response if needed
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    // Attach the handleRequest function to the button click event
    requestButton.addEventListener('click', handleRequest);

    // Attach the submitForm function to the form submission event
    registerButton.addEventListener('click', submitForm);

    // Attach the handleRequest2 function to the button click event
    requestButton2.addEventListener('click', handleRequest2);
});
