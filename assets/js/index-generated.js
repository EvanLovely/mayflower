(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = (function (window, document, undefined) {
  "use strict";

  function setCookie(name, value, expires) {
    if (typeof expires === 'number') {
      var d = new Date();
      d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + "; " + expires + "; path=/";
    } else {
      document.cookie = name + "=" + value + "; path=/";
    }
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  return {
    setCookie: setCookie,
    getCookie: getCookie
  };
})(window, document);

},{}],2:[function(require,module,exports){
// check the value of the css :before psuedo element
// values look for "true" or "false"

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function ($el) {
  var value = "true";
  try {
    value = window.getComputedStyle($el[0], ':before').getPropertyValue('content').replace(/\"/g, '');
  } catch (err) {}
  return value === "false" ? false : true;
};

module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

module.exports = function (name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        jQuery.ajax({
            url: ma.themePath + '/js/templates/' + name + '.html',
            success: function success(data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async: false
        });
    }
    return Handlebars.templates[name];
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  $.extend($.expr[':'], {
    // jQuery find all focusable elements
    // see: https://coderwall.com/p/jqsanw/jquery-find-every-focusable-elements
    focusable: function focusable(el, index, selector) {
      return $(el).is('a, button, :input, [tabindex]');
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports['default'] = (function (window, document, $, undefined) {
  var $el = undefined,
      $elParent = undefined,
      elHeight = undefined,
      elWidth = undefined,
      lowerLimit = undefined,
      upperLimit = undefined,
      debounceTimer = undefined,
      runCode = false;

  function init(element) {
    $el = element;
    $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent();

    // default assumption as to where the screen will load
    $el.attr('data-sticky', 'top');

    updateData();

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      updateData();
    }, 1000);

    $(window).resize(function () {
      updateData();
      setPosition();
    });

    // toggle the sticky positioning
    $(window).scroll(function () {
      setPosition();
    });
  }

  function updateData() {
    var newRunCode = (0, _helpersCssControlCodeJs2['default'])($el);

    if (runCode && !newRunCode) {
      $el.removeAttr('style');
    }

    runCode = newRunCode;

    if (!runCode) {
      return;
    }

    runCode = newRunCode;
    elHeight = $el.height();
    elWidth = $elParent.width();
    upperLimit = $elParent.offset().top;
    lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

    $el.width(elWidth);
  }

  function setPosition() {
    if (!runCode) {
      $el.attr('data-sticky', 'top');
      return false;
    }

    var windowTop = $(window).scrollTop(),
        attr = $el.attr('data-sticky'),
        top = attr !== 'top' && windowTop <= upperLimit,
        middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
        bottom = attr !== 'bottom' && windowTop >= lowerLimit;

    if (top) {
      $el.attr('data-sticky', 'top');
    } else if (middle) {
      $el.attr('data-sticky', 'middle');
    } else if (bottom) {
      $el.attr('data-sticky', 'bottom');
    }
  }

  return { init: init };
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cssControlCode.js":2}],6:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("./helpers/jQueryExtend.js");

var _modulesAccordionsJs = require("./modules/accordions.js");

var _modulesAccordionsJs2 = _interopRequireDefault(_modulesAccordionsJs);

var _modulesGoogleMapJs = require("./modules/googleMap.js");

var _modulesGoogleMapJs2 = _interopRequireDefault(_modulesGoogleMapJs);

var _modulesBack2topJs = require("./modules/back2top.js");

var _modulesBack2topJs2 = _interopRequireDefault(_modulesBack2topJs);

var _modulesBannerCarouselJs = require("./modules/bannerCarousel.js");

var _modulesBannerCarouselJs2 = _interopRequireDefault(_modulesBannerCarouselJs);

var _modulesClickableJs = require("./modules/clickable.js");

var _modulesClickableJs2 = _interopRequireDefault(_modulesClickableJs);

var _modulesDropdownJs = require("./modules/dropdown.js");

var _modulesDropdownJs2 = _interopRequireDefault(_modulesDropdownJs);

var _modulesEmergencyAlertsJs = require("./modules/emergencyAlerts.js");

var _modulesEmergencyAlertsJs2 = _interopRequireDefault(_modulesEmergencyAlertsJs);

var _modulesFootnoteJs = require("./modules/footnote.js");

var _modulesFootnoteJs2 = _interopRequireDefault(_modulesFootnoteJs);

var _modulesFormValidationJs = require("./modules/formValidation.js");

var _modulesFormValidationJs2 = _interopRequireDefault(_modulesFormValidationJs);

var _modulesHideAlertJs = require("./modules/hideAlert.js");

var _modulesHideAlertJs2 = _interopRequireDefault(_modulesHideAlertJs);

var _modulesKeywordSearchJs = require("./modules/keywordSearch.js");

var _modulesKeywordSearchJs2 = _interopRequireDefault(_modulesKeywordSearchJs);

var _modulesLocationFiltersJs = require("./modules/locationFilters.js");

var _modulesLocationFiltersJs2 = _interopRequireDefault(_modulesLocationFiltersJs);

var _modulesLocationListingJs = require("./modules/locationListing.js");

var _modulesLocationListingJs2 = _interopRequireDefault(_modulesLocationListingJs);

var _modulesMainNavJs = require("./modules/mainNav.js");

var _modulesMainNavJs2 = _interopRequireDefault(_modulesMainNavJs);

var _modulesMainNavPilotJs = require("./modules/mainNavPilot.js");

var _modulesMainNavPilotJs2 = _interopRequireDefault(_modulesMainNavPilotJs);

var _modulesMobileNavJs = require("./modules/mobileNav.js");

var _modulesMobileNavJs2 = _interopRequireDefault(_modulesMobileNavJs);

var _modulesOrgSelectorJs = require("./modules/orgSelector.js");

var _modulesOrgSelectorJs2 = _interopRequireDefault(_modulesOrgSelectorJs);

var _modulesPaginationJs = require("./modules/pagination.js");

var _modulesPaginationJs2 = _interopRequireDefault(_modulesPaginationJs);

var _modulesPikadayJs = require("./modules/pikaday.js");

var _modulesPikadayJs2 = _interopRequireDefault(_modulesPikadayJs);

var _modulesResponsiveVideoJs = require("./modules/responsiveVideo.js");

var _modulesResponsiveVideoJs2 = _interopRequireDefault(_modulesResponsiveVideoJs);

var _modulesResultsHeadingJs = require("./modules/resultsHeading.js");

var _modulesResultsHeadingJs2 = _interopRequireDefault(_modulesResultsHeadingJs);

var _modulesRichTextJs = require("./modules/richText.js");

var _modulesRichTextJs2 = _interopRequireDefault(_modulesRichTextJs);

var _modulesScrollAnchorsJs = require("./modules/scrollAnchors.js");

var _modulesScrollAnchorsJs2 = _interopRequireDefault(_modulesScrollAnchorsJs);

var _modulesFormInputsJs = require("./modules/formInputs.js");

var _modulesFormInputsJs2 = _interopRequireDefault(_modulesFormInputsJs);

var _modulesUtilNavJs = require("./modules/utilNav.js");

var _modulesUtilNavJs2 = _interopRequireDefault(_modulesUtilNavJs);

},{"./helpers/jQueryExtend.js":4,"./modules/accordions.js":7,"./modules/back2top.js":8,"./modules/bannerCarousel.js":9,"./modules/clickable.js":10,"./modules/dropdown.js":11,"./modules/emergencyAlerts.js":12,"./modules/footnote.js":13,"./modules/formInputs.js":14,"./modules/formValidation.js":15,"./modules/googleMap.js":16,"./modules/hideAlert.js":17,"./modules/keywordSearch.js":18,"./modules/locationFilters.js":19,"./modules/locationListing.js":20,"./modules/mainNav.js":21,"./modules/mainNavPilot.js":22,"./modules/mobileNav.js":23,"./modules/orgSelector.js":24,"./modules/pagination.js":25,"./modules/pikaday.js":26,"./modules/responsiveVideo.js":27,"./modules/resultsHeading.js":28,"./modules/richText.js":29,"./modules/scrollAnchors.js":30,"./modules/utilNav.js":31}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-accordion').each(function () {
    var $el = $(this),
        $link = $el.find('.js-accordion-link'),
        $content = $el.find('.js-accordion-content'),
        active = (0, _helpersCssControlCodeJs2['default'])($el),
        open = $el.hasClass('is-open');

    $el.attr('aria-expanded', open);

    if (open) {
      // setup the inline display block
      $content.stop(true, true).slideDown();
    }

    $link.on('click', function (e) {
      if (active) {
        e.preventDefault();
        open = $el.hasClass('is-open');
        if (open) {
          $content.stop(true, true).slideUp();
        } else {
          $content.stop(true, true).slideDown();
        }
        $el.attr('aria-expanded', !open).toggleClass('is-open');
      }
    });

    $(window).resize(function () {
      var temp = (0, _helpersCssControlCodeJs2['default'])($el);

      if (temp !== active && !temp) {
        $content.removeAttr('style');
        $el.removeClass('is-open');
        $el.attr('aria-expanded', 'false');
      }

      active = temp;
    }).resize();
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cssControlCode.js":2}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  var $footer = $('.js-footer'),
      visibleThreshold = 250,
      staticThreshold = 50;

  $(".js-back2top").each(function () {
    var $el = $(this);

    $el.on('click', function (e) {
      e.preventDefault();
      try {
        $("html, body").stop(true, true).animate({ scrollTop: 0 }, '750');
      } catch (e) {
        $('body').scrollTop(0);
      }
      // Bring keyboard focus back to top as well.
      $("#main-content").focus();
      return false;
    });

    $(window).on('scroll', function () {
      // if we've exceeded the threshold of scrolling
      // from the top, show control
      var scrollTop = $(window).scrollTop();

      if (scrollTop > visibleThreshold) {
        $el.removeClass('is-hidden');
      } else {
        $el.addClass('is-hidden');
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-banner-carousel').each(function () {
    var $el = $(this);

    if ($el.children().length <= 1) {
      return;
    }

    var slider = $el.slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  $('.js-clickable').each(function () {
    // if the this is clicked
    $(this).click(function (event) {
      event.preventDefault();

      var $el = $(this).find('.js-clickable-link').first();
      // find the destination
      var dest = $el.attr("href");
      // if the target attribute exists
      if ("_blank" === $el.attr("target")) {
        // launch new tab/window
        window.open(dest);
      } else {
        // otherwise redirect to a new page
        window.location = dest;
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],11:[function(require,module,exports){
// ****** basic custom select that uses mobile select keyboard ******
"use strict";

var dropdownMenu = document.querySelectorAll(".js-dropdown");

if (null !== dropdownMenu) {

  var _length = dropdownMenu.length;

  var _loop = function (i) {
    var parentEl = dropdownMenu[i],
        selectEl = parentEl.querySelector(".js-dropdown-select"),
        link = parentEl.querySelector(".js-dropdown-link");

    if (null === selectEl || null === link) {
      return "break";
    }

    selectEl.onchange = function () {
      var elem = typeof this.selectedIndex === "undefined" ? window.event.srcElement : this;
      link.innerText = elem.text || elem.options[elem.selectedIndex].text;
    };
  };

  for (var i = 0; i < _length; i++) {
    var _ret = _loop(i);

    if (_ret === "break") break;
  }
}

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {
  // Emergency Alerts start close on page load
  // the default behavior is to expand the alerts
  // Emergency Alerts should stay closed if the cookie is set to false

  /* ********* NOTE: 
    This component is dependent on the 
    accordion.js component runing before it. 
  ********* */

  $('.js-emergency-alerts').each(function () {
    var $el = $(this),
        open = true,
        id = $el.data('id'),
        cookieName = 'emergency-alerts' + id,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName),
        $button = $el.find('.js-accordion-link button');

    $button.on('click', function () {
      // clicking this link also triggers the accordion click
      // toggle the current state
      open = !open;
      // update open/close state cookie
      // leave off third argument to make it expire on session
      _helpersCookiesJs2['default'].setCookie(cookieName, open);
    });

    // if the user has closed the alerts on a previous page
    if (typeof cookieValue !== 'undefined' && cookieValue === 'false') {
      open = false;
      // set the state of aria-expanded
      $button.attr('aria-expanded', open);
    }

    // Emergency Alerts loads closed so expand it.
    if (open) {
      open = false; // clicking the link swaps the value
      $button.first().trigger('click');
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports["default"] = (function (window, document, $, undefined) {

  $('.js-footnote').each(function () {
    var $el = $(this),
        $link = $el.find(".js-footnote-link"),
        $messageLink = $link.clone(),
        $rtelink = $($link.attr('href')),
        isMobile = (0, _helpersCssControlCodeJs2["default"])($el);

    $messageLink.text('');

    $el.find(".js-footnote-message p:last-child").append($messageLink);

    $(window).resize(function () {
      isMobile = (0, _helpersCssControlCodeJs2["default"])($el);
    });

    $el.on('click', '.js-footnote-link', function (e) {
      e.preventDefault();

      var target = $(this).attr('href');
      var position = getPosition($(target).parent());

      scrollTo(position.top, target);
    });

    $rtelink.click(function (e) {
      e.preventDefault();

      var target = $(this).attr('href');
      var position = getPosition($(target));

      scrollTo(position.top, target);
    });

    function getPosition($target) {
      var pos = $target.offset() || 0;

      if (isMobile) {
        var headerHeight = $('.js-sticky-header').height() || 0;
        var navHeight = $(".js-scroll-anchors").height() || 0;

        pos.top = pos.top - headerHeight - navHeight;
      }

      return pos;
    }

    function scrollTo(position, focus) {
      $("html,body").stop(true, true).animate({ scrollTop: position }, '750', function () {
        if (focus) {
          $(focus).focus();
        }
      });
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{"../helpers/cssControlCode.js":2}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('textarea[maxlength]').each(function () {
    var $el = $(this);
    var maxlength = $el.attr('maxlength');

    var remaining = maxlength - $el.val().length;
    var message = remaining + '/' + maxlength;

    $el.wrap('<div class="ma__textarea__wrapper"></div>');

    $el.parent().attr('data-char-left', message);

    $el.on('keyup mouseup blur', function () {
      remaining = maxlength - $el.val().length;
      message = remaining + '/' + maxlength;
      $el.parent().attr('data-char-left', message);
    });
  });

  // number restricted input based on it's pattern (this must run prior to type="number")
  $('input[type="text"][pattern="[0-9]*"]').on('keydown', function (e) {
    // Allow: delte(46), backspace(8), tab(9), escape(27), enter(13) and space(32))
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 32]) !== -1 ||
    // Allow: Ctrl/cmd+A
    e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true) ||
    // Allow: Ctrl/cmd+C
    e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true) ||
    // Allow: Ctrl/cmd+X
    e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true) ||
    // Allow: home, end, left, right
    e.keyCode >= 35 && e.keyCode <= 39) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });

  // number input type
  $('input[type="number"], .js-input-number').each(function () {
    var $el = $(this);
    var $plus = $('<button type="button" aria-label="increase value" class="ma__input-number__plus"></button>');
    var $minus = $('<button type="button" aria-label="decrease value" class="ma__input-number__minus"></button>');

    var value = $el.val();

    // if the input is not an html input and key restrictions
    if ($el.attr('type') !== "number") {
      $el.on('keydown', function (e) {
        // Allow: delte(46), backspace(8), tab(9), escape(27), enter(13) and .(110 & 190))
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        // Allow: Ctrl/cmd+A
        e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: Ctrl/cmd+C
        e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: Ctrl/cmd+X
        e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true) ||
        // Allow: home, end, left, right
        e.keyCode >= 35 && e.keyCode <= 39) {
          // let it happen, don't do anything
          return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
        }
      });
    }

    $plus.on('click', function () {
      var value = parseInt($el.val().trim(), 10);

      if (value !== value) {
        value = 0;
      }

      $el.val(value + 1);
    });

    $minus.on('click', function () {
      var value = parseInt($el.val(), 10);

      if (value !== value) {
        value = 0;
      }

      $el.val(value - 1);
    });

    $el.wrap('<div class="ma__input-number"></div>');

    $el.parent().append($plus, $minus);
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('form').each(function () {
    var $form = $(this),
        requiredFields = [],
        $errorList = $form.find('.js-error-list');

    // find all required fields
    $('.js-is-required').each(function () {
      var $field = $(this),
          type = $field.data('type'),
          value = $field.val(),
          valid = validate(value, type);

      requiredFields.push({ type: type, valid: valid, $el: $field });

      $(this).data('index', requiredFields.length);
    });

    // if there aren't any required fields, don't do anything
    if (requiredFields.length === 0) {
      return;
    }

    // $form.on('submit', function(e){
    //   e.preventDefault();
    // });

    $form.find('button[type="submit"], input[type="submit"]').on('click', function (e) {
      var submitForm = true;

      // validate each required field
      requiredFields.forEach(function (item) {
        var value = item.$el.val();

        item.valid = validate(value, item.type);

        if (item.valid) {
          clearError(item.$el);
        } else {
          submitForm = false;
          addError(item.$el);
        }
      });

      if (!submitForm) {
        // prevent the form from submitting
        e.preventDefault();
        // show the form error message
        $form.addClass('has-error');
        // scroll up to the error message
        var position = $form.offset();

        // scroll to the top of the form where the list of errors should be
        // using 100px offset to compenstate for possible sticky headers
        $("html,body").stop(true, true).animate({ scrollTop: position.top - 100 }, '750', function () {
          // bring focus to the item we just scrolled to
          $errorList.focus();
        });
      }
    });
  });

  // receives the jquery object of the input
  function clearError($el) {
    $el.removeClass('has-error');
    $el.prev('.ma__error-msg').removeClass('has-error');
  }

  // receives the jquery object of the input
  function addError($el) {
    $el.addClass('has-error');
    $el.prev('.ma__error-msg').addClass('has-error');
  }

  function validate(value) {
    var type = arguments.length <= 1 || arguments[1] === undefined ? 'text' : arguments[1];

    var valid = false;

    switch (type) {
      case 'email':
        valid = !!value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+/i);
        break;
      default:
        valid = value.length !== 0;
    }

    return valid;
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {
  // Only run this code if there is a google map component on the page.
  if (!$('.js-google-map').length || typeof ma.googleMapData === 'undefined') {
    return;
  }

  // Initialize global (at component scope) map properties
  var max = false,
      // Maximum number of map markers per map, can be updated instance
  mapsInitialized = false; // Flag to set to trigger clearInterval(checkForGoogleMaps)

  /**
   * Test for presence of google maps default library (without geocode, places, etc.) until we find it.
   * Loaded in _meta/_01.foot.twig with static api key
   * @todo set up config to pull in dynamic api key
   */
  var checkForGoogleMaps = setInterval(function () {
    if (window.google && window.google.maps && !mapsInitialized) {
      initMaps();
    }
  }, 100);

  // Stop checking for google maps library after 2 minutes.
  var stopChecking = setTimeout(function () {
    clearInterval(checkForGoogleMaps);
  }, 2 * 60 * 1000);

  // Initialize the map
  function initMaps() {
    // Stop checking for google maps library.
    mapsInitialized = true;
    clearInterval(checkForGoogleMaps);
    clearTimeout(stopChecking);

    $(".js-google-map").each(function (i) {
      var $el = $(this);
      max = ma.googleMapData[i].maxItems ? ma.googleMapData[i].maxItems : ma.googleMapData[i].markers.length;

      // Get the maps data (this could be replaced with an api)
      var rawData = ma.googleMapData[i]; // Data object created in @molecules/google-map.twig

      // *** Create the Map *** //
      // Map default config.
      var initMapData = {
        scrollwheel: false
      };
      // Create map data by combining the rawData with the defaults.
      var mapData = Object.assign({}, rawData.map, initMapData);
      // Create google map object assigned to this component instance with map data.
      var map = new google.maps.Map(this, mapData);
      // Initialize global markers, map bounds.
      var bounds = new google.maps.LatLngBounds();
      // Initialize all markers
      var markers = initMarkers(map, rawData.markers);
      // Add up to max markers to the map, zoom map to fit all bounds
      addMarkersToMap(markers, map, bounds);

      // Trigger map initialized event, broadcast master markers.
      $el.trigger('ma:GoogleMap:MapInitialized', [markers]);

      // Add keyboard navigation only after the map is rendered (becoming idle).
      google.maps.event.addListenerOnce(map, 'idle', function () {
        var $mapItems = $(".js-google-map").find('div[title="Show street map"],' + 'div[title="Show street map with terrain"],' + 'div[title="Show satellite imagery"],' + 'div[title="Zoom in to show 45 degree view"],' + 'div[title="Show imagery with street names"],' + 'div[title="Pan up"],' + 'div[title="Pan down"],' + 'div[title="Pan left"],' + 'div[title="Pan right"],' + 'div[title="Return to the last result"],' + 'div[title="Zoom in"],' + 'div[title="Zoom out"],' + 'img[title="Rotate map 90 degrees"],' + '.gmnoprint area');
        $mapItems.each(function (i, o) {
          $(o).attr({
            role: 'button',
            tabindex: '0',
            'aria-label': o.title
          }).bind('keydown', function (ev) {
            // If enter is pressed on one of these elements, trigger a click of the element.
            if (ev.which == 13) {
              ev.preventDefault();
              $(o).trigger('click');
            }
          });
        });
      });

      // Listen for map recenter event
      $el.on("ma:GoogleMap:MapRecenter", function (event, markerIndex) {
        if (typeof markers[markerIndex] === "undefined") {
          return false;
        }
        var marker = markers[markerIndex];
        // center the map on this marker
        map.setCenter(marker.getPosition());
        // close all open infoWindows
        for (var _i in markers) {
          if (markers[_i].open) {
            markers[_i].hideInfo();
          }
        }
        // show the infoWindow for this marker
        marker.showInfo();
      });
      // Listen for map marker bounce event
      $el.on("ma:GoogleMap:MarkerBounce", function (event, markerIndex) {
        if (typeof markers[markerIndex] === "undefined") {
          return false;
        }
        var marker = markers[markerIndex];
        // center and zoom the map on this marker
        map.setCenter(marker.getPosition());
        map.setZoom(15);
        // make the marker bounce three times
        marker.bounce();
      });
      // Listen for data change event to update markers by filters.
      $el.on("ma:GoogleMap:MarkersUpdated", function (e, args) {
        // Update map based on pre-sorted markers order
        markers = updateMapByMarkers({
          dataMarkers: args.markers,
          map: map,
          markers: markers,
          place: args.place ? args.place : false
        });

        // hide all info windows
        for (var _i2 in markers) {
          if (markers[_i2].open) {
            markers[_i2].hideInfo();
          }
        }
      });
    });
  }

  /**
   * Returns the array of initialized current map markers.
   *
   * @param map
   *  The current map object.
   *
   * @param markers
   *  The markers to be initialized.
   *
   * @return {Array}
   */
  function initMarkers(map, markers) {
    var initializedMarkers = [];
    markers.forEach(function (data) {
      var markerData = {
        position: new google.maps.LatLng({
          lat: data.position.lat,
          lng: data.position.lng
        }),
        label: data.label,
        infoWindow: data.infoWindow,
        title: 'Marker: ' + data.infoWindow.name
      };
      var marker = new google.maps.Marker(markerData);
      var infoData = infoTransform(markerData.infoWindow);
      var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('googleMapInfo');
      var template = compiledTemplate(infoData);
      var infoWindow = new google.maps.InfoWindow({
        content: template
      });
      var markerBouncing = null;

      marker.addListener('click', function () {
        // hide all info windows
        for (var i in initializedMarkers) {
          if (initializedMarkers[i].open) {
            initializedMarkers[i].hideInfo();
          }
        }

        // show this info window
        marker.showInfo();
      });

      marker.showInfo = function () {
        infoWindow.open(map, marker);
        marker.open = true;
      };

      marker.hideInfo = function () {
        infoWindow.close(map, marker);
        marker.open = false;
      };

      marker.bounce = function () {
        clearTimeout(markerBouncing);
        marker.setAnimation(null);
        marker.setAnimation(google.maps.Animation.BOUNCE);
        markerBouncing = setTimeout(function () {
          marker.setAnimation(null);
        }, 3000);
      };

      initializedMarkers.push(marker);
    });

    return initializedMarkers;
  }

  /**
   * Return formatted marker infowindow data.
   *
   * @param data
   *   Infowindow data object:
   *   "infoWindow": {
   *      "name": "Attleboro District Court",
   *      "phone": "15082225900",
   *      "fax": "15082233706",
   *      "email": "courts@state.ma.us",
   *      "address": "88 North Main Street\nAttleboro, MA 02703"
   *   }
   *
   * @returns {*}
   *   Object with passed data and new infoData property.
   */
  function infoTransform(data) {
    var infoData = {
      phoneFormatted: formatPhone(data.phone),
      faxFormatted: formatPhone(data.fax)
    };
    return Object.assign({}, data, infoData);
  }

  /**
   * Return phone number data formatted for map marker.
   *
   * @param phone
   *   "15082225900",
   * @returns {string}
   *    (508) 222-5900
   */
  function formatPhone(phone) {
    var phoneTemp = phone[0] === '1' ? phone.substring(1) : phone;
    return phoneTemp.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  /**
   * Location listing specific map helper functions
   */

  /**
   * Renders a new map, with markers  reference to passed marker order and length.
   *
   * @param args
   *  arguments object:
   *    {
   *      dataMarkers: args.markers, // sorted array of markers by witch to sort and filter master markers
   *      map: map, // initialized map instance
   *      markers: markers, // master list of current map markers
   *      place: args.place, // optional location filter place input
     *    }
   */
  function updateMapByMarkers(args) {
    removeMarkersFromMap(args.markers);

    // Reset bounds to remove previous search locations.
    var bounds = new google.maps.LatLngBounds();
    if (args.place && ma.autocomplete.getPlace()) {
      // Ensure the map includes the provided location based on the place value.
      bounds.extend(args.place.geometry.location);
    }

    // Add the new markers to the map and set new bounds based on filtered markers.
    addMarkersToMap(args.dataMarkers, args.map, bounds);

    // If there is only one marker, zoom out to provide some context.
    if (args.dataMarkers.length === 1) {
      args.map.setZoom(16);
    }

    return args.dataMarkers;
  }

  /**
   * Removes passed marker objects from a given map.
   *
   * @param markers
   *   Array of map marker objects.
   */
  function removeMarkersFromMap(markers) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  }

  /**
   * Adds markers to a given map and sets bounds based on those markers.
   *
   * @param markers
   *   Initialized map marker objects to be added.
   * @param map
   *   Initialized map object.
   * @param bounds
   *   Initialized map bounds object.
   */
  function addMarkersToMap(markers, map, bounds) {
    // Set max number of markers to whichever is smaller: max or the number of markers sent.
    var maxItems = markers.length < max ? markers.length : max;

    markers.forEach(function (marker, index) {
      if (index < maxItems) {
        marker.setMap(map);
        // Extend the bounds to include each marker's position.
        bounds.extend(marker.position);
      }
    });
    // Make the map zoom to fit the bounds, showing all locations.
    map.fitBounds(bounds);
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-header-alert').each(function () {
    var $el = $(this),
        $link = $el.find('.js-header-alert-link'),
        id = $el.data('id'),
        cookieName = "Alert" + id,
        cookieExpires = 365,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName);

    // show alert if cookie doesn't exist
    if (cookieValue !== "hide") {
      $el.fadeIn().fadeOut('fast').fadeIn('slow');
    }

    // hide the alert
    $link.on('click', function () {
      _helpersCookiesJs2['default'].setCookie(cookieName, "hide", cookieExpires);
      $el.stop(true, true).fadeOut();
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-keyword-search').each(function () {
    var $el = $(this),
        $form = $el.find('form');

    $form.on('submit', function (e) {
      e.preventDefault();
      $el.addClass('is-dirty');
    });

    $form.on('reset', function () {
      $el.removeClass('is-dirty');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  $('.js-location-filters').each(function () {
    var $el = $(this);

    // When google map libraries are loaded, initialize places.autocomplete on the location input, if it exists.
    $(document).on('ma:LibrariesLoaded:GoogleMaps', function () {
      var $locationFilter = $('.js-filter-by-location', $el).find('input');
      if ($locationFilter.length) {
        // Create the google places autocomplete object and associate it with the zip code text input.
        var locationInput = document.getElementById($locationFilter.attr('id'));
        var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(40.727093, -73.97864), new google.maps.LatLng(43.004778, -69.845299));

        // See options: https://developers.google.com/maps/documentation/javascript/places-autocomplete#add_autocomplete
        var options = {
          bounds: defaultBounds,
          strictBounds: true,
          types: ['geocode'],
          componentRestrictions: { country: 'us' }
        };
        ma.autocomplete = new google.maps.places.Autocomplete(locationInput, options);
      }
    });

    // Listen for new data from another component interaction (i.e. results heading), update form.
    $el.on('ma:FormFilter:DataUpdated', function (e, data) {
      renderForm({ clearedFilter: data.clearedFilter, $form: $el });
    });

    // Don't submit the form when a user selects the autocomplete dropdown item with enter
    $el.keydown(function (e) {
      if (e.keyCode === 13) {
        if ($(e.target).is($('.js-filter-by-location', $el).find('input'))) {
          e.preventDefault();
        }
      }
    });

    // Handle global form submission.
    $el.submit(function (e) {
      e.preventDefault();
      // Update master data with the various filter values.
      var formData = getFormData({ $form: $(this) });

      // Trigger location listing filter event with current filter values.
      $el.trigger('ma:LocationFilter:FormSubmitted', [{ formData: formData }]);
    });
  });

  function renderForm(args) {
    var clearedFilter = args.clearedFilter;
    // The clear all button was pressed.
    if (clearedFilter === "all") {
      clearForm(args);
    }
    // Single filter button was pressed.
    else {
        clearDeactivatedFilter(args);
      }
  }

  function getFormData(args) {
    var $form = $(args.$form),
        $location = $form.find('.js-filter-by-location'),
        $tags = $form.find('.js-filter-by-tags'),
        formData = [];

    // Get location
    if ($location.find('input').length) {
      var place = $location.find('input').val();
      if (place) {
        formData.push({
          type: 'location',
          text: place,
          value: place
        });
      }
    }

    $tags.find('input:checked').each(function () {
      formData.push({ 'type': 'tag', 'value': $(this).val(), 'text': $(this).next("label").text() });
    });

    return formData;
  }

  function clearDeactivatedFilter(args) {
    var $form = $(args.$form),
        $place = $form.find('.js-filter-by-location'),
        $tags = $form.find('.js-filter-by-tags'),
        clearedFilter = args.clearedFilter;

    // If the cleared filter button was for a location filter.
    if (clearedFilter.type === 'location') {
      $place.find('input').val("");
      return;
    }

    // If the cleared filter button was for a tag filter.
    if (clearedFilter.type === 'tag') {
      $tags.find('input[type=checkbox][value=' + clearedFilter.value + ']').prop('checked', false);
    }
  }

  function clearForm(args) {
    var $form = $(args.$form),
        $tags = $('.js-filter-by-tags', $form),
        $place = $('.js-filter-by-location', $form).find('input');

    // Clear location text input.
    if ($place.length) {
      $place.val("");
    }
    // Uncheck all checked tags inputs.
    $tags.find('input:checked').prop('checked', false);
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpersStickyJs = require("../helpers/sticky.js");

var _helpersStickyJs2 = _interopRequireDefault(_helpersStickyJs);

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports["default"] = (function (window, document, $, undefined) {
  // Active state classes for location listing rows.
  var activeClass = 'is-active',
      markerActiveClass = 'is-marker-bounce',

  // Selectors for event listeners on dynamic content.
  locationListingRow = '.js-location-listing-link',
      activeLocationListingRow = locationListingRow + '.' + activeClass,
      markerActiveLocationListingRow = locationListingRow + '.' + markerActiveClass,

  // Parent component selectors.
  listingCol = '.js-location-listing-results',
      listingParent = '.js-image-promos',
      mapCol = '.js-location-listing-map';

  $('.js-location-listing').each(function (i) {
    var $el = $(this),
        $mapCol = $el.find('.js-location-listing-map'),
        $map = $el.find('.js-google-map'),
        $resultsHeading = $el.find('.js-results-heading'),
        $pagination = $el.find('.js-pagination'),
        $locationFilter = $el.find('.js-location-filters');

    _helpersStickyJs2["default"].init($mapCol);

    // Get the location listing component data (this could be replaced with an api)
    var rawData = ma.locationListing[i]; // Data object created in @organisms/by-author/location-listing.twig

    var masterData = []; // master data structure to preserve state
    // Listen for map initialization, populate master data structure using locationListing, map markers.
    $map.on('ma:GoogleMap:MapInitialized', function (e, markers) {
      masterData = populateMasterDataSource(rawData, markers); // to preserve state
    });

    // Listen for Google Map api library load completion, with geocode, geometry, and places libraries
    $(document).on('ma:LibrariesLoaded:GoogleMaps', function () {
      // Set up click handler for location listing rows.
      $el.on('click', locationListingRow, function (e) {
        var index = $(e.currentTarget).index();
        // trigger map to recenter on this item based on it's index.
        $map.trigger('ma:GoogleMap:MapRecenter', index);
        // mark this link as active
        $el.find(activeLocationListingRow).removeClass(activeClass);
        $(e.currentTarget).addClass(activeClass); // in case the event is triggered on a child element.
        // focus on the map - mainly for mobile when it is stacked
        var position = $map.offset().top;
        $("html,body").stop(true, true).animate({ scrollTop: position }, '750');
      });

      // Set up hover / focus event for listing rows.
      $el.on('mouseenter focusin', locationListingRow, function (e) {
        // remove active state from previously selected list item
        $el.find(activeLocationListingRow).removeClass(activeClass);

        // Don't bounce the marker again if focus moves within the same listing.
        if ($(e.currentTarget).hasClass(markerActiveClass)) {
          return false;
        }

        // Remove "focus" class from any "focused" location listing row.
        // ("focus" vs focus because hover doesn't bring focus to element.)
        $el.find(markerActiveLocationListingRow).removeClass(markerActiveClass);

        // Focus moved into listing for first time, so flag with class, recenter + bounce marker.
        $(e.currentTarget).addClass(markerActiveClass);
        var index = $(e.currentTarget).index();

        // Trigger map to recenter on this item and make the marker bounce
        $map.trigger('ma:GoogleMap:MarkerBounce', index);
      });

      // Remove "focus" class from any "focused" location listing row.
      $el.on('mouseleave', locationListingRow, function (e) {
        $el.find(markerActiveLocationListingRow).removeClass(markerActiveClass);
      });

      // Handle location listings form interaction (triggered by locationFilters.js).
      $locationFilter.on('ma:LocationFilter:FormSubmitted', function (e, formValues) {
        var transformation = transformData(masterData, formValues);
        masterData = transformation.data; // preserve state
        // Trigger child components render with updated data
        updateChildComponents(transformation);
      });

      // Handle active filter/tag button interactions (triggered by resultsHeading.js).
      $resultsHeading.on('ma:ResultsHeading:ActiveTagClicked', function (e, clearedFilter) {
        var transformation = transformData(masterData, clearedFilter);
        masterData = transformation.data; // preserve state
        transformation.clearedFilter = clearedFilter;

        // Trigger child components render with updated data
        updateChildComponents(transformation);
      });

      // Handle pagination event (triggered by pagination.js), render targetPage.
      $pagination.on('ma:Pagination:Pagination', function (e, target) {
        var nextPage = target;

        // Get the current page, default to first page if not in global data object.
        var currentPage = masterData.pagination.currentPage ? masterData.pagination.currentPage : 1;
        if (target === "next") {
          nextPage = currentPage + 1;
        }
        if (target === "previous") {
          nextPage = currentPage - 1;
        }

        masterData.pagination = transformPaginationData({ data: masterData, targetPage: nextPage });
        masterData.resultsHeading = transformResultsHeading({ data: masterData, page: nextPage });
        renderListingPage({ data: masterData, page: nextPage });

        var markers = getActiveMarkers({ data: masterData, page: nextPage });
        // Trigger child components render with updated data
        updateChildComponents({ data: masterData, markers: markers });
      });
    });

    // Trigger events to update child components with new data.
    function updateChildComponents(args) {
      $resultsHeading.trigger('ma:ResultsHeading:DataUpdated', [args.data.resultsHeading]);
      $map.trigger('ma:GoogleMap:MarkersUpdated', [{ markers: args.markers, place: args.place }]);
      $pagination.trigger('ma:Pagination:DataUpdated', [args.data.pagination]);
      if (args.clearedFilter) {
        $locationFilter.trigger('ma:FormFilter:DataUpdated', [args.clearedFilter]);
      }
    }
  });

  /**
   * Data initialization.
   */

  /**
   * Returns a master data structure with page level / listing item level data and markup, to reflect component state.
   *
   * @param listing
   *   The locationListing data structure to use as a source
   * @param markers
   *   The array of map markers created by component google map (googleMaps.js module)
   * @returns {Array}
   *   An array with the following structure:
   *    [
   *      maxItems: the max number of items to show per listing "page" if provided, defaults to all
   *      totalPages: the number of pages of items that should render, given the current filters
   *      resultsHeading: the data structure necessary to render a resultsHeading component
   *      items: an array of listing items [
   *        isActive: whether or not the listing should be shown, given current filters state
   *        page: the page that the listing, if active, will appear on, given the current sort order
   *        promo: the data structure for the imagePromo component
   *        markup: the compiled imagePromo markup
   *        marker: the related map marker data structure for the listing item
   *      ]
   *      pagination: the data structure necessary to render a pagination component
   *    ]
   */
  function populateMasterDataSource(listing, markers) {
    // Populate master data structure
    var masterData = [];

    // Ensure locationListing.imagePromos.items is an array (the twig template json_encode()'s a php array)
    var promosArray = [];
    $.map(listing.imagePromos.items, function (val, index) {
      promosArray[index] = val;
    });
    listing.imagePromos.items = promosArray;

    // Ensure locationListing.pagination.pages is an array (the twig template json_encode()'s a php array)
    var pages = [];
    $.map(listing.pagination.pages, function (val, index) {
      pages[index] = val;
    });
    listing.pagination.pages = pages;

    // Get the current page from the initial data structure, default to 1 if none passed.
    var currentPage = 1;
    pages.forEach(function (page) {
      if (page.active) {
        currentPage = Number(page.text);
      }
    });

    // Get the listing imagePromos, generate markup for each
    var masterListing = listing.imagePromos.items,
        masterListingMarkup = transformLocationListingPromos(masterListing);

    // The max number of items per page, if designated in locationListing data structure, else all
    masterData.maxItems = listing.maxItems ? listing.maxItems : listing.imagePromos.items.length;
    // The initial results heading data structure
    masterData.resultsHeading = listing.resultsHeading;
    // The array of items and their respective page, in/active status, marker data, imagePromo data, and markup
    masterData.items = getMasterListingWithMarkupAndMarkers(masterListing, masterListingMarkup, markers, masterData.maxItems);
    // The initial pagination data structure + currentPage;
    masterData.pagination = listing.pagination;
    masterData.pagination.currentPage = currentPage;
    // The total number of pages, given the number of items and the maxItems variable
    masterData.totalPages = Math.ceil(masterData.items.length / masterData.maxItems);

    return masterData;
  }

  /**
   * Creates the master data structure items array
   *
   * @param listing
   *   The locationListing data structure
   * @param markup
   *   The generated array of item markup
   * @param markers
   *   The associated map markers for each item
   * @param max
   *   The maximum number of items per page
   * @returns {Array}
   *  An array of listing items with the following structure:
   *  [
   *      isActive: whether or not the listing should be shown, given current filters state
   *      page: the page that the listing, if active, will appear on, given the current sort order
   *      promo: the data structure for the imagePromo component
   *      markup: the compiled imagePromo markup
   *      marker: the related map marker data structure for the listing item
   *   ]
   */
  function getMasterListingWithMarkupAndMarkers(listing, markup, markers, max) {
    var items = [];
    markers.forEach(function (item, index) {
      items[index] = {
        isActive: true, // @todo consider checking for this in case of server side preprocessing of state
        page: Math.ceil((index + 1) / max),
        marker: item,
        markup: markup[index],
        promo: listing[index]
      };
    });
    return items;
  }

  /**
   * Creates an array with generated markup for location listing items, preserving original index.
   *
   * @param promos
   *  The locationListing.imagePromos array of items
   *
   * @returns {Array}
   *  An array of compiled markup
   */
  function transformLocationListingPromos(promos) {
    // Get template for location listing (organisms > imagePromo)
    var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2["default"])('locationListingRow');
    var listingMarkup = [];
    promos.forEach(function (data, index) {
      var promoData = promoTransform(data);
      listingMarkup[index] = compiledTemplate(promoData);
    });
    return listingMarkup;
  }

  /**
   * Data transformation.
   */

  /**
   * The main data transformation wrapper, returns an instance of masterData which reflects the component state.
   *
   * @param data
   *  An instance of masterData to start from.
   * @param transformation
   *  An object representing the change in state (locationFilter form data, resultsHeading tag interaction, etc.)
   *
   * @returns {{data: *, markers: *}}
   *  An object with the current state masterData instance and an array of their related sorted markers to send to map.
   */
  function transformData(data, transformation) {
    // First filter the data based on component state, then sort alphabetically by default.
    var filteredData = filterListingData(data, transformation),
        sortedData = sortDataAlphabetically(filteredData),
        place = '';

    // Sort data by location, if that filter is present.
    if (hasFilter(filteredData.resultsHeading.tags, 'location')) {
      place = getFilterValues(filteredData.resultsHeading.tags, 'location')[0]; // returns array
      // If place argument was selected from the locationFilter autocomplete (initiated on the zipcode text input).
      if (ma.autocomplete.getPlace()) {
        place = ma.autocomplete.getPlace();
        // Sort the markers and instance of locationListing masterData.
        sortedData = sortDataAroundPlace(place, filteredData);
      }
      // If place argument was populated from locationFilter (zipcode text input) but not from Place autocomplete.
      else {
          // Geocode the address, then sort the markers and instance of locationListing masterData.
          ma.geocoder = ma.geocoder ? ma.geocoder : new google.maps.Geocoder();
          // @todo limit geocode results to MA?
          sortedData = geocodeAddressString(place, sortDataAroundPlace, filteredData);
        }
    }

    // Update the results heading based on the current items state.
    sortedData.resultsHeading = transformResultsHeading({ data: sortedData });
    // Update pagination data structure, reset to first page
    sortedData.pagination = transformPaginationData({ data: sortedData }); // @todo this should probably go last so we know page #s
    // Render the listing page.
    renderListingPage({ data: sortedData });

    // Get the associated markers based on the listing items.
    var markers = getActiveMarkers({ data: sortedData });

    // Preserve state of current data.
    return {
      data: sortedData,
      markers: markers,
      place: place
    };
  }

  /**
   * Filters the listing data based on component filter state.
   *
   * @param data
   *  An instance of masterData to start from.
   * @param filterData
   *  Data structure representing either the newly applied or cleared filters.
   * @returns {*}
   */
  function filterListingData(data, filterData) {
    // Get the currently active filters.
    var filters = transformActiveTagsData({ data: data, filterData: filterData });
    // Update the results heading tags with the new active filters.
    data.resultsHeading.tags = filters;

    // If tag (checkbox) filter is present, filter based on current tag values.
    if (hasFilter(filters, 'tag')) {
      // Get just the tag values from the filters array.
      var tags = getFilterValues(filters, 'tag');
      // Identify active data based on filter.
      return filterDataByTags(tags, data);
    }

    // Either there are no filters or the only active filter is location, make all items active
    return makeAllActive(data);
  }

  /**
   * Returns the markers which correspond to a given "page" of location listing data.
   *
   * @param args
   *  An object with the following structure:
   *    {
   *      data: instance of filtered, sorted masterData off of which to base markers
   *      page: the target page of items/markers to render
   *    }
   *
   * @returns
   *   An array of corresponding map marker objects which should be rendered
   */
  function getActiveMarkers(args) {
    var data = args.data,
        page = args.page ? args.page : 1; // default to first page if non provided

    // Get just the markers from our active sorted/filtered data listing.
    return data.items.filter(function (item) {
      return item.isActive && item.page === page;
    }).map(function (item) {
      return item.marker;
    });
  }

  /**
   * Creates the active filter object based on either cleared or submitted filter data.
   *
   * @param args
   *   An object with the following structure:
   *   data {
   *    [masterData current instance]
   *   },
   *   filterData: {
   *     clearedFilter: (optional cleared filter data)
   *     {
   *       type: '[filter type]: location || tag',
   *       text: '[filter text or label]',
   *       value: '[filter value]'
   *     }, || 'all' (if clear all button was pressed)
   *     {
   *       formData: (optional submitted form filter data)
   *       [
   *         {
   *           type: '[filter type] location || tag',
   *           text: '[filter label]',
   *           value: '[filter value]'
   *         }, ...
   *       ]
   *     }
   *   }
   *
   * @returns {*}
   */
  function transformActiveTagsData(args) {
    if (args.filterData.hasOwnProperty('clearedFilter')) {
      return getActiveFilters(args.data, args.filterData); // This was an active tag interaction, get remaining filters.
    } else {
        return args.filterData.formData; // This was a form submission, so just return the applied form data.
      }
  }

  /**
   * Returns the data structure necessary to render pagination component, reflecting current state.
   *
   * @param args
   *   An object with the following structure:
   *   {
   *     data: [instance of filtered, sorted master data],
   *     targetPage: (optional) the page which should be active
   *   }
   *
   * @returns {*}
   *   Data structure necessary to render pagination component
   */
  function transformPaginationData(args) {
    var data = args.data;
    var targetPage = args.targetPage ? args.targetPage : 1; // default to first page if none passed
    var totalPages = data.totalPages;
    var pages = [];

    for (var i = 1; i <= totalPages; i++) {
      pages.push({
        text: i.toString(),
        active: i === targetPage
      });
    }

    data.pagination.prev = {
      text: "Previous",
      disabled: targetPage === 1
    };

    data.pagination.next = {
      text: "Next",
      disabled: targetPage === totalPages
    };

    data.pagination.pages = pages;
    data.pagination.currentPage = targetPage;

    return data.pagination;
  }

  /**
   * Updates the resultsHeading data structure to reflect the current component state.
   *
   * @param args
   *    Arguments object with the following structure:
   *    args: {
   *      data: the current instance of master data,
   *      page: (optional) the current page, defaults to 1
   *    }
   *
   * @returns {resultsHeading|{numResults, totalResults}|*}
   */
  function transformResultsHeading(args) {
    var pageTotal = 0,
        totalActive = 0,
        page = args.page ? args.page : 1,
        data = args.data,
        resultsHeading = data.resultsHeading; // preserve active resultsHeading.tags

    // Tally the total active and page length.
    data.items.map(function (item) {
      if (item.isActive) {
        totalActive += 1;
        if (item.page === page) {
          pageTotal += 1;
        }
      }
    });

    // Get the index (from 1) of the first and last items on this page.
    var firstItem = Number(data.maxItems) * Number(page) - (Number(data.maxItems) - 1),
        lastItem = firstItem + (Number(pageTotal) - 1);

    resultsHeading.totalResults = totalActive;
    resultsHeading.numResults = firstItem + " - " + lastItem; // @todo add accessibility consideration here

    return resultsHeading;
  }

  /**
   * Returns an array of the currently active filters, based on passed filterData.
   *
   * @param data
   *   The current instance of master data structure.
   *
   * @param filterData
   *  An object representing the cleared filter:
   *  {
   *    clearedFilter: {
   *       type: '[filter type]: location || tag',
   *       text: '[filter text or label]',
   *       value: '[filter value]'
   *     } || 'all' (if clear all button was pressed)
   *  }
   *
   * @returns {Array}
   *   An array of the currently active filters:
   *   [  {
   *        type:
   *        text:
   *        value:
   *      }, ... ]
   */
  function getActiveFilters(data, filterData) {
    // Single filter button clicked, so remove that filter from the list.
    if (filterData.clearedFilter !== "all") {
      var filters = data.resultsHeading.tags;
      // Remove the clicked tag from the tags array.
      return filters.filter(function (tag) {
        return tag.value !== filterData.clearedFilter.value;
      });
    } else {
      // Clear all button was clicked so remove all filters.
      return [];
    }
  }

  /**
   * Returns true if the passed filters array includes an item with the passed type.
   *
   * @param filters
   *   Array of filters.
   * @param type
   *   The type of filter to search for.
   *
   * @returns {*|boolean}
   */
  function hasFilter(filters, type) {
    return filters.some(function (filter) {
      return filter.hasOwnProperty('type') && filter['type'] === type;
    });
  }

  /**
   * Returns the value(s) of the passed filters of the passed type.
   *
   * @param filters
   *   Array of filters from which to abstract values.
   * @param type
   *   The type of filter to search for.
   *
   * @return array
   *   An array of filter values of type.
   */
  function getFilterValues(filters, type) {
    return filters.filter(function (data) {
      return data.type === type;
    }).map(function (data) {
      return data.value;
    });
  }

  /**
   * Returns transformed imagePromo data object.
   *
   * @param promo
   *   The imagePromo.item[]{} being transformed.
   *
   * @returns {*}
   *   The original imagePromo object with a formatted tag property.
   */
  function promoTransform(promo) {
    // Ensure tags are an array.
    var tags = [];
    $.map(promo.tags, function (val, index) {
      tags[index] = val;
    });
    promo.tags = tags;

    var tagsData = {
      tagsFormatted: promo.tags.map(transformTag)
    };
    return Object.assign({}, promo, tagsData);
  }

  /**
   * Returns a formatted imagePromo.tag object with a label and svg icon markup.
   *
   * @param tag
   *   The tag being transformed.
   *
   * @returns {{label, svg: boolean}}
   */
  function transformTag(tag) {
    return {
      label: tag.label,
      svg: getSvgFromTag(tag.id)
    };
  }

  /**
   * Returns the svg element markup from the corresponding tag filter checkbox label icon
   *
   * @param tag
   *  The imagePromo tag.id whose icon we need
   *
   * @return string
   *  The svg element for the matching filter form tag input.
   */
  function getSvgFromTag(tag) {
    // Get the existing corresponding icon markup so we don't have to worry about outdated markup.
    return $('.js-filter-by-tags').find("#" + tag).parent().siblings('svg').prop('outerHTML');
  }

  /**
   * Returns an instance of master data which is sorted alphabetically by imagePromo.title.text
   *
   * @param data
   *    The instance of master data being sorted.
   *
   * @returns {*}
   *    Sorted instance of master data.
   */
  function sortDataAlphabetically(data) {
    var items = data.items.sort(function (a, b) {
      var nameA = a.promo.title.text.toUpperCase(),
          nameB = b.promo.title.text.toUpperCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });

    var paginated = paginateItems(items, data.maxItems);
    data.items = paginated.items;
    data.totalPages = paginated.totalPages;
    return data;
  }

  /**
   * Returns instance of location listing masterData, sorted proximity to place.
   *
   * @param place
   *   The geocode information by which to sort.
   * @param data
   *   The instance of location listing masterData.
   * @returns {*}
   *   Sorted instance of location listing masterData.
   */
  function sortDataAroundPlace(place, data) {
    // Get all existing marker distance from place, assign as marker property.
    for (var key in data.items) {
      if (data.items.hasOwnProperty(key)) {
        data.items[key].marker.distance = google.maps.geometry.spherical.computeDistanceBetween(place.geometry.location, data.items[key].marker.getPosition());
      }
    }

    // Sort existing markers by closest to the place.
    data.items.sort(function (a, b) {
      return a.marker.distance - b.marker.distance;
    });

    // Update each location listing item's page number based on new marker sort order.
    var paginated = paginateItems(data.items, data.maxItems);
    data.items = paginated.items;
    data.totalPages = paginated.totalPages;

    // Return the newly sorted instance of location listing masterData.
    return data;
  }

  /**
   * Geocodes an address string arg and executes callback upon successful return.
   *
   * @param address
   *   Address string to be geocoded.
   * @param callback
   *   Callback function to execute (with callbackArg).
   * @param callbackArg
   *   Argument to pass to callback.
   *
   * @returns {*}
   *   Upon success, the return value of the passed callback function.
   */
  function geocodeAddressString(address, callback, callbackArg) {
    // Only attempt to execute if google's geocode library is loaded.
    if (typeof ma.geocoder === "undefined") {
      return;
    }
    // Geocode address string, then execute callback with argument upon success.
    return geocoder.geocode({ address: address }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        return callback(results[0], callbackArg);
      } else {
        console.warn('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  /**
   * Resets all items in a master data instance to active (i.e. not filtered out).
   *
   * @param data
   *    The instance of master data whose items are being made active.
   *
   * @returns {*}
   *    The master data instance with all active items.
   */
  function makeAllActive(data) {
    data.items = data.items.map(function (item) {
      item.isActive = true;
      return item;
    });
    return data;
  }

  /**
   * Returns masterData with necessary filtered items flagged inactive.
   *
   * @param tags
   *  The array of filters by which to filter.
   *
   * @param data
   *   The current instance of master data being filtered.
   *
   * @returns {*}
   *   The 'filtered' (flagged) instance of master data.
   */
  function filterDataByTags(tags, data) {
    data.items = data.items.map(function (item) {
      item.isActive = doesPromoContainTags(item.promo.tags, tags);
      return item;
    });

    return data;
  }

  /**
   * Determines if an masterData item contains the necessary tag(s).
   *
   * @param haystack
   *  The imagePromo object in question.
   *
   * @param needle
   *   The tag(s) being searched for.
   *
   * @returns {boolean|*}
   */
  function doesPromoContainTags(haystack, needle) {
    return needle.every(function (v) {
      return Boolean(haystack.filter(function (item) {
        return Object.values(item).indexOf(v) !== -1;
      }).length);
    });
  }

  /**
   * Assigns page values to masterData items, based on the provided max number.
   *
   * @param items
   *   The master data items.
   *
   * @param max
   *   The max number of items to show per page.
   *
   * @returns
   *   The updated master data items.
   */
  function paginateItems(items, max) {
    var page = 1,
        pageTotal = 0;
    var paginatedItems = items.map(function (item) {
      if (item.isActive) {
        if (pageTotal < max) {
          item.page = page;
        } else {
          page += 1;
          pageTotal = 0;
          item.page = page;
        }
        pageTotal += 1;
      }
      return item;
    });

    return {
      items: paginatedItems,
      totalPages: page
    };
  }

  // Remove the imagePromos children content on the current location listing page.
  function clearListingPage() {
    $(listingCol).find(listingParent).html('');
  }

  /**
   * Renders the new page of location listing image promos and broadcasts the rendered master data instance.
   *
   * @param args
   *   Arguments object with the following structure:
   *   {
   *      page: (optional) the page to be rendered, defaults to 1
   *      data: the instance of master data to render
   *   }
   */
  function renderListingPage(args) {
    clearListingPage();
    var $el = $(listingCol).find(listingParent),
        page = args.page ? args.page : 1;

    args.data.items.forEach(function (item) {
      if (item.isActive && item.page === page) {
        $el.append(item.markup);
      }
    });

    // Focus on the first focusable element in the first listing
    var $firstListing = $el.find(locationListingRow).first();
    // :focusable is possible with helpers/jQueryExtend.js
    $firstListing.find(':focusable').eq(0).focus();

    _helpersStickyJs2["default"].init($(mapCol));
  }
})(window, document, jQuery);

;
module.exports = exports["default"];

},{"../helpers/getHandlebarTemplate.js":3,"../helpers/sticky.js":5}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  var windowWidth = window.innerWidth;

  $(window).resize(function () {
    windowWidth = window.innerWidth;
  });

  $('.js-main-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-submenu",
        $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle'),
        $mainNavItems = $parent.find('.js-main-nav-toggle, .js-main-nav-top-link'),
        previousKey = null,
        breakpoint = 800; // matches CSS breakpoint for Main Nav

    $mainNavItems.on('keydown', function (e) {
      if (windowWidth <= breakpoint) {
        // only for desktop
        return;
      }

      // Grab all the DOM info we need...
      var $link = $(this),
          $topLevelLinks = $parent.find('.ma__main-nav__top-link'),
          open = $link.hasClass(openClass),
          $openContent = $parent.find('.js-main-nav-content.' + openClass),
          $focusedElement = $(document.activeElement),

      // relevant if open..
      $topLevelItem = $focusedElement.parents('.ma__main-nav__item'),
          $topLevelLink = $topLevelItem.find('.ma__main-nav__top-link'),
          $dropdownLinks = $link.find('.ma__main-nav__subitem .ma__main-nav__link'),
          focusIndexInDropdown = $dropdownLinks.index($focusedElement),
          isShift = !!e.shiftKey; // typecast to boolean

      // down arrow or tab key
      if (e.keyCode === 40 || e.keyCode === 9 && !isShift) {
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select next menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown === $dropdownLinks.length - 1) {
            return;
          } else {
            if (focusIndexInDropdown === -1) {
              $dropdownLinks[1].focus();
            } else {
              $dropdownLinks[focusIndexInDropdown + 1].focus();
            }
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $topLevelLink.attr('aria-expanded', 'true');
          $link.addClass(openClass);
          if ($dropdownLinks[1]) {
            $dropdownLinks[1].focus();
          }
          return;
        }
      }

      // up arrow or shift+tab keys
      if (e.keyCode === 38 || e.keyCode === 9 && isShift) {
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select previous menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown <= 1) {
            // not 0 bc of hidden first link
            hide($openContent);
            $topLevelLink.focus().attr('aria-expanded', 'false');
            return;
          } else {
            $dropdownLinks[focusIndexInDropdown - 1].focus();
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $topLevelLink.focus().attr('aria-expanded', 'true');
          $link.addClass(openClass);
          return;
        }
      }

      // esc key
      if (e.keyCode === 27) {
        // Close menu and return focus to menubar
        e.preventDefault();
        hide($openContent);
        $link.removeClass(openClass);
        $topLevelLink.focus().attr('aria-expanded', 'false');
        return;
      }

      // left arrow key
      if (e.keyCode === 37) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Previous menubar item
        //
        // If dropdown focus
        //  - Open previous pull down menu and select first item
        hide($openContent);
        $topLevelLink.attr('aria-expanded', 'false');
        var index = $topLevelLinks.index($topLevelLink) - 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }
      // right arrow key
      if (e.keyCode === 39) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Next menubar item
        //
        // If dropdown focus
        //  - Open next pull menu and select first item
        hide($openContent);
        $topLevelLink.attr('aria-expanded', 'false');
        var index = $topLevelLinks.index($topLevelLink) + 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }

      // key code 9 is the tab key
      if (open || typeof e.keycode !== "undefined" && e.keycode !== 9) {
        return;
      }
    });
    $mainNavItems.on('mouseenter', function (e) {
      $(this).children('button').attr("aria-expanded", "true");

      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        show($openContent);
      }
    });
    $mainNavItems.on('mouseleave', function (e) {
      $(this).children('button').attr("aria-expanded", "false");

      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        hide($openContent);
      }
    });
    $mainNavToggle.children('button, a').on('click', function (e) {
      var $el = $(this);
      var $elParent = $(this).parent();
      var $content = $elParent.find('.js-main-nav-content');
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      var isOpen = $content.hasClass(openClass);

      // mobile
      if (windowWidth <= breakpoint) {
        e.preventDefault();
        // add open class to this item
        $elParent.addClass(openClass);
        show($content);
        $el.attr('aria-expanded', 'true');
      } else {
        hide($openContent);
        $el.attr('aria-expanded', 'false');

        if (!isOpen) {
          show($content);
          $el.attr('aria-expanded', 'true');
        }
      }
    });
    $mainNavToggle.last().find('.js-main-nav-content li').last().find('a').on('keydown', function (e) {
      e.stopPropagation();
      // previous key was not a shift
      if (e.keyCode === 9 && previousKey !== 16) {
        // tab arrow\
        var $openContent = $parent.find('.js-main-nav-content.' + openClass);
        hide($openContent);
      }
      previousKey = e.keyCode;
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    // Hide any open submenu content when the sidebar menu is closed
    $('.js-header-menu-button').click(function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);

      if (windowWidth <= breakpoint) {
        $content.addClass(closeClass);
      } else {
        $content.stop(true, true).slideUp('fast', function () {
          $content.addClass(closeClass).slideDown(0);
        });
      }
    }

    function show($content) {
      $('body').addClass(submenuClass);
      if (windowWidth <= breakpoint) {
        $content.addClass(openClass).removeClass(closeClass);
      } else {
        $content.stop(true, true).delay(200).slideUp(0, function () {
          $content.addClass(openClass).removeClass(closeClass).slideDown('fast');
        });
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-main-nav').each(function () {
    var $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle');

    // make root top-level links inert for pilot
    $mainNavToggle.children('a').on('click', function (e) {
      e.preventDefault();
    });

    // Ensure top-level links that are potential anchor links close the sidebar on mobile
    $parent.find('.js-main-nav-top-link').find('a').on('click', function () {
      $('.js-header-menu-button').trigger('click');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],23:[function(require,module,exports){
// ****** Menu button ******
"use strict";

var menuButton = document.querySelector(".js-header-menu-button");

if (null !== menuButton) {
  menuButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

// ****** Main Header Search button on mobile should open the mobile menu  ******
var searchForm = document.querySelector(".js-header-search-menu .js-header-search-form");

if (null !== searchForm) {
  searchForm.addEventListener("submit", function (event) {
    if (window.innerWidth > 620) {
      return;
    }
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-org-selector').each(function (i) {
    var $el = $(this);
    var data = orgSelector[i];
    var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('orgInfo');
    var $select = $el.find('select').first();
    var $placeholder = $el.find('.js-org-info');

    //render the template based on the current value
    renderTemplate($select.val());

    // When the select changes
    $select.change(function () {
      //render the template based on the new value
      renderTemplate($select.val());
    });

    // Render the template based on value
    function renderTemplate(value) {
      if (typeof data.organizations[value] === "undefined") {
        $placeholder.html("");
        return false;
      }

      $placeholder.html(compiledTemplate(data.organizations[value]));

      return true;
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {

  if ($('.js-pagination').length === 0) {
    return;
  }

  // {{compare unicorns ponies operator="<"}}
  // 	I knew it, unicorns are just low-quality ponies!
  // {{/compare}}
  //
  // (defaults to == if operator omitted)
  //
  // {{equal unicorns ponies }}
  // 	That's amazing, unicorns are actually undercover ponies
  // {{/equal}}
  // (from http://doginthehat.com.au/2012/02/comparison-block-helper-for-handlebars-templates/)
  Handlebars.registerHelper('compare', function (lvalue, rvalue, options) {

    if (arguments.length < 3) throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

    var operator = options.hash.operator || "==";

    var operators = {
      '==': function _(l, r) {
        return l == r;
      },
      '===': function _(l, r) {
        return l === r;
      },
      '!=': function _(l, r) {
        return l != r;
      },
      '<': function _(l, r) {
        return l < r;
      },
      '>': function _(l, r) {
        return l > r;
      },
      '<=': function _(l, r) {
        return l <= r;
      },
      '>=': function _(l, r) {
        return l >= r;
      },
      'typeof': function _typeof(l, r) {
        return typeof l == r;
      }
    };

    if (!operators[operator]) throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);

    var result = operators[operator](lvalue, rvalue);

    if (result) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  // Set up global component config
  var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('pagination'),
      prevButton = '.js-pagination-prev',
      nextButton = '.js-pagination-next',
      pageButton = '.js-pagination-page';

  $('.js-pagination').each(function () {
    var $el = $(this);

    // Listen for previous page button click and trigger pagination event.
    $el.on('click', prevButton, function () {
      $el.trigger('ma:Pagination:Pagination', ['previous']);
    });
    // Listen for next button click and trigger pagination event.
    $el.on('click', nextButton, function () {
      $el.trigger('ma:Pagination:Pagination', ['next']);
    });
    // Listen for page number button click and trigger pagination event;
    $el.on('click', pageButton, function (e) {
      var targetPageNumber = $(e.target).data('page');
      $el.trigger('ma:Pagination:Pagination', [targetPageNumber]);
    });

    // Listen for new data, render new pagination.
    $el.on('ma:Pagination:DataUpdated', function (e, data) {
      renderPagination({ data: data, $el: $el });
    });
  });

  /**
   * Renders the contents of a specific results pagination component.
   *
   * @param args
   *   The arguments object, can contain the following properties:
   *      data: data object from which to populate handlebars template variables (required),
   *      context: the parent component selector
   */
  function renderPagination(args) {
    // Don't attempt to render anything if we don't have new data.
    if (!args.data) {
      return;
    }

    // Create new markup using handlebars template, helper.
    var markup = compiledTemplate(args.data);
    args.$el.html(markup);
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-input-date').each(function () {
    var $el = $(this);
    var restrict = $el.data('restrict');
    var picker = new Pikaday({
      field: this,
      format: 'MM/DD/YYYY'
    });

    switch (restrict) {
      case 'max':
        picker.setMaxDate(new Date());
        break;
      case 'min':
        picker.setMinDate(new Date());
        break;
    }

    $el.attr('type', 'text');
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-ma-responsive-video').fitVids();
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {
  // Set up global component config
  var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('resultsHeading'),
      clearAllButton = '.js-results-heading-clear',
      // events triggered on parent
  filterButton = '.js-results-heading-tag'; // events triggered on parent

  $(".js-results-heading").each(function () {
    var $el = $(this);

    // Listen for clear all button click + trigger interaction event on parent.
    $el.on('click', clearAllButton, function () {
      $el.trigger('ma:ResultsHeading:ActiveTagClicked', [{ clearedFilter: 'all' }]);
    });

    // Listen for single filter button click and trigger interaction event on parent.
    $el.on('click', filterButton, function (e) {
      var clearedFilter = {
        'type': $(e.target).data('ma-filter-type'),
        'value': $(e.target).data('ma-filter-value'),
        'text': $(e.target).text()
      };

      $el.trigger('ma:ResultsHeading:ActiveTagClicked', [{ clearedFilter: clearedFilter }]);
    });

    // Listen for new results heading data, render new results heading.
    $el.on('ma:ResultsHeading:DataUpdated', function (e, data) {
      renderResultsHeading({ data: data, $el: $el });
    });
  });

  /**
   * Renders the contents of a specific results heading component.
   *
   * @param args
   *   The arguments object, can contain the following properties:
   *      data: data object from which to populate handlebars template variables (required),
   *      context: the parent component selector
   */
  function renderResultsHeading(args) {
    // Don't attempt to render anything if we don't have new data.
    if (!args.data) {
      return;
    }
    // Create new markup using handlebars template, helper.
    var markup = compiledTemplate(args.data);
    args.$el.html(markup);
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-ma-rich-text').each(function () {
    var $el = $(this);

    $el.find('table').wrap("<div class='ma__rich-text__table-wrapper'></div>");
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports["default"] = (function (window, document, $, undefined) {

  $(".js-scroll-anchors").each(function () {
    var $el = $(this),
        $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent(),
        $links = $el.find('.js-scroll-anchors-link'),
        elHeight = undefined,
        headerBuffer = 0,
        lowerLimit = undefined,
        upperLimit = undefined,
        debounceTimer = undefined,
        activeClass = "is-active",
        activeAnchorIndex = 0,
        anchors = [],
        numAnchors = 0,
        isMobile = false,
        linkScrolling = false;

    setVariables();

    // default assumption as to where the screen will load
    $el.attr('data-sticky', 'top');

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      setVariables();
    }, 1000);

    $links.on('click', function (e) {
      e.preventDefault();

      var $link = $(this);

      // is the menu closed on mobile
      if (!$el.hasClass('is-open') && isMobile) {
        // just show the menu
        $el.addClass('is-open');
        return;
      }

      activeAnchorIndex = $(this).data('index');
      // find the location of the desired link and scroll the page
      var position = anchors[activeAnchorIndex].position;
      // close the menu
      $el.removeClass('is-open');
      // prevent the scroll event from updating active links
      linkScrolling = true;

      $("html,body").stop(true, true).animate({ scrollTop: position }, '750', function () {
        linkScrolling = false;
        // Get the link hash target so we can bring focus to it
        var hash = anchors[activeAnchorIndex].hash;
        // bring focus to the item we just scrolled to
        $(hash).focus();
        // timing issue with window.scroll event firing.
        setTimeout(function () {
          // set this link as active.
          $el.find('.' + activeClass).removeClass(activeClass);
          $link.addClass(activeClass);
        }, 30);
      });
    });

    // if the content contains accordions,
    // readjust settings when there state changes.
    $('.js-accordion-link').on('click', function () {
      if (typeof debounceTimer === "number") {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(function () {
        setVariables();
        setPosition();
        activateLink();
      }, 400);
    });

    $el.find(".js-scroll-anchors-toggle").on('click', function () {
      $el.toggleClass('is-open');
    });

    // make the links sticky
    $(window).resize(function () {
      if (typeof debounceTimer === "number") {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(function () {
        setVariables();
        setPosition();
        activateLink();
      }, 300);
    });

    $(window).scroll(function () {
      setPosition();

      if (!linkScrolling) {
        activateLink();
      }
    });

    function setVariables() {
      var topOffset = 0;

      headerBuffer = 0;
      elHeight = $el.outerHeight(true);
      upperLimit = $elParent.offset().top;
      isMobile = (0, _helpersCssControlCodeJs2["default"])($el);

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (isMobile) {
        headerBuffer = $('.js-sticky-header').height() || 0;
        upperLimit -= headerBuffer;
        topOffset = elHeight;
      }

      lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

      // locate the position of all of the anchor targets
      anchors = new Array();
      $links.each(function (i, e) {
        var $el = $(this),
            $link = $el.is('a') ? $el : $el.find('a'),
            hash = $link[0].hash,
            position = $(hash).offset() ? $(hash).offset().top - headerBuffer - topOffset : upperLimit;

        anchors[i] = { hash: hash, position: position };

        $el.data('index', i);
      });

      // record the number of anchors for performance
      numAnchors = anchors.length;
    }

    function setPosition() {
      var windowTop = $(window).scrollTop(),
          attr = $el.attr('data-sticky'),
          top = attr !== 'top' && windowTop <= upperLimit,
          middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
          bottom = attr !== 'bottom' && windowTop >= lowerLimit;

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (!$elParent[0].hasAttribute("style") && isMobile && attr === 'middle') {
        $elParent.css({ 'paddingTop': elHeight });
      }

      if (top) {
        $el.attr('data-sticky', 'top');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      } else if (middle) {
        $el.attr('data-sticky', 'middle');

        if (isMobile) {
          $elParent.css({ 'paddingTop': elHeight });
        }
      } else if (bottom) {
        $el.attr('data-sticky', 'bottom');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      }
    }

    function activateLink() {
      // do we have more than one anchor
      if (numAnchors < 2 || linkScrolling) {
        return;
      }

      // get the current scroll position and offset by half the view port
      var windowTop = $(window).scrollTop() + window.innerHeight / 2,
          currentAnchor = activeAnchorIndex;

      // is there a prev target
      // and
      // is the current scroll position above the current target
      if (currentAnchor > 0 && windowTop < anchors[activeAnchorIndex].position) {
        // make the prev link active
        --activeAnchorIndex;
      }

      // is there a next target
      // and
      // is the current scroll position below the next target
      else if (currentAnchor < numAnchors - 1 && windowTop > anchors[activeAnchorIndex + 1].position) {
          // make the next link active
          ++activeAnchorIndex;
        }

      if (currentAnchor !== activeAnchorIndex) {
        // move the active flag
        $el.find('.' + activeClass).removeClass(activeClass);
        $links.eq(activeAnchorIndex).addClass(activeClass);
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{"../helpers/cssControlCode.js":2}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  $('.js-util-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-utilmenu",
        $parent = $(this),
        waitForIt = null;

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    $parent.find('.js-util-nav-toggle > a').on('click', function (e) {
      e.preventdefault;

      var open = $(this).hasClass(openClass),
          $content = $(this).next('.js-util-nav-content'),
          $openContent = $parent.find('.js-util-nav-content.' + openClass);

      // hide other content
      hide($openContent);

      if (open) {
        return;
      }
      // add open class to this item
      $(this).addClass(openClass);
      // add open class to the correct content based on index
      $content.attr("aria-hidden", "false");

      setTimeout(function () {
        $content.removeClass(closeClass).addClass(openClass);
        $('body').addClass(submenuClass);
      }, .1);
    });

    $parent.find('.js-close-util-nav').on('click', function (e) {
      e.preventDefault;

      hide($(this).closest('.js-util-nav-content'));
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);
      $content.removeClass(openClass).addClass(closeClass);

      if (waitForIt) {
        clearTimeout(waitForIt);
      }
      waitForIt = setTimeout(function () {
        $content.attr("aria-hidden", "true");
      }, 1000);
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}]},{},[6])


//# sourceMappingURL=index-generated.js.map
