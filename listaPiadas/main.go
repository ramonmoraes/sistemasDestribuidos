package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func main() {
	PORT := ":7000"
	fmt.Println("Loading data from local file")
	http.HandleFunc("/", dataHandler)
	fmt.Println("Listening at ", PORT)
	log.Fatal(http.ListenAndServe(PORT, nil))
}

func dataHandler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	w.Header().Add("content-type", "application/json")
	fmt.Println(r)
	w.Write(getDataFromLocalFile())
}

func getDataFromLocalFile() []byte {
	dataPath := "./data.json"
	b, err := ioutil.ReadFile(dataPath)

	if err != nil {
		if os.IsNotExist(err) {
			fmt.Println("File not found")
		} else {
			log.Fatal(err)
		}
	}

	return b
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type,access-control-allow-origin, access-control-allow-headers")
}
