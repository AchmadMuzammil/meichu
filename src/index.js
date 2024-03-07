fetch('http://192.168.1.13:5000/user/products?offset=1')
    .then(response => response.json())
    .then(data => {
        const dataProducts = document.getElementById('dataProducts');

        const products = data.products

        // Loop through the data and create table rows
        products.forEach(item => {
            const row = document.createElement('tr');

            const rowData = `
            <div id="${item.productid}" data-aos="fade-up" data-aos-anchor-placement="top-center"
                class="max-w-sm b border-gray-200 rounded-lg shadow bg-bgPink dark:bg-gray-800 dark:border-gray-700 relative">
                <a href="#" class="block relative">
                    <span class="dark:bg-gray-800 bg-bgPink absolute top-0 left-0 cursor-default text-sm py-1 px-3 sm:px-7 sm:py-3 rounded-tl-lg text-mainPink font-bold font-rubikfont">${item.category}</span>
                    <div class="image-container rounded-t-lg overflow-hidden" style="height: 300px;">
                        <img style="width: 100%; height: 100%; object-fit: cover;" src="${item.image}" alt="" />
                    </div>
                </a>
                <div class="p-5">
                    <div class="flex justify-between">
                        <h5 class="font-rubikfont leading-7 sm:mb-2 text-xl Rubik sm:text-2xl font-bold tracking-tight text-mainPink dark:text-mainPink">
                            ${item.title}
                        </h5>
                        <h2 class="sm:mb-2 font-rubikfont text-xl sm:text-2xl font-bold tracking-tight text-mainPink dark:text-mainPink">
                            $ ${item.price}
                        </h2>
                    </div>
                    <p class="text-xs font-medium font-displayfont dark:opacity-80 sm:block mb-3 text-secondaryPink dark:text-secondaryPink">
                        ${item.description}
                    </p>
                    <div class="flex justify-start pt-3">
                    <button
                    class="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-2xl text-sm font-medium text-white bg-gradient-to-l bg-mainPink text-MainPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainPink"
                  >
                  See Detail
                  </button>
                  
                    </div>
                </div>
            </div>
  
            `;

            row.innerHTML = rowData;
            dataProducts.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


fetch('http://192.168.1.13:5000/user/carrousels')
    .then(response => response.json())
    .then(data => {
        const dataCarrousel = document.getElementById('dataCarrousel');

        const carrousels = data.carrousels

        // Loop through the data and create table rows
        carrousels.forEach(item => {
            const row = document.createElement('tr');

            const rowData = `
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="${item.image}"
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    <div class="absolute inset-x-[15%] pt-24 hidden text-start text-white md:block">
                        <h2 class="font-bold mb-1 text-4xl font-rubikfont">${item.title}</h2>
                        <h5 class="font-semibold mb-4 text-xl font-rubikfont">By: ${item.creator_name}</h5>
                        <p class="leading-7 font-medium font-displayfont text-[21px] mb-4">${item.description}
                        </p>
                    </div>
                </div>
            `;

            row.innerHTML = rowData;
            dataCarrousel.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


const itemsPerPage = 5;
let currentPage = 1;
let numPages;

// Function to fetch data from backend and display it
function fetchDataAndDisplay(page) {
    fetch(`http://192.168.1.13:5000/user/products?offset=${page}`)
        .then(response => response.json())
        .then(data => {
            const dataProducts = document.getElementById('dataProducts');
            dataProducts.innerHTML = ''; // Clear existing data

            const products = data.products;
            const totalPages = data.totalPages;

            // Loop through the data and create table rows
            products.forEach(item => {
                const row = document.createElement('div');
                row.classList.add('product');

                const rowData = `
                <div id="${item.productid}" data-aos="fade-up" data-aos-anchor-placement="top-center"
                class="max-w-sm b border-gray-200 rounded-lg shadow bg-bgPink dark:bg-gray-800 dark:border-gray-700 relative">
                <a href="#" class="block relative">
                    <span class="dark:bg-gray-800 bg-bgPink absolute top-0 left-0 cursor-default text-sm py-1 px-3 sm:px-7 sm:py-3 rounded-tl-lg text-mainPink font-bold font-rubikfont">${item.category}</span>
                    <div class="image-container rounded-t-lg overflow-hidden" style="height: 300px;">
                        <img style="width: 100%; height: 100%; object-fit: cover;" src="${item.image}" alt="" />
                    </div>
                </a>
                <div class="p-5">
                    <div class="flex justify-between">
                        <h5 class="font-rubikfont leading-7 sm:mb-2 text-xl Rubik sm:text-2xl font-bold tracking-tight text-mainPink dark:text-mainPink">
                            ${item.title}
                        </h5>
                        <h2 class="sm:mb-2 font-rubikfont text-xl sm:text-2xl font-bold tracking-tight text-mainPink dark:text-mainPink">
                            $ ${item.price}
                        </h2>
                    </div>
                    <p class="text-xs font-medium font-displayfont dark:opacity-80 sm:block mb-3 text-secondaryPink dark:text-secondaryPink">
                        ${item.description}
                    </p>
                    <div class="flex justify-start pt-3">
                    <button
                    class="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-2xl text-sm font-medium text-white bg-gradient-to-l bg-mainPink text-MainPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainPink"
                  >
                  See Detail
                  </button>
                  
                    </div>
                </div>
            </div>
                `;

                row.innerHTML = rowData;
                dataProducts.appendChild(row);
            });

            // Calculate number of pages
            numPages = Math.ceil(products.length / itemsPerPage);

            // Display pagination
            setupPagination(totalPages);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayItems(page) {
    fetchDataAndDisplay(page);
}

function setupPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Clear existing pagination

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.textContent = i;
        li.addEventListener('click', function () {
            displayItems(i);
            currentPage = i;
            updateActivePagination();
        });
        pagination.appendChild(li);
    }
}

function updateActivePagination() {
    const current = document.querySelector('.pagination li.active');
    if (current) current.classList.remove('active');
    document.querySelectorAll('.pagination li')[currentPage - 1].classList.add('active');
}

function nextPage() {
    if (currentPage < numPages) {
        currentPage++;
        displayItems(currentPage);
        updateActivePagination();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayItems(currentPage);
        updateActivePagination();
    }
}

document.getElementById('prevButton').addEventListener('click', prevPage);
document.getElementById('nextButton').addEventListener('click', nextPage);

// Initial data fetch and display
displayItems(currentPage);


