;((doc) => {
    'use strict';
    const scrl = s => n => {
        const a = doc.querySelector(n.getAttribute('href'));
        n.addEventListener('click', e => {
            e.preventDefault();
            a.scrollIntoView(s);
        });
    }
    ((k, s, d, e, b, v = s.getItem(k)) => {
        v || (e.style.display = 'block');
        v || b.addEventListener('click', () => {
            e && d.body.removeChild(e);
            s.setItem(k, '1')
        });
        v && d.body.removeChild(e);
    })(
        'ciasteczka',
        localStorage,
        doc,
        doc.querySelector('.cookies-and-privacy'),
        doc.querySelector('.cookies-and-privacy__hide'));
    ((c, b, d, t, n, a, s) => {
        const m = d.querySelector(t.getAttribute('href'));
        const cl = m.classList;
        const tcl = t.classList;
        d.addEventListener('click', () => {
            cl.remove(c);
            tcl.remove(b);
        });
        n.forEach(scrl(s));
        a.forEach(scrl(s))
        t.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            if (cl.contains(c)) cl.remove(c); else cl.add(c);
            if (tcl.contains(b)) tcl.remove(b); else tcl.add(b);
        });
    })(
        'open',
        'toggled',
        doc,
        doc.querySelector('.navbar .navbar-toggle'),
        doc.querySelectorAll('.navbar .js-nav'),
        doc.querySelectorAll('.js-cta'),
        {behavior: 'smooth'});
    ((greeting) => {
        console.log(atob(atob(greeting)));
    })("Q2dvS0lGOWZYMTlmSUY4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjhnSUNBZ0lDQWdJQ0FnSUNCZklDQWdJQ0JmSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjhnSUNCZklDQWdYd292SUNCZlh5QmNJSHdnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBb1h5a2dJQ0FnSUNBZ0lDQWdmQ0I4SUNBZ0tGOHBJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOElId2dmQ0I4SUh3Z2ZBcDhJQzhnSUZ3dklIeGZYeUFnSUY5Zlh5QmZYMThnSUNBZ0lDQmZYMThnWHlBZ1gxOWZJQ0FnSUNBZ2ZDQjhJQ0FnSUY4Z0lGOWZYeUJmWDE5Zlh5QWdJRjhnSUY5Zlh5QWdJQ0I4SUh3Z2ZDQjhJSHdnZkFwOElId2dJQ0I4SUNkZklGd2dMeUJmWHk4Z1h5QmNJQ0FnSUM4Z1gxOThJSHd2SUY4Z1hDQWdJQ0FnZkNCOElDQWdmQ0I4THlCZlgzeGZJQ0F2SUh3Z2ZDQjhMeUJmWDN3Z0lDQjhJSHdnZkNCOElId2dmQXA4SUZ4Zlh5OWNJSHdnZkNCOElDaGZmQ0FnWDE4dklDQWdJRnhmWHlCY0lId2dJRjlmTHlBZ0lDQWdmQ0I4WDE5ZmZDQjhJQ2hmWHlBdklDOThJSHhmZkNCOElDaGZYeUFnSUNCOFgzd2dmRjk4SUh4ZmZBb2dYRjlmWDE4dlgzd2dmRjk4WEY5ZlgxeGZYMTk4SUNBZ0lIeGZYMTh2WDN4Y1gxOWZmQ0FnSUNBZ1hGOWZYMTlmTDE5OFhGOWZYeTlmWDE5OFhGOWZMQ0I4WEY5Zlgzd2dJQ0FvWHlrZ0tGOHBJQ2hmS1FvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUY5Zkx5QjhDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjhYMTlmTHc9PQ==");
})(window.document);
