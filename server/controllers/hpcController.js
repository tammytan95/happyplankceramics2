const db = require("../models/hpcModels");

const hpcController = {};

hpcController.getCharacters = async (req, res, next) => {
  // write code here
  let getCharQuery =
    "SELECT people.*, species.name AS species, planets.name AS planets FROM people LEFT JOIN species ON people.species_id = species._id LEFT JOIN planets ON people.homeworld_id = planets._id";

  //solution 1 - async/await
  //await means that db.query gets added to call stack, then is popped off and waits in event queue until call stack is completed. once it is added back to call stack, res.locals.characters and next() is executed
  //w/o including second param in db query, db.query returns a promise. make sure to produce a specific error message.
  try {
    const { rows: result } = await db.query(getCharQuery);
    res.locals.characters = result;
    // throw new Error("i am an error");
    next();
  } catch (e) {
    res.status(500).json({ error: e.message });
  }

  //.catch(err => {const errObj = {log:, message:}} return next (errObj))

  //solution 2 - async/await; assuming that there is no promise version in the library, so have to coerce it to be a promise
  // try {
  //   const { rows: result } = await new Promise((resolve, reject) => {
  //     db.query(getCharQuery, (err, result) => {
  //       if (err) {
  //         //async function failed, so the error is rejected out/thrown
  //         reject(err);
  //       } else {
  //         //resolve is the result of the promise
  //         resolve(result);
  //       }
  //     });
  //   });
  // } catch (e) {
  //   res.status(500).json({ error: e.message });
  // }

  //solution 3 - using then; make sure next is called inside then, otherwise next will be invoked before the getCharQuery (async) is completed
  // db.query(getCharQuery)
  //   .then(({ rows: result }) => {
  //     console.log(result);
  //     res.locals.characters = result;
  //     next();
  //   })
  //   .catch(e => res.status(500).json({ error: e.message }));

  //solution 4 - callback
  // db.query(getCharQuery, (err, { rows: result }) => {
  //   if (err) {
  //     res.status(500).json({ error: e.message });
  //   } else {
  //     res.locals.characters = result;
  //     next();
  //   }
  // });
};

module.exports = hpcController;
