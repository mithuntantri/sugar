# sugartalk
https://www.sugartalk.in

Sugartalk is a simple, private one-to-one or a group web based chat server + client written using [Go](https://golang.org) and [Angular 1](https://angularjs.org) that uses Websocket for communication

#### Requirements

* NPM, Bower and Brunch
* Golang

|Package Name|Port (If Applicable)|
|------------|--------------------|
|Postgres    |5432                |
|Redis       |6379                |
|Rethinkdb   |8080                |

### Installation

Clone the Repository

`git clone git@github.com:mithuntantri/sugar.git`

Download the api package dependencies by switching to `api` directory in your GOPATH and by running `go get`

Download the client package dependencies by switching to `client` directory and by running

`npm install` and `bower install`

Build the brunch project using 

`brunch build --production`

#### Nginx Configuartion

`service nginx restart`

### Usage

* Have the Rethinkdb Server running
* Keep the Redis Instance running
* Run the start.sh script to start the server

Author: **[Mithun Tantri](http://mithuntantri.in)**

License: **MIT**
