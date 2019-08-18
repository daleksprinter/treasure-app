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
	myRouter.HandleFunc("/users/{id}", middleware.AuthenticateUser(handler.GetUserByID)).Methods("GET")


	//ranking api
	myRouter.HandleFunc("/rankings", middleware.AuthenticateUser(handler.GetRankings)).Methods("GET")
	myRouter.HandleFunc("/rankings", middleware.AuthenticateUser(handler.PostRanking)).Methods("POST")
	myRouter.HandleFunc("/rankings/{id}", middleware.AuthenticateUser(handler.DeleteRanking)).Methods("DELETE")
	myRouter.HandleFunc("/rankings/{id}", middleware.AuthenticateUser(handler.GetRankingByID)).Methods("GET")

	//vote api
	myRouter.HandleFunc("/votes", middleware.AuthenticateUser(handler.GetVotes)).Methods("GET")
	myRouter.HandleFunc("/votes", middleware.AuthenticateUser(handler.PostVote)).Methods("POST")
	myRouter.HandleFunc("/votes/{id}", middleware.AuthenticateUser(handler.DeleteVote)).Methods("DELETE")
	myRouter.HandleFunc("/votes/{id}", middleware.AuthenticateUser(handler.GetVotesByID)).Methods("GET")

	//authentication api
	myRouter.HandleFunc("/login", handler.Login).Methods("POST")
	myRouter.HandleFunc("/logout", handler.Logout).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", myRouter))
}

func main(){
	db.InitDB()
	handleRequests()
}