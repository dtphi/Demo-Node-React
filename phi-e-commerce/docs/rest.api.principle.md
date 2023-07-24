## 1. Giao thức giao tiếp

- Giao thức giao tiếp giữa Api và người dùng luôn sử dụng giao thức Https

## 2. Tên miền

- https://api.example.com/
  Or
- https://example.org/api

## 3. Phiên bản

- https://api.example.com/v1
  Or
- https://api.example.com/v2

[]

## 4. Điểm cuối (Endpoint) : nên đặt danh từ (zoos, animals.....)

- https://api.example.com/v1/zoos
- https://api.example.com/v1/animals
- https://api.example.com/v1/employees

## 5. OPTIONS HTTP

- GET: (SELECT) Lấy tài nguyên (một hoặc nhiều mục) từ máy chủ
- CREATE: (CREATE) Tạo một tài nguyên trên máy chủ
- PUT: (UPDATE) Cập nhật tài nguyên trên máy chủ (Máy khách cung cấp đầy đủ tài nguyên sau khi thay đổi)
- PATCH: (UPDATE) Cập nhật tài nguyên trên máy chủ (Máy khách cung cấp các thuộc tính đã thay đổi)
- DELETE: (DELETE) Xoá tài nguyên khỏi máy chủ

  AND

* HEAD: Lấy siêu dữ liệu của tài nguyên

## 6. Filtering

?limit=10: Chỉ định số lượng bản ghi đươc trả về
?offset=10: Chỉ định vị trí bắt đầu của bản ghi được trả về
?page=26&per_page=100: Chỉ định số trang và số lượng bản ghi trên mỗi trang
?sortby=name&order=asc: Chỉ định thuộc tính nào để sắp xếp các kết quả trả về và thứ tự sắp xếp

## 7. Return status

200: Máy chủ trả về thành công dữ liệu do người dùng yêu cầu
201: CREATED (PUT / PATCH / POST) Người dùng đã tạo hoặc sửa đổi dữ liệu thành công
202: Được chấp nhận. Cho biết một yêu cầu đã vào hàng đợi nền (tác vụ không đồng bộ)
204: Không có nội dung [XOÁ]: Người dùng đã xoá thành công dữ liệu
400:
401:
403:
404:
406:
410:
422:
500:

## 8. Xử lý lỗi

{
error: "Invalid Api Key"
}

## 9. Return

GET / collection : trả về danh sách các đối tượng tài nguyên (mảng)
GET / collection / resource : trả về một đối tượng tài nguyên duy nhất
PUT / collection / resource : trả về đối tượng tài nguyên hoàn chỉnh
POST / collection : trả về đối tượng tài nguyên mới được tạo
PATH / collection / resource : trả về đối tượng tài nguyên hoàn chỉnh
DELETE / collection / resource : trả về một tài liệu trống

## 10. DOCS

- https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm
- https://en.wikipedia.org/wiki/Roy_Fielding
