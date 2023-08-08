## ELK là gì?
ELK đề cập đến một giải pháp hoàn chỉnh để xử lý dữ liệu tập trung, sử dụng ba công cụ mã nguồn mở, Elasticsearch + Logstash + Kibana, để đáp ứng các yêu cầu của người dùng về truy vấn, sắp xếp và thống kê dữ liệu.

## Elasticsearch + Logstash + Kibana
Đây là một trong những kiến ​​trúc đơn giản nhất. Thu thập dữ liệu thông qua Logstash, phân tích tìm kiếm dữ liệu thông qua Elasticsearch và hiển thị kết quả bằng Kibana. Kiến trúc này cũng được giới thiệu trên trang web chính thức, nhưng nó hiếm khi được sử dụng trong sản xuất thực tế.

## filebeat + Elasticsearch + Logstash + Kibana

So với kiến ​​trúc đầu tiên, kiến ​​trúc này bổ sung thêm một module  filebeat. Filebeat là một dịch vụ thu thập data nhẹ được triển khai ở phía máy khách.
Ưu điểm: Tiêu tốn ít tài nguyên hơn logstash
Bất lợi: Khi logstash không thành công, các bản ghi có thể bị mất.

## Install using docker
1. - Create new network for elastic
```bash
docker network create elastic
```
2. - Pull elastic docker hub and run.
```bash
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.4.3
docker run --name es-alliconcon --net elastic -p 9200:9200 -p 9300:9300 -it docker.elastic.co/elasticsearch/elasticsearch:8.4.3
```
3. - Pull kibana docker hub and run.
```bash
docker pull docker.elastic.co/kibana/kibana:8.4.3
docker run --name kib-alliconcon --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.4.3
```