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