# Documentation isn't finished yet.
The Flashstore API lets you retrieve information about posted Flashcord Modules, Replugged Plugins and etc. It is currently a read-only API which will be used only for internal infrastructure or making more advanced versions of FlashCFG (The Flashcord Store Template's quick store & embed configurator).

### API Commands (v3.0)
| API Commands | Explanation |
|:---|:---|
GET | Retrieve all main server data (Currently does NOT pull view/install/splash text data)
GET/[MODULES/PLUGINS/THEMES] | Retrieve all the internal names of the specified Flashcord Addon type
GET/USERS | Retrieve all users who published an addon to the Flashcord Store
GET/SPLASH_TEXT | Get a funny (or cringe) text
GET/API_VERSION | Get the server's running API Version
GET/SERVER_VERSION | Get the Server's running version
GET/[VIEWS/INSTALLS]/[internal_name] | Get the amount of views/installs for [internal_name], works with Replugged IDs
ADD_STAT/[VIEWS/INSTALLS]/[internal_name] | Add a views/installs for [internal_name], works with Replugged IDs. Can only done once


## This code will soon be deprecated
The Flashcord API is going to be replaced by the Sirio Network API.

#### ℹ️ The server source code will **not** be released.
except now it is lol go laugh https://github.com/SiriusBYT/Flashcord_API-Server
