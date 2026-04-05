// math.js

// 1. Hàm cộng (+)
function add(a, b) {
  return a + b;
}

// 2. Hàm trừ (-)
function subtract(a, b) {
  return a - b;
}

// 3. Hàm nhân (*)
function multiply(a, b) {
  return a * b;
}

// 4. Hàm chia (/)
function divide(a, b) {
  // Kiểm tra trường hợp mẫu số bằng 0
  if (b === 0) {
    throw new Error("Lỗi: Không thể chia cho 0");
  }
  return a / b;
}

// ==========================================
// TEST THỬ CÁC HÀM
// ==========================================

console.log("Cộng 10 + 5 =", add(10, 5));       // Kết quả: 15
console.log("Trừ 10 - 5 =", subtract(10, 5));   // Kết quả: 5
console.log("Nhân 10 * 5 =", multiply(10, 5));  // Kết quả: 50
console.log("Chia 10 / 5 =", divide(10, 5));    // Kết quả: 2

// Test trường hợp lỗi
try {
    console.log("Chia 10 / 0 =", divide(10, 0));
} catch (error) {
    console.error(error.message);               // Kết quả: Lỗi: Không thể chia cho 0
}