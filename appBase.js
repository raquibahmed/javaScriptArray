var dbName = "simpleDatabase";
var db = new PouchDB(dbName, {auto_compaction: true});

var vUpdateTierOne = {
    key : "enable_database",
    value: false
};


/*
function createDatabase(dataBase) {
  return db.put(dataBase).then(function (response) {
    return response;
  }).catch(function (err) {
    return err;
  });
}

console.log("Creating Database : " + new Date());
var createDB = new Promise(function(resolve, reject){
  resolve(createDatabase(databaseStructure));
}).then(function(data){
  if ((typeof data.ok !== 'undefined') && (data.ok == true)) {
      console.log("Database Created!");
  }else if ((typeof data.error !== 'undefined') && (data.error == true)) {
      console.log("Database Creation Error!");
      console.log(data);
      //// TODO: Check if Database Already Exists
  }
});
*/


/*
function deleteDatabase(dataBase){
  return new PouchDB(dataBase).destroy().then(function () {
    return "success";
  }).catch(function (err) {
    return err;
  });
}

console.log("Removing Database : " + new Date());
var removeDB = new Promise(function(resolve, reject){
    resolve(deleteDatabase(dbName));
}).then(function(data){
  if(data != 'success'){
      //dataBase Destroy Error
      console.log("Error: " + data);
  }else{
      console.log("Database Destroyed!");
  }
});
*/


function readDatabase(dataBase) {
  return db.get(dataBase).then(function (doc) {
    return doc;
  });
}

console.log("Read Full Database : " + new Date());
var readDB = new Promise(function(resolve,reject){
  resolve(readDatabase("simpleDB"));
}).then(function(data){
  console.log(data);
});

/*
function updateTierOne(key,value) {
    console.log(key,value);
}
console.log("Updating Tier One : " + new Date());
var updTierOne = new Promise(function(resolve,reject){
  resolve(updateTierOne(vUpdateTierOne.key, vUpdateTierOne.value));
});
*/
