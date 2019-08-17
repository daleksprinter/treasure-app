package middleware

import(
	"fmt"
	"net/http"

	"../session"
)

func AuthenticateUser(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request){

		//check is_session_servive
		if !session.IsAuthenticated(r) {
			fmt.Fprintf(w, "please login")
			return 
		}		
		next.ServeHTTP(w, r)
	}
}

