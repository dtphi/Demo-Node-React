## Ioredis


## Rx
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

## Socket io

## Socket io client

## Browserify