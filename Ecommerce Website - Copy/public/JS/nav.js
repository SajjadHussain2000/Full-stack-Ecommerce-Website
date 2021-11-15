const createNav = () => {
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
    <div class="nav">
            <img src="../img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, products">
                    <button class="search-btn">search</button>
                </div>
                <a>
                    <img src="../img/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Login as, name</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="/cart"><img src="../img/cart.png" alt=""></a>
            </div>
        </div>
        <uln class="links-container">
            <li class="link-items"><a href="#" class="links">home</a></li>
            <li class="link-items"><a href="#" class="links">women</a></li>
            <li class="link-items"><a href="#" class="links">men</a></li>
            <li class="link-items"><a href="#" class="links">kids</a></li>
            <li class="link-items"><a href="#" class="links">accessories</a></li>
        </ul>
    `;
}

createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', ()=>{
    userPop.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        popuptext.innerHTML = `log in as ${user.name}`;
        actionBtn.innerHTML = 'logout';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    }else{
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML ='login';
        actionBtn.addEventListener('click', ()=> {
            location.href = '/login';
        })
    }
}


//search box
const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');

searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href = `/search/${searchBox.value}`;
    }
})