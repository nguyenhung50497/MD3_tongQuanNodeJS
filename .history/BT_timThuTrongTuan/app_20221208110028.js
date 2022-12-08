// Khai báo đối tượng Date
var date = new Date();
 
// Lấy số thứ tự của ngày hiện tại
let currentDay = date.getDay();
 
// Biến lưu tên của thứ
let dayName = '';
 
// Lấy tên thứ của ngày hiện tại
switch (currentDay) {
case 0:
    dayName = "Chủ nhật";
    break;
case 1:
    dayName = "Thứ hai";
    break;
case 2:
    dayName = "Thứ ba";
    break;
case 3:
    dayName = "Thứ tư";
    break;
case 4:
    dayName = "Thứ năm";
    break;
case 5:
    dayName = "Thứ sau";
    break;
case 6:
    dayName = "Thứ bảy";
}
 
console.log(dayName);