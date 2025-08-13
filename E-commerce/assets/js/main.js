// Deals timer countdown (example: 4 days, 13 hours, 34 min, 56 sec from now)
document.addEventListener('DOMContentLoaded', function () {
    // Set the end time (change as needed)
    const endTime = new Date();
    endTime.setDate(endTime.getDate() + 4);
    endTime.setHours(endTime.getHours() + 13);
    endTime.setMinutes(endTime.getMinutes() + 34);
    endTime.setSeconds(endTime.getSeconds() + 56);

    function updateTimer() {
        const now = new Date();
        let diff = Math.max(0, endTime - now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);
        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);
        const minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);
        const seconds = Math.floor(diff / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);

    // Search bar form prevent default
    const searchForm = document.querySelector('.search-bar-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Search feature is a demo!');
        });
    }

    // Quote form
    const quoteForm = document.querySelector('.quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Your inquiry has been sent to suppliers!');
            quoteForm.reset();
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
});
// Product Listing Page Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Collapsible filter sections
    const filterHeaders = document.querySelectorAll('.filter-header');
    filterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.parentElement;
            const content = section.querySelector('.filter-list, .checkbox-group, .radio-group, .price-range');
            const icon = this.querySelector('.collapse-icon');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                icon.textContent = '▲';
            } else {
                content.style.display = 'none';
                icon.textContent = '▼';
            }
        });
    });

    // Price range slider functionality
    const rangeMin = document.querySelector('.range-min');
    const rangeMax = document.querySelector('.range-max');
    
    if (rangeMin && rangeMax) {
        rangeMin.addEventListener('input', function() {
            const minVal = parseInt(this.value);
            const maxVal = parseInt(rangeMax.value);
            
            if (minVal > maxVal) {
                rangeMax.value = minVal;
            }
        });
        
        rangeMax.addEventListener('input', function() {
            const maxVal = parseInt(this.value);
            const minVal = parseInt(rangeMin.value);
            
            if (maxVal < minVal) {
                rangeMin.value = maxVal;
            }
        });
    }

    // View toggle functionality
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Wishlist functionality
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.color = this.style.color === 'red' ? '#3bb3f6' : 'red';
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Filter functionality
    const filterInputs = document.querySelectorAll('.filters-sidebar input');
    filterInputs.forEach(input => {
        input.addEventListener('change', function() {
            console.log('Filter applied:', this.type, this.checked);
            // Add your filter logic here
        });
    });

    // Pagination functionality
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                paginationBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});
// Enhanced Price Range Slider
document.addEventListener('DOMContentLoaded', function () {
    const rangeMin = document.getElementById('range-min');
    const rangeMax = document.getElementById('range-max');
    const rangeTrack = document.querySelector('.range-track');
    
    if (rangeMin && rangeMax && rangeTrack) {
        function updateRangeTrack() {
            const minVal = parseInt(rangeMin.value);
            const maxVal = parseInt(rangeMax.value);
            const minPercent = (minVal / 1000000) * 100;
            const maxPercent = (maxVal / 1000000) * 100;
            
            rangeTrack.style.left = minPercent + '%';
            rangeTrack.style.width = (maxPercent - minPercent) + '%';
        }
        
        rangeMin.addEventListener('input', function() {
            const minVal = parseInt(this.value);
            const maxVal = parseInt(rangeMax.value);
            
            if (minVal > maxVal) {
                rangeMax.value = minVal;
            }
            updateRangeTrack();
        });
        
        rangeMax.addEventListener('input', function() {
            const maxVal = parseInt(this.value);
            const minVal = parseInt(rangeMin.value);
            
            if (maxVal < minVal) {
                rangeMin.value = maxVal;
            }
            updateRangeTrack();
        });
        
        // Initialize the track
        updateRangeTrack();
    }
});
// Grid View and List View Switching
document.addEventListener('DOMContentLoaded', function () {
    // View toggle functionality
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Collapsible filter sections
    const filterHeaders = document.querySelectorAll('.filter-header');
    filterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.parentElement;
            const content = section.querySelector('.filter-list, .checkbox-group, .radio-group, .price-range');
            const icon = this.querySelector('.collapse-icon');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                icon.textContent = '▲';
            } else {
                content.style.display = 'none';
                icon.textContent = '▼';
            }
        });
    });

    // Remove filter tags
    const removeFilterBtns = document.querySelectorAll('.remove-filter');
    removeFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filterTag = this.parentElement;
            filterTag.remove();
        });
    });

    // Clear all filters
    const clearAllFilters = document.querySelector('.clear-all-filters');
    if (clearAllFilters) {
        clearAllFilters.addEventListener('click', function(e) {
            e.preventDefault();
            const filterTags = document.querySelectorAll('.filter-tag');
            filterTags.forEach(tag => tag.remove());
        });
    }

    // Enhanced Price Range Slider
    const rangeMin = document.getElementById('range-min');
    const rangeMax = document.getElementById('range-max');
    const rangeTrack = document.querySelector('.range-track');
    
    if (rangeMin && rangeMax && rangeTrack) {
        function updateRangeTrack() {
            const minVal = parseInt(rangeMin.value);
            const maxVal = parseInt(rangeMax.value);
            const minPercent = (minVal / 1000000) * 100;
            const maxPercent = (maxVal / 1000000) * 100;
            
            rangeTrack.style.left = minPercent + '%';
            rangeTrack.style.width = (maxPercent - minPercent) + '%';
        }
        
        rangeMin.addEventListener('input', function() {
            const minVal = parseInt(this.value);
            const maxVal = parseInt(rangeMax.value);
            
            if (minVal > maxVal) {
                rangeMax.value = minVal;
            }
            updateRangeTrack();
        });
        
        rangeMax.addEventListener('input', function() {
            const maxVal = parseInt(this.value);
            const minVal = parseInt(rangeMin.value);
            
            if (maxVal < minVal) {
                rangeMin.value = maxVal;
            }
            updateRangeTrack();
        });
        
        // Initialize the track
        updateRangeTrack();
    }

    // Wishlist functionality
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.color = this.style.color === 'red' ? '#3bb3f6' : 'red';
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Filter functionality
    const filterInputs = document.querySelectorAll('.filters-sidebar input');
    filterInputs.forEach(input => {
        input.addEventListener('change', function() {
            console.log('Filter applied:', this.type, this.checked);
            // Add your filter logic here
        });
    });

    // Pagination functionality
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                paginationBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});

// === CART FUNCTIONALITY ===
document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('.cart-main')) return; // Only run on cart.html

    // Helper: Show notification
    function showNotification(msg) {
        let notif = document.createElement('div');
        notif.className = 'notification';
        notif.style.position = 'fixed';
        notif.style.top = '24px';
        notif.style.right = '24px';
        notif.style.background = '#2563eb';
        notif.style.color = '#fff';
        notif.style.padding = '12px 24px';
        notif.style.borderRadius = '6px';
        notif.style.zIndex = 9999;
        notif.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        notif.textContent = msg;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 1800);
    }

    // Remove single cart item
    document.querySelectorAll('.remove-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const cartItem = this.closest('.cart-item');
            cartItem.remove();
            updateCartSummary();
            showNotification('Item removed from cart');
        });
    });

    // Remove all items
    const removeAllBtn = document.querySelector('.remove-all');
    if (removeAllBtn) {
        removeAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.cart-item').forEach(item => item.remove());
            updateCartSummary();
            showNotification('All items removed from cart');
        });
    }

    // Update quantity
    document.querySelectorAll('.item-quantity select').forEach(select => {
        select.addEventListener('change', function() {
            updateCartSummary();
            showNotification('Quantity updated');
        });
    });

    // Update cart summary (subtotal, total, etc.)
    function updateCartSummary() {
        let subtotal = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.item-price .price').textContent.replace(/[^\d.]/g, ''));
            const qty = parseInt(item.querySelector('.item-quantity select').value);
            subtotal += price * qty;
        });
        // Example: fixed discount and tax for demo
        let discount = subtotal > 0 ? 60 : 0;
        let tax = subtotal > 0 ? 14 : 0;
        let total = subtotal - discount + tax;
        document.querySelector('.price-row:nth-child(1) span:last-child').textContent = `$${subtotal.toFixed(2)}`;
        document.querySelector('.price-row.discount span:last-child').textContent = `-$${discount.toFixed(2)}`;
        document.querySelector('.price-row.tax span:last-child').textContent = `+$${tax.toFixed(2)}`;
        document.querySelector('.price-row.total span:last-child').textContent = `$${total.toFixed(2)}`;
        // Update cart count in header if present
        const cartCount = document.querySelector('.icon-item .cart-count');
        if (cartCount) {
            let count = 0;
            document.querySelectorAll('.cart-item').forEach(item => {
                count += parseInt(item.querySelector('.item-quantity select').value);
            });
            cartCount.setAttribute('data-count', count);
        }
    }

    // Initial summary update
    updateCartSummary();
});

// === WISHLIST FUNCTIONALITY ===
document.addEventListener('DOMContentLoaded', function () {
    // Helper: Show notification (reuse from cart)
    function showNotification(msg) {
        let notif = document.createElement('div');
        notif.className = 'notification';
        notif.style.position = 'fixed';
        notif.style.top = '24px';
        notif.style.right = '24px';
        notif.style.background = '#ff8c1a';
        notif.style.color = '#fff';
        notif.style.padding = '12px 24px';
        notif.style.borderRadius = '6px';
        notif.style.zIndex = 9999;
        notif.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        notif.textContent = msg;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 1800);
    }

    // Get wishlist from localStorage
    function getWishlist() {
        return JSON.parse(localStorage.getItem('wishlist') || '[]');
    }
    function setWishlist(arr) {
        localStorage.setItem('wishlist', JSON.stringify(arr));
    }
    // Get product ID from card (use image src+title as fallback ID)
    function getProductId(card) {
        const img = card.querySelector('img');
        const title = card.querySelector('h3');
        return img ? (img.src + (title ? title.textContent : '')) : '';
    }

    // Update all wishlist buttons on page
    function updateWishlistButtons() {
        const wishlist = getWishlist();
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            const card = btn.closest('.product-card, .product-card-grid');
            const pid = getProductId(card);
            if (wishlist.includes(pid)) {
                btn.classList.add('wishlisted');
                btn.style.color = 'red';
                btn.title = 'Remove from wishlist';
            } else {
                btn.classList.remove('wishlisted');
                btn.style.color = '#3bb3f6';
                btn.title = 'Add to wishlist';
            }
        });
    }

    // Wishlist button click
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = btn.closest('.product-card, .product-card-grid');
            const pid = getProductId(card);
            let wishlist = getWishlist();
            if (wishlist.includes(pid)) {
                wishlist = wishlist.filter(id => id !== pid);
                setWishlist(wishlist);
                showNotification('Removed from wishlist');
            } else {
                wishlist.push(pid);
                setWishlist(wishlist);
                showNotification('Added to wishlist');
            }
            updateWishlistButtons();
        });
    });

    updateWishlistButtons();
});

// === HEADER CART ICON INTERACTIVITY ===
document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.getElementById('cartIcon');
  if (cartIcon) {
    cartIcon.addEventListener('click', function () {
      window.location.href = 'cart.html';
    });
  }
});
