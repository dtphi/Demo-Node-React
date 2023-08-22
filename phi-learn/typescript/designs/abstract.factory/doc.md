Abstract Factory is a creational design pattern, which solves the problem of creating entire product families without specifying their concrete classes.

Abstract Factory defines an interface for creating all distinct products but leaves the actual product creation to concrete factory classes. Each factory type corresponds to a certain product variety.

The client code calls the creation methods of a factory object instead of creating products directly with a constructor call (new operator). Since a factory corresponds to a single product variant, all its products will be compatible.

Client code works with factories and products only through their abstract interfaces. This lets the client code work with any product variants, created by the factory object. You just create a new concrete factory class and pass it to the client code


##
Usage examples: The Abstract Factory pattern is pretty common in TypeScript code. Many frameworks and libraries use it to provide a way to extend and customize their standard components.

Identification: The pattern is easy to recognize by methods, which return a factory object. Then, the factory is used for creating specific sub-components.

Conceptual Example

This example illustrates the structure of the Abstract Factory design pattern. It focuses on answering these questions:

What classes does it consist of?
What roles do these classes play?
In what way the elements of the pattern are related?

## Các tình huống ứng dụng về mô hình Abstract Factory bạn có thể chú ý những điều sau đây:
### (https://anonystick.com/blog-developer/phan-2-factory-pattern-cach-ma-toi-trien-khai-trong-nha-may-vinfast-fresher-va-junior-nen-bo-qua-phan-3-2020110554662242)

- Bất cứ hệ thống nào cũng không nên phụ thuộc vào một lớp. Hay nói cách khác là. Một hệ thống không nên phụ thuộc vào các chi tiết về cách các cá thể lớp sản phẩm được tạo, kết hợp và thể hiện, điều này rất quan trọng đối với tất cả các loại mẫu của nhà máy. 
- Hệ thống cung cấp một thư viện sản phẩm, tất cả các sản phẩm xuất hiện với cùng một giao diện, để khách hàng không phụ thuộc vào việc thực hiện cụ thể. Đó là diều bạn lưu ý.