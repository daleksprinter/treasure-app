package handler

import(
	"net/http"
	"fmt"

	"../session"
)

func Logout(w http.ResponseWriter, r *http.Request){
	
	err := session.DisconnectSession(w, r)

	if(err != nil){
		fmt.Fprintf(w, "Logout failed")
		return 
	}

	fmt.Fprintf(w, "Logout succeeded")

}