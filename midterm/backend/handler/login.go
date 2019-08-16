package handler

import(
	"net/http"
	"encoding/json"
	"fmt"
	
	"../db"
	"../model"
)

type WaitUser struct{
	UserID string `db:"user_id" json:"user_id"`
	Password string `db:"password json:"password"`
}

func Login(w http.ResponseWriter, r *http.Request){
	
	var wuser WaitUser
	json.NewDecoder(r.Body).Decode(&wuser)
	
	DB := db.GetDB()
	var user model.User
	
	//get user by user_id
	if DB.Where("user_id = ?", wuser.UserID).First(&user).RecordNotFound() {
		fmt.Fprintf(w, "user not found")
		return 
	}

	//check password match
	if wuser.Password != user.Password {
		fmt.Fprintf(w, "password not matched")
		return 
	}

	json.NewEncoder(w).Encode(user)


}