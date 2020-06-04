chat Space
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|password|string|null: false｜
|password_confirmation|string|null: false|
|email|string|null: false|
|nickname|string|null: false|
### Association
- has_many :groups_users
- has_many :comments
- belongs_to :users 

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|send|string|null: false|
### Association
- has_many :comments
- has_many :groups_users   

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|user_id|integer|null: false, foreign_key: true|
|photo|text||
|group_id|integer|null: false, foreign_key: true｜
### Association
- belongs_to :group
- belongs_to:user

## groups_usersテーブル（中間テーブル）
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group 