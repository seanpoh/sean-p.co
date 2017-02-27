
HTMLElement.prototype.addClass = function(string) {
  if (!(string instanceof Array)) {
    string = string.split(' ');
  }
  for(var i = 0, len = string.length; i < len; ++i) {
    if (string[i] && !new RegExp('(\\s+|^)' + string[i] + '(\\s+|$)').test(this.className)) {
      this.className = this.className.trim() + ' ' + string[i];
    }}}

HTMLElement.prototype.toggleClass = function(string) {
  if (string) {
    if (new RegExp('(\\s+|^)' + string + '(\\s+|$)').test(this.className)) {
      this.className = this.className.replace(new RegExp('(\\s+|^)' + string + '(\\s+|$)'), ' ').trim();
    } else {
      this.className = this.className.trim() + ' ' + string;
    }}}

    HTMLElement.prototype.removeClass = function(string) {
      if (!(string instanceof Array)) {
        string = string.split(' ');
      }

      for(var i = 0, len = string.length; i < len; ++i) {
        this.className = this.className.replace(new RegExp('(\\s+|^)' + string[i] + '(\\s+|$)'), ' ').trim();
      }}


var seconda = function(){
        document.getElementById("second").toggleClass("topa");}
        var thirda = function(){
                document.getElementById("third").toggleClass("top");}
