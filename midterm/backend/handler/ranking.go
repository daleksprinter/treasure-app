package handler

import(
	"net/http"
	"encoding/json"
	"fmt"
	"../model"
	"../db"
)

func GetRankings(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	rankings := []model.Ranking{}
	DB.Find(&rankings)
	json.NewEncoder(w).Encode(&rankings)
}

func PostRanking(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	var ranking model.Ranking
	json.NewDecoder(r.Body).Decode(&ranking)

	//authorize user
	ranking.CreatedUser = 1
	fmt.Println(ranking)

	DB.Create(&ranking)
	json.NewEncoder(w).Encode(&ranking)
}