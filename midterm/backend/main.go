package main

import(
	"net/http"
	"fmt"
	"log"
	"github.com/gorilla/mux"
	
	"./handler"
	"./db"
)

func index(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "hello mux")
}

func handleRequests(){
	myRouter := mux.NewRouter().StrictSlash(true)
 	myRouter.HandleFunc("/", index).Methods("GET")

	//user api
	myRouter.HandleFunc("/users", handler.GetUsers).Methods("GET")

	//ranking api
	myRouter.HandleFunc("/rankings", handler.GetRankings).Methods("GET")

	//vote api
	myRouter.HandleFunc("/votes", handler.GetVotes).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", myRouter))
}

func main(){
	db.InitDB()
	handleRequests()
}