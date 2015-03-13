pref("extensions.shelve.max", 1);
pref("extensions.shelve.log_level", 2);
pref("extensions.shelve.logger", "none");
pref("extensions.shelve.assertions", false);
pref("extensions.shelve.debug", false);
pref("extensions.shelve.events.load", true);
pref("extensions.shelve.events.DOMContentLoaded", false);
pref("extensions.shelve.events.DOMFrameContentLoaded", false);
pref("extensions.shelve.events.TabSelect", false);
// pref("extensions.shelve.hotkey.keycode", 'F9');
pref("extensions.shelve.mime", 'webpage');
pref("extensions.shelve.auto.stop_rx", "^(about|chrome|mailto|https):");
pref("extensions.shelve.auto.blacklist_rx", "^(about|chrome|mailto):");
pref("extensions.shelve.auto.notify_user", true);
pref("extensions.shelve.default_template", "%[ctF]%e");
pref("extensions.shelve.overwrite_files", 1);
pref("extensions.shelve.text.encoding", "UTF-8");
pref("extensions.shelve.log.encoding", "UTF-8");
pref("extensions.shelve.use_download_manager.binary", false);
pref("extensions.shelve.use_download_manager.document", false);
// See http://kb.mozillazine.org/Localize_extension_descriptions
pref("extensions.shelve@thomas.link.description", "chrome://shelve/locale/shelve.properties");
pref("extensions.shelve.log.file.template", "chrome://shelve/content/log.html");
pref("extensions.shelve.log.template", "<tr>\n    <td class=\"date\" nowrap=\"nowrap\">%Y-%M-%D %h:%m</td>\n    <td class=\"description\">\n        <div class=\"title\">%[tcf]</div>\n        <div class=\"sup\">Keywords: %{keywords?}</pre>\n        <pre width=\"80\" class=\"sup\">%{clip?}</pre>\n        <pre width=\"80\" class=\"sup\">%{note?}</pre>\n    </td>\n    <td class=\"links\">\n        <a class=\"url\" href=\"%{url?}\">url</a>\n        <a class=\"local\" href=\"./%{relativeoutfile?}\">local</a>\n    </td>\n</tr>\n\n");
pref("extensions.shelve.name1", "Default Shelf");
pref("extensions.shelve.dir1", "%{shelvedir}%/%B%/%Y%/%[ctF]%e");
