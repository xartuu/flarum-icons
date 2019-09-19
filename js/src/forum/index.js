import app from 'flarum/app';
import {
  extend
} from 'flarum/extend';
import Page from 'flarum/components/Page';

import Icon from '../common/models/Icon';

app.initializers.add('fajuu-icons', app => {
  app.store.models.icons = Icon;

  if (window.FontAwesomeKitConfig) extend(Page.prototype, 'config', function(config) {
    app.store.all('icons').map(icon => {
      if (icon.isActive()) {

        document.querySelectorAll(icon.elementPath()).forEach(e => {
          var regex = new RegExp(icon.originalIcon(), "g");
          if (e) e.setAttribute("class", e.getAttribute("class").replace(regex, icon.modifiedIcon()));
        });


        /*
        if(window.FontAwesomeKitConfig.method == "css") {
        	document.querySelectorAll(icon.elementPath()).forEach(e => {
        		var regex = new RegExp(icon.originalIcon(),"g");
        		if(e) e.setAttribute("class", e.getAttribute("class").replace(regex, icon.modifiedIcon()));
        	});
        }
				
        if(window.FontAwesomeKitConfig.method == "js") {

        	var ep = icon.elementPath();
        	if(ep.slice(-1) == 'i' || ep.slice(-1) == 'a') {
        		var element = ep.slice(0, -1) + "svg";
        	}

        	document.querySelectorAll(element).forEach(e => {

        		var o = icon.originalIcon().split(" ");
        		var m = icon.modifiedIcon().split(" ");
        		
        		var regexIcon = new RegExp(o[1],"g");
        		e.setAttribute("class", e.getAttribute("class").replace(regexIcon, m[1]));

        		var regexStyle = new RegExp(o[0],"g");
        		e.setAttribute("data-prefix", e.getAttribute("data-prefix").replace(regexStyle, m[0]));
        	});
        }
        */

      }
    });
  });
});