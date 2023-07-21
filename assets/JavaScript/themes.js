const themeOneBtn = document.getElementById('theme-1')
const themeTwoBtn = document.getElementById('theme-2')
const themeThreeBtn = document.getElementById('theme-3')
let theme = 0;

// theme array
const themes = [
    { '--main-background': 'hsl(222, 26%, 31%)',
        '--toggle-background':' hsl(223, 31%, 20%)',
        '--keypad-background': 'hsl(223, 31%, 20%)',
        '--key-toggle': 'hsl(7,93%,67%)',
        '--screen-background': 'hsl(224, 36%, 15%)',
        '--key-background': 'hsl(34,24%,89%)',
        '--key-shadow':'hsl(28, 16%, 65%)',
        '--alt-key-background': 'hsl(225, 21%, 49%)',
        '--alt-key-shadow': 'hsl(224, 28%, 35%)',
        '--alt-key-toggle': 'hsl(6, 63%, 50%)',
        '--alt-key-background-two': 'hsl(6, 63%, 50%)',
        '--alt-key-shadow-two':'hsl(6, 70%, 34%)',
        '--btn-text': 'hsl(221, 14%, 31%)',
        '--header-text': 'hsl(0, 0%, 100%)',
        '--hover': 'hsl(0,0%,100%)',
        '--alt-hover-two': 'hsl(7,93%,67%)',
        '--alt-hover': 'hsl(225,50%,76%)',
        '--alt-btn-text': 'hsl(0, 0%, 100%)',
        '--alt-btn-text-two': 'hsl(0, 0%, 100%)'
    },
    {
        '--main-background': 'hsl(0, 0%, 90%)',
        '--toggle-background':' hsl(195,2%,60%)',
        '--keypad-background': 'hsl(0,6%,82%)',
        '--key-toggle': 'hsl(25, 98%, 40%)',
        '--screen-background': 'hsl(0, 0%, 93%)',
        '--key-background': 'hsl(34,24%,89%)',
        '--key-shadow': 'hsl(35,10%,61%)',
        '--alt-key-background': 'hsl(185, 42%, 37%)',
        '--alt-key-shadow': 'hsl(185, 58%, 25%)',
        '--alt-key-toggle': 'hsl(25,100%,61%)',
        '--alt-key-background-two': 'hsl(25, 98%, 40%)',
        '--alt-key-shadow-two': 'hsl(25, 99%, 27%)',
        '--header-text': 'hsl(60, 10%, 19%)',
        '--btn-text': 'hsl(60, 10%, 19%)',
        '--alt-btn-text': 'hsl(0, 0%, 100%)',
        '--alt-btn-text-two': 'hsl(0, 0%, 100%)',
        '--hover': 'hsl(0,0%,100%)',
        '--alt-hover': 'hsl(186,42%,56)',
        '--alt-hover-two': 'hsl(25,100%,61%',
    },
    {
        '--main-background': 'hsl(268, 75%, 9%)',
        '--toggle-background':'hsl(268, 71%, 12%)',
        '--keypad-background': 'hsl(268, 71%, 12%)',
        '--key-toggle': 'hsl(176,90%,70%)',
        '--screen-background': 'hsl(268, 71%, 12%)',
        '--key-background': ' hsl(269,48%,20%)',
        '--key-shadow':  'hsl(290, 70%, 36%)',
        '--alt-key-background': 'hsl(280,88%,26%)',
        '--alt-key-shadow': 'hsl(285,88%,52%',
        '--alt-key-toggle': 'hsl(177,100%,79%)',
        '--alt-key-background-two': 'hsl(176,99%,44%)',
        '--alt-key-shadow-two': 'hsl(176,89%,70%)',
        '--header-text': 'hsl(52, 100%, 62%)',
        '--btn-text': 'hsl(52, 100%, 62%)',
        '--alt-btn-text': 'hsl(0, 0%, 100%)',
        '--alt-btn-text-two': 'hsl(198, 20%, 13%)',
        '--hover': 'hsl(268,54%,44%)',
        '--alt-hover': 'hsl(280,56%,44%)',
        '--alt-hover-two': 'hsl(177,100%,79%)',
    }
]

// handles theme 1 button click
themeOneBtn.addEventListener('click', () =>{
    theme = 0
    setTheme()
})

// handles theme 2 button click
themeTwoBtn.addEventListener('click', () =>{
    theme = 1
    setTheme()
})

// handles theme 3 button click
themeThreeBtn.addEventListener('click', () =>{
    theme = 2
    setTheme()
})

// changes theme
const setTheme = () =>{
    Object.entries(themes[theme]).map(
        ([key, value]) => {
            document.documentElement.style.setProperty(key,value)
        }
    )
}

setTheme();