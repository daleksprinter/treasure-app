package handler

import(
	"net/http"
	"encoding/json"

	"github.com/gorilla/mux"

	"../db"
	"../model"
)

type User struct{
	ID int `db:"id" json:"id"`
	Name string `db:"name" json:"name"`
	UserID string `db:"user_id" json:"user_id"`
	IsCandidate bool `db:"is_candidate" json:"is_candidate"`
}

func GetUsers(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	users := []User{}
	DB.Find(&users)
	json.NewEncoder(w).Encode(&users)
}

func PostUser(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	var user model.User
	json.NewDecoder(r.Body).Decode(&user)
	DB.Create(&user)
	json.NewEncoder(w).Encode(user)
}

func GetUserByID(w http.ResponseWriter, r *http.Request){
	DB := db.GetDB()
	vars := mux.Vars(r) //パスパラメータ取得
	id := vars["id"]
	var user User
	DB.Where("id = ?", id).First(&user)
	json.NewEncoder(w).Encode(user)

}