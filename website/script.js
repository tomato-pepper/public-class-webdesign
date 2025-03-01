// 蛛网点击特效
!function () {
    function n(n, e, t) {
        return n.getAttribute(e) || t
    }
 
    function e(n) {
        return document.getElementsByTagName(n)
    }
 
    function t() {
        var t = e("script"), o = t.length, i = t[o - 1];
        return {l: o, z: n(i, "zIndex", -1), o: n(i, "opacity", .5), c: n(i, "color", "255,0,0"), n: n(i, "count", 99)}
    }
 
    function o() {
        a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
 
    function i() {
        r.clearRect(0, 0, a, c);
        var n, e, t, o, m, l;
        s.forEach(function (i, x) {
            for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e], null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + Math.max(t + .2, 0.3) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
        }), x(i)
    }
 
    var a, c, u, m = document.createElement("canvas"), d = t(), l = "c_n" + d.l, r = m.getContext("2d"),
        x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (n) {
            window.setTimeout(n, 1e3 / 45)
        }, w = Math.random, y = {x: null, y: null, max: 2e4};
    m.id = l, m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o, e("body")[0].appendChild(m), o(), window.onresize = o, window.onmousemove = function (n) {
        n = n || window.event, y.x = n.clientX, y.y = n.clientY
    }, window.onmouseout = function () {
        y.x = null, y.y = null
    };
    for (var s = [], f = 0; d.n > f; f++) {
        var h = w() * a, g = w() * c, v = 2 * w() - 1, p = 2 * w() - 1;
        s.push({x: h, y: g, xa: v, ya: p, max: 6e3})
    }
    u = s.concat([y]), setTimeout(function () {
        i()
    }, 100)
}();


// 表单提交事件
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取表单数据
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 简单验证
    if (name && email && message) {
        alert('感谢您的留言！我们会尽快联系您。');
        document.getElementById('contactForm').reset(); // 清空表单
    } else {
        alert('请填写所有字段。');
    }
});



// 页面搜索工具定义
// 更新script.js中的搜索功能
document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.getElementById('searchToggle');
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');

    // 切换搜索框可见性
    searchToggle.addEventListener('click', (e) => {
        e.preventDefault();
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // 实时搜索功能
    searchInput.addEventListener('input', debounce(performSearch, 300));

    // 提交搜索
    document.getElementById('searchSubmit').addEventListener('click', performSearch);

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        resultsContainer.innerHTML = '';
        
        if (!query) {
            resultsContainer.classList.remove('active');
            return;
        }

        // 遍历所有可搜索内容
        const searchables = document.querySelectorAll('[data-searchable]');
        const matches = [];
        
        searchables.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(query)) {
                const title = section.querySelector('h2, h3').textContent;
                matches.push({
                    title,
                    id: section.id,
                    content: text.substring(0, 150) + '...'
                });
            }
        });

        // 显示结果
        if (matches.length) {
            matches.forEach(match => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <h4><a href="#${match.id}">${match.title}</a></h4>
                    <p>${match.content}</p>
                `;
                resultsContainer.appendChild(item);
            });
            resultsContainer.classList.add('active');
        } else {
            resultsContainer.innerHTML = '<div class="search-result-item">未找到相关结果</div>';
            resultsContainer.classList.add('active');
        }
    }

    // 防抖函数优化性能
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // 点击外部关闭搜索结果
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            resultsContainer.classList.remove('active');
        }
    });
});

