// Dữ liệu sản phẩm và giá (Giá trị là VND)
const products = [
    { name: "Nhóm Sản phẩm A", options: { "Cơ bản": 100000, "Nâng cao": 150000, "Cao cấp": 200000 } },
    { name: "Nhóm Sản phẩm B", options: { "Thường": 50000, "Đặc biệt": 75000, "Siêu cấp": 100000 } },
    { name: "Nhóm Sản phẩm C", options: { "Nhỏ": 20000, "Vừa": 30000, "Lớn": 40000 } },
    { name: "Nhóm Sản phẩm D", options: { "Xanh": 300000, "Đỏ": 450000, "Vàng": 600000 } },
    { name: "Nhóm Sản phẩm E", options: { "Loại 1": 120000, "Loại 2": 180000, "Loại 3": 250000 } }
];

// Lấy tham chiếu đến phần <tbody> trong HTML bằng ID đã đặt
const tableBody = document.getElementById('productTableBody');
// Tạo các hàng (row) cho bảng dựa trên mảng products
products.forEach((product, index) => {
    // Tạo một hàng mới (<tr>)
    const row = tableBody.insertRow(); 

    // Cột 1: Tên sản phẩm
    row.insertCell().textContent = product.name; 

    // Cột 2: Tùy chọn giá (Dropdown)
    const priceCell = row.insertCell();
    const select = document.createElement('select');
    select.id = `price-${index}`; // Gán ID để JS có thể truy cập sau này

    // Vòng lặp để tạo các tùy chọn giá (<option>)
    for (const [optionName, priceValue] of Object.entries(product.options)) {
        const option = document.createElement('option');
        option.value = priceValue; // Giá trị option là số tiền
        // Hiển thị tên gói + giá tiền (đã định dạng)
        option.textContent = `${optionName} (${priceValue.toLocaleString()} VND)`; 
        select.appendChild(option);
    }
    priceCell.appendChild(select); // Thêm dropdown vào ô thứ 2

    // Cột 3: Số lượng (Input nhập số)
    const quantityCell = row.insertCell();
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.min = '0';
    quantityInput.value = '0';
    quantityInput.id = `qty-${index}`; // Gán ID duy nhất
    quantityCell.appendChild(quantityInput); // Thêm ô input vào ô thứ 3

    // Cột 4: Thành tiền (Kết quả hiển thị)
    const totalCell = row.insertCell();
    totalCell.id = `total-${index}`; // Gán ID duy nhất
    totalCell.textContent = '0';
});
// 4.1. Hàm tính thành tiền cho một hàng
function calculateRowTotal(rowIndex) {
    // ... (code hàm này giống hệt hướng dẫn trước) ...
    const priceElement = document.getElementById(`price-${rowIndex}`);
    const quantityElement = document.getElementById(`qty-${rowIndex}`);
    const totalElement = document.getElementById(`total-${rowIndex}`);

    const price = parseFloat(priceElement.value || 0);
    const quantity = parseInt(quantityElement.value || 0);

    const rowTotal = price * quantity;
    
    totalElement.textContent = rowTotal.toLocaleString(); 
    return rowTotal;
}

// 4.2. Hàm tính tổng cộng (Grand Total)
function calculateGrandTotal() {
    // ... (code hàm này giống hệt hướng dẫn trước) ...
    let grandTotal = 0;
    
    for (let i = 0; i < products.length; i++) {
        grandTotal += calculateRowTotal(i); 
    }

    document.getElementById('grandTotal').textContent = grandTotal.toLocaleString();
}

// 4.3. Thiết lập sự kiện lắng nghe
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < products.length; i++) {
        const priceElement = document.getElementById(`price-${i}`);
        const quantityElement = document.getElementById(`qty-${i}`);
        
        // Sự kiện thay đổi giá
        priceElement.addEventListener('change', calculateGrandTotal);
        
        // Sự kiện nhập/thay đổi số lượng
        quantityElement.addEventListener('input', calculateGrandTotal);
    }
    
    calculateGrandTotal(); // Tính toán ban đầu
});