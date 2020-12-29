FROM golang:alpine3.12 as builder

RUN apk add --no-cache git

RUN mkdir /factorial-app/

ADD main.go /factorial-app/
WORKDIR /factorial-app/

RUN go get -v -u github.com/gorilla/mux
RUN go build

FROM alpine:3.10.1

RUN mkdir /app
ADD . /app
COPY --from=builder /factorial-app/factorial-app /app/factorial-app
WORKDIR /app/

CMD ["./factorial-app"]

