package handler

import(
	"net/http"
	"encoding/json"
	"fmt"

	"../db"
	"../model"
	"../session"
)

type TempUser struct{
	UserID string `db:"user_id" json:"user_id"`
	Password string `db:"password json:"password"`
}

func Login(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers: Origin", "X-Requested-With, Content-Type, Accept")

	
	var tuser TempUser
	json.NewDecoder(r.Body).Decode(&tuser)
	
	DB := db.GetDB()
	var user model.User
	
	//get user by user_id
	if DB.Where("user_id = ?", tuser.UserID).First(&user).RecordNotFound() {
		fmt.Fprintf(w, "user not found")
		return 
	}

	//check password match
	if tuser.Password != user.Password {
		fmt.Fprintf(w, "password not matched")
		return 
	}

	session.Authenticate(w, r, user)
	json.NewEncoder(w).Encode(user)
	
}
type isLoggedin struct{
	Isloggedin bool `json:"isloggedin"`
}
func IsUserLoggedin(w http.ResponseWriter, r *http.Request){
	var auth isLoggedin
	if session.IsAuthenticated(r) {
		auth.Isloggedin = true
	}else{
		auth.Isloggedin = false
	}
	json.NewEncoder(w).Encode(auth)
}