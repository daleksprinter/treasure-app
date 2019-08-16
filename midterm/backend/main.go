package main

import(
	"net/http"
	"fmt"
	"log"
	"github.com/gorilla/mux"
)

func index(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "hello mux")
}

func handleRequests(){
	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.HandleFunc("/", index).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", myRouter))
}

func main(){
	handleRequests()
}