jQuery(function() {
    var e = jQuery('#noscript').hide();
    var i = '\',.pyfgcrl/=\\aoeuidhtns-;qjkxbmwvz"<>PYFGCRL?+|AOEUIDHTNS_:QJKXBMWVZ[]1234567890{}'.split('');
    var o = 'qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?-=0987654321_+'.split('');
    var tr = function(s) {
        r = '';
        jQuery.each(s.split(''), function() {
            var t = this.toString();
            var c = jQuery.inArray(t, i);
            r += '$' == t ? n : (-1 == c ? t : o[c])
        });
        return r
    };
    var a = ['O.nu[jrmlapcorb e.y.jy.ev', 'Cbcycaycbi cbucbcy. nrrl .ojd.,an lpryrjrnv', 'O.nu e.oypgjy cbvvv 8', '9', '0'];
    var b = ['<at. glw $vvv', 'Yd. Maypcq dao frgvvv', 'Urnnr, yd. ,dcy. paxxcyv'];
    var ll = [];
    var h = jQuery(tr('#dan'));
    jQuery(tr('dymn')).keypress(function(e) {
        if (27 !== e.keyCode) {
            return
        }
        if (history && history.back) {
            history.back();
            return false
        }
        window.location = jQuery(tr('#irxajt')).attr('href');
        return false
    });
    var hal = function() {
        var l = a.shift();
        if ('undefined' == typeof l) {
            if (hal3) {
                var c = {};
                c[tr('xajtiprgbeJrnrp')] = tr('xnajt');
                c[tr('jrnrp')] = tr('ip..b');
                jQuery(tr('dymnw xref')).css(c);
                p();
                h.hide().animate({
                    opacity: 1
                }, 3000, 'linear', function() {
                    h.show()
                });
                setTimeout(hal3, 4000)
            }
            return
        }
        ll = tr(l).split('');
        hal2()
    };
    var hal2 = function() {
        lll = ll.shift();
        if ('undefined' == typeof lll) {
            if (hal3) {
                h.before(tr('Wxp zV'));
                setTimeout(hal, 2000)
            } else {
                if (a.length) {
                    setTimeout(p, 2000);
                    setTimeout(hal, 3000)
                } else {
                    setTimeout(function() {
                        p();
                        h.hide()
                    }, 2000);
                    setTimeout(function() {
                        e.show()
                    }, 4000)
                }
            }
            return
        }
        h.before(lll.toString());
        setTimeout(hal2, 100)
    };
    var hal3 = function() {
        a = b;
        hal3 = null;
        hal()
    };
    p = function() {
        var pp = jQuery('p').get(0);
        var ppp = jQuery.makeArray(pp.childNodes).reverse();
        for (var ppp = pp.childNodes.length; ppp > 0; ppp--) {
            if (3 == pp.childNodes[ppp - 1].nodeType || 'br' == pp.childNodes[ppp - 1].nodeName.toLowerCase()) {
                pp.removeChild(pp.childNodes[ppp - 1])
            }
        }
    };
    setTimeout(hal, 3000)
});

