var knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "nodeknex"
  }
});

var bookshelf = require("bookshelf")(knex);

knex
  .raw("SELECT VERSION()")
  .then(version => console.log(version[0][0]))
  .catch(err => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });



// const cars = [
//   { name: "Audi", price: 52642 },
//   { name: "Mercedes", price: 57127 },
//   { name: "Skoda", price: 9000 },
//   { name: "Volvo", price: 29000 },
//   { name: "Bentley", price: 350000 },
//   { name: "Citroen", price: 21000 },
//   { name: "Hummer", price: 41400 },
//   { name: "Volkswagen", price: 21600 }
// ];

// knex("cars")
//   .insert(cars)
//   .then(() => console.log("data inserted"))
//   .catch(err => {
//     console.log(err);
//     throw err;
//   })
//   .finally(() => {
//     knex.destroy();
//   });

var Car = bookshelf.Model.extend({
  tableName: "cars"
});

Car
  .fetch()
  .then(function(model) {
    console.log(model.get('name'));
  })
  .catch(function(err) {
    console.error(err);
  });

// bookshelf
//   .from("cars")
//   .select("*")
//   .then(rows => {
//     for (row of rows) {
//       console.log(`${row["id"]} ${row["name"]} ${row["price"]}`);
//     }
//   })
//   .catch(err => {
//     console.log(err);
//     throw err;
//   })
//   .finally(() => {
//     knex.destroy();
//   });
