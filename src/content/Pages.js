/*
 *  -= Preload of Images =-
 *                              */

import ImageAccessify from "../assets/Accessify.gif"
import ImageCode from "../assets/code.avif"
import ImageDelVault from "../assets/DelVault.png"
import ImageDeviceListener from "../assets/DeviceListener.png"
import ImageEmonindowlocker from "../assets/EmonindowLocker.png"
import ImageMunilytics from "../assets/Munilytics.jpg"

/*
 *  -= Page Contents =-
 *                              */

export const pages = {

    /* English */
    en: {
        home: {
            title: "Welcome",
            content: [
                {
                    type: "image",
                    src: ImageCode,
                    alt: "Source code containing an SVG within HTML"
                },
                {
                    type: "paragraph",
                    text: "You have reached Emma's Hideout! Please take a look around."
                }
            ]
        },

        about: {
            title: "About me",
            content: [
                {
                    type: "subheader",
                    text: "I am Emma"
                },
                {
                    type: "image",
                    src: "https://avatars.githubusercontent.com/u/230901568?v=4",
                    alt: "An AI-generated image of me"
                },
                {
                    type: "paragraph",
                    text: "Open to both people and new challenges, I face the future with joy and optimism. " +
                        "I am described as flexible, positive, and open. With a broad foundation, I stand " +
                        "firmly in the IT world and look for positions where I can offer my expertise to " +
                        "improve my skills and other people's everyday lives."
                }
            ]
        },

        portfolio: {
            title: "Portfolio",
            content: [
                {
                    type: "image",
                    src: ImageAccessify,
                    alt: "An image of a green frog"
                },
                {
                    type: "modal",
                    label: "Accessify",
                    modalPopupText: "Accessify AI is a web accessibility scanning platform built with " +
                        ".NET services, a Next.js frontend, and .NET Aspire orchestration. " +
                        "It crawls sites, runs browser-based accessibility checks, streams scan " +
                        "progress in real time, and supports review and remediation workflows.",
                    modalLink: "https://github.com/KiddN7/Accessify",
                    modalVideoId: "oKyWKzdLgIo"
                },
                {
                    type: "image",
                    src: ImageDeviceListener,
                    alt: "An image of a green speaker"
                },
                {
                    type: "modal",
                    label: "Device Listener",
                    modalPopupText: "A program which allows you to play back the live input of an " +
                        "audio device. Useful for listening to Line-in devices, or to " +
                        "hear sidetone for your microphone.",
                    modalLink: "https://github.com/KiddN7/DeviceListener"
                },
                {
                    type: "image",
                    src: ImageMunilytics,
                    alt: "A picture of Stockholm"
                },
                {
                    type: "modal",
                    label: "Munilytics",
                    modalPopupText: "An analytics platform that allows local politicians to retrieve, analyze, " +
                        "and compare KPI data between municipalities.",
                    modalLink: "https://github.com/SunberryBlossom/Munilytics/"
                },
                {
                    type: "image",
                    src: ImageCode,
                    alt: "Source code containing an SVG within HTML"
                },
                {
                    type: "modal",
                    label: "Emonic",
                    modalPopupText: "A collection of mneumonic C# classes for .NET development.",
                    modalLink: "https://github.com/KiddN7/Emonic"
                },
                {
                    type: "image",
                    src: ImageEmonindowlocker,
                    alt: "The logo of the program DisplayFusion"
                },
                {
                    type: "modal",
                    label: "Emonindowlocker",
                    modalPopupText: "DisplayFusion C# scripts to disable accidental resizing of windows.",
                    modalLink: "https://github.com/KiddN7/Emonindowlocker"
                },
                {
                    type: "image",
                    src: ImageDelVault,
                    alt: "A title screen saying DelVault in ASCII art"
                },
                {
                    type: "modal",
                    label: "DelVault",
                    modalPopupText: "A role-playing game played in the terminal.",
                    modalLink: "https://github.com/KiddN7/DelVault"
                }
            ]
        }
    },




    /* Swedish */
    sv: {
        home: {
            title: "Välkommen",
            content: [
                {
                    type: "image",
                    src: ImageCode,
                    alt: "Källkod som innehåller en SVG i HTML"
                },
                {
                    type: "paragraph",
                    text: "Du har nått Emmas gömställe! Ta gärna en titt runt."
                }
            ]
        },

        about: {
            title: "Om mig",
            content: [
                {
                    type: "subheader",
                    text: "Jag är Emma"
                },
                {
                    type: "image",
                    src: "https://avatars.githubusercontent.com/u/230901568?v=4",
                    alt: "En AI-genererad bild av mig"
                },
                {
                    type: "paragraph",
                    text: "Öppen för både människor och nya utmaningar möter jag framtiden med glädje och optimism. " +
                        "Jag beskrivs som flexibel, positiv och öppen. Med en bred grund står jag stadigt i IT-världen " +
                        "och söker roller där jag kan bidra med min kompetens samtidigt som jag utvecklar mina färdigheter " +
                        "och förbättrar andra människors vardag."
                }
            ]
        },

        portfolio: {
            title: "Portfölj",
            content: [
                {
                    type: "image",
                    src: ImageAccessify,
                    alt: "En bild av en grön groda"
                },
                {
                    type: "modal",
                    label: "Accessify",
                    modalPopupText: "Accessify AI är en plattform för skanning av webbtillgänglighet som är uppbyggd med " +
                        ".NET-tjänster, ett Next.js-frontend och .NET Aspire-orkestrering. " +
                        "Den genomsöker webbplatser, utför webbläsarbaserade tillgänglighetskontroller, visar skanningsförloppet " +
                        "i realtid och stöder arbetsflöden för granskning och åtgärdande.",
                    modalLink: "https://github.com/KiddN7/Accessify",
                    modalVideoId: "oKyWKzdLgIo"
                },
                {
                    type: "image",
                    src: ImageDeviceListener,
                    alt: "En bild av en grön högtalare"
                },
                {
                    type: "modal",
                    label: "Device Listener",
                    modalPopupText: "Ett program som låter dig spela upp live-input från en ljudenhet. " +
                        "Användbart för att lyssna på Line-in-enheter eller höra sidetone från din mikrofon.",
                    modalLink: "https://github.com/KiddN7/DeviceListener"
                },
                {
                    type: "image",
                    src: ImageMunilytics,
                    alt: "En bild av Stockholm"
                },
                {
                    type: "modal",
                    label: "Munilytics",
                    modalPopupText: "En analysplattform som gör det möjligt för lokalpolitiker att hämta, analysera " +
                        "och jämföra KPI-data mellan kommuner.",
                    modalLink: "https://github.com/SunberryBlossom/Munilytics/"
                },
                {
                    type: "image",
                    src: ImageCode,
                    alt: "Källkod som innehåller en SVG i HTML"
                },
                {
                    type: "modal",
                    label: "Emonic",
                    modalPopupText: "En samling hjälpklasser i C# för .NET-utveckling.",
                    modalLink: "https://github.com/KiddN7/Emonic"
                },
                {
                    type: "image",
                    src: ImageEmonindowlocker,
                    alt: "Logotypen för programmet DisplayFusion"
                },
                {
                    type: "modal",
                    label: "Emonindowlocker",
                    modalPopupText: "DisplayFusion-skript i C# för att förhindra oavsiktlig storleksändring av fönster.",
                    modalLink: "https://github.com/KiddN7/Emonindowlocker"
                },
                {
                    type: "image",
                    src: ImageDelVault,
                    alt: "En titelskärm där det står DelVault i ASCII-grafik"
                },
                {
                    type: "modal",
                    label: "DelVault",
                    modalPopupText: "Ett rollspel som spelas direkt i terminalen.",
                    modalLink: "https://github.com/KiddN7/DelVault"
                }
            ]
        }
    },




    /* Japanese / 日本語 */
    jp: {
        home: {
            title: "ようこそ",
            content: [
                {
                    type: "image",
                    src: ImageCode,
                    alt: "HTML内にSVGを含むソースコード"
                },
                {
                    type: "paragraph",
                    text: "エマの隠れ家へようこそ！どうぞごゆっくりご覧ください。"
                }
            ]
        },

        about: {
            title: "自己紹介",
            content: [
                {
                    type: "subheader",
                    text: "エマです"
                },
                {
                    type: "image",
                    src: "https://avatars.githubusercontent.com/u/230901568?v=4",
                    alt: "AIで生成した私の画像"
                },
                {
                    type: "paragraph",
                    text: "人との出会いにも新しい挑戦にも前向きで、喜びと楽観をもって未来に向き合っています。" +
                        "周囲からは、柔軟でポジティブ、そしてオープンな性格だと言われます。" +
                        "幅広い基礎を土台にIT業界にしっかりと根を下ろしており、自分の専門性を活かしながら" +
                        "スキルを磨き、人々の日常をより良くできる仕事を探しています。"
                }
            ]
        },

        portfolio: {
            title: "ポートフォリオ",
            content: [
                {
                    type: "image",
                    src: ImageAccessify,
                    alt: "緑色のカエルの画像"
                },
                {
                    type: "modal",
                    label: "Accessify",
                    modalPopupText: "Accessify AIは、.NETサービス、Next.jsフロントエンド、.NET Aspireによる" +
                        "オーケストレーションで構築された、ウェブアクセシビリティ診断プラットフォームです。" +
                        "サイトをクロールしてブラウザベースのアクセシビリティチェックを実行し、スキャンの進捗を" +
                        "リアルタイムで配信するほか、レビューと修正のワークフローにも対応しています。",
                    modalLink: "https://github.com/KiddN7/Accessify",
                    modalVideoId: "oKyWKzdLgIo"
                },
                {
                    type: "image",
                    src: ImageDeviceListener,
                    alt: "緑色のスピーカーの画像"
                },
                {
                    type: "modal",
                    label: "Device Listener",
                    modalPopupText: "オーディオデバイスのライブ入力をそのまま再生できるプログラムです。" +
                        "ライン入力機器の音を聴いたり、マイクのサイドトーンを確認したりするのに便利です。",
                    modalLink: "https://github.com/KiddN7/DeviceListener"
                },
                {
                    type: "image",
                    src: ImageMunilytics,
                    alt: "ストックホルムの写真"
                },
                {
                    type: "modal",
                    label: "Munilytics",
                    modalPopupText: "地方政治家が自治体間のKPIデータを取得・分析・比較できる" +
                        "分析プラットフォームです。",
                    modalLink: "https://github.com/SunberryBlossom/Munilytics/"
                },
                {
                    type: "image",
                    src: ImageCode,
                    alt: "HTML内にSVGを含むソースコード"
                },
                {
                    type: "modal",
                    label: "Emonic",
                    modalPopupText: ".NET開発のための、覚えやすいC#クラス集です。",
                    modalLink: "https://github.com/KiddN7/Emonic"
                },
                {
                    type: "image",
                    src: ImageEmonindowlocker,
                    alt: "DisplayFusionというソフトのロゴ"
                },
                {
                    type: "modal",
                    label: "Emonindowlocker",
                    modalPopupText: "ウィンドウの意図しないサイズ変更を防ぐ、DisplayFusion用のC#スクリプトです。",
                    modalLink: "https://github.com/KiddN7/Emonindowlocker"
                },
                {
                    type: "image",
                    src: ImageDelVault,
                    alt: "アスキーアートで「DelVault」と書かれたタイトル画面"
                },
                {
                    type: "modal",
                    label: "DelVault",
                    modalPopupText: "ターミナルで遊ぶロールプレイングゲームです。",
                    modalLink: "https://github.com/KiddN7/DelVault"
                }
            ]
        }
    }
}