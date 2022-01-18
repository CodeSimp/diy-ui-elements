const h3s = document.querySelectorAll('h3')
const frequentlySearched = document.querySelector('.frequently-searched')
const recentSearches = document.querySelectorAll('.recent-search')
const searchField = document.querySelector('input')
const openSearch = document.querySelector('button.open-search')
const closeSearch = document.querySelector('button.close-search')


const openSearchBar = ()=>{
    recentSearches.forEach(obj => obj.classList.remove('hide'))
    h3s.forEach(obj => obj.classList.remove('hide'))
    frequentlySearched.classList.remove('hide')
    closeSearch.classList.remove('hide')
    openSearch.classList.add('hide')
    searchField.focus()
}
const closeSearchBar = ()=>{
    recentSearches.forEach(obj => obj.classList.add('hide'))
    h3s.forEach(obj => obj.classList.add('hide'))
    frequentlySearched.classList.add('hide')
    closeSearch.classList.add('hide')
    openSearch.classList.remove('hide') 
    searchField.blur()
}

//The searchbar is closed initially
closeSearchBar()

openSearch.addEventListener('click', ()=>{
    openSearchBar()  
})
closeSearch.addEventListener('click', ()=>{
    closeSearchBar()  
})

document.addEventListener('keydown', (e)=>{
    
    if(e.key === 'Control'){
        openSearchBar()
    }
    else if(e.key === 'Escape'){
        closeSearchBar()
    }
})

