package main

import(
	"net/http"
	"fmt"
	"log"
	
	"github.com/gorilla/mux"
	
	"./handler"
	"./db"
	"./middleware"
)

func index(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "hello mux")
}

func handleRequests(){
	myRouter := mux.NewRouter().StrictSlash(true)
 	myRouter.HandleFunc("/", index).Methods("GET")

	//user api
	myRouter.HandleFunc("/users", middleware.AuthenticateUser(handler.GetUsers)).Methods("GET")


	//ranking api
	myRouter.HandleFunc("/rankings", middleware.AuthenticateUser(handler.GetRankings)).Methods("GET")
	myRouter.HandleFunc("/rankings", middleware.AuthenticateUser(handler.PostRanking)).Methods("POST")

	//vote api
	myRouter.HandleFunc("/votes", middleware.AuthenticateUser(handler.GetVotes)).Methods("GET")
	myRouter.HandleFunc("/votes", middleware.AuthenticateUser(handler.PostVote)).Methods("POST")

	//authentication api
	myRouter.HandleFunc("/login", handler.Login).Methods("POST")
	myRouter.HandleFunc("/logout", handler.Logout).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", myRouter))
}

func main(){
	db.InitDB()
	handleRequests()
}