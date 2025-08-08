
const menuDataWindowsItems = [
    { label: "Choose browser", link : 'choose-browser-windows-en.html' },
    { label: "QQ" , link: 'clear-cache-qq-desktop-en.html'},
    { label: "Chrome", link: 'clear-cache-chrome-desktop-en.html' },
     { label: "Safari" ,link: 'clear-cache-safari-desktop-en.html'},
    { label: "Firefox" , link: 'clear-cache-firefox-desktop-en.html'},
    { label: "Opera", link: 'clear-cache-opera-desktop-en.html' },
    { label: "Yandex", link: 'clear-cache-yandex-desktop-en.html' },
]

const menuDataAndroidItems = [
    { label: "Choose browser", link : 'choose-browser-android-en.html' },
    { label: "Chrome" , link : 'clear-cache-chrome-android-en.html' },

    { label: "PWA" ,link : 'clear-cache-pwa-android-en.html'},
    { label: "Baidu", link : 'clear-cache-baidu-android-en.html' },
    { label: "Firefox" ,link : 'clear-cache-firefox-android-en.html'},
    { label: "Opera" ,link : 'clear-cache-opera-android-en.html'},
    { label: "Yandex" ,link : 'clear-cache-yandex-android-en.html'},
    { label: "Samsung Internet",link : 'clear-cache-samsung-internet-android-en.html' } ]

const menuDataIOSItems =[
    { label: "Choose browser", link : 'choose-browser-ios-en.html' },
    { label: "QQ" , link : 'clear-cache-qq-ios-en.html' },
    { label: "Chrome", link : 'clear-cache-chrome-ios-en.html' },
    { label: "Safari",link : 'clear-cache-safari-ios-en.html' },
    { label: "Baidu",link : 'clear-cache-baidu-ios-en.html' },
    { label: "Firefox",link : 'clear-cache-firefox-ios-en.html' },
    { label: "Opera" , link : 'clear-cache-opera-ios-en.html'},
    { label: "Yandex",link : 'clear-cache-yandex-ios-en.html' },

]

const menuDataMacOSItems =[
    { label: "Choose browser", link : 'choose-browser-mac-en.html' },
    { label: "QQ" , link : 'clear-cache-qq-desktop-en.html' },
    { label: "Chrome", link : 'clear-cache-chrome-desktop-en.html' },
    { label: "Safari",link : 'clear-cache-safari-desktop-en.html' },
    { label: "Firefox",link : 'clear-cache-firefox-desktop-en.html' },
    { label: "Opera" , link : 'clear-cache-opera-desktop-en.html'},
    { label: "Yandex",link : 'clear-cache-yandex-desktop-en.html' },

]

const menuDataEn = [
    {
        label: "The room is not loading",
        children: [
            { label: "Choose device", link: "choose-device-en.html" },
            {
                label: "IOS",link: 'choose-browser-ios-en.html',
                children: menuDataIOSItems
            },
            {
                label: "MacOS", link: 'choose-browser-mac-en.html',
                children:  menuDataMacOSItems
            },
            {
                label: "Android", link: 'choose-browser-android-en.html',
                children: menuDataAndroidItems
            },
            {
                label: "Windows", link: 'choose-browser-windows-en.html',
                children: menuDataWindowsItems
            }
        ]
    },
    {
        label: "The loading screen freezes",
        children: [
            { label: "Choose device", link: "choose-device-en.html" },
            {
                label: "IOS",link: 'choose-browser-ios-en.html',
                children: menuDataIOSItems
            },
            {
                label: "MacOS", link: 'choose-browser-mac-en.html',
                children: menuDataMacOSItems,
            },
            {
                label: "Android", link: 'choose-browser-android-en.html',
                children: menuDataAndroidItems
            },
            {
                label: "Windows", link: 'choose-browser-windows-en.html',
                children: menuDataWindowsItems
            }
        ]
    },
    {
        label: "App endless loading",
        children: [
            { label: "Choose device", link: "choose-device-en.html" },
            {
                label: "IOS",
                children: menuDataIOSItems
            },
            {
                label: "MacOS",
                children: menuDataMacOSItems
            },
            {
                label: "Android",
                children: menuDataAndroidItems
            },
            {
                label: "Windows",
                children: menuDataWindowsItems
            }
        ]
    } ,
    {
        label: "How to install app",
        children: [
            { label: "Choose device",link: "choose-device-en.html"},
            {
                label: "IOS", link: 'how-to-install-pwa-ios-en.html',

            },
            {
                label: "Android",link: 'how-to-install-pwa-android-en.html'

            },

        ]
    },
    {
        label: "How to reinstall app",
        children: [
            { label: "Choose device",link: "choose-device-en.html"},
            {
                label: "IOS", link: 'how-to-reinstall-pwa-ios-en.html',

            },
            {
                label: "Android",link: 'how-to-reinstall-pwa-android-en.html'

            },

        ]
    },
    {
        label: "How to uninstall app",
        children: [
            { label: "Choose device", link: "choose-device-en.html"},
            {
                label: "IOS", link: 'how-to-uninstall-pwa-ios-en.html',

            },
            {
                label: "Android",link: 'how-to-uninstall-pwa-android-en.html'

            },

        ]
    }
];
