# Documentation isn't finished yet.
The Flashstore API lets you retrieve information about posted Flashcord Modules, Replugged Plugins and etc. It is currently a read-only API which will be used only for internal infrastructure or making more advanced versions of FlashCFG (The Flashcord Store Template's quick store & embed configurator).

### API Commands & Examples (API Version 2.01)
| Arguments | Server Response Example | Explanation |
|:---|:---:|----:|
**GET** | *MISSING_ARGUMENT* | What are you trying to GET? Give me some more indications! |
**GET/MODULES** | *['siriusbyt', '["infnite_chat_effects","extended_chat_effects"]']* | Get every single Flashcord Module posted on the Flashcord Store |
**GET/PLUGINS** | *['siriusbyt', '["themehooker"]', 'tharki-god', '["discordbypasses","fakedeafen","atsomeone","alwaystyping"]', 'eastarctica', '["nomoreforg"]']* | Get every single Plugins posted on the Flashcord Store. |
**GET/USERS** | *['siriusbyt', 'tharki-god', 'eastarctica']* | Get every single Users who posted on the Flashcord Store something. |
**GET/PLUGINS/THARKI-GOD** | *["discordbypasses","fakedeafen","atsomeone","alwaystyping"]', 'eastarctica', '["nomoreforg"]']* | Get every single Plugins posted on the Flashcord Store. |

#### ℹ️ The server source code will **not** be released.
