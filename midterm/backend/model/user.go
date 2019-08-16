package model

type User struct{
	ID int `db:"id" json:"id"`
	Name string `db:"name" json:"name"`
	UserID string `db:"user_id" json:"user_id"`
	IsCandidate bool `db:"is_candidate" json:"is_candidate"`
}
