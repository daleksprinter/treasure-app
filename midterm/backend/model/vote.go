package model

import(
	"time"
)

type Vote struct{
	ID int `db:"id" json:"id"`
	User int `db:"user" json:"user"`
	Candidate int `db:"candidate" json:"candidate"`
	Ranking int `db:"ranking" json:"ranking"`
	Comment string `db:"comment" json:"comment"`
	CreatedAt time.Time `db:"created_at" json:"created_at"`
}