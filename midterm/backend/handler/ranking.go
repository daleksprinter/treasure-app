package handler

import(
	"net/http"
	"encoding/json"
	"../model"
	"../db"
)

func GetRankings(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	rankings := []model.Ranking{}
	DB.Find(&rankings)
	json.NewEncoder(w).Encode(&rankings)
}