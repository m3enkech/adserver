/*! @name videojs-playlist @version 4.2.6 @license Apache-2.0 */
(function (videojs,QUnit,sinon) {
	'use strict';

	videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;
	QUnit = QUnit && QUnit.hasOwnProperty('default') ? QUnit['default'] : QUnit;
	sinon = sinon && sinon.hasOwnProperty('default') ? sinon['default'] : sinon;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var win;

	if (typeof window !== "undefined") {
	    win = window;
	} else if (typeof commonjsGlobal !== "undefined") {
	    win = commonjsGlobal;
	} else if (typeof self !== "undefined"){
	    win = self;
	} else {
	    win = {};
	}

	var window_1 = win;

	var cov_14i98g141m = function () {
	  var path = '/Users/poneill/dev/videojs-playlist/src/auto-advance.js',
	      hash = '445d03648826c8a2cda2eb374d06163a88b4152d',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/poneill/dev/videojs-playlist/src/auto-advance.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 12,
	          column: 21
	        },
	        end: {
	          line: 13,
	          column: 62
	        }
	      },
	      '1': {
	        start: {
	          line: 13,
	          column: 2
	        },
	        end: {
	          line: 13,
	          column: 62
	        }
	      },
	      '2': {
	        start: {
	          line: 21,
	          column: 12
	        },
	        end: {
	          line: 34,
	          column: 1
	        }
	      },
	      '3': {
	        start: {
	          line: 22,
	          column: 13
	        },
	        end: {
	          line: 22,
	          column: 41
	        }
	      },
	      '4': {
	        start: {
	          line: 24,
	          column: 2
	        },
	        end: {
	          line: 26,
	          column: 3
	        }
	      },
	      '5': {
	        start: {
	          line: 25,
	          column: 4
	        },
	        end: {
	          line: 25,
	          column: 36
	        }
	      },
	      '6': {
	        start: {
	          line: 28,
	          column: 2
	        },
	        end: {
	          line: 30,
	          column: 3
	        }
	      },
	      '7': {
	        start: {
	          line: 29,
	          column: 4
	        },
	        end: {
	          line: 29,
	          column: 36
	        }
	      },
	      '8': {
	        start: {
	          line: 32,
	          column: 2
	        },
	        end: {
	          line: 32,
	          column: 20
	        }
	      },
	      '9': {
	        start: {
	          line: 33,
	          column: 2
	        },
	        end: {
	          line: 33,
	          column: 20
	        }
	      },
	      '10': {
	        start: {
	          line: 48,
	          column: 14
	        },
	        end: {
	          line: 80,
	          column: 1
	        }
	      },
	      '11': {
	        start: {
	          line: 49,
	          column: 2
	        },
	        end: {
	          line: 49,
	          column: 16
	        }
	      },
	      '12': {
	        start: {
	          line: 53,
	          column: 2
	        },
	        end: {
	          line: 56,
	          column: 3
	        }
	      },
	      '13': {
	        start: {
	          line: 54,
	          column: 4
	        },
	        end: {
	          line: 54,
	          column: 46
	        }
	      },
	      '14': {
	        start: {
	          line: 55,
	          column: 4
	        },
	        end: {
	          line: 55,
	          column: 11
	        }
	      },
	      '15': {
	        start: {
	          line: 58,
	          column: 2
	        },
	        end: {
	          line: 58,
	          column: 45
	        }
	      },
	      '16': {
	        start: {
	          line: 60,
	          column: 2
	        },
	        end: {
	          line: 77,
	          column: 4
	        }
	      },
	      '17': {
	        start: {
	          line: 64,
	          column: 25
	        },
	        end: {
	          line: 64,
	          column: 51
	        }
	      },
	      '18': {
	        start: {
	          line: 64,
	          column: 31
	        },
	        end: {
	          line: 64,
	          column: 51
	        }
	      },
	      '19': {
	        start: {
	          line: 70,
	          column: 4
	        },
	        end: {
	          line: 70,
	          column: 37
	        }
	      },
	      '20': {
	        start: {
	          line: 72,
	          column: 4
	        },
	        end: {
	          line: 76,
	          column: 21
	        }
	      },
	      '21': {
	        start: {
	          line: 73,
	          column: 6
	        },
	        end: {
	          line: 73,
	          column: 20
	        }
	      },
	      '22': {
	        start: {
	          line: 74,
	          column: 6
	        },
	        end: {
	          line: 74,
	          column: 39
	        }
	      },
	      '23': {
	        start: {
	          line: 75,
	          column: 6
	        },
	        end: {
	          line: 75,
	          column: 29
	        }
	      },
	      '24': {
	        start: {
	          line: 79,
	          column: 2
	        },
	        end: {
	          line: 79,
	          column: 60
	        }
	      },
	      '25': {
	        start: {
	          line: 89,
	          column: 18
	        },
	        end: {
	          line: 91,
	          column: 1
	        }
	      },
	      '26': {
	        start: {
	          line: 90,
	          column: 2
	        },
	        end: {
	          line: 90,
	          column: 13
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 12,
	            column: 21
	          },
	          end: {
	            line: 12,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 13,
	            column: 2
	          },
	          end: {
	            line: 13,
	            column: 62
	          }
	        },
	        line: 13
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 21,
	            column: 12
	          },
	          end: {
	            line: 21,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 21,
	            column: 24
	          },
	          end: {
	            line: 34,
	            column: 1
	          }
	        },
	        line: 21
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 48,
	            column: 14
	          },
	          end: {
	            line: 48,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 48,
	            column: 33
	          },
	          end: {
	            line: 80,
	            column: 1
	          }
	        },
	        line: 48
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 60,
	            column: 41
	          },
	          end: {
	            line: 60,
	            column: 42
	          }
	        },
	        loc: {
	          start: {
	            line: 60,
	            column: 52
	          },
	          end: {
	            line: 77,
	            column: 3
	          }
	        },
	        line: 60
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 64,
	            column: 25
	          },
	          end: {
	            line: 64,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 64,
	            column: 31
	          },
	          end: {
	            line: 64,
	            column: 51
	          }
	        },
	        line: 64
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 72,
	            column: 61
	          },
	          end: {
	            line: 72,
	            column: 62
	          }
	        },
	        loc: {
	          start: {
	            line: 72,
	            column: 67
	          },
	          end: {
	            line: 76,
	            column: 5
	          }
	        },
	        line: 72
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 89,
	            column: 18
	          },
	          end: {
	            line: 89,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 89,
	            column: 26
	          },
	          end: {
	            line: 91,
	            column: 1
	          }
	        },
	        line: 89
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 13,
	            column: 2
	          },
	          end: {
	            line: 13,
	            column: 62
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 13,
	            column: 2
	          },
	          end: {
	            line: 13,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 13,
	            column: 27
	          },
	          end: {
	            line: 13,
	            column: 36
	          }
	        }, {
	          start: {
	            line: 13,
	            column: 40
	          },
	          end: {
	            line: 13,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 13,
	            column: 50
	          },
	          end: {
	            line: 13,
	            column: 62
	          }
	        }],
	        line: 13
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        }],
	        line: 24
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        }],
	        line: 28
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        }],
	        line: 53
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0
	    },
	    b: {
	      '0': [0, 0, 0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();

	cov_14i98g141m.s[0]++;

	var validSeconds = function validSeconds(s) {
	  cov_14i98g141m.f[0]++;
	  cov_14i98g141m.s[1]++;
	  return (cov_14i98g141m.b[0][0]++, typeof s === 'number') && (cov_14i98g141m.b[0][1]++, !isNaN(s)) && (cov_14i98g141m.b[0][2]++, s >= 0) && (cov_14i98g141m.b[0][3]++, s < Infinity);
	};

	cov_14i98g141m.s[2]++;

	var reset = function reset(player) {
	  cov_14i98g141m.f[1]++;
	  var aa = (cov_14i98g141m.s[3]++, player.playlist.autoadvance_);
	  cov_14i98g141m.s[4]++;

	  if (aa.timeout) {
	    cov_14i98g141m.b[1][0]++;
	    cov_14i98g141m.s[5]++;
	    player.clearTimeout(aa.timeout);
	  } else {
	    cov_14i98g141m.b[1][1]++;
	  }

	  cov_14i98g141m.s[6]++;

	  if (aa.trigger) {
	    cov_14i98g141m.b[2][0]++;
	    cov_14i98g141m.s[7]++;
	    player.off('ended', aa.trigger);
	  } else {
	    cov_14i98g141m.b[2][1]++;
	  }

	  cov_14i98g141m.s[8]++;
	  aa.timeout = null;
	  cov_14i98g141m.s[9]++;
	  aa.trigger = null;
	};

	cov_14i98g141m.s[10]++;

	var setup = function setup(player, delay) {
	  cov_14i98g141m.f[2]++;
	  cov_14i98g141m.s[11]++;
	  reset(player);
	  cov_14i98g141m.s[12]++;

	  if (!validSeconds(delay)) {
	    cov_14i98g141m.b[3][0]++;
	    cov_14i98g141m.s[13]++;
	    player.playlist.autoadvance_.delay = null;
	    cov_14i98g141m.s[14]++;
	    return;
	  } else {
	    cov_14i98g141m.b[3][1]++;
	  }

	  cov_14i98g141m.s[15]++;
	  player.playlist.autoadvance_.delay = delay;
	  cov_14i98g141m.s[16]++;

	  player.playlist.autoadvance_.trigger = function () {
	    cov_14i98g141m.f[3]++;
	    cov_14i98g141m.s[17]++;

	    var cancelOnPlay = function cancelOnPlay() {
	      cov_14i98g141m.f[4]++;
	      cov_14i98g141m.s[18]++;
	      return setup(player, delay);
	    };

	    cov_14i98g141m.s[19]++;
	    player.one('play', cancelOnPlay);
	    cov_14i98g141m.s[20]++;
	    player.playlist.autoadvance_.timeout = player.setTimeout(function () {
	      cov_14i98g141m.f[5]++;
	      cov_14i98g141m.s[21]++;
	      reset(player);
	      cov_14i98g141m.s[22]++;
	      player.off('play', cancelOnPlay);
	      cov_14i98g141m.s[23]++;
	      player.playlist.next();
	    }, delay * 1000);
	  };

	  cov_14i98g141m.s[24]++;
	  player.one('ended', player.playlist.autoadvance_.trigger);
	};

	cov_14i98g141m.s[25]++;

	var setReset_ = function setReset_(fn) {
	  cov_14i98g141m.f[6]++;
	  cov_14i98g141m.s[26]++;
	  reset = fn;
	};

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	var proxy = function proxy(props) {
	  var player = _extends({}, videojs.EventTarget.prototype, {
	    play: function play() {},
	    paused: function paused() {},
	    ended: function ended() {},
	    poster: function poster() {},
	    src: function src() {},
	    currentSrc: function currentSrc() {},
	    addRemoteTextTrack: function addRemoteTextTrack() {},
	    removeRemoteTextTrack: function removeRemoteTextTrack() {},
	    remoteTextTracks: function remoteTextTracks() {},
	    playlist: {
	      autoadvance_: {},
	      currentIndex_: -1,
	      autoadvance: function autoadvance() {},
	      contains: function contains() {},
	      currentItem: function currentItem() {},
	      first: function first() {},
	      indexOf: function indexOf() {},
	      next: function next() {},
	      previous: function previous() {}
	    },
	    ready: function ready(cb) {
	      return cb();
	    },
	    setTimeout: function setTimeout(cb, wait) {
	      return window_1.setTimeout(cb, wait);
	    },
	    clearTimeout: function clearTimeout(id) {
	      return window_1.clearTimeout(id);
	    }
	  }, props);

	  player.constructor = videojs.getComponent('Player');
	  player.playlist.player_ = player;
	  return player;
	};

	QUnit.module('auto-advance');
	QUnit.test('set up ended listener if one does not exist yet', function (assert) {
	  var player = proxy();
	  var ones = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  setup(player, 0);
	  assert.equal(ones.length, 1, 'there should have been only one one event added');
	  assert.equal(ones[0], 'ended', 'the event we want to one is "ended"');
	});
	QUnit.test('off previous listener if exists before adding a new one', function (assert) {
	  var player = proxy();
	  var ones = [];
	  var offs = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  player.off = function (type) {
	    offs.push(type);
	  };

	  setup(player, 0);
	  assert.equal(ones.length, 1, 'there should have been only one one event added');
	  assert.equal(ones[0], 'ended', 'the event we want to one is "ended"');
	  assert.equal(offs.length, 0, 'we should not have off-ed anything yet');
	  setup(player, 10);
	  assert.equal(ones.length, 2, 'there should have been only two one event added');
	  assert.equal(ones[0], 'ended', 'the event we want to one is "ended"');
	  assert.equal(ones[1], 'ended', 'the event we want to one is "ended"');
	  assert.equal(offs.length, 1, 'there should have been only one off event added');
	  assert.equal(offs[0], 'ended', 'the event we want to off is "ended"');
	});
	QUnit.test('do nothing if timeout is weird', function (assert) {
	  var player = proxy();
	  var ones = [];
	  var offs = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  player.off = function (type) {
	    offs.push(type);
	  };

	  setup(player, -1);
	  setup(player, -100);
	  setup(player, null);
	  setup(player, {});
	  setup(player, []);
	  assert.equal(offs.length, 0, 'we did nothing');
	  assert.equal(ones.length, 0, 'we did nothing');
	});
	QUnit.test('reset if timeout is weird after we advance', function (assert) {
	  var player = proxy();
	  var ones = [];
	  var offs = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  player.off = function (type) {
	    offs.push(type);
	  };

	  setup(player, 0);
	  setup(player, -1);
	  setup(player, 0);
	  setup(player, -100);
	  setup(player, 0);
	  setup(player, null);
	  setup(player, 0);
	  setup(player, {});
	  setup(player, 0);
	  setup(player, []);
	  setup(player, 0);
	  setup(player, NaN);
	  setup(player, 0);
	  setup(player, Infinity);
	  setup(player, 0);
	  setup(player, -Infinity);
	  assert.equal(offs.length, 8, 'we reset the advance 8 times');
	  assert.equal(ones.length, 8, 'we autoadvanced 8 times');
	});
	QUnit.test('reset if we have already started advancing', function (assert) {
	  var player = proxy();
	  var oldClearTimeout = window_1.clearTimeout;
	  var clears = 0;

	  window_1.clearTimeout = function () {
	    clears++;
	  }; // pretend we started autoadvancing


	  player.playlist.autoadvance_.timeout = 1;
	  setup(player, 0);
	  assert.equal(clears, 1, 'we reset the auto advance');
	  window_1.clearTimeout = oldClearTimeout;
	});
	QUnit.test('timeout is given in seconds', function (assert) {
	  var player = proxy();
	  var oldSetTimeout = window_1.setTimeout;
	  player.addEventListener = Function.prototype;

	  window_1.setTimeout = function (fn, timeout) {
	    assert.equal(timeout, 10 * 1000, 'timeout was given in seconds');
	  };

	  setup(player, 10);
	  player.trigger('ended');
	  window_1.setTimeout = oldSetTimeout;
	});
	QUnit.test('cancel a pending auto-advance if play is requested', function (assert) {
	  var clock = sinon.useFakeTimers();
	  var player = proxy();
	  sinon.spy(player.playlist, 'next');
	  setup(player, 10);
	  player.trigger('ended');
	  clock.tick(10000);
	  assert.equal(player.playlist.next.callCount, 1, 'next was called');
	  setup(player, 10);
	  player.trigger('ended');
	  clock.tick(5000);
	  player.trigger('play');
	  clock.tick(5000);
	  assert.equal(player.playlist.next.callCount, 1, 'next was not called because a "play" occurred');
	  player.trigger('ended');
	  clock.tick(10000);
	  assert.equal(player.playlist.next.callCount, 2, 'next was called again because the content ended again and the appropriate wait time elapsed');
	});

	var cov_g6zj6xivc = function () {
	  var path = '/Users/poneill/dev/videojs-playlist/src/play-item.js',
	      hash = '97c5199c1096e68b4ae625017526f8773226fff1',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/poneill/dev/videojs-playlist/src/play-item.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 9,
	          column: 20
	        },
	        end: {
	          line: 18,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 10,
	          column: 17
	        },
	        end: {
	          line: 10,
	          column: 42
	        }
	      },
	      '2': {
	        start: {
	          line: 11,
	          column: 10
	        },
	        end: {
	          line: 11,
	          column: 38
	        }
	      },
	      '3': {
	        start: {
	          line: 15,
	          column: 2
	        },
	        end: {
	          line: 17,
	          column: 3
	        }
	      },
	      '4': {
	        start: {
	          line: 16,
	          column: 4
	        },
	        end: {
	          line: 16,
	          column: 44
	        }
	      },
	      '5': {
	        start: {
	          line: 32,
	          column: 17
	        },
	        end: {
	          line: 58,
	          column: 1
	        }
	      },
	      '6': {
	        start: {
	          line: 33,
	          column: 17
	        },
	        end: {
	          line: 33,
	          column: 51
	        }
	      },
	      '7': {
	        start: {
	          line: 35,
	          column: 2
	        },
	        end: {
	          line: 35,
	          column: 45
	        }
	      },
	      '8': {
	        start: {
	          line: 36,
	          column: 2
	        },
	        end: {
	          line: 36,
	          column: 35
	        }
	      },
	      '9': {
	        start: {
	          line: 37,
	          column: 2
	        },
	        end: {
	          line: 37,
	          column: 27
	        }
	      },
	      '10': {
	        start: {
	          line: 38,
	          column: 2
	        },
	        end: {
	          line: 38,
	          column: 22
	        }
	      },
	      '11': {
	        start: {
	          line: 40,
	          column: 2
	        },
	        end: {
	          line: 55,
	          column: 5
	        }
	      },
	      '12': {
	        start: {
	          line: 41,
	          column: 4
	        },
	        end: {
	          line: 41,
	          column: 76
	        }
	      },
	      '13': {
	        start: {
	          line: 42,
	          column: 4
	        },
	        end: {
	          line: 42,
	          column: 41
	        }
	      },
	      '14': {
	        start: {
	          line: 44,
	          column: 4
	        },
	        end: {
	          line: 52,
	          column: 5
	        }
	      },
	      '15': {
	        start: {
	          line: 45,
	          column: 26
	        },
	        end: {
	          line: 45,
	          column: 39
	        }
	      },
	      '16': {
	        start: {
	          line: 49,
	          column: 6
	        },
	        end: {
	          line: 51,
	          column: 7
	        }
	      },
	      '17': {
	        start: {
	          line: 50,
	          column: 8
	        },
	        end: {
	          line: 50,
	          column: 42
	        }
	      },
	      '18': {
	        start: {
	          line: 54,
	          column: 4
	        },
	        end: {
	          line: 54,
	          column: 54
	        }
	      },
	      '19': {
	        start: {
	          line: 57,
	          column: 2
	        },
	        end: {
	          line: 57,
	          column: 16
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 9,
	            column: 20
	          },
	          end: {
	            line: 9,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 9,
	            column: 32
	          },
	          end: {
	            line: 18,
	            column: 1
	          }
	        },
	        line: 9
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 32,
	            column: 17
	          },
	          end: {
	            line: 32,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 32,
	            column: 35
	          },
	          end: {
	            line: 58,
	            column: 1
	          }
	        },
	        line: 32
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 40,
	            column: 15
	          },
	          end: {
	            line: 40,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 40,
	            column: 21
	          },
	          end: {
	            line: 55,
	            column: 3
	          }
	        },
	        line: 40
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 50,
	            column: 31
	          },
	          end: {
	            line: 50,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 50,
	            column: 38
	          },
	          end: {
	            line: 50,
	            column: 40
	          }
	        },
	        line: 50
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 11,
	            column: 10
	          },
	          end: {
	            line: 11,
	            column: 38
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 11,
	            column: 10
	          },
	          end: {
	            line: 11,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 11,
	            column: 20
	          },
	          end: {
	            line: 11,
	            column: 33
	          }
	        }, {
	          start: {
	            line: 11,
	            column: 37
	          },
	          end: {
	            line: 11,
	            column: 38
	          }
	        }],
	        line: 11
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 33,
	            column: 17
	          },
	          end: {
	            line: 33,
	            column: 51
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 33,
	            column: 17
	          },
	          end: {
	            line: 33,
	            column: 33
	          }
	        }, {
	          start: {
	            line: 33,
	            column: 37
	          },
	          end: {
	            line: 33,
	            column: 51
	          }
	        }],
	        line: 33
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 36,
	            column: 16
	          },
	          end: {
	            line: 36,
	            column: 33
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 36,
	            column: 16
	          },
	          end: {
	            line: 36,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 36,
	            column: 31
	          },
	          end: {
	            line: 36,
	            column: 33
	          }
	        }],
	        line: 36
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 41,
	            column: 5
	          },
	          end: {
	            line: 41,
	            column: 26
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 41,
	            column: 5
	          },
	          end: {
	            line: 41,
	            column: 20
	          }
	        }, {
	          start: {
	            line: 41,
	            column: 24
	          },
	          end: {
	            line: 41,
	            column: 26
	          }
	        }],
	        line: 41
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 52,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 52,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 52,
	            column: 5
	          }
	        }],
	        line: 44
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 49,
	            column: 6
	          },
	          end: {
	            line: 51,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 49,
	            column: 6
	          },
	          end: {
	            line: 51,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 49,
	            column: 6
	          },
	          end: {
	            line: 51,
	            column: 7
	          }
	        }],
	        line: 49
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 49,
	            column: 10
	          },
	          end: {
	            line: 49,
	            column: 86
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 49,
	            column: 10
	          },
	          end: {
	            line: 49,
	            column: 44
	          }
	        }, {
	          start: {
	            line: 49,
	            column: 48
	          },
	          end: {
	            line: 49,
	            column: 86
	          }
	        }],
	        line: 49
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0
	    },
	    b: {
	      '0': [0, 0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	cov_g6zj6xivc.s[0]++;

	var clearTracks = function clearTracks(player) {
	  cov_g6zj6xivc.f[0]++;
	  var tracks = (cov_g6zj6xivc.s[1]++, player.remoteTextTracks());
	  var i = (cov_g6zj6xivc.s[2]++, (cov_g6zj6xivc.b[0][0]++, tracks) && (cov_g6zj6xivc.b[0][1]++, tracks.length) || (cov_g6zj6xivc.b[0][2]++, 0));
	  cov_g6zj6xivc.s[3]++;

	  while (i--) {
	    cov_g6zj6xivc.s[4]++;
	    player.removeRemoteTextTrack(tracks[i]);
	  }
	};

	cov_g6zj6xivc.s[5]++;

	var playItem = function playItem(player, item) {
	  cov_g6zj6xivc.f[1]++;
	  var replay = (cov_g6zj6xivc.s[6]++, (cov_g6zj6xivc.b[1][0]++, !player.paused()) || (cov_g6zj6xivc.b[1][1]++, player.ended()));
	  cov_g6zj6xivc.s[7]++;
	  player.trigger('beforeplaylistitem', item);
	  cov_g6zj6xivc.s[8]++;
	  player.poster((cov_g6zj6xivc.b[2][0]++, item.poster) || (cov_g6zj6xivc.b[2][1]++, ''));
	  cov_g6zj6xivc.s[9]++;
	  player.src(item.sources);
	  cov_g6zj6xivc.s[10]++;
	  clearTracks(player);
	  cov_g6zj6xivc.s[11]++;
	  player.ready(function () {
	    cov_g6zj6xivc.f[2]++;
	    cov_g6zj6xivc.s[12]++;
	    ((cov_g6zj6xivc.b[3][0]++, item.textTracks) || (cov_g6zj6xivc.b[3][1]++, [])).forEach(player.addRemoteTextTrack.bind(player));
	    cov_g6zj6xivc.s[13]++;
	    player.trigger('playlistitem', item);
	    cov_g6zj6xivc.s[14]++;

	    if (replay) {
	      cov_g6zj6xivc.b[4][0]++;
	      var playPromise = (cov_g6zj6xivc.s[15]++, player.play());
	      cov_g6zj6xivc.s[16]++;

	      if ((cov_g6zj6xivc.b[6][0]++, typeof playPromise !== 'undefined') && (cov_g6zj6xivc.b[6][1]++, typeof playPromise.then === 'function')) {
	        cov_g6zj6xivc.b[5][0]++;
	        cov_g6zj6xivc.s[17]++;
	        playPromise.then(null, function (e) {
	          cov_g6zj6xivc.f[3]++;
	        });
	      } else {
	        cov_g6zj6xivc.b[5][1]++;
	      }
	    } else {
	      cov_g6zj6xivc.b[4][1]++;
	    }

	    cov_g6zj6xivc.s[18]++;
	    setup(player, player.playlist.autoadvance_.delay);
	  });
	  cov_g6zj6xivc.s[19]++;
	  return player;
	};

	QUnit.module('play-item');
	QUnit.test('clearTracks will try and remove all tracks', function (assert) {
	  var player = proxy();
	  var remoteTracks = [1, 2, 3];
	  var removedTracks = [];

	  player.remoteTextTracks = function () {
	    return remoteTracks;
	  };

	  player.removeRemoteTextTrack = function (tt) {
	    removedTracks.push(tt);
	  };

	  clearTracks(player);
	  assert.deepEqual(removedTracks.sort(), remoteTracks.sort(), 'the removed tracks are equivalent to our remote tracks');
	});
	QUnit.test('will not try to play if paused', function (assert) {
	  var player = proxy();
	  var tryPlay = false;

	  player.paused = function () {
	    return true;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    textTracks: [4, 5, 6],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(!tryPlay, 'we did not reply on paused');
	});
	QUnit.test('will try to play if not paused', function (assert) {
	  var player = proxy();
	  var tryPlay = false;

	  player.paused = function () {
	    return false;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    textTracks: [4, 5, 6],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(tryPlay, 'we replayed on not-paused');
	});
	QUnit.test('will not try to play if paused and not ended', function (assert) {
	  var player = proxy();
	  var tryPlay = false;

	  player.paused = function () {
	    return true;
	  };

	  player.ended = function () {
	    return false;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    textTracks: [4, 5, 6],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(!tryPlay, 'we did not replaye on paused and not ended');
	});
	QUnit.test('will try to play if paused and ended', function (assert) {
	  var player = proxy();
	  var tryPlay = false;

	  player.paused = function () {
	    return true;
	  };

	  player.ended = function () {
	    return true;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(tryPlay, 'we replayed on not-paused');
	});
	QUnit.test('fires "beforeplaylistitem" and "playlistitem"', function (assert) {
	  var player = proxy();
	  var beforeSpy = sinon.spy();
	  var spy = sinon.spy();
	  player.on('beforeplaylistitem', beforeSpy);
	  player.on('playlistitem', spy);
	  playItem(player, {
	    sources: [1, 2, 3],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.strictEqual(beforeSpy.callCount, 1);
	  assert.strictEqual(spy.callCount, 1);
	});

	var cov_ritqk1zyq = function () {
	  var path = '/Users/poneill/dev/videojs-playlist/src/playlist-maker.js',
	      hash = '79f5685c308c2d5012c196c6803eeafdbcc5c9d1',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/poneill/dev/videojs-playlist/src/playlist-maker.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 20,
	          column: 21
	        },
	        end: {
	          line: 39,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 21,
	          column: 13
	        },
	        end: {
	          line: 21,
	          column: 20
	        }
	      },
	      '2': {
	        start: {
	          line: 22,
	          column: 13
	        },
	        end: {
	          line: 22,
	          column: 20
	        }
	      },
	      '3': {
	        start: {
	          line: 24,
	          column: 2
	        },
	        end: {
	          line: 26,
	          column: 3
	        }
	      },
	      '4': {
	        start: {
	          line: 25,
	          column: 4
	        },
	        end: {
	          line: 25,
	          column: 23
	        }
	      },
	      '5': {
	        start: {
	          line: 27,
	          column: 2
	        },
	        end: {
	          line: 29,
	          column: 3
	        }
	      },
	      '6': {
	        start: {
	          line: 28,
	          column: 4
	        },
	        end: {
	          line: 28,
	          column: 23
	        }
	      },
	      '7': {
	        start: {
	          line: 31,
	          column: 2
	        },
	        end: {
	          line: 33,
	          column: 3
	        }
	      },
	      '8': {
	        start: {
	          line: 32,
	          column: 4
	        },
	        end: {
	          line: 32,
	          column: 42
	        }
	      },
	      '9': {
	        start: {
	          line: 34,
	          column: 2
	        },
	        end: {
	          line: 36,
	          column: 3
	        }
	      },
	      '10': {
	        start: {
	          line: 35,
	          column: 4
	        },
	        end: {
	          line: 35,
	          column: 42
	        }
	      },
	      '11': {
	        start: {
	          line: 38,
	          column: 2
	        },
	        end: {
	          line: 38,
	          column: 23
	        }
	      },
	      '12': {
	        start: {
	          line: 56,
	          column: 23
	        },
	        end: {
	          line: 72,
	          column: 1
	        }
	      },
	      '13': {
	        start: {
	          line: 57,
	          column: 2
	        },
	        end: {
	          line: 69,
	          column: 3
	        }
	      },
	      '14': {
	        start: {
	          line: 58,
	          column: 20
	        },
	        end: {
	          line: 58,
	          column: 34
	        }
	      },
	      '15': {
	        start: {
	          line: 60,
	          column: 4
	        },
	        end: {
	          line: 68,
	          column: 5
	        }
	      },
	      '16': {
	        start: {
	          line: 61,
	          column: 6
	        },
	        end: {
	          line: 67,
	          column: 7
	        }
	      },
	      '17': {
	        start: {
	          line: 62,
	          column: 23
	        },
	        end: {
	          line: 62,
	          column: 33
	        }
	      },
	      '18': {
	        start: {
	          line: 64,
	          column: 8
	        },
	        end: {
	          line: 66,
	          column: 9
	        }
	      },
	      '19': {
	        start: {
	          line: 65,
	          column: 10
	        },
	        end: {
	          line: 65,
	          column: 19
	        }
	      },
	      '20': {
	        start: {
	          line: 71,
	          column: 2
	        },
	        end: {
	          line: 71,
	          column: 12
	        }
	      },
	      '21': {
	        start: {
	          line: 84,
	          column: 18
	        },
	        end: {
	          line: 97,
	          column: 1
	        }
	      },
	      '22': {
	        start: {
	          line: 85,
	          column: 14
	        },
	        end: {
	          line: 85,
	          column: 16
	        }
	      },
	      '23': {
	        start: {
	          line: 86,
	          column: 20
	        },
	        end: {
	          line: 86,
	          column: 34
	        }
	      },
	      '24': {
	        start: {
	          line: 88,
	          column: 2
	        },
	        end: {
	          line: 94,
	          column: 3
	        }
	      },
	      '25': {
	        start: {
	          line: 89,
	          column: 17
	        },
	        end: {
	          line: 89,
	          column: 76
	        }
	      },
	      '26': {
	        start: {
	          line: 90,
	          column: 18
	        },
	        end: {
	          line: 90,
	          column: 27
	        }
	      },
	      '27': {
	        start: {
	          line: 92,
	          column: 4
	        },
	        end: {
	          line: 92,
	          column: 27
	        }
	      },
	      '28': {
	        start: {
	          line: 93,
	          column: 4
	        },
	        end: {
	          line: 93,
	          column: 23
	        }
	      },
	      '29': {
	        start: {
	          line: 96,
	          column: 2
	        },
	        end: {
	          line: 96,
	          column: 13
	        }
	      },
	      '30': {
	        start: {
	          line: 131,
	          column: 13
	        },
	        end: {
	          line: 131,
	          column: 17
	        }
	      },
	      '31': {
	        start: {
	          line: 132,
	          column: 17
	        },
	        end: {
	          line: 132,
	          column: 22
	        }
	      },
	      '32': {
	        start: {
	          line: 152,
	          column: 19
	        },
	        end: {
	          line: 199,
	          column: 3
	        }
	      },
	      '33': {
	        start: {
	          line: 153,
	          column: 4
	        },
	        end: {
	          line: 155,
	          column: 5
	        }
	      },
	      '34': {
	        start: {
	          line: 154,
	          column: 6
	        },
	        end: {
	          line: 154,
	          column: 73
	        }
	      },
	      '35': {
	        start: {
	          line: 157,
	          column: 4
	        },
	        end: {
	          line: 195,
	          column: 5
	        }
	      },
	      '36': {
	        start: {
	          line: 160,
	          column: 31
	        },
	        end: {
	          line: 160,
	          column: 72
	        }
	      },
	      '37': {
	        start: {
	          line: 162,
	          column: 6
	        },
	        end: {
	          line: 162,
	          column: 29
	        }
	      },
	      '38': {
	        start: {
	          line: 165,
	          column: 6
	        },
	        end: {
	          line: 165,
	          column: 22
	        }
	      },
	      '39': {
	        start: {
	          line: 167,
	          column: 6
	        },
	        end: {
	          line: 175,
	          column: 9
	        }
	      },
	      '40': {
	        start: {
	          line: 177,
	          column: 6
	        },
	        end: {
	          line: 177,
	          column: 23
	        }
	      },
	      '41': {
	        start: {
	          line: 179,
	          column: 6
	        },
	        end: {
	          line: 181,
	          column: 7
	        }
	      },
	      '42': {
	        start: {
	          line: 180,
	          column: 8
	        },
	        end: {
	          line: 180,
	          column: 39
	        }
	      },
	      '43': {
	        start: {
	          line: 190,
	          column: 6
	        },
	        end: {
	          line: 194,
	          column: 7
	        }
	      },
	      '44': {
	        start: {
	          line: 191,
	          column: 8
	        },
	        end: {
	          line: 193,
	          column: 14
	        }
	      },
	      '45': {
	        start: {
	          line: 192,
	          column: 10
	        },
	        end: {
	          line: 192,
	          column: 43
	        }
	      },
	      '46': {
	        start: {
	          line: 198,
	          column: 4
	        },
	        end: {
	          line: 198,
	          column: 24
	        }
	      },
	      '47': {
	        start: {
	          line: 202,
	          column: 2
	        },
	        end: {
	          line: 206,
	          column: 5
	        }
	      },
	      '48': {
	        start: {
	          line: 203,
	          column: 4
	        },
	        end: {
	          line: 205,
	          column: 5
	        }
	      },
	      '49': {
	        start: {
	          line: 204,
	          column: 6
	        },
	        end: {
	          line: 204,
	          column: 32
	        }
	      },
	      '50': {
	        start: {
	          line: 208,
	          column: 2
	        },
	        end: {
	          line: 208,
	          column: 30
	        }
	      },
	      '51': {
	        start: {
	          line: 209,
	          column: 2
	        },
	        end: {
	          line: 209,
	          column: 28
	        }
	      },
	      '52': {
	        start: {
	          line: 210,
	          column: 2
	        },
	        end: {
	          line: 210,
	          column: 29
	        }
	      },
	      '53': {
	        start: {
	          line: 211,
	          column: 2
	        },
	        end: {
	          line: 211,
	          column: 27
	        }
	      },
	      '54': {
	        start: {
	          line: 224,
	          column: 2
	        },
	        end: {
	          line: 247,
	          column: 4
	        }
	      },
	      '55': {
	        start: {
	          line: 227,
	          column: 4
	        },
	        end: {
	          line: 229,
	          column: 5
	        }
	      },
	      '56': {
	        start: {
	          line: 228,
	          column: 6
	        },
	        end: {
	          line: 228,
	          column: 36
	        }
	      },
	      '57': {
	        start: {
	          line: 231,
	          column: 4
	        },
	        end: {
	          line: 244,
	          column: 5
	        }
	      },
	      '58': {
	        start: {
	          line: 237,
	          column: 6
	        },
	        end: {
	          line: 237,
	          column: 37
	        }
	      },
	      '59': {
	        start: {
	          line: 238,
	          column: 6
	        },
	        end: {
	          line: 241,
	          column: 8
	        }
	      },
	      '60': {
	        start: {
	          line: 243,
	          column: 6
	        },
	        end: {
	          line: 243,
	          column: 85
	        }
	      },
	      '61': {
	        start: {
	          line: 246,
	          column: 4
	        },
	        end: {
	          line: 246,
	          column: 34
	        }
	      },
	      '62': {
	        start: {
	          line: 258,
	          column: 2
	        },
	        end: {
	          line: 260,
	          column: 4
	        }
	      },
	      '63': {
	        start: {
	          line: 259,
	          column: 4
	        },
	        end: {
	          line: 259,
	          column: 42
	        }
	      },
	      '64': {
	        start: {
	          line: 271,
	          column: 2
	        },
	        end: {
	          line: 289,
	          column: 4
	        }
	      },
	      '65': {
	        start: {
	          line: 272,
	          column: 4
	        },
	        end: {
	          line: 274,
	          column: 5
	        }
	      },
	      '66': {
	        start: {
	          line: 273,
	          column: 6
	        },
	        end: {
	          line: 273,
	          column: 41
	        }
	      },
	      '67': {
	        start: {
	          line: 276,
	          column: 20
	        },
	        end: {
	          line: 276,
	          column: 64
	        }
	      },
	      '68': {
	        start: {
	          line: 278,
	          column: 4
	        },
	        end: {
	          line: 286,
	          column: 5
	        }
	      },
	      '69': {
	        start: {
	          line: 279,
	          column: 21
	        },
	        end: {
	          line: 279,
	          column: 31
	        }
	      },
	      '70': {
	        start: {
	          line: 281,
	          column: 6
	        },
	        end: {
	          line: 285,
	          column: 7
	        }
	      },
	      '71': {
	        start: {
	          line: 282,
	          column: 8
	        },
	        end: {
	          line: 282,
	          column: 44
	        }
	      },
	      '72': {
	        start: {
	          line: 283,
	          column: 13
	        },
	        end: {
	          line: 285,
	          column: 7
	        }
	      },
	      '73': {
	        start: {
	          line: 284,
	          column: 8
	        },
	        end: {
	          line: 284,
	          column: 48
	        }
	      },
	      '74': {
	        start: {
	          line: 288,
	          column: 4
	        },
	        end: {
	          line: 288,
	          column: 14
	        }
	      },
	      '75': {
	        start: {
	          line: 298,
	          column: 2
	        },
	        end: {
	          line: 298,
	          column: 55
	        }
	      },
	      '76': {
	        start: {
	          line: 298,
	          column: 32
	        },
	        end: {
	          line: 298,
	          column: 54
	        }
	      },
	      '77': {
	        start: {
	          line: 307,
	          column: 2
	        },
	        end: {
	          line: 307,
	          column: 45
	        }
	      },
	      '78': {
	        start: {
	          line: 307,
	          column: 29
	        },
	        end: {
	          line: 307,
	          column: 44
	        }
	      },
	      '79': {
	        start: {
	          line: 316,
	          column: 2
	        },
	        end: {
	          line: 332,
	          column: 4
	        }
	      },
	      '80': {
	        start: {
	          line: 317,
	          column: 20
	        },
	        end: {
	          line: 317,
	          column: 42
	        }
	      },
	      '81': {
	        start: {
	          line: 319,
	          column: 4
	        },
	        end: {
	          line: 321,
	          column: 5
	        }
	      },
	      '82': {
	        start: {
	          line: 320,
	          column: 6
	        },
	        end: {
	          line: 320,
	          column: 16
	        }
	      },
	      '83': {
	        start: {
	          line: 323,
	          column: 22
	        },
	        end: {
	          line: 323,
	          column: 42
	        }
	      },
	      '84': {
	        start: {
	          line: 326,
	          column: 4
	        },
	        end: {
	          line: 328,
	          column: 5
	        }
	      },
	      '85': {
	        start: {
	          line: 327,
	          column: 6
	        },
	        end: {
	          line: 327,
	          column: 15
	        }
	      },
	      '86': {
	        start: {
	          line: 331,
	          column: 4
	        },
	        end: {
	          line: 331,
	          column: 44
	        }
	      },
	      '87': {
	        start: {
	          line: 341,
	          column: 2
	        },
	        end: {
	          line: 355,
	          column: 4
	        }
	      },
	      '88': {
	        start: {
	          line: 342,
	          column: 20
	        },
	        end: {
	          line: 342,
	          column: 42
	        }
	      },
	      '89': {
	        start: {
	          line: 344,
	          column: 4
	        },
	        end: {
	          line: 346,
	          column: 5
	        }
	      },
	      '90': {
	        start: {
	          line: 345,
	          column: 6
	        },
	        end: {
	          line: 345,
	          column: 16
	        }
	      },
	      '91': {
	        start: {
	          line: 349,
	          column: 4
	        },
	        end: {
	          line: 351,
	          column: 5
	        }
	      },
	      '92': {
	        start: {
	          line: 350,
	          column: 6
	        },
	        end: {
	          line: 350,
	          column: 34
	        }
	      },
	      '93': {
	        start: {
	          line: 354,
	          column: 4
	        },
	        end: {
	          line: 354,
	          column: 36
	        }
	      },
	      '94': {
	        start: {
	          line: 363,
	          column: 2
	        },
	        end: {
	          line: 373,
	          column: 4
	        }
	      },
	      '95': {
	        start: {
	          line: 364,
	          column: 4
	        },
	        end: {
	          line: 366,
	          column: 5
	        }
	      },
	      '96': {
	        start: {
	          line: 365,
	          column: 6
	        },
	        end: {
	          line: 365,
	          column: 13
	        }
	      },
	      '97': {
	        start: {
	          line: 368,
	          column: 4
	        },
	        end: {
	          line: 370,
	          column: 5
	        }
	      },
	      '98': {
	        start: {
	          line: 369,
	          column: 6
	        },
	        end: {
	          line: 369,
	          column: 43
	        }
	      },
	      '99': {
	        start: {
	          line: 372,
	          column: 4
	        },
	        end: {
	          line: 372,
	          column: 32
	        }
	      },
	      '100': {
	        start: {
	          line: 381,
	          column: 2
	        },
	        end: {
	          line: 391,
	          column: 4
	        }
	      },
	      '101': {
	        start: {
	          line: 382,
	          column: 4
	        },
	        end: {
	          line: 384,
	          column: 5
	        }
	      },
	      '102': {
	        start: {
	          line: 383,
	          column: 6
	        },
	        end: {
	          line: 383,
	          column: 13
	        }
	      },
	      '103': {
	        start: {
	          line: 386,
	          column: 4
	        },
	        end: {
	          line: 388,
	          column: 5
	        }
	      },
	      '104': {
	        start: {
	          line: 387,
	          column: 6
	        },
	        end: {
	          line: 387,
	          column: 62
	        }
	      },
	      '105': {
	        start: {
	          line: 390,
	          column: 4
	        },
	        end: {
	          line: 390,
	          column: 32
	        }
	      },
	      '106': {
	        start: {
	          line: 399,
	          column: 2
	        },
	        end: {
	          line: 409,
	          column: 4
	        }
	      },
	      '107': {
	        start: {
	          line: 400,
	          column: 4
	        },
	        end: {
	          line: 402,
	          column: 5
	        }
	      },
	      '108': {
	        start: {
	          line: 401,
	          column: 6
	        },
	        end: {
	          line: 401,
	          column: 13
	        }
	      },
	      '109': {
	        start: {
	          line: 404,
	          column: 18
	        },
	        end: {
	          line: 404,
	          column: 38
	        }
	      },
	      '110': {
	        start: {
	          line: 406,
	          column: 4
	        },
	        end: {
	          line: 408,
	          column: 5
	        }
	      },
	      '111': {
	        start: {
	          line: 407,
	          column: 6
	        },
	        end: {
	          line: 407,
	          column: 47
	        }
	      },
	      '112': {
	        start: {
	          line: 417,
	          column: 2
	        },
	        end: {
	          line: 427,
	          column: 4
	        }
	      },
	      '113': {
	        start: {
	          line: 418,
	          column: 4
	        },
	        end: {
	          line: 420,
	          column: 5
	        }
	      },
	      '114': {
	        start: {
	          line: 419,
	          column: 6
	        },
	        end: {
	          line: 419,
	          column: 13
	        }
	      },
	      '115': {
	        start: {
	          line: 422,
	          column: 18
	        },
	        end: {
	          line: 422,
	          column: 42
	        }
	      },
	      '116': {
	        start: {
	          line: 424,
	          column: 4
	        },
	        end: {
	          line: 426,
	          column: 5
	        }
	      },
	      '117': {
	        start: {
	          line: 425,
	          column: 6
	        },
	        end: {
	          line: 425,
	          column: 47
	        }
	      },
	      '118': {
	        start: {
	          line: 435,
	          column: 2
	        },
	        end: {
	          line: 437,
	          column: 4
	        }
	      },
	      '119': {
	        start: {
	          line: 436,
	          column: 4
	        },
	        end: {
	          line: 436,
	          column: 47
	        }
	      },
	      '120': {
	        start: {
	          line: 449,
	          column: 2
	        },
	        end: {
	          line: 461,
	          column: 4
	        }
	      },
	      '121': {
	        start: {
	          line: 450,
	          column: 4
	        },
	        end: {
	          line: 452,
	          column: 5
	        }
	      },
	      '122': {
	        start: {
	          line: 451,
	          column: 6
	        },
	        end: {
	          line: 451,
	          column: 30
	        }
	      },
	      '123': {
	        start: {
	          line: 454,
	          column: 4
	        },
	        end: {
	          line: 457,
	          column: 5
	        }
	      },
	      '124': {
	        start: {
	          line: 455,
	          column: 6
	        },
	        end: {
	          line: 455,
	          column: 75
	        }
	      },
	      '125': {
	        start: {
	          line: 456,
	          column: 6
	        },
	        end: {
	          line: 456,
	          column: 13
	        }
	      },
	      '126': {
	        start: {
	          line: 459,
	          column: 4
	        },
	        end: {
	          line: 459,
	          column: 29
	        }
	      },
	      '127': {
	        start: {
	          line: 460,
	          column: 4
	        },
	        end: {
	          line: 460,
	          column: 28
	        }
	      },
	      '128': {
	        start: {
	          line: 472,
	          column: 2
	        },
	        end: {
	          line: 493,
	          column: 4
	        }
	      },
	      '129': {
	        start: {
	          line: 475,
	          column: 4
	        },
	        end: {
	          line: 477,
	          column: 5
	        }
	      },
	      '130': {
	        start: {
	          line: 476,
	          column: 6
	        },
	        end: {
	          line: 476,
	          column: 13
	        }
	      },
	      '131': {
	        start: {
	          line: 479,
	          column: 4
	        },
	        end: {
	          line: 479,
	          column: 23
	        }
	      },
	      '132': {
	        start: {
	          line: 482,
	          column: 4
	        },
	        end: {
	          line: 484,
	          column: 5
	        }
	      },
	      '133': {
	        start: {
	          line: 483,
	          column: 6
	        },
	        end: {
	          line: 483,
	          column: 13
	        }
	      },
	      '134': {
	        start: {
	          line: 492,
	          column: 4
	        },
	        end: {
	          line: 492,
	          column: 37
	        }
	      },
	      '135': {
	        start: {
	          line: 501,
	          column: 2
	        },
	        end: {
	          line: 522,
	          column: 4
	        }
	      },
	      '136': {
	        start: {
	          line: 504,
	          column: 4
	        },
	        end: {
	          line: 506,
	          column: 5
	        }
	      },
	      '137': {
	        start: {
	          line: 505,
	          column: 6
	        },
	        end: {
	          line: 505,
	          column: 13
	        }
	      },
	      '138': {
	        start: {
	          line: 508,
	          column: 4
	        },
	        end: {
	          line: 508,
	          column: 19
	        }
	      },
	      '139': {
	        start: {
	          line: 511,
	          column: 4
	        },
	        end: {
	          line: 513,
	          column: 5
	        }
	      },
	      '140': {
	        start: {
	          line: 512,
	          column: 6
	        },
	        end: {
	          line: 512,
	          column: 13
	        }
	      },
	      '141': {
	        start: {
	          line: 521,
	          column: 4
	        },
	        end: {
	          line: 521,
	          column: 37
	        }
	      },
	      '142': {
	        start: {
	          line: 542,
	          column: 2
	        },
	        end: {
	          line: 578,
	          column: 4
	        }
	      },
	      '143': {
	        start: {
	          line: 543,
	          column: 16
	        },
	        end: {
	          line: 543,
	          column: 17
	        }
	      },
	      '144': {
	        start: {
	          line: 544,
	          column: 14
	        },
	        end: {
	          line: 544,
	          column: 18
	        }
	      },
	      '145': {
	        start: {
	          line: 548,
	          column: 4
	        },
	        end: {
	          line: 551,
	          column: 5
	        }
	      },
	      '146': {
	        start: {
	          line: 549,
	          column: 6
	        },
	        end: {
	          line: 549,
	          column: 41
	        }
	      },
	      '147': {
	        start: {
	          line: 550,
	          column: 6
	        },
	        end: {
	          line: 550,
	          column: 30
	        }
	      },
	      '148': {
	        start: {
	          line: 554,
	          column: 4
	        },
	        end: {
	          line: 556,
	          column: 5
	        }
	      },
	      '149': {
	        start: {
	          line: 555,
	          column: 6
	        },
	        end: {
	          line: 555,
	          column: 13
	        }
	      },
	      '150': {
	        start: {
	          line: 558,
	          column: 4
	        },
	        end: {
	          line: 558,
	          column: 19
	        }
	      },
	      '151': {
	        start: {
	          line: 562,
	          column: 4
	        },
	        end: {
	          line: 564,
	          column: 5
	        }
	      },
	      '152': {
	        start: {
	          line: 563,
	          column: 6
	        },
	        end: {
	          line: 563,
	          column: 54
	        }
	      },
	      '153': {
	        start: {
	          line: 567,
	          column: 4
	        },
	        end: {
	          line: 569,
	          column: 5
	        }
	      },
	      '154': {
	        start: {
	          line: 568,
	          column: 6
	        },
	        end: {
	          line: 568,
	          column: 13
	        }
	      },
	      '155': {
	        start: {
	          line: 577,
	          column: 4
	        },
	        end: {
	          line: 577,
	          column: 37
	        }
	      },
	      '156': {
	        start: {
	          line: 581,
	          column: 2
	        },
	        end: {
	          line: 587,
	          column: 3
	        }
	      },
	      '157': {
	        start: {
	          line: 582,
	          column: 4
	        },
	        end: {
	          line: 582,
	          column: 48
	        }
	      },
	      '158': {
	        start: {
	          line: 586,
	          column: 4
	        },
	        end: {
	          line: 586,
	          column: 14
	        }
	      },
	      '159': {
	        start: {
	          line: 589,
	          column: 2
	        },
	        end: {
	          line: 589,
	          column: 18
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 20,
	            column: 21
	          },
	          end: {
	            line: 20,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 20,
	            column: 43
	          },
	          end: {
	            line: 39,
	            column: 1
	          }
	        },
	        line: 20
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 56,
	            column: 23
	          },
	          end: {
	            line: 56,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 56,
	            column: 37
	          },
	          end: {
	            line: 72,
	            column: 1
	          }
	        },
	        line: 56
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 84,
	            column: 18
	          },
	          end: {
	            line: 84,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 84,
	            column: 27
	          },
	          end: {
	            line: 97,
	            column: 1
	          }
	        },
	        line: 84
	      },
	      '3': {
	        name: 'factory',
	        decl: {
	          start: {
	            line: 130,
	            column: 24
	          },
	          end: {
	            line: 130,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 130,
	            column: 71
	          },
	          end: {
	            line: 590,
	            column: 1
	          }
	        },
	        line: 130
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 152,
	            column: 37
	          },
	          end: {
	            line: 152,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 152,
	            column: 64
	          },
	          end: {
	            line: 199,
	            column: 3
	          }
	        },
	        line: 152
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 191,
	            column: 26
	          },
	          end: {
	            line: 191,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 191,
	            column: 32
	          },
	          end: {
	            line: 193,
	            column: 9
	          }
	        },
	        line: 191
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 202,
	            column: 25
	          },
	          end: {
	            line: 202,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 202,
	            column: 31
	          },
	          end: {
	            line: 206,
	            column: 3
	          }
	        },
	        line: 202
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 224,
	            column: 25
	          },
	          end: {
	            line: 224,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 224,
	            column: 36
	          },
	          end: {
	            line: 247,
	            column: 3
	          }
	        },
	        line: 224
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 258,
	            column: 22
	          },
	          end: {
	            line: 258,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 258,
	            column: 33
	          },
	          end: {
	            line: 260,
	            column: 3
	          }
	        },
	        line: 258
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 271,
	            column: 21
	          },
	          end: {
	            line: 271,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 271,
	            column: 32
	          },
	          end: {
	            line: 289,
	            column: 3
	          }
	        },
	        line: 271
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 298,
	            column: 26
	          },
	          end: {
	            line: 298,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 298,
	            column: 32
	          },
	          end: {
	            line: 298,
	            column: 54
	          }
	        },
	        line: 298
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 307,
	            column: 23
	          },
	          end: {
	            line: 307,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 307,
	            column: 29
	          },
	          end: {
	            line: 307,
	            column: 44
	          }
	        },
	        line: 307
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 316,
	            column: 23
	          },
	          end: {
	            line: 316,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 316,
	            column: 29
	          },
	          end: {
	            line: 332,
	            column: 3
	          }
	        },
	        line: 316
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 341,
	            column: 27
	          },
	          end: {
	            line: 341,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 341,
	            column: 33
	          },
	          end: {
	            line: 355,
	            column: 3
	          }
	        },
	        line: 341
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 363,
	            column: 19
	          },
	          end: {
	            line: 363,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 363,
	            column: 25
	          },
	          end: {
	            line: 373,
	            column: 3
	          }
	        },
	        line: 363
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 381,
	            column: 18
	          },
	          end: {
	            line: 381,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 381,
	            column: 24
	          },
	          end: {
	            line: 391,
	            column: 3
	          }
	        },
	        line: 381
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 399,
	            column: 18
	          },
	          end: {
	            line: 399,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 399,
	            column: 24
	          },
	          end: {
	            line: 409,
	            column: 3
	          }
	        },
	        line: 399
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 417,
	            column: 22
	          },
	          end: {
	            line: 417,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 417,
	            column: 28
	          },
	          end: {
	            line: 427,
	            column: 3
	          }
	        },
	        line: 417
	      },
	      '18': {
	        name: '(anonymous_18)',
	        decl: {
	          start: {
	            line: 435,
	            column: 25
	          },
	          end: {
	            line: 435,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 435,
	            column: 36
	          },
	          end: {
	            line: 437,
	            column: 3
	          }
	        },
	        line: 435
	      },
	      '19': {
	        name: '(anonymous_19)',
	        decl: {
	          start: {
	            line: 449,
	            column: 20
	          },
	          end: {
	            line: 449,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 449,
	            column: 29
	          },
	          end: {
	            line: 461,
	            column: 3
	          }
	        },
	        line: 449
	      },
	      '20': {
	        name: '(anonymous_20)',
	        decl: {
	          start: {
	            line: 472,
	            column: 18
	          },
	          end: {
	            line: 472,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 472,
	            column: 31
	          },
	          end: {
	            line: 493,
	            column: 3
	          }
	        },
	        line: 472
	      },
	      '21': {
	        name: '(anonymous_21)',
	        decl: {
	          start: {
	            line: 501,
	            column: 21
	          },
	          end: {
	            line: 501,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 501,
	            column: 27
	          },
	          end: {
	            line: 522,
	            column: 3
	          }
	        },
	        line: 501
	      },
	      '22': {
	        name: '(anonymous_22)',
	        decl: {
	          start: {
	            line: 542,
	            column: 21
	          },
	          end: {
	            line: 542,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 542,
	            column: 38
	          },
	          end: {
	            line: 578,
	            column: 3
	          }
	        },
	        line: 542
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        }],
	        line: 24
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 27,
	            column: 2
	          },
	          end: {
	            line: 29,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 27,
	            column: 2
	          },
	          end: {
	            line: 29,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 27,
	            column: 2
	          },
	          end: {
	            line: 29,
	            column: 3
	          }
	        }],
	        line: 27
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 31,
	            column: 2
	          },
	          end: {
	            line: 33,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 31,
	            column: 2
	          },
	          end: {
	            line: 33,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 31,
	            column: 2
	          },
	          end: {
	            line: 33,
	            column: 3
	          }
	        }],
	        line: 31
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 34,
	            column: 2
	          },
	          end: {
	            line: 36,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 34,
	            column: 2
	          },
	          end: {
	            line: 36,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 34,
	            column: 2
	          },
	          end: {
	            line: 36,
	            column: 3
	          }
	        }],
	        line: 34
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 60,
	            column: 4
	          },
	          end: {
	            line: 68,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 60,
	            column: 4
	          },
	          end: {
	            line: 68,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 60,
	            column: 4
	          },
	          end: {
	            line: 68,
	            column: 5
	          }
	        }],
	        line: 60
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 64,
	            column: 8
	          },
	          end: {
	            line: 66,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 64,
	            column: 8
	          },
	          end: {
	            line: 66,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 64,
	            column: 8
	          },
	          end: {
	            line: 66,
	            column: 9
	          }
	        }],
	        line: 64
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 64,
	            column: 12
	          },
	          end: {
	            line: 64,
	            column: 47
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 64,
	            column: 12
	          },
	          end: {
	            line: 64,
	            column: 18
	          }
	        }, {
	          start: {
	            line: 64,
	            column: 22
	          },
	          end: {
	            line: 64,
	            column: 47
	          }
	        }],
	        line: 64
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 130,
	            column: 53
	          },
	          end: {
	            line: 130,
	            column: 69
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 130,
	            column: 68
	          },
	          end: {
	            line: 130,
	            column: 69
	          }
	        }],
	        line: 130
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 152,
	            column: 47
	          },
	          end: {
	            line: 152,
	            column: 59
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 152,
	            column: 58
	          },
	          end: {
	            line: 152,
	            column: 59
	          }
	        }],
	        line: 152
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 153,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 153,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 153,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        }],
	        line: 153
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 157,
	            column: 4
	          },
	          end: {
	            line: 195,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 157,
	            column: 4
	          },
	          end: {
	            line: 195,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 157,
	            column: 4
	          },
	          end: {
	            line: 195,
	            column: 5
	          }
	        }],
	        line: 157
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 160,
	            column: 31
	          },
	          end: {
	            line: 160,
	            column: 72
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 160,
	            column: 53
	          },
	          end: {
	            line: 160,
	            column: 65
	          }
	        }, {
	          start: {
	            line: 160,
	            column: 68
	          },
	          end: {
	            line: 160,
	            column: 72
	          }
	        }],
	        line: 160
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 174,
	            column: 26
	          },
	          end: {
	            line: 174,
	            column: 48
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 174,
	            column: 26
	          },
	          end: {
	            line: 174,
	            column: 42
	          }
	        }, {
	          start: {
	            line: 174,
	            column: 46
	          },
	          end: {
	            line: 174,
	            column: 48
	          }
	        }],
	        line: 174
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 179,
	            column: 6
	          },
	          end: {
	            line: 181,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 179,
	            column: 6
	          },
	          end: {
	            line: 181,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 179,
	            column: 6
	          },
	          end: {
	            line: 181,
	            column: 7
	          }
	        }],
	        line: 179
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 190,
	            column: 6
	          },
	          end: {
	            line: 194,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 190,
	            column: 6
	          },
	          end: {
	            line: 194,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 190,
	            column: 6
	          },
	          end: {
	            line: 194,
	            column: 7
	          }
	        }],
	        line: 190
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 203,
	            column: 4
	          },
	          end: {
	            line: 205,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 203,
	            column: 4
	          },
	          end: {
	            line: 205,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 203,
	            column: 4
	          },
	          end: {
	            line: 205,
	            column: 5
	          }
	        }],
	        line: 203
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 227,
	            column: 4
	          },
	          end: {
	            line: 229,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 227,
	            column: 4
	          },
	          end: {
	            line: 229,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 227,
	            column: 4
	          },
	          end: {
	            line: 229,
	            column: 5
	          }
	        }],
	        line: 227
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 231,
	            column: 4
	          },
	          end: {
	            line: 244,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 231,
	            column: 4
	          },
	          end: {
	            line: 244,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 231,
	            column: 4
	          },
	          end: {
	            line: 244,
	            column: 5
	          }
	        }],
	        line: 231
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 232,
	            column: 6
	          },
	          end: {
	            line: 235,
	            column: 25
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 232,
	            column: 6
	          },
	          end: {
	            line: 232,
	            column: 31
	          }
	        }, {
	          start: {
	            line: 233,
	            column: 6
	          },
	          end: {
	            line: 233,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 234,
	            column: 6
	          },
	          end: {
	            line: 234,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 235,
	            column: 6
	          },
	          end: {
	            line: 235,
	            column: 25
	          }
	        }],
	        line: 232
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 243,
	            column: 48
	          },
	          end: {
	            line: 243,
	            column: 83
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 243,
	            column: 48
	          },
	          end: {
	            line: 243,
	            column: 77
	          }
	        }, {
	          start: {
	            line: 243,
	            column: 81
	          },
	          end: {
	            line: 243,
	            column: 83
	          }
	        }],
	        line: 243
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 272,
	            column: 4
	          },
	          end: {
	            line: 274,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 272,
	            column: 4
	          },
	          end: {
	            line: 274,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 272,
	            column: 4
	          },
	          end: {
	            line: 274,
	            column: 5
	          }
	        }],
	        line: 272
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 276,
	            column: 20
	          },
	          end: {
	            line: 276,
	            column: 64
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 276,
	            column: 43
	          },
	          end: {
	            line: 276,
	            column: 48
	          }
	        }, {
	          start: {
	            line: 276,
	            column: 51
	          },
	          end: {
	            line: 276,
	            column: 64
	          }
	        }],
	        line: 276
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 281,
	            column: 6
	          },
	          end: {
	            line: 285,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 281,
	            column: 6
	          },
	          end: {
	            line: 285,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 281,
	            column: 6
	          },
	          end: {
	            line: 285,
	            column: 7
	          }
	        }],
	        line: 281
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 283,
	            column: 13
	          },
	          end: {
	            line: 285,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 283,
	            column: 13
	          },
	          end: {
	            line: 285,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 283,
	            column: 13
	          },
	          end: {
	            line: 285,
	            column: 7
	          }
	        }],
	        line: 283
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 319,
	            column: 4
	          },
	          end: {
	            line: 321,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 319,
	            column: 4
	          },
	          end: {
	            line: 321,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 319,
	            column: 4
	          },
	          end: {
	            line: 321,
	            column: 5
	          }
	        }],
	        line: 319
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 326,
	            column: 4
	          },
	          end: {
	            line: 328,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 326,
	            column: 4
	          },
	          end: {
	            line: 328,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 326,
	            column: 4
	          },
	          end: {
	            line: 328,
	            column: 5
	          }
	        }],
	        line: 326
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 326,
	            column: 8
	          },
	          end: {
	            line: 326,
	            column: 49
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 326,
	            column: 8
	          },
	          end: {
	            line: 326,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 326,
	            column: 28
	          },
	          end: {
	            line: 326,
	            column: 49
	          }
	        }],
	        line: 326
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 344,
	            column: 4
	          },
	          end: {
	            line: 346,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 344,
	            column: 4
	          },
	          end: {
	            line: 346,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 344,
	            column: 4
	          },
	          end: {
	            line: 346,
	            column: 5
	          }
	        }],
	        line: 344
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 349,
	            column: 4
	          },
	          end: {
	            line: 351,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 349,
	            column: 4
	          },
	          end: {
	            line: 351,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 349,
	            column: 4
	          },
	          end: {
	            line: 351,
	            column: 5
	          }
	        }],
	        line: 349
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 349,
	            column: 8
	          },
	          end: {
	            line: 349,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 349,
	            column: 8
	          },
	          end: {
	            line: 349,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 349,
	            column: 28
	          },
	          end: {
	            line: 349,
	            column: 41
	          }
	        }],
	        line: 349
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 364,
	            column: 4
	          },
	          end: {
	            line: 366,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 364,
	            column: 4
	          },
	          end: {
	            line: 366,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 364,
	            column: 4
	          },
	          end: {
	            line: 366,
	            column: 5
	          }
	        }],
	        line: 364
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 368,
	            column: 4
	          },
	          end: {
	            line: 370,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 368,
	            column: 4
	          },
	          end: {
	            line: 370,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 368,
	            column: 4
	          },
	          end: {
	            line: 370,
	            column: 5
	          }
	        }],
	        line: 368
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 382,
	            column: 4
	          },
	          end: {
	            line: 384,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 382,
	            column: 4
	          },
	          end: {
	            line: 384,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 382,
	            column: 4
	          },
	          end: {
	            line: 384,
	            column: 5
	          }
	        }],
	        line: 382
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 386,
	            column: 4
	          },
	          end: {
	            line: 388,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 386,
	            column: 4
	          },
	          end: {
	            line: 388,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 386,
	            column: 4
	          },
	          end: {
	            line: 388,
	            column: 5
	          }
	        }],
	        line: 386
	      },
	      '34': {
	        loc: {
	          start: {
	            line: 400,
	            column: 4
	          },
	          end: {
	            line: 402,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 400,
	            column: 4
	          },
	          end: {
	            line: 402,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 400,
	            column: 4
	          },
	          end: {
	            line: 402,
	            column: 5
	          }
	        }],
	        line: 400
	      },
	      '35': {
	        loc: {
	          start: {
	            line: 406,
	            column: 4
	          },
	          end: {
	            line: 408,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 406,
	            column: 4
	          },
	          end: {
	            line: 408,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 406,
	            column: 4
	          },
	          end: {
	            line: 408,
	            column: 5
	          }
	        }],
	        line: 406
	      },
	      '36': {
	        loc: {
	          start: {
	            line: 418,
	            column: 4
	          },
	          end: {
	            line: 420,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 418,
	            column: 4
	          },
	          end: {
	            line: 420,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 418,
	            column: 4
	          },
	          end: {
	            line: 420,
	            column: 5
	          }
	        }],
	        line: 418
	      },
	      '37': {
	        loc: {
	          start: {
	            line: 424,
	            column: 4
	          },
	          end: {
	            line: 426,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 424,
	            column: 4
	          },
	          end: {
	            line: 426,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 424,
	            column: 4
	          },
	          end: {
	            line: 426,
	            column: 5
	          }
	        }],
	        line: 424
	      },
	      '38': {
	        loc: {
	          start: {
	            line: 450,
	            column: 4
	          },
	          end: {
	            line: 452,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 450,
	            column: 4
	          },
	          end: {
	            line: 452,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 450,
	            column: 4
	          },
	          end: {
	            line: 452,
	            column: 5
	          }
	        }],
	        line: 450
	      },
	      '39': {
	        loc: {
	          start: {
	            line: 454,
	            column: 4
	          },
	          end: {
	            line: 457,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 454,
	            column: 4
	          },
	          end: {
	            line: 457,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 454,
	            column: 4
	          },
	          end: {
	            line: 457,
	            column: 5
	          }
	        }],
	        line: 454
	      },
	      '40': {
	        loc: {
	          start: {
	            line: 475,
	            column: 4
	          },
	          end: {
	            line: 477,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 475,
	            column: 4
	          },
	          end: {
	            line: 477,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 475,
	            column: 4
	          },
	          end: {
	            line: 477,
	            column: 5
	          }
	        }],
	        line: 475
	      },
	      '41': {
	        loc: {
	          start: {
	            line: 482,
	            column: 4
	          },
	          end: {
	            line: 484,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 482,
	            column: 4
	          },
	          end: {
	            line: 484,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 482,
	            column: 4
	          },
	          end: {
	            line: 484,
	            column: 5
	          }
	        }],
	        line: 482
	      },
	      '42': {
	        loc: {
	          start: {
	            line: 504,
	            column: 4
	          },
	          end: {
	            line: 506,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 504,
	            column: 4
	          },
	          end: {
	            line: 506,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 504,
	            column: 4
	          },
	          end: {
	            line: 506,
	            column: 5
	          }
	        }],
	        line: 504
	      },
	      '43': {
	        loc: {
	          start: {
	            line: 511,
	            column: 4
	          },
	          end: {
	            line: 513,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 511,
	            column: 4
	          },
	          end: {
	            line: 513,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 511,
	            column: 4
	          },
	          end: {
	            line: 513,
	            column: 5
	          }
	        }],
	        line: 511
	      },
	      '44': {
	        loc: {
	          start: {
	            line: 542,
	            column: 22
	          },
	          end: {
	            line: 542,
	            column: 33
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 542,
	            column: 31
	          },
	          end: {
	            line: 542,
	            column: 33
	          }
	        }],
	        line: 542
	      },
	      '45': {
	        loc: {
	          start: {
	            line: 548,
	            column: 4
	          },
	          end: {
	            line: 551,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 548,
	            column: 4
	          },
	          end: {
	            line: 551,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 548,
	            column: 4
	          },
	          end: {
	            line: 551,
	            column: 5
	          }
	        }],
	        line: 548
	      },
	      '46': {
	        loc: {
	          start: {
	            line: 554,
	            column: 4
	          },
	          end: {
	            line: 556,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 554,
	            column: 4
	          },
	          end: {
	            line: 556,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 554,
	            column: 4
	          },
	          end: {
	            line: 556,
	            column: 5
	          }
	        }],
	        line: 554
	      },
	      '47': {
	        loc: {
	          start: {
	            line: 562,
	            column: 4
	          },
	          end: {
	            line: 564,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 562,
	            column: 4
	          },
	          end: {
	            line: 564,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 562,
	            column: 4
	          },
	          end: {
	            line: 564,
	            column: 5
	          }
	        }],
	        line: 562
	      },
	      '48': {
	        loc: {
	          start: {
	            line: 567,
	            column: 4
	          },
	          end: {
	            line: 569,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 567,
	            column: 4
	          },
	          end: {
	            line: 569,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 567,
	            column: 4
	          },
	          end: {
	            line: 569,
	            column: 5
	          }
	        }],
	        line: 567
	      },
	      '49': {
	        loc: {
	          start: {
	            line: 581,
	            column: 2
	          },
	          end: {
	            line: 587,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 581,
	            column: 2
	          },
	          end: {
	            line: 587,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 581,
	            column: 2
	          },
	          end: {
	            line: 587,
	            column: 3
	          }
	        }],
	        line: 581
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0,
	      '47': 0,
	      '48': 0,
	      '49': 0,
	      '50': 0,
	      '51': 0,
	      '52': 0,
	      '53': 0,
	      '54': 0,
	      '55': 0,
	      '56': 0,
	      '57': 0,
	      '58': 0,
	      '59': 0,
	      '60': 0,
	      '61': 0,
	      '62': 0,
	      '63': 0,
	      '64': 0,
	      '65': 0,
	      '66': 0,
	      '67': 0,
	      '68': 0,
	      '69': 0,
	      '70': 0,
	      '71': 0,
	      '72': 0,
	      '73': 0,
	      '74': 0,
	      '75': 0,
	      '76': 0,
	      '77': 0,
	      '78': 0,
	      '79': 0,
	      '80': 0,
	      '81': 0,
	      '82': 0,
	      '83': 0,
	      '84': 0,
	      '85': 0,
	      '86': 0,
	      '87': 0,
	      '88': 0,
	      '89': 0,
	      '90': 0,
	      '91': 0,
	      '92': 0,
	      '93': 0,
	      '94': 0,
	      '95': 0,
	      '96': 0,
	      '97': 0,
	      '98': 0,
	      '99': 0,
	      '100': 0,
	      '101': 0,
	      '102': 0,
	      '103': 0,
	      '104': 0,
	      '105': 0,
	      '106': 0,
	      '107': 0,
	      '108': 0,
	      '109': 0,
	      '110': 0,
	      '111': 0,
	      '112': 0,
	      '113': 0,
	      '114': 0,
	      '115': 0,
	      '116': 0,
	      '117': 0,
	      '118': 0,
	      '119': 0,
	      '120': 0,
	      '121': 0,
	      '122': 0,
	      '123': 0,
	      '124': 0,
	      '125': 0,
	      '126': 0,
	      '127': 0,
	      '128': 0,
	      '129': 0,
	      '130': 0,
	      '131': 0,
	      '132': 0,
	      '133': 0,
	      '134': 0,
	      '135': 0,
	      '136': 0,
	      '137': 0,
	      '138': 0,
	      '139': 0,
	      '140': 0,
	      '141': 0,
	      '142': 0,
	      '143': 0,
	      '144': 0,
	      '145': 0,
	      '146': 0,
	      '147': 0,
	      '148': 0,
	      '149': 0,
	      '150': 0,
	      '151': 0,
	      '152': 0,
	      '153': 0,
	      '154': 0,
	      '155': 0,
	      '156': 0,
	      '157': 0,
	      '158': 0,
	      '159': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0],
	      '8': [0],
	      '9': [0, 0],
	      '10': [0, 0],
	      '11': [0, 0],
	      '12': [0, 0],
	      '13': [0, 0],
	      '14': [0, 0],
	      '15': [0, 0],
	      '16': [0, 0],
	      '17': [0, 0],
	      '18': [0, 0, 0, 0],
	      '19': [0, 0],
	      '20': [0, 0],
	      '21': [0, 0],
	      '22': [0, 0],
	      '23': [0, 0],
	      '24': [0, 0],
	      '25': [0, 0],
	      '26': [0, 0],
	      '27': [0, 0],
	      '28': [0, 0],
	      '29': [0, 0],
	      '30': [0, 0],
	      '31': [0, 0],
	      '32': [0, 0],
	      '33': [0, 0],
	      '34': [0, 0],
	      '35': [0, 0],
	      '36': [0, 0],
	      '37': [0, 0],
	      '38': [0, 0],
	      '39': [0, 0],
	      '40': [0, 0],
	      '41': [0, 0],
	      '42': [0, 0],
	      '43': [0, 0],
	      '44': [0],
	      '45': [0, 0],
	      '46': [0, 0],
	      '47': [0, 0],
	      '48': [0, 0],
	      '49': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	cov_ritqk1zyq.s[0]++;

	var sourceEquals = function sourceEquals(source1, source2) {
	  cov_ritqk1zyq.f[0]++;
	  var src1 = (cov_ritqk1zyq.s[1]++, source1);
	  var src2 = (cov_ritqk1zyq.s[2]++, source2);
	  cov_ritqk1zyq.s[3]++;

	  if (typeof source1 === 'object') {
	    cov_ritqk1zyq.b[0][0]++;
	    cov_ritqk1zyq.s[4]++;
	    src1 = source1.src;
	  } else {
	    cov_ritqk1zyq.b[0][1]++;
	  }

	  cov_ritqk1zyq.s[5]++;

	  if (typeof source2 === 'object') {
	    cov_ritqk1zyq.b[1][0]++;
	    cov_ritqk1zyq.s[6]++;
	    src2 = source2.src;
	  } else {
	    cov_ritqk1zyq.b[1][1]++;
	  }

	  cov_ritqk1zyq.s[7]++;

	  if (/^\/\//.test(src1)) {
	    cov_ritqk1zyq.b[2][0]++;
	    cov_ritqk1zyq.s[8]++;
	    src2 = src2.slice(src2.indexOf('//'));
	  } else {
	    cov_ritqk1zyq.b[2][1]++;
	  }

	  cov_ritqk1zyq.s[9]++;

	  if (/^\/\//.test(src2)) {
	    cov_ritqk1zyq.b[3][0]++;
	    cov_ritqk1zyq.s[10]++;
	    src1 = src1.slice(src1.indexOf('//'));
	  } else {
	    cov_ritqk1zyq.b[3][1]++;
	  }

	  cov_ritqk1zyq.s[11]++;
	  return src1 === src2;
	};

	cov_ritqk1zyq.s[12]++;

	var indexInSources = function indexInSources(arr, src) {
	  cov_ritqk1zyq.f[1]++;
	  cov_ritqk1zyq.s[13]++;

	  for (var i = 0; i < arr.length; i++) {
	    var sources = (cov_ritqk1zyq.s[14]++, arr[i].sources);
	    cov_ritqk1zyq.s[15]++;

	    if (Array.isArray(sources)) {
	      cov_ritqk1zyq.b[4][0]++;
	      cov_ritqk1zyq.s[16]++;

	      for (var j = 0; j < sources.length; j++) {
	        var source = (cov_ritqk1zyq.s[17]++, sources[j]);
	        cov_ritqk1zyq.s[18]++;

	        if ((cov_ritqk1zyq.b[6][0]++, source) && (cov_ritqk1zyq.b[6][1]++, sourceEquals(source, src))) {
	          cov_ritqk1zyq.b[5][0]++;
	          cov_ritqk1zyq.s[19]++;
	          return i;
	        } else {
	          cov_ritqk1zyq.b[5][1]++;
	        }
	      }
	    } else {
	      cov_ritqk1zyq.b[4][1]++;
	    }
	  }

	  cov_ritqk1zyq.s[20]++;
	  return -1;
	};

	cov_ritqk1zyq.s[21]++;

	var randomize = function randomize(arr) {
	  cov_ritqk1zyq.f[2]++;
	  var index = (cov_ritqk1zyq.s[22]++, -1);
	  var lastIndex = (cov_ritqk1zyq.s[23]++, arr.length - 1);
	  cov_ritqk1zyq.s[24]++;

	  while (++index < arr.length) {
	    var rand = (cov_ritqk1zyq.s[25]++, index + Math.floor(Math.random() * (lastIndex - index + 1)));
	    var value = (cov_ritqk1zyq.s[26]++, arr[rand]);
	    cov_ritqk1zyq.s[27]++;
	    arr[rand] = arr[index];
	    cov_ritqk1zyq.s[28]++;
	    arr[index] = value;
	  }

	  cov_ritqk1zyq.s[29]++;
	  return arr;
	};

	function factory(player, initialList, initialIndex) {
	  if (initialIndex === void 0) {
	    initialIndex = (cov_ritqk1zyq.b[7][0]++, 0);
	  }

	  cov_ritqk1zyq.f[3]++;
	  var list = (cov_ritqk1zyq.s[30]++, null);
	  var changing = (cov_ritqk1zyq.s[31]++, false);
	  var playlist = (cov_ritqk1zyq.s[32]++, player.playlist = function (newList, newIndex) {
	    if (newIndex === void 0) {
	      newIndex = (cov_ritqk1zyq.b[8][0]++, 0);
	    }

	    cov_ritqk1zyq.f[4]++;
	    cov_ritqk1zyq.s[33]++;

	    if (changing) {
	      cov_ritqk1zyq.b[9][0]++;
	      cov_ritqk1zyq.s[34]++;
	      throw new Error('do not call playlist() during a playlist change');
	    } else {
	      cov_ritqk1zyq.b[9][1]++;
	    }

	    cov_ritqk1zyq.s[35]++;

	    if (Array.isArray(newList)) {
	      cov_ritqk1zyq.b[10][0]++;
	      var previousPlaylist = (cov_ritqk1zyq.s[36]++, Array.isArray(list) ? (cov_ritqk1zyq.b[11][0]++, list.slice()) : (cov_ritqk1zyq.b[11][1]++, null));
	      cov_ritqk1zyq.s[37]++;
	      list = newList.slice();
	      cov_ritqk1zyq.s[38]++;
	      changing = true;
	      cov_ritqk1zyq.s[39]++;
	      player.trigger({
	        type: 'duringplaylistchange',
	        nextIndex: newIndex,
	        nextPlaylist: list,
	        previousIndex: playlist.currentIndex_,
	        previousPlaylist: (cov_ritqk1zyq.b[12][0]++, previousPlaylist) || (cov_ritqk1zyq.b[12][1]++, [])
	      });
	      cov_ritqk1zyq.s[40]++;
	      changing = false;
	      cov_ritqk1zyq.s[41]++;

	      if (newIndex !== -1) {
	        cov_ritqk1zyq.b[13][0]++;
	        cov_ritqk1zyq.s[42]++;
	        playlist.currentItem(newIndex);
	      } else {
	        cov_ritqk1zyq.b[13][1]++;
	      }

	      cov_ritqk1zyq.s[43]++;

	      if (previousPlaylist) {
	        cov_ritqk1zyq.b[14][0]++;
	        cov_ritqk1zyq.s[44]++;
	        player.setTimeout(function () {
	          cov_ritqk1zyq.f[5]++;
	          cov_ritqk1zyq.s[45]++;
	          player.trigger('playlistchange');
	        }, 0);
	      } else {
	        cov_ritqk1zyq.b[14][1]++;
	      }
	    } else {
	      cov_ritqk1zyq.b[10][1]++;
	    }

	    cov_ritqk1zyq.s[46]++;
	    return list.slice();
	  });
	  cov_ritqk1zyq.s[47]++;
	  player.on('loadstart', function () {
	    cov_ritqk1zyq.f[6]++;
	    cov_ritqk1zyq.s[48]++;

	    if (playlist.currentItem() === -1) {
	      cov_ritqk1zyq.b[15][0]++;
	      cov_ritqk1zyq.s[49]++;
	      reset(player);
	    } else {
	      cov_ritqk1zyq.b[15][1]++;
	    }
	  });
	  cov_ritqk1zyq.s[50]++;
	  playlist.currentIndex_ = -1;
	  cov_ritqk1zyq.s[51]++;
	  playlist.player_ = player;
	  cov_ritqk1zyq.s[52]++;
	  playlist.autoadvance_ = {};
	  cov_ritqk1zyq.s[53]++;
	  playlist.repeat_ = false;
	  cov_ritqk1zyq.s[54]++;

	  playlist.currentItem = function (index) {
	    cov_ritqk1zyq.f[7]++;
	    cov_ritqk1zyq.s[55]++;

	    if (changing) {
	      cov_ritqk1zyq.b[16][0]++;
	      cov_ritqk1zyq.s[56]++;
	      return playlist.currentIndex_;
	    } else {
	      cov_ritqk1zyq.b[16][1]++;
	    }

	    cov_ritqk1zyq.s[57]++;

	    if ((cov_ritqk1zyq.b[18][0]++, typeof index === 'number') && (cov_ritqk1zyq.b[18][1]++, playlist.currentIndex_ !== index) && (cov_ritqk1zyq.b[18][2]++, index >= 0) && (cov_ritqk1zyq.b[18][3]++, index < list.length)) {
	      cov_ritqk1zyq.b[17][0]++;
	      cov_ritqk1zyq.s[58]++;
	      playlist.currentIndex_ = index;
	      cov_ritqk1zyq.s[59]++;
	      playItem(playlist.player_, list[playlist.currentIndex_]);
	    } else {
	      cov_ritqk1zyq.b[17][1]++;
	      cov_ritqk1zyq.s[60]++;
	      playlist.currentIndex_ = playlist.indexOf((cov_ritqk1zyq.b[19][0]++, playlist.player_.currentSrc()) || (cov_ritqk1zyq.b[19][1]++, ''));
	    }

	    cov_ritqk1zyq.s[61]++;
	    return playlist.currentIndex_;
	  };

	  cov_ritqk1zyq.s[62]++;

	  playlist.contains = function (value) {
	    cov_ritqk1zyq.f[8]++;
	    cov_ritqk1zyq.s[63]++;
	    return playlist.indexOf(value) !== -1;
	  };

	  cov_ritqk1zyq.s[64]++;

	  playlist.indexOf = function (value) {
	    cov_ritqk1zyq.f[9]++;
	    cov_ritqk1zyq.s[65]++;

	    if (typeof value === 'string') {
	      cov_ritqk1zyq.b[20][0]++;
	      cov_ritqk1zyq.s[66]++;
	      return indexInSources(list, value);
	    } else {
	      cov_ritqk1zyq.b[20][1]++;
	    }

	    var sources = (cov_ritqk1zyq.s[67]++, Array.isArray(value) ? (cov_ritqk1zyq.b[21][0]++, value) : (cov_ritqk1zyq.b[21][1]++, value.sources));
	    cov_ritqk1zyq.s[68]++;

	    for (var i = 0; i < sources.length; i++) {
	      var source = (cov_ritqk1zyq.s[69]++, sources[i]);
	      cov_ritqk1zyq.s[70]++;

	      if (typeof source === 'string') {
	        cov_ritqk1zyq.b[22][0]++;
	        cov_ritqk1zyq.s[71]++;
	        return indexInSources(list, source);
	      } else {
	        cov_ritqk1zyq.b[22][1]++;
	        cov_ritqk1zyq.s[72]++;

	        if (source.src) {
	          cov_ritqk1zyq.b[23][0]++;
	          cov_ritqk1zyq.s[73]++;
	          return indexInSources(list, source.src);
	        } else {
	          cov_ritqk1zyq.b[23][1]++;
	        }
	      }
	    }

	    cov_ritqk1zyq.s[74]++;
	    return -1;
	  };

	  cov_ritqk1zyq.s[75]++;

	  playlist.currentIndex = function () {
	    cov_ritqk1zyq.f[10]++;
	    cov_ritqk1zyq.s[76]++;
	    return playlist.currentItem();
	  };

	  cov_ritqk1zyq.s[77]++;

	  playlist.lastIndex = function () {
	    cov_ritqk1zyq.f[11]++;
	    cov_ritqk1zyq.s[78]++;
	    return list.length - 1;
	  };

	  cov_ritqk1zyq.s[79]++;

	  playlist.nextIndex = function () {
	    cov_ritqk1zyq.f[12]++;
	    var current = (cov_ritqk1zyq.s[80]++, playlist.currentItem());
	    cov_ritqk1zyq.s[81]++;

	    if (current === -1) {
	      cov_ritqk1zyq.b[24][0]++;
	      cov_ritqk1zyq.s[82]++;
	      return -1;
	    } else {
	      cov_ritqk1zyq.b[24][1]++;
	    }

	    var lastIndex = (cov_ritqk1zyq.s[83]++, playlist.lastIndex());
	    cov_ritqk1zyq.s[84]++;

	    if ((cov_ritqk1zyq.b[26][0]++, playlist.repeat_) && (cov_ritqk1zyq.b[26][1]++, current === lastIndex)) {
	      cov_ritqk1zyq.b[25][0]++;
	      cov_ritqk1zyq.s[85]++;
	      return 0;
	    } else {
	      cov_ritqk1zyq.b[25][1]++;
	    }

	    cov_ritqk1zyq.s[86]++;
	    return Math.min(current + 1, lastIndex);
	  };

	  cov_ritqk1zyq.s[87]++;

	  playlist.previousIndex = function () {
	    cov_ritqk1zyq.f[13]++;
	    var current = (cov_ritqk1zyq.s[88]++, playlist.currentItem());
	    cov_ritqk1zyq.s[89]++;

	    if (current === -1) {
	      cov_ritqk1zyq.b[27][0]++;
	      cov_ritqk1zyq.s[90]++;
	      return -1;
	    } else {
	      cov_ritqk1zyq.b[27][1]++;
	    }

	    cov_ritqk1zyq.s[91]++;

	    if ((cov_ritqk1zyq.b[29][0]++, playlist.repeat_) && (cov_ritqk1zyq.b[29][1]++, current === 0)) {
	      cov_ritqk1zyq.b[28][0]++;
	      cov_ritqk1zyq.s[92]++;
	      return playlist.lastIndex();
	    } else {
	      cov_ritqk1zyq.b[28][1]++;
	    }

	    cov_ritqk1zyq.s[93]++;
	    return Math.max(current - 1, 0);
	  };

	  cov_ritqk1zyq.s[94]++;

	  playlist.first = function () {
	    cov_ritqk1zyq.f[14]++;
	    cov_ritqk1zyq.s[95]++;

	    if (changing) {
	      cov_ritqk1zyq.b[30][0]++;
	      cov_ritqk1zyq.s[96]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[30][1]++;
	    }

	    cov_ritqk1zyq.s[97]++;

	    if (list.length) {
	      cov_ritqk1zyq.b[31][0]++;
	      cov_ritqk1zyq.s[98]++;
	      return list[playlist.currentItem(0)];
	    } else {
	      cov_ritqk1zyq.b[31][1]++;
	    }

	    cov_ritqk1zyq.s[99]++;
	    playlist.currentIndex_ = -1;
	  };

	  cov_ritqk1zyq.s[100]++;

	  playlist.last = function () {
	    cov_ritqk1zyq.f[15]++;
	    cov_ritqk1zyq.s[101]++;

	    if (changing) {
	      cov_ritqk1zyq.b[32][0]++;
	      cov_ritqk1zyq.s[102]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[32][1]++;
	    }

	    cov_ritqk1zyq.s[103]++;

	    if (list.length) {
	      cov_ritqk1zyq.b[33][0]++;
	      cov_ritqk1zyq.s[104]++;
	      return list[playlist.currentItem(playlist.lastIndex())];
	    } else {
	      cov_ritqk1zyq.b[33][1]++;
	    }

	    cov_ritqk1zyq.s[105]++;
	    playlist.currentIndex_ = -1;
	  };

	  cov_ritqk1zyq.s[106]++;

	  playlist.next = function () {
	    cov_ritqk1zyq.f[16]++;
	    cov_ritqk1zyq.s[107]++;

	    if (changing) {
	      cov_ritqk1zyq.b[34][0]++;
	      cov_ritqk1zyq.s[108]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[34][1]++;
	    }

	    var index = (cov_ritqk1zyq.s[109]++, playlist.nextIndex());
	    cov_ritqk1zyq.s[110]++;

	    if (index !== playlist.currentIndex_) {
	      cov_ritqk1zyq.b[35][0]++;
	      cov_ritqk1zyq.s[111]++;
	      return list[playlist.currentItem(index)];
	    } else {
	      cov_ritqk1zyq.b[35][1]++;
	    }
	  };

	  cov_ritqk1zyq.s[112]++;

	  playlist.previous = function () {
	    cov_ritqk1zyq.f[17]++;
	    cov_ritqk1zyq.s[113]++;

	    if (changing) {
	      cov_ritqk1zyq.b[36][0]++;
	      cov_ritqk1zyq.s[114]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[36][1]++;
	    }

	    var index = (cov_ritqk1zyq.s[115]++, playlist.previousIndex());
	    cov_ritqk1zyq.s[116]++;

	    if (index !== playlist.currentIndex_) {
	      cov_ritqk1zyq.b[37][0]++;
	      cov_ritqk1zyq.s[117]++;
	      return list[playlist.currentItem(index)];
	    } else {
	      cov_ritqk1zyq.b[37][1]++;
	    }
	  };

	  cov_ritqk1zyq.s[118]++;

	  playlist.autoadvance = function (delay) {
	    cov_ritqk1zyq.f[18]++;
	    cov_ritqk1zyq.s[119]++;
	    setup(playlist.player_, delay);
	  };

	  cov_ritqk1zyq.s[120]++;

	  playlist.repeat = function (val) {
	    cov_ritqk1zyq.f[19]++;
	    cov_ritqk1zyq.s[121]++;

	    if (val === undefined) {
	      cov_ritqk1zyq.b[38][0]++;
	      cov_ritqk1zyq.s[122]++;
	      return playlist.repeat_;
	    } else {
	      cov_ritqk1zyq.b[38][1]++;
	    }

	    cov_ritqk1zyq.s[123]++;

	    if (typeof val !== 'boolean') {
	      cov_ritqk1zyq.b[39][0]++;
	      cov_ritqk1zyq.s[124]++;
	      videojs.log.error('videojs-playlist: Invalid value for repeat', val);
	      cov_ritqk1zyq.s[125]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[39][1]++;
	    }

	    cov_ritqk1zyq.s[126]++;
	    playlist.repeat_ = !!val;
	    cov_ritqk1zyq.s[127]++;
	    return playlist.repeat_;
	  };

	  cov_ritqk1zyq.s[128]++;

	  playlist.sort = function (compare) {
	    cov_ritqk1zyq.f[20]++;
	    cov_ritqk1zyq.s[129]++;

	    if (!list.length) {
	      cov_ritqk1zyq.b[40][0]++;
	      cov_ritqk1zyq.s[130]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[40][1]++;
	    }

	    cov_ritqk1zyq.s[131]++;
	    list.sort(compare);
	    cov_ritqk1zyq.s[132]++;

	    if (changing) {
	      cov_ritqk1zyq.b[41][0]++;
	      cov_ritqk1zyq.s[133]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[41][1]++;
	    }

	    cov_ritqk1zyq.s[134]++;
	    player.trigger('playlistsorted');
	  };

	  cov_ritqk1zyq.s[135]++;

	  playlist.reverse = function () {
	    cov_ritqk1zyq.f[21]++;
	    cov_ritqk1zyq.s[136]++;

	    if (!list.length) {
	      cov_ritqk1zyq.b[42][0]++;
	      cov_ritqk1zyq.s[137]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[42][1]++;
	    }

	    cov_ritqk1zyq.s[138]++;
	    list.reverse();
	    cov_ritqk1zyq.s[139]++;

	    if (changing) {
	      cov_ritqk1zyq.b[43][0]++;
	      cov_ritqk1zyq.s[140]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[43][1]++;
	    }

	    cov_ritqk1zyq.s[141]++;
	    player.trigger('playlistsorted');
	  };

	  cov_ritqk1zyq.s[142]++;

	  playlist.shuffle = function (_temp) {
	    var _ref = _temp === void 0 ? (cov_ritqk1zyq.b[44][0]++, {}) : _temp,
	        rest = _ref.rest;

	    cov_ritqk1zyq.f[22]++;
	    var index = (cov_ritqk1zyq.s[143]++, 0);
	    var arr = (cov_ritqk1zyq.s[144]++, list);
	    cov_ritqk1zyq.s[145]++;

	    if (rest) {
	      cov_ritqk1zyq.b[45][0]++;
	      cov_ritqk1zyq.s[146]++;
	      index = playlist.currentIndex_ + 1;
	      cov_ritqk1zyq.s[147]++;
	      arr = list.slice(index);
	    } else {
	      cov_ritqk1zyq.b[45][1]++;
	    }

	    cov_ritqk1zyq.s[148]++;

	    if (arr.length <= 1) {
	      cov_ritqk1zyq.b[46][0]++;
	      cov_ritqk1zyq.s[149]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[46][1]++;
	    }

	    cov_ritqk1zyq.s[150]++;
	    randomize(arr);
	    cov_ritqk1zyq.s[151]++;

	    if (rest) {
	      var _list;

	      cov_ritqk1zyq.b[47][0]++;
	      cov_ritqk1zyq.s[152]++;

	      (_list = list).splice.apply(_list, [index, arr.length].concat(arr));
	    } else {
	      cov_ritqk1zyq.b[47][1]++;
	    }

	    cov_ritqk1zyq.s[153]++;

	    if (changing) {
	      cov_ritqk1zyq.b[48][0]++;
	      cov_ritqk1zyq.s[154]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[48][1]++;
	    }

	    cov_ritqk1zyq.s[155]++;
	    player.trigger('playlistsorted');
	  };

	  cov_ritqk1zyq.s[156]++;

	  if (Array.isArray(initialList)) {
	    cov_ritqk1zyq.b[49][0]++;
	    cov_ritqk1zyq.s[157]++;
	    playlist(initialList.slice(), initialIndex);
	  } else {
	    cov_ritqk1zyq.b[49][1]++;
	    cov_ritqk1zyq.s[158]++;
	    list = [];
	  }

	  cov_ritqk1zyq.s[159]++;
	  return playlist;
	}

	var videoList = [{
	  sources: [{
	    src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	}, {
	  sources: [{
	    src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
	}, {
	  sources: [{
	    src: 'http://vjs.zencdn.net/v/oceans.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://www.videojs.com/img/poster.jpg'
	}, {
	  sources: [{
	    src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
	}, {
	  sources: [{
	    src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/video/poster.png'
	}];
	QUnit.module('playlist-maker', {
	  beforeEach: function beforeEach() {
	    this.clock = sinon.useFakeTimers();
	  },
	  afterEach: function afterEach() {
	    this.clock.restore();
	  }
	});
	QUnit.test('playlistMaker takes a player and a list and returns a playlist', function (assert) {
	  var playlist = factory(proxy(), []);
	  assert.equal(typeof playlist, 'function', 'playlist is a function');
	  assert.equal(typeof playlist.autoadvance, 'function', 'we have a autoadvance function');
	  assert.equal(typeof playlist.currentItem, 'function', 'we have a currentItem function');
	  assert.equal(typeof playlist.first, 'function', 'we have a first function');
	  assert.equal(typeof playlist.indexOf, 'function', 'we have a indexOf function');
	  assert.equal(typeof playlist.next, 'function', 'we have a next function');
	  assert.equal(typeof playlist.previous, 'function', 'we have a previous function');
	});
	QUnit.test('playlistMaker can either take nothing or an Array as its first argument', function (assert) {
	  var playlist1 = factory(proxy());
	  var playlist2 = factory(proxy(), 'foo');
	  var playlist3 = factory(proxy(), {
	    foo: [1, 2, 3]
	  });
	  assert.deepEqual(playlist1(), [], 'if given no initial array, default to an empty array');
	  assert.deepEqual(playlist2(), [], 'if given no initial array, default to an empty array');
	  assert.deepEqual(playlist3(), [], 'if given no initial array, default to an empty array');
	});
	QUnit.test('playlist() is a getter and setter for the list', function (assert) {
	  var playlist = factory(proxy(), [1, 2, 3]);
	  assert.deepEqual(playlist(), [1, 2, 3], 'equal to input list');
	  assert.deepEqual(playlist([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], 'equal to input list, arguments ignored');
	  assert.deepEqual(playlist(), [1, 2, 3, 4, 5], 'equal to input list');
	  var list = playlist();
	  list.unshift(10);
	  assert.deepEqual(playlist(), [1, 2, 3, 4, 5], 'changing the list did not affect the playlist');
	  assert.notDeepEqual(playlist(), [10, 1, 2, 3, 4, 5], 'changing the list did not affect the playlist');
	});
	QUnit.test('playlist() should only accept an Array as a new playlist', function (assert) {
	  var playlist = factory(proxy(), [1, 2, 3]);
	  assert.deepEqual(playlist('foo'), [1, 2, 3], 'when given "foo", it should be treated as a getter');
	  assert.deepEqual(playlist({
	    foo: [1, 2, 3]
	  }), [1, 2, 3], 'when given {foo: [1,2,3]}, it should be treated as a getter');
	});
	QUnit.test('playlist.currentItem() works as expected', function (assert) {
	  var player = proxy();
	  var playlist = factory(player, videoList);
	  var src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'begin at the first item, item 0');
	  assert.equal(playlist.currentItem(2), 2, 'setting to item 2 gives us back the new item index');
	  assert.equal(playlist.currentItem(), 2, 'the current item is now 2');
	  assert.equal(playlist.currentItem(5), 2, 'cannot change to an out-of-bounds item');
	  assert.equal(playlist.currentItem(-1), 2, 'cannot change to an out-of-bounds item');
	  assert.equal(playlist.currentItem(null), 2, 'cannot change to an invalid item');
	  assert.equal(playlist.currentItem(NaN), 2, 'cannot change to an invalid item');
	  assert.equal(playlist.currentItem(Infinity), 2, 'cannot change to an invalid item');
	  assert.equal(playlist.currentItem(-Infinity), 2, 'cannot change to an invalid item');
	});
	QUnit.test('playlist.currentItem() returns -1 with an empty playlist', function (assert) {
	  var playlist = factory(proxy(), []);
	  assert.equal(playlist.currentItem(), -1, 'we should get a -1 with an empty playlist');
	});
	QUnit.test('playlist.currentItem() does not change items if same index is given', function (assert) {
	  var player = proxy();
	  var sources = 0;
	  var src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }

	    sources++;
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  var playlist = factory(player, videoList);
	  assert.equal(sources, 1, 'we switched to the first playlist item');
	  sources = 0;
	  assert.equal(playlist.currentItem(), 0, 'we start at index 0');
	  playlist.currentItem(0);
	  assert.equal(sources, 0, 'we did not try to set sources');
	  playlist.currentItem(1);
	  assert.equal(sources, 1, 'we did try to set sources');
	  playlist.currentItem(1);
	  assert.equal(sources, 1, 'we did not try to set sources');
	});
	QUnit.test('playlistMaker accepts a starting index', function (assert) {
	  var player = proxy();
	  var src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  var playlist = factory(player, videoList, 1);
	  assert.equal(playlist.currentItem(), 1, 'if given an initial index, load that video');
	});
	QUnit.test('playlistMaker accepts a starting index', function (assert) {
	  var player = proxy();
	  var src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  var playlist = factory(player, videoList, -1);
	  assert.equal(playlist.currentItem(), -1, 'if given -1 as initial index, load no video');
	});
	QUnit.test('playlist.contains() works as expected', function (assert) {
	  var player = proxy();
	  var playlist = factory(player, videoList);
	  player.playlist = playlist;
	  assert.ok(playlist.contains('http://media.w3.org/2010/05/sintel/trailer.mp4'), 'we can ask whether it contains a source string');
	  assert.ok(playlist.contains(['http://media.w3.org/2010/05/sintel/trailer.mp4']), 'we can ask whether it contains a sources list of strings');
	  assert.ok(playlist.contains([{
	    src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	    type: 'video/mp4'
	  }]), 'we can ask whether it contains a sources list of objects');
	  assert.ok(playlist.contains({
	    sources: ['http://media.w3.org/2010/05/sintel/trailer.mp4']
	  }), 'we can ask whether it contains a playlist item');
	  assert.ok(playlist.contains({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }]
	  }), 'we can ask whether it contains a playlist item');
	  assert.ok(!playlist.contains('http://media.w3.org/2010/05/sintel/poster.png'), 'we get false for a non-existent source string');
	  assert.ok(!playlist.contains(['http://media.w3.org/2010/05/sintel/poster.png']), 'we get false for a non-existent source list of strings');
	  assert.ok(!playlist.contains([{
	    src: 'http://media.w3.org/2010/05/sintel/poster.png',
	    type: 'video/mp4'
	  }]), 'we get false for a non-existent source list of objects');
	  assert.ok(!playlist.contains({
	    sources: ['http://media.w3.org/2010/05/sintel/poster.png']
	  }), 'we can ask whether it contains a playlist item');
	  assert.ok(!playlist.contains({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/poster.png',
	      type: 'video/mp4'
	    }]
	  }), 'we get false for a non-existent playlist item');
	});
	QUnit.test('playlist.indexOf() works as expected', function (assert) {
	  var player = proxy();
	  var playlist = factory(player, videoList);
	  var mixedSourcesPlaylist = factory(player, [{
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }, {
	      app_name: 'rtmp://example.com/sintel/trailer',
	      // eslint-disable-line
	      avg_bitrate: 4255000,
	      // eslint-disable-line
	      codec: 'H264',
	      container: 'MP4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }]);
	  player.playlist = playlist;
	  assert.equal(playlist.indexOf('http://media.w3.org/2010/05/sintel/trailer.mp4'), 0, 'sintel trailer is first item');
	  assert.equal(playlist.indexOf('//media.w3.org/2010/05/sintel/trailer.mp4'), 0, 'sintel trailer is first item, protocol-relative url considered equal');
	  assert.equal(playlist.indexOf(['http://media.w3.org/2010/05/bunny/trailer.mp4']), 1, 'bunny trailer is second item');
	  assert.equal(playlist.indexOf([{
	    src: 'http://vjs.zencdn.net/v/oceans.mp4',
	    type: 'video/mp4'
	  }]), 2, 'oceans is third item');
	  assert.equal(playlist.indexOf({
	    sources: ['http://media.w3.org/2010/05/bunny/movie.mp4']
	  }), 3, 'bunny movie is fourth item');
	  assert.equal(playlist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
	      type: 'video/mp4'
	    }]
	  }), 4, 'timer video is fifth item');
	  assert.equal(playlist.indexOf('http://media.w3.org/2010/05/sintel/poster.png'), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf(['http://media.w3.org/2010/05/sintel/poster.png']), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf([{
	    src: 'http://media.w3.org/2010/05/sintel/poster.png',
	    type: 'video/mp4'
	  }]), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf({
	    sources: ['http://media.w3.org/2010/05/sintel/poster.png']
	  }), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/poster.png',
	      type: 'video/mp4'
	    }]
	  }), -1, 'poster.png does not exist');
	  assert.equal(mixedSourcesPlaylist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
	      type: 'video/mp4'
	    }, {
	      app_name: 'rtmp://example.com/bunny/movie',
	      // eslint-disable-line
	      avg_bitrate: 4255000,
	      // eslint-disable-line
	      codec: 'H264',
	      container: 'MP4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }), -1, 'bunny movie does not exist');
	  assert.equal(mixedSourcesPlaylist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }, {
	      app_name: 'rtmp://example.com/sintel/trailer',
	      // eslint-disable-line
	      avg_bitrate: 4255000,
	      // eslint-disable-line
	      codec: 'H264',
	      container: 'MP4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }), 0, 'sintel trailer does exist');
	});
	QUnit.test('playlist.nextIndex() works as expected', function (assert) {
	  var playlist = factory(proxy(), []);
	  assert.equal(playlist.nextIndex(), -1, 'the next index was -1 for an empty list');
	  playlist([1, 2, 3]);

	  playlist.currentItem = function () {
	    return 0;
	  };

	  assert.equal(playlist.nextIndex(), 1, 'the next index was 1');

	  playlist.currentItem = function () {
	    return 1;
	  };

	  assert.equal(playlist.nextIndex(), 2, 'the next index was 2');

	  playlist.currentItem = function () {
	    return 2;
	  };

	  assert.equal(playlist.nextIndex(), 2, 'the next index did not change because the playlist does not repeat');
	  playlist.repeat(true);
	  assert.equal(playlist.nextIndex(), 0, 'the next index was now 0 because the playlist repeats');
	});
	QUnit.test('playlist.previousIndex() works as expected', function (assert) {
	  var playlist = factory(proxy(), []);
	  assert.equal(playlist.previousIndex(), -1, 'the previous index was -1 for an empty list');
	  playlist([1, 2, 3]);

	  playlist.currentItem = function () {
	    return 2;
	  };

	  assert.equal(playlist.previousIndex(), 1, 'the previous index was 1');

	  playlist.currentItem = function () {
	    return 1;
	  };

	  assert.equal(playlist.previousIndex(), 0, 'the previous index was 0');

	  playlist.currentItem = function () {
	    return 0;
	  };

	  assert.equal(playlist.previousIndex(), 0, 'the previous index did not change because the playlist does not repeat');
	  playlist.repeat(true);
	  assert.equal(playlist.previousIndex(), 2, 'the previous index was now 2 because the playlist repeats');
	});
	QUnit.test('playlist.lastIndex() works as expected', function (assert) {
	  var playlist = factory(proxy(), []);
	  assert.equal(playlist.lastIndex(), -1, 'the last index was -1 for an empty list');
	  playlist([1, 2, 3]);
	  assert.equal(playlist.lastIndex(), 2, 'the last index was 2');
	});
	QUnit.test('playlist.next() works as expected', function (assert) {
	  var player = proxy();
	  var playlist = factory(player, videoList);
	  var src;

	  player.currentSrc = function () {
	    return src;
	  };

	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'we start on item 0');
	  assert.deepEqual(playlist.next(), videoList[1], 'we get back the value of currentItem 2');
	  src = videoList[1].sources[0].src;
	  assert.equal(playlist.currentItem(), 1, 'we are now on item 1');
	  assert.deepEqual(playlist.next(), videoList[2], 'we get back the value of currentItem 3');
	  src = videoList[2].sources[0].src;
	  assert.equal(playlist.currentItem(), 2, 'we are now on item 2');
	  src = videoList[4].sources[0].src;
	  assert.equal(playlist.currentItem(4), 4, 'we are now on item 4');
	  assert.equal(typeof playlist.next(), 'undefined', 'we get nothing back if we try to go out of bounds');
	});
	QUnit.test('playlist.previous() works as expected', function (assert) {
	  var player = proxy();
	  var playlist = factory(player, videoList);
	  var src;

	  player.currentSrc = function () {
	    return src;
	  };

	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'we start on item 0');
	  assert.equal(typeof playlist.previous(), 'undefined', 'we get nothing back if we try to go out of bounds');
	  src = videoList[2].sources[0].src;
	  assert.equal(playlist.currentItem(), 2, 'we are on item 2');
	  assert.deepEqual(playlist.previous(), videoList[1], 'we get back value of currentItem 1');
	  src = videoList[1].sources[0].src;
	  assert.equal(playlist.currentItem(), 1, 'we are on item 1');
	  assert.deepEqual(playlist.previous(), videoList[0], 'we get back value of currentItem 0');
	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'we are on item 0');
	  assert.equal(typeof playlist.previous(), 'undefined', 'we get nothing back if we try to go out of bounds');
	});
	QUnit.test('loading a non-playlist video will cancel autoadvance and set index of -1', function (assert) {
	  var oldReset = reset;
	  var player = proxy();
	  var playlist = factory(player, [{
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }, {
	    sources: [{
	      src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
	      type: 'video/mp4'
	    }],
	    poster: 'http://media.w3.org/2010/05/bunny/poster.png'
	  }]);

	  player.currentSrc = function () {
	    return 'http://vjs.zencdn.net/v/oceans.mp4';
	  };

	  setReset_(function () {
	    assert.ok(true, 'autoadvance.reset was called');
	  });
	  player.trigger('loadstart');
	  assert.equal(playlist.currentItem(), -1, 'new currentItem is -1');

	  player.currentSrc = function () {
	    return 'http://media.w3.org/2010/05/sintel/trailer.mp4';
	  };

	  setReset_(function () {
	    assert.ok(false, 'autoadvance.reset should not be called');
	  });
	  player.trigger('loadstart');
	  setReset_(oldReset);
	});
	QUnit.test('when loading a new playlist, trigger "duringplaylistchange" on the player', function (assert) {
	  var done = assert.async();
	  var player = proxy();
	  var playlist = factory(player, [1, 2, 3], 1);
	  player.on('duringplaylistchange', function (e) {
	    assert.strictEqual(e.type, 'duringplaylistchange', 'the event object had the correct "type" property');
	    assert.strictEqual(e.previousIndex, 1, 'the event object had the correct "previousIndex" property');
	    assert.deepEqual(e.previousPlaylist, [1, 2, 3], 'the event object had the correct "previousPlaylist" property');
	    assert.strictEqual(e.nextIndex, 0, 'the event object had the correct "nextIndex" property');
	    assert.deepEqual(e.nextPlaylist, [4, 5, 6], 'the event object had the correct "nextPlaylist" property');
	    assert.throws(function () {
	      playlist([1, 2, 3]);
	    }, Error, 'cannot set a new playlist during a change');
	    var spy = sinon.spy();
	    player.on('playlistsorted', spy);
	    playlist.sort();
	    playlist.reverse();
	    playlist.shuffle();
	    assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event never fired');
	    playlist.currentItem(2);
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.next();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.previous();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.first();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.last();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    done();
	  });
	  playlist([4, 5, 6]);
	});
	QUnit.test('when loading a new playlist, trigger "playlistchange" on the player', function (assert) {
	  var spy = sinon.spy();
	  var player = proxy();
	  player.on('playlistchange', spy);
	  var playlist = factory(player, [1, 2, 3]);
	  playlist([4, 5, 6]);
	  this.clock.tick(1);
	  assert.strictEqual(spy.callCount, 1);
	  assert.strictEqual(spy.firstCall.args[0].type, 'playlistchange');
	});
	QUnit.test('"duringplaylistchange" and "playlistchange" on first call without an initial list', function (assert) {
	  var changeSpy = sinon.spy();
	  var duringSpy = sinon.spy();
	  var player = proxy();
	  player.on('playlistchange', changeSpy);
	  player.on('duringplaylistchange', duringSpy);
	  var playlist = factory(player);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 0, 'on initial call, the "playlistchange" event did not fire');
	  assert.strictEqual(duringSpy.callCount, 0, 'on initial call, the "duringplaylistchange" event did not fire');
	  playlist([1]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 1, 'on second call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 1, 'on second call, the "duringplaylistchange" event did fire');
	  playlist([2]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 2, 'on third call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 2, 'on third call, the "duringplaylistchange" event did fire');
	});
	QUnit.test('"duringplaylistchange" and "playlistchange" on first call with an initial list', function (assert) {
	  var changeSpy = sinon.spy();
	  var duringSpy = sinon.spy();
	  var player = proxy();
	  player.on('playlistchange', changeSpy);
	  player.on('duringplaylistchange', duringSpy);
	  var playlist = factory(player, [1]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 0, 'on initial call, the "playlistchange" event did not fire');
	  assert.strictEqual(duringSpy.callCount, 1, 'on initial call, the "duringplaylistchange" event did fire');
	  playlist([2]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 1, 'on second call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 2, 'on second call, the "duringplaylistchange" event did fire');
	  playlist([3]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 2, 'on third call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 3, 'on third call, the "duringplaylistchange" event did fire');
	});
	QUnit.test('playlist.sort() works as expected', function (assert) {
	  var player = proxy();
	  var spy = sinon.spy();
	  player.on('playlistsorted', spy);
	  var playlist = factory(player, []);
	  playlist.sort();
	  assert.deepEqual(playlist(), [], 'playlist did not change because it is empty');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event did not trigger');
	  playlist([4, 2, 1, 3]);
	  playlist.sort();
	  assert.deepEqual(playlist(), [1, 2, 3, 4], 'playlist is sorted per default sort behavior');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	  playlist.sort(function (a, b) {
	    return b - a;
	  });
	  assert.deepEqual(playlist(), [4, 3, 2, 1], 'playlist is sorted per default sort behavior');
	  assert.strictEqual(spy.callCount, 2, 'the "playlistsorted" event triggered');
	});
	QUnit.test('playlist.reverse() works as expected', function (assert) {
	  var player = proxy();
	  var spy = sinon.spy();
	  player.on('playlistsorted', spy);
	  var playlist = factory(player, []);
	  playlist.reverse();
	  assert.deepEqual(playlist(), [], 'playlist did not change because it is empty');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event did not trigger');
	  playlist([1, 2, 3, 4]);
	  playlist.reverse();
	  assert.deepEqual(playlist(), [4, 3, 2, 1], 'playlist is reversed');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	});
	QUnit.test('playlist.shuffle() works as expected', function (assert) {
	  var player = proxy();
	  var spy = sinon.spy();
	  player.on('playlistsorted', spy);
	  var playlist = factory(player, []);
	  playlist.shuffle();
	  assert.deepEqual(playlist(), [], 'playlist did not change because it is empty');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event did not trigger');
	  playlist([1, 2, 3, 4]);
	  playlist.shuffle();
	  var list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.notStrictEqual(list.indexOf(1), -1, '1 is in the list');
	  assert.notStrictEqual(list.indexOf(2), -1, '2 is in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	});
	QUnit.test('playlist.shuffle({rest: true}) works as expected', function (assert) {
	  var player = proxy();
	  var spy = sinon.spy();
	  player.on('playlistsorted', spy);
	  var playlist = factory(player, [1, 2, 3, 4]);
	  playlist.currentIndex_ = 3;
	  playlist.shuffle({
	    rest: true
	  });
	  var list = playlist();
	  assert.deepEqual(list, [1, 2, 3, 4], 'playlist is unchanged because the last item is selected');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event was not triggered');
	  playlist.currentIndex_ = 2;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.deepEqual(list, [1, 2, 3, 4], 'playlist is unchanged because the second-to-last item is selected');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event was not triggered');
	  playlist.currentIndex_ = 1;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.strictEqual(list.indexOf(1), 0, '1 is the first item in the list');
	  assert.strictEqual(list.indexOf(2), 1, '2 is the second item in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	  playlist.currentIndex_ = 0;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.strictEqual(list.indexOf(1), 0, '1 is the first item in the list');
	  assert.notStrictEqual(list.indexOf(2), -1, '2 is in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 2, 'the "playlistsorted" event triggered');
	  playlist.currentIndex_ = -1;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.notStrictEqual(list.indexOf(1), -1, '1 is in the list');
	  assert.notStrictEqual(list.indexOf(2), -1, '2 is in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 3, 'the "playlistsorted" event triggered');
	});

	var version = "4.2.6";

	var cov_27s3iole53 = function () {
	  var path = '/Users/poneill/dev/videojs-playlist/src/plugin.js',
	      hash = '8927a54cb3d4505b01072a1eef16603c710e4a25',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/poneill/dev/videojs-playlist/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 6,
	          column: 23
	        },
	        end: {
	          line: 6,
	          column: 63
	        }
	      },
	      '1': {
	        start: {
	          line: 18,
	          column: 15
	        },
	        end: {
	          line: 20,
	          column: 1
	        }
	      },
	      '2': {
	        start: {
	          line: 19,
	          column: 2
	        },
	        end: {
	          line: 19,
	          column: 34
	        }
	      },
	      '3': {
	        start: {
	          line: 22,
	          column: 0
	        },
	        end: {
	          line: 22,
	          column: 35
	        }
	      },
	      '4': {
	        start: {
	          line: 24,
	          column: 0
	        },
	        end: {
	          line: 24,
	          column: 25
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 18,
	            column: 15
	          },
	          end: {
	            line: 18,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 18,
	            column: 36
	          },
	          end: {
	            line: 20,
	            column: 1
	          }
	        },
	        line: 18
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 6,
	            column: 23
	          },
	          end: {
	            line: 6,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 6,
	            column: 23
	          },
	          end: {
	            line: 6,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 6,
	            column: 49
	          },
	          end: {
	            line: 6,
	            column: 63
	          }
	        }],
	        line: 6
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {
	      '0': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var registerPlugin = (cov_27s3iole53.s[0]++, (cov_27s3iole53.b[0][0]++, videojs.registerPlugin) || (cov_27s3iole53.b[0][1]++, videojs.plugin));
	cov_27s3iole53.s[1]++;

	var plugin = function plugin(list, item) {
	  cov_27s3iole53.f[0]++;
	  cov_27s3iole53.s[2]++;
	  factory(this, list, item);
	};

	cov_27s3iole53.s[3]++;
	registerPlugin('playlist', plugin);
	cov_27s3iole53.s[4]++;
	plugin.VERSION = version;

	QUnit.test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon, 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs, 'function', 'videojs exists');
	  assert.strictEqual(typeof plugin, 'function', 'plugin is a function');
	});
	QUnit.test('registers itself with video.js', function (assert) {
	  assert.expect(1);
	  assert.strictEqual(typeof videojs.getComponent('Player').prototype.playlist, 'function', 'videojs-playlist plugin was registered');
	});

}(videojs,QUnit,sinon));
