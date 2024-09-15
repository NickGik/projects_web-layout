// const cardsPerPage = 9; 
// const cards = document.querySelectorAll('.catalog__goods__article');
// const pagination = document.querySelector('.catalog__pagination-goods');
// const totalPages = Math.ceil(cards.length / cardsPerPage);

// function displayCards(pageNumber) {
//     const startIndex = (pageNumber - 1) * cardsPerPage;
//     const endIndex = startIndex + cardsPerPage;

//     cards.forEach((card, index) => {
//         if (index >= startIndex && index < endIndex) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }

// function createPaginationButtons() {
//     const pagination = document.querySelector('.catalog__pagination-goods'); 

//     if (!pagination) {
//         console.error("Pagination element not found");
//         return;
//     }

//     pagination.innerHTML = '';

//     for (let i = 1; i <= totalPages; i++) {
//         const pageLink = document.createElement("a");
//         pageLink.className = "catalog__pagination-goods__btn";
//         pageLink.href = "#";
//         pageLink.textContent = i;
//         pageLink.addEventListener("click", () => {
//             displayCards(i);
//             updateActiveButton(pageLink); 
//         });
//         if (i === 1) {
//             pageLink.classList.add("active");
//         }     
        
//         pagination.appendChild(pageLink);
//     }
// }

// function updateActiveButton(clickedButton) {
//     const allPageLinks = document.querySelectorAll('.catalog__pagination-goods__btn');
//     allPageLinks.forEach(link => link.classList.remove('active'));
//     clickedButton.classList.add("active");
// }


// createPaginationButtons();
// displayCards(1);




const cardsPerPageLarge = 9; // 3 ряда по 3 карточки
const cardsPerPageSmall = 6; // 2 ряда по 3 карточки
let currentPage = 1;

const cards = document.querySelectorAll('.goods-article');
const pagination = document.querySelector('.goods-pagination');

function displayCards(pageNumber) {
    const cardsPerPage = window.innerWidth <= 992 ? cardsPerPageSmall : cardsPerPageLarge;
    const startIndex = (pageNumber - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function createPaginationButtons() {
    if (!pagination) {
        console.error("Pagination element not found");
        return;
    }

    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages(); i++) {
        const pageLink = document.createElement("a");
        pageLink.className = "goods-pagination__btn";
        pageLink.href = "#";
        pageLink.textContent = i;
        pageLink.addEventListener("click", () => {
            currentPage = i;
            displayCards(currentPage);
            updateActiveButton(pageLink);
        });
        if (i === 1) {
            pageLink.classList.add("active");
        }

        pagination.appendChild(pageLink);
    }
}

function updateActiveButton(clickedButton) {
    const allPageLinks = document.querySelectorAll('.goods-pagination__btn');
    allPageLinks.forEach(link => link.classList.remove('active'));
    clickedButton.classList.add("active");
}

function totalPages() {
    const cardsPerPage = window.innerWidth <= 992 ? cardsPerPageSmall : cardsPerPageLarge;
    return Math.ceil(cards.length / cardsPerPage);
}

window.addEventListener('resize', () => {
    const newTotalPages = totalPages();
    if (currentPage > newTotalPages) {
        currentPage = newTotalPages;
    }
    createPaginationButtons();
    displayCards(currentPage);
});

createPaginationButtons();
displayCards(currentPage);

