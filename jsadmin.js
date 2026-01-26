// Cấu hình mật khẩu (Bạn có thể đổi ở đây)
const ADMIN_PASS = "admin123"; 

// Hàm kiểm tra trạng thái đăng nhập khi tải trang
window.onload = function() {
    if (localStorage.getItem("isLoggedIn") === "true") {
        showDashboard();
    }
};

// Hàm đăng nhập
function login() {
    const passInput = document.getElementById("pass").value;
    const status = document.getElementById("status");

    if (passInput === ADMIN_PASS) {
        status.style.color = "green";
        status.innerText = "Đăng nhập thành công!";
        
        // Lưu trạng thái đăng nhập
        localStorage.setItem("isLoggedIn", "true");
        
        // Chuyển giao diện sau 1 giây
        setTimeout(() => {
            showDashboard();
        }, 800);
    } else {
        status.style.color = "red";
        status.innerText = "Sai mật khẩu! Vui lòng thử lại.";
    }
}

// Hiển thị giao diện quản lý
function showDashboard() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    
    // Tải API Key đã lưu (nếu có)
    const savedKey = localStorage.getItem("myApiKey");
    if (savedKey) {
        document.getElementById("apiKeyInput").value = savedKey;
    }

    // Giả lập load credits
    document.getElementById("credit-display").innerText = "2000 Credits";
}

// Lưu cấu hình API Key
function saveConfig() {
    const apiKey = document.getElementById("apiKeyInput").value;
    if (apiKey.length < 5) {
        alert("API Key quá ngắn, vui lòng kiểm tra lại!");
        return;
    }
    
    localStorage.setItem("myApiKey", apiKey);
    alert("Đã lưu API Key thành công!");
}

// Đăng xuất
function logout() {
    localStorage.removeItem("isLoggedIn");
    location.reload(); // Tải lại trang
}