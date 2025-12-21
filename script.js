// 1. Dữ liệu nguồn từ file DATA của bạn
const DATA = {
    surgery: [
    {
        name: "Mổ đẻ lần 1",
        full: 9920000,
        bhyt: 8501000,roomGroup: 2
    },
    {
        name: "Mổ đẻ lần 2",
        full: 11800000,
        bhyt: 9695000,roomGroup: 1
    },
    {
        name: "Mổ đẻ lần 3",
        full: 12850000,
        bhyt: 10750000,roomGroup: 1
    },
    {
        name: "Mổ đẻ lần 4",
        full: 13900000,
        bhyt: 11795000,roomGroup: 1
    },
    {
        name: "Mổ thai có bệnh lý kèm theo",
        full: 12510000,
        bhyt: 9646800,roomGroup: 1
    },
    {
        name: "Sinh thường",
        full: 4500000,
        bhyt: 3900000,roomGroup: 3
    },
    {
        name: "Sinh thường có đẻ không đau",
        full: 7970000,
        bhyt: 7370000,roomGroup: 3
    },
    {
        name: "Mổ u nang đường bụng",
        full: 8800000,
        bhyt: 6679200,roomGroup: 2
    },
    {
        name: "Mổ u nang nội soi",
        full: 12570000,
        bhyt: 8167600,roomGroup: 1
    },
    {
        name: "Mổ thai ngoài đường bụng",
        full: 8800000,
        bhyt: 6679200,roomGroup: 2
    },
    {
        name: "Mổ thai ngoài nội soi",
        full: 12570000,
        bhyt: 8167600,roomGroup: 1
    },
    {
        name: "Mổ cắt tử cung ngã âm đạo",
        full: 10200000,
        bhyt: 7482400,roomGroup: 1
    },
    {
        name: "Mổ cắt tử cung hoàn toàn",
        full: 10700000,
        bhyt: 7871200,roomGroup: 1
    }    ],
    rooms: {
        
        group1: [
        {
            name: "TC1 - 1 giường VIP 1",
            full: 2120000,
            bhyt: 1927000
        },
        {
            name: "TC2 - 1 giường VIP 2",
            full: 1770000,
            bhyt: 1577000
        },
        {
            name: "TC3 - 1 giường VIP 3 mini",
            full: 1380000,
            bhyt: 1187000
        },
        {
            name: "Phòng 2G",
            full: 1040000,
            bhyt: 847000
        },
        {
            name: "Phòng 2G - Bao phòng",
            full: 1770000,
            bhyt: 1577000
        },
        {
            name: "Phòng 4 giường",
            full: 870000,
            bhyt: 677000
        },
        {
            name: "Phòng 6 giường",
            full: 710000,
            bhyt: 517000
        },
        {
            name: "Phòng 10 giường",
            full: 460000,
            bhyt: 267000
        },
        {
            name: "Phòng 16 giường",
            full: 420000,
            bhyt: 227000
        }],
        group2:
        [
        {
            name: "TC1 - 1 giường VIP 1",
            full: 2240000,
            bhyt: 2022000
        },
        {
            name: "TC2 - 1 giường VIP 2",
            full: 1890000,
            bhyt: 1672000
        },
        {
            name: "TC3 - 1 giường VIP 3 mini",
            full: 1490000,
            bhyt: 1272000
        },
        {
            name: "Phòng 2G",
            full: 1110000,
            bhyt: 892000
        },
        {
            name: "Phòng 2G - Bao phòng",
            full: 1890000,
            bhyt: 1672000
        },
        {
            name: "Phòng 4 giường",
            full: 960000,
            bhyt: 742000
        },
        {
            name: "Phòng 6 giường",
            full: 780000,
            bhyt: 562000
        },
        {
            name: "Phòng 10 giường",
            full: 480000,
            bhyt: 262000
        },
        {
            name: "Phòng 16 giường",
            full: 460000,
            bhyt: 242000
        }],
        group3: [
        {
            name: "TC1 - 1 giường VIP 1",
            full: 2010000,
            bhyt: 1841000
        },
        {
            name: "TC2 - 1 giường VIP 2",
            full: 1660000,
            bhyt: 1491000
        },
        {
            name: "TC3 - 1 giường VIP 3 mini",
            full: 1260000,
            bhyt: 1091000
        },
        {
            name: "Phòng 2G",
            full: 970000,
            bhyt: 801000
        },
        {
            name: "Phòng 2G - Bao phòng",
            full: 1660000,
            bhyt: 1491000
        },
        {
            name: "Phòng 4 giường",
            full: 760000,
            bhyt: 591000
        },
        {
            name: "Phòng 6 giường",
            full: 680000,
            bhyt: 511000
        },
        {
            name: "Phòng 10 giường",
            full: 430000,
            bhyt: 261000
        },
        {
            name: "Phòng 16 giường",
            full: 370000,
            bhyt: 201000
        }]
    },
    others: [
        { name: "Xét nghiệm tiền phẫu", full: 1330000, bhyt: 1160000 },
        { name: "Sàng lọc sơ sinh", full: 540000, bhyt: 540000 },
        { name: "Thuốc khác", full: 540000, bhyt: 480000 },
        { name: "Gói đồ đi sinh", full: 476000, bhyt: 476000 },
        { name: "Vệ sinh, Thay băng, Tắm bé", full: 620000, bhyt: 480000 }
    ]
};

// 2. Khởi tạo giao diện
const surgerySelect = document.getElementById('surgerySelect');
const roomSelect = document.getElementById('roomSelect');
const otherDiv = document.getElementById('otherServices');
// bắt đầu code dán bước 2
// Hàm cập nhật danh sách phòng dựa trên phẫu thuật đã chọn
function updateRoomList() {
    const selectedSurgery = DATA.surgery[surgerySelect.value];
    const groupKey = `group${selectedSurgery.roomGroup}`; // Ví dụ: group1, group2
    const roomsToDisplay = DATA.rooms[groupKey];

    // Xóa danh sách phòng cũ
    roomSelect.innerHTML = "";

    // Đổ danh sách phòng mới vào
    roomsToDisplay.forEach((room, index) => {
        roomSelect.innerHTML += `<option value="${index}">${room.name}</option>`;
    });

    // Sau khi đổi danh sách phòng, phải tính lại tổng tiền ngay
    calculate();
}

// Chỉnh sửa lại hàm init để gắn sự kiện này
function init() {
    // 1. Đổ dữ liệu phẫu thuật (như cũ)
    DATA.surgery.forEach((item, index) => {
        surgerySelect.innerHTML += `<option value="${index}">${item.name}</option>`;
    });

    // 2. Lần đầu chạy, hiển thị phòng của phẫu thuật đầu tiên
    updateRoomList();

    // 3. Khi thay đổi Phẫu thuật -> Cập nhật lại danh sách phòng
    surgerySelect.addEventListener('change', updateRoomList);

    // 4. Các sự kiện tính toán khác (như cũ)
    [roomSelect, document.getElementById('stayDays'), document.getElementById('bhytCheck'), otherDiv].forEach(el => {
        el.addEventListener('change', calculate);
        el.addEventListener('input', calculate);
    });
    // Tạo danh sách checkbox cho chi phí khác
    DATA.others.forEach((item, index) => {
        otherDiv.innerHTML += `
            <div style="margin-bottom: 5px;">
                <input type="checkbox" class="other-item" value="${index}" checked> ${item.name}
            </div>`;
    });

    calculate(); // Tính lần đầu
}

// 3. Hàm tính toán theo công thức Excel
function calculate() {
    const isBHYT = document.getElementById('bhytCheck').checked;
    const type = isBHYT ? 'bhyt' : 'full';
    const days = parseInt(document.getElementById('stayDays').value) || 0;

    // Lấy phẫu thuật đang chọn
    const surgeryIndex = surgerySelect.value;
    const selectedSurgery = DATA.surgery[surgeryIndex];
    const surgeryPrice = selectedSurgery[type];

    // Lấy phòng đang chọn (phải lấy đúng nhóm của phẫu thuật đó)
    const groupKey = `group${selectedSurgery.roomGroup}`;
    const roomIndex = roomSelect.value;
    const selectedRoom = DATA.rooms[groupKey][roomIndex];
    const roomPriceDaily = selectedRoom[type];
    const roomPriceTotal = roomPriceDaily * days;

    // Tính chi phí khác (giữ nguyên)
    let otherTotal = 0;
    document.querySelectorAll('.other-item').forEach(cb => {
        if (cb.checked) otherTotal += DATA.others[cb.value][type];
    });

    // Cập nhật hiển thị giá chi tiết
    document.getElementById('surgeryPrice').textContent = surgeryPrice.toLocaleString() + " VND";
    document.getElementById('roomPriceDaily').textContent = roomPriceDaily.toLocaleString() + " VND";
    document.getElementById('roomPriceTotal').textContent = roomPriceTotal.toLocaleString() + " VND";
    document.getElementById('otherTotal').textContent = otherTotal.toLocaleString() + " VND";

    // Công thức tổng quát:
    // $Total = P_{surgery} + (P_{room} \times N_{days}) + \sum P_{others}$
    const total = surgeryPrice + roomPriceTotal + otherTotal;
    document.getElementById('finalAmount').textContent = total.toLocaleString() + " VND";
}

init();