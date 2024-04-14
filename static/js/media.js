!function() {
    var e, t = {
        3683: function(e, t, n) {
            "use strict";
            var r = n(2541)
              , a = (n(2322),
            n(9268),
            n(9006),
            n(5090),
            n(5101),
            n(3080),
            n(2004),
            n(8407),
            n(6394),
            n(8288),
            n(5677),
            n(2129),
            n(4655),
            n(5466))
              , i = n(3613)
              , o = n(8578);
            function l() {
                return a.createElement("div", {
                    className: "player-container viewer-attachment-container"
                }, a.createElement("div", {
                    className: "player-container-inner"
                }, a.createElement("span", null, a.createElement("span", null, a.createElement("i", {
                    className: "material-icons"
                }, "insert_drive_file")))))
            }
            var s = n(3074)
              , u = n.n(s)
              , c = n(8009)
              , d = n.n(c)
              , m = n(473)
              , f = n(541)
              , p = n(9722);
            function y(e) {
                var t = null
                  , n = e.split(".");
                if (n.length)
                    switch (n = n[n.length - 1]) {
                    case "webm":
                        t = "audio/webm";
                        break;
                    case "flac":
                        t = "audio/flac";
                        break;
                    case "wave":
                        t = "audio/wave";
                        break;
                    case "wav":
                        t = "audio/wav";
                        break;
                    case "ogg":
                    case "ogg":
                        t = "audio/ogg";
                        break;
                    case "mp3":
                    case "mpeg":
                        t = "audio/mpeg"
                    }
                return t
            }
            var h = n(1283);
            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function b(e, t) {
                return (b = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function S(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? w(e) : t
            }
            function w(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function E(e) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var P = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && b(e, t)
                }(u, e);
                var t, n, r, l, s = (r = u,
                l = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = E(r);
                    if (l) {
                        var n = E(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return S(this, e)
                }
                );
                function u(e) {
                    var t;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, u),
                    t = s.call(this, e);
                    var n = o.MediaPageStore.get("media-data");
                    t.AudioPlayerData = {},
                    t.audioStartedPlaying = !1;
                    var r = (0,
                    m.formatInnerLink)(n.original_media_url, i.SiteContext._currentValue.url);
                    t.videoSources = [{
                        src: r,
                        type: y(r)
                    }],
                    t.videoPoster = n.poster_url,
                    t.videoPoster = t.videoPoster ? t.videoPoster : n.thumbnail_url,
                    t.videoPoster = t.videoPoster ? (0,
                    m.formatInnerLink)(t.videoPoster, i.SiteContext._currentValue.url) : "",
                    t.updatePlayerVolume = t.updatePlayerVolume.bind(w(t)),
                    t.onAudioEnd = t.onAudioEnd.bind(w(t)),
                    t.onAudioRestart = t.onAudioRestart.bind(w(t)),
                    o.PageStore.on("switched_media_auto_play", t.onUpdateMediaAutoPlay.bind(w(t))),
                    t.wrapperClick = t.wrapperClick.bind(w(t));
                    var a = new p.MediaDurationInfo;
                    return a.update(o.MediaPageStore.get("media-data").duration),
                    t.durationISO8601 = a.ISO8601(),
                    t
                }
                return t = u,
                (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.videoSources.length || h.warn("Audio DEBUG:", "Audio file doesn't exist"),
                        this.recommendedMedia = o.MediaPageStore.get("media-data").related_media.length ? new p.PlayerRecommendedMedia(o.MediaPageStore.get("media-data").related_media,this.refs.AudioElem.parentNode,this.props.inEmbed) : null,
                        this.upNextLoaderView = !this.props.inEmbed && o.MediaPageStore.get("media-data").related_media.length ? new p.UpNextLoaderView(o.MediaPageStore.get("media-data").related_media[0]) : null,
                        document.hasFocus() || "visible" === document.visibilityState ? this.initPlayerInstance() : (this.initPlayerInstance = this.initPlayerInstance.bind(this),
                        window.addEventListener("focus", this.initPlayerInstance),
                        document.addEventListener("visibilitychange", this.initPlayerInstance))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.recommendedMedia && (this.AudioPlayerData.instance.player.off("fullscreenchange", this.recommendedMedia.onResize),
                        o.PageStore.removeListener("window_resize", this.recommendedMedia.onResize),
                        o.VideoViewerStore.removeListener("changed_viewer_mode", this.recommendedMedia.onResize),
                        this.recommendedMedia.destroy()),
                        videojs(this.refs.AudioElem).dispose(),
                        this.AudioPlayerData.instance = null,
                        delete this.AudioPlayerData.instance
                    }
                }, {
                    key: "initPlayerInstance",
                    value: function() {
                        window.removeEventListener("focus", this.initPlayerInstance),
                        document.removeEventListener("visibilitychange", this.initPlayerInstance),
                        this.refs.AudioElem.focus(),
                        this.initPlayerInstance = null,
                        setTimeout(function() {
                            if (!this.AudioPlayerData.instance) {
                                var e = this.props.inEmbed ? document.createElement("a") : null
                                  , t = this.props.inEmbed ? document.createElement("a") : null;
                                e && (e.setAttribute("class", "title-link"),
                                e.setAttribute("href", o.MediaPageStore.get("media-data").url),
                                e.setAttribute("title", o.MediaPageStore.get("media-data").title),
                                e.setAttribute("target", "_blank"),
                                e.innerHTML = o.MediaPageStore.get("media-data").title),
                                t && (t.setAttribute("class", "user-thumb-link"),
                                t.setAttribute("href", o.MediaPageStore.get("media-data").author_profile),
                                t.setAttribute("title", o.MediaPageStore.get("media-data").author_name),
                                t.setAttribute("target", "_blank"),
                                t.innerHTML = '<img src="' + o.MediaPageStore.get("media-author-thumbnail-url") + '" alt="" />');
                                var n = null
                                  , r = null;
                                !this.props.inEmbed && o.MediaPageStore.get("playlist-id") ? (n = o.MediaPageStore.get("playlist-next-media-url"),
                                r = o.MediaPageStore.get("playlist-previous-media-url")) : n = o.MediaPageStore.get("media-data").related_media.length && !this.props.inEmbed ? o.MediaPageStore.get("media-data").related_media[0].url : null,
                                this.AudioPlayerData.instance = new (d())(this.refs.AudioElem,{
                                    sources: this.videoSources,
                                    poster: this.videoPoster,
                                    autoplay: !this.props.inEmbed,
                                    bigPlayButton: !0,
                                    controlBar: {
                                        fullscreen: !1,
                                        theaterMode: !1,
                                        next: !!n,
                                        previous: !!r
                                    },
                                    cornerLayers: {
                                        topLeft: e,
                                        topRight: this.upNextLoaderView ? this.upNextLoaderView.html() : null,
                                        bottomLeft: this.recommendedMedia ? this.recommendedMedia.html() : null,
                                        bottomRight: t
                                    }
                                },{
                                    volume: o.VideoViewerStore.get("player-volume"),
                                    soundMuted: o.VideoViewerStore.get("player-sound-muted")
                                },null,null,this.onAudioPlayerStateUpdate.bind(this),this.onClickNextButton.bind(this),this.onClickPreviousButton.bind(this)),
                                this.upNextLoaderView && (this.upNextLoaderView.setVideoJsPlayerElem(this.AudioPlayerData.instance.player.el_),
                                this.onUpdateMediaAutoPlay()),
                                this.refs.AudioElem.parentNode.focus(),
                                this.AudioPlayerData.instance.player.one("play", function() {
                                    this.audioStartedPlaying = !0
                                }
                                .bind(this)),
                                this.recommendedMedia && (this.recommendedMedia.initWrappers(this.AudioPlayerData.instance.player.el_),
                                this.AudioPlayerData.instance.player.one("pause", this.recommendedMedia.init),
                                this.AudioPlayerData.instance.player.on("fullscreenchange", this.recommendedMedia.onResize),
                                o.PageStore.on("window_resize", this.recommendedMedia.onResize),
                                o.VideoViewerStore.on("changed_viewer_mode", this.recommendedMedia.onResize)),
                                this.AudioPlayerData.instance.player.one("ended", this.onAudioEnd)
                            }
                        }
                        .bind(this), 50)
                    }
                }, {
                    key: "initialDocumentFocus",
                    value: function() {
                        this.refs.AudioElem.parentNode && (this.refs.AudioElem.parentNode.focus(),
                        setTimeout(function() {
                            this.AudioPlayerData.instance.player.play()
                        }
                        .bind(this), 50)),
                        window.removeEventListener("focus", this.initialDocumentFocus),
                        this.initialDocumentFocus = null
                    }
                }, {
                    key: "onClickNextButton",
                    value: function() {
                        var e;
                        o.MediaPageStore.get("playlist-id") ? null === (e = o.MediaPageStore.get("playlist-next-media-url")) && (e = o.MediaPageStore.get("media-data").related_media[0].url) : this.props.inEmbed || (e = o.MediaPageStore.get("media-data").related_media[0].url),
                        window.location.href = e
                    }
                }, {
                    key: "onClickPreviousButton",
                    value: function() {
                        var e;
                        o.MediaPageStore.get("playlist-id") ? null === (e = o.MediaPageStore.get("playlist-previous-media-url")) && (e = o.MediaPageStore.get("media-data").related_media[0].url) : this.props.inEmbed || (e = o.MediaPageStore.get("media-data").related_media[0].url),
                        window.location.href = e
                    }
                }, {
                    key: "onUpdateMediaAutoPlay",
                    value: function() {
                        this.upNextLoaderView && (o.PageStore.get("media-auto-play") ? this.upNextLoaderView.showTimerView(this.AudioPlayerData.instance.isEnded()) : this.upNextLoaderView.hideTimerView())
                    }
                }, {
                    key: "onAudioPlayerStateUpdate",
                    value: function(e) {
                        this.updatePlayerVolume(e.volume, e.soundMuted)
                    }
                }, {
                    key: "onAudioRestart",
                    value: function() {
                        this.recommendedMedia && (this.recommendedMedia.updateDisplayType("inline"),
                        this.AudioPlayerData.instance.player.one("pause", this.recommendedMedia.init),
                        this.AudioPlayerData.instance.player.one("ended", this.onAudioEnd))
                    }
                }, {
                    key: "onAudioEnd",
                    value: function() {
                        if (this.recommendedMedia && (this.recommendedMedia.updateDisplayType("full"),
                        this.AudioPlayerData.instance.player.one("playing", this.onAudioRestart)),
                        !this.props.inEmbed && o.MediaPageStore.get("playlist-id")) {
                            var e = document.querySelector(".video-player .more-media")
                              , t = document.querySelector(".video-player .vjs-actions-anim");
                            this.upNextLoaderView.cancelTimer();
                            var n = o.MediaPageStore.get("playlist-next-media-url");
                            return n && (e && (e.style.display = "none"),
                            t && (t.style.display = "none"),
                            window.location.href = n),
                            void this.upNextLoaderView.hideTimerView()
                        }
                        this.upNextLoaderView && (o.PageStore.get("media-auto-play") ? (this.upNextLoaderView.startTimer(),
                        this.AudioPlayerData.instance.player.one("play", function() {
                            this.upNextLoaderView.cancelTimer()
                        }
                        .bind(this))) : this.upNextLoaderView.cancelTimer())
                    }
                }, {
                    key: "updatePlayerVolume",
                    value: function(e, t) {
                        o.VideoViewerStore.get("player-volume") !== e && f.VideoViewerActions.set_player_volume(e),
                        o.VideoViewerStore.get("player-sound-muted") !== t && f.VideoViewerActions.set_player_sound_muted(t)
                    }
                }, {
                    key: "wrapperClick",
                    value: function(e) {
                        e.target.parentNode === this.refs.videoPlayerWrap && (this.AudioPlayerData.instance.player.ended() || (!this.AudioPlayerData.instance.player.hasStarted_ || this.AudioPlayerData.instance.player.paused() ? this.AudioPlayerData.instance.player.play() : this.AudioPlayerData.instance.player.pause()))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return a.createElement("div", {
                            className: "player-container audio-player-container"
                        }, a.createElement("div", {
                            className: "player-container-inner"
                        }, a.createElement("div", {
                            className: "video-player",
                            ref: "videoPlayerWrap",
                            onClick: this.wrapperClick
                        }, a.createElement("audio", {
                            tabIndex: "1",
                            ref: "AudioElem",
                            className: "video-js vjs-mediacms native-dimensions"
                        }))))
                    }
                }]) && v(t.prototype, n),
                u
            }(a.PureComponent);
            function k(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function _(e) {
                var t = (0,
                a.useContext)(i.SiteContext)
                  , n = m();
                n = (n = n || o.MediaPageStore.get("media-data").thumbnail_url) || "";
                var r, l, s = (r = (0,
                a.useState)(n),
                l = 2,
                function(e) {
                    if (Array.isArray(e))
                        return e
                }(r) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(r, l) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return k(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(e, t) : void 0
                    }
                }(r, l) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), u = s[0], c = s[1];
                function d() {
                    c(m())
                }
                function m() {
                    var e = o.MediaPageStore.get("media-data")
                      , n = "string" == typeof e.poster_url ? e.poster_url.trim() : "";
                    return "" === n && (n = "string" == typeof e.thumbnail_url ? e.thumbnail_url.trim() : ""),
                    "" === n && (n = "string" == typeof o.MediaPageStore.get("media-original-url") ? o.MediaPageStore.get("media-original-url").trim() : ""),
                    "" === n ? "#" : t.url + "/" + n.replace(/^\//g, "")
                }
                return (0,
                a.useEffect)((function() {
                    return o.MediaPageStore.on("loaded_image_data", d),
                    function() {
                        return o.MediaPageStore.removeListener("loaded_image_data", d)
                    }
                }
                ), []),
                u ? a.createElement("div", {
                    className: "viewer-image-container"
                }, a.createElement("img", {
                    src: u,
                    alt: o.MediaPageStore.get("media-data").title || null
                })) : null
            }
            function M() {
                return a.createElement("div", {
                    className: "player-container viewer-pdf-container"
                }, a.createElement("div", {
                    className: "player-container-inner"
                }, a.createElement("span", null, a.createElement("span", null, a.createElement("i", {
                    className: "material-icons"
                }, "insert_drive_file")))))
            }
            P.defaultProps = {
                inEmbed: !1
            },
            P.propTypes = {
                inEmbed: u().bool
            },
            n(3233),
            n(3296),
            n(288),
            n(4458),
            n(3675),
            n(9751);
            var A = n(9905)
              , C = n(8727)
              , N = n(1283);
            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function O(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function I(e, t) {
                return (I = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function T(e, t) {
                return !t || "object" !== x(t) && "function" != typeof t ? V(e) : t
            }
            function V(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function j(e) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var R = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && I(e, t)
                }(u, e);
                var t, n, r, l, s = (r = u,
                l = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = j(r);
                    if (l) {
                        var n = j(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return T(this, e)
                }
                );
                function u(e) {
                    var t;
                    if (function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, u),
                    (t = s.call(this, e)).state = {
                        displayPlayer: !1
                    },
                    t.videoSources = [],
                    function(e) {
                        switch (e) {
                        case "running":
                            o.MediaPageStore.set("media-load-error-type", "encodingRunning"),
                            o.MediaPageStore.set("media-load-error-message", "Media encoding is currently running. Try again in few minutes.");
                            break;
                        case "pending":
                            o.MediaPageStore.set("media-load-error-type", "encodingPending"),
                            o.MediaPageStore.set("media-load-error-message", "Media encoding is pending");
                            break;
                        case "fail":
                            o.MediaPageStore.set("media-load-error-type", "encodingFailed"),
                            o.MediaPageStore.set("media-load-error-message", "Media encoding failed")
                        }
                    }(t.props.data.encoding_status),
                    null !== o.MediaPageStore.get("media-load-error-type"))
                        return t.state.displayPlayer = !0,
                        T(t);
                    if ("string" == typeof t.props.data.poster_url ? t.videoPoster = (0,
                    m.formatInnerLink)(t.props.data.poster_url, t.props.siteUrl) : "string" == typeof t.props.data.thumbnail_url && (t.videoPoster = (0,
                    m.formatInnerLink)(t.props.data.thumbnail_url, t.props.siteUrl)),
                    t.videoInfo = (0,
                    A.RA)(t.props.data.encodings_info, t.props.data.hls_info),
                    Object.keys(t.videoInfo).length) {
                        var n = o.VideoViewerStore.get("video-quality");
                        (null === n || "Auto" === n && void 0 === t.videoInfo.Auto) && (n = 720);
                        var r = (0,
                        A.$e)(n, t.videoInfo);
                        "Auto" === n && void 0 !== t.videoInfo.Auto && t.videoSources.push({
                            src: t.videoInfo.Auto.url[0]
                        });
                        var a, l, c = (0,
                        A.KC)();
                        for (l = 0; l < t.videoInfo[r].format.length; ) {
                            if ("hls" === t.videoInfo[r].format[l]) {
                                t.videoSources.push({
                                    src: t.videoInfo[r].url[l]
                                });
                                break
                            }
                            l += 1
                        }
                        for (l in t.props.data.encodings_info[r])
                            t.props.data.encodings_info[r].hasOwnProperty(l) && c.support[l] && (a = t.props.data.encodings_info[r][l].url) && (a = (0,
                            m.formatInnerLink)(a, t.props.siteUrl),
                            t.videoSources.push({
                                src: a,
                                encodings_status: t.props.data.encodings_info[r][l].status
                            }))
                    } else
                        t.videoInfo = null;
                    if (t.videoSources.length) {
                        if (!t.props.inEmbed && 1 === t.videoSources.length && "running" === t.videoSources[0].encodings_status)
                            return o.MediaPageStore.set("media-load-error-type", "encodingRunning"),
                            o.MediaPageStore.set("media-load-error-message", "Media encoding is currently running. Try again in few minutes."),
                            T(t)
                    } else
                        switch (o.MediaPageStore.get("media-load-error-type")) {
                        case "encodingRunning":
                        case "encodingPending":
                        case "encodingFailed":
                            break;
                        default:
                            N.warn("VIDEO DEBUG:", "Video files don't exist")
                        }
                    o.PageStore.on("switched_media_auto_play", t.onUpdateMediaAutoPlay.bind(V(t))),
                    t.browserCache = new p.BrowserCache(i.SiteContext._currentValue.id,86400);
                    var d = new p.MediaDurationInfo;
                    return d.update(t.props.data.duration),
                    t.durationISO8601 = d.ISO8601(),
                    t.playerElem = null,
                    t.playerInstance = null,
                    t.onPlayerInit = t.onPlayerInit.bind(V(t)),
                    t.onClickNext = t.onClickNext.bind(V(t)),
                    t.onClickPrevious = t.onClickPrevious.bind(V(t)),
                    t.onStateUpdate = t.onStateUpdate.bind(V(t)),
                    t.onVideoEnd = t.onVideoEnd.bind(V(t)),
                    t.onVideoRestart = t.onVideoRestart.bind(V(t)),
                    t
                }
                return t = u,
                (n = [{
                    key: "componentDidMount",
                    value: function() {
                        if (this.videoSources.length) {
                            this.recommendedMedia = this.props.data.related_media.length ? new p.PlayerRecommendedMedia(this.props.data.related_media,this.props.inEmbed,!o.PageStore.get("config-media-item").displayViews) : null,
                            this.upNextLoaderView = !this.props.inEmbed && this.props.data.related_media.length ? new p.UpNextLoaderView(this.props.data.related_media[0]) : null;
                            var e = null;
                            if (this.props.inEmbed) {
                                var t = document.createElement("a")
                                  , n = document.createElement("a");
                                (e = document.createElement("div")).setAttribute("class", "media-links-top-left"),
                                t && (t.setAttribute("class", "title-link"),
                                t.setAttribute("href", this.props.data.url),
                                t.setAttribute("title", this.props.data.title),
                                t.setAttribute("target", "_blank"),
                                t.innerHTML = this.props.data.title),
                                n && (n.setAttribute("class", "user-thumb-link"),
                                n.setAttribute("href", (0,
                                m.formatInnerLink)(this.props.data.author_profile, this.props.siteUrl)),
                                n.setAttribute("title", this.props.data.author_name),
                                n.setAttribute("target", "_blank"),
                                n.setAttribute("style", "background-image:url(" + (0,
                                m.formatInnerLink)(o.MediaPageStore.get("media-author-thumbnail-url"), this.props.siteUrl) + ")")),
                                e.appendChild(n),
                                e.appendChild(t)
                            }
                            var r = o.MediaPageStore.get("media-url")
                              , a = '<button class="share-video-btn"><i class="material-icons">share</i><span>Share</span></button>';
                            a += '<div class="share-options-wrapper">\t\t\t\t\t\t\t\t\t<div class="share-options">\t\t\t\t\t\t\t\t\t\t<div class="share-options-inner">\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-email">\t\t\t\t\t\t\t\t\t\t\t\t<a href="mailto:?body=' + r + '" title=""><span><i class="material-icons">email</i></span><span>Email</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-fb">\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.facebook.com/sharer.php?u=' + r + '" title="" target="_blank"><span></span><span>Facebook</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-tw">\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://twitter.com/intent/tweet?url=' + r + '" title="" target="_blank"><span></span><span>Twitter</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-whatsapp">\t\t\t\t\t\t\t\t\t\t\t\t<a href="whatsapp://send?text=' + r + '" title="" target="_blank" data-action="share/whatsapp/share"><span></span><span>WhatsApp</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-telegram">\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://t.me/share/url?url=' + r + "&amp;text=" + this.props.data.title + '" title="" target="_blank"><span></span><span>Telegram</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-linkedin">\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=' + r + '" title="" target="_blank"><span></span><span>LinkedIn</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-reddit">\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://reddit.com/submit?url=' + r + "&amp;title=" + this.props.data.title + '" title="" target="_blank"><span></span><span>reddit</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-tumblr">\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + r + "&amp;title=" + this.props.data.title + '" title="" target="_blank"><span></span><span>Tumblr</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-pinterest">\t\t\t\t\t\t\t\t\t\t\t\t<a href="http://pinterest.com/pin/create/link/?url=' + r + '" title="" target="_blank"><span></span><span>Pinterest</span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t<div class="sh-option share-more">\t\t\t\t\t\t\t\t\t\t\t\t<a href="' + r + '" title="More" target="_blank"><span><i class="material-icons">more_horiz</i></span><span></span></a>\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t</div>',
                            this.cornerLayers = {
                                topLeft: e,
                                topRight: this.upNextLoaderView ? this.upNextLoaderView.html() : null,
                                bottomLeft: this.recommendedMedia ? this.recommendedMedia.html() : null,
                                bottomRight: this.props.inEmbed ? a : null
                            },
                            this.setState({
                                displayPlayer: !0
                            }, (function() {
                                setTimeout((function() {
                                    var e = document.querySelector(".share-video-btn")
                                      , t = document.querySelector(".share-options-wrapper")
                                      , n = document.querySelector(".share-options-inner");
                                    e && e.addEventListener("click", (function(e) {
                                        (0,
                                        m.addClassname)(document.querySelector(".video-js.vjs-mediacms"), "vjs-visible-share-options")
                                    }
                                    )),
                                    t && t.addEventListener("click", (function(e) {
                                        e.target !== n && e.target !== t || (0,
                                        m.removeClassname)(document.querySelector(".video-js.vjs-mediacms"), "vjs-visible-share-options")
                                    }
                                    ))
                                }
                                ), 1e3)
                            }
                            ))
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.unsetRecommendedMedia()
                    }
                }, {
                    key: "initRecommendedMedia",
                    value: function() {
                        null !== this.recommendedMedia && (this.props.inEmbed || this.recommendedMedia.init(),
                        this.playerInstance.player.on("fullscreenchange", this.recommendedMedia.onResize),
                        o.PageStore.on("window_resize", this.recommendedMedia.onResize),
                        o.VideoViewerStore.on("changed_viewer_mode", this.recommendedMedia.onResize))
                    }
                }, {
                    key: "unsetRecommendedMedia",
                    value: function() {
                        null !== this.recommendedMedia && (this.playerInstance.player.off("fullscreenchange", this.recommendedMedia.onResize),
                        o.PageStore.removeListener("window_resize", this.recommendedMedia.onResize),
                        o.VideoViewerStore.removeListener("changed_viewer_mode", this.recommendedMedia.onResize),
                        this.recommendedMedia.destroy())
                    }
                }, {
                    key: "onClickNext",
                    value: function() {
                        var e;
                        o.MediaPageStore.get("playlist-id") ? null === (e = o.MediaPageStore.get("playlist-next-media-url")) && (e = this.props.data.related_media[0].url) : this.props.inEmbed || (e = this.props.data.related_media[0].url),
                        window.location.href = e
                    }
                }, {
                    key: "onClickPrevious",
                    value: function() {
                        var e;
                        o.MediaPageStore.get("playlist-id") ? null === (e = o.MediaPageStore.get("playlist-previous-media-url")) && (e = this.props.data.related_media[0].url) : this.props.inEmbed || (e = this.props.data.related_media[0].url),
                        window.location.href = e
                    }
                }, {
                    key: "onStateUpdate",
                    value: function(e) {
                        o.VideoViewerStore.get("in-theater-mode") !== e.theaterMode && f.VideoViewerActions.set_viewer_mode(e.theaterMode),
                        o.VideoViewerStore.get("player-volume") !== e.volume && f.VideoViewerActions.set_player_volume(e.volume),
                        o.VideoViewerStore.get("player-sound-muted") !== e.soundMuted && f.VideoViewerActions.set_player_sound_muted(e.soundMuted),
                        o.VideoViewerStore.get("video-quality") !== e.quality && f.VideoViewerActions.set_video_quality(e.quality),
                        o.VideoViewerStore.get("video-playback-speed") !== e.playbackSpeed && f.VideoViewerActions.set_video_playback_speed(e.playbackSpeed)
                    }
                }, {
                    key: "onPlayerInit",
                    value: function(e, t) {
                        this.playerElem = t,
                        this.playerInstance = e,
                        this.upNextLoaderView && (this.upNextLoaderView.setVideoJsPlayerElem(this.playerInstance.player.el_),
                        this.onUpdateMediaAutoPlay()),
                        this.props.inEmbed || this.playerElem.parentNode.focus(),
                        null !== this.recommendedMedia && (this.recommendedMedia.initWrappers(this.playerElem.parentNode),
                        this.props.inEmbed && (this.playerInstance.player.one("pause", this.recommendedMedia.init),
                        this.initRecommendedMedia())),
                        this.playerInstance.player.one("ended", this.onVideoEnd)
                    }
                }, {
                    key: "onVideoRestart",
                    value: function() {
                        null !== this.recommendedMedia && (this.recommendedMedia.updateDisplayType("inline"),
                        this.props.inEmbed && this.playerInstance.player.one("pause", this.recommendedMedia.init),
                        this.playerInstance.player.one("ended", this.onVideoEnd))
                    }
                }, {
                    key: "onVideoEnd",
                    value: function() {
                        if (null !== this.recommendedMedia && (this.props.inEmbed || this.initRecommendedMedia(),
                        this.recommendedMedia.updateDisplayType("full"),
                        this.playerInstance.player.one("playing", this.onVideoRestart)),
                        !this.props.inEmbed && o.MediaPageStore.get("playlist-id")) {
                            var e = document.querySelector(".video-player .more-media")
                              , t = document.querySelector(".video-player .vjs-actions-anim");
                            this.upNextLoaderView.cancelTimer();
                            var n = o.MediaPageStore.get("playlist-next-media-url");
                            return n && (e && (e.style.display = "none"),
                            t && (t.style.display = "none"),
                            window.location.href = n),
                            void this.upNextLoaderView.hideTimerView()
                        }
                        this.upNextLoaderView && (o.PageStore.get("media-auto-play") ? (this.upNextLoaderView.startTimer(),
                        this.playerInstance.player.one("play", function() {
                            this.upNextLoaderView.cancelTimer()
                        }
                        .bind(this))) : this.upNextLoaderView.cancelTimer())
                    }
                }, {
                    key: "onUpdateMediaAutoPlay",
                    value: function() {
                        this.upNextLoaderView && (o.PageStore.get("media-auto-play") ? this.upNextLoaderView.showTimerView(this.playerInstance.isEnded()) : this.upNextLoaderView.hideTimerView())
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                          , t = null
                          , n = null;
                        !this.props.inEmbed && o.MediaPageStore.get("playlist-id") ? (t = o.MediaPageStore.get("playlist-next-media-url"),
                        n = o.MediaPageStore.get("playlist-previous-media-url")) : t = this.props.data.related_media.length && !this.props.inEmbed ? this.props.data.related_media[0].url : null;
                        var r = this.props.data.sprites_url ? {
                            url: this.props.siteUrl + "/" + this.props.data.sprites_url.replace(/^\//g, ""),
                            frame: {
                                width: 160,
                                height: 90,
                                seconds: 10
                            }
                        } : null;
                        return a.createElement("div", {
                            key: (this.props.inEmbed ? "embed-" : "") + "player-container",
                            className: "player-container" + (this.videoSources.length ? "" : " player-container-error"),
                            style: this.props.containerStyles,
                            ref: "playerContainer"
                        }, a.createElement("div", {
                            className: "player-container-inner",
                            ref: "playerContainerInner",
                            style: this.props.containerStyles
                        }, this.state.displayPlayer && null !== o.MediaPageStore.get("media-load-error-type") ? a.createElement(C.hJ, {
                            errorMessage: o.MediaPageStore.get("media-load-error-message")
                        }) : null, this.state.displayPlayer && null == o.MediaPageStore.get("media-load-error-type") ? a.createElement("div", {
                            className: "video-player",
                            ref: "videoPlayerWrapper",
                            key: "videoPlayerWrapper"
                        }, a.createElement(i.SiteConsumer, null, (function(i) {
                            return a.createElement(C.Y7, {
                                playerVolume: e.browserCache.get("player-volume"),
                                playerSoundMuted: e.browserCache.get("player-sound-muted"),
                                videoQuality: e.browserCache.get("video-quality"),
                                videoPlaybackSpeed: parseInt(e.browserCache.get("video-playback-speed"), 10),
                                inTheaterMode: e.browserCache.get("in-theater-mode"),
                                siteId: i.id,
                                siteUrl: i.url,
                                info: e.videoInfo,
                                cornerLayers: e.cornerLayers,
                                sources: e.videoSources,
                                poster: e.videoPoster,
                                previewSprite: r,
                                subtitlesInfo: e.props.data.subtitles_info,
                                enableAutoplay: !e.props.inEmbed,
                                inEmbed: e.props.inEmbed,
                                hasTheaterMode: !e.props.inEmbed,
                                hasNextLink: !!t,
                                hasPreviousLink: !!n,
                                errorMessage: o.MediaPageStore.get("media-load-error-message"),
                                onClickNextCallback: e.onClickNext,
                                onClickPreviousCallback: e.onClickPrevious,
                                onStateUpdateCallback: e.onStateUpdate,
                                onPlayerInitCallback: e.onPlayerInit
                            })
                        }
                        ))) : null))
                    }
                }]) && O(t.prototype, n),
                u
            }(a.PureComponent);
            function L(e) {
                for (var t = null, n = [], r = location.search.substr(1).split("&"), a = 0; a < r.length; a++)
                    (n = r[a].split("="))[0] === e && (t = decodeURIComponent(n[1]));
                return t
            }
            R.defaultProps = {
                inEmbed: !0,
                siteUrl: u().string.isRequired
            },
            R.propTypes = {
                inEmbed: u().bool
            },
            new MutationObserver((function(e, t) {
                var n, r = document.querySelector(".video-js.vjs-mediacms video");
                if (r)
                    return (n = videojs(r)).playsinline(!0),
                    1 == L("muted") && n.muted(!0),
                    L("time") >= 0 && n.currentTime(L("time")),
                    1 == L("autoplay") && n.play(),
                    void t.disconnect()
            }
            )).observe(document, {
                childList: !0,
                subtree: !0
            }),
            n(9808);
            var D, U, B = n(2546), F = n(4234), q = (n(7441),
            n(6453),
            n(7390),
            n(4669),
            n(2070),
            n(9511)), z = n(3064), H = (n(4486),
            n(6429),
            n(1283));
            function W(e) {
                return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            D = void 0,
            U = function(e) {
                var t, n = (t = e) && t.__esModule ? t : {
                    default: t
                }, r = "function" == typeof Symbol && "symbol" === W(Symbol.iterator) ? function(e) {
                    return W(e)
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : W(e)
                }
                , a = {
                    markerStyle: {
                        width: "7px",
                        "border-radius": "30%",
                        "background-color": "red"
                    },
                    markerTip: {
                        display: !0,
                        text: function(e) {
                            return "Break: " + e.text
                        },
                        time: function(e) {
                            return e.time
                        }
                    },
                    breakOverlay: {
                        display: !0,
                        displayTime: 3,
                        text: function(e) {
                            return "Break overlay: " + e.overlayText
                        },
                        style: {
                            width: "100%",
                            height: "20%",
                            "background-color": "rgba(0,0,0,0.7)",
                            color: "white",
                            "font-size": "17px"
                        }
                    },
                    onMarkerClick: function(e) {},
                    onMarkerReached: function(e, t) {},
                    markers: []
                };
                function i(e) {
                    var t;
                    try {
                        t = e.getBoundingClientRect()
                    } catch (e) {
                        t = {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0,
                            right: 0
                        }
                    }
                    return t
                }
                var o = -1;
                n.default.plugin("markers", (function(e) {
                    if (!n.default.mergeOptions) {
                        var t = function(e) {
                            return !!e && "object" === (void 0 === e ? "undefined" : r(e)) && "[object Object]" === toString.call(e) && e.constructor === Object
                        };
                        n.default.mergeOptions = function e(n, r) {
                            var a = {};
                            return [n, r].forEach((function(n) {
                                n && Object.keys(n).forEach((function(r) {
                                    var i = n[r];
                                    t(i) ? (t(a[r]) || (a[r] = {}),
                                    a[r] = e(a[r], i)) : a[r] = i
                                }
                                ))
                            }
                            )),
                            a
                        }
                    }
                    n.default.createEl || (n.default.createEl = function(e, t, r) {
                        var a = n.default.Player.prototype.createEl(e, t);
                        return r && Object.keys(r).forEach((function(e) {
                            a.setAttribute(e, r[e])
                        }
                        )),
                        a
                    }
                    );
                    var l = n.default.mergeOptions(a, e)
                      , s = {}
                      , u = []
                      , c = o
                      , d = this
                      , m = null
                      , f = null
                      , p = o;
                    function y() {
                        u.sort((function(e, t) {
                            return l.markerTip.time(e) - l.markerTip.time(t)
                        }
                        ))
                    }
                    function h(e) {
                        e.forEach((function(e) {
                            var t;
                            e.key = (t = (new Date).getTime(),
                            "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                                var n = (t + 16 * Math.random()) % 16 | 0;
                                return t = Math.floor(t / 16),
                                ("x" == e ? n : 3 & n | 8).toString(16)
                            }
                            ))),
                            d.el().querySelector(".vjs-progress-holder").appendChild(function(e) {
                                var t = n.default.createEl("div", {}, {
                                    "data-marker-key": e.key,
                                    "data-marker-time": l.markerTip.time(e)
                                });
                                return v(e, t),
                                t.addEventListener("click", (function(t) {
                                    var n = !1;
                                    if ("function" == typeof l.onMarkerClick && (n = !1 === l.onMarkerClick(e)),
                                    !n) {
                                        var r = this.getAttribute("data-marker-key");
                                        d.currentTime(l.markerTip.time(s[r]))
                                    }
                                }
                                )),
                                l.markerTip.display && function(e) {
                                    e.addEventListener("mouseover", (function() {
                                        var t = s[e.getAttribute("data-marker-key")];
                                        if (m) {
                                            m.querySelector(".vjs-tip-inner").innerText = l.markerTip.text(t),
                                            m.style.left = g(t) + "%";
                                            var n = i(m)
                                              , r = i(e);
                                            m.style.marginLeft = -parseFloat(n.width / 2) + parseFloat(r.width / 4) + "px",
                                            m.style.visibility = "visible"
                                        }
                                    }
                                    )),
                                    e.addEventListener("mouseout", (function() {
                                        m && (m.style.visibility = "hidden")
                                    }
                                    ))
                                }(t),
                                t
                            }(e)),
                            s[e.key] = e,
                            u.push(e)
                        }
                        )),
                        y()
                    }
                    function g(e) {
                        return l.markerTip.time(e) / d.duration() * 100
                    }
                    function v(e, t) {
                        t.className = "vjs-marker " + (e.class || ""),
                        Object.keys(l.markerStyle).forEach((function(e) {
                            t.style[e] = l.markerStyle[e]
                        }
                        ));
                        var n = e.time / d.duration();
                        if ((n < 0 || n > 1) && (t.style.display = "none"),
                        t.style.left = g(e) + "%",
                        e.duration)
                            t.style.width = e.duration / d.duration() * 100 + "%",
                            t.style.marginLeft = "0px";
                        else {
                            var r = i(t);
                            t.style.marginLeft = r.width / 2 + "px"
                        }
                    }
                    function b(e) {
                        f && (p = o,
                        f.style.visibility = "hidden"),
                        c = o;
                        var t = [];
                        e.forEach((function(e) {
                            var n = u[e];
                            if (n) {
                                delete s[n.key],
                                t.push(e);
                                var r = d.el().querySelector(".vjs-marker[data-marker-key='" + n.key + "']");
                                r && r.parentNode.removeChild(r)
                            }
                        }
                        ));
                        try {
                            t.reverse(),
                            t.forEach((function(e) {
                                u.splice(e, 1)
                            }
                            ))
                        } catch (e) {
                            H.log(e)
                        }
                        y()
                    }
                    function S() {
                        if (l.breakOverlay.display && !(c < 0)) {
                            var e = d.currentTime()
                              , t = u[c]
                              , n = l.markerTip.time(t);
                            e >= n && e <= n + l.breakOverlay.displayTime ? (p !== c && (p = c,
                            f && (f.querySelector(".vjs-break-overlay-text").innerHTML = l.breakOverlay.text(t))),
                            f && (f.style.visibility = "visible")) : (p = o,
                            f && (f.style.visibility = "hidden"))
                        }
                    }
                    function w() {
                        !function() {
                            if (u.length) {
                                var t = function(e) {
                                    return e < u.length - 1 ? l.markerTip.time(u[e + 1]) : d.duration()
                                }
                                  , n = d.currentTime()
                                  , r = o;
                                if (c !== o) {
                                    var a = t(c);
                                    if (n >= l.markerTip.time(u[c]) && n < a)
                                        return;
                                    if (c === u.length - 1 && n === d.duration())
                                        return
                                }
                                if (n < l.markerTip.time(u[0]))
                                    r = o;
                                else
                                    for (var i = 0; i < u.length; i++)
                                        if (a = t(i),
                                        n >= l.markerTip.time(u[i]) && n < a) {
                                            r = i;
                                            break
                                        }
                                r !== c && (r !== o && e.onMarkerReached && e.onMarkerReached(u[r], r),
                                c = r)
                            }
                        }(),
                        S(),
                        e.onTimeUpdateAfterMarkerUpdate && e.onTimeUpdateAfterMarkerUpdate()
                    }
                    d.on("loadedmetadata", (function() {
                        l.markerTip.display && (m = n.default.createEl("div", {
                            className: "vjs-tip",
                            innerHTML: "<div class='vjs-tip-arrow'></div><div class='vjs-tip-inner'></div>"
                        }),
                        d.el().querySelector(".vjs-progress-holder").appendChild(m)),
                        d.markers.removeAll(),
                        h(l.markers),
                        l.breakOverlay.display && (f = n.default.createEl("div", {
                            className: "vjs-break-overlay",
                            innerHTML: "<div class='vjs-break-overlay-text'></div>"
                        }),
                        Object.keys(l.breakOverlay.style).forEach((function(e) {
                            f && (f.style[e] = l.breakOverlay.style[e])
                        }
                        )),
                        d.el().appendChild(f),
                        p = o),
                        w(),
                        d.on("timeupdate", w),
                        d.off("loadedmetadata")
                    }
                    )),
                    d.markers = {
                        getMarkers: function() {
                            return u
                        },
                        next: function() {
                            for (var e = d.currentTime(), t = 0; t < u.length; t++) {
                                var n = l.markerTip.time(u[t]);
                                if (n > e) {
                                    d.currentTime(n);
                                    break
                                }
                            }
                        },
                        prev: function() {
                            for (var e = d.currentTime(), t = u.length - 1; t >= 0; t--) {
                                var n = l.markerTip.time(u[t]);
                                if (n + .5 < e)
                                    return void d.currentTime(n)
                            }
                        },
                        add: function(e) {
                            h(e)
                        },
                        remove: function(e) {
                            b(e)
                        },
                        removeAll: function() {
                            for (var e = [], t = 0; t < u.length; t++)
                                e.push(t);
                            b(e)
                        },
                        updateTime: function(e) {
                            !function(e) {
                                u.forEach((function(t) {
                                    var n = d.el().querySelector(".vjs-marker[data-marker-key='" + t.key + "']")
                                      , r = l.markerTip.time(t);
                                    (e || n.getAttribute("data-marker-time") !== r) && (v(t, n),
                                    n.setAttribute("data-marker-time", r))
                                }
                                )),
                                y()
                            }(e)
                        },
                        reset: function(e) {
                            d.markers.removeAll(),
                            h(e)
                        },
                        destroy: function() {
                            d.markers.removeAll(),
                            f && f.remove(),
                            m && m.remove(),
                            d.off("timeupdate", S),
                            delete d.markers
                        }
                    }
                }
                ))
            }
            ,
            "function" == typeof define && n.amdO ? define(["mediacms-player"], U) : "undefined" != typeof exports ? U(n(8009)) : (U((D = window).videojs),
            D.videojsMarkers = {});
            var $ = n(1283);
            function Q(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return G(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || Z(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Y(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || Z(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Z(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return G(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? G(e, t) : void 0
                }
            }
            function G(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var J = "comment"
              , K = "Comment"
              , X = "SUBMIT";
            function ee(e) {
                var t = (0,
                a.useRef)(null)
                  , n = Y((0,
                a.useState)(""), 2)
                  , r = n[0]
                  , l = n[1]
                  , s = Y((0,
                a.useState)(!1), 2)
                  , u = s[0]
                  , c = s[1]
                  , d = Y((0,
                a.useState)(!1), 2)
                  , m = d[0]
                  , p = d[1]
                  , y = Y((0,
                a.useState)(-1), 2)
                  , h = y[0]
                  , g = y[1]
                  , v = Y((0,
                a.useState)(""), 2)
                  , b = v[0]
                  , S = v[1]
                  , w = Y((0,
                a.useState)(i.MemberContext._currentValue.is.anonymous ? i.LinksContext._currentValue.signin + "?next=/" + window.location.href.replace(i.SiteContext._currentValue.url, "").replace(/^\//g, "") : null), 1)[0];
                function E() {
                    p(!0)
                }
                function P() {
                    p(!1)
                }
                function k() {
                    $.log("poios kalei auti tio malakia");
                    var e = Q(o.MediaPageStore.get("users"))
                      , t = [];
                    e.forEach((function(e) {
                        t.push({
                            id: e.username,
                            display: e.name + "(@" + e.username + ")"
                        })
                    }
                    )),
                    S(t)
                }
                function _() {
                    t.current.style.height = "";
                    var e = t.current.scrollHeight
                      , n = 0 < h ? h : parseFloat(window.getComputedStyle(t.current).lineHeight);
                    l(""),
                    c(!1),
                    g(n),
                    t.current.style.height = Math.max(20, h * Math.ceil(e / n)) + "px"
                }
                function M() {
                    c(!1)
                }
                return (0,
                a.useEffect)((function() {
                    return o.MediaPageStore.on("comment_submit", _),
                    o.MediaPageStore.on("comment_submit_fail", M),
                    !0 === MediaCMS.features.media.actions.comment_mention && o.MediaPageStore.on("users_load", k),
                    function() {
                        o.MediaPageStore.removeListener("comment_submit", _),
                        o.MediaPageStore.removeListener("comment_submit_fail", M),
                        !0 === MediaCMS.features.media.actions.comment_mention && o.MediaPageStore.removeListener("users_load", k)
                    }
                }
                )),
                i.MemberContext._currentValue.is.anonymous ? a.createElement("div", {
                    className: "comments-form"
                }, a.createElement("div", {
                    className: "comments-form-inner"
                }, a.createElement(F.UserThumbnail, null), a.createElement("div", {
                    className: "form"
                }, a.createElement("a", {
                    href: w,
                    rel: "noffolow",
                    className: "form-textarea-wrap",
                    title: "Add a comment..."
                }, a.createElement("span", {
                    className: "form-textarea"
                }, "Add a comment...")), a.createElement("div", {
                    className: "form-buttons"
                }, a.createElement("a", {
                    href: w,
                    rel: "noffolow",
                    className: "disabled"
                }, X))))) : a.createElement("div", {
                    className: "comments-form"
                }, a.createElement("div", {
                    className: "comments-form-inner"
                }, a.createElement(F.UserThumbnail, null), a.createElement("div", {
                    className: "form"
                }, a.createElement("div", {
                    className: "form-textarea-wrap" + (m ? " focused" : "")
                }, MediaCMS.features.media.actions.comment_mention ? a.createElement(q.r, {
                    inputRef: t,
                    className: "form-textarea",
                    rows: "1",
                    placeholder: "Add a comment...",
                    value: r,
                    onChange: function(e, n, r, a) {
                        t.current.style.height = "",
                        l(n),
                        c(!0);
                        var i = t.current.scrollHeight
                          , o = 0 < h ? h : parseFloat(window.getComputedStyle(t.current).lineHeight);
                        g(o),
                        t.current.style.height = Math.max(20, h * Math.ceil(i / o)) + "px"
                    },
                    onFocus: E,
                    onBlur: P
                }, a.createElement(q.p, {
                    data: b,
                    markup: "@(___id___)[___display___]"
                })) : a.createElement("textarea", {
                    ref: t,
                    className: "form-textarea",
                    rows: "1",
                    placeholder: "Add a comment...",
                    value: r,
                    onChange: function(e) {
                        t.current.style.height = "";
                        var n = t.current.scrollHeight
                          , r = 0 < h ? h : parseFloat(window.getComputedStyle(t.current).lineHeight);
                        l(t.current.value),
                        c(!0),
                        g(r),
                        t.current.style.height = Math.max(20, h * Math.ceil(n / r)) + "px"
                    },
                    onFocus: E,
                    onBlur: P
                })), a.createElement("div", {
                    className: "form-buttons"
                }, a.createElement("button", {
                    className: "" === r.trim() ? "disabled" : "",
                    onClick: function() {
                        if (u) {
                            var e = r.trim();
                            "" !== e && f.MediaPageActions.submitComment(e)
                        }
                    }
                }, X)))))
            }
            ee.propTypes = {
                comment_type: u().oneOf(["new", "reply"]),
                media_id: u().oneOfType([u().string, u().number]).isRequired,
                reply_comment_id: u().oneOfType([u().string, u().number])
            },
            ee.defaultProps = {
                comment_type: "new"
            };
            function te(e) {
                var t = Y((0,
                B.usePopup)(), 3)
                  , n = t[0]
                  , r = t[1]
                  , o = t[2];
                return a.createElement("div", {
                    className: "comment-actions"
                }, i.MemberContext._currentValue.can.deleteComment ? a.createElement("div", {
                    className: "comment-action remove-comment"
                }, a.createElement(o, {
                    contentRef: n
                }, a.createElement("button", null, "DELETE ", "COMMENT")), a.createElement(r, {
                    contentRef: n
                }, a.createElement(F.PopupMain, null, a.createElement("div", {
                    className: "popup-message"
                }, a.createElement("span", {
                    className: "popup-message-title"
                }, K, " removal"), a.createElement("span", {
                    className: "popup-message-main"
                }, "You're willing to remove ", J, " permanently?")), a.createElement("hr", null), a.createElement("span", {
                    className: "popup-message-bottom"
                }, a.createElement("button", {
                    className: "button-link cancel-comment-removal",
                    onClick: function() {
                        n.current.toggle()
                    }
                }, "CANCEL"), a.createElement("button", {
                    className: "button-link proceed-comment-removal",
                    onClick: function() {
                        n.current.toggle(),
                        f.MediaPageActions.deleteComment(e.comment_id)
                    }
                }, "PROCEED"))))) : null)
            }
            function ne(e) {
                var t, n = (0,
                a.useRef)(null), r = (0,
                a.useRef)(null), o = Y((0,
                a.useState)(!0), 2), l = o[0], s = o[1], u = Y((0,
                a.useState)(!1), 2), c = u[0];
                return u[1],
                (0,
                a.useEffect)((function() {
                    return function() {}
                }
                ), []),
                a.createElement("div", {
                    className: "comment"
                }, a.createElement("div", {
                    className: "comment-inner"
                }, a.createElement("a", {
                    className: "comment-author-thumb",
                    href: e.author_link,
                    title: e.author_name
                }, a.createElement("img", {
                    src: e.author_thumb,
                    alt: e.author_name
                })), a.createElement("div", {
                    className: "comment-content"
                }, a.createElement("div", {
                    className: "comment-meta"
                }, a.createElement("div", {
                    className: "comment-author"
                }, a.createElement("a", {
                    href: e.author_link,
                    title: e.author_name
                }, e.author_name)), a.createElement("div", {
                    className: "comment-date"
                }, (0,
                z.WU)(new Date(e.publish_date)))), a.createElement("div", {
                    ref: n,
                    className: "comment-text" + (l ? " show-all" : "")
                }, a.createElement("div", {
                    ref: r,
                    className: "comment-text-inner",
                    dangerouslySetInnerHTML: (t = e.text,
                    {
                        __html: t.replace(/\n/g, "<br />")
                    })
                })), c ? a.createElement("button", {
                    className: "toggle-more",
                    onClick: function() {
                        s(!l)
                    }
                }, l ? "Show less" : "Read more") : null, i.MemberContext._currentValue.can.deleteComment ? a.createElement(te, {
                    comment_id: e.comment_id
                }) : null)))
            }
            ne.propTypes = {
                comment_id: u().oneOfType([u().string, u().number]).isRequired,
                media_id: u().oneOfType([u().string, u().number]).isRequired,
                text: u().string,
                author_name: u().string,
                author_link: u().string,
                author_thumb: u().string,
                publish_date: u().oneOfType([u().string, u().number]),
                likes: u().number,
                dislikes: u().number
            },
            ne.defaultProps = {
                author_name: "",
                author_link: "#",
                publish_date: 0,
                likes: 0,
                dislikes: 0
            };
            var re = function(e) {
                var t = e.commentsLength;
                return a.createElement(a.Fragment, null, !i.MemberContext._currentValue.can.readComment || o.MediaPageStore.get("media-data").enable_comments ? null : a.createElement("span", {
                    className: "disabled-comments-msg"
                }, "Comments are disabled"), i.MemberContext._currentValue.can.readComment && (o.MediaPageStore.get("media-data").enable_comments || i.MemberContext._currentValue.can.editMedia) ? a.createElement("h2", null, t ? 1 < t ? t + " Comments" : t + " " + K : o.MediaPageStore.get("media-data").enable_comments ? "No comment yet" : "") : null)
            };
            function ae(e) {
                var t = Y((0,
                a.useState)(o.MediaPageStore.get("media-id")), 2)
                  , n = t[0]
                  , r = (t[1],
                Y((0,
                a.useState)(i.MemberContext._currentValue.can.readComment ? o.MediaPageStore.get("media-comments") : []), 2))
                  , l = r[0]
                  , s = r[1]
                  , u = Y((0,
                a.useState)(!1), 2)
                  , c = u[0]
                  , d = u[1];
                function m() {
                    var e = Q(o.MediaPageStore.get("media-comments"));
                    s(Q(e))
                }
                function p(e) {
                    m(),
                    setTimeout((function() {
                        return f.PageActions.addNotification("Comment added", "commentSubmit")
                    }
                    ), 100)
                }
                function y() {
                    setTimeout((function() {
                        return f.PageActions.addNotification("Comment submition failed", "commentSubmitFail")
                    }
                    ), 100)
                }
                function h(e) {
                    m(),
                    setTimeout((function() {
                        return f.PageActions.addNotification("Comment removed", "commentDelete")
                    }
                    ), 100)
                }
                function g(e) {
                    setTimeout((function() {
                        return f.PageActions.addNotification("Comment removal failed", "commentDeleteFail")
                    }
                    ), 100)
                }
                return (0,
                a.useEffect)((function() {
                    d(l.length && i.MemberContext._currentValue.can.readComment && (o.MediaPageStore.get("media-data").enable_comments || i.MemberContext._currentValue.can.editMedia))
                }
                ), [l]),
                (0,
                a.useEffect)((function() {
                    return o.MediaPageStore.on("comments_load", m),
                    o.MediaPageStore.on("comment_submit", p),
                    o.MediaPageStore.on("comment_submit_fail", y),
                    o.MediaPageStore.on("comment_delete", h),
                    o.MediaPageStore.on("comment_delete_fail", g),
                    function() {
                        o.MediaPageStore.removeListener("comments_load", m),
                        o.MediaPageStore.removeListener("comment_submit", p),
                        o.MediaPageStore.removeListener("comment_submit_fail", y),
                        o.MediaPageStore.removeListener("comment_delete", h),
                        o.MediaPageStore.removeListener("comment_delete_fail", g)
                    }
                }
                ), []),
                a.createElement("div", {
                    className: "comments-list"
                }, a.createElement("div", {
                    className: "comments-list-inner"
                }, a.createElement(re, {
                    commentsLength: l.length
                }), o.MediaPageStore.get("media-data").enable_comments ? a.createElement(ee, {
                    media_id: n
                }) : null, c ? l.map((function(e) {
                    return a.createElement(ne, {
                        key: e.uid,
                        comment_id: e.uid,
                        media_id: n,
                        text: e.text,
                        author_name: e.author_name,
                        author_link: e.author_profile,
                        author_thumb: i.SiteContext._currentValue.url + "/" + e.author_thumbnail_url.replace(/^\//g, ""),
                        publish_date: e.add_date,
                        likes: 0,
                        dislikes: 0
                    })
                }
                )) : null))
            }
            var ie = n(1283);
            function oe(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return le(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? le(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function le(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function se(e) {
                var t, n, r = [];
                if (e.length)
                    for (t = 0,
                    n = 1 < e.length ? ", " : ""; t < e.length; )
                        r[t] = a.createElement("div", {
                            key: t
                        }, a.createElement("a", {
                            href: e[t].url,
                            title: e[t].title
                        }, e[t].title), t < e.length - 1 ? n : ""),
                        t += 1;
                return r
            }
            function ue(e) {
                return a.createElement("div", {
                    className: "media-author-banner"
                }, a.createElement("div", null, a.createElement("a", {
                    className: "author-banner-thumb",
                    href: e.link || null,
                    title: e.name
                }, a.createElement("span", {
                    style: {
                        backgroundImage: "url(" + e.thumb + ")"
                    }
                }, a.createElement("img", {
                    src: e.thumb,
                    loading: "lazy",
                    alt: e.name,
                    title: e.name
                })))), a.createElement("div", null, a.createElement("span", null, a.createElement("a", {
                    href: e.link,
                    className: "author-banner-name",
                    title: e.name
                }, a.createElement("span", null, e.name))), o.PageStore.get("config-media-item").displayPublishDate && e.published ? a.createElement("span", {
                    className: "author-banner-date"
                }, "Published on ", (0,
                m.publishedOnDate)(new Date(e.published))) : null))
            }
            function ce(e) {
                return a.createElement("div", {
                    className: e.id.trim() ? "media-content-" + e.id.trim() : null
                }, a.createElement("div", {
                    className: "media-content-field"
                }, a.createElement("div", {
                    className: "media-content-field-label"
                }, a.createElement("h4", null, e.title)), a.createElement("div", {
                    className: "media-content-field-content"
                }, e.value)))
            }
            function de(e) {
                var t = e.link;
                return window.MediaCMS.site.devEnv && (t = "/edit-media.html"),
                a.createElement("a", {
                    href: t,
                    rel: "nofollow",
                    title: "Edit media",
                    className: "edit-media"
                }, "EDIT MEDIA")
            }
            function me(e) {
                var t = e.link;
                return window.MediaCMS.site.devEnv && (t = "#"),
                a.createElement("a", {
                    href: t,
                    rel: "nofollow",
                    title: "Edit subtitle",
                    className: "edit-subtitle"
                }, "EDIT SUBTITLE")
            }
            function fe(e) {
                var t = (0,
                B.useUser)().userCan
                  , n = e.description.trim()
                  , r = !o.PageStore.get("config-enabled").taxonomies.tags || o.PageStore.get("config-enabled").taxonomies.tags.enabled ? se(o.MediaPageStore.get("media-tags")) : []
                  , l = o.PageStore.get("config-options").pages.media.categoriesWithTitle ? [] : !o.PageStore.get("config-enabled").taxonomies.categories || o.PageStore.get("config-enabled").taxonomies.categories.enabled ? se(o.MediaPageStore.get("media-categories")) : []
                  , s = o.MediaPageStore.get("media-summary");
                s = s ? s.trim() : "";
                var u = oe((0,
                B.usePopup)(), 3)
                  , c = u[0]
                  , d = u[1]
                  , p = u[2]
                  , y = oe((0,
                a.useState)("" !== s), 2)
                  , h = y[0]
                  , g = (y[1],
                oe((0,
                a.useState)("" == s), 2))
                  , v = g[0]
                  , b = g[1];
                function S(e) {
                    setTimeout((function() {
                        f.PageActions.addNotification("Media removed. Redirecting...", "mediaDelete"),
                        setTimeout((function() {
                            window.location.href = i.SiteContext._currentValue.url + "/" + o.MediaPageStore.get("media-data").author_profile.replace(/^\//g, "")
                        }
                        ), 2e3)
                    }
                    ), 100),
                    void 0 !== e && ie.info("Removed media '" + e + '"')
                }
                function w(e) {
                    setTimeout((function() {
                        f.PageActions.addNotification("Media removal failed", "mediaDeleteFail")
                    }
                    ), 100),
                    void 0 !== e && ie.info('Media "' + e + '" removal failed')
                }
                (0,
                a.useEffect)((function() {
                    return o.MediaPageStore.on("media_delete", S),
                    o.MediaPageStore.on("media_delete_fail", w),
                    function() {
                        o.MediaPageStore.removeListener("media_delete", S),
                        o.MediaPageStore.removeListener("media_delete_fail", w)
                    }
                }
                ), []);
                var E = (0,
                m.formatInnerLink)(e.author.url, i.SiteContext._currentValue.url)
                  , P = (0,
                m.formatInnerLink)(e.author.thumb, i.SiteContext._currentValue.url);
                return a.createElement("div", {
                    className: "media-info-content"
                }, void 0 === o.PageStore.get("config-media-item").displayAuthor || null === o.PageStore.get("config-media-item").displayAuthor || o.PageStore.get("config-media-item").displayAuthor ? a.createElement(ue, {
                    link: E,
                    thumb: P,
                    name: e.author.name,
                    published: e.published
                }) : null, a.createElement("div", {
                    className: "media-content-banner"
                }, a.createElement("div", {
                    className: "media-content-banner-inner"
                }, h ? a.createElement("div", {
                    className: "media-content-summary"
                }, s) : null, h && !v || !n ? null : o.PageStore.get("config-options").pages.media.htmlInDescription ? a.createElement("div", {
                    className: "media-content-description",
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                }) : a.createElement("div", {
                    className: "media-content-description"
                }, n), h ? a.createElement("button", {
                    className: "load-more",
                    onClick: function() {
                        b(!v)
                    }
                }, v ? "SHOW LESS" : "SHOW MORE") : null, r.length ? a.createElement(ce, {
                    value: r,
                    title: 1 < r.length ? "Tags" : "Tag",
                    id: "tags"
                }) : null, l.length ? a.createElement(ce, {
                    value: l,
                    title: 1 < l.length ? "Categories" : "Category",
                    id: "categories"
                }) : null, t.editMedia || t.editSubtitle || t.deleteMedia ? a.createElement("div", {
                    className: "media-author-actions"
                }, t.editMedia ? a.createElement(de, {
                    link: o.MediaPageStore.get("media-data").edit_url
                }) : null, t.editSubtitle && "video" === o.MediaPageStore.get("media-data").media_type ? a.createElement(me, {
                    link: o.MediaPageStore.get("media-data").edit_url.replace("edit?", "add_subtitle?")
                }) : null, a.createElement(p, {
                    contentRef: c
                }, a.createElement("button", {
                    className: "remove-media"
                }, "DELETE MEDIA")), a.createElement(d, {
                    contentRef: c
                }, a.createElement(F.PopupMain, null, a.createElement("div", {
                    className: "popup-message"
                }, a.createElement("span", {
                    className: "popup-message-title"
                }, "Media removal"), a.createElement("span", {
                    className: "popup-message-main"
                }, "You're willing to remove media permanently?")), a.createElement("hr", null), a.createElement("span", {
                    className: "popup-message-bottom"
                }, a.createElement("button", {
                    className: "button-link cancel-comment-removal",
                    onClick: function() {
                        c.current.toggle()
                    }
                }, "CANCEL"), a.createElement("button", {
                    className: "button-link proceed-comment-removal",
                    onClick: function() {
                        f.MediaPageActions.removeMedia(),
                        c.current.toggle()
                    }
                }, "PROCEED"))))) : null)), a.createElement(ae, null))
            }
            function pe(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return ye(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ye(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function ye(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function he() {
                var e = pe((0,
                a.useState)(o.MediaPageStore.get("user-disliked-media")), 2)
                  , t = e[0]
                  , n = e[1]
                  , r = pe((0,
                a.useState)((0,
                m.formatViewsNumber)(o.MediaPageStore.get("media-dislikes"), !1)), 2)
                  , l = r[0]
                  , s = r[1];
                function u() {
                    n(o.MediaPageStore.get("user-disliked-media")),
                    s((0,
                    m.formatViewsNumber)(o.MediaPageStore.get("media-dislikes"), !1))
                }
                function c() {
                    u(),
                    f.PageActions.addNotification(i.TextsContext._currentValue.messages.addToDisliked, "mediaDislike")
                }
                function d() {
                    u(),
                    f.PageActions.addNotification(i.TextsContext._currentValue.messages.removeFromDisliked, "cancelMediaDislike")
                }
                function p() {
                    f.PageActions.addNotification("Action failed", "mediaDislikeRequestFail")
                }
                return (0,
                a.useEffect)((function() {
                    return o.MediaPageStore.on("disliked_media", c),
                    o.MediaPageStore.on("undisliked_media", d),
                    o.MediaPageStore.on("disliked_media_failed_request", p),
                    function() {
                        o.MediaPageStore.removeListener("disliked_media", c),
                        o.MediaPageStore.removeListener("undisliked_media", d),
                        o.MediaPageStore.removeListener("disliked_media_failed_request", p)
                    }
                }
                ), []),
                a.createElement("div", {
                    className: "like"
                }, a.createElement("button", {
                    onClick: function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        f.MediaPageActions[t ? "undislikeMedia" : "dislikeMedia"]()
                    }
                }, a.createElement(F.CircleIconButton, {
                    type: "span"
                }, a.createElement(F.MaterialIcon, {
                    type: "thumb_down"
                })), a.createElement("span", {
                    className: "dislikes-counter"
                }, l)))
            }
            function ge(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return ve(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ve(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function ve(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function be() {
                var e = ge((0,
                a.useState)(o.MediaPageStore.get("user-liked-media")), 2)
                  , t = e[0]
                  , n = e[1]
                  , r = ge((0,
                a.useState)((0,
                m.formatViewsNumber)(o.MediaPageStore.get("media-likes"), !1)), 2)
                  , l = r[0]
                  , s = r[1];
                function u() {
                    n(o.MediaPageStore.get("user-liked-media")),
                    s((0,
                    m.formatViewsNumber)(o.MediaPageStore.get("media-likes"), !1))
                }
                function c() {
                    u(),
                    f.PageActions.addNotification(i.TextsContext._currentValue.addToLiked, "likedMedia")
                }
                function d() {
                    u(),
                    f.PageActions.addNotification(i.TextsContext._currentValue.removeFromLiked, "unlikedMedia")
                }
                function p() {
                    f.PageActions.addNotification("Action failed", "likedMediaRequestFail")
                }
                return (0,
                a.useEffect)((function() {
                    return o.MediaPageStore.on("liked_media", c),
                    o.MediaPageStore.on("unliked_media", d),
                    o.MediaPageStore.on("liked_media_failed_request", p),
                    function() {
                        o.MediaPageStore.removeListener("liked_media", c),
                        o.MediaPageStore.removeListener("unliked_media", d),
                        o.MediaPageStore.removeListener("liked_media_failed_request", p)
                    }
                }
                ), []),
                a.createElement("div", {
                    className: "like"
                }, a.createElement("button", {
                    onClick: function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        f.MediaPageActions[t ? "unlikeMedia" : "likeMedia"]()
                    }
                }, a.createElement(F.CircleIconButton, {
                    type: "span"
                }, a.createElement(F.MaterialIcon, {
                    type: "thumb_up"
                })), a.createElement("span", {
                    className: "likes-counter"
                }, l)))
            }
            function Se(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function we(e) {
                var t, n, r = (0,
                a.useRef)(null), i = (0,
                a.useRef)(null), l = (t = (0,
                a.useState)(null),
                n = 2,
                function(e) {
                    if (Array.isArray(e))
                        return e
                }(t) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return Se(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Se(e, t) : void 0
                    }
                }(t, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), s = l[0], u = l[1];
                function c() {
                    u(window.innerHeight - (104 + r.current.offsetHeight))
                }
                return (0,
                a.useEffect)((function() {
                    return c(),
                    o.PageStore.on("window_resize", c),
                    function() {
                        o.PageStore.removeListener("window_resize", c)
                    }
                }
                ), []),
                a.createElement("form", null, a.createElement("div", {
                    className: "report-form",
                    style: null !== s ? {
                        maxHeight: s + "px"
                    } : null
                }, a.createElement("div", {
                    className: "form-title"
                }, "Report media"), a.createElement("div", {
                    className: "form-field"
                }, a.createElement("span", {
                    className: "label"
                }, "URL"), a.createElement("input", {
                    type: "text",
                    readOnly: !0,
                    value: e.mediaUrl
                })), a.createElement("div", {
                    className: "form-field"
                }, a.createElement("span", {
                    className: "label"
                }, "Description"), a.createElement("textarea", {
                    ref: i,
                    required: !0
                })), a.createElement("div", {
                    className: "form-field form-help-text"
                }, "Reported media is reviewed")), a.createElement("div", {
                    ref: r,
                    className: "form-actions-bottom"
                }, a.createElement("button", {
                    className: "cancel",
                    onClick: function(t) {
                        t.preventDefault(),
                        void 0 !== e.cancelReportForm && e.cancelReportForm()
                    }
                }, "CANCEL"), a.createElement("button", {
                    onClick: function(t) {
                        var n = i.current.value.trim();
                        "" !== n && (t.preventDefault(),
                        void 0 !== e.submitReportForm && e.submitReportForm(n))
                    }
                }, "SUBMIT")))
            }
            function Ee(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return Pe(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pe(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Pe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function ke(e, t) {
                var n, r, a = i.SiteContext._currentValue, o = e.encodings_info, l = {};
                for (n in o)
                    if (o.hasOwnProperty(n) && Object.keys(o[n]).length)
                        for (r in o[n])
                            o[n].hasOwnProperty(r) && "success" === o[n][r].status && 100 === o[n][r].progress && (l[o[n][r].title] = {
                                text: n + " - " + r.toUpperCase() + " (" + o[n][r].size + ")",
                                link: (0,
                                m.formatInnerLink)(o[n][r].url, a.url),
                                linkAttr: {
                                    target: "_blank",
                                    download: e.title + "_" + n + "_" + r.toUpperCase()
                                }
                            });
                return l.original_media_url = {
                    text: "Original file (" + e.size + ")",
                    link: (0,
                    m.formatInnerLink)(e.original_media_url, a.url),
                    linkAttr: {
                        target: "_blank",
                        download: e.title
                    }
                },
                Object.values(l)
            }
            function _e(e, t, n, r, i, o, l) {
                var s = t.url
                  , u = t.media_type
                  , c = t.state || "N/A"
                  , d = t.encoding_status || "N/A"
                  , m = t.reported_times
                  , f = t.is_reviewed
                  , p = "video" === u
                  , y = function(e, t, n, r, a) {
                    var i = []
                      , o = "video" === t.media_type
                      , l = t.reported_times;
                    return n && e.downloadMedia && (o ? i.push({
                        itemType: "open-subpage",
                        text: "Download",
                        icon: "arrow_downward",
                        itemAttr: {
                            className: "visible-only-in-small"
                        },
                        buttonAttr: {
                            className: "change-page",
                            "data-page-id": "videoDownloadOptions"
                        }
                    }) : r && i.push({
                        itemType: "link",
                        link: r,
                        text: "Download",
                        icon: "arrow_downward",
                        itemAttr: {
                            className: "visible-only-in-small"
                        },
                        linkAttr: {
                            target: "_blank",
                            download: t.title
                        }
                    })),
                    o && e.editMedia && i.push({
                        itemType: "open-subpage",
                        text: "Status info",
                        icon: "info",
                        buttonAttr: {
                            className: "change-page",
                            "data-page-id": "mediaStatusInfo"
                        }
                    }),
                    e.reportMedia && (a ? i.push({
                        itemType: "div",
                        text: "Reported",
                        icon: "flag",
                        divAttr: {
                            className: "reported-label loggedin-media-reported"
                        }
                    }) : i.push({
                        itemType: "open-subpage",
                        text: "Report",
                        icon: "flag",
                        buttonAttr: {
                            className: "change-page" + (l ? " loggedin-media-reported" : ""),
                            "data-page-id": "loggedInReportMedia"
                        }
                    })),
                    i
                }(e, t, n, r, i)
                  , h = {};
                return y.length && (h.main = a.createElement("div", {
                    className: "main-options"
                }, a.createElement(F.PopupMain, null, a.createElement(F.NavigationMenuList, {
                    items: y
                })))),
                e.reportMedia && (h.loggedInReportMedia = i ? null : a.createElement("div", {
                    className: "popup-fullscreen"
                }, a.createElement(F.PopupMain, null, a.createElement("span", {
                    className: "popup-fullscreen-overlay"
                }), a.createElement("div", null, a.createElement(we, {
                    mediaUrl: s,
                    submitReportForm: o,
                    cancelReportForm: l
                }))))),
                e.editMedia && (h.mediaStatusInfo = a.createElement("div", {
                    className: "main-options"
                }, a.createElement(F.PopupMain, null, a.createElement("ul", {
                    className: "media-status-info"
                }, a.createElement("li", null, "Media type: ", a.createElement("span", null, u)), a.createElement("li", null, "State: ", a.createElement("span", null, c)), a.createElement("li", null, "Review state: ", a.createElement("span", null, f ? "Is reviewed" : "Pending review")), p ? a.createElement("li", null, "Encoding Status: ", a.createElement("span", null, d)) : null, m ? a.createElement("li", {
                    className: "reports"
                }, "Reports: ", a.createElement("span", null, m)) : null)))),
                n && e.downloadMedia && p && (h.videoDownloadOptions = a.createElement("div", {
                    className: "video-download-options"
                }, a.createElement(F.PopupMain, null, a.createElement(F.NavigationMenuList, {
                    items: ke(t)
                })))),
                h
            }
            n(9628),
            we.propTypes = {
                mediaUrl: u().string.isRequired,
                cancelReportForm: u().func,
                submitReportForm: u().func
            };
            var Me = "more-options active-options";
            function Ae(e) {
                var t = (0,
                B.useUser)().userCan
                  , n = i.SiteContext._currentValue
                  , r = (0,
                m.formatInnerLink)(o.MediaPageStore.get("media-original-url"), n.url)
                  , l = o.MediaPageStore.get("media-data")
                  , s = "video" === l.media_type
                  , u = Ee((0,
                B.usePopup)(), 3)
                  , c = u[0]
                  , d = u[1]
                  , p = u[2]
                  , y = Ee((0,
                a.useState)(!1), 2)
                  , h = y[0]
                  , g = y[1]
                  , v = Ee((0,
                a.useState)(!1), 2)
                  , b = v[0]
                  , S = v[1]
                  , w = Ee((0,
                a.useState)({}), 2)
                  , E = w[0]
                  , P = w[1]
                  , k = Ee((0,
                a.useState)("main"), 2)
                  , _ = k[0]
                  , M = k[1]
                  , A = Ee((0,
                a.useState)(Me), 2)
                  , C = A[0]
                  , N = A[1];
                function x(e) {
                    f.MediaPageActions.reportMedia(e)
                }
                function O() {
                    c.current.toggle()
                }
                function I() {
                    c.current.tryToHide(),
                    setTimeout((function() {
                        f.PageActions.addNotification("Media Reported", "reportedMedia"),
                        S(!0),
                        o.MediaPageStore.removeListener("reported_media", I)
                    }
                    ), 100)
                }
                return (0,
                a.useEffect)((function() {
                    b || (h ? o.MediaPageStore.on("reported_media", I) : o.MediaPageStore.removeListener("reported_media", I))
                }
                ), [h]),
                (0,
                a.useEffect)((function() {
                    g(Object.keys(E).length && e.allowDownload && t.downloadMedia)
                }
                ), [E]),
                (0,
                a.useEffect)((function() {
                    var n = Me;
                    e.allowDownload && t.downloadMedia && "videoDownloadOptions" === _ && (n += " video-downloads"),
                    1 === Object.keys(E).length && e.allowDownload && t.downloadMedia && (s || r) && (n += " visible-only-in-small"),
                    N(n)
                }
                ), [_]),
                (0,
                a.useEffect)((function() {
                    P(_e(t, l, e.allowDownload, r, b, x, O))
                }
                ), [b]),
                (0,
                a.useEffect)((function() {
                    return P(_e(t, l, e.allowDownload, r, b, x, O)),
                    function() {
                        h && !b && o.MediaPageStore.removeListener("reported_media", I)
                    }
                }
                ), []),
                h ? a.createElement("div", {
                    className: C
                }, a.createElement(p, {
                    contentRef: c
                }, a.createElement("span", null, a.createElement(F.CircleIconButton, {
                    type: "button"
                }, a.createElement(F.MaterialIcon, {
                    type: "more_horiz"
                })))), a.createElement("div", {
                    className: "nav-page-" + _
                }, a.createElement(d, {
                    contentRef: c,
                    hideCallback: function() {
                        M("main")
                    }
                }, a.createElement(F.NavigationContentApp, {
                    pageChangeCallback: function(e) {
                        M(e)
                    },
                    initPage: _,
                    focusFirstItemOnPageChange: !1,
                    pages: E,
                    pageChangeSelector: ".change-page",
                    pageIdSelectorAttr: "data-page-id"
                })))) : null
            }
            Ae.propTypes = {
                allowDownload: u().bool.isRequired
            },
            Ae.defaultProps = {
                allowDownload: !1
            };
            var Ce = n(7642);
            function Ne(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return xe(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xe(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function xe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function Oe(e) {
                return e.renderDate ? a.createElement("label", null, a.createElement("input", {
                    type: "checkbox",
                    checked: e.isChecked,
                    onChange: function(t) {
                        t.persist(),
                        e.isChecked ? f.MediaPageActions.removeMediaFromPlaylist(e.playlistId, o.MediaPageStore.get("media-id")) : f.MediaPageActions.addMediaToPlaylist(e.playlistId, o.MediaPageStore.get("media-id"))
                    }
                }), a.createElement("span", null, e.title)) : null
            }
            function Ie(e) {
                var t = (0,
                a.useRef)(null)
                  , n = (0,
                a.useRef)(null)
                  , r = Ne((0,
                a.useState)(new Date), 2)
                  , i = r[0]
                  , l = r[1]
                  , s = Ne((0,
                a.useState)(o.MediaPageStore.get("playlists")), 2)
                  , u = s[0]
                  , c = s[1]
                  , d = Ne((0,
                a.useState)(!1), 2)
                  , m = d[0]
                  , p = d[1];
                function y() {
                    w()
                }
                function h() {
                    c(o.MediaPageStore.get("playlists")),
                    l(new Date)
                }
                function g() {
                    c(o.MediaPageStore.get("playlists")),
                    l(new Date),
                    setTimeout((function() {
                        f.PageActions.addNotification("Media added to playlist", "playlistMediaAdditionComplete")
                    }
                    ), 100)
                }
                function v() {
                    setTimeout((function() {
                        f.PageActions.addNotification("Media's addition to playlist failed", "playlistMediaAdditionFail")
                    }
                    ), 100)
                }
                function b() {
                    c(o.MediaPageStore.get("playlists")),
                    l(new Date),
                    setTimeout((function() {
                        f.PageActions.addNotification("Media removed from playlist", "playlistMediaRemovalComplete")
                    }
                    ), 100)
                }
                function S() {
                    setTimeout((function() {
                        f.PageActions.addNotification("Media's removal from playlist failed", "playlistMediaaRemovalFail")
                    }
                    ), 100)
                }
                function w() {
                    null !== n.current && (n.current.style.maxHeight = window.innerHeight - 74 - (t.current.offsetHeight - n.current.offsetHeight) + "px")
                }
                function E() {
                    p(!m),
                    w()
                }
                return (0,
                a.useEffect)((function() {
                    w()
                }
                )),
                (0,
                a.useEffect)((function() {
                    return o.PageStore.on("window_resize", y),
                    o.MediaPageStore.on("playlists_load", h),
                    o.MediaPageStore.on("media_playlist_addition_completed", g),
                    o.MediaPageStore.on("media_playlist_addition_failed", v),
                    o.MediaPageStore.on("media_playlist_removal_completed", b),
                    o.MediaPageStore.on("media_playlist_removal_failed", S),
                    function() {
                        o.PageStore.removeListener("window_resize", y),
                        o.MediaPageStore.removeListener("playlists_load", h),
                        o.MediaPageStore.removeListener("media_playlist_addition_completed", g),
                        o.MediaPageStore.removeListener("media_playlist_addition_failed", v),
                        o.MediaPageStore.removeListener("media_playlist_removal_completed", b),
                        o.MediaPageStore.removeListener("media_playlist_removal_failed", S)
                    }
                }
                ), []),
                a.createElement("div", {
                    ref: t,
                    className: "saveto-popup"
                }, a.createElement("div", {
                    className: "saveto-title"
                }, "Save to...", a.createElement(F.CircleIconButton, {
                    type: "button",
                    onClick: function() {
                        p(!1),
                        void 0 !== e.triggerPopupClose && e.triggerPopupClose()
                    }
                }, a.createElement(F.MaterialIcon, {
                    type: "close"
                }))), u.length ? a.createElement("div", {
                    ref: n,
                    className: "saveto-select"
                }, function() {
                    for (var e = o.MediaPageStore.get("media-id"), t = [], n = 0; n < u.length; )
                        t.push(a.createElement("div", {
                            key: "playlist_" + u[n].playlist_id
                        }, a.createElement(Oe, {
                            renderDate: i,
                            title: u[n].title,
                            privacy: u[n].status,
                            isChecked: -1 < u[n].media_list.indexOf(e),
                            playlistId: u[n].playlist_id
                        }))),
                        n += 1;
                    return t
                }()) : null, m ? a.createElement("div", {
                    className: "saveto-new-playlist"
                }, a.createElement(Ce.A, {
                    onCancel: E,
                    onPlaylistSave: function(e) {
                        f.MediaPageActions.addNewPlaylist(e),
                        E()
                    }
                })) : a.createElement(F.CircleIconButton, {
                    className: "saveto-create",
                    type: "button",
                    onClick: E
                }, a.createElement(F.MaterialIcon, {
                    type: "add"
                }), "Create a new playlist"))
            }
            function Te(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return Ve(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ve(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Ve(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function je(e) {
                var t, n = Te((0,
                B.usePopup)(), 3), r = n[0], i = n[1], o = n[2], l = Te((0,
                a.useState)("selectPlaylist"), 2), s = l[0], u = l[1];
                return a.createElement("div", {
                    className: "save"
                }, a.createElement(o, {
                    contentRef: r
                }, a.createElement("button", null, a.createElement(F.CircleIconButton, {
                    type: "span"
                }, a.createElement(F.MaterialIcon, {
                    type: "playlist_add"
                })), a.createElement("span", null, "SAVE"))), a.createElement(i, {
                    contentRef: r
                }, a.createElement(F.NavigationContentApp, {
                    initPage: s,
                    pageChangeSelector: ".change-page",
                    pageIdSelectorAttr: "data-page-id",
                    pages: (t = function() {
                        r.current.toggle()
                    }
                    ,
                    {
                        selectPlaylist: a.createElement("div", {
                            className: "popup-fullscreen"
                        }, a.createElement(F.PopupMain, null, a.createElement("span", {
                            className: "popup-fullscreen-overlay"
                        }), a.createElement(Ie, {
                            triggerPopupClose: t
                        }))),
                        createPlaylist: a.createElement("div", {
                            className: "popup-fullscreen"
                        }, a.createElement(F.PopupMain, null, a.createElement("span", {
                            className: "popup-fullscreen-overlay"
                        })))
                    }),
                    focusFirstItemOnPageChange: !1,
                    pageChangeCallback: u
                })))
            }
            function Re(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return Le(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Le(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Le(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function De(e) {
                var t = o.PageStore.get("config-options").embedded.video.dimensions
                  , n = (0,
                a.useContext)(i.LinksContext)
                  , r = (0,
                a.useRef)(null)
                  , l = (0,
                a.useRef)(null)
                  , s = (0,
                a.useRef)(null)
                  , u = (0,
                a.useRef)(null)
                  , c = (0,
                a.useRef)(null)
                  , d = Re((0,
                a.useState)(window.innerHeight - 144 + 56), 2)
                  , m = d[0]
                  , p = d[1]
                  , y = Re((0,
                a.useState)(!1), 2)
                  , h = y[0]
                  , g = y[1]
                  , v = Re((0,
                a.useState)("16:9"), 2)
                  , b = v[0]
                  , S = v[1]
                  , w = Re((0,
                a.useState)(t.width), 2)
                  , E = w[0]
                  , P = w[1]
                  , k = Re((0,
                a.useState)(t.widthUnit), 2)
                  , _ = k[0]
                  , M = k[1]
                  , A = Re((0,
                a.useState)(t.height), 2)
                  , C = A[0]
                  , N = A[1]
                  , x = Re((0,
                a.useState)(t.heightUnit), 2)
                  , O = x[0]
                  , I = x[1]
                  , T = Re((0,
                a.useState)(60), 2)
                  , V = T[0]
                  , j = T[1]
                  , L = Re((0,
                a.useState)(60), 2)
                  , D = L[0]
                  , U = L[1]
                  , B = Re((0,
                a.useState)([{
                    key: "px",
                    label: "px"
                }, {
                    key: "percent",
                    label: "%"
                }]), 2)
                  , q = B[0]
                  , z = B[1];
                function H() {
                    p(window.innerHeight - 144 + 56),
                    j(s.current.offsetHeight),
                    U(c.current.offsetHeight)
                }
                function W() {
                    setTimeout((function() {
                        f.PageActions.addNotification("Embed media code copied to clipboard", "clipboardEmbedMediaCodeCopy")
                    }
                    ), 100)
                }
                return (0,
                a.useEffect)((function() {
                    p(window.innerHeight - 144 + 56),
                    j(s.current.offsetHeight),
                    U(c.current.offsetHeight)
                }
                )),
                (0,
                a.useEffect)((function() {
                    return o.PageStore.on("window_resize", H),
                    o.MediaPageStore.on("copied_embed_media_code", W),
                    function() {
                        o.PageStore.removeListener("window_resize", H),
                        o.MediaPageStore.removeListener("copied_embed_media_code", W)
                    }
                }
                ), []),
                a.createElement("div", {
                    className: "share-embed",
                    style: {
                        maxHeight: m + "px"
                    }
                }, a.createElement("div", {
                    className: "share-embed-inner"
                }, a.createElement("div", {
                    className: "on-left"
                }, a.createElement("div", {
                    className: "media-embed-wrap"
                }, a.createElement(R, {
                    data: o.MediaPageStore.get("media-data"),
                    inEmbed: !0
                }))), a.createElement("div", {
                    ref: l,
                    className: "on-right"
                }, a.createElement("div", {
                    ref: s,
                    className: "on-right-top"
                }, a.createElement("div", {
                    className: "on-right-top-inner"
                }, a.createElement("span", {
                    className: "ttl"
                }, "Embed Video"), a.createElement(F.CircleIconButton, {
                    type: "button",
                    onClick: function() {
                        void 0 !== e.triggerPopupClose && e.triggerPopupClose()
                    }
                }, a.createElement(F.MaterialIcon, {
                    type: "close"
                })))), a.createElement("div", {
                    ref: u,
                    className: "on-right-middle",
                    style: {
                        top: V + "px",
                        bottom: D + "px"
                    }
                }, a.createElement("textarea", {
                    readOnly: !0,
                    value: '<iframe width="' + ("percent" === _ ? E + "%" : E) + '" height="' + ("percent" === O ? C + "%" : C) + '" src="' + n.embed + o.MediaPageStore.get("media-id") + '" frameborder="0" allowfullscreen></iframe>'
                }), a.createElement("div", {
                    className: "iframe-config"
                }, a.createElement("div", {
                    className: "iframe-config-options-title"
                }, "Embed options"), a.createElement("div", {
                    className: "iframe-config-option"
                }, a.createElement("div", {
                    className: "option-content"
                }, a.createElement("div", {
                    className: "ratio-options"
                }, a.createElement("div", {
                    className: "options-group"
                }, a.createElement("label", {
                    style: {
                        minHeight: "36px"
                    }
                }, a.createElement("input", {
                    type: "checkbox",
                    checked: h,
                    onChange: function() {
                        var e = !h
                          , t = b.split(":")
                          , n = t[0]
                          , r = t[1];
                        g(e),
                        M(e ? "px" : _),
                        I(e ? "px" : O),
                        N(e ? parseInt(E * r / n, 10) : C),
                        z(e ? [{
                            key: "px",
                            label: "px"
                        }] : [{
                            key: "px",
                            label: "px"
                        }, {
                            key: "percent",
                            label: "%"
                        }])
                    }
                }), "Keep aspect ratio")), h ? a.createElement("div", {
                    className: "options-group"
                }, a.createElement("select", {
                    ref: r,
                    onChange: function() {
                        var e = r.current.value
                          , t = e.split(":")
                          , n = t[0]
                          , a = t[1];
                        S(e),
                        N(h ? parseInt(E * a / n, 10) : C)
                    },
                    value: b
                }, a.createElement("optgroup", {
                    label: "Horizontal orientation"
                }, a.createElement("option", {
                    value: "16:9"
                }, "16:9"), a.createElement("option", {
                    value: "4:3"
                }, "4:3"), a.createElement("option", {
                    value: "3:2"
                }, "3:2")), a.createElement("optgroup", {
                    label: "Vertical orientation"
                }, a.createElement("option", {
                    value: "9:16"
                }, "9:16"), a.createElement("option", {
                    value: "3:4"
                }, "3:4"), a.createElement("option", {
                    value: "2:3"
                }, "2:3")))) : null), a.createElement("br", null), a.createElement("div", {
                    className: "options-group"
                }, a.createElement(F.NumericInputWithUnit, {
                    valueCallback: function(e) {
                        e = "" === e ? 0 : e;
                        var t = b.split(":")
                          , n = t[0]
                          , r = t[1];
                        P(e),
                        N(h ? parseInt(e * r / n, 10) : C)
                    },
                    unitCallback: function(e) {
                        M(e)
                    },
                    label: "Width",
                    defaultValue: parseInt(E, 10),
                    defaultUnit: _,
                    minValue: 1,
                    maxValue: 99999,
                    units: q
                })), a.createElement("div", {
                    className: "options-group"
                }, a.createElement(F.NumericInputWithUnit, {
                    valueCallback: function(e) {
                        e = "" === e ? 0 : e;
                        var t = b.split(":")
                          , n = t[0]
                          , r = t[1];
                        N(e),
                        P(h ? parseInt(e * n / r, 10) : E)
                    },
                    unitCallback: function(e) {
                        I(e)
                    },
                    label: "Height",
                    defaultValue: parseInt(C, 10),
                    defaultUnit: O,
                    minValue: 1,
                    maxValue: 99999,
                    units: q
                })))))), a.createElement("div", {
                    ref: c,
                    className: "on-right-bottom"
                }, a.createElement("button", {
                    onClick: function() {
                        f.MediaPageActions.copyEmbedMediaCode(u.current.querySelector("textarea"))
                    }
                }, "COPY")))))
            }
            Oe.propTypes = {
                playlistId: u().string,
                isChecked: u().bool,
                title: u().string
            },
            Oe.defaultProps = {
                isChecked: !1,
                title: ""
            },
            Ie.propTypes = {
                triggerPopupClose: u().func
            },
            n(8833),
            n(815),
            n(9174),
            De.propTypes = {
                triggerPopupClose: u().func
            },
            n(5777);
            var Ue = n(3458);
            function Be(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return Fe(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Fe(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Fe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function qe(e) {
                var t = e.onClick;
                return a.createElement("span", {
                    className: "next-slide"
                }, a.createElement(F.CircleIconButton, {
                    buttonShadow: !0,
                    onClick: t
                }, a.createElement("i", {
                    className: "material-icons"
                }, "keyboard_arrow_right")))
            }
            function ze(e) {
                var t = e.onClick;
                return a.createElement("span", {
                    className: "previous-slide"
                }, a.createElement(F.CircleIconButton, {
                    buttonShadow: !0,
                    onClick: t
                }, a.createElement("i", {
                    className: "material-icons"
                }, "keyboard_arrow_left")))
            }
            function He() {
                return {
                    maxFormContentHeight: window.innerHeight - 196,
                    maxPopupWidth: 518 > window.innerWidth - 80 ? window.innerWidth - 80 : null
                }
            }
            function We(e) {
                var t = (0,
                a.useRef)(null)
                  , n = (0,
                a.useRef)(null)
                  , r = o.MediaPageStore.get("media-url")
                  , l = Be((0,
                a.useState)(null), 2)
                  , s = l[0]
                  , u = l[1]
                  , c = Be((0,
                a.useState)({
                    prev: !1,
                    next: !1
                }), 2)
                  , d = c[0]
                  , m = c[1]
                  , p = Be((0,
                a.useState)(He()), 2)
                  , y = p[0]
                  , h = p[1]
                  , g = Be((0,
                a.useState)(function() {
                    var e = function() {
                        for (var e = i.ShareOptionsContext._currentValue, t = o.MediaPageStore.get("media-url"), n = o.MediaPageStore.get("media-data").title, r = {}, a = 0; a < e.length; ) {
                            switch (e[a]) {
                            case "embed":
                                "video" === o.MediaPageStore.get("media-data").media_type && (r[e[a]] = {});
                                break;
                            case "email":
                                r[e[a]] = {
                                    title: "Email",
                                    shareUrl: "mailto:?body=" + t
                                };
                                break;
                            case "fb":
                                r[e[a]] = {
                                    title: "Facebook",
                                    shareUrl: "https://www.facebook.com/sharer.php?u=" + t
                                };
                                break;
                            case "tw":
                                r[e[a]] = {
                                    title: "Twitter",
                                    shareUrl: "https://twitter.com/intent/tweet?url=" + t
                                };
                                break;
                            case "reddit":
                                r[e[a]] = {
                                    title: "reddit",
                                    shareUrl: "https://reddit.com/submit?url=" + t + "&title=" + n
                                };
                                break;
                            case "tumblr":
                                r[e[a]] = {
                                    title: "Tumblr",
                                    shareUrl: "https://www.tumblr.com/widgets/share/tool?canonicalUrl=" + t + "&title=" + n
                                };
                                break;
                            case "pinterest":
                                r[e[a]] = {
                                    title: "Pinterest",
                                    shareUrl: "http://pinterest.com/pin/create/link/?url=" + t
                                };
                                break;
                            case "vk":
                                r[e[a]] = {
                                    title: "ВКонтакте",
                                    shareUrl: "http://vk.com/share.php?url=" + t + "&title=" + n
                                };
                                break;
                            case "linkedin":
                                r[e[a]] = {
                                    title: "LinkedIn",
                                    shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url=" + t
                                };
                                break;
                            case "mix":
                                r[e[a]] = {
                                    title: "Mix",
                                    shareUrl: "https://mix.com/add?url=" + t
                                };
                                break;
                            case "whatsapp":
                                r[e[a]] = {
                                    title: "WhatsApp",
                                    shareUrl: "whatsapp://send?text=" + t
                                };
                                break;
                            case "telegram":
                                r[e[a]] = {
                                    title: "Telegram",
                                    shareUrl: "https://t.me/share/url?url=" + t + "&text=" + n
                                }
                            }
                            a += 1
                        }
                        return r
                    }()
                      , t = [];
                    for (var n in e)
                        e.hasOwnProperty(n) && ("embed" === n ? t.push(a.createElement("div", {
                            key: "share-" + n,
                            className: "sh-option share-" + n + "-opt"
                        }, a.createElement("button", {
                            className: "sh-option change-page",
                            "data-page-id": "shareEmbed"
                        }, a.createElement("span", null, a.createElement("i", {
                            className: "material-icons"
                        }, "code")), a.createElement("span", null, "Embed")))) : "whatsapp" === n ? t.push(a.createElement("div", {
                            key: "share-" + n,
                            className: "sh-option share-" + n
                        }, a.createElement("a", {
                            href: e[n].shareUrl,
                            title: "",
                            target: "_blank",
                            "data-action": "share/whatsapp/share",
                            rel: "noreferrer"
                        }, a.createElement("span", null), a.createElement("span", null, e[n].title)))) : "email" === n ? t.push(a.createElement("div", {
                            key: "share-email",
                            className: "sh-option share-email"
                        }, a.createElement("a", {
                            href: e[n].shareUrl,
                            title: ""
                        }, a.createElement("span", null, a.createElement("i", {
                            className: "material-icons"
                        }, "email")), a.createElement("span", null, e[n].title)))) : t.push(a.createElement("div", {
                            key: "share-" + n,
                            className: "sh-option share-" + n
                        }, a.createElement("a", {
                            href: e[n].shareUrl,
                            title: "",
                            target: "_blank",
                            rel: "noreferrer"
                        }, a.createElement("span", null), a.createElement("span", null, e[n].title)))));
                    return t
                }()), 1)[0]
                  , v = Be((0,
                a.useState)(0), 2)
                  , b = v[0]
                  , S = v[1]
                  , w = Be((0,
                a.useState)(0), 2)
                  , E = w[0]
                  , P = w[1]
                  , k = Be((0,
                a.useState)(!1), 2)
                  , _ = k[0]
                  , M = k[1]
                  , A = Be((0,
                a.useState)(r), 2)
                  , C = A[0]
                  , N = A[1];
                function x() {
                    h(He())
                }
                function O() {
                    setTimeout((function() {
                        f.PageActions.addNotification("Link copied to clipboard", "clipboardLinkCopy")
                    }
                    ), 100)
                }
                function I() {
                    s.scrollToCurrentSlide(),
                    m({
                        prev: s.hasPreviousSlide(),
                        next: s.hasNextSlide()
                    })
                }
                return (0,
                a.useEffect)((function() {
                    u(new Ue.Z(n.current,".sh-option"))
                }
                ), [g]),
                (0,
                a.useEffect)((function() {
                    s && (s.updateDataStateOnResize(g.length, !0, !0),
                    I())
                }
                ), [y, s]),
                (0,
                a.useEffect)((function() {
                    o.PageStore.on("window_resize", x),
                    o.MediaPageStore.on("copied_media_link", O);
                    var e, t, n, r, a, i = null === (e = document.getElementsByTagName("video")[0]) || void 0 === e ? void 0 : e.currentTime;
                    return S(i),
                    P((a = (t = parseInt(i, 10)) - 3600 * (n = Math.floor(t / 3600)) - 60 * (r = Math.floor((t - 3600 * n) / 60)),
                    n < 10 && (n = "0" + n),
                    r < 10 && (r = "0" + r),
                    a < 10 && (a = "0" + a),
                    n >= 1 ? n + ":" + r + ":" + a : r + ":" + a)),
                    function() {
                        o.PageStore.removeListener("window_resize", x),
                        o.MediaPageStore.removeListener("copied_media_link", O),
                        u(null)
                    }
                }
                ), []),
                a.createElement("div", {
                    ref: t,
                    style: null !== y.maxPopupWidth ? {
                        maxWidth: y.maxPopupWidth + "px"
                    } : null
                }, a.createElement("div", {
                    className: "scrollable-content",
                    style: null !== y.maxFormContentHeight ? {
                        maxHeight: y.maxFormContentHeight + "px"
                    } : null
                }, a.createElement("div", {
                    className: "share-popup-title"
                }, "Share media"), g.length ? a.createElement("div", {
                    className: "share-options"
                }, d.prev ? a.createElement(ze, {
                    onClick: function() {
                        s.previousSlide(),
                        I()
                    }
                }) : null, a.createElement("div", {
                    ref: n,
                    className: "share-options-inner"
                }, g), d.next ? a.createElement(qe, {
                    onClick: function() {
                        s.nextSlide(),
                        I()
                    }
                }) : null) : null), a.createElement("div", {
                    className: "copy-field"
                }, a.createElement("div", null, a.createElement("input", {
                    type: "text",
                    readOnly: !0,
                    value: C
                }), a.createElement("button", {
                    onClick: function() {
                        f.MediaPageActions.copyShareLink(t.current.querySelector(".copy-field input"))
                    }
                }, "COPY"))), a.createElement("div", {
                    className: "start-at"
                }, a.createElement("label", null, a.createElement("input", {
                    type: "checkbox",
                    name: "start-at-checkbox",
                    id: "id-start-at-checkbox",
                    checked: _,
                    onChange: function() {
                        var e;
                        M(!_),
                        e = _ ? r : r + "&t=" + Math.trunc(b),
                        N(e)
                    }
                }), "Start at ", E)))
            }
            function $e(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return Qe(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qe(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Qe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function Ye(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function Ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ye(Object(n), !0).forEach((function(t) {
                        Ge(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ye(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function Ge(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function Je() {
                return {
                    shareOptions: a.createElement("div", {
                        className: "popup-fullscreen"
                    }, a.createElement(F.PopupMain, null, a.createElement("span", {
                        className: "popup-fullscreen-overlay"
                    }), a.createElement(We, null)))
                }
            }
            function Ke(e) {
                var t, n = $e((0,
                B.usePopup)(), 3), r = n[0], i = n[1], o = n[2], l = $e((0,
                a.useState)("shareOptions"), 2), s = l[0], u = l[1];
                return a.createElement("div", {
                    className: "share"
                }, a.createElement(o, {
                    contentRef: r
                }, a.createElement("button", null, a.createElement(F.CircleIconButton, {
                    type: "span"
                }, a.createElement(F.MaterialIcon, {
                    type: "share"
                })), a.createElement("span", null, "SHARE"))), a.createElement(i, {
                    contentRef: r,
                    hideCallback: function() {
                        u("shareOptions")
                    }
                }, a.createElement(F.NavigationContentApp, {
                    initPage: s,
                    pageChangeSelector: ".change-page",
                    pageIdSelectorAttr: "data-page-id",
                    pages: e.isVideo ? (t = function() {
                        r.current.toggle()
                    }
                    ,
                    Ze(Ze({}, Je()), {}, {
                        shareEmbed: a.createElement("div", {
                            className: "popup-fullscreen share-embed-popup"
                        }, a.createElement(F.PopupMain, null, a.createElement("span", {
                            className: "popup-fullscreen-overlay"
                        }), a.createElement(De, {
                            triggerPopupClose: t
                        })))
                    })) : Je(),
                    focusFirstItemOnPageChange: !1,
                    pageChangeCallback: function(e) {
                        u(e)
                    }
                })))
            }
            function Xe(e) {
                return a.createElement("div", {
                    className: "download hidden-only-in-small"
                }, a.createElement("a", {
                    href: e.link,
                    target: "_blank",
                    download: e.title,
                    title: "Download",
                    rel: "noreferrer"
                }, a.createElement(F.CircleIconButton, {
                    type: "span"
                }, a.createElement(F.MaterialIcon, {
                    type: "arrow_downward"
                })), a.createElement("span", null, "DOWNLOAD")))
            }
            function et(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return tt(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tt(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function tt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function nt() {
                var e, t, n = o.MediaPageStore.get("media-data"), r = (n.title,
                n.encodings_info), a = {};
                for (e in r)
                    if (r.hasOwnProperty(e) && Object.keys(r[e]).length)
                        for (t in r[e])
                            r[e].hasOwnProperty(t) && "success" === r[e][t].status && 100 === r[e][t].progress && (a[r[e][t].title] = {
                                text: e + " - " + t.toUpperCase() + " (" + r[e][t].size + ")",
                                link: (0,
                                m.formatInnerLink)(r[e][t].url, i.SiteContext._currentValue.url),
                                linkAttr: {
                                    target: "_blank",
                                    download: n.title + "_" + e + "_" + t.toUpperCase()
                                }
                            });
                return a.original_media_url = {
                    text: "Original file (" + n.size + ")",
                    link: (0,
                    m.formatInnerLink)(n.original_media_url, i.SiteContext._currentValue.url),
                    linkAttr: {
                        target: "_blank",
                        download: n.title
                    }
                },
                Object.values(a)
            }
            function rt(e) {
                var t = et((0,
                B.usePopup)(), 3)
                  , n = t[0]
                  , r = t[1]
                  , i = t[2]
                  , o = et((0,
                a.useState)("main"), 2)
                  , l = o[0];
                return o[1],
                a.createElement("div", {
                    className: "video-downloads hidden-only-in-small"
                }, a.createElement(i, {
                    contentRef: n
                }, a.createElement("button", null, a.createElement(F.CircleIconButton, {
                    type: "span"
                }, a.createElement(F.MaterialIcon, {
                    type: "arrow_downward"
                })), a.createElement("span", null, "DOWNLOAD"))), a.createElement("div", {
                    className: "nav-page-" + l
                }, a.createElement(r, {
                    contentRef: n
                }, a.createElement(F.NavigationContentApp, {
                    pageChangeCallback: null,
                    initPage: "main",
                    focusFirstItemOnPageChange: !1,
                    pages: {
                        main: a.createElement("div", {
                            className: "main-options"
                        }, a.createElement(F.PopupMain, null, a.createElement(F.NavigationMenuList, {
                            items: nt()
                        })))
                    },
                    pageChangeSelector: ".change-page",
                    pageIdSelectorAttr: "data-page-id"
                }))))
            }
            function at(e) {
                return (at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function it(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function ot(e, t) {
                return (ot = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function lt(e, t) {
                return !t || "object" !== at(t) && "function" != typeof t ? st(e) : t
            }
            function st(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function ut(e) {
                return (ut = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            Xe.propTypes = {
                link: u().string.isRequired,
                title: u().string.isRequired
            };
            var ct = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && ot(e, t)
                }(u, e);
                var t, n, r, l, s = (r = u,
                l = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = ut(r);
                    if (l) {
                        var n = ut(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return lt(this, e)
                }
                );
                function u(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, u),
                    (t = s.call(this, e)).state = {
                        likedMedia: o.MediaPageStore.get("user-liked-media"),
                        dislikedMedia: o.MediaPageStore.get("user-disliked-media")
                    },
                    t.downloadLink = "video" !== o.MediaPageStore.get("media-type") ? (0,
                    m.formatInnerLink)(o.MediaPageStore.get("media-original-url"), i.SiteContext._currentValue.url) : null,
                    t.updateStateValues = t.updateStateValues.bind(st(t)),
                    t
                }
                return t = u,
                (n = [{
                    key: "componentDidMount",
                    value: function() {
                        o.MediaPageStore.on("liked_media", this.updateStateValues),
                        o.MediaPageStore.on("unliked_media", this.updateStateValues),
                        o.MediaPageStore.on("disliked_media", this.updateStateValues),
                        o.MediaPageStore.on("undisliked_media", this.updateStateValues);
                        var e = document.querySelectorAll("[data-tooltip]");
                        e.length && e.forEach((function(e) {
                            return function(e) {
                                var t = document.body
                                  , n = document.createElement("span");
                                function r() {
                                    var t = e.getBoundingClientRect();
                                    n.style.top = t.top - (0 + n.offsetHeight) + "px",
                                    n.style.left = t.left + "px"
                                }
                                n.innerText = e.getAttribute("data-tooltip"),
                                n.setAttribute("class", "tooltip"),
                                e.removeAttribute("data-tooltip"),
                                e.addEventListener("mouseenter", (function() {
                                    var a = e.getBoundingClientRect();
                                    t.appendChild(n),
                                    n.style.top = a.top - (0 + n.offsetHeight) + "px",
                                    n.style.left = a.left + "px",
                                    document.addEventListener("scroll", r)
                                }
                                )),
                                e.addEventListener("mouseleave", (function() {
                                    t.removeChild(n),
                                    n.style.top = "",
                                    n.style.left = "",
                                    document.removeEventListener("scroll", r)
                                }
                                ))
                            }(e)
                        }
                        ))
                    }
                }, {
                    key: "updateStateValues",
                    value: function() {
                        this.setState({
                            likedMedia: o.MediaPageStore.get("user-liked-media"),
                            dislikedMedia: o.MediaPageStore.get("user-disliked-media")
                        })
                    }
                }, {
                    key: "mediaCategories",
                    value: function(e) {
                        if (void 0 === this.props.categories || null === this.props.categories || !this.props.categories.length)
                            return null;
                        for (var t = 0, n = []; t < this.props.categories.length; )
                            n.push(a.createElement("span", {
                                key: t
                            }, a.createElement("a", {
                                href: (0,
                                m.formatInnerLink)(this.props.categories[t].url, i.SiteContext._currentValue.url),
                                title: this.props.categories[t].title
                            }, this.props.categories[t].title))),
                            t += 1;
                        return a.createElement("div", {
                            className: "media-under-title-categories" + (e ? " over-title" : "")
                        }, n)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = o.PageStore.get("config-options").pages.media.displayViews && void 0 !== this.props.views
                          , t = o.MediaPageStore.get("media-data").state
                          , n = "";
                        switch (t) {
                        case "private":
                            n = "The site admins have to make its access public";
                            break;
                        case "unlisted":
                            n = "The site admins have to make it appear on listings"
                        }
                        return a.createElement("div", {
                            className: "media-title-banner"
                        }, e && o.PageStore.get("config-options").pages.media.categoriesWithTitle ? this.mediaCategories(!0) : null, void 0 !== this.props.title ? a.createElement("h1", null, this.props.title) : null, "public" !== t ? a.createElement("div", {
                            className: "media-labels-area"
                        }, a.createElement("div", {
                            className: "media-labels-area-inner"
                        }, a.createElement("span", {
                            className: "media-label-state"
                        }, a.createElement("span", null, t)), a.createElement("span", {
                            className: "helper-icon",
                            "data-tooltip": n
                        }, a.createElement("i", {
                            className: "material-icons"
                        }, "help_outline")))) : null, a.createElement("div", {
                            className: "media-views-actions" + (this.state.likedMedia ? " liked-media" : "") + (this.state.dislikedMedia ? " disliked-media" : "")
                        }, !e && o.PageStore.get("config-options").pages.media.categoriesWithTitle ? this.mediaCategories() : null, e ? a.createElement("div", {
                            className: "media-views"
                        }, (0,
                        m.formatViewsNumber)(this.props.views, !0), " ", 1 >= this.props.views ? "view" : "views") : null, a.createElement("div", {
                            className: "media-actions"
                        }, a.createElement("div", null, i.MemberContext._currentValue.can.likeMedia ? a.createElement(be, null) : null, i.MemberContext._currentValue.can.dislikeMedia ? a.createElement(he, null) : null, i.MemberContext._currentValue.can.shareMedia ? a.createElement(Ke, {
                            isVideo: !1
                        }) : null, !i.MemberContext._currentValue.is.anonymous && i.MemberContext._currentValue.can.saveMedia && -1 < i.PlaylistsContext._currentValue.mediaTypes.indexOf(o.MediaPageStore.get("media-type")) ? a.createElement(je, null) : null, this.props.allowDownload && i.MemberContext._currentValue.can.downloadMedia ? this.downloadLink ? a.createElement(Xe, {
                            link: this.downloadLink,
                            title: this.props.title
                        }) : a.createElement(rt, null) : null, a.createElement(Ae, {
                            allowDownload: this.props.allowDownload
                        })))))
                    }
                }]) && it(t.prototype, n),
                u
            }(a.PureComponent);
            function dt(e) {
                return (dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function mt(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function ft(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function pt(e, t) {
                return (pt = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function yt(e, t) {
                return !t || "object" !== dt(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function ht(e) {
                return (ht = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            ct.propTypes = {
                allowDownload: u().bool.isRequired
            },
            ct.defaultProps = {
                allowDownload: !1
            };
            var gt = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && pt(e, t)
                }(u, e);
                var t, n, r, l, s = (r = u,
                l = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = ht(r);
                    if (l) {
                        var n = ht(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return yt(this, e)
                }
                );
                function u() {
                    return mt(this, u),
                    s.apply(this, arguments)
                }
                return t = u,
                (n = [{
                    key: "render",
                    value: function() {
                        var e = o.PageStore.get("config-options").pages.media.displayViews && void 0 !== this.props.views
                          , t = o.MediaPageStore.get("media-data").state
                          , n = "";
                        switch (t) {
                        case "private":
                            n = "The site admins have to make its access public";
                            break;
                        case "unlisted":
                            n = "The site admins have to make it appear on listings"
                        }
                        return a.createElement("div", {
                            className: "media-title-banner"
                        }, e && o.PageStore.get("config-options").pages.media.categoriesWithTitle ? this.mediaCategories(!0) : null, void 0 !== this.props.title ? a.createElement("h1", null, this.props.title) : null, "public" !== t ? a.createElement("div", {
                            className: "media-labels-area"
                        }, a.createElement("div", {
                            className: "media-labels-area-inner"
                        }, a.createElement("span", {
                            className: "media-label-state"
                        }, a.createElement("span", null, t)), a.createElement("span", {
                            className: "helper-icon",
                            "data-tooltip": n
                        }, a.createElement("i", {
                            className: "material-icons"
                        }, "help_outline")))) : null, a.createElement("div", {
                            className: "media-views-actions" + (this.state.likedMedia ? " liked-media" : "") + (this.state.dislikedMedia ? " disliked-media" : "")
                        }, !e && o.PageStore.get("config-options").pages.media.categoriesWithTitle ? this.mediaCategories() : null, e ? a.createElement("div", {
                            className: "media-views"
                        }, (0,
                        m.formatViewsNumber)(this.props.views, !0), " ", 1 >= this.props.views ? "view" : "views") : null, a.createElement("div", {
                            className: "media-actions"
                        }, a.createElement("div", null, i.MemberContext._currentValue.can.likeMedia ? a.createElement(be, null) : null, i.MemberContext._currentValue.can.dislikeMedia ? a.createElement(he, null) : null, i.MemberContext._currentValue.can.shareMedia ? a.createElement(Ke, {
                            isVideo: !0
                        }) : null, !i.MemberContext._currentValue.is.anonymous && i.MemberContext._currentValue.can.saveMedia && -1 < i.PlaylistsContext._currentValue.mediaTypes.indexOf(o.MediaPageStore.get("media-type")) ? a.createElement(je, null) : null, this.props.allowDownload && i.MemberContext._currentValue.can.downloadMedia ? this.downloadLink ? a.createElement(Xe, {
                            link: this.downloadLink,
                            title: this.props.title
                        }) : a.createElement(rt, null) : null, a.createElement(Ae, {
                            allowDownload: this.props.allowDownload
                        })))))
                    }
                }]) && ft(t.prototype, n),
                u
            }(ct);
            function vt(e) {
                return (vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function bt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function St(e, t) {
                return (St = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function wt(e, t) {
                return !t || "object" !== vt(t) && "function" != typeof t ? Et(e) : t
            }
            function Et(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function Pt(e) {
                return (Pt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function kt(e) {
                return (kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function _t(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Mt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function At(e, t) {
                return (At = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function Ct(e, t) {
                return !t || "object" !== kt(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function Nt(e) {
                return (Nt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var xt = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && At(e, t)
                }(s, e);
                var t, n, r, i, l = (r = s,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = Nt(r);
                    if (i) {
                        var n = Nt(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return Ct(this, e)
                }
                );
                function s() {
                    return _t(this, s),
                    l.apply(this, arguments)
                }
                return t = s,
                (n = [{
                    key: "render",
                    value: function() {
                        var e, t, n, r, i, l, s = !1;
                        return this.state.videoLoaded && (s = void 0 === (s = o.MediaPageStore.get("media-data").allow_download) || !!s,
                        e = o.MediaPageStore.get("media-data").views,
                        t = o.MediaPageStore.get("media-data").categories_info,
                        n = o.MediaPageStore.get("media-data").title,
                        r = {
                            name: o.MediaPageStore.get("media-data").author_name,
                            url: o.MediaPageStore.get("media-data").author_profile,
                            thumb: o.MediaPageStore.get("media-author-thumbnail-url")
                        },
                        i = o.MediaPageStore.get("media-data").add_date,
                        l = o.MediaPageStore.get("media-data").description),
                        this.state.videoLoaded ? a.createElement("div", {
                            className: "viewer-info"
                        }, a.createElement("div", {
                            className: "viewer-info-inner"
                        }, a.createElement(gt, {
                            title: n,
                            views: e,
                            categories: t,
                            allowDownload: s
                        }), a.createElement(fe, {
                            author: r,
                            published: i,
                            description: l
                        }))) : null
                    }
                }]) && Mt(t.prototype, n),
                s
            }(function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && St(e, t)
                }(s, e);
                var t, n, r, i, l = (r = s,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = Pt(r);
                    if (i) {
                        var n = Pt(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return wt(this, e)
                }
                );
                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, s),
                    (t = l.call(this, e)).state = {
                        videoLoaded: !1
                    },
                    t.onVideoLoad = t.onVideoLoad.bind(Et(t)),
                    o.MediaPageStore.on("loaded_media_data", t.onVideoLoad),
                    t
                }
                return t = s,
                (n = [{
                    key: "onVideoLoad",
                    value: function() {
                        this.setState({
                            videoLoaded: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, n, r, i, l, s = !1;
                        return this.state.videoLoaded && (s = void 0 === (s = o.MediaPageStore.get("media-data").allow_download) || !!s,
                        e = o.MediaPageStore.get("media-data").views,
                        t = o.MediaPageStore.get("media-data").categories_info,
                        n = o.MediaPageStore.get("media-data").title,
                        r = {
                            name: o.MediaPageStore.get("media-data").author_name,
                            url: o.MediaPageStore.get("media-data").author_profile,
                            thumb: o.MediaPageStore.get("media-author-thumbnail-url")
                        },
                        i = o.MediaPageStore.get("media-data").add_date,
                        l = o.MediaPageStore.get("media-data").description),
                        this.state.videoLoaded ? a.createElement("div", {
                            className: "viewer-info"
                        }, a.createElement("div", {
                            className: "viewer-info-inner"
                        }, a.createElement(ct, {
                            title: n,
                            views: e,
                            categories: t,
                            allowDownload: s
                        }), a.createElement(fe, {
                            author: r,
                            published: i,
                            description: l
                        }))) : null
                    }
                }]) && bt(t.prototype, n),
                s
            }(a.PureComponent));
            function Ot(e) {
                return (Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function It(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function Tt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function Vt(e, t) {
                return (Vt = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function jt(e, t) {
                return !t || "object" !== Ot(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function Rt(e) {
                return (Rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var Lt = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && Vt(e, t)
                }(s, e);
                var t, n, r, i, l = (r = s,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = Rt(r);
                    if (i) {
                        var n = Rt(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return jt(this, e)
                }
                );
                function s() {
                    return It(this, s),
                    l.apply(this, arguments)
                }
                return t = s,
                (n = [{
                    key: "render",
                    value: function() {
                        return a.createElement("div", {
                            className: "viewer-container",
                            key: "viewer-container-error"
                        }, a.createElement("div", {
                            className: "player-container player-container-error"
                        }, a.createElement("div", {
                            className: "player-container-inner"
                        }, a.createElement("div", {
                            className: "error-container"
                        }, a.createElement("div", {
                            className: "error-container-inner"
                        }, a.createElement("span", {
                            className: "icon-wrap"
                        }, a.createElement("i", {
                            className: "material-icons"
                        }, "error_outline")), a.createElement("span", {
                            className: "msg-wrap"
                        }, o.MediaPageStore.get("media-load-error-message")))))))
                    }
                }]) && Tt(t.prototype, n),
                s
            }(a.PureComponent)
              , Dt = n(7777);
            function Ut(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return Bt(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bt(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Bt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function Ft() {
                var e = o.MediaPageStore.get("media-data");
                return e && e.related_media && e.related_media.length ? e.related_media[0] : null
            }
            function qt(e) {
                var t = Ut((0,
                a.useState)(Ft()), 2)
                  , n = t[0]
                  , r = t[1]
                  , i = Ut((0,
                a.useState)(o.PageStore.get("media-auto-play")), 2)
                  , l = i[0]
                  , s = i[1];
                function u() {
                    s(o.PageStore.get("media-auto-play"))
                }
                function c() {
                    r(Ft())
                }
                return (0,
                a.useEffect)((function() {
                    return o.MediaPageStore.on("loaded_media_data", c),
                    o.PageStore.on("switched_media_auto_play", u),
                    function() {
                        o.MediaPageStore.removeListener("loaded_media_data", c),
                        o.PageStore.removeListener("switched_media_auto_play", u)
                    }
                }
                ), []),
                n ? a.createElement("div", {
                    className: "auto-play"
                }, a.createElement("div", {
                    className: "auto-play-header"
                }, a.createElement("div", {
                    className: "next-label"
                }, "Up next"), a.createElement("div", {
                    className: "auto-play-option"
                }, a.createElement("label", {
                    className: "checkbox-label right-selectbox",
                    tabIndex: 0,
                    onKeyPress: function(e) {
                        0 === e.keyCode && f.PageActions.toggleMediaAutoPlay()
                    }
                }, "AUTOPLAY", a.createElement("span", {
                    className: "checkbox-switcher-wrap"
                }, a.createElement("span", {
                    className: "checkbox-switcher"
                }, a.createElement("input", {
                    type: "checkbox",
                    tabIndex: -1,
                    checked: l,
                    onChange: f.PageActions.toggleMediaAutoPlay
                })))))), a.createElement(Dt.s, {
                    className: "items-list-hor",
                    items: [n],
                    pageItems: 1,
                    maxItems: 1,
                    singleLinkContent: !0,
                    horizontalItemsOrientation: !0,
                    hideDate: !0,
                    hideViews: !o.PageStore.get("config-media-item").displayViews,
                    hideAuthor: !o.PageStore.get("config-media-item").displayAuthor
                })) : null
            }
            function zt(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return Ht(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ht(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Ht(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function Wt(e) {
                var t = zt((0,
                a.useState)(c()), 2)
                  , n = t[0]
                  , r = t[1]
                  , i = zt((0,
                a.useState)(null), 2)
                  , l = i[0]
                  , s = i[1];
                function u() {
                    s(o.MediaPageStore.get("media-type")),
                    r(c())
                }
                function c() {
                    var e = o.MediaPageStore.get("media-data");
                    return null != e && void 0 !== e.related_media && e.related_media.length ? e.related_media : null
                }
                return (0,
                a.useEffect)((function() {
                    return o.MediaPageStore.on("loaded_media_data", u),
                    function() {
                        return o.MediaPageStore.removeListener("loaded_media_data", u)
                    }
                }
                ), []),
                n && n.length ? a.createElement(Dt.s, {
                    className: "items-list-hor",
                    items: !e.hideFirst || "video" !== l && "audio" !== l ? n : n.slice(1),
                    pageItems: o.PageStore.get("config-options").pages.media.related.initialSize,
                    singleLinkContent: !0,
                    horizontalItemsOrientation: !0,
                    hideDate: !0,
                    hideViews: !o.PageStore.get("config-media-item").displayViews,
                    hideAuthor: !o.PageStore.get("config-media-item").displayAuthor
                }) : null
            }
            function $t(e) {
                return a.createElement(Dt.s, {
                    className: "items-list-hor",
                    pageItems: 9999,
                    maxItems: 9999,
                    items: e.items,
                    hideDate: !0,
                    hideViews: !0,
                    hidePlaylistOrderNumber: !1,
                    horizontalItemsOrientation: !0,
                    inPlaylistView: !0,
                    singleLinkContent: !0,
                    playlistActiveItem: e.playlistActiveItem
                })
            }
            function Qt(e) {
                return (Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function Yt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function Zt(e, t) {
                return (Zt = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function Gt(e, t) {
                return !t || "object" !== Qt(t) && "function" != typeof t ? Jt(e) : t
            }
            function Jt(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function Kt(e) {
                return (Kt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            Wt.propTypes = {
                hideFirst: u().bool
            },
            Wt.defaultProps = {
                hideFirst: !0
            },
            $t.propTypes = {
                items: u().array.isRequired,
                playlistActiveItem: m.PositiveIntegerOrZero
            },
            $t.defaultProps = {
                playlistActiveItem: 1
            };
            var Xt = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && Zt(e, t)
                }(u, e);
                var t, n, r, l, s = (r = u,
                l = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = Kt(r);
                    if (l) {
                        var n = Kt(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return Gt(this, e)
                }
                );
                function u(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, u),
                    (t = s.call(this, e)).state = {
                        expanded: !0,
                        loopRepeat: o.PlaylistViewStore.get("enabled-loop"),
                        shuffle: o.PlaylistViewStore.get("enabled-shuffle"),
                        savedPlaylist: o.PlaylistViewStore.get("saved-playlist-loop"),
                        title: e.playlistData.title,
                        link: e.playlistData.url,
                        authorName: e.playlistData.user,
                        authorLink: i.LinksContext._currentValue.home + "/user/" + e.playlistData.user,
                        activeItem: e.activeItem,
                        totalMedia: e.playlistData.media_count,
                        items: e.playlistData.playlist_media
                    },
                    t.onHeaderClick = t.onHeaderClick.bind(Jt(t)),
                    t.onLoopClick = t.onLoopClick.bind(Jt(t)),
                    t.onShuffleClick = t.onShuffleClick.bind(Jt(t)),
                    t.onSaveClick = t.onSaveClick.bind(Jt(t)),
                    t.onLoopRepeatUpdate = t.onLoopRepeatUpdate.bind(Jt(t)),
                    t.onShuffleUpdate = t.onShuffleUpdate.bind(Jt(t)),
                    t.onPlaylistSaveUpdate = t.onPlaylistSaveUpdate.bind(Jt(t)),
                    o.PlaylistViewStore.on("loop-repeat-updated", t.onLoopRepeatUpdate),
                    o.PlaylistViewStore.on("shuffle-updated", t.onShuffleUpdate),
                    o.PlaylistViewStore.on("saved-updated", t.onPlaylistSaveUpdate),
                    t
                }
                return t = u,
                (n = [{
                    key: "onHeaderClick",
                    value: function(e) {
                        this.setState({
                            expanded: !this.state.expanded
                        })
                    }
                }, {
                    key: "onLoopClick",
                    value: function() {
                        f.PlaylistViewActions.toggleLoop()
                    }
                }, {
                    key: "onShuffleClick",
                    value: function() {
                        f.PlaylistViewActions.toggleShuffle()
                    }
                }, {
                    key: "onSaveClick",
                    value: function() {
                        f.PlaylistViewActions.toggleSave()
                    }
                }, {
                    key: "onShuffleUpdate",
                    value: function() {
                        var e = this;
                        this.setState({
                            shuffle: o.PlaylistViewStore.get("enabled-shuffle")
                        }, (function() {
                            e.state.shuffle ? f.PageActions.addNotification("Playlist shuffle is on", "shuffle-on") : f.PageActions.addNotification("Playlist shuffle is off", "shuffle-off")
                        }
                        ))
                    }
                }, {
                    key: "onLoopRepeatUpdate",
                    value: function() {
                        var e = this;
                        this.setState({
                            loopRepeat: o.PlaylistViewStore.get("enabled-loop")
                        }, (function() {
                            e.state.loopRepeat ? f.PageActions.addNotification("Playlist loop is on", "loop-on") : f.PageActions.addNotification("Playlist loop is off", "loop-off")
                        }
                        ))
                    }
                }, {
                    key: "onPlaylistSaveUpdate",
                    value: function() {
                        var e = this;
                        this.setState({
                            savedPlaylist: o.PlaylistViewStore.get("saved-playlist")
                        }, (function() {
                            e.state.savedPlaylist ? f.PageActions.addNotification("Added to playlists library", "added-to-playlists-lib") : f.PageActions.addNotification("Removed from playlists library", "removed-from-playlists-lib")
                        }
                        ))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return a.createElement("div", {
                            className: "playlist-view-wrap"
                        }, a.createElement("div", {
                            className: "playlist-view" + (this.state.expanded ? " playlist-expanded-view" : "")
                        }, a.createElement("div", {
                            className: "playlist-header"
                        }, a.createElement("div", {
                            className: "playlist-title"
                        }, a.createElement("a", {
                            href: this.state.link,
                            title: this.state.title
                        }, this.state.title)), a.createElement("div", {
                            className: "playlist-meta"
                        }, a.createElement("span", null, a.createElement("a", {
                            href: this.state.authorLink,
                            title: this.state.authorName
                        }, this.state.authorName)), "  -  ", a.createElement("span", {
                            className: "counter"
                        }, this.state.activeItem, " / ", this.state.totalMedia)), a.createElement(F.CircleIconButton, {
                            className: "toggle-playlist-view",
                            onClick: this.onHeaderClick
                        }, this.state.expanded ? a.createElement("i", {
                            className: "material-icons"
                        }, "keyboard_arrow_up") : a.createElement("i", {
                            className: "material-icons"
                        }, "keyboard_arrow_down"))), this.state.expanded ? a.createElement("div", {
                            className: "playlist-actions"
                        }, a.createElement(F.CircleIconButton, {
                            className: this.state.loopRepeat ? "active" : "",
                            onClick: this.onLoopClick,
                            title: "Loop playlist"
                        }, a.createElement("i", {
                            className: "material-icons"
                        }, "repeat"))) : null, this.state.expanded && this.state.items.length ? a.createElement("div", {
                            className: "playlist-media"
                        }, a.createElement($t, {
                            items: this.state.items,
                            playlistActiveItem: this.state.activeItem
                        })) : null))
                    }
                }]) && Yt(t.prototype, n),
                u
            }(a.PureComponent);
            function en(e) {
                return (en = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function tn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function nn(e, t) {
                return (nn = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function rn(e, t) {
                return !t || "object" !== en(t) && "function" != typeof t ? an(e) : t
            }
            function an(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function on(e) {
                return (on = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            Xt.propTypes = {
                playlistData: u().object.isRequired,
                activeItem: m.PositiveIntegerOrZero
            },
            Xt.defaultProps = {};
            var ln = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && nn(e, t)
                }(s, e);
                var t, n, r, i, l = (r = s,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = on(r);
                    if (i) {
                        var n = on(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return rn(this, e)
                }
                );
                function s(e) {
                    var t;
                    if (function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, s),
                    (t = l.call(this, e)).state = {
                        playlistData: e.playlistData,
                        isPlaylistPage: !!e.playlistData,
                        activeItem: 0,
                        mediaType: o.MediaPageStore.get("media-type")
                    },
                    e.playlistData)
                        for (var n = 0; n < e.playlistData.playlist_media.length; ) {
                            if (e.mediaId === e.playlistData.playlist_media[n].friendly_token) {
                                t.state.activeItem = n + 1;
                                break
                            }
                            n += 1
                        }
                    return t.onMediaLoad = t.onMediaLoad.bind(an(t)),
                    t
                }
                return t = s,
                (n = [{
                    key: "componentDidMount",
                    value: function() {
                        o.MediaPageStore.on("loaded_media_data", this.onMediaLoad)
                    }
                }, {
                    key: "onMediaLoad",
                    value: function() {
                        this.setState({
                            mediaType: o.MediaPageStore.get("media-type")
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return a.createElement("div", {
                            className: "viewer-sidebar"
                        }, this.state.isPlaylistPage ? a.createElement(Xt, {
                            activeItem: this.state.activeItem,
                            playlistData: this.props.playlistData
                        }) : "video" === this.state.mediaType || "audio" === this.state.mediaType ? a.createElement(qt, null) : null, a.createElement(Wt, {
                            hideFirst: !this.state.isPlaylistPage
                        }))
                    }
                }]) && tn(t.prototype, n),
                s
            }(a.PureComponent);
            function sn(e) {
                return (sn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function un(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function cn(e, t) {
                return (cn = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function dn(e, t) {
                return !t || "object" !== sn(t) && "function" != typeof t ? mn(e) : t
            }
            function mn(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function fn(e) {
                return (fn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var pn = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && cn(e, t)
                }(s, e);
                var t, n, r, i, l = (r = s,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = fn(r);
                    if (i) {
                        var n = fn(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return dn(this, e)
                }
                );
                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, s),
                    (t = l.call(this, e, "media")).state = {
                        wideLayout: 1216 <= window.innerWidth,
                        mediaLoaded: !1,
                        mediaLoadFailed: !1,
                        isVideoMedia: !1,
                        theaterMode: !1,
                        pagePlaylistLoaded: !1,
                        pagePlaylistData: o.MediaPageStore.get("playlist-data")
                    },
                    t.onWindowResize = t.onWindowResize.bind(mn(t)),
                    t.onMediaLoad = t.onMediaLoad.bind(mn(t)),
                    t.onMediaLoadError = t.onMediaLoadError.bind(mn(t)),
                    t.onPagePlaylistLoad = t.onPagePlaylistLoad.bind(mn(t)),
                    o.MediaPageStore.on("loaded_media_data", t.onMediaLoad),
                    o.MediaPageStore.on("loaded_media_error", t.onMediaLoadError),
                    o.MediaPageStore.on("loaded_page_playlist_data", t.onPagePlaylistLoad),
                    t
                }
                return t = s,
                (n = [{
                    key: "componentDidMount",
                    value: function() {
                        f.MediaPageActions.loadMediaData(),
                        o.PageStore.on("window_resize", this.onWindowResize)
                    }
                }, {
                    key: "onWindowResize",
                    value: function() {
                        this.setState({
                            wideLayout: 1216 <= window.innerWidth
                        })
                    }
                }, {
                    key: "onPagePlaylistLoad",
                    value: function() {
                        this.setState({
                            pagePlaylistLoaded: !0,
                            pagePlaylistData: o.MediaPageStore.get("playlist-data")
                        })
                    }
                }, {
                    key: "onMediaLoad",
                    value: function() {
                        var e = "video" === o.MediaPageStore.get("media-type");
                        e ? (this.onViewerModeChange = this.onViewerModeChange.bind(this),
                        o.VideoViewerStore.on("changed_viewer_mode", this.onViewerModeChange),
                        this.setState({
                            mediaLoaded: !0,
                            isVideoMedia: e,
                            theaterMode: o.VideoViewerStore.get("in-theater-mode")
                        })) : this.setState({
                            mediaLoaded: !0,
                            isVideoMedia: e
                        })
                    }
                }, {
                    key: "onViewerModeChange",
                    value: function() {
                        this.setState({
                            theaterMode: o.VideoViewerStore.get("in-theater-mode")
                        })
                    }
                }, {
                    key: "onMediaLoadError",
                    value: function(e) {
                        this.setState({
                            mediaLoadFailed: !0
                        })
                    }
                }, {
                    key: "pageContent",
                    value: function() {
                        var e = "cf viewer-section" + (this.state.theaterMode ? " theater-mode" : " viewer-wide")
                          , t = "viewer-section-nested" + (this.state.theaterMode ? " viewer-section" : "");
                        return this.state.mediaLoadFailed ? a.createElement("div", {
                            className: e
                        }, a.createElement(Lt, null)) : a.createElement("div", {
                            className: e
                        }, [a.createElement("div", {
                            className: "viewer-container",
                            key: "viewer-container"
                        }, this.state.mediaLoaded && this.state.pagePlaylistLoaded ? this.viewerContainerContent(o.MediaPageStore.get("media-data")) : null), a.createElement("div", {
                            key: "viewer-section-nested",
                            className: t
                        }, !this.state.wideLayout || this.state.isVideoMedia && this.state.theaterMode ? [a.createElement(xt, {
                            key: "viewer-info"
                        }), this.state.pagePlaylistLoaded ? a.createElement(ln, {
                            key: "viewer-sidebar",
                            mediaId: o.MediaPageStore.get("media-id"),
                            playlistData: o.MediaPageStore.get("playlist-data")
                        }) : null] : [this.state.pagePlaylistLoaded ? a.createElement(ln, {
                            key: "viewer-sidebar",
                            mediaId: o.MediaPageStore.get("media-id"),
                            playlistData: o.MediaPageStore.get("playlist-data")
                        }) : null, a.createElement(xt, {
                            key: "viewer-info"
                        })])])
                    }
                }]) && un(t.prototype, n),
                s
            }(n(8204).T);
            function yn(e) {
                return (yn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function hn(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function gn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function vn(e, t) {
                return (vn = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function bn(e, t) {
                return !t || "object" !== yn(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function Sn(e) {
                return (Sn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            if (window.MediaCMS.site.devEnv) {
                var wn = function() {
                    var e = null
                      , t = null
                      , n = window.location.search.split("?")[1];
                    return n && n.split("&").forEach((function(n) {
                        0 === n.indexOf("m=") ? e = n.split("m=")[1] : 0 === n.indexOf("pl=") && (t = n.split("pl=")[1])
                    }
                    )),
                    {
                        mediaId: e,
                        playlistId: t
                    }
                }()
                  , En = wn.mediaId
                  , Pn = wn.playlistId;
                En && (window.MediaCMS.mediaId = En),
                Pn && (window.MediaCMS.playlistId = Pn)
            }
            var kn = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && vn(e, t)
                }(c, e);
                var t, n, r, s, u = (r = c,
                s = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = Sn(r);
                    if (s) {
                        var n = Sn(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return bn(this, e)
                }
                );
                function c() {
                    return hn(this, c),
                    u.apply(this, arguments)
                }
                return t = c,
                (n = [{
                    key: "viewerContainerContent",
                    value: function(e) {
                        switch (o.MediaPageStore.get("media-type")) {
                        case "video":
                            return a.createElement(i.SiteConsumer, null, (function(t) {
                                return a.createElement(R, {
                                    data: e,
                                    siteUrl: t.url,
                                    inEmbed: !1
                                })
                            }
                            ));
                        case "audio":
                            return a.createElement(P, null);
                        case "image":
                            return a.createElement(_, null);
                        case "pdf":
                            return a.createElement(M, null)
                        }
                        return a.createElement(l, null)
                    }
                }]) && gn(t.prototype, n),
                c
            }(pn);
            (0,
            r.X)("page-media", kn)
        },
        4234: function(e, t, n) {
            "use strict";
            n.d(t, {
                CircleIconButton: function() {
                    return r.M
                },
                MaterialIcon: function() {
                    return a.O
                },
                NavigationContentApp: function() {
                    return i.o
                },
                NavigationMenuList: function() {
                    return o.S
                },
                Notifications: function() {
                    return l.T
                },
                NumericInputWithUnit: function() {
                    return s.O
                },
                PopupMain: function() {
                    return u.W8
                },
                PopupTop: function() {
                    return u.HF
                },
                SpinnerLoader: function() {
                    return c.i
                },
                UserThumbnail: function() {
                    return d.q
                }
            });
            var r = n(7714)
              , a = (n(7446),
            n(2915),
            n(2299))
              , i = n(2917)
              , o = n(5671)
              , l = n(2436)
              , s = n(5517)
              , u = n(940)
              , c = n(6309)
              , d = n(6142)
        },
        2436: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return d
                }
            }),
            n(2070),
            n(1646),
            n(2004),
            n(8407),
            n(6394),
            n(8288),
            n(5677),
            n(2129),
            n(4655),
            n(288),
            n(4458),
            n(3675);
            var r = n(5466)
              , a = n(7959);
            function i(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || l(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || l(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function l(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                }
            }
            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var u = [];
            function c(e) {
                var t = o((0,
                r.useState)(!1), 2)
                  , n = t[0]
                  , a = t[1]
                  , i = o((0,
                r.useState)(!0), 2)
                  , l = i[0]
                  , s = i[1]
                  , u = null
                  , c = null;
                return (0,
                r.useEffect)((function() {
                    return u = setTimeout((function() {
                        c = setTimeout((function() {
                            s(!1),
                            c = null
                        }
                        ), 1e3),
                        u = null,
                        a(!0),
                        e.onHide(e.id)
                    }
                    ), 5e3),
                    function() {
                        u && clearTimeout(u),
                        c && clearTimeout(c)
                    }
                }
                ), []),
                l ? r.createElement("div", {
                    className: "notification-item" + (n ? " hidden" : "")
                }, r.createElement("div", null, e.children || null)) : null
            }
            function d() {
                var e, t, n, l = o((0,
                r.useState)(u.length), 2), s = l[0], d = l[1];
                function m() {
                    d(a.default.get("notifications-size") + u.length)
                }
                function f(e) {
                    var t = [];
                    u.map((function(n) {
                        n[0] !== e && t.push(n)
                    }
                    )),
                    u = t
                }
                return (0,
                r.useEffect)((function() {
                    return m(),
                    a.default.on("added_notification", m),
                    function() {
                        return a.default.removeListener("added_notification", m)
                    }
                }
                ), []),
                s ? r.createElement("div", {
                    className: "notifications"
                }, r.createElement("div", null, (e = a.default.get("notifications"),
                t = u.map((function(e) {
                    return r.createElement(c, {
                        key: e[0],
                        id: e[0],
                        onHide: f
                    }, e[1])
                }
                )),
                n = e.map((function(e) {
                    return u.push(e),
                    r.createElement(c, {
                        key: e[0],
                        id: e[0],
                        onHide: f
                    }, e[1])
                }
                )),
                [].concat(i(t), i(n)))), " ") : null
            }
        },
        5517: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return s
                }
            }),
            n(2004),
            n(8407),
            n(6394),
            n(8288),
            n(5677),
            n(2129),
            n(4655),
            n(288),
            n(4458),
            n(3675);
            var r = n(5466)
              , a = n(3074)
              , i = n.n(a);
            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function s(e) {
                var t = (0,
                r.useRef)(null)
                  , n = (0,
                r.useRef)(null)
                  , a = o((0,
                r.useState)(null), 2)
                  , i = a[0]
                  , l = a[1]
                  , s = o((0,
                r.useState)(null), 2)
                  , u = s[0]
                  , c = s[1];
                return (0,
                r.useEffect)((function() {
                    l(function(e, t, n) {
                        if (void 0 !== e) {
                            var r;
                            return r = void 0 !== t && t > e ? t : e,
                            void 0 !== n && n < r ? n : r
                        }
                        return void 0 !== t ? t : void 0 !== n ? n : void 0
                    }(0 + e.defaultValue, e.minValue, e.maxValue)),
                    c(function(e, t) {
                        if (!t || !t.length)
                            return null;
                        for (var n = 0; n < t.length; ) {
                            if (void 0 !== t[n].key && e === t[n].key)
                                return t[n].key;
                            n += 1
                        }
                        return t[0].key
                    }(e.defaultUnit, e.units))
                }
                )),
                r.createElement("div", {
                    className: "num-value-unit"
                }, void 0 !== e.label ? r.createElement("span", {
                    className: "label"
                }, e.label) : null, r.createElement("input", {
                    ref: t,
                    className: "value-input",
                    type: "number",
                    value: null !== i ? i : "",
                    min: void 0 !== e.minValue ? e.minValue : null,
                    max: void 0 !== e.maxValue ? e.maxValue : null,
                    onChange: function() {
                        l(t.current.value),
                        void 0 !== e.valueCallback && e.valueCallback(t.current.value)
                    }
                }), r.createElement("select", {
                    ref: n,
                    className: "value-unit",
                    onChange: function() {
                        c(n.current.value),
                        void 0 !== e.unitCallback && e.unitCallback(n.current.value)
                    },
                    value: null !== u ? u : ""
                }, function() {
                    if (!e.units.length)
                        return null;
                    for (var t = [], n = 0; n < e.units.length; )
                        void 0 !== e.units[n].key && t.push(r.createElement("option", {
                            key: e.units[n].key,
                            value: e.units[n].key
                        }, void 0 !== e.units[n].label ? e.units[n].label : e.units[n].key)),
                        n += 1;
                    return t
                }()))
            }
            s.propTypes = {
                label: i().string,
                units: i().array.isRequired,
                defaultUnit: i().string,
                defaultValue: i().number,
                minValue: i().number,
                maxValue: i().number,
                valueCallback: i().func,
                unitCallback: i().func
            }
        },
        6309: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return o
                }
            });
            var r = n(5466)
              , a = n(3074)
              , i = n.n(a);
            function o(e) {
                var t = "spinner-loader";
                switch (e.size) {
                case "tiny":
                case "x-small":
                case "small":
                case "large":
                case "x-large":
                    t += " " + e.size
                }
                return r.createElement("div", {
                    className: t
                }, r.createElement("svg", {
                    className: "circular",
                    viewBox: "25 25 50 50"
                }, r.createElement("circle", {
                    className: "path",
                    cx: "50",
                    cy: "50",
                    r: "20",
                    fill: "none",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10"
                })))
            }
            o.propTypes = {
                size: i().oneOf(["tiny", "x-small", "small", "medium", "large", "x-large"])
            },
            o.defaultProps = {
                size: "medium"
            }
        },
        6142: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return u
                }
            });
            var r = n(5466)
              , a = n(3074)
              , i = n.n(a)
              , o = n(9747)
              , l = n(7714)
              , s = n(2299);
            function u(e) {
                var t = (0,
                o.useUser)().thumbnail
                  , n = {
                    "aria-label": "Account profile photo that opens list of options and settings pages links",
                    className: "thumbnail"
                };
                switch (e.isButton ? void 0 !== e.onClick && (n.onClick = e.onClick) : n.type = "span",
                e.size) {
                case "small":
                case "large":
                    n.className += " " + e.size + "-thumb"
                }
                return r.createElement(l.M, n, t ? r.createElement("img", {
                    src: t,
                    alt: ""
                }) : r.createElement(s.O, {
                    type: "person"
                }))
            }
            u.propTypes = {
                isButton: i().bool,
                size: i().oneOf(["small", "medium", "large"]),
                onClick: i().func
            },
            u.defaultProps = {
                isButton: !1,
                size: "medium"
            }
        },
        6191: function(e, t, n) {
            "use strict";
            n.d(t, {
                PageHeader: function() {
                    return r.m
                },
                PageMain: function() {
                    return a.r
                },
                PageSidebar: function() {
                    return i.$
                }
            });
            var r = n(6006)
              , a = n(9198)
              , i = n(2947);
            n(1542)
        },
        8727: function(e, t, n) {
            "use strict";
            n.d(t, {
                hJ: function() {
                    return c
                },
                Y7: function() {
                    return d
                }
            }),
            n(2322),
            n(3296),
            n(6394),
            n(4669),
            n(717),
            n(5677),
            n(2129),
            n(4655),
            n(6453),
            n(9006);
            var r = n(5466)
              , a = n(3074)
              , i = n.n(a)
              , o = n(137)
              , l = n.n(o)
              , s = n(8009)
              , u = n.n(s);
            function c(e) {
                return r.createElement("div", {
                    className: "error-container"
                }, r.createElement("div", {
                    className: "error-container-inner"
                }, r.createElement("span", {
                    className: "icon-wrap"
                }, r.createElement("i", {
                    className: "material-icons"
                }, "error_outline")), r.createElement("span", {
                    className: "msg-wrap"
                }, e.errorMessage)))
            }
            function d(e) {
                var t = (0,
                r.useRef)(null)
                  , n = null
                  , a = {
                    playerVolume: e.playerVolume,
                    playerSoundMuted: e.playerSoundMuted,
                    videoQuality: e.videoQuality,
                    videoPlaybackSpeed: e.videoPlaybackSpeed,
                    inTheaterMode: e.inTheaterMode
                };
                function i() {
                    void 0 !== e.onClickNextCallback && e.onClickNextCallback()
                }
                function o() {
                    void 0 !== e.onClickPreviousCallback && e.onClickPreviousCallback()
                }
                function s(t) {
                    a.playerVolume !== t.volume && (a.playerVolume = t.volume),
                    a.playerSoundMuted !== t.soundMuted && (a.playerSoundMuted = t.soundMuted),
                    a.videoQuality !== t.quality && (a.videoQuality = t.quality),
                    a.videoPlaybackSpeed !== t.playbackSpeed && (a.videoPlaybackSpeed = t.playbackSpeed),
                    a.inTheaterMode !== t.theaterMode && (a.inTheaterMode = t.theaterMode),
                    void 0 !== e.onStateUpdateCallback && e.onStateUpdateCallback(t)
                }
                function c() {
                    if (null === n && null === e.errorMessage && (e.inEmbed || (window.removeEventListener("focus", c),
                    document.removeEventListener("visibilitychange", c)),
                    t.current)) {
                        e.inEmbed || t.current.focus();
                        var r, d, m, f = {
                            on: !1
                        };
                        if (void 0 !== e.subtitlesInfo && null !== e.subtitlesInfo && e.subtitlesInfo.length) {
                            f.languages = [];
                            for (var p = 0; p < e.subtitlesInfo.length; )
                                void 0 !== e.subtitlesInfo[p].src && void 0 !== e.subtitlesInfo[p].srclang && void 0 !== e.subtitlesInfo[p].label && f.languages.push({
                                    src: (r = e.subtitlesInfo[p].src,
                                    d = e.siteUrl,
                                    m = void 0,
                                    m = l()(r, {}),
                                    "" !== m.origin && "null" !== m.origin && m.origin || (m = l()(d + "/" + r.replace(/^\//g, ""), {})),
                                    m.toString()),
                                    srclang: e.subtitlesInfo[p].srclang,
                                    label: e.subtitlesInfo[p].label
                                }),
                                p += 1;
                            f.languages.length && (f.on = !0)
                        }
                        n = new (u())(t.current,{
                            enabledTouchControls: !0,
                            sources: e.sources,
                            poster: e.poster,
                            autoplay: e.enableAutoplay,
                            bigPlayButton: !0,
                            controlBar: {
                                theaterMode: e.hasTheaterMode,
                                pictureInPicture: !1,
                                next: !!e.hasNextLink,
                                previous: !!e.hasPreviousLink
                            },
                            subtitles: f,
                            cornerLayers: e.cornerLayers,
                            videoPreviewThumb: e.previewSprite
                        },{
                            volume: a.playerVolume,
                            soundMuted: a.playerSoundMuted,
                            theaterMode: a.inTheaterMode,
                            theSelectedQuality: void 0,
                            theSelectedPlaybackSpeed: a.videoPlaybackSpeed || 1
                        },e.info,[.25, .5, .75, 1, 1.25, 1.5, 1.75, 2],s,i,o),
                        void 0 !== e.onPlayerInitCallback && e.onPlayerInitCallback(n, t.current)
                    }
                }
                return a.playerVolume = null === a.playerVolume ? 1 : Math.max(Math.min(Number(a.playerVolume), 1), 0),
                a.playerSoundMuted = null !== a.playerSoundMuted && a.playerSoundMuted,
                a.videoQuality = null !== a.videoQuality ? a.videoQuality : "Auto",
                a.videoPlaybackSpeed = null !== a.videoPlaybackSpeed && a.videoPlaybackSpeed,
                a.inTheaterMode = null !== a.inTheaterMode && a.inTheaterMode,
                (0,
                r.useEffect)((function() {
                    return e.inEmbed || document.hasFocus() || "visible" === document.visibilityState ? c() : (window.addEventListener("focus", c),
                    document.addEventListener("visibilitychange", c)),
                    n && n.player.one("loadedmetadata", (function() {
                        var e = new URLSearchParams(window.location.search)
                          , t = Number(e.get("t"))
                          , r = isNaN(t) ? 0 : t;
                        n.player.currentTime(r)
                    }
                    )),
                    function() {
                        null !== n && (videojs(t.current).dispose(),
                        n = null),
                        void 0 !== e.onUnmountCallback && e.onUnmountCallback()
                    }
                }
                ), []),
                null === e.errorMessage ? r.createElement("video", {
                    ref: t,
                    className: "video-js vjs-mediacms native-dimensions"
                }) : r.createElement("div", {
                    className: "error-container"
                }, r.createElement("div", {
                    className: "error-container-inner"
                }, r.createElement("span", {
                    className: "icon-wrap"
                }, r.createElement("i", {
                    className: "material-icons"
                }, "error_outline")), r.createElement("span", {
                    className: "msg-wrap"
                }, e.errorMessage)))
            }
            c.propTypes = {
                errorMessage: i().string.isRequired
            },
            d.propTypes = {
                playerVolume: i().string,
                playerSoundMuted: i().bool,
                videoQuality: i().string,
                videoPlaybackSpeed: i().number,
                inTheaterMode: i().bool,
                siteId: i().string.isRequired,
                siteUrl: i().string.isRequired,
                errorMessage: i().string,
                cornerLayers: i().object,
                subtitlesInfo: i().array.isRequired,
                inEmbed: i().bool.isRequired,
                sources: i().array.isRequired,
                info: i().object.isRequired,
                enableAutoplay: i().bool.isRequired,
                hasTheaterMode: i().bool.isRequired,
                hasNextLink: i().bool.isRequired,
                hasPreviousLink: i().bool.isRequired,
                poster: i().string,
                previewSprite: i().object,
                onClickPreviousCallback: i().func,
                onClickNextCallback: i().func,
                onPlayerInitCallback: i().func,
                onStateUpdateCallback: i().func,
                onUnmountCallback: i().func
            },
            d.defaultProps = {
                errorMessage: null,
                cornerLayers: {}
            }
        },
        160: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return h
                }
            }),
            n(2322),
            n(9268),
            n(9751),
            n(2004),
            n(8407),
            n(6394),
            n(8288),
            n(5677),
            n(2129),
            n(4655),
            n(288),
            n(4458),
            n(3675);
            var r = n(5466)
              , a = n(3074)
              , i = n.n(a)
              , o = n(137)
              , l = n.n(o)
              , s = n(3613)
              , u = n(473)
              , c = n(9722)
              , d = n(9905)
              , m = n(8727)
              , f = n(1283);
            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [], o = !0, l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); o = !0)
                                ;
                        } catch (e) {
                            l = !0,
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return y(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function h(e) {
                var t = (0,
                r.useContext)(s.ApiUrlContext)
                  , n = (0,
                r.useContext)(s.SiteContext)
                  , a = p((0,
                r.useState)(null), 2)
                  , i = (a[0],
                a[1])
                  , o = p((0,
                r.useState)(null), 2)
                  , y = o[0]
                  , h = o[1]
                  , g = p((0,
                r.useState)(null), 2)
                  , v = g[0]
                  , b = g[1]
                  , S = p((0,
                r.useState)([]), 2)
                  , w = S[0]
                  , E = S[1]
                  , P = p((0,
                r.useState)({}), 2)
                  , k = P[0]
                  , _ = P[1]
                  , M = p((0,
                r.useState)([]), 2)
                  , A = M[0]
                  , C = M[1]
                  , N = p((0,
                r.useState)({}), 2)
                  , x = N[0]
                  , O = N[1]
                  , I = {
                    videoQuality: new c.BrowserCache(n.id,86400).get("video-quality")
                };
                I.videoQuality = null !== I.videoQuality ? I.videoQuality : "Auto";
                var T, V = null, j = null, R = null, L = ((T = new (l())(e.pageLink).query) ? ((T = T.substring(1)).split("&"),
                T = T.length ? T.split("=") : []) : T = [],
                T);
                if (L.length)
                    for (var D = 0; D < L.length; )
                        "m" === L[D] && (R = L[D + 1]),
                        D += 2;
                function U(e) {
                    if (void 0 !== e && e && void 0 !== e.data && e.data) {
                        var t, r;
                        j = e.data;
                        var a = []
                          , o = null
                          , l = (0,
                        d.RA)(j.encodings_info, j.hls_info)
                          , s = null
                          , c = null;
                        if ("string" == typeof j.poster_url ? o = (0,
                        u.formatInnerLink)(j.poster_url, n.url) : "string" == typeof j.thumbnail_url && (o = (0,
                        u.formatInnerLink)(j.thumbnail_url, n.url)),
                        Object.keys(l).length) {
                            var m = (0,
                            d.KC)()
                              , p = I.videoQuality;
                            (null === p || "Auto" === p && void 0 === l.Auto) && (p = 720);
                            var y = (0,
                            d.$e)(p, l);
                            for ("Auto" === p && void 0 !== l.Auto && a.push({
                                src: l.Auto.url[0]
                            }),
                            r = 0; r < l[y].format.length; ) {
                                if ("hls" === l[y].format[r]) {
                                    a.push({
                                        src: l[y].url[r]
                                    });
                                    break
                                }
                                r += 1
                            }
                            for (r in j.encodings_info[y])
                                j.encodings_info[y].hasOwnProperty(r) && m.support[r] && (t = j.encodings_info[y][r].url) && (t = (0,
                                u.formatInnerLink)(t, n.url),
                                a.push({
                                    src: t,
                                    encodings_status: j.encodings_info[y][r].status
                                }))
                        } else
                            l = null;
                        if (1 === a.length && "running" === a[0].encodings_status && (s = "encodingRunning",
                        c = "Media encoding is currently running. Try again in few minutes."),
                        null !== s)
                            switch (s) {
                            case "encodingRunning":
                            case "encodingPending":
                            case "encodingFailed":
                                break;
                            default:
                                f.warn("VIDEO DEBUG:", "Video files don't exist")
                            }
                        i(s),
                        h(c),
                        b(o),
                        E(a),
                        _(l),
                        C(j.subtitles_info),
                        O(j.sprites_url ? {
                            url: (0,
                            u.formatInnerLink)(j.sprites_url, n.url),
                            frame: {
                                width: 160,
                                height: 90,
                                seconds: 10
                            }
                        } : null);
                        var g = document.querySelector(".feat-first-item .item .item-description > div");
                        g && (g.innerHTML = j.summary)
                    }
                }
                function B(e) {
                    if (void 0 !== e && void 0 !== e.type)
                        switch (e.type) {
                        case "network":
                        case "private":
                        case "unavailable":
                            i(e.type),
                            h(void 0 !== e.message ? e.message : "Αn error occurred while loading the media's data")
                        }
                }
                return null !== R && (V = t.media + "/" + R),
                (0,
                r.useEffect)((function() {
                    null !== V && (0,
                    u.getRequest)(V, !1, U, B)
                }
                ), []),
                w.length ? r.createElement("div", {
                    className: "video-player"
                }, r.createElement(m.Y7, {
                    siteId: n.id,
                    siteUrl: n.url,
                    info: k,
                    sources: w,
                    poster: v,
                    previewSprite: x,
                    subtitlesInfo: A,
                    enableAutoplay: !1,
                    inEmbed: !1,
                    hasTheaterMode: !1,
                    hasNextLink: !1,
                    hasPreviousLink: !1,
                    errorMessage: y
                })) : null
            }
            h.propTypes = {
                pageLink: i().string.isRequired
            }
        },
        8204: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return m
                }
            }),
            n(5101),
            n(3080),
            n(2004),
            n(8407),
            n(6394),
            n(8288),
            n(5677),
            n(2129),
            n(4655);
            var r = n(5466)
              , a = n(541)
              , i = n(6191)
              , o = n(4234);
            function l(e) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function u(e, t) {
                return (u = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function c(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var m = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && u(e, t)
                }(p, e);
                var t, n, l, m, f = (l = p,
                m = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = d(l);
                    if (m) {
                        var n = d(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return c(this, e)
                }
                );
                function p(e, t) {
                    var n;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, p),
                    n = f.call(this, e),
                    void 0 !== t && a.PageActions.initPage(t),
                    n
                }
                return t = p,
                (n = [{
                    key: "render",
                    value: function() {
                        return r.createElement(r.Fragment, null, r.createElement(i.PageMain, null, this.pageContent()), r.createElement(o.Notifications, null))
                    }
                }]) && s(t.prototype, n),
                p
            }(r.PureComponent)
        },
        2083: function(e, t, n) {
            var r = n(4835).Dispatcher;
            e.exports = new r
        },
        1450: function(e, t, n) {
            "use strict";
            function r() {
                var e, t, n, r = null;
                if (document.cookie && "" !== document.cookie)
                    for (t = document.cookie.split(";"),
                    e = 0; e < t.length; ) {
                        if ("csrftoken=" === (n = t[e].trim()).substring(0, 10)) {
                            r = decodeURIComponent(n.substring(10));
                            break
                        }
                        e += 1
                    }
                return r
            }
            n.d(t, {
                o: function() {
                    return r
                }
            }),
            n(2322),
            n(9268),
            n(3233)
        },
        9039: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return o
                },
                a: function() {
                    return l
                }
            }),
            n(1646),
            n(288),
            n(2004),
            n(8407),
            n(6394),
            n(8288),
            n(5677),
            n(2129),
            n(4655),
            n(3675),
            n(4458);
            var r = n(4646);
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function i(e, t, n) {
                var r, i;
                switch (n) {
                case TypeError:
                case RangeError:
                case SyntaxError:
                case ReferenceError:
                    r = new n(t[0]);
                    break;
                default:
                    r = new Error(t[0])
                }
                return e.apply(void 0, [r.message].concat(function(e) {
                    if (Array.isArray(e))
                        return a(e)
                }(i = t.slice(1)) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(i) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return a(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                    }
                }(i) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())),
                r
            }
            function o(e, t) {
                return i(r.v, e, t)
            }
            function l(e, t) {
                return i(r.Z, e, t)
            }
        },
        9264: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(2083);
            function a(e, t) {
                return r.register(e[t].bind(e)),
                e
            }
        },
        1397: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return i
                }
            }),
            n(2322),
            n(3296),
            n(6394),
            n(4669);
            var r = n(137)
              , a = n.n(r);
            function i(e, t) {
                var n = a()(e, {});
                return "" !== n.origin && "null" !== n.origin && n.origin || (n = a()(t + "/" + e.replace(/^\//g, ""), {})),
                n.toString()
            }
        },
        705: function(e, t, n) {
            "use strict";
            function r(e, t) {
                function n(e, t, n) {
                    return Number(parseFloat(e / t).toFixed(e < 10 * t ? 1 : 0)) + n
                }
                return t ? e.toLocaleString() : function(e, t, r, a, i, o) {
                    for (; t >= a; )
                        i *= r,
                        a *= r,
                        e += 1;
                    return e < o.length ? n(t, i, o[e]) : n(t * (r * (e - (o.length - 1))), i, o[o.length - 1])
                }(0, e, 1e3, 1e3, 1, ["", "K", "M", "B", "T"])
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            }),
            n(717),
            n(6660)
        },
        4646: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                },
                v: function() {
                    return s
                }
            }),
            n(288),
            n(1646),
            n(2004),
            n(8407),
            n(6394),
            n(8288),
            n(5677),
            n(2129),
            n(4655),
            n(3675),
            n(4458);
            var r = n(1283);
            function a(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return i(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return i(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var o = function() {
                for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                    n[i] = arguments[i];
                return (e = r)[n[0]].apply(e, a(n.slice(1)))
            }
              , l = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return o.apply(void 0, ["warn"].concat(t))
            }
              , s = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return o.apply(void 0, ["error"].concat(t))
            }
        },
        408: function(e, t, n) {
            "use strict";
            n.d(t, {
                aP: function() {
                    return i
                },
                ZU: function() {
                    return o
                },
                $A: function() {
                    return l
                }
            }),
            n(5777);
            var r = function(e) {
                return e === Math.trunc(e)
            }
              , a = function(e) {
                return function(e, t) {
                    return e > 0
                }(e)
            }
              , i = function(e) {
                return r(e) && a(e)
            }
              , o = function(e) {
                return r(e) && (a(e) || function(e) {
                    return 0 === e
                }(e))
            }
              , l = function e(t, n) {
                return n ? e(n, t % n) : t
            }
        },
        447: function(e, t, n) {
            "use strict";
            n.d(t, {
                A_: function() {
                    return l
                },
                j0: function() {
                    return u
                },
                GH: function() {
                    return d
                },
                Jl: function() {
                    return f
                }
            }),
            n(7588),
            n(6394),
            n(5334);
            var r = n(4559)
              , a = n.n(r);
            function i(e, t, n, r, a, i, o) {
                try {
                    var l = e[i](o)
                      , s = l.value
                } catch (e) {
                    return void n(e)
                }
                l.done ? t(s) : Promise.resolve(s).then(r, a)
            }
            function o(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);
                        function l(e) {
                            i(o, r, a, l, s, "next", e)
                        }
                        function s(e) {
                            i(o, r, a, l, s, "throw", e)
                        }
                        l(void 0)
                    }
                    ))
                }
            }
            function l(e, t, n, r) {
                return s.apply(this, arguments)
            }
            function s() {
                return (s = o(regeneratorRuntime.mark((function e(t, n, a, i) {
                    var o, l, s;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (s = function(e) {
                                    if (i instanceof Function) {
                                        var t = e;
                                        if (void 0 === e.response)
                                            t = {
                                                type: "network",
                                                error: e
                                            };
                                        else if (void 0 !== e.response.status)
                                            switch (e.response.status) {
                                            case 401:
                                                t = {
                                                    type: "private",
                                                    error: e,
                                                    message: "Media is private"
                                                };
                                                break;
                                            case 400:
                                                t = {
                                                    type: "unavailable",
                                                    error: e,
                                                    message: "Media is unavailable"
                                                }
                                            }
                                        i(t)
                                    }
                                }
                                ,
                                l = function(e) {
                                    a instanceof Function && a(e)
                                }
                                ,
                                o = {
                                    timeout: null,
                                    maxContentLength: null
                                },
                                !n) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6,
                                (0,
                                r.get)(t, o).then(l).catch(s || null);
                            case 6:
                                e.next = 9;
                                break;
                            case 8:
                                (0,
                                r.get)(t, o).then(l).catch(s || null);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function u(e, t, n, r, a, i) {
                return c.apply(this, arguments)
            }
            function c() {
                return (c = o(regeneratorRuntime.mark((function e(t, n, a, i, o, l) {
                    var s, u;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (u = function(e) {
                                    l instanceof Function && l(e)
                                }
                                ,
                                s = function(e) {
                                    o instanceof Function && o(e)
                                }
                                ,
                                n = n || {},
                                !i) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6,
                                (0,
                                r.post)(t, n, a || null).then(s).catch(u || null);
                            case 6:
                                e.next = 9;
                                break;
                            case 8:
                                (0,
                                r.post)(t, n, a || null).then(s).catch(u || null);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function d(e, t, n, r, a, i) {
                return m.apply(this, arguments)
            }
            function m() {
                return (m = o(regeneratorRuntime.mark((function e(t, n, a, i, o, l) {
                    var s, u;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (u = function(e) {
                                    l instanceof Function && l(e)
                                }
                                ,
                                s = function(e) {
                                    o instanceof Function && o(e)
                                }
                                ,
                                n = n || {},
                                !i) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6,
                                (0,
                                r.put)(t, n, a || null).then(s).catch(u || null);
                            case 6:
                                e.next = 9;
                                break;
                            case 8:
                                (0,
                                r.put)(t, n, a || null).then(s).catch(u || null);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function f(e, t, n, r, a) {
                return p.apply(this, arguments)
            }
            function p() {
                return (p = o(regeneratorRuntime.mark((function e(t, n, r, i, o) {
                    var l, s;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (s = function(e) {
                                    o instanceof Function && o(e)
                                }
                                ,
                                l = function(e) {
                                    i instanceof Function && i(e)
                                }
                                ,
                                n = n || {},
                                !r) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6,
                                a().delete(t, n || null).then(l).catch(s || null);
                            case 6:
                                e.next = 9;
                                break;
                            case 8:
                                a().delete(t, n || null).then(l).catch(s || null);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
        },
        7959: function(e, t, n) {
            "use strict";
            n.r(t),
            n(5677),
            n(6394),
            n(506),
            n(3224),
            n(597),
            n(3543),
            n(5210),
            n(5785),
            n(91),
            n(9595),
            n(3357),
            n(1816),
            n(5292),
            n(7445),
            n(4875),
            n(1608),
            n(2994),
            n(284),
            n(601),
            n(9494),
            n(6229),
            n(9149),
            n(9503),
            n(9617),
            n(1962),
            n(8097),
            n(2322),
            n(3296),
            n(4669),
            n(7441),
            n(2070),
            n(3675),
            n(2129),
            n(9268),
            n(2004),
            n(8407),
            n(8288),
            n(4655),
            n(288),
            n(4458),
            n(5101),
            n(3080);
            var r, a = n(1590), i = n.n(a), o = n(9722), l = n(473), s = n(9479);
            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function m(e, t) {
                return !t || "object" !== u(t) && "function" != typeof t ? f(e) : t
            }
            function f(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var h = null
              , g = null
              , v = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && d(e, t)
                }(v, e);
                var t, n, a, i, u = (a = v,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = p(a);
                    if (i) {
                        var n = p(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return m(this, e)
                }
                );
                function v(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, v),
                    t = u.call(this),
                    g = (0,
                    s.v)(window.MediaCMS),
                    r = new o.BrowserCache(g.site.id,86400),
                    (h = {
                        mediaAutoPlay: r.get("media-auto-play")
                    }).mediaAutoPlay = null === h.mediaAutoPlay || h.mediaAutoPlay,
                    t.browserEvents = (0,
                    l.BrowserEvents)(),
                    t.browserEvents.doc(t.onDocumentVisibilityChange.bind(f(t))),
                    t.browserEvents.win(t.onWindowResize.bind(f(t)), t.onWindowScroll.bind(f(t))),
                    t.notifications = function(e) {
                        var t = [];
                        function n(e) {
                            var n;
                            "string" == typeof e && t.push([(n = new Uint32Array(3),
                            window.crypto.getRandomValues(n),
                            (performance.now().toString(36) + Array.from(n).map((function(e) {
                                return e.toString(36)
                            }
                            )).join("")).replace(/./g, "" + Math.random() + Intl.DateTimeFormat().resolvedOptions().timeZone + Date.now())), e])
                        }
                        return e.map(n),
                        {
                            size: function() {
                                return t.length
                            },
                            push: n,
                            clear: function() {
                                t = []
                            },
                            messages: function() {
                                return function(e) {
                                    if (Array.isArray(e))
                                        return y(e)
                                }(e = t) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                        return Array.from(e)
                                }(e) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e)
                                            return y(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === n && e.constructor && (n = e.constructor.name),
                                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                                    }
                                }(e) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }();
                                var e
                            }
                        }
                    }(void 0 !== window.MediaCMS && void 0 !== window.MediaCMS.notifications ? window.MediaCMS.notifications : []),
                    t
                }
                return t = v,
                (n = [{
                    key: "onDocumentVisibilityChange",
                    value: function() {
                        this.emit("document_visibility_change")
                    }
                }, {
                    key: "onWindowScroll",
                    value: function() {
                        this.emit("window_scroll")
                    }
                }, {
                    key: "onWindowResize",
                    value: function() {
                        this.emit("window_resize")
                    }
                }, {
                    key: "initPage",
                    value: function(e) {
                        h.currentPage = e
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t, n;
                        switch (e) {
                        case "browser-cache":
                            t = r;
                            break;
                        case "media-auto-play":
                            t = h.mediaAutoPlay;
                            break;
                        case "config-contents":
                            t = g.contents;
                            break;
                        case "config-enabled":
                            t = g.enabled;
                            break;
                        case "config-media-item":
                            t = g.media.item;
                            break;
                        case "config-options":
                            t = g.options;
                            break;
                        case "config-site":
                            t = g.site;
                            break;
                        case "api-playlists":
                            n = e.split("-")[1],
                            t = g.api[n] || null;
                            break;
                        case "notifications-size":
                            t = this.notifications.size();
                            break;
                        case "notifications":
                            t = this.notifications.messages(),
                            this.notifications.clear();
                            break;
                        case "current-page":
                            t = h.currentPage
                        }
                        return t
                    }
                }, {
                    key: "actions_handler",
                    value: function(e) {
                        switch (e.type) {
                        case "INIT_PAGE":
                            this.initPage(e.page),
                            this.emit("page_init");
                            break;
                        case "TOGGLE_AUTO_PLAY":
                            h.mediaAutoPlay = !h.mediaAutoPlay,
                            r.set("media-auto-play", h.mediaAutoPlay),
                            this.emit("switched_media_auto_play");
                            break;
                        case "ADD_NOTIFICATION":
                            this.notifications.push(e.notification),
                            this.emit("added_notification")
                        }
                    }
                }]) && c(t.prototype, n),
                v
            }(i());
            t.default = (0,
            l.exportStore)(new v, "actions_handler")
        },
        541: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n),
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            }
            : function(e, t, n, r) {
                void 0 === r && (r = n),
                e[r] = t[n]
            }
            )
              , a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
            : function(e, t) {
                e.default = t
            }
            )
              , i = this && this.__importStar || function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                return a(t, e),
                t
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.VideoViewerActions = t.SearchFieldActions = t.ProfilePageActions = t.PlaylistViewActions = t.PlaylistPageActions = t.PageActions = t.MediaPageActions = void 0,
            t.MediaPageActions = i(n(979)),
            t.PageActions = i(n(6613)),
            t.PlaylistPageActions = i(n(5880)),
            t.PlaylistViewActions = i(n(9660)),
            t.ProfilePageActions = i(n(2472)),
            t.SearchFieldActions = i(n(2600)),
            t.VideoViewerActions = i(n(5464))
        },
        8578: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.VideoViewerStore = t.SearchFieldStore = t.ProfilePageStore = t.PlaylistViewStore = t.PlaylistPageStore = t.PageStore = t.MediaPageStore = void 0;
            var a = r(n(337));
            t.MediaPageStore = a.default;
            var i = r(n(7959));
            t.PageStore = i.default;
            var o = r(n(1566));
            t.PlaylistPageStore = o.default;
            var l = r(n(1439));
            t.PlaylistViewStore = l.default;
            var s = r(n(8024));
            t.ProfilePageStore = s.default;
            var u = r(n(7359));
            t.SearchFieldStore = u.default;
            var c = r(n(5641));
            t.VideoViewerStore = c.default
        }
    }, n = {};
    function r(e) {
        var a = n[e];
        if (void 0 !== a)
            return a.exports;
        var i = n[e] = {
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r),
        i.exports
    }
    r.m = t,
    r.amdO = {},
    e = [],
    r.O = function(t, n, a, i) {
        if (!n) {
            var o = 1 / 0;
            for (u = 0; u < e.length; u++) {
                n = e[u][0],
                a = e[u][1],
                i = e[u][2];
                for (var l = !0, s = 0; s < n.length; s++)
                    (!1 & i || o >= i) && Object.keys(r.O).every((function(e) {
                        return r.O[e](n[s])
                    }
                    )) ? n.splice(s--, 1) : (l = !1,
                    i < o && (o = i));
                l && (e.splice(u--, 1),
                t = a())
            }
            return t
        }
        i = i || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > i; u--)
            e[u] = e[u - 1];
        e[u] = [n, a, i]
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = function(e, t) {
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.j = 411,
    function() {
        var e = {
            411: 0
        };
        r.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, n) {
            var a, i, o = n[0], l = n[1], s = n[2], u = 0;
            for (a in l)
                r.o(l, a) && (r.m[a] = l[a]);
            if (s)
                var c = s(r);
            for (t && t(n); u < o.length; u++)
                i = o[u],
                r.o(e, i) && e[i] && e[i][0](),
                e[o[u]] = 0;
            return r.O(c)
        }
          , n = self.webpackChunkmediacms_frontend = self.webpackChunkmediacms_frontend || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }();
    var a = r.O(void 0, [431], (function() {
        return r(3683)
    }
    ));
    a = r.O(a)
}();
