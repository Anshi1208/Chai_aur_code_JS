//--------Here is Day--11 task solution -------------------------
//----------------Activity-1(Understanding promises)----------------------
    
    const delayedMessage = new Promise((resolve, reject) => { //task-1
    setTimeout(() => {
        resolve("Hello, this message is displayed after a 2-second delay!");
    }, 2000);
    });
    delayedMessage.then(message => {
    console.log(message);
    });

    const delayedError = new Promise((resolve, reject) => { //task-2
    setTimeout(() => {
        reject(new Error("Oops, something went wrong after a 2-second delay!"));
    }, 2000);
    });
    delayedError.catch(error => {
    console.error(error.message);
    });

//--------------------Activity-2(Chaining promises)-----------------------

    function fetchData(delay, message) { //task-3
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(message);
        }, delay);
    });
    }
    fetchData(1000, "Fetching data from server 1...")
    .then((message) => {
        console.log(message);
        return fetchData(2000, "Fetching data from server 2...");
    })
    .then((message) => {
        console.log(message);
        return fetchData(1500, "Fetching data from server 3...");
    })
    .then((message) => {
        console.log(message);
        return fetchData(1000, "All data fetched!");
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });


//--------------------Activity-3(Using async/await)-----------------------
    function fetchData(delay, message) { //task-4
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(message);
        }, delay);
    });
    }
    async function logResolvedValue() {
    try {
        const message = await fetchData(2000, "Data fetched successfully!");
        console.log(message);
    } catch (error) {
        console.error("An error occurred:", error);
    }
    }
    logResolvedValue();


    
    function fetchDataWithError(delay, errorMessage) { //task-5
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        reject(new Error(errorMessage));
        }, delay);
    });
    }
    async function handleRejectedPromise() {
    try {
        const message = await fetchDataWithError(2000, "Failed to fetch data!");
        console.log(message);  
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
    }
    handleRejectedPromise();

//--------------------Activity-4(fetching data from an API)-----------------------
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; //task-6
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


    
    const apUrl = 'https://jsonplaceholder.typicode.com/posts/1'; //task-7
    async function fetchData() {
    try {
        const response = await fetch(apUrl);
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    }
    fetchData();

//--------------------Activity-5(Concurrent promises)-----------------------
        
    function fetchData(delay, id) { //task-8
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${id}`);
        }, delay);
        });
    }
    const server1 = fetchData(1000, "server 1");
    const server2 = fetchData(2000, "server 2");
    const server3 = fetchData(1500, "server 3");
    Promise.all([server1, server2, server3])
        .then((values) => {
        console.log("All promises resolved:");
        values.forEach((value, index) => {
            console.log(`Server ${index + 1}: ${value}`);
        });
        })
        .catch((error) => {
        console.error("An error occurred:", error);
        });
    
    
        
    function fetchData(delay, name) { //task-9
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Response from ${name}`);
        }, delay);
        });
    }
    const promiseA = fetchData(4000, "Service A");
    const promiseB = fetchData(2000, "Service B");
    const promiseC = fetchData(3000, "Service C");
    Promise.race([promiseA, promiseB, promiseC])
        .then((value) => {
        console.log("First promise resolved:", value);
        })
        .catch((error) => {
        console.error("An error occurred:", error);
        });
    