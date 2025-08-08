
const menuDataWindowsItems = [
    { label: "选择浏览器 ", link : 'choose-browser-windows.html' },
    { label: "QQ浏览器" , link: 'clear-cache-qq-desktop.html'},
    { label: "谷歌浏览器", link: 'clear-cache-chrome-desktop.html' },
    { label: "Safari浏览器" ,link: 'clear-cache-safari-desktop.html'},
    { label: "火狐浏览器" , link: 'clear-cache-firefox-desktop.html'},
    { label: "Opera浏览器", link: 'clear-cache-opera-desktop.html' },
    { label: "Yandex浏览器", link: 'clear-cache-yandex-desktop.html' },
]

const menuDataAndroidItems = [
    { label: "选择浏览器", link : 'choose-browser-android.html' },
    { label: "谷歌浏览器" , link : 'clear-cache-chrome-android.html' },

    { label: "PWA" ,link : 'clear-cache-pwa-android.html'},
    { label: "Baidu浏览器", link : 'clear-cache-baidu-android.html' },
    { label: "Firefox" ,link : 'clear-cache-firefox-android.html'},
    { label: "Opera浏览器" ,link : 'clear-cache-opera-android.html'},
    { label: "Yandex浏览器" ,link : 'clear-cache-yandex-android.html'},
    { label: "Samsung Internet浏览器",link : 'clear-cache-samsung-internet-android.html' } ]

const menuDataIOSItems =[
    { label: "选择浏览器 ", link : 'choose-browser-ios.html' },
    { label: "QQ浏览器" , link : 'clear-cache-qq-ios.html' },
    { label: "谷歌浏览器", link : 'clear-cache-chrome-ios.html' },
    { label: "Safari浏览器",link : 'clear-cache-safari-ios.html' },
    { label: "Baidu浏览器",link : 'clear-cache-baidu-ios.html' },
    { label: "Firefox浏览器",link : 'clear-cache-firefox-ios.html' },
    { label: "Opera浏览器" , link : 'clear-cache-opera-ios.html'},
    { label: "Yandex浏览器",link : 'clear-cache-yandex-ios.html' },

]

const menuDataMacOSItems =[
    { label: "选择浏览器", link : 'choose-browser-mac.html' },
    { label: "QQ浏览器" , link : 'clear-cache-qq-desktop.html' },
    { label: "谷歌浏览器", link : 'clear-cache-chrome-desktop.html' },
    { label: "Safari浏览器",link : 'clear-cache-safari-desktop.html' },
    { label: "Firefox浏览器",link : 'clear-cache-firefox-desktop.html' },
    { label: "Opera浏览器" , link : 'clear-cache-opera-desktop.html'},
    { label: "Yandex浏览器",link : 'clear-cache-yandex-desktop.html' },

]
const menuData  = [
    {
        label: "房间无法加载",
        children: [
            { label: "选择设备", link: "choose-device.html" },
            {
                label: "IOS", link: 'choose-browser-ios.html',
                children: menuDataIOSItems
            },
            {
                label: "MacOS", link: 'choose-browser-mac.html',
                children: menuDataMacOSItems
            },
            {
                label: "Android", link: 'choose-browser-android.html',
                children: menuDataAndroidItems
            },
            {
                label: "Windows", link: 'choose-browser-windows.html',
                children: menuDataWindowsItems
            }
        ]
    },
    {
        label: "加载画面卡住",
        children: [
            { label: "选择设备", link: "choose-device.html" },
            {
                label: "IOS", link: 'choose-browser-ios.html',
                children: menuDataIOSItems
            },
            {
                label: "MacOS", link: 'choose-browser-mac.html',
                children: menuDataMacOSItems
            },
            {
                label: "Android", link: 'choose-browser-android.html',
                children: menuDataAndroidItems
            },
            {
                label: "Windows", link: 'choose-browser-windows.html',
                children: menuDataWindowsItems
            }
        ]
    },
    {
        label: "应用程序无限加载",
        children: [
            { label: "选择设备", link: "choose-device.html" },
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
    },
    {
        label: "如何安装应用程序",
        children: [
            { label: "选择设备" ,link: "choose-device.html"},
            {
                label: "iOS", link: 'how-to-install-pwa-ios.html',
            },
            {
                label: "安卓", link: 'how-to-install-pwa-android.html',
            },
        ]
    },
    {
        label: "如何重新安装应用程序",
        children: [
            { label: "选择设备",link: "choose-device.html" },
            {
                label: "iOS", link: 'how-to-reinstall-pwa-ios.html',
            },
            {
                label: "安卓", link: 'how-to-reinstall-pwa-android.html',
            },
        ]
    },
    {
        label: "如何卸载应用程序",
        children: [
            { label: "选择设备" ,link: "choose-device.html"},
            {
                label: "iOS", link: 'how-to-uninstall-pwa-ios.html',
            },
            {
                label: "安卓", link: 'how-to-uninstall-pwa-android.html',
            },
        ]
    }

];
