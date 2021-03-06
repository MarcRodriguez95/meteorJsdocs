// This file is automatically generated by meteor-jsdoc. Regenerate it with 'meteor-jsdoc build'
DocsData = {
  "Method.\"click .new-post\"": {
    "filename": "profileFeed.js",
    "filepath": "https://github.com/MarcRodriguez95/meteorFacebook/tree/master/client/views/profile/profileFeed/profileFeed.js",
    "ismethod": "true",
    "kind": "function",
    "lineno": 44,
    "locus": "profileFeed",
    "longname": "Method.\"click .new-post\"",
    "memberof": "Method",
    "name": "\"click .new-post\"",
    "params": [
      {
        "description": "<p>nombre del usuario, con firstname y lastname.</p>",
        "name": "profileUser",
        "optional": true,
        "type": {
          "names": [
            "Object"
          ],
          "parsedType": {
            "name": "Object",
            "type": "NameExpression"
          }
        }
      },
      {
        "description": "<p>usuario que actualmente esta en activo.</p>",
        "name": "currentUser",
        "optional": true,
        "type": {
          "names": [
            "Object"
          ],
          "parsedType": {
            "name": "Object",
            "type": "NameExpression"
          }
        }
      },
      {
        "description": "<p>recoge el valor que se le aplica cuando se crea un nuevo post para la historia.</p>",
        "name": "story",
        "optional": true,
        "type": {
          "names": [
            "Object"
          ],
          "parsedType": {
            "name": "Object",
            "type": "NameExpression"
          }
        }
      }
    ],
    "scope": "static",
    "summary": "Es el metodo con el que se crea las historias del perfil del usuario especificado."
  },
  "Method.autorun": {
    "filename": "profileFeed.js",
    "filepath": "https://github.com/MarcRodriguez95/meteorFacebook/tree/master/client/views/profile/profileFeed/profileFeed.js",
    "ismethod": "true",
    "kind": "function",
    "lineno": 12,
    "locus": "profileFeed",
    "longname": "Method.autorun",
    "memberof": "Method",
    "name": "autorun",
    "params": [
      {
        "description": "<p>nombre del usuario especificado.</p>",
        "name": "username",
        "optional": true,
        "type": {
          "names": [
            "Object"
          ],
          "parsedType": {
            "name": "Object",
            "type": "NameExpression"
          }
        }
      }
    ],
    "scope": "static",
    "summary": "Es el metodo con el que se suscribe las historias del mismo perfil del usuario especificado."
  },
  "Method.events": {
    "filename": "profileFeed.js",
    "filepath": "https://github.com/MarcRodriguez95/meteorFacebook/tree/master/client/views/profile/profileFeed/profileFeed.js",
    "ismethod": "true",
    "kind": "function",
    "lineno": 27,
    "locus": "profileFeed",
    "longname": "Method.events",
    "memberof": "Method",
    "name": "events",
    "params": [],
    "scope": "static",
    "summary": "Template donde se almacenan los eventos que pueden ocurrir en profileFeed, y lo que se debe hacer en caso de llamarlos."
  },
  "Method.helpers": {
    "filename": "profileFeed.js",
    "filepath": "https://github.com/MarcRodriguez95/meteorFacebook/tree/master/client/views/profile/profileFeed/profileFeed.js",
    "ismethod": "true",
    "kind": "function",
    "lineno": 74,
    "locus": "profileFeed",
    "longname": "Method.helpers",
    "memberof": "Method",
    "name": "helpers",
    "params": [],
    "scope": "static",
    "summary": "Es el metodo que comprueba la información del usuario y otorga información según unas reglas."
  },
  "Method.onCreated": {
    "filename": "profileFeed.js",
    "filepath": "https://github.com/MarcRodriguez95/meteorFacebook/tree/master/client/views/profile/profileFeed/profileFeed.js",
    "ismethod": "true",
    "kind": "function",
    "lineno": 2,
    "locus": "profileFeed",
    "longname": "Method.onCreated",
    "memberof": "Method",
    "name": "onCreated",
    "params": [
      {
        "description": "<p>nombre del usuario.</p>",
        "name": "username",
        "optional": true,
        "type": {
          "names": [
            "Object"
          ],
          "parsedType": {
            "name": "Object",
            "type": "NameExpression"
          }
        }
      }
    ],
    "scope": "static",
    "summary": "Es el metodo relacionado con las historias del perfil del usuario especificado."
  },
  "Method.statusPlaceholder": {
    "filename": "profileFeed.js",
    "filepath": "https://github.com/MarcRodriguez95/meteorFacebook/tree/master/client/views/profile/profileFeed/profileFeed.js",
    "ismethod": "true",
    "kind": "function",
    "lineno": 82,
    "locus": "profileFeed",
    "longname": "Method.statusPlaceholder",
    "memberof": "Method",
    "name": "statusPlaceholder",
    "params": [
      {
        "description": "<p>nombre del usuario, con firstname y lastname.</p>",
        "name": "profileUser",
        "optional": true,
        "type": {
          "names": [
            "Object"
          ],
          "parsedType": {
            "name": "Object",
            "type": "NameExpression"
          }
        }
      }
    ],
    "scope": "static",
    "summary": "Es el metodo que detecta si el usuario esta en su propio perfil y de ese modo escribe en su propio muero, o esta en el perfil de otra persona y quiere escribirle algo."
  },
  "Method.stories": {
    "filename": "profileFeed.js",
    "filepath": "https://github.com/MarcRodriguez95/meteorFacebook/tree/master/client/views/profile/profileFeed/profileFeed.js",
    "ismethod": "true",
    "kind": "function",
    "lineno": 98,
    "locus": "profileFeed",
    "longname": "Method.stories",
    "memberof": "Method",
    "name": "stories",
    "params": [
      {
        "description": "<p>nombre del usuario, con firstname y lastname.</p>",
        "name": "profileUser",
        "optional": true,
        "type": {
          "names": [
            "Object"
          ],
          "parsedType": {
            "name": "Object",
            "type": "NameExpression"
          }
        }
      }
    ],
    "scope": "static",
    "summary": "Es el metodo que recoge las historias escritas en el perfil de cierto usuario."
  }
};
