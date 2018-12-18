var db = new PouchDB('simpleDatabase');


function createDatabase(dataBase) {
  return db.put(dataBase, function callback(err, result) {
    if (!err) {
      return 'created';
    }
  }).catch(function(err) {
      return err;
  });
}

console.log("Creating Database : " + new Date());
var createDB = new Promise(function(resolve, reject){
  resolve(createDatabase(databaseStructure));
}).then(function(data){
  if(data != 'created'){
      console.log(data.message);
  }
});
