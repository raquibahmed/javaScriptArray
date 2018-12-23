var dbName = "simpleDatabase";
var db = new PouchDB(dbName, {auto_compaction: true});


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
      console.log("Database Creation Error (Database Might Exist Already)!");
      //console.log(data);
      //// TODO: Check if Database Already Exists
  }
});



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

/*
console.log("Read Full Database : " + new Date());
var readDB = new Promise(function(resolve,reject){
  resolve(readDatabase("simpleDB"));
}).then(function(data){
  console.log(data);
});
*/


/*
var vUpdateTier = {
    tier: 1,
    table: "users",
    key : "password",
    value: "Ganazs"
};

function updateTier(tier, table,  key,value) {
  return readDB = new Promise(function(resolve,reject){
    resolve(readDatabase("simpleDB"));
  }).then(function(data){
    switch(tier){
        case 0:
          data[key] = value;
        case 1:
          data[table][key] = value;
        default:
          break;
    }
    return db.put(data);
  });
}


console.log("Updating Tier : " + new Date());
var updTierOne = new Promise(function(resolve,reject){
  resolve(updateTier(vUpdateTier.tier, vUpdateTier.table, vUpdateTier.key, vUpdateTier.value));
}).then(function (doc) {
  return readDatabase("simpleDB");
}).then(function(doc){
  console.log(doc);
});
*/

var share = {
    type      : "add",
    table     : "table_contact",
    unique_id : "contact_id",
    value     : {
      contact_name  : "Raquib Ahmed",
      contact_email : "raquib_ah@hotmail.com",
      contact_lat   : "46.75",
      contact_long  : "-58.56"
    }
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function updateShare(updateType, table, value) {
      switch(updateType){

        case "add":
        //TODO LATEST

        console.log("ADD");
        var upD = new Promise(function(resolve,reject){
          resolve(readDatabase("simpleDB"));
        }).then(function(doc){
          console.log(doc);

          var total = Object.size(doc["share"][table]);
          console.log(total);
        });

        case "remove":
          break;
        default:
          break;

      }
}

console.log("Modify Share Table : " + new Date());
var mod = new Promise(function(resolve,reject){
  resolve(updateShare(share.type, share.table, share.value));
}).then(function (doc) {
  return readDatabase("simpleDB");
}).then(function(doc){
  //console.log(doc);
});
