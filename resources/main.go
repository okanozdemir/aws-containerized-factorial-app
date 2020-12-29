package main

import (
    "fmt"
    "net/http"
    "strconv"
    "math/big"

    "github.com/gorilla/mux"
)

func factorial(x *big.Int) *big.Int {
	n := big.NewInt(1)
	if x.Cmp(big.NewInt(0)) == 0 {
		return n
	}
	return n.Mul(x, factorial(n.Sub(x, n)))
}

func main() {
    r := mux.NewRouter()

    r.HandleFunc("/api/v1/{number}", func(w http.ResponseWriter, r *http.Request) {
        vars := mux.Vars(r)
        number, err := strconv.Atoi(vars["number"])
        if err != nil {
            return
        }
        fmt.Fprintf(w, "%d! = %d\n", number, factorial(big.NewInt(int64(number))))
    })

    r.NotFoundHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Usage: http://factorial-app.okanozdemir.dev/api/v1/${NUMBER}\n" +
        "Example request: curl http://factorial-app.okanozdemir.dev/api/v1/5\n" +
        "Example response: 5! = 120\n")
    })
    http.ListenAndServe(":80", r)
}
