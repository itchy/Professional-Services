/*
 *  SSJ 1-11-2011  -- customized by Scott Johnson to work woth forms that have existing data
 *      * validation was unacceptable because it only validated 1 item, so it has been removed
 *      * when forms were reloaded (with errors) by Rails, existing data was replaced by place holders
 *      * so, I added check for value on input fields to keep info, and commented out otehr code incase my changes created unanticipated errors
 */

/*  
 *  Html5 Form Plugin - jQuery plugin
 *  HTML5 form Validation form Internet Explorer & Firefox
 *  Version 1.2  / English
 *  
 *  written by Matias Mancini http://www.matiasmancini.com.ar 
 * 
 *  Copyright (c) 2010 Matias Mancini (http://www.matiasmancini.com.ar)
 *  Dual licensed under the MIT (MIT-LICENSE.txt)
 *  and GPL (GPL-LICENSE.txt) licenses.
 *
 *  Built for jQuery library
 *	http://jquery.com
 *
 */
(function($){
    $.fn.html5form_custom = function(options){
        $(this).each(function(){
            //default configuration properties
            var defaults = {
                async : true,
                method : $(this).attr('method'), 
                responseDiv : null,
                labels : 'show',
                colorOn : '#000000', 
                colorOff : '#a1a1a1', 
                action : $(this).attr('action'),
                messages : false,
                emptyMessage : false,
                emailMessage : false,
                allBrowsers : false 
            };   
            var opts = $.extend({}, defaults, options);
            
            //Filters latest WebKit versions only 
            if(!opts.allBrowsers){
                if($.browser.webkit && parseInt($.browser.version)>=533){
                    return false;
                }
            }
                        
            //Private properties
            var form = $(this);
            var required = new Array();
            var email = new Array();

            //Setup color & placeholder function
            function fillInput(input){
              // SSJ 1/11/2011 - only process empty fields - leave existing data
              if(input.val() == '' || input.val() == input.attr('placeholder') ){
                if(input.attr('placeholder')){
                    input.val(input.attr('placeholder'));
                    input.css('color', opts.colorOff);
                    if($.browser.mozilla){
                        input.css('-moz-box-shadow', 'none');   
                    }
                }else{
                    if(!input.data('value')){
                        if(input.val()!=''){
                            input.data('value', input.val());   
                        }
                    }else{
                        input.val(input.data('value'));
                    }   
                    input.css('color', opts.colorOn);
                }
              }  
            }
            
            //Label hiding (if required)
            if(opts.labels=='hide'){
                $(this).find('label').hide();   
            }
            
            //For each textarea & visible input excluding button, submit, radio, checkbox and select
            $.each($(':input:visible:not(:button, :submit, :radio, :checkbox, select)', form), function(i) {
                
                //Setting color & placeholder
                fillInput($(this));
                          
                //FOCUS event attach 
                //If input value == placeholder attribute will clear the field
                //If input type == url will not
                //In both cases will change the color with colorOn property                 
                $(this).bind('focus', function(ev){
                    ev.preventDefault();
                    if(this.value == $(this).attr('placeholder')){
                        if(this.getAttribute('type')!='url'){
                            $(this).attr('value', '');   
                        } 
                    }
                    $(this).css('color', opts.colorOn);
                });
                
                //BLUR event attach
                //If input value == empty calls fillInput fn
                //if input type == url and value == placeholder attribute calls fn too
                $(this).bind('blur', function(ev){
                    ev.preventDefault();
                    if(this.value == ''){
                        fillInput($(this));
                    }
                    else{
                        if((this.getAttribute('type')=='url') && ($(this).val()==$(this).attr('placeholder'))){
                            fillInput($(this));
                        }
                    }
                });
                
            });
            // SSJ 1-11-2011 remove placeholder values before submitting the form
            $(':submit', this).bind('click', function(ev){                  
              var input = $(':input:visible:not(:button, :submit, :radio, :checkbox, select)', form);                    
                   
              //Clear all empty value fields before Submit 
              $(input).each(function(){
                  if($(this).val()==$(this).attr('placeholder')){
                      $(this).val('');
                  }
              });
              // submit form
              // $(form).submit();
              return true; // this should do the default submit action
            });
                        
        });
    } 
})(jQuery);