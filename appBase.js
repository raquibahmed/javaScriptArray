var dbName = "simpleDatabase";
var db = new PouchDB(dbName, {auto_compaction: true});
var projectDB = "simpleDB"

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
  resolve(readDatabase(projectDB));
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
    resolve(readDatabase(projectDB));
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
  return readDatabase(projectDB);
}).then(function(doc){
  console.log(doc);
});
*/

var share = {
    type      : "remove",
    table     : "table_contact",
    unique_id : "contact_id",
    value     : {
      contact_name  : "Raquib Ahmed",
      contact_email : "raquib_ah@hotmail.com",
      contact_lat   : "46.75",
      contact_long  : "-58.56"
    }
};

var tbl = {
    type      : "remove",
    table     : "table_history",
    unique_id : "history_id",
    value     : {
      share_contact_id  : "5",
      contact_name  : "RQ Ahmed",
      contact_email : "raquib_ah@hotmail.com",
      share_lat   : "10.00",
      share_long  : "-20.00",
      timestamp   : "123456789"
    }
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function compareArray(array1, array2, exclude){
    //Compare Components of array1 to array2
    var exactMatch = true;
    jQuery.map(array1, function(value,index) {
      if(index != exclude){
        if(value != array2[index]){
          exactMatch = false;
        }
      }
    });
  return exactMatch;
}

function updateShare(updateType, table, unique_id, value) {
      switch(updateType){

        case "add":

          return new Promise(function(resolve,reject){
            resolve(readDatabase(projectDB));
          }).then(function(doc){
            var total = Object.size(doc["share"][table]);
            value[unique_id] = total;

            //Reject If Duplicate
            var realArray = jQuery.makeArray(doc["share"][table])[0];
            var arrayExists = false;
            $.map( realArray, function(val,key) {
                if(compareArray(val, value, unique_id) == true){
                  arrayExists = true;
                }
            });

            if(arrayExists == false){
              doc["share"][table][total] = value;
              db.put(doc);
            }
              return doc;
          });
          break;

        case "remove":

          return new Promise(function(resolve,reject){
            resolve(readDatabase(projectDB));
          }).then(function(doc){

            //Remove All Matching Instances
            var realArray = jQuery.makeArray(doc["share"][table])[0];
            var newArray = new Array();

            $.map( realArray, function(val,key) {
                if(compareArray(val, value, unique_id) == false){
                  newArray.push(val);
                }
            });
            doc["share"][table] = newArray;
            db.put(doc);
            return doc;
          });
          break;
        default:
          break;

      }
}

console.log("Modify Share Table : " + new Date());
var mod = new Promise(function(resolve,reject){
  //resolve(updateShare(share.type, share.table, share.unique_id , share.value));
  resolve(updateShare(tbl.type, tbl.table, tbl.unique_id , tbl.value));
}).then(function (doc) {
    //console.log(doc["share"][share.table]);
    console.log(doc["share"][tbl.table]);
});
