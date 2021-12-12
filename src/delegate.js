const data = {
    "title": "NuBirth",
    "style": {
        "primary": {
            "color": "white-text",
            "background": "deep-purple lighten-3"
        },
        "secondary": {
            "color": "white-text",
            "background": "grey lighten-3"
        }
    },
    "brand": {
        "logo": {
            "alt": "logo",
            "src": "https://dttdrlk9qx747.cloudfront.net/images/logos/logo.2012181350185.png"
        },
        "contact": {
            "email": "info@utahcountertops.com",
            "tel": "4356719245",
            "address": {
                "link": "https://www.google.com/maps/dir//Utah+Countertops,+358+W+5900+S,+Murray,+UT+84107/@40.6433467,-111.9022248,17z/",
                "text": "123 Fake Street"
            }
        }
    },
    "nav": {
        "links": {
            "desktop": [
                {
                    "text": "Home",
                    "link": "/",
                    "class": " "
                },
                // {
                //     "text": "Contact",
                //     "link": "#contact",
                //     "class": "modal-trigger "
                // },
                {
                    "text": "Contact",
                    "link": "#contactForm",
                    "class": "modal-trigger "
                },
                {
                    "text": "About",
                    "link": "/about",
                    "class": ""
                }
            ],
            "mobile": [
                {
                    "text": "phone",
                    "link": "#contact",
                    "class": "modal-trigger fab btn-floating btn-large waves-effect waves-light ",
                    

                },
                {
                    "text": "Home",
                    "link": "/",
                    "class": " ",
                    "icon": "home"
                },
                {
                    "text": "About",
                    "link": "/about",
                    "class": "",
                    "icon": "info"
                },
                {
                    "text": "Contact",
                    "link": "#contactForm",
                    "class": "modal-trigger ",
                    "icon": "email"
                    
                }
            ]
        }
    },
    "carousel": {
        "slides": [
            {
                "title": "title2",
                "description": "description",
                "img": require("./media/slider/2.jpeg").default,
                "action": {
                    "class": "",
                    "href": ""
                }
            },
            {
                "title": "title3",
                "description": "description",
                "img": require("./media/slider/3.jpeg").default,
                "action": {
                    "class": "",
                    "href": ""
                }
            },
            {
                "title": "title4",
                "description": "description",
                "img": require("./media/slider/4.jpeg").default,
                "action": {
                    "class": "",
                    "href": ""
                }
            },
            {
                "title": "title5",
                "description": "description",
                "img": require("./media/slider/5.jpeg").default,
                "action": {
                    "class": "",
                    "href": ""
                }
            },

        ]
    },
    "gridlist": {
        "title":"Personalized Home Care Services.",
        "description":"At Nu-Birth home services, it is our mission to provide high quality services at an affordable rates that exceeds industry standards.",
        "items": [
            {
                "title": "Seniors",
                "description": "NuBirth Home Care was founded on the principle of providing the best  care for the elderly to adults in need. Our mission is rooted  in providing key non-medical services to enable older people to age with dignity in  their homes.",
                "img": require("./media/slider/4.jpeg").default,
                "action": {
                    "class": "",
                    "href": ""
                }
            },
            {
                "title": "maternity",
                "description": "We work hard to provide patients with care that is consistent with safety and effectiveness. Patients receive individualized care that considers their personal needs and the needs of the unborn child.",
                "img": require("./media/slider/maternity.jpeg").default,
                "action": {
                    "class": "",
                    "href": ""
                }
            },
            {
                "title": "Recuperation",
                "description": "Our caregivers can support your recovery efforts and provide you with comfort and help. Whether you need help here and there, or need help 24 hours a day, we're always available to meet your individual needs.",
                "img": require("./media/slider/recuperation.jpg").default,
                "action": {
                    "class": "",
                    "href": ""
                }
            },
            {
                "title": "Disabled",
                "description": "Home nurses provide reliable one-on-one care for people with special needs, regardless of age or illness. Our care team provides flexible hourly and 24-hour services to provide relatives with  experienced caregivers to meet the individual needs of the family.",
                "img": require("./media/slider/disabled.jpg").default,
                "action": {
                    "class": "",
                    "href": ""
                }
            },
            {
                "title": "Veterans",
                "description": "There are various home care programs and services tailored to meet the specific needs of veterans. From personal care to  appointments to short-term care services, a home-based professional caregiver will meet all your care needs.",
                "img": require("./media/slider/veteran.jpg").default,
                "action": {
                    "class": "",
                    "href": ""
                }
            },
            {
                "title": "Family",
                "description": "With the burdons that come with a busy schedule, it sometimes can be hard to make sure your loved ones are safe. Our Team is here to assure your family's safety and needs are put first.",
                "img": require("./media/slider/family.jpg").default,
                "action": {
                    "class": "",
                    "href": ""
                }
            },
        ]
    }
}
export default data;