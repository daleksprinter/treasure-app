package model

type Ranking struct{
	ID int `db:"id" json:"id"`
	Name string `db:"name" json:"name"`
	CreatedUser int `db:"created_user" json:"created_user"`
	ThumbnailURL string `db:"thumbnail_url" json:"thumbnail_url"`
}
