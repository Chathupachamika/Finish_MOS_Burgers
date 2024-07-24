document.addEventListener("DOMContentLoaded", function() {

    const homeIcon = document.getElementById("homeIcon");
    const dashboardIcon = document.getElementById("dashboardIcon");
    const ordersIcon = document.getElementById("ordersIcon");
    const productsIcon = document.getElementById("productsIcon");
    const customersIcon = document.getElementById("customersIcon");
    
 
    homeIcon.addEventListener("click", () => loadPage("home"));
    dashboardIcon.addEventListener("click", () => loadPage("dashboard"));
    ordersIcon.addEventListener("click", () => loadPage("orders"));
    productsIcon.addEventListener("click", () => loadPage("products"));
    customersIcon.addEventListener("click", () => loadPage("customers"));
});

function loadPage(page) {
    const content = document.getElementById("content");

    switch(page) {
        case "home":
            const homeTemplate = document.getElementById('homeTemplate').content.cloneNode(true);
            content.appendChild(homeTemplate);
            loadHomePageScripts();
            break;
        case "dashboard":
            const dashboardTemplate = document.getElementById('dashboardTemplate').content.cloneNode(true);
            content.appendChild(dashboardTemplate);
            loadDashboardPageScripts();
            break;
        case "orders":
            const ordersTemplate = document.getElementById('ordersTemplate').content.cloneNode(true);
            content.innerHTML = '';
            content.appendChild(ordersTemplate);
            loadOrdersPageScripts();
            break;
            case "products":
                const productsTemplate = document.getElementById('productsTemplate').content.cloneNode(true);
                content.innerHTML = '';
                content.appendChild(productsTemplate);
                loadProductsPageScripts();
                break;
        case "customers":
            const customersTemplate = document.getElementById('customersTemplate').content.cloneNode(true);
            content.innerHTML = '';
            content.appendChild(customersTemplate);
            break;
    }
}

function loadOrdersPageScripts() {
    const menuItems = [
        { code: 'B1001', name: 'Classic Burger (Large)', price: 750.00, discount: '-' },
        { code: 'B1002', name: 'Classic Burger (Regular)', price: 1500.00, discount: '15%' },
        { code: 'B1003', name: 'Turkey Burger', price: 1600.00, discount: '-' },
        { code: 'B1004', name: 'Chicken Burger (Large)', price: 1400.00, discount: '-' },
        { code: 'B1005', name: 'Chicken Burger (Regular)', price: 800.00, discount: '20%' },
        { code: 'B1006', name: 'Cheese Burger (Large)', price: 1000.00, discount: '-' },
        { code: 'B1007', name: 'Cheese Burger (Regular)', price: 600.00, discount: '-' },
        { code: 'B1008', name: 'Bacon Burger', price: 650.00, discount: '15%' },
        { code: 'B1009', name: 'Shawarma Burger', price: 800.00, discount: '-' },
        { code: 'B1010', name: 'Olive Burger', price: 1800.00, discount: '-' },
        { code: 'B1012', name: 'Double-Cheese Burger', price: 1250.00, discount: '20%' },
        { code: 'B1013', name: 'Crispy Chicken Burger (Regular)', price: 1200.00, discount: '-' },
        { code: 'B1014', name: 'Crispy Chicken Burger (Large)', price: 1600.00, discount: '10%' },
        { code: 'B1015', name: 'Paneer Burger', price: 900.00, discount: '-' },
        // Submarines
        { code: 'B1016', name: 'Crispy Chicken Submarine (Large)', price: 2000.00, discount: '-' },
        { code: 'B1017', name: 'Crispy Chicken Submarine (Regular)', price: 1500.00, discount: '-' },
        { code: 'B1018', name: 'Chicken Submarine (Large)', price: 1800.00, discount: '3%' },
        { code: 'B1019', name: 'Chicken Submarine (Regular)', price: 1400.00, discount: '-' },
        { code: 'B1020', name: 'Grinder Submarine', price: 2300.00, discount: '-' },
        { code: 'B1021', name: 'Cheese Submarine', price: 2200.00, discount: '-' },
        { code: 'B1022', name: 'Double Cheese n Chicken Submarine', price: 1900.00, discount: '16%' },
        { code: 'B1023', name: 'Special Horgie Submarine', price: 2800.00, discount: '-' },
        { code: 'B1024', name: 'MOS Special Submarine', price: 3000.00, discount: '-' },
        // Fries
        { code: 'B1025', name: 'Steak Fries (Large)', price: 1200.00, discount: '-' },
        { code: 'B1026', name: 'Steak Fries (Medium)', price: 600.00, discount: '-' },
        { code: 'B1027', name: 'French Fries (Large)', price: 800.00, discount: '-' },
        { code: 'B1028', name: 'French Fries (Medium)', price: 650.00, discount: '-' },
        { code: 'B1029', name: 'French Fries (Small)', price: 450.00, discount: '-' },
        { code: 'B1030', name: 'Sweet Potato Fries (Large)', price: 600.00, discount: '-' },
        // Pasta
        { code: 'B1031', name: 'Chicken n Cheese Pasta', price: 1600.00, discount: '15%' },
        { code: 'B1032', name: 'Chicken Penne Pasta', price: 1700.00, discount: '-' },
        { code: 'B1033', name: 'Ground Turkey Pasta Bake', price: 2900.00, discount: '10%' },
        { code: 'B1034', name: 'Creamy Shrimp Pasta', price: 2000.00, discount: '-' },
        { code: 'B1035', name: 'Lemon Butter Pasta', price: 1950.00, discount: '-' },
        { code: 'B1036', name: 'Tagliatelle Pasta', price: 2400.00, discount: '1%' },
        { code: 'B1037', name: 'Baked Ravioli', price: 2000.00, discount: '1%' },
        // Chicken
        { code: 'B1038', name: 'Fried Chicken (Small)', price: 1200.00, discount: '-' },
        { code: 'B1039', name: 'Fried Chicken (Regular)', price: 2300.00, discount: '10%' },
        { code: 'B1040', name: 'Fried Chicken (Large)', price: 3100.00, discount: '5%' },
        { code: 'B1041', name: 'Hot Wings (Large)', price: 2400.00, discount: '-' },
        { code: 'B1042', name: 'Devilled Chicken (Large)', price: 900.00, discount: '-' },
        { code: 'B1043', name: 'BBQ Chicken (Regular)', price: 2100.00, discount: '-' },
        // Beverages
        { code: 'B1044', name: 'Pepsi (330ml)', price: 990.00, discount: '5%' },
        { code: 'B1045', name: 'Coca-Cola (330ml)', price: 1230.00, discount: '-' },
        { code: 'B1046', name: 'Sprite (330ml)', price: 1500.00, discount: '3%' },
        { code: 'B1047', name: 'Mirinda (330ml)', price: 850.00, discount: '7%' }
    ];

    const productsTable = document.getElementById('productsTable');
    menuItems.forEach(item => {
        const row = `<tr>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.discount}</td>
        </tr>`;
        productsTable.innerHTML += row;
    });

    function populateMenuTable() {
        const productsTable = document.getElementById('productsTable');
        productsTable.innerHTML = ''; // Clear existing rows
        menuItems.forEach(item => {
            const row = `<tr>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.discount}</td>
            </tr>`;
            productsTable.innerHTML += row;
        });
    }

    // Store bill items
    let billItems = [];

    // Function to add item to bill
    function addItemToBill() {
        const itemCode = document.getElementById('billItemCode').value;
        const itemQty = parseInt(document.getElementById('billItemQty').value, 10);

        const menuItem = menuItems.find(item => item.code === itemCode);

        if (menuItem && itemQty > 0) {
            const existingItem = billItems.find(item => item.code === itemCode);
            if (existingItem) {
                existingItem.qty += itemQty;
            } else {
                billItems.push({
                    ...menuItem,
                    qty: itemQty
                });
            }
            updateBillSummary();
        } else {
            alert('Invalid item code or quantity.');
        }
    }

    // Function to remove item from bill
    function removeItem() {
        const itemCode = document.getElementById('billItemCode').value;
        billItems = billItems.filter(item => item.code !== itemCode);
        updateBillSummary();
    }

    // Function to update bill summary table
    function updateBillSummary() {
        const billItemsTable = document.getElementById('billItemsTable');
        billItemsTable.innerHTML = '';

        let subtotal = 0;
        let totalDiscount = 0;

        billItems.forEach(item => {
            const itemTotal = item.price * item.qty;
            let itemDiscount = 0;
            
            if (item.discount !== '-') {
                const discountPercent = parseFloat(item.discount.replace('%', ''));
                itemDiscount = (itemTotal * discountPercent) / 100;
            }

            subtotal += itemTotal;
            totalDiscount += itemDiscount;

            const row = `<tr>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.qty}</td>
                <td>${item.discount}</td>
            </tr>`;
            billItemsTable.innerHTML += row;
        });

        const total = subtotal - totalDiscount;

        document.getElementById('subtotalDisplay').innerText = subtotal.toFixed(2);
        document.getElementById('totalDiscountDisplay').innerText = totalDiscount.toFixed(2);
        document.getElementById('totalDisplay').innerText = total.toFixed(2);
    }

    // Populate menu table on page load
    document.addEventListener('DOMContentLoaded', populateMenuTable);

    // Event listener to autofill item details based on item code
    document.getElementById('billItemCode').addEventListener('input', () => {
        const itemCode = document.getElementById('billItemCode').value;
        const menuItem = menuItems.find(item => item.code === itemCode);

        if (menuItem) {
            document.getElementById('billItemName').value = menuItem.name;
            document.getElementById('billItemPrice').value = menuItem.price.toFixed(2);
            document.getElementById('billItemDiscount').value = menuItem.discount;
        } else {
            document.getElementById('billItemName').value = '';
            document.getElementById('billItemPrice').value = '';
            document.getElementById('billItemDiscount').value = '';
        }
    });

    // Expose functions for use in the template
    window.addItemToBill = addItemToBill;
    window.removeItem = removeItem;
    document.getElementById('displayBill').addEventListener('click', () => {
        const customerName = document.getElementById('customerName').value;
        const customerEmail = document.getElementById('customerEmail').value;
        const customerPhone = document.getElementById('customerPhone').value;

        if (customerName && customerEmail && customerPhone && billItems.length > 0) {
            const billDetails = {
                customerName,
                customerEmail,
                customerPhone,
                items: billItems,
                date: new Date().toLocaleString()
            };

            customers.push(billDetails);
            billItems = []; // Clear bill items after printing
            alert('Bill has been printed and added to the customer record.');
            loadPage('customers'); // Load Customers page
        } else {
            alert('Please fill out all customer details and add items to the bill.');
        }
    });

}
function loadProductsPageScripts() {
    const menuItems = [
        { code: 'B1001', name: 'Classic Burger (Large)', price: 750.00, discount: '-' },
        { code: 'B1002', name: 'Classic Burger (Regular)', price: 1500.00, discount: '15%' },
        { code: 'B1003', name: 'Turkey Burger', price: 1600.00, discount: '-' },
        { code: 'B1004', name: 'Chicken Burger (Large)', price: 1400.00, discount: '-' },
        { code: 'B1005', name: 'Chicken Burger (Regular)', price: 800.00, discount: '20%' },
        { code: 'B1006', name: 'Cheese Burger (Large)', price: 1000.00, discount: '-' },
        { code: 'B1007', name: 'Cheese Burger (Regular)', price: 600.00, discount: '-' },
        { code: 'B1008', name: 'Bacon Burger', price: 650.00, discount: '15%' },
        { code: 'B1009', name: 'Shawarma Burger', price: 800.00, discount: '-' },
        { code: 'B1010', name: 'Olive Burger', price: 1800.00, discount: '-' },
        { code: 'B1012', name: 'Double-Cheese Burger', price: 1250.00, discount: '20%' },
        { code: 'B1013', name: 'Crispy Chicken Burger (Regular)', price: 1200.00, discount: '-' },
        { code: 'B1014', name: 'Crispy Chicken Burger (Large)', price: 1600.00, discount: '10%' },
        { code: 'B1015', name: 'Paneer Burger', price: 900.00, discount: '-' },
        // Submarines
        { code: 'B1016', name: 'Crispy Chicken Submarine (Large)', price: 2000.00, discount: '-' },
        { code: 'B1017', name: 'Crispy Chicken Submarine (Regular)', price: 1500.00, discount: '-' },
        { code: 'B1018', name: 'Chicken Submarine (Large)', price: 1800.00, discount: '3%' },
        { code: 'B1019', name: 'Chicken Submarine (Regular)', price: 1400.00, discount: '-' },
        { code: 'B1020', name: 'Grinder Submarine', price: 2300.00, discount: '-' },
        { code: 'B1021', name: 'Cheese Submarine', price: 2200.00, discount: '-' },
        { code: 'B1022', name: 'Double Cheese n Chicken Submarine', price: 1900.00, discount: '16%' },
        { code: 'B1023', name: 'Special Horgie Submarine', price: 2800.00, discount: '-' },
        { code: 'B1024', name: 'MOS Special Submarine', price: 3000.00, discount: '-' },
        // Fries
        { code: 'B1025', name: 'Steak Fries (Large)', price: 1200.00, discount: '-' },
        { code: 'B1026', name: 'Steak Fries (Medium)', price: 600.00, discount: '-' },
        { code: 'B1027', name: 'French Fries (Large)', price: 800.00, discount: '-' },
        { code: 'B1028', name: 'French Fries (Medium)', price: 650.00, discount: '-' },
        { code: 'B1029', name: 'French Fries (Small)', price: 450.00, discount: '-' },
        { code: 'B1030', name: 'Sweet Potato Fries (Large)', price: 600.00, discount: '-' },
        // Pasta
        { code: 'B1031', name: 'Chicken n Cheese Pasta', price: 1600.00, discount: '15%' },
        { code: 'B1032', name: 'Chicken Penne Pasta', price: 1700.00, discount: '-' },
        { code: 'B1033', name: 'Ground Turkey Pasta Bake', price: 2900.00, discount: '10%' },
        { code: 'B1034', name: 'Creamy Shrimp Pasta', price: 2000.00, discount: '-' },
        { code: 'B1035', name: 'Lemon Butter Pasta', price: 1950.00, discount: '-' },
        { code: 'B1036', name: 'Tagliatelle Pasta', price: 2400.00, discount: '1%' },
        { code: 'B1037', name: 'Baked Ravioli', price: 2000.00, discount: '1%' },
        // Chicken
        { code: 'B1038', name: 'Fried Chicken (Small)', price: 1200.00, discount: '-' },
        { code: 'B1039', name: 'Fried Chicken (Regular)', price: 2300.00, discount: '10%' },
        { code: 'B1040', name: 'Fried Chicken (Large)', price: 3100.00, discount: '5%' },
        { code: 'B1041', name: 'Hot Wings (Large)', price: 2400.00, discount: '-' },
        { code: 'B1042', name: 'Devilled Chicken (Large)', price: 900.00, discount: '-' },
        { code: 'B1043', name: 'BBQ Chicken (Regular)', price: 2100.00, discount: '-' },
        // Beverages
        { code: 'B1044', name: 'Pepsi (330ml)', price: 990.00, discount: '5%' },
        { code: 'B1045', name: 'Coca-Cola (330ml)', price: 1230.00, discount: '-' },
        { code: 'B1046', name: 'Sprite (330ml)', price: 1500.00, discount: '3%' },
        { code: 'B1047', name: 'Mirinda (330ml)', price: 850.00, discount: '7%' }
    ];

    const productsTable = document.getElementById('productsTable');
    menuItems.forEach(item => {
        const row = `<tr>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.discount}</td>
        </tr>`;
        productsTable.innerHTML += row;
    });
}


function loadDashboardPageScripts() {
     }

