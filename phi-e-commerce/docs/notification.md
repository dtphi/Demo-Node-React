# 1tr user register notification.
- When shop create new the product ( voucher, discount... ) will be create a new notification message to save to user_notification service.
- user_notification service will be push the notification to each user subscribed.

# DB
1. - Index
2. - Paging
3. - Sharing
4. - Cache

# Pattern using.
## PUSH - PULL 

## Push notification message:
- Tracking the user handle.
- User have many or usual request to service is we will send `PUSH` the notification.
- User have a little bit or not visit request to service is we will to the user `PULL` the notification for yourself.


## Lam sao tranh mat tin nhan
## Lam sao tranh trung lap tin nhan
## Lam dam bao cac thu tu tin nhan
## lam the nao tranh don nen tin nhan