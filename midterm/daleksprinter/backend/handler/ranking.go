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

type Ranking struct{
	Name string `db:"name" json:"name"`
	CreatedUser string `db:"created_user" json:"created_user"`
	ThumbnailURL string `db:"thumbnail_url" json:"thumbnail_url"`
}

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

	DB.Create(&ranking)
	json.NewEncoder(w).Encode(&ranking)
}


func DeleteRanking(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	vars := mux.Vars(r) //パスパラメータ取得
	id := vars["id"]

	var ranking model.Ranking

	if DB.Where("id = ?", id).First(&ranking).RecordNotFound() {
		fmt.Fprintf(w, "requested id not found")
		return 
	}

	if ranking.CreatedUser != session.GetRequestedUser(r) {
		fmt.Fprintf(w, "this ranking is not created by requested user")
		return
	}

	DB.Delete(&ranking)
	fmt.Fprintf(w, "delete ranking succeeded")

}


func GetRankingByID(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	vars := mux.Vars(r) //パスパラメータ取得
	id := vars["id"]
	var ranking model.Ranking
	DB.Where("id = ?", id).First(&ranking)
	json.NewEncoder(w).Encode(ranking)

}