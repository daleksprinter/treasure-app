package middleware

import(
	"fmt"
	"net/http"
)

func AuthenticateUser(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request){
		fmt.Fprintf(w, "start")
		next.ServeHTTP(w, r)
		fmt.Fprintf(w, "end")
	}
}