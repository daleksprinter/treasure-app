package handler

import(
	"net/http"
	"encoding/json"

	"../db"
	"../model"
)

func GetUsers(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	users := []model.User{}
	DB.Find(&users)
	json.NewEncoder(w).Encode(&users)
}