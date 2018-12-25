var table_theme = Array();
table_theme[0] = [{theme_id      : 0,
                  theme_name    : "generic",
                  theme_folder  : "/src/themeTemplate/",
                  theme_premium : false}];
table_theme[1] = [{theme_id      : 1,
                  theme_name    : "pitchBlack",
                  theme_folder  : "/src/themeTemplate/",
                  theme_premium : false}];


var table_pointer = Array();
table_pointer[0] = [{pointer_id     : 0,
                    pointer_name    : "generic",
                    pointer_folder  : "/src/pointerTemplate/",
                    pointer_premium : false}];
table_pointer[1] = [{pointer_id     : 1,
                    pointer_name    : "pitchBlack",
                    pointer_folder  : "/src/pointerTemplate/",
                    pointer_premium : false}];


var table_compass = Array();
table_compass[0] = [{compass_id     : 0,
                    compass_name    : "generic",
                    compass_folder  : "/src/compassTemplate/",
                    compass_premium : false}];
table_compass[1] = [{compass_id     : 1,
                    compass_name    : "pitchBlack",
                    compass_folder  : "/src/compassTemplate/",
                    compass_premium : false}];


var table_history = Array();
table_history[0] = [{history_id       : 0,
                    share_contact_id  : 0,
                    contact_name      : "Mark Johnson",
                    contact_email     : "mark@gmail.com",
                    timestamp         : 1545760704,
                    share_lat         : 40.5879,
                    share_long        : -50.2589}];
table_history[1] = [{history_id       : 1,
                    share_contact_id  : 1,
                    contact_name      : "Kenith Banes",
                    contact_email     : "bane@gmail.com",
                    timestamp         : 1000760700,
                    share_lat         : 20.5879,
                    share_long        : -30.2589}];


var table_contact = Array();
table_contact[0] = [{contact_id       : 0,
                    contact_name      : "Mark Johnson",
                    contact_email     : "mark@gmail.com",
                    contact_lat       : 70.1234,
                    contact_long      : -80.4321}];
table_contact[1] = [{contact_id       : 1,
                    contact_name      : "Kenith Banes",
                    contact_email     : "bane@gmail.com",
                    contact_lat       : 90.1234,
                    contact_long      : -60.4321}];


var databaseStructure = {
  _id                   : "simpleDB",
  enable_database       : true,
  users : {
    username            : "Raquib Git",
    password            : "mv1z16",
    legal_terms         : false,
    send_usage          : false,
    subscribed          : false
  },
  system : {
    dest_lat            : 0,
    dest_long           : 0,
    current_lat         : 0,
    current_long        : 0,
    current_bearing     : 0,
    auto_sync           : false,
    enable_history      : false,
    app_version         : 0.02,
    sha_unique          : "",
    system_dump         : ""
  },
  themes:{
    selected_pointer    : 0,
    selected_compass    : 0,
    selected_scheme     : 0,
    table_theme         : new Array(),
    table_pointer       : new Array(),
    table_compass       : new Array()
  },
  share: {
    table_history       : new Array(),
    table_contact       : new Array()
  }
};





function enterArrayInVariable(dBase, array, tier1, tier2){  
  jQuery(array).each(function(key,value){
    dBase[tier1][tier2][key] = value[0];
  });
}

enterArrayInVariable(databaseStructure, table_theme, "themes", "table_theme");
enterArrayInVariable(databaseStructure, table_pointer, "themes", "table_pointer");
enterArrayInVariable(databaseStructure, table_compass, "themes", "table_compass");
enterArrayInVariable(databaseStructure, table_history, "share", "table_history");
enterArrayInVariable(databaseStructure, table_contact, "share", "table_contact");
console.log(databaseStructure);
