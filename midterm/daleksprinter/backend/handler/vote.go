package handler

import(
	"net/http"
	"encoding/json"
	"fmt"

	"github.com/gorilla/mux"
	
	"../model"
	"../db"
	"../session"
)

func GetVotes(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	votes := []model.Vote{}
	DB.Find(&votes)
	json.NewEncoder(w).Encode(&votes)
}

func PostVote(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	var vote model.Vote
	json.NewDecoder(r.Body).Decode(&vote)

	//authorize user
	vote.User = 1

	DB.Create(&vote)
	json.NewEncoder(w).Encode(&vote)
}

func DeleteVote(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	vars := mux.Vars(r) //パスパラメータ取得
	id := vars["id"]

	var vote model.Vote

	if DB.Where("id = ?", id).First(&vote).RecordNotFound() {
		fmt.Fprintf(w, "requested id not found")
		return 
	}

	if vote.User != session.GetRequestedUser(r) {
		fmt.Fprintf(w, "this vote is not created by requested user")
		return
	}

	DB.Delete(&vote)
	fmt.Fprintf(w, "delete vote succeeded")

}

type Details struct{
	UserID int `db:"user" json:"user"`
	Count int `db:"count" json:"count"`
}

type Res struct{
	User int `db:"user" json:"user"`
	Count int `db:"count" json:"count"`
}

func GetVotesByID(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	vars := mux.Vars(r) //パスパラメータ取得
	id := vars["id"]
	
	var res []Res
	sql := "select user, count(*) as count from votes where ranking = ? group by user"
	DB.Raw(sql, id).Scan(&res)

	json.NewEncoder(w).Encode(res)

}