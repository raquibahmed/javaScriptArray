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
      table_theme       :   {
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
    table_pointer         : {
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
    table_compass         : {
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
    },
    share: {
                                      table_history :{
                                                        0 : {
                                                          history_id        : 0,
                                                          share_contact_id  : 0,
                                                          contact_name      : "",
                                                          contact_email     : "",
                                                          timestamp         : 0,
                                                          share_lat         : 0,
                                                          share_long        :0
                                                        },
                                                        1 : {
                                                          history_id        : 1,
                                                          share_contact_id  : 0,
                                                          contact_name      : "",
                                                          contact_email     : "",
                                                          timestamp         : 0,
                                                          share_lat         : 0,
                                                          share_long        :0
                                                        },
                                                        2 : {
                                                          history_id        : 1,
                                                          share_contact_id  : 0,
                                                          contact_name      : "",
                                                          contact_email     : "",
                                                          timestamp         : 0,
                                                          share_lat         : 0,
                                                          share_long        :0
                                                        }
                                                      },
                                      table_contact : {
                                                        0 : {
                                                          contact_id        : 0,
                                                          contact_name      : "",
                                                          contact_email     : "",
                                                          contact_lat       : 0,
                                                          contact_long      : 0
                                                        },
                                                        1 : {
                                                          contact_id        : 1,
                                                          contact_name      : "",
                                                          contact_email     : "",
                                                          contact_lat       : 0,
                                                          contact_long      : 0
                                                        },
                                                        2 : {
                                                          contact_id        : 2,
                                                          contact_name      : "",
                                                          contact_email     : "",
                                                          contact_lat       : 0,
                                                          contact_long      : 0
                                                        }
                                                      }
            }

};
//console.log(databaseStructure);
//console.log(databaseStructure.themes.table_theme[1]);
//console.log(databaseStructure.share.table_contact[1]);
