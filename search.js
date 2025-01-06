let results = [
  {
    id: 1,
    name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit', 
    price: 500.00,
    image: './public/images/toys.jpg',
    rating: 4.8,
    buyer_count: 10
  },
  {
    id: 2,
    name: 'Cupiditate quas velit magni nobis assumenda', 
    price: 500.00,
    image: './public/images/books.jpeg',
    rating: 4.8,
    buyer_count: 10
  },
  {
    id: 3,
    name: ' aspernatur alias et aliquam, totam voluptatibus neque officiis', 
    price: 500.00,
    image: './public/images/cars.webp',
    rating: 4.8,
    buyer_count: 10
  },
  {
    id: 4,
    name: 'in voluptates vero modi nihil tenetur error sequi', 
    price: 500.00,
    image: './public/images/toys.jpg',
    rating: 4.8,
    buyer_count: 10
  },
];

function renderResults() {
  const resultsContainer = document.getElementById('results');
  
  resultsContainer.innerHTML = '';
  
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <li class="text-center py-8 text-gray-500">
        We can't find what you're looking for. Try another search term.
      </li>
    `;
    return;
  }
  
  results.forEach(item => {
    const resultItem = document.createElement('li');
    resultItem.id = `result_item_${item.id}`;
    resultItem.className = 'border border-primary rounded-md p-2';
    
    // Generate stars based on rating
    const fullStars = Math.floor(item.rating);
    const hasHalfStar = item.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<img src="/public/icons/orange-star.svg" class="w-5 h-5" alt="Full Star" />';
    }
    
    // Add half star 
    if (hasHalfStar) {
      starsHTML += '<img src="/public/icons/half-star.svg" class="w-5 h-5" alt="Half Star" />';
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<img src="/public/icons/gray-star.svg" class="w-5 h-5" alt="Empty Star" />';
    }
    
    resultItem.innerHTML = `
      <img id="item_image" src="${item.image}" class="w-full aspect-[4/3] object-cover rounded-sm" alt="${item.name}">
        <div class="mt-4">
          <h3 id="item_name" class="text-xl font-medium text-ellipsis line-clamp-2">${item.name}</h3>
          <p class="font-medium text-lg">$999.99 <span class="line-through text-gray-500 font-normal text-sm">$${item.price.toFixed(2)}</span></p>
          <div class="flex gap-0 items-center">
            ${starsHTML}
            <p class="ml-2">(${item.buyer_count})</p>
          </div>
          <button class="py-2 flex w-full text-white bg-primary justify-center rounded-sm mt-4">Add to Cart</button>
        </div>
    `;
    
    resultsContainer.appendChild(resultItem);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search_form');
  
  if (!form) {
    console.error('Could not find form with id "search_form"');
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderResults();
  });
});