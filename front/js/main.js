(function () {

    const apiURL = 'https://fav-prom.com/api_lord_of_the_air'

    let isVerifiedUser = false;

    let tableData = []
    let activeWeek = null

    let periodAmount = 3

    const mainPage = document.querySelector(".fav-page"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.btn-join'),
        loader = document.querySelector(".spinner-overlay"),
        resultsTable = document.querySelector("#table"),
        resultsTableOther = document.querySelector("#tableOther"),
        secondTable = document.querySelector("#secondTable"),
        secondTableOther = document.querySelector("#secondTableOther"),
        tabs = document.querySelectorAll('.table__tabs-item');
        // tabsMain = document.querySelector("[data-tabs='main']").querySelectorAll(".table__tabs-item"),
        // tabsSecond = document.querySelector("[data-tabs='main']").querySelectorAll(".table__tabs-item")

    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });

    let loaderBtn = false

    // let locale = "en"
    let locale = sessionStorage.getItem("locale") || "uk"

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let debug = false

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = true;
    // let userId = null;
    let userId = Number(sessionStorage.getItem("userId")) ?? null

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        })
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .catch(err => {
                console.error('API request failed:', err);

                reportError(err);

                document.querySelector('.fav-page').style.display = 'none';
                if (window.location.href.startsWith("https://www.favbet.hr/")) {
                    window.location.href = '/promocije/promocija/stub/';
                } else {
                    window.location.href = '/promos/promo/stub/';
                }

                return Promise.reject(err);
            });

    }

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
    }

    async function init() {
        let attempts = 0;
        const maxAttempts = 20;
        const attemptInterval = 50;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }

        function quickCheckAndRender() {
            checkUserAuth()
                .then(loadUsers)
                .then(() =>{
                    setTimeout(hideLoader, 300);
                    tabs.forEach(item => {
                        item.classList.remove('active')
                        const num = Number(item.getAttribute('data-week'))
                        if(num === activeWeek) item.classList.add('active');
                        if(num > activeWeek) item.classList.add('lock');
                    });

                    renderUsers(activeWeek, tableData);
                    document.addEventListener('click', e => {
                        if (e.target.closest('.part-btn')) participate(e);

                        if (e.target.closest(".table__tabs-item")){
                            const tab = e.target.closest(".table__tabs-item")
                           const week = Number(tab.getAttribute('data-week'));

                            if(week > activeWeek || week === activeWeek) return

                           tabs.forEach(item => {
                               item.classList.remove('active')
                               const num = Number(item.getAttribute('data-week'))
                               if(num === week) item.classList.add('active');
                           });

                           renderUsers(week, tableData);
                           tab.classList.add('active');

                        }
                    });
                    // participateBtns.forEach(btn => btn.addEventListener('click', participate));
                })
            }

        const waitForUserId = new Promise((resolve) => {
            const interval = setInterval(() => {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                    quickCheckAndRender();
                    clearInterval(interval);
                    resolve();
                }
                attempts++;
            }, attemptInterval);
        });

        await waitForUserId;
    }

    function loadTranslations() {
        return request(`/new-translates/${locale}?nocache=1`)
            .then(json => {
                i18nData = json;
                translate();
            });
    }


    function checkUserAuth() {
        console.log(userId)
        if (userId) {
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.add('hide');
            }
            return request(`/favuser/${userId}?nocache=1`)
                .then(res => {
                    if (res.userid) {
                        participateBtns.forEach(item => item.classList.add('hide'));
                        redirectBtns.forEach(item => item.classList.remove('hide'));
                        isVerifiedUser = true;
                        console.log(isVerifiedUser)
                    } else {
                        participateBtns.forEach(item => item.classList.remove('hide'));
                        redirectBtns.forEach(item => item.classList.add('hide'));
                        isVerifiedUser = false;
                    }

                })
        } else {
            for (let redirectBtn of redirectBtns) {
                redirectBtn.classList.add('hide');
            }
            for (let participateBtn of participateBtns) {
                participateBtn.classList.add('hide');
            }
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.remove('hide');
            }

            return Promise.resolve(false);
        }
    }

    function reportError(err) {
        const reportData = {
            origin: window.location.href,
            userid: userId,
            errorText: err?.error || err?.text || err?.message || 'Unknown error',
            type: err?.name || 'UnknownError',
            stack: err?.stack || ''
        };

        fetch('https://fav-prom.com/api-cms/reports/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
        }).catch(console.warn);
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    if (i18nData[key]) {
                        elem.removeAttribute('data-translate');
                    }
                })
            }else{
                console.log("translation works!")
            }
        }
        if (locale === 'en') {
            mainPage.classList.add('en');
        }
        refreshLocalizedClass(mainPage);
    }

    function refreshLocalizedClass(element) {
        let baseCssClass = ""
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }

    function renderUsers(weekNum, userData = []) {
        weekNum = Number(weekNum);
        console.log(userData)
        const weekObj = userData.find(w => w.week === weekNum);
        if (!weekObj || !weekObj.data || !Array.isArray(weekObj.data.users)) {
            console.error('Невірна структура даних');
            return;
        }

        const isStageEnded = userData.isStageEnded

        userData = weekObj.data.users;

        const winnerAdditionalPrize = userData.find(u => {
            if(u.winner === true){
                return u
            }
        });

        console.log(userData);





        console.log(winnerAdditionalPrize);

        const currentUser = userData.find(user => user.userid === userId);

        // console.log(userId)
        // console.log(currentUser)
        // console.log(isVerifiedUser)

        if(userId && !currentUser && isVerifiedUser){
            userData = [...userData, {userid: userId, points: 0}]
        }
        console.log(userData);

        populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize);
    }

    function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize) {

        console.log(users);
        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';
        secondTableOther.innerHTML = '';
        secondTable.innerHTML = '';
        if (!users?.length) return;

        const isTopCurrentUser = currentUser && users.slice(0, 10).some(user => user.userid === currentUserId);

        const topUsersLength = !userId || isTopCurrentUser  ? 10 : 10;

        const topUsers = users.slice(0, topUsersLength);

        topUsers.forEach(user => {
            displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
        });
        if(isVerifiedUser && !currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }
        if (!isTopCurrentUser && currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }
        if (winnerAdditionalPrize) {
            if(currentUser){
                displaySecondUser(winnerAdditionalPrize, true , secondTableOther, [winnerAdditionalPrize], true)
            }else{
                displaySecondUser(winnerAdditionalPrize, false , secondTableOther, [winnerAdditionalPrize], false)
            }
        }
        else {
            secondTable.innerHTML = `<div class="table__row"> ${translateKey(isStageEnded ? "noWinnerHoodie" : "waitingWinnerHoodie")} </div>`
        }
    }

    function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {

        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');

            const userPlace = users.indexOf(userData) + 1;
            const prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);

            if (userPlace <= 3) {
                userRow.classList.add(`place${userPlace}`);
            }

            if (highlight || isCurrentUser && !neighbor) {
                userRow.classList.add('you');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${userPlace < 10 ? '0' + userPlace : userPlace}
                ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
            </div>
            <div class="table__row-item">
                ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
            </div>
            <div class="table__row-item">
                ${Number(userData.points).toFixed(2)}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : ' - '}
            </div>
        `;

            table.append(userRow);
        };
        if (isCurrentUser && !isTopCurrentUser) {
            const index = users.indexOf(user);
            if (users[index - 1]) {
                renderRow(users[index - 1], { neighbor: true });
            }
            renderRow(user, { highlight: true });
            if (users[index + 1]) {
                renderRow(users[index + 1], { neighbor: true });
            }
        } else {
            renderRow(user);
        }
    }

    function displaySecondUser(user, isCurrentUser, table, users, isTopCurrentUser) {

        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');
            const prizeKey = "prize_hoodie"

            if (highlight || isCurrentUser && !neighbor) {
                userRow.classList.add('you');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
                ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
            </div>
            <div class="table__row-item">
                ${Number(userData.coefIn).toFixed(2)}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : " - "}
            </div>
        `;

            table.append(userRow);
        };
        if (isCurrentUser && !isTopCurrentUser) {
            renderRow(user, { highlight: true });
        } else {
            renderRow(user);
        }
    }

    function translateKey(key, defaultValue) {
        if (!key) {
            return;
        }
        let needKey = debug ? key : `*----NEED TO BE TRANSLATED----* key: ${key}`

        defaultValue =  needKey || key;
        return i18nData[key] || defaultValue;
    }

    function maskUserId(userId) {
        return "**" + userId.toString().slice(2);
    }

    function getPrizeTranslationKey(place, week) {
        week = 1 // в цьому проміку для всіх стейджів однакові призи тому week = 1
        if (place <= 12) return `prize_${week}-${place}`;
        if (place <= 16) return `prize_${week}-13-16`;
        if (place <= 19) return `prize_${week}-17-19`;
        if (place <= 29) return `prize_${week}-20-29`;
        if (place <= 40) return `prize_${week}-30-40`;
        if (place <= 80) return `prize_${week}-41-80`;
        if (place <= 113) return `prize_${week}-81-113`;
        if (place <= 130) return `prize_${week}-114-130`;
        if (place <= 150) return `prize_${week}-131-150`;
        if (place <= 170) return `prize_${week}-151-170`;
        if (place <= 200) return `prize_${week}-171-200`;
    }

    function participate() {
        if (!userId) {
            return;
        }
        const params = { userid: userId };
        fetch(apiURL + '/user/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                loaderBtn = true
                toggleClasses(participateBtns, "loader")
                toggleTranslates(participateBtns, "loader")
                setTimeout(() =>{
                    toggleTranslates(participateBtns, "loader_ready")
                    toggleClasses(participateBtns, "done")
                    toggleClasses(participateBtns, "loader")
                }, 500)
                setTimeout(()=>{
                    checkUserAuth()
                    loadUsers("?nocache=1").then(res => {
                        renderUsers(activeWeek, tableData)
                    })
                }, 1000)

            })
            .catch(err => {
                console.error('API request failed:', err);

                reportError(err);

                document.querySelector('.fav-page').style.display = 'none';
                if (window.location.href.startsWith("https://www.favbet.hr/")) {
                    window.location.href = '/promocije/promocija/stub/';
                } else {
                    window.location.href = '/promos/promo/stub/';
                }

                return Promise.reject(err);
            });
    }

    function loadUsers(parametr) {
        const requests = [];
        tableData.length = 0

        for (let i = 1; i <= periodAmount; i++) {
            const week = i; // або будь-яка логіка для формування номера тижня
            const req = request(`/users/${week}${parametr ? parametr : ""}`).then(data => {
                console.log(data);
                tableData.push({ week, data: data });
                if(!activeWeek){
                    activeWeek = data.activeStageNumber
                }

            });

            requests.push(req);
        }

        return Promise.all(requests)
        .catch(error => {
            console.error('Error loading users:', error);
        });
    }

    loadTranslations()
        .then(init) // запуск ініту сторінки

    // TEST

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".menu-btn")?.addEventListener("click", () => {
            document.querySelector(".menu-test")?.classList.toggle("hide");
        });
    });

    const lngBtn = document.querySelector(".lng-btn")

    lngBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
        } else {
            sessionStorage.setItem("locale", "en");
        }
        window.location.reload();
    });

    const authBtn = document.querySelector(".auth-btn")

    authBtn.addEventListener("click", () =>{
        if(userId){
            sessionStorage.removeItem("userId")
        }else{
            sessionStorage.setItem("userId", "777777")
        }
        window.location.reload()
    });

})();
