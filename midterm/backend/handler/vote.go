package handler

import(
	"net/http"
	"encoding/json"

	"../model"
	"../db"
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