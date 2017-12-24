<p align="center">
    <img alt="Scale Buffet" src="https://user-images.githubusercontent.com/26755833/34326521-3c1c931a-e8e1-11e7-8e57-63589828a9c8.png" width="400">
</p>

<h1 align="center">Scale Buffet</h1> <br>
<p align="center">
  🍣 Web application for buffet restaurant 🍜<br>
  <a href="https://scale-buffet-festosgdhp.now.sh" target="_blank"><b>[DEMO]</b></a>
</p>

## Introduction
**ScaleBuffet** is a buffet restaurant where is separated into two zones
1. Zone A (Counter bar) has 12 seats (A1-A12)
2. Zone B (Panty zone) has 12 table (B1-B12)
   * B1-B4 = 2 seats
   * B5-B10 = 4 seats
   * B11-B12 = 8 seats
 
You also show coupon for getting discount and you can book the seat that you want.

## Features
* Calculate a bill with coupon codes
* Manage coupons (view, create, remove, update)
    * *You can add more than one code per a bill, but system's going to provides least pay for you
* Manage customer reservation (reserve and cancel)

<p align="center">
    <img src="https://user-images.githubusercontent.com/26755833/34326933-ce061270-e8ea-11e7-9ed4-a72ffb2e496d.jpg" alt="Scale Buffet Screenshot"/>
</p>


## Installation
#### install project
```bash
$ yarn install
```
#### install **json-server**
```bash
$ npm install -g json-server
```

## Running
#### Run project
```bash
$ yarn start
```
#### Run **json-server**
```bash
$ json-server --watch ./json_server/db.json --port 8888
```

## Author

* **NutAnek** -  [https://github.com/nutanek](https://github.com/nutanek)

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT).fit in URLs
