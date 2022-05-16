export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Florian Rieser Übung 12",
            "formList": [
            {
                "id": "FriendForm",
                "title": "Friend",
                "url": "/friend",
                "formFieldList": [
                {
                    "id": "familyName",
                    "type": "text",
                    "name": "FamilyName",
                    "width": 1,
                    "required": true
                },
                {
                    "id": "firstName",
                    "type": "text",
                    "name": "FirstName",
                    "width": 1,
                    "required": true
                },
                {
                    "id": "nickname",
                    "type": "text",
                    "name": "Nickname",
                    "width": 2,
                    "required": true
                },
                {
                    "id":   "location",
                    "type": "autocomplete",
                    "name": "Location",
                    "url": "/location",
                    "form": "LocationForm",
                    "width": 2
                },
                {
                    "id": "birthdate",
                    "type": "date",
                    "name": "Birthday",
                    "width": 2
                },
                {
                    "id": "group",
                    "type": "autocomplete",
                    "name": "Group",
                    "url": "/group",
                    "form": "GroupForm",
                    "width": 2
                },
                {
                    "id": "comment",
                    "type": "text",
                    "name": "Comments",
                    "width": 2,
                    "height": 4,
                    "maxLength": 5000,
                },
                {
                    "type": "deleteButton",
                    "name": "Delete"
                },
                {
                    "type": "cancelButton",
                    "name": "Cancel"
                },
                {
                    "type": "okButton",
                    "name": "Ok"
                }
                ]
            },
            {
                "id": "GroupForm",
                "title": "Group",
                "url": "/group",
                "formFieldList": [
                {
                    "id": "name",
                    "type": "text",
                    "name": "GroupName",
                    "width": 2,
                    "required": true
                },
                {
                    "type": "deleteButton",
                    "name": "Delete"
                },
                {
                    "type": "cancelButton",
                    "name": "Cancel"
                },
                {
                    "type": "okButton",
                    "name": "Ok"
                }
                ]
            },
            {
                "id": "LocationForm",
                "title": "Location",
                "url": "/location",
                "formFieldList": [
                {
                    "id": "name",
                    "type": "text",
                    "name": "LocationName",
                    "width": 2,
                    "required": true
                },
                {
                    "id": "comment",
                    "type": "text",
                    "name": "Comments",
                    "width": 2,
                    "height": 4,
                    "maxLength": 5000,
                },
                {
                    "type": "deleteButton",
                    "name": "Delete"
                },
                {
                    "type": "cancelButton",
                    "name": "Cancel"
                },
                {
                    "type": "okButton",
                    "name": "Ok"
                }
                ]
            },
            {
                "id": "AddFriendForm",
                "title": "AddFriend",
                "url": "/activity/:activityKey/friend",
                "formFieldList": [
                {
                    "id":   "friend",
                    "type": "autocomplete",
                    "name": "Friend",
                    "url": "/friend",
                    "readonly": true,
                    "form": "FriendForm",
                    "defaultKey": "friendKey",
                    "width": 2
                },
                {
                    "type": "deleteButton",
                    "name": "Delete"
                },
                {
                    "type": "cancelButton",
                    "name": "Cancel"
                },
                {
                    "type": "okButton",
                    "name": "Ok"
                }
                ]
            },
            {
                "id": "AddActivityForm",
                "title": "Activity",
                "url": "/friend/:friendKey/activity",
                "formFieldList": [
                {
                    "id":   "activity",
                    "type": "autocomplete",
                    "name": "Activity",
                    "url": "/activity",
                    "readonly": true,
                    "form": "ActivityForm",          
                    "defaultKey": "activityKey",
                    "width": 2
                },
                {
                    "type": "deleteButton",
                    "name": "Delete"
                },
                {
                    "type": "cancelButton",
                    "name": "Cancel"
                },
                {
                    "type": "okButton",
                    "name": "Ok"
                }
                ]
            },
            {
                "id": "ActivityForm",
                "title": "Activity",
                "url": "/activity",
                "formFieldList": [
                {
                    "id": "name",
                    "type": "text",
                    "name": "Activity",
                    "required": true,
                    "width": 2
                },
                {
                    "id": "comment",
                    "type": "text",
                    "name": "Comments",
                    "width": 2,
                    "height": 4,
                    "maxLength": 5000,
                },
                {
                    "id": "date",
                    "type": "date",
                    "name": "Date",
                    "width": 2
                },
                {
                    "id": "location",
                    "type": "autocomplete",
                    "name": "Location",
                    "url": "/location",
                    "form": "LocationForm",
                    "width": 2
                },
                {
                    "type": "deleteButton",
                    "name": "Delete"
                },
                {
                    "type": "cancelButton",
                    "name": "Cancel"
                },
                {
                    "type": "okButton",
                    "name": "Ok"
                }
                ]
            },
            ],
            "pageList": [
            {
                "id": "mainmenu",
                "name": "MainMenu",
                "elementList": [
                {
                    "type": "button",
                    "name": "Friends",
                    "icon": "fa-user",
                    "color": "blue",
                    "page": "friendspage",
                },
                {
                    "type": "button",
                    "name": "Location",
                    "icon": "fa-cubes",
                    "color": "yellow",
                    "page": "locationspage",
                },
                {
                    "type": "button",
                    "name": "Groups",
                    "icon": "fa-user-friends",
                    "color": "magenta",
                    "page": "groupspage",
                },
                {
                    "type": "button",
                    "name": "Activities",
                    "icon": "fa-calendar",
                    "color": "green",
                    "page": "activitiespage",
                },
                ]
            },
            {
                "id": "friendspage",
                "elementList": [
                {
                    "type": "backbutton",
                },
                {
                    "type": "newButton",
                    "name": "NewFriend",
                    "icon": "fa-user",
                    "color": "green",
                    "form": {
                        "form": "FriendForm"
                    }
                },
                {
                    "type": "list",
                    "icon": "fa-user",
                    "color": "blue",
                    "search": true,
                    "url": "/friend",
                    "page": "SingleFriendsPage"
                    /*"form": {
                        "form": "FriendForm"
                    }*/
                },
                ]
            },
            {
                "id": "SingleFriendsPage",
                "elementList": [
                {
                    "type": "backbutton",
                },
                {
                    "type": "button",
                    "name": "EditFriend",
                    "icon": "fa-user",
                    "color": "green",
                    "form": {
                        "form": "FriendForm"
                    }
                },
                {
                    "type": "newButton",
                    "name": "AddActivity",
                    "icon": "fa-running",
                    "color": "green",
                    "form": {
                        "form": "AddActivityForm"
                    }
                },
                {
                    "type": "list",
                    "icon": "fa-running",
                    "color": "orange",
                    "search": true,
                    "url": "/friend/:friendKey/activity",
                    "form": {
                        "form": "ActivityForm"
                    }
                },
                ]
            },
            {
                "id": "SingleActivityPage",
                "elementList": [
                {
                    "type": "backbutton",
                },
                {
                    "type": "button",
                    "name": "EditActivity",
                    "icon": "fa-user",
                    "color": "green",
                    "form": {
                        "form": "ActivityForm"
                    }
                },
                {
                    "type": "newButton",
                    "name": "AddFriend",
                    "icon": "fa-running",
                    "color": "green",
                    "form": {
                        "form": "AddFriendForm"
                    }
                },
                {
                    "type": "list",
                    "icon": "fa-running",
                    "color": "orange",
                    "search": true,
                    "url": "/activity/:activityKey/friend ",
                    "form": {
                        "form": "FriendForm"
                    }
                },
                ]
            },
            {
                "id": "locationspage",
                "elementList": [
                {
                    "type": "backbutton",
                },
                {
                    "type": "newButton",
                    "name": "NewLocation",
                    "icon": "fa-home",
                    "color": "green",
                    "width": 2,
                    "form": {
                        "form": "LocationForm"
                    }
                },
                {
                    "type": "list",
                    "icon": "fa-home",
                    "color": "blue",
                    "search": true,
                    "url": "/location",
                    "form": {
                        "form": "LocationForm"
                    }
                },
                ]
            },
            {
                "id": "groupspage",
                "elementList": [
                {
                    "type": "backbutton",
                },
                {
                    "type": "newButton",
                    "name": "NewGroup",
                    "icon": "fa-weixin",
                    "color": "green",
                    "form": {
                        "form": "GroupForm"
                    }
                }, {
                    "type": "list",
                    "icon": "fa-user-friends",
                    "color": "magenta",
                    "search": true,
                    "url": "/group",
                    "form": {
                        "form": "GroupForm"
                    }
                },

                ]
            },
            {
                "id": "activitiespage",
                "elementList": [
                {
                    "type": "backbutton",
                },
                {
                    "type": "newButton",
                    "name": "NewActivity",
                    "icon": "fa-running",
                    "color": "green",
                    "form": {
                        "form": "ActivityForm"
                    }
                }, 
                {
                    "type": "list",
                    "icon": "fa-running",
                    "color": "orange",
                    "search": true,
                    "url": "/activity",
                    "page" : "SingleActivityPage" 
                },

                ]
            }
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
