/* ==== script parameters ==== */
setTimeout(function ()
{
dp.init(
{
    containerID: "screen",
    gridX: 12,
    gridY: 6,
    imagesPath: "./",
    timeout: 153, // 10 seconds
    flash: { r: 229, g: 223, b: 235 },
    fadein:
    {
    alpha: 100,
    alphaTarget: 0,
    step: -5,
    endFlash: 80,
    nextCell: 90,
    nextStep: 0,
    },
    fadeout:
    {
    alpha: 0,
    alphaTarget: 60,
    step: 5,
    endFlash: 20,
    nextCell: 10,
    nextStep: 40,
    },
    menu: [
    {
        html: '1',
        target: 0
    },
    {
        html: '2',
        target: 1,
        submenu: {
        title: '2. 서브메뉴',
        lines: [
            {
            html: '소통광장',
            text: [
            {
                id: "thumb1",
                x: 6, y: 3, w: 6, h: 3
            }]
            },
            {
            html: '민원',
            text: [{
                html: ' ',
                x: 4, y: 0, w: 1, h: 4
            },
            {
                id: "thumb2",
                x: 0, y: 2, w: 5, h: 1
            }]
            },
            {
            html: '정보공개',
            text: [{
                html: ' ',
                x: 2, y: 0, w: 1, h: 4
            },
            {
                html: ' ',
                x: 4, y: 0, w: 1, h: 4
            },
            {
                id: "thumb3",
                x: 2, y: 1, w: 3, h: 2
            }]
            },
            {
            html: '인천소개',
            fullImage: "eve06.jpg"
            }
        ]
        }
    },
    {
        html: '3',
        target: 2
    },
    {
        html: '4',
        target: 3
    }
    ],
    page: [
    { // page 1
    backgroundImage: "./img/eve01.png",
    menuBackgroundColor: { r: 108, g: 13, b: 15 },
    text: [
        {
        html: ' ',
        x: 0, y: 2, w: 2, h: 2
        },
        {
        id: "txt1",
        x: 10, y: 3, w: 2, h: 2
        },
        {
        html: '<h1>MARVEL STUDIO</h1>',
        x: 9, y: 2, w: 1, h: 1
        }
    ],
    menuTarget: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 3 },
        { x: 0, y: 5 }
    ]
    },
    { // page 2
    backgroundImage: "./img/eve02.png",
    menuBackgroundColor: { r: 108, g: 13, b: 15 },
    text: [{
        html: '<a href="https://seongho7167.github.io/interact3/">사이트로<br> 바로가기'+'<span class="xi-external-link"></span></a>',
        x: 11, y: 0, w: 1, h: 1
        },
        {
        id: "txt2",
        x: 8, y: 1, w: 3, h: 1
        },
        {
        html: '<h1>인천광역시청</h1>',
        x: 7, y: 0, w: 1, h: 1
        }
    ],
    menuTarget: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 0 },
        { x: 3, y: 1 }
    ]
    },
    { // page 3
    backgroundImage: "./img/eve03.png",
    menuBackgroundColor: { r: 108, g: 13, b: 15 },
    text: [{
        html: ' ',
        x: 0, y: 0, w: 1, h: 1
        },
        {
        html: ' ',
        x: 5, y: 0, w: 1, h: 1
        },
        {
        id: "txt3",
        x: 2, y: 1, w: 3, h: 2
        },
        {
        html: '<h1>청와대</h1>',
        x: 5, y: 2, w: 1, h: 1
        }
    ],
    menuTarget: [
        { x: 1, y: 0 },
        { x: 1, y: 2 },
        { x: 5, y: 3 },
        { x: 5, y: 1 }
    ]
    },
    { // page 4
        backgroundImage: "./img/eve04.png",
        menuBackgroundColor: { r: 108, g: 13, b: 15 },
        text: [{
            id: "txt41",
            x: 0, y: 3, w: 2, h: 1
            },
            {
            id: "txt4",
            x: 4, y: 2, w: 2, h: 2
            },
            {
            html: '<h1>피자 알볼로</h1>',
            x: 3, y: 3, w: 1, h: 1
            }
        ],
        menuTarget: [
            { x: 2, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 3 },
            { x: 5, y: 0 }
        ]
        },
    { // page 5
    backgroundImage: "./img/eve05.png",
    menuBackgroundColor: { r: 108, g: 13, b: 15 },
    text: [{
        id: "txt41",
        x: 0, y: 3, w: 2, h: 1
        },
        {
        id: "txt4",
        x: 4, y: 2, w: 2, h: 2
        },
        {
        html: '<h1>sof&auml;lik</h1>',
        x: 3, y: 3, w: 1, h: 1
        }
    ],
    menuTarget: [
        { x: 2, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 3 },
        { x: 5, y: 0 }
    ]
    }]
});
}, 500);

// For a better World, this script is made from 100% post-consumer Recycled Pixels
