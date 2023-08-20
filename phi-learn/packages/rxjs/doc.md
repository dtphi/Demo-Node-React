## Ioredis (https://github.com/redis/ioredis)
- Tool : (https://github.com/erikdubbelboer/phpRedisAdmin)


## Rx (https://fireship.io/lessons/rxjs-basic-pro-tips/), (https://rxmarbles.com)
- Javascript
document.addEventListener('click', () => console.log('Clicked!'));
Trả về một Event.

- Rx
Rx.fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
Trả về một Observable

Khai niem : pure function (hàm thuần khiết), tức là các hàm chỉ thay đổi các giá trị từ input để return giá trị mới mà không gây ra các side effects (ảnh hưởng tới các biến bên ngoài hàm)

Các concept nền tảng nhất của RxJS gồm:
- Observable - Một tập hợp các value, event trong tương lai
- Subscription - Kết quả khi thực hiện một Observable
- Emit - Khi một Observable tạo ra một giá trị vì có thứ gì đó đã subscribe nó
- Operator - Các toán tử thay đổi cách Observable tạo ra giá trị.

## Socket io (https://socket.io/docs)
- Bảo mật cao
- Kết nối tự động tới server
- Mã hóa nhị phân
- Cho phép tạo kênh và phòng

## Socket io client (https://socket.io/docs/v4/client-api/#event-connect)
Please note that you shouldn't register event handlers in the connect handler itself, as a new handler will be registered every time the Socket reconnects:

### BAD
```bash
socket.on("connect", () => {
  socket.on("data", () => { /* ... */ });
});
```

### GOOD
```bash
socket.on("connect", () => { /* ... */ });
socket.on("data", () => { /* ... */ });
```

## Browserify
Điểm cần chú ý ở đây là dù dùng cho Node.js hay Web browser thì đều dùng chung việc require. Chỉ có điều khi dùng trên Web browser thì có thêm bước xử lý chuyển đổi.