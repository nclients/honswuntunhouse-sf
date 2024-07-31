---
tag: ""
title: "HON’S WUN-TUN HOUSE - Best Food Today"
favicon: "favicon.ico"
logo: "logo_en.png"
primaryColor: "#D70000" # logo color
secondaryColor: "#000000"
primaryColorScheme: "dark" # dark | light
secondaryColorScheme: "dark"
dataGlfCuid: ""
dataGlfRuid: ""
orderOnlineLink: "" # For multiple restaurants, please leave this blank.
tableReservationLink: ""
tel: "" # For multiple restaurants, please leave this blank.

# banner:
#   text: 
#     - boldText: "🥳 Special Offer"
#     - text: "15 PC of Head On Shrimp + 1 Free Soda + Choose a Free Item:"
#     - smText: "Steam Rice (10 oz cup) / Garlic Noodles (10 oz cup) / Cajun Fries
#               (10 oz cup) only $13.50. Available Monday to Friday, 12 PM to 3
#               PM."
#     - text: ""
#   # add more text...
#   textColor: "#ffffff"
#   bgColor: "#FF2D2F"
#   bgOpacity: "1" # 0~1

# header
header:
  logoSize: 55
  textAfterLogo: 
    text: ""
    size: 16
    color: ""
  bgColor: "#000000"
  bgOpacity: "0.8" # 0~1
  menuTextColor: "#ffffff"
  menu:
    - { text: "Home", link: "/" }
    - { text: "Gallery", link: "/#gallery" }
    - { text: "Order Online", link: "/order-online" }
    - { text: "About Us", link: "/#about-us" }
    - { text: "Contact Us", link: "/order-online/#contact-us" }
    - { text: "中文", link: "/zh-cn" }
  addOrderOnlineBtn: false
  orderOnlineBtnInsteadText: ""
  addTableReservationBtn: false
  tableReservationBtnInsteadText: ""
  addTelBtn: false
  telTextColor: "#ffffff"
  addOtherBtn: true
  otherBtnInsteadText: "See MENU & Order"
  otherBtnHref: "/order-online"

sections:
# Hero
  - type: "hero" 
    id: ""
    height: "90" # Conditionally use only when sectionType is imgBg
    sectionType: "imgWithText" # video | imgWithText | imgBg
    bgVideoType: "" # youtube | vimeo | gjw
    bgVideoId: ""
    bgImg: "honswuntunhouse_sf_backgroundImg.webp"
    bgImgAlt: "hon's wun tun house SF background image"
    bgColor: ""
    bgOpacity: "" # 0~1
    title: 
      - "HON’S WUN-TUN HOUSE"
    titleColor: "#ffffff"
    description: 
      - "Since 1972"
      - "Authentic Hong Kong Style Wun Tun Noodle."
    descriptionColor: "#ffffff"

    addOrderOnlineBtn: false
    orderOnlineBtnInsteadText: ""
    addTableReservationBtn: false
    tableReservationBtnInsteadText: ""
    showOtherBtn: true
    btn1Text: "" 
    btn1Href: "" 
    btn2Text: "See MENU & Order" 
    btn2Href: "/order-online" 
    bannerImg: "honswuntunhouse_sf_dumplings.webp"
    imgAlt: "HON’S WUN-TUN HOUSE"
    imgPosition: "imgRight" # imgLeft | imgRight
    bannerMarginTopMobile: 96
    imgRounded: "" # sm | md | lg | xl | 2xl | 3xl | full
    extraStyleToTheImage: "sm:my-20"
   
    bottomRounded: "lg" # sm | md | lg | xl | 2xl | 3xl | full
    # bottomInfo: "We offer Takeout"

# # Video
#   - type: "video"
#     id: ""
#     title: 
#       - "A Corner of Tradition and Flavor"
#     description: 
#       - "From the heart of Newark, CA, Crabby Crabby Restaurant is a corner where tradition meets flavor. Every corner of our restaurant is infused with authenticity, from the décor to every bite we serve." 
#     videoType: "vimeo" # vimeo | gjw | youtube
#     videoId: 
#       - "963713403"
#       - "917321697"
#     isOnlyDisplayOnMobile: false

# Gallery  
  - type: "gallery"
    id: "gallery"
    mode: 1 # 1 - 3
    bgImg: ""
    bgImgAlt: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title: 
      - "Food At Hon’s Wun-Tun House"
    titleColor: "#000000"
    description: 
      - "Enjoy delicious noodles and authentic Chinese cuisine"
    descriptionColor: "#333333"
    folderPath: "gallery"
    showImgName: true # true | false
    imgNameColor: "#ffffff"
    menuItemImgRounded: "3xl" # sm | md | lg | xl | 2xl | 3xl | full


# textBlock 
  - type: "textBlock" 
    id: "about-us"
    bgImg: ""
    bgImgAlt: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title: 
      - "About Us"
    titleColor: "#000000"
    description: 
      - "Established in 1972."
      - "Hon’s Wun-Tun House has served the noodle lovers for almost half a century in San Francisco Chinatown. "
      - "Located at the prime location just minutes away from the financial district, Hon’s Wun-Tun House has preserved its authentic taste of the Hong Kong style wonton noodle soup, which is praised by all the noodle lovers not only from the local area, but also from around the world. The restaurant will continue serving its customers with the best quality of wonton noodle soup and many more."

      # - text: "We serve Imperial Soup dishes plus other Asian dishes. Feel free to message us about inquiries! We'll get back to you as soon as we can!"
    descriptionColor: "#000000"

# # feature - 2
#   - type: "feature" 
#     id: "contact-us"
#     height: "100" # Conditionally use only when sectionType is imgBg
#     sectionType: "imgWithText" # video | imgWithText | imgBg
#     bgVideoType: "" # youtube | vimeo | gjw
#     bgVideoId: ""
#     bgImg: ""
#     bgImgAlt: ""
#     bgColor: ""
#     bgOpacity: "" # 0~1
#     title: 
#       - "Store 1: Kearny St"
#     titleColor: "#000000"
#     description: 
#       - "Opening Hours: Mon-Sat 10:30 AM-7:00 PM"
#     descriptionColor: "#000000"
#     # title2: 
#     #   - "A Corner of Tradition and Flavor"
#     # title2Color: "#000000"
#     # description2: 
#     #   - "From the heart of Newark, CA, Crabby Crabby Restaurant is a corner where tradition meets flavor. Every corner of our restaurant is infused with authenticity, from the décor to every bite we serve."
#     #   # - text: "We serve Imperial Soup dishes plus other Asian dishes. Feel free to message us about inquiries! We'll get back to you as soon as we can!"
#     # description2Color: "#000000"
#     # title2: 
#     #   - "Committed to the Community"
#     # title2Color: "#000000"
#     # description2: 
#     #   - "We are proud to be an active part of the Newark, CA community. Through special events, collaborations with local venues and participation in community initiatives, Crabby Crabby Restaurant seeks to strengthen the ties that bind us together."
#     # description2Color: "#000000"
#     isTextAlignCenter: false

#     addOrderOnlineBtn: false
#     orderOnlineBtnInsteadText: "See MENU & Order"
#     addTableReservationBtn: false
#     tableReservationBtnInsteadText: ""
#     showOtherBtn: true
#     btn1Text: "Order online from Kearny St store" 
#     btn1Href: "https://onlineorder.bestfood.today/Restaurant/details/MTAwNDA=" 
#     btn2Text: "" 
#     btn2Href: "" 

#     bannerImg: ""
#     imgAlt: ""
#     imgPosition: "" # imgLeft | imgRight
    
#     map: true
#     url: "https://maps.app.goo.gl/nZ57LDJrofANer8J6"
#     iframeUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d394.10234978168285!2d-122.4046165!3d37.7942861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b1948e55b%3A0xcb3994bcd586810e!2sHon&#39;s%20Wun-Tun%20House!5e0!3m2!1sen!2sus!4v1722231832722!5m2!1sen!2sus"
#     addTelBtn: true
#     tel: "4154333966"
#     telInsteadText: "Call: (415) 433-3966"
#     getDirectionBtnInsteadText: ""
    
    
#     bottomRounded: "" # sm | md | lg | xl | 2xl | 3xl | full (only for background)


# # feature - 3
#   - type: "feature" 
#     id: ""
#     height: "100" # Conditionally use only when sectionType is imgBg
#     sectionType: "imgWithText" # video | imgWithText | imgBg
#     bgVideoType: "" # youtube | vimeo | gjw
#     bgVideoId: ""
#     bgImg: ""
#     bgImgAlt: ""
#     bgColor: ""
#     bgOpacity: "" # 0~1
#     title: 
#       - "Store 2 : Washington St"
#     titleColor: "#000000"
#     description: 
#       - "Opening Hours: Mon-Fri 8:30 AM-8:00 PM, Sat-Sun 9:00 AM-8:30 PM"
#     descriptionColor: "#000000"

#     addOrderOnlineBtn: false
#     orderOnlineBtnInsteadText: "See MENU & Order"
#     addTableReservationBtn: false
#     tableReservationBtnInsteadText: ""
#     showOtherBtn: true
#     btn1Text: "Order online from Washington St" 
#     btn1Href: "https://onlineorder.bestfood.today/Restaurant/details/MTAwNDE=" 
#     btn2Text: "" 
#     btn2Href: "" 

#     bannerImg: ""
#     imgAlt: ""
#     imgPosition: "" # imgLeft | imgRight

#     map: true
#     url: "https://maps.app.goo.gl/HDDb5yFih4S8TmDe7"
#     iframeUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d197.0491990412703!2d-122.4063506!3d37.7950269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815e4be59617%3A0x87622e118f7e38a2!2sHon%E2%80%99s%20Wun-Tun%20House!5e0!3m2!1sen!2sjp!4v1722232541079!5m2!1sen!2sjp"
#     addTelBtn: true
#     tel: "4153973232"
#     telInsteadText: "Call: (415) 397-3232"
#     tel2: "4153972887"
#     tel2InsteadText: "Call: (415) 397-2887"
#     getDirectionBtnInsteadText: ""
   
#     bottomRounded: "3xl" # sm | md | lg | xl | 2xl | 3xl | full

# textBlock - Information
  - type: "textBlock" 
    id: ""
    noMarginTop: false
    bgImg: "/gallery/Beef Bitter Melon Pan-Fried Vermicelli.webp"
    bgImgAlt: "Crabby Crabby Newark - Best Food Today"
    bgColor: "#000"
    bgOpacity: "0.4" # 0~1
    title: 
      - "NEW! Online Ordering"
    titleColor: "#ffffff"
    description: 
      - "Online ordering NOW enabled for pick-up. Just tell us what you want and we'll prepare it as fast as we can. All orders are manually confirmed by us directly. Find out in real-time when your food is ready. All orders are manually confirmed by us in real-time. Watch on-screen when your food is ready for pickup."
    descriptionColor: "#ffffff"
  
# # map  
#   - type: "map"
#     id: "contact-us"
#     mode: "fullWidth" # full-width | ...
#     url: "https://maps.app.goo.gl/gHferfbrQsJXDHNX9"
#     iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2010723950107!2d-122.05385532436703!3d37.55032622505781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf25977c4139%3A0x65a0766c424ad6dc!2sCrabby%20Crabby%20Newark!5e0!3m2!1sen!2sjp!4v1721832800644!5m2!1sen!2sjp"
#     addTelBtn: true
#     getDirectionBtnInsteadText: ""
#     telInsteadText: ""
 
  # - type: "modal"
  #   bgColor: "#333"
  #   bgOpacity: "0.1" # 0~1
  #   title: 
  #     - "🥳 Special Offers"
  #   titleColor: "#FF2D2F"
  #   titleSize: 24
  #   description: ""
  #   descriptionColor: ""
  #   descriptionSize: 16
  #   imgName: "offer.png"
  #   imgAlt: "🥳 Special Offer 15 PC of Head On Shrimp + 1 Free Soda + Choose a Free Item: Steam Rice (10 oz cup) / Garlic Noodles (10 oz cup) / Cajun Fries (10 oz cup) only $13.50. Available Monday to Friday, 12 PM to 3 PM."
  #   buttonText: "Order Now!"

footer:
  mode: 1 # 1
  noMarginTop: true
  bgImg: ""
  bgImgAlt: ""
  bgColor: "#000000"
  bgOpacity: "0.9" # 0~1
  # openingHours: 
  #   - "Monday to Friday: Lunch 11:30 AM to 3:00 PM, Dinner 5:00 PM to 9:00 PM"
  #   - "Saturday and Sunday: 12:00 PM to 9:00 PM"

  isLogo: true
  logoSize: 100
  menu:
    - { text: "Home", link: "/" }
    - { text: "Gallery", link: "/#gallery" }
    - { text: "Order Online", link: "/order-online" }
    - { text: "About Us", link: "/#about-us" }
    - { text: "Contact Us", link: "/order-online/#contact-us" }
    - { text: "中文", link: "/zh-cn" }

  FB: false
  FBLink: ""
  IG: false
  IGLink: ""
  X: false
  XLink: ""
  youtube: false
  youtubeLink: ""
  yelp: false
  yelpLink: ""
  paymentMethod: "" #,alipay,applePay,cash,discover,googlePay,jcb,maestro,mastercard,stripe,unionPay,visa,weChatPay,payPal

  # seo:
  #   metaDescription: "Crabby Crabby Newark is a premier seafood restaurant located at 6225 Jarvis Ave, Newark, CA 94560. Enjoy fresh and delicious seafood dishes in a vibrant and friendly atmosphere."
  #   keywords: "Crabby Crabby Newark, seafood restaurant Newark, best seafood Newark CA, fresh seafood Newark, family dining Newark, special occasion restaurant Newark, Newark CA restaurants, seafood dining Bay Area, Crabby Crabby menu"
  #   img: "/gallery/Seafood_Whole_Dungeness_Crab.webp"
  #   thisPageUrl: "https://crabbynewark.com/"
  #   locale: "en_US" # zh_TW | zh_CN




# Do not change the content below
layout: ../../theme/theme/layouts/main.astro
---
