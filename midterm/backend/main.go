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
	myRouter.HandleFunc("/users", handler.PostUser).Methods("POST")

	//ranking api
	myRouter.HandleFunc("/rankings", handler.GetRankings).Methods("GET")
	myRouter.HandleFunc("/rankings", handler.PostRanking).Methods("POST")

	//vote api
	myRouter.HandleFunc("/votes", handler.GetVotes).Methods("GET")
	myRouter.HandleFunc("/votes", handler.PostVote).Methods("POST")

	//authentication api
	myRouter.HandleFunc("/login", handler.Login).Methods("POST")

	log.Fatal(http.ListenAndServe(":8080", myRouter))
}

func main(){
	db.InitDB()
	handleRequests()
}