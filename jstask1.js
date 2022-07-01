/* Bài 1********************************************************
 *Input: số lương làm trong 1 ngày, số ngày đã làm;
 *
 *Process:
 *   1. Lấy được input
 *   2. Tính tổng lương = lương làm trong 1 ngày * số ngày đẫ làm;
 *   3. Xuất tiền lương ra màn hình;
 * 
 * Output: Tổng Lương
 */
console.log("Bài tập 1:");
var salaryPerDay = 100000;
var day = 15;
var totalSalary = salaryPerDay * day;
console.log("Lương nhân viên", totalSalary);




/* Bài 2********************************************************
 *Input: 5 số thực;
 *
 *Process:
 *   1. Lấy được input;
 *   2. Tính trung bình = (tổng của 5 số cộng lại) / 5;
 *   3. Xuất số trung bình ra màn hình;
 * 
 * Output: Trung bình của 5 số;
 */
 console.log("Bài tập 2:");
var n1 = 1;
var n2 = 2;
var n3 = 3;
var n4 = 4;
var n5 = 5;
var averageOf5num = (n1 + n2 + n3 + n4 + n5) / 5;
console.log("Giá trị trung bình của 5 số này là:", averageOf5num);




/* Bài 3********************************************************
 *Input: tiền USD;
 *
 *Process:
 *   1. Lấy dược input
 *   2. Quy đổi thành VND = tiền USD * 23500;
 *   3. Xuất tiền quy đổi ra màn hình;
 * 
 * Output: Tiền đã quy đổi
 */
 console.log("Bài tập 3:");
var priceUSD = 2;
var transferVND =  priceUSD * 23500;
console.log("Số tiền sau quy đổi VND:",transferVND);




/* Bài 4********************************************************
 *Input: Chiều dài, chiều rộng của HCN;
 *
 *Process:
 *   1. Lấy dược input
 *   2. Diện tích = chiều dài * chiều rộng;
 *   3  Chu vi = (chiều dài + chiều rộng) * 2;
 *   4. Xuất diện tích và chu vi ra màn hình;
 * 
 * Output: Diện tích, chu vi
 */
 console.log("Bài tập 4:");
 var width = 5;
 var length = 10;
 var area = width * length;
 var perimeter = (width + length) * 2;
 console.log("Diện tích của HCN là", area);
 console.log("Chu vi của HCN là", perimeter);




 /* Bài 5********************************************************
 *Input: 1 số có 2 chữ số;
 *
 *Process:
 *   1. Lấy dược input
 *   2. Đổi ra số hàng chục 
 *   3. Đổi ra số hàng đơn vi
 *   3  Tổng của 1 số có 2 chữ số = số hàng chục + số hàng đơn vị;
 *   4. Xuất tổng của 1 số có 2 chữ số ra màn hình;
 * 
 * Output: Tổng của 1 số có 2 chữ số
 */
 console.log("Bài tập 5:");
 var n2Number = 12;
 var num1= n2Number % 10;
 var num2 = Math.floor(n2Number / 10);
 var totalOf2Number = num1 + num2;
 console.log("Tổng của 2 ký tự số là",totalOf2Number); 