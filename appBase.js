//var db = new PouchDB('simpleDatabase');

/*
var users = {
  username        : "Raquib",
  password        : "mv1z16",
  legal_terms     : false,
  send_usage      : false,
  subscribed      : false
};
*/

var databaseStructure = {
  users : {
    username            : "Raquib",
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
    app_version         : 0.01,
    sha_unique          : "",
    system_dump         : ""
  },
  themes:{
    selected_pointer    : 0,
    selected_compass    : 0,
    selected_scheme     : 0,
    table_theme         : {
                              0 : {
                                theme_id      : 0,
                                theme_name    : "generic",
                                theme_folder  : "/src/themeTemplate/",
                                theme_premium : false,
                              },
                              1 : {
                                theme_id      : 1,
                                theme_name    : "pitchBlack",
                                theme_folder  : "/src/themeTemplate/",
                                theme_premium : false,
                              },
                              2 : {
                                theme_id      : 2,
                                theme_name    : "pitchWhite",
                                theme_folder  : "/src/themeTemplate/",
                                theme_premium : false,
                              }

                          },
      table_pointer       : {
                                0 : {
                                  pointer_id      : 0,
                                  pointer_name    : "generic",
                                  pointer_folder  : "/src/pointerTemplate/",
                                  pointer_premium : false,
                                },
                                1 : {
                                  pointer_id      : 1,
                                  pointer_name    : "pitchBlack",
                                  pointer_folder  : "/src/pointerTemplate/",
                                  pointer_premium : false,
                                },
                                2 : {
                                  pointer_id      : 2,
                                  pointer_name    : "pitchWhite",
                                  pointer_folder  : "/src/pointerTemplate/",
                                  pointer_premium : false,
                                }

                            },
          table_compass     : {
                                    0 : {
                                      compass_id      : 0,
                                      compass_name    : "generic",
                                      compass_folder  : "/src/compassTemplate/",
                                      compass_premium : false,
                                    },
                                    1 : {
                                      compass_id      : 1,
                                      compass_name    : "pitchBlack",
                                      compass_folder  : "/src/compassTemplate/",
                                      compass_premium : false,
                                    },
                                    2 : {
                                      compass_id      : 2,
                                      compass_name    : "pitchWhite",
                                      compass_folder  : "/src/compassTemplate/",
                                      compass_premium : false,
                                    }

                                }
  }
};


console.log(databaseStructure);
console.log(databaseStructure.themes.table_theme[1]);
