package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func main() {
	PORT := ":8080"
	fmt.Println("Loading data from local file")
	http.HandleFunc("/", dataHandler)
	fmt.Println("Listening at ", PORT)
	log.Fatal(http.ListenAndServe(PORT, nil))
}

func dataHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("content-type", "application/json")
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
