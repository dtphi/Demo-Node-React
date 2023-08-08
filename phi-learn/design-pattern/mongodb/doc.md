## Check application READ greater than WRITE or else
## Dữ liệu nào cùng nhau khi đọc dữ liệu từ database.
- Đọc ngay lúc đó hay không hay phải kết để đọc
- Có cân nhắc hiệu xuất nào , ví dụ hiệu xuất ghi đồng thời, đọc đồng thời , đọc phân tán
- Đọc đồng thời , ghi phân tán ( PUSH - PULL news feed)
- Làm thế nào nếu dữ liệu chúng ta lớn
- Thiết kế Schema rất quan trọng 

## Atomic in database : tính nhất quán
- Một nguyên tử hoạt động , không có 2 nguyên tử giống nhau gọi là atomic trong database.
- Là một hoạt động database chỉ có 1 là thành công hai là thất bại .
- Hoạt động nguyên tử là không thể chia nhỏ và không thể thực hiện từng phần.

## Index in Database : tối ưu hoá truy vấn
- Sử dụng cho hệ thống comment.
- Index trong mongodb sử dụng 1 trong 2 loại index : Btree or Binary tree.
- Index mongodb chọn Index bằng Btree.
- Btree nút có n khoá thì sẽ có (n+1) con trỏ
- Btree khoá bên trái (left) con trỏ sẽ có value khoá (index) nhỏ hơn value khoá (index) cha, khoá bên phải (right) con trỏ sẽ có value lớn hơn value khoá cha.

## Lưu ý sử dụng Index trong mongodb
- Nên sử dụng 5 chỉ mục Index : Index chiếm không gian làm tiêu tốn tài nguyên trong disk khi chèn .
- Index trong mongodb có thể cải thiện như : UPDATE, DELETE, SEARCH dựa trên nhu cầu business 

## Qui tắc tiền tố . (Prefix rule)
- Không truy vấn chỉ mục ngoài cùng bên trái thì db không tìm chỉ mục hiệu quả.