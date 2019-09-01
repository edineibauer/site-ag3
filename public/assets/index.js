/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

    'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
            elem.classList.remove( c );
        };
    }
    else {
        hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }

    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

// transport
    if ( typeof define === 'function' && define.amd ) {
        // AMD
        define( classie );
    } else {
        // browser global
        window.classie = classie;
    }

})( window );

/**
 * jquery.elastislide.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {

    'use strict';

    /*
    * debouncedresize: special jQuery event that happens once after a window resize
    *
    * latest version and complete README available on Github:
    * https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
    *
    * Copyright 2011 @louis_remi
    * Licensed under the MIT license.
    */
    var $event = $.event,
        $special,
        resizeTimeout;

    $special = $event.special.debouncedresize = {
        setup: function() {
            $( this ).on( "resize", $special.handler );
        },
        teardown: function() {
            $( this ).off( "resize", $special.handler );
        },
        handler: function( event, execAsap ) {
            // Save the context
            var context = this,
                args = arguments,
                dispatch = function() {
                    // set correct event type
                    event.type = "debouncedresize";
                    $event.dispatch.apply( context, args );
                };

            if ( resizeTimeout ) {
                clearTimeout( resizeTimeout );
            }

            execAsap ?
                dispatch() :
                resizeTimeout = setTimeout( dispatch, $special.threshold );
        },
        threshold: 150
    };

    // ======================= imagesLoaded Plugin ===============================
    // https://github.com/desandro/imagesloaded

    // $('#my-container').imagesLoaded(myFunction)
    // execute a callback when all images have loaded.
    // needed because .load() doesn't work on cached images

    // callback function gets image collection as argument
    //  this is the container

    // original: mit license. paul irish. 2010.
    // contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

    // blank image data-uri bypasses webkit log warning (thx doug jones)
    var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

    $.fn.imagesLoaded = function( callback ) {
        var $this = this,
            deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
            hasNotify = $.isFunction(deferred.notify),
            $images = $this.find('img').add( $this.filter('img') ),
            loaded = [],
            proper = [],
            broken = [];

        // Register deferred callbacks
        if ($.isPlainObject(callback)) {
            $.each(callback, function (key, value) {
                if (key === 'callback') {
                    callback = value;
                } else if (deferred) {
                    deferred[key](value);
                }
            });
        }

        function doneLoading() {
            var $proper = $(proper),
                $broken = $(broken);

            if ( deferred ) {
                if ( broken.length ) {
                    deferred.reject( $images, $proper, $broken );
                } else {
                    deferred.resolve( $images );
                }
            }

            if ( $.isFunction( callback ) ) {
                callback.call( $this, $images, $proper, $broken );
            }
        }

        function imgLoaded( img, isBroken ) {
            // don't proceed if BLANK image, or image is already loaded
            if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
                return;
            }

            // store element in loaded images array
            loaded.push( img );

            // keep track of broken and properly loaded images
            if ( isBroken ) {
                broken.push( img );
            } else {
                proper.push( img );
            }

            // cache image and its state for future calls
            $.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

            // trigger deferred progress method if present
            if ( hasNotify ) {
                deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
            }

            // call doneLoading and clean listeners if all images are loaded
            if ( $images.length === loaded.length ){
                setTimeout( doneLoading );
                $images.unbind( '.imagesLoaded' );
            }
        }

        // if no images, trigger immediately
        if ( !$images.length ) {
            doneLoading();
        } else {
            $images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
                // trigger imgLoaded
                imgLoaded( event.target, event.type === 'error' );
            }).each( function( i, el ) {
                var src = el.src;

                // find out if this image has been already checked for status
                // if it was, and src has not changed, call imgLoaded on it
                var cached = $.data( el, 'imagesLoaded' );
                if ( cached && cached.src === src ) {
                    imgLoaded( el, cached.isBroken );
                    return;
                }

                // if complete is true and browser supports natural sizes, try
                // to check for image status manually
                if ( el.complete && el.naturalWidth !== undefined ) {
                    imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
                    return;
                }

                // cached images don't fire load sometimes, so we reset src, but only when
                // dealing with IE, or image is complete (loaded) and failed manual check
                // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
                if ( el.readyState || el.complete ) {
                    el.src = BLANK;
                    el.src = src;
                }
            });
        }

        return deferred ? deferred.promise( $this ) : $this;
    };

    // global
    var $window = $( window ),
        Modernizr = window.Modernizr;

    $.Elastislide = function( options, element ) {

        this.$el = $( element );
        this._init( options );

    };

    $.Elastislide.defaults = {
        // orientation 'horizontal' || 'vertical'
        orientation : 'horizontal',
        // sliding speed
        speed : 500,
        // sliding easing
        easing : 'ease-in-out',
        // the minimum number of items to show.
        // when we resize the window, this will make sure minItems are always shown
        // (unless of course minItems is higher than the total number of elements)
        minItems : 3,
        // index of the current item (left most item of the carousel)
        start : 0,
        // click item callback
        onClick : function( el, position, evt ) { return false; },
        onReady : function() { return false; },
        onBeforeSlide : function() { return false; },
        onAfterSlide : function() { return false; }
    };

    $.Elastislide.prototype = {

        _init : function( options ) {

            // options
            this.options = $.extend( true, {}, $.Elastislide.defaults, options );

            // https://github.com/twitter/bootstrap/issues/2870
            var self = this,
                transEndEventNames = {
                    'WebkitTransition' : 'webkitTransitionEnd',
                    'MozTransition' : 'transitionend',
                    'OTransition' : 'oTransitionEnd',
                    'msTransition' : 'MSTransitionEnd',
                    'transition' : 'transitionend'
                };

            this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

            // suport for css transforms and css transitions
            this.support = Modernizr.csstransitions && Modernizr.csstransforms;

            // current item's index
            this.current = this.options.start;

            // control if it's sliding
            this.isSliding = false;

            this.$items = this.$el.children( 'li' );
            // total number of items
            this.itemsCount = this.$items.length;
            if( this.itemsCount === 0 ) {

                return false;

            }
            this._validate();
            // remove white space
            this.$items.detach();
            this.$el.empty();
            this.$el.append( this.$items );

            // main wrapper
            this.$el.wrap( '<div class="elastislide-wrapper elastislide-loading elastislide-' + this.options.orientation + '"></div>' );

            // check if we applied a transition to the <ul>
            this.hasTransition = false;

            // add transition for the <ul>
            this.hasTransitionTimeout = setTimeout( function() {

                self._addTransition();

            }, 100 );

            // preload the images

            this.$el.imagesLoaded( function() {

                self.$el.show();

                self._layout();
                self._configure();

                if( self.hasTransition ) {

                    // slide to current's position
                    self._removeTransition();
                    self._slideToItem( self.current );

                    self.$el.on( self.transEndEventName, function() {

                        self.$el.off( self.transEndEventName );
                        self._setWrapperSize();
                        // add transition for the <ul>
                        self._addTransition();
                        self._initEvents();

                    } );

                }
                else {

                    clearTimeout( self.hasTransitionTimeout );
                    self._setWrapperSize();
                    self._initEvents();
                    // slide to current's position
                    self._slideToItem( self.current );
                    setTimeout( function() { self._addTransition(); }, 25 );

                }

                self.options.onReady();

            } );

        },
        _validate : function() {

            if( this.options.speed < 0 ) {

                this.options.speed = 500;

            }
            if( this.options.minItems < 1 || this.options.minItems > this.itemsCount ) {

                this.options.minItems = 1;

            }
            if( this.options.start < 0 || this.options.start > this.itemsCount - 1 ) {

                this.options.start = 0;

            }
            if( this.options.orientation != 'horizontal' && this.options.orientation != 'vertical' ) {

                this.options.orientation = 'horizontal';

            }

        },
        _layout : function() {

            this.$el.wrap( '<div class="elastislide-carousel"></div>' );

            this.$carousel = this.$el.parent();
            this.$wrapper = this.$carousel.parent().removeClass( 'elastislide-loading' );

            // save original image sizes
            var $img = this.$items.find( 'img:first' );
            this.imgSize = { width : $img.outerWidth( true ), height : $img.outerHeight( true ) };

            this._setItemsSize();
            this.options.orientation === 'horizontal' ? this.$el.css( 'max-height', this.imgSize.height ) : this.$el.css( 'height', this.options.minItems * this.imgSize.height );

            // add the controls
            this._addControls();

        },
        _addTransition : function() {

            if( this.support ) {

                this.$el.css( 'transition', 'all ' + this.options.speed + 'ms ' + this.options.easing );

            }
            this.hasTransition = true;

        },
        _removeTransition : function() {

            if( this.support ) {

                this.$el.css( 'transition', 'all 0s' );

            }
            this.hasTransition = false;

        },
        _addControls : function() {

            var self = this;

            // add navigation elements
            this.$navigation = $( '<nav><span class="elastislide-prev">Previous</span><span class="elastislide-next">Next</span></nav>' )
                .appendTo( this.$wrapper );


            this.$navPrev = this.$navigation.find( 'span.elastislide-prev' ).on( 'mousedown.elastislide', function( event ) {

                self._slide( 'prev' );
                return false;

            } );

            this.$navNext = this.$navigation.find( 'span.elastislide-next' ).on( 'mousedown.elastislide', function( event ) {

                self._slide( 'next' );
                return false;

            } );

        },
        _setItemsSize : function() {

            // width for the items (%)
            var w = this.options.orientation === 'horizontal' ? ( Math.floor( this.$carousel.width() / this.options.minItems ) * 100 ) / this.$carousel.width() : 100;

            this.$items.css( {
                'width' : w + '%',
                'max-width' : this.imgSize.width,
                'max-height' : this.imgSize.height
            } );

            if( this.options.orientation === 'vertical' ) {

                this.$wrapper.css( 'max-width', this.imgSize.width + parseInt( this.$wrapper.css( 'padding-left' ) ) + parseInt( this.$wrapper.css( 'padding-right' ) ) );

            }

        },
        _setWrapperSize : function() {

            if( this.options.orientation === 'vertical' ) {

                this.$wrapper.css( {
                    'height' : this.options.minItems * this.imgSize.height + parseInt( this.$wrapper.css( 'padding-top' ) ) + parseInt( this.$wrapper.css( 'padding-bottom' ) )
                } );

            }

        },
        _configure : function() {

            // check how many items fit in the carousel (visible area -> this.$carousel.width() )
            this.fitCount = this.options.orientation === 'horizontal' ?
                this.$carousel.width() < this.options.minItems * this.imgSize.width ? this.options.minItems : Math.floor( this.$carousel.width() / this.imgSize.width ) :
                this.$carousel.height() < this.options.minItems * this.imgSize.height ? this.options.minItems : Math.floor( this.$carousel.height() / this.imgSize.height );

        },
        _initEvents : function() {

            var self = this;

            $window.on( 'debouncedresize.elastislide', function() {

                self._setItemsSize();
                self._configure();
                self._slideToItem( self.current );

            } );

            this.$el.on( this.transEndEventName, function() {

                self._onEndTransition();

            } );

            if( this.options.orientation === 'horizontal' ) {

                this.$el.on( {
                    swipeleft : function() {

                        self._slide( 'next' );

                    },
                    swiperight : function() {

                        self._slide( 'prev' );

                    }
                } );

            }
            else {

                this.$el.on( {
                    swipeup : function() {

                        self._slide( 'next' );

                    },
                    swipedown : function() {

                        self._slide( 'prev' );

                    }
                } );

            }

            // item click event
            this.$el.on( 'click.elastislide', 'li', function( event ) {

                var $item = $( this );

                self.options.onClick( $item, $item.index(), event );

            });

        },
        _destroy : function( callback ) {

            this.$el.off( this.transEndEventName ).off( 'swipeleft swiperight swipeup swipedown .elastislide' );
            $window.off( '.elastislide' );

            this.$el.css( {
                'max-height' : 'none',
                'transition' : 'none'
            } ).unwrap( this.$carousel ).unwrap( this.$wrapper );

            this.$items.css( {
                'width' : 'auto',
                'max-width' : 'none',
                'max-height' : 'none'
            } );

            this.$navigation.remove();
            this.$wrapper.remove();

            if( callback ) {

                callback.call();

            }

        },
        _toggleControls : function( dir, display ) {

            if( display ) {

                ( dir === 'next' ) ? this.$navNext.show() : this.$navPrev.show();

            }
            else {

                ( dir === 'next' ) ? this.$navNext.hide() : this.$navPrev.hide();

            }

        },
        _slide : function( dir, tvalue ) {

            if( this.isSliding ) {

                return false;

            }

            this.options.onBeforeSlide();

            this.isSliding = true;

            var self = this,
                translation = this.translation || 0,
                // width/height of an item ( <li> )
                itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
                // total width/height of the <ul>
                totalSpace = this.itemsCount * itemSpace,
                // visible width/height
                visibleSpace = this.options.orientation === 'horizontal' ? this.$carousel.width() : this.$carousel.height();

            if( tvalue === undefined ) {

                var amount = this.fitCount * itemSpace;

                if( amount < 0 ) {

                    return false;

                }

                if( dir === 'next' && totalSpace - ( Math.abs( translation ) + amount ) < visibleSpace ) {

                    amount = totalSpace - ( Math.abs( translation ) + visibleSpace );

                    // show / hide navigation buttons
                    this._toggleControls( 'next', false );
                    this._toggleControls( 'prev', true );

                }
                else if( dir === 'prev' && Math.abs( translation ) - amount < 0 ) {

                    amount = Math.abs( translation );

                    // show / hide navigation buttons
                    this._toggleControls( 'next', true );
                    this._toggleControls( 'prev', false );

                }
                else {

                    // future translation value
                    var ftv = dir === 'next' ? Math.abs( translation ) + Math.abs( amount ) : Math.abs( translation ) - Math.abs( amount );

                    // show / hide navigation buttons
                    ftv > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
                    ftv < totalSpace - visibleSpace ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );

                }

                tvalue = dir === 'next' ? translation - amount : translation + amount;

            }
            else {

                var amount = Math.abs( tvalue );

                if( Math.max( totalSpace, visibleSpace ) - amount < visibleSpace ) {

                    tvalue	= - ( Math.max( totalSpace, visibleSpace ) - visibleSpace );

                }

                // show / hide navigation buttons
                amount > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
                Math.max( totalSpace, visibleSpace ) - visibleSpace > amount ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );

            }

            this.translation = tvalue;

            if( translation === tvalue ) {

                this._onEndTransition();
                return false;

            }

            if( this.support ) {

                this.options.orientation === 'horizontal' ? this.$el.css( 'transform', 'translateX(' + tvalue + 'px)' ) : this.$el.css( 'transform', 'translateY(' + tvalue + 'px)' );

            }
            else {

                $.fn.applyStyle = this.hasTransition ? $.fn.animate : $.fn.css;
                var styleCSS = this.options.orientation === 'horizontal' ? { left : tvalue } : { top : tvalue };

                this.$el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : this.options.speed, complete : function() {

                        self._onEndTransition();

                    } } ) );

            }

            if( !this.hasTransition ) {

                this._onEndTransition();

            }

        },
        _onEndTransition : function() {

            this.isSliding = false;
            this.options.onAfterSlide();

        },
        _slideTo : function( pos ) {

            var pos = pos || this.current,
                translation = Math.abs( this.translation ) || 0,
                itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
                posR = translation + this.$carousel.width(),
                ftv = Math.abs( pos * itemSpace );

            if( ftv + itemSpace > posR || ftv < translation ) {

                this._slideToItem( pos );

            }

        },
        _slideToItem : function( pos ) {

            // how much to slide?
            var amount	= this.options.orientation === 'horizontal' ? pos * this.$items.outerWidth( true ) : pos * this.$items.outerHeight( true );
            this._slide( '', -amount );

        },
        // public method: adds new items to the carousel
        /*

        how to use:
        var carouselEl = $( '#carousel' ),
            carousel = carouselEl.elastislide();
        ...

        // append or prepend new items:
        carouselEl.prepend('<li><a href="#"><img src="images/large/2.jpg" alt="image02" /></a></li>');

        // call the add method:
        es.add();

        */
        add : function( callback ) {

            var self = this,
                oldcurrent = this.current,
                $currentItem = this.$items.eq( this.current );

            // adds new items to the carousel
            this.$items = this.$el.children( 'li' );
            this.itemsCount = this.$items.length;
            this.current = $currentItem.index();
            this._setItemsSize();
            this._configure();
            this._removeTransition();
            oldcurrent < this.current ? this._slideToItem( this.current ) : this._slide( 'next', this.translation );
            setTimeout( function() { self._addTransition(); }, 25 );

            if ( callback ) {

                callback.call();

            }

        },
        // public method: sets a new element as the current. slides to that position
        setCurrent : function( idx, callback ) {

            this.current = idx;

            this._slideTo();

            if ( callback ) {

                callback.call();

            }

        },
        // public method: slides to the next set of items
        next : function() {

            self._slide( 'next' );

        },
        // public method: slides to the previous set of items
        previous : function() {

            self._slide( 'prev' );

        },
        // public method: slides to the first item
        slideStart : function() {

            this._slideTo( 0 );

        },
        // public method: slides to the last item
        slideEnd : function() {

            this._slideTo( this.itemsCount - 1 );

        },
        // public method: destroys the elastislide instance
        destroy : function( callback ) {

            this._destroy( callback );

        }

    };

    var logError = function( message ) {

        if ( window.console ) {

            window.console.error( message );

        }

    };

    $.fn.elastislide = function( options ) {

        var self = $.data( this, 'elastislide' );

        if ( typeof options === 'string' ) {

            var args = Array.prototype.slice.call( arguments, 1 );

            this.each(function() {

                if ( !self ) {

                    logError( "cannot call methods on elastislide prior to initialization; " +
                        "attempted to call method '" + options + "'" );
                    return;

                }

                if ( !$.isFunction( self[options] ) || options.charAt(0) === "_" ) {

                    logError( "no such method '" + options + "' for elastislide self" );
                    return;

                }

                self[ options ].apply( self, args );

            });

        }
        else {

            this.each(function() {

                if ( self ) {

                    self._init();

                }
                else {

                    self = $.data( this, 'elastislide', new $.Elastislide( options, this ) );

                }

            });

        }

        return self;

    };

} )( jQuery, window );

/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {

    'use strict';

    $.HoverDir = function( options, element ) {

        this.$el = $( element );
        this._init( options );

    };

    // the options
    $.HoverDir.defaults = {
        speed : 300,
        easing : 'ease',
        hoverDelay : 0,
        inverse : false
    };

    $.HoverDir.prototype = {

        _init : function( options ) {

            // options
            this.options = $.extend( true, {}, $.HoverDir.defaults, options );
            // transition properties
            this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
            // support for CSS transitions
            this.support = Modernizr.csstransitions;
            // load the events
            this._loadEvents();

        },
        _loadEvents : function() {

            var self = this;

            this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {

                var $el = $( this ),
                    $hoverElem = $el.find( 'figure' ),
                    direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
                    styleCSS = self._getStyle( direction );

                if( event.type === 'mouseenter' ) {

                    $hoverElem.hide().css( styleCSS.from );
                    clearTimeout( self.tmhover );

                    self.tmhover = setTimeout( function() {

                        $hoverElem.show( 0, function() {

                            var $el = $( this );
                            if( self.support ) {
                                $el.css( 'transition', self.transitionProp );
                            }
                            self._applyAnimation( $el, styleCSS.to, self.options.speed );

                        } );


                    }, self.options.hoverDelay );

                }
                else {

                    if( self.support ) {
                        $hoverElem.css( 'transition', self.transitionProp );
                    }
                    clearTimeout( self.tmhover );
                    self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );

                }

            } );

        },
        // credits : http://stackoverflow.com/a/3647634
        _getDir : function( $el, coordinates ) {

            // the width and height of the current div
            var w = $el.width(),
                h = $el.height(),

                // calculate the x and y to get an angle to the center of the div from that x and y.
                // gets the x value relative to the center of the DIV and "normalize" it
                x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
                y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),

                // the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
                // first calculate the angle of the point,
                // add 180 deg to get rid of the negative values
                // divide by 90 to get the quadrant
                // add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
                direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;

            return direction;

        },
        _getStyle : function( direction ) {

            var fromStyle, toStyle,
                slideFromTop = { left : '0px', top : '-100%' },
                slideFromBottom = { left : '0px', top : '100%' },
                slideFromLeft = { left : '-100%', top : '0px' },
                slideFromRight = { left : '100%', top : '0px' },
                slideTop = { top : '0px' },
                slideLeft = { left : '0px' };

            switch( direction ) {
                case 0:
                    // from top
                    fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
                    toStyle = slideTop;
                    break;
                case 1:
                    // from right
                    fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
                    toStyle = slideLeft;
                    break;
                case 2:
                    // from bottom
                    fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
                    toStyle = slideTop;
                    break;
                case 3:
                    // from left
                    fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
                    toStyle = slideLeft;
                    break;
            };

            return { from : fromStyle, to : toStyle };

        },
        // apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
        _applyAnimation : function( el, styleCSS, speed ) {

            $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
            el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );

        },

    };

    var logError = function( message ) {

        if ( window.console ) {

            window.console.error( message );

        }

    };

    $.fn.hoverdir = function( options ) {

        var instance = $.data( this, 'hoverdir' );

        if ( typeof options === 'string' ) {

            var args = Array.prototype.slice.call( arguments, 1 );

            this.each(function() {

                if ( !instance ) {

                    logError( "cannot call methods on hoverdir prior to initialization; " +
                        "attempted to call method '" + options + "'" );
                    return;

                }

                if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

                    logError( "no such method '" + options + "' for hoverdir instance" );
                    return;

                }

                instance[ options ].apply( instance, args );

            });

        }
        else {

            this.each(function() {

                if ( instance ) {

                    instance._init();

                }
                else {

                    instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );

                }

            });

        }

        return instance;

    };

} )( jQuery, window );

/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
var $event = $.event,
    $special,
    resizeTimeout;

$special = $event.special.debouncedresize = {
    setup: function() {
        $( this ).on( "resize", $special.handler );
    },
    teardown: function() {
        $( this ).off( "resize", $special.handler );
    },
    handler: function( event, execAsap ) {
        // Save the context
        var context = this,
            args = arguments,
            dispatch = function() {
                // set correct event type
                event.type = "debouncedresize";
                $event.dispatch.apply( context, args );
            };

        if ( resizeTimeout ) {
            clearTimeout( resizeTimeout );
        }

        execAsap ?
            dispatch() :
            resizeTimeout = setTimeout( dispatch, $special.threshold );
    },
    threshold: 250
};

// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: MIT license. Paul Irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
    var $this = this,
        deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
        hasNotify = $.isFunction(deferred.notify),
        $images = $this.find('img').add( $this.filter('img') ),
        loaded = [],
        proper = [],
        broken = [];

    // Register deferred callbacks
    if ($.isPlainObject(callback)) {
        $.each(callback, function (key, value) {
            if (key === 'callback') {
                callback = value;
            } else if (deferred) {
                deferred[key](value);
            }
        });
    }

    function doneLoading() {
        var $proper = $(proper),
            $broken = $(broken);

        if ( deferred ) {
            if ( broken.length ) {
                deferred.reject( $images, $proper, $broken );
            } else {
                deferred.resolve( $images );
            }
        }

        if ( $.isFunction( callback ) ) {
            callback.call( $this, $images, $proper, $broken );
        }
    }

    function imgLoaded( img, isBroken ) {
        // don't proceed if BLANK image, or image is already loaded
        if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
            return;
        }

        // store element in loaded images array
        loaded.push( img );

        // keep track of broken and properly loaded images
        if ( isBroken ) {
            broken.push( img );
        } else {
            proper.push( img );
        }

        // cache image and its state for future calls
        $.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

        // trigger deferred progress method if present
        if ( hasNotify ) {
            deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
        }

        // call doneLoading and clean listeners if all images are loaded
        if ( $images.length === loaded.length ){
            setTimeout( doneLoading );
            $images.unbind( '.imagesLoaded' );
        }
    }

    // if no images, trigger immediately
    if ( !$images.length ) {
        doneLoading();
    } else {
        $images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
            // trigger imgLoaded
            imgLoaded( event.target, event.type === 'error' );
        }).each( function( i, el ) {
            var src = el.src;

            // find out if this image has been already checked for status
            // if it was, and src has not changed, call imgLoaded on it
            var cached = $.data( el, 'imagesLoaded' );
            if ( cached && cached.src === src ) {
                imgLoaded( el, cached.isBroken );
                return;
            }

            // if complete is true and browser supports natural sizes, try
            // to check for image status manually
            if ( el.complete && el.naturalWidth !== undefined ) {
                imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
                return;
            }

            // cached images don't fire load sometimes, so we reset src, but only when
            // dealing with IE, or image is complete (loaded) and failed manual check
            // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
            if ( el.readyState || el.complete ) {
                el.src = BLANK;
                el.src = src;
            }
        });
    }

    return deferred ? deferred.promise( $this ) : $this;
};

/**
 * jquery elastic_grid
 *
 * Copyright 2013, vukhanhtruong
 * http://www.bonchen.net
 */
function parseVideoURL(url) {

    function getParm(url, base) {
        var re = new RegExp("(\\?|&)" + base + "\\=([^&]*)(&|$)");
        var matches = url.match(re);
        if (matches) {
            return(matches[2]);
        } else {
            return("");
        }
    }

    var retVal = {};
    var matches;
    var shortYoutubeRegExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

    if (url.indexOf("youtube.com/watch") != -1) {
        retVal.provider = "youtube";
        retVal.id = getParm(url, "v");
        retVal.embed = '//www.youtube.com/embed/'+retVal.id+'?fs=0';
    } else if (matches = url.match(shortYoutubeRegExp)) {
        // console.log(matches[2]);
        retVal.provider = "youtube";
        retVal.id = matches[2];
        retVal.embed = '//www.youtube.com/embed/'+retVal.id+'?fs=0';
    } else if (matches = url.match(/vimeo.com\/(\d+)/)) {
        retVal.provider = "vimeo";
        retVal.id = matches[1];
        retVal.embed = '//player.vimeo.com/video/'+retVal.id+'?fullscreen=0';
    }

    return(retVal);
}

$(function() {
    $.elastic_grid = {
        version: '1.0'
    };
    $.fn.elastic_grid = function(config){
        config = $.extend({}, {
            items: null,
            filterEffect: '',
            hoverDirection: true,
            hoverDelay: 0,
            hoverInverse: false,
            expandingHeight: 500,
            expandingSpeed: 300,
            callback: function() {}
        }, config);

        // initial container object
        var container = $(this);
        // number of questions
        var numOfItems = config.items.length;
        if(numOfItems == 0){
            return false;
        }

        //initial filter nav
        container.html('<div class="wagwep-container"><nav id="porfolio-nav" class="clearfix"><ul id="portfolio-filter" class="nav nav-tabs clearfix"></ul></nav></div>');

        //initial items
        var gridContent = "";
        var ulObject = $('<ul id="og-grid" class="og-grid"></ul>');
        for (itemIdx = 0; itemIdx < numOfItems; itemIdx++) {
            if(config.items[itemIdx] != undefined){
                var item = config.items[itemIdx];

                //initial new li
                liObject = $('<li></li>');

                //get tags
                tags = item.tags;
                strTag = "";
                for (var i = tags.length - 1; i >= 0; i--) {
                    strTag += ","+tags[i];
                };
                strTag = strTag.substring(1);
                liObject.attr('data-tags', strTag);

                //initial a object
                aObject = $('<a></a>');
                aObject.attr('href', 'javascript:;;');

                //initial default photo
                imgObject = $('<img/>');
                var thumbURL = item.thumbnail[0];
                var largeURL = item.large[0];

                var video = parseVideoURL(largeURL);
                if(video.provider == 'youtube' || video.provider == 'vimeo'){
                    largeURL = false;

                    imgObject.attr('data-video', video.embed);
                }

                imgObject.attr('src', thumbURL);
                imgObject.attr('data-largesrc', largeURL);
                imgObject.attr('alt', item.img_title[0]);
                imgObject.attr('title', item.img_title[0]);
                // imgObject.attr('title', item.title);


                //initial hover direction
                spanObject = $('<span></span>');
                spanObject.html(item.title);
                figureObject = $('<figure></figure>');
                figureObject.append(spanObject);

                imgObject.appendTo(aObject);
                figureObject.appendTo(aObject);
                aObject.appendTo(liObject);
                liObject.appendTo(ulObject);
            }
        }
        if(config.filterEffect == ''){
            config.filterEffect = 'moveup';
        }
        ulObject.addClass('effect-'+config.filterEffect);
        ulObject.appendTo(container);
        /**************************************************************************
         * HOVER DIR
         ***************************************************************************/
        if(config.hoverDirection == true){
            ulObject.find('li').each( function() {
                $(this).hoverdir({
                    hoverDelay : config.hoverDelay,
                    inverse : config.hoverInverse
                });
            } );
        }

        /**************************************************************************
         * Tags to filter
         ***************************************************************************/
        var porfolio_filter = container.find('#portfolio-filter');
        var items = ulObject.find('li'),
            itemsByTags = {};
        numOfTag = 0;

        // Looping though all the li items:

        items.each(function(i){
            var elem = $(this),
                tags = elem.data('tags').split(',');

            // Adding a data-id attribute. Required by the Quicksand plugin:
            elem.attr('data-id',i);

            elem.addClass(config.showAllText.toLowerCase().replace(' ','-'));
            $.each(tags,function(key,value){
                // Removing extra whitespace:
                value = $.trim(value);

                //add class tags to li
                elem.addClass(value.toLowerCase().replace(' ','-'));

                if(!(value in itemsByTags)){
                    // Create an empty array to hold this item:
                    itemsByTags[value] = [];
                    numOfTag++;
                }

                // Each item is added to one array per tag:
                itemsByTags[value].push(elem);
            });

        });

        if(numOfTag > 1){
            // Creating the "Everything" option in the menu:
            createList(config.showAllText);

            // Looping though the arrays in itemsByTags:
            $.each(itemsByTags,function(k,v){
                createList(k);
            });
        }else{
            porfolio_filter.remove();
        }


        porfolio_filter.find('a').bind('click',function(e){
            //close expanding preview
            $grid.find('li.og-expanded').find('a').trigger('click');
            $grid.find('.og-close').trigger('click');

            $this = $(this);
            $this.css('outline','none');
            porfolio_filter.find('.current').removeClass('current');
            $this.parent().addClass('current');

            var filterVal = $this.text().toLowerCase().replace(' ','-');
            var count  = numOfItems;
            ulObject.find('li').each( function(i, el) {
                classie.remove( el, 'hidden' );
                classie.remove( el, 'animate' );
                if(!--count){
                    setTimeout( function() {
                        doAnimateItems(ulObject.find('li'), filterVal);
                    }, 1);
                }
            });

            localStorage.setItem("filter", true);
            localStorage.setItem("filter-all", false);

            if (filterVal === config.showAllText.toLowerCase().replace(' ','-')) {
                localStorage.setItem("filter-all", true);
            }

            $body.animate( { scrollTop : $this.offset().top - 110 }, settings.speed );

            return false;
        });

        function doAnimateItems(objectLi, filterVal){
            objectLi.each(function(i, el) {
                if(classie.has( el, filterVal ) ) {
                    classie.toggle( el, 'animate' );
                    classie.remove( el, 'hidden' );
                }else{
                    classie.add( el, 'hidden' );
                    classie.remove( el, 'animate' );
                }
            });
        }

        porfolio_filter.find('li:first').addClass('current');

        function createList(text){
            var filter = text.toLowerCase().replace(' ','-');
            // This is a helper function that takes the
            // text of a menu button and array of li items
            if(text != ''){
                var li = $('<li>');
                var a = $('<a>',{
                    html: text,
                    'data-filter': '.'+filter,
                    href:'#',
                    'class':'filter',
                }).appendTo(li);

                li.appendTo(porfolio_filter);
            }
        }
        /**************************************************************************
         * EXPANDING
         ***************************************************************************/
            // list of items
        var $grid = ulObject,
            // the items
            $items = $grid.children( 'li' ),
            // current expanded item's index
            current = -1,
            // position (top) of the expanded item
            // used to know if the preview will expand in a different row
            previewPos = -1,
            // extra amount of pixels to scroll the window
            scrollExtra = 0,
            // extra margin when expanded (between preview overlay and the next items)
            marginExpanded = 10,
            $window = $( window ), winsize,
            $body = $( 'html, body' ),
            // transitionend events
            transEndEventNames = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition' : 'transitionend',
                'OTransition' : 'oTransitionEnd',
                'msTransition' : 'MSTransitionEnd',
                'transition' : 'transitionend'
            },
            transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
            // support for csstransitions
            support = Modernizr.csstransitions,
            // default settings
            settings = {
                minHeight : config.expandingHeight,
                speed : config.expandingSpeed,
                easing : 'ease'
            };


        // add more items to the grid.
        // the new items need to appended to the grid.
        // after that call Grid.addItems(theItems);
        function addItems( $newitems ) {

            $items = $items.add( $newitems );

            $newitems.each( function() {
                var $item = $( this );
                $item.data( {
                    offsetTop : $item.offset().top,
                    height : $item.height()
                } );
            } );

            initItemsEvents( $newitems );

        }

        // saves the item´s offset top and height (if saveheight is true)
        function saveItemInfo( saveheight ) {
            $items.each( function() {
                var $item = $( this );
                $item.data( 'offsetTop', $item.offset().top );
                if( saveheight ) {
                    $item.find('img').load(function() {
                        $item.data( 'height', $item.height());
                    }).each(function() {
                        if(this.complete) $(this).load();
                    });

                    setTimeout(function(){
                        $item.data( 'height', $item.height());
                    });
                }
            } );
        }

        function initEvents() {

            // when clicking an item, show the preview with the item´s info and large image.
            // close the item if already expanded.
            // also close if clicking on the item´s cross
            initItemsEvents( $items );

            // on window resize get the window´s size again
            // reset some values..
            $window.on( 'debouncedresize', function() {

                scrollExtra = 0;
                previewPos = -1;
                // save item´s offset
                saveItemInfo();
                getWinSize();
                var preview = $.data( this, 'preview' );
                if( typeof preview != 'undefined' ) {
                    hidePreview();
                }

            } );

        }

        function initItemsEvents( $items ) {
            $items.on( 'click', 'span.og-close', function() {
                hidePreview();
                return false;
            } ).children( 'a' ).on( 'click', function(e) {
                var $item = $( this ).parent();
                //$(this).addClass('unhoverdir');
                //remove animate class
                $item.removeClass('animate');

                localStorage.setItem('filter', false);

                getWinSize();
                // check if item already opened
                current === $item.index() ? hidePreview($(this)) : showPreview( $item );
                return false;

            } );
        }

        function getWinSize() {
            winsize = { width : $window.width(), height : $window.height() };
        }

        function showPreview( $item ) {
            hidePreview();

            // console.log('--show--');

            var preview = $.data( this, 'preview' ),
                // item´s offset top
                position = $item[0].offsetTop; // $item.data( 'offsetTop' );

            scrollExtra = 0;

            // if a preview exists and previewPos is different (different row) from item´s top then close it
            if( typeof preview != 'undefined' ) {

                // not in the same row
                if( previewPos !== position ) {
                    // if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
                    if( position > previewPos ) {
                        scrollExtra = preview.height;
                    }
                    hidePreview();
                }
                // same row
                else {
                    preview.update( $item );
                    return false;
                }

            }

            // update previewPos
            previewPos = position;
            // initialize new preview for the clicked item
            preview = $.data( this, 'preview', new Preview( $item ) );
            // expand preview overlay
            preview.open();

        }

        function hidePreview() {
            //hide pointer
            $items.find('.og-pointer').remove();

            current = -1;
            var preview = $.data( this, 'preview' );

            if(typeof preview == "undefined"){
                //do nothing
            }else{
                preview.close();
            }
            $.removeData( this, 'preview' );
        }

        // the preview obj / overlay
        function Preview( $item ) {
            this.$item = $item;
            this.expandedIdx = this.$item.index();
            this.create();
            this.update();
        }

        Preview.prototype = {
            create : function() {
                // create Preview structure:
                this.$title = $( '<h3></h3>' );
                this.$description = $( '<p></p>' );
                this.$href = $( '<a href="#">Visit website</a>' );
                this.$detailButtonList = $( '<span class="buttons-list"></span>' );
                this.$details = $( '<div class="og-details"></div>' ).append( this.$title, this.$description, this.$detailButtonList );
                this.$loading = $( '<div class="og-loading"></div>' );
                this.$fullimage = $( '<div class="og-fullimg"></div>' ).append( this.$loading );
                this.$closePreview = $( '<span class="og-close"></span>' );
                this.$previewInner = $( '<div class="og-expander-inner"></div>' ).append( this.$closePreview, this.$fullimage, this.$details );
                this.$previewEl = $( '<div class="og-expander"></div>' ).append( this.$previewInner );
                // append preview element to the item
                this.$item.append( $('<div class="og-pointer"></div>') );
                this.$item.append( this.getEl() );

                // set the transitions for the preview and the item
                if( support ) {
                    this.setTransition();
                }
            },
            update : function( $item ) {

                if( $item ) {
                    this.$item = $item;
                }

                // if already expanded remove class "og-expanded" from current item and add it to new item
                if( current !== -1 ) {
                    var $currentItem = $items.eq( current );
                    $currentItem.removeClass( 'og-expanded' );
                    this.$item.addClass( 'og-expanded' );
                    // position the preview correctly
                    this.positionPreview();
                }

                // update current value
                current = this.$item.index();


                // update preview´s content
                if(typeof config.items[current] === "undefined"){
                    //nothing happen
                }else{
                    eldata = config.items[current];

                    this.$title.html( eldata.title );
                    this.$description.html( eldata.description );
                    //clear current button list
                    this.$detailButtonList.html("");
                    urlList = eldata.button_list;

                    if(urlList.length > 0)
                    {
                        for (i = 0; i < urlList.length; i++)
                        {
                            var linkTarget = (urlList[i]['new_window']) ? '_blank' : '_self';
                            var ObjA = $('<a target="'+linkTarget+'"></a>');
                            ObjA.addClass('link-button');
                            if(i==0){
                                ObjA.addClass('first');
                            }
                            ObjA.attr("href", urlList[i]['url']);
                            ObjA.html( urlList[i]['title']);
                            this.$detailButtonList.append(ObjA);
                        }
                    }

                    var self = this;

                    // remove the current image in the preview
                    if( typeof self.$largeImg != 'undefined' ) {
                        self.$largeImg.remove();
                    }


                    //relate photo
                    glarge = eldata.large;
                    gthumbs = eldata.thumbnail;
                    imgTitle = eldata.img_title;
                    if(glarge.length == gthumbs.length && glarge.length > 0){
                        var ObjUl = $('<ul></ul>');
                        for (i = 0; i < gthumbs.length; i++)
                        {
                            var thumbURL = gthumbs[i];
                            var largeURL = glarge[i];

                            var Objli = $('<li></li>');
                            var ObjA = $('<a href="javascript:;;"></a>');
                            var ObjImg = $('<img/>');

                            ObjImg.addClass('related_photo');
                            if(i==0){
                                ObjImg.addClass('selected');
                            }

                            var video = parseVideoURL(largeURL);
                            if(video.provider == 'youtube' || video.provider == 'vimeo'){
                                largeURL = false;

                                ObjImg.attr('data-video', video.embed);
                            }

                            ObjImg.attr("src", thumbURL);
                            ObjImg.attr("data-large", largeURL);
                            ObjImg.attr('alt', imgTitle[i]);
                            ObjImg.attr('title', imgTitle[i]);
                            ObjA.append(ObjImg);
                            Objli.append(ObjA);
                            ObjUl.append(Objli);
                        }
                        // ObjUl.addClass("og-grid-small");
                        ObjUl.addClass("elastislide-list");
                        ObjUl.elastislide();
                        var carousel = $('<div class="elastislide-wrapper elastislide-horizontal"></div>');
                        carousel.append(ObjUl).find('.related_photo').bind('click', function(){
                            carousel.find('.selected').removeClass('selected');
                            $(this).addClass('selected');

                            $youtube = $(this).data('video');
                            $largePhoto = $(this).data('large');
                            $titlePhoto = $(this).attr('title');

                            if($largePhoto && (typeof $youtube != undefined)){
                                $('<img/>').load(function(){
                                    self.$fullimage.find('iframe').fadeOut(500, function(){
                                        self.$fullimage.find('img').fadeIn(500).attr('alt', $titlePhoto).attr('title', $titlePhoto).attr('src', $largePhoto);
                                    })
                                }).attr('alt', $titlePhoto).attr('title', $titlePhoto).attr('src', $largePhoto);
                            }else{
                                self.$fullimage.find('img').fadeOut(500, function(){
                                    self.$fullimage.find('iframe').fadeIn(500).attr('src', $youtube);
                                });
                            }
                        });
                        self.$details.append('<div class="infosep"></div>');
                        self.$details.append(carousel);
                    }else{
                        self.$details.find('.infosep, .og-grid-small').remove();
                    }


                    // preload large image and add it to the preview
                    // for smaller screens we don´t display the large image (the media query will hide the fullimage wrapper)
                    if( self.$fullimage.is( ':visible' ) ) {
                        this.$loading.show();

                        var iframe = $('<iframe width="100%" height="100%" frameborder="0"></iframe>');
                        var img = $( '<img/>' );
                        self.$fullimage.append(iframe);
                        self.$fullimage.append(img);

                        var firstChild  = self.$item.children('a').find('img');
                        var $youtube    = firstChild.data( 'video' );
                        var $largePhoto = firstChild.data( 'largesrc' );
                        if($largePhoto && (typeof $youtube != undefined)){
                            img.load( function() {
                                var $img = $( this );
                                if( $img.attr( 'src' ) === $largePhoto ) {
                                    self.$loading.hide();
                                    // self.$fullimage.find('iframe, img').fadeOut(500, function(){
                                    //     self.$fullimage.find('img').attr('src', $largePhoto);
                                    // });
                                    self.$fullimage.find( 'img' ).remove();
                                    self.$largeImg = $img.fadeIn( 350 );
                                    self.$fullimage.find('iframe').fadeOut(500, function(){
                                        self.$fullimage.append( self.$largeImg );
                                    });
                                }
                            } ).attr( 'src', eldata.large[0] );

                        }else{
                            self.$loading.hide();

                            self.$fullimage.find('img').fadeOut(500, function(){
                                // iframe.ready(function (){
                                self.$fullimage.find('iframe').fadeIn(500).attr('src', $youtube);
                                // });
                            });
                        }
                    }

                }
            },
            open : function() {

                setTimeout( $.proxy( function() {
                    // set the height for the preview and the item
                    this.setHeights();
                    // scroll to position the preview in the right place
                    this.positionPreview();
                }, this ), 25 );

            },
            close : function() {

                var self = this,
                    onEndFn = function() {
                        if( support ) {
                            $( this ).off( transEndEventName );
                        }
                        self.$item.removeClass( 'og-expanded' );
                        self.$previewEl.remove();
                    };

                setTimeout( $.proxy( function() {

                    if( typeof this.$largeImg !== 'undefined' ) {
                        this.$largeImg.fadeOut( 'fast' );
                    }
                    this.$previewEl.css( 'height', 0 );
                    // the current expanded item (might be different from this.$item)
                    var $expandedItem = $items.eq( this.expandedIdx );
                    $expandedItem.css( 'height', $expandedItem.data( 'height' ) ).on( transEndEventName, onEndFn );

                    if( !support ) {
                        onEndFn.call();
                    }

                }, this ), 25 );

                return false;

            },
            calcHeight : function() {

                var heightPreview = winsize.height - this.$item.data( 'height' ) - marginExpanded,
                    itemHeight = winsize.height;

                //console.log(heightPreview);
                if( heightPreview < settings.minHeight ) {
                    heightPreview = settings.minHeight;
                    itemHeight = settings.minHeight + this.$item.data( 'height' ) + marginExpanded;
                }
                //console.log(heightPreview);
                //console.log(this.$item.data( 'height' ));

                this.height = heightPreview;
                this.itemHeight = itemHeight;

            },
            setHeights : function() {

                var self = this,
                    onEndFn = function() {
                        if( support ) {
                            self.$item.off( transEndEventName );
                        }
                        self.$item.addClass( 'og-expanded' );
                    };

                this.calcHeight();
                this.$previewEl.css( 'height', this.height );
                this.$item.css( 'height', this.itemHeight ).on( transEndEventName, onEndFn );

                if( !support ) {
                    onEndFn.call();
                }

            },
            positionPreview : function() {
                // Last change here for offsetTop
                // scroll page
                // case 1 : preview height + item height fits in window´s height
                // case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
                // case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height

                // console.log(this.$item.offset().top, this.$item[0].offsetTop, this.$item.data( 'offsetTop' ))

                var position = this.$item[0].offsetTop,
                    previewOffsetT = this.$previewEl.offset().top - scrollExtra,
                    scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;

                var isFilter = localStorage.getItem("filter");
                var isFilterAll = localStorage.getItem("filter-all");

                if(isFilter === "false" && !isFilterAll === "false") {
                    $body.animate( { scrollTop : this.$item.offset().top }, settings.speed );
                }

                if(isFilterAll === "true") {
                    $body.animate( { scrollTop : this.$item.data( 'offsetTop' ) }, settings.speed );
                }
            },
            setTransition  : function() {
                this.$previewEl.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
                this.$item.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
            },
            getEl : function() {
                return this.$previewEl;
            }
        }

        // return {
        //     init : init,
        //     addItems : addItems
        // };
        $grid.imagesLoaded( function() {
            // initialize some events
            initEvents();

            // get window´s size
            getWinSize();

            // save item´s size and offset
            saveItemInfo( true );

            //init filter
            localStorage.setItem("filter-all", true);
        } );

    }

    let equipe = dbLocal.exeRead("equipe");
    let portifolio = dbLocal.exeRead("portifolio");
    let template = dbLocal.exeRead("__template", 1);

    let voce = {
        'nome': 'Vaga em aberto',
        'atuacao': 'Front-end Developer',
        'imagem': HOME + VENDOR + "site-ag3/public/assets/img/user." + webp("png"),
        'descricao': '',
    };

    /**
     * Equipe
     * */
    Promise.all([equipe, template]).then(d => {
        $.each(d[0], function (i, e) {
            if (typeof e.imagem !== null)
                e.imagem = e.imagem[0].urls.thumb;

            $("#equipe").append(Mustache.render(d[1].time, e));
        });
        $("#equipe").append(Mustache.render(d[1].time, voce));

        if (!navigator.onLine) {
            $("img").each(function (i, img) {
                let pat = new RegExp("\/uploads\/", "i");
                if (pat.test($(img).attr("src")))
                    $(img).attr("src", HOME + VENDOR + "site-ag3/public/assets/img/user." + webp("png"));
            })
        }
    });

    /**
     * Portifólio
     * */
    Promise.all([portifolio, template]).then(d => {
        var itens = [];
        $.each(d[0], function (i, e) {
            let thumb = [];
            let imagem = [];
            let imagemName = [];
            if (typeof e.imagens !== null) {
                $.each(e.imagens, function(i, img) {
                    thumb.push(img.urls.thumb);
                    imagem.push(img.urls['medium']);
                    imagemName.push('');
                });
            } else {
                thumb.push(HOME + "assetsPublic/img/img." + webp("png"));
                imagem.push(HOME + "assetsPublic/img/img." + webp("png"));
                imagemName.push('');
            }

            itens.push({
                'title': e.nome_do_projeto,
                'description': e.depoimento,
                'thumbnail': thumb,
                'large': imagem,
                'img_title': imagemName,
                'button_list':
                    [
                        {'title': 'Site', 'url': e.link_do_site, 'new_window': true}
                    ],
                'tags': [e.tag]
            });
        });

        $("#elastic_grid").elastic_grid({
            'showAllText': 'All',
            'filterEffect': 'moveup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 400,
            'items': itens
        });
    });

    /**
     * Animação
     * */
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > 400)
            $(".ballon").css("transform", "translate(180px, 150px)");
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    $(function () {
        $("#header10-0").css("background-image", "url('" + HOME + VENDOR + "site-ag3/public/assets/img/header." + webp("jpg") + "')");
        $("#content5-9").css("background-image", "url('" + HOME + VENDOR + "site-ag3/public/assets/img/coffe." + webp("jpg") + "')");

        if(getCookie("webp") === "false") {
            //Sem suporte a webp, change images
            $(".ballon").attr("src", HOME + VENDOR + "site-ag3/public/assets/img/pwa-ballon.png");
            $(".ballon-back").attr("src", HOME + VENDOR + "site-ag3/public/assets/img/pwa-header.png");
        }
    });

    console.log("Olá DEV, queremos os melhores para nossa missão! Se você esta vendo isso, pode ser você! Envie um email para galera.org@gmail.com com um pouco do que você sabe fazer, e retornamos caso tenhamos interesse no seu perfil. Somos uma empresa aberta a possibilidades, e desenvolvedores (principalmente) sempre são bem vindos!");
});