// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app.js":[function(require,module,exports) {
//HAMBURGER NAV MENU
var hamburger = document.querySelector('.hamburger');
var sideNav = document.querySelector('.side-nav');
var overLay = document.querySelector('.overlay');
var body = document.querySelector('body');

function hamburgerClick() {
  sideNav.classList.toggle('open');
  overLay.classList.toggle('open');
  hamburger.classList.toggle('change'); //stops from moving page while menu is open

  body.classList.toggle('block');
}

; //IF CLICKED OUTSIDE SIDENAV & BURGER, THEN MENU CLOSES

document.addEventListener('click', function (e) {
  if (!sideNav.contains(e.target) && !hamburger.contains(e.target)) {
    sideNav.classList.remove('open');
    overLay.classList.remove('open');
    document.body.classList.remove('block');
    hamburger.classList.remove('change');
  }
}); //SIGNUP PAGE FORM
//------------------------------------------------------------------------------------------

var form = document.querySelector('.signup-form');
var profileName = document.querySelector('.profile-name');
var email = document.querySelector('.email');
var confirmEmail = document.querySelector('.confirm-email');
var password = document.querySelector('.password');
var formGroup = document.querySelector('.form-group');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault(); //EMAIL,PASSWORD,NAME

    if (email.value === "") {
      showError(email, "Email is required");
    } else if (!isEmail(email.value)) {
      showError(email, 'Please enter a valid email');
    } else {
      showSuccess(email);
    }

    if (confirmEmail.value === "") {
      showError(confirmEmail, "Email does not match");
    } else if (email.value != confirmEmail.value) {
      showError(confirmEmail, "Email does not match");
    } else {
      showSuccess(confirmEmail);
    }

    if (password.value === "") {
      showError(password, "Password is required");
    } else if (!isPassword(password.value)) {
      showError(password, 'Must be at least 8 characters and contain 1 letter and 1 number');
    } else {
      showSuccess(password);
    }

    if (profileName.value === "") {
      showError(profileName, 'Username is required');
    } else {
      showSuccess(profileName);
    } //BIRTHDATE FORM


    var selectMonth = document.querySelector('.select-month');

    if (selectMonth.value === "") {
      selectMonth.className = "select-month error";
    } else {
      selectMonth.className = "select-month success";
    } //DAY-YEAR FORM


    var day = document.querySelector('.day');
    var year = document.querySelector('.year');
    var dayInput = document.querySelector('.day-input');
    var yearInput = document.querySelector('.year-input'); //DAY

    if (dayInput.value == "") {
      day.className = "day error";
    } else if (!isDay(dayInput.value)) {
      day.className = "day error";
    } else {
      day.className = "day success";
    } //YEAR


    if (yearInput.value == "") {
      year.className = "year error";
    } else if (!isYear(yearInput.value)) {
      year.className = "year error";
    } else {
      year.className = "year success";
    } //GENDER


    var male = document.querySelector('.male');
    var female = document.querySelector('.female');
    var nonBinary = document.querySelector('.non-binary');
    var checkBoxes = document.querySelector('.check-boxes');

    if (!male.checked && !female.checked && !nonBinary.checked) {
      checkBoxes.className = "check-boxes error";
    } else {
      checkBoxes.className = "check-boxes success";
    } //REGISTRATION


    var registration = document.querySelector('.registration');
    var shareReg = document.querySelector('.share-reg');

    if (!registration.checked) {
      shareReg.className = "share-reg error";
    } else {
      shareReg.className = "share-reg success";
    }
  });
} //SIGN UP ERROR AND SUCCESS FUNCTIONS


function showError(input, message) {
  var inputParent = input.parentElement;
  inputParent.className = "form-group error";
  var errorMessage = inputParent.querySelector('.error-message');
  errorMessage.innerHTML = message;
}

;

function showSuccess(input) {
  var inputParent = input.parentElement;
  inputParent.className = "form-group success";
}

; //REGEX FOR SIGNUP EMAIL

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

; //REGEX FOR SIGNUP PASSWORD

function isPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

; //REGEX FOR SIGNUP 2 DIGIT DAY

function isDay(dayInput) {
  return /^[0-9]{2}$/.test(dayInput);
} //REGEX FOR SIGNUP 4 DIGIT YEAR


function isYear(yearInput) {
  return /^[0-9]{4}$/.test(yearInput);
} //END SIGNUP PAGE FORM-----------------------------------------------------------------
//LOGIN PAGE FORM
//------------------------------------------------------------------------------------------


var loginForm = document.querySelector('.login-form');
var loginUsername = document.querySelector('.login-username');
var loginPassword = document.querySelector('.login-password');
var loginFormControl = document.querySelector('.form-control');

if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); //USERNAME AND PASSWORD

    if (loginUsername.value === "") {
      loginFormError(loginUsername, "Please enter username or email address");
    } else {
      loginFormSuccess(loginUsername);
    }

    if (loginPassword.value === "") {
      loginFormError(loginPassword, 'Please enter password');
    } else if (!isloginPassword(loginPassword.value)) {
      loginFormError(loginPassword, "Must be at least 8 characters long and contain 1 letter and 1 number");
    } else {
      loginFormSuccess(loginPassword);
    } //REMEMBER CHECKBOX


    var checkBoxRemember = document.querySelector('.checkbox');
    var remember = document.querySelector('.remember');

    if (!checkBoxRemember.checked) {
      remember.className = "remember error";
    } else {
      remember.className = "remember success";
    }
  });
} //LOGIN ERROR AND SUCCESS FUNCTIONS


function loginFormError(input, message) {
  var inputParent = input.parentElement;
  inputParent.className = 'form-control error';
  var errorMessage = inputParent.querySelector('.login-error');
  errorMessage.innerHTML = message;
}

function loginFormSuccess(input) {
  var inputParent = input.parentElement;
  inputParent.className = 'form-control success';
  var errorMessage = inputParent.querySelector('.login-error');
  errorMessage.innerHTML = "";
} //REGEX FOR LOGIN PASSWORD


function isloginPassword(loginPassword) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(loginPassword);
}

; //END LOGIN PAGE FORM
//------------------------------------------------------------------------------------------
//FORGOT/RESET PASSWORD PAGE
//------------------------------------------------------------------------------------------

var pwForm = document.querySelector('.pw-reset-form');
var emailPw = document.querySelector('.reset-email');

if (pwForm) {
  pwForm.addEventListener('submit', function (e) {
    e.preventDefault(); //FORGOT/RESET PASSWORD EMAIL

    if (emailPw.value === "") {
      passwordResetError(emailPw, 'This field is required');
    } else {
      passwordResetSuccess(emailPw);
      swal({
        title: "",
        text: "Password reset has been sent!",
        icon: "success",
        button: "ok"
      });
    }
  });
}

; //FORGOT/RESET PASSWORD  FUNCTIONS

function passwordResetError(input, message) {
  var inputParent = input.parentElement;
  var pwsmallError = inputParent.querySelector('small');
  inputParent.className = "form-resetpw error";
  pwsmallError.innerHTML = message;
}

function passwordResetSuccess(input) {
  var inputParent = input.parentElement;
  inputParent.className = "form-resetpw success";
  var pwsmallError = inputParent.querySelector('small');
  pwsmallError.innerHTML = "";
} //END FORGOT/RESET PASSWORD PAGE
//------------------------------------------------------------------------------------------
//ACCORDION MENU ON HELP PAGE
//------------------------------------------------------------------------------------------


var accordionBtn = document.querySelectorAll('.accordion-btn');
accordionBtn.forEach(function (button) {
  button.addEventListener('click', function () {
    var accordionContent = button.nextElementSibling;
    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
}); //END ACCORDION MENU ON HELP PAGE
//------------------------------------------------------------------------------------------
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55062" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map