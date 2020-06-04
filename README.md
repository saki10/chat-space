chat Space
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|password|string|null: false｜
|Password confirmation|string|null: false|
|email|string|null: false|
|nickname|string|null: false|
### Association
- has_many :chat
- has_many :comments
-belongs_to :chats_users 

## chatテーブル
|Column|Type|Options|
|------|----|-------|
|chat_member|text|null: false,|
|chat_goup|text|string|foreign_key: true|
|group_name|string|null: false|
|send|string|null: false|
### Association
- belongs_to :user
- has_many :comments
- belongs_to :chats_users  

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|poto|text|null: false|
|comment_id|integer|null: false, foreign_key: true|
### Association
- has_many :chat
- belongs_to:user
- belongs_to :chats_users

## chats_usersテーブル（中間テーブル）
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :chat
- belongs_to :user
- belongs_to :comments
